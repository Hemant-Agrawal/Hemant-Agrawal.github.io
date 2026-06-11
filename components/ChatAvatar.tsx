"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import "./chat-avatar.css";

type Role = "user" | "assistant";
type Message = { role: Role; content: string };

const STORAGE_KEY = "ha-bot-history-v1";
const TEASER_KEY = "ha-bot-teaser-dismissed-v1";
const MAX_HISTORY = 40;

const WELCOME = `Hey! 👋 I'm <strong>Hemant's AI assistant</strong> — I can answer questions about his experience, stack, AI work, or how to get in touch. What would you like to know?`;

const SUGGESTIONS = [
  "Tell me about Hemant",
  "What's his stack?",
  "AI projects?",
  "How can I contact him?",
];

// Facts + persona live in the Envoy backend (built per-request from the
// profile data). This component is just the UI shell; it no longer ships any
// hardcoded prompt or facts.

function loadHistory(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(history: Message[]) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(history.slice(-MAX_HISTORY)),
    );
  } catch {
    // ignore
  }
}

function escapeUser(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML.replace(/\n/g, "<br>");
}

async function callChatApi(
  endpoint: string,
  payload: { messages: Message[] },
  signal: AbortSignal,
): Promise<string> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal,
  });
  if (!res.ok || !res.body) throw new Error(`Chat endpoint ${res.status}`);

  // Envoy streams the Vercel AI SDK data-stream protocol: newline-delimited
  // `<type>:<json>` frames. `0:` carries a text chunk; `3:` signals an error.
  // ChatAvatar shows one reply after the typing indicator, so we accumulate
  // the full text and return it once the stream closes.
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  let buffer = "";

  const handleLine = (line: string) => {
    if (line.startsWith("0:")) {
      try {
        text += JSON.parse(line.slice(2));
      } catch {
        // ignore malformed chunk
      }
    } else if (line.startsWith("3:") && !text) {
      throw new Error("stream error");
    }
  };

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) handleLine(line);
  }
  if (buffer) handleLine(buffer);

  if (!text.trim()) throw new Error("Empty reply");
  return text.trim();
}

const FALLBACK_REPLY = `I can't reach my brain from this environment yet. You can still <a href="/contact/">contact Hemant directly</a> — he'll get back to you fast.`;
const ERROR_REPLY = `Something went sideways. You can try again, or reach Hemant on <a href="/contact/">the contact page</a>.`;

export function ChatAvatar() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Message[]>([]);
  const [pending, setPending] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [draft, setDraft] = useState("");
  const [hydrated, setHydrated] = useState(false);

  const logRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const router = useRouter();

  const endpoint = process.env.NEXT_PUBLIC_CHAT_API_URL || "";

  useEffect(() => {
    setHistory(loadHistory());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveHistory(history);
  }, [history, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(TEASER_KEY) === "1";
    } catch {
      // ignore
    }
    if (dismissed) return;
    if (window.matchMedia("(max-width: 720px)").matches) return;
    const showT = window.setTimeout(() => {
      if (!open) setShowTeaser(true);
    }, 1800);
    const hideT = window.setTimeout(() => setShowTeaser(false), 9000);
    return () => {
      window.clearTimeout(showT);
      window.clearTimeout(hideT);
    };
  }, [hydrated, open]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 240);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [history, pending, open]);

  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const dismissTeaser = useCallback((persist: boolean) => {
    setShowTeaser(false);
    if (persist) {
      try {
        window.localStorage.setItem(TEASER_KEY, "1");
      } catch {
        // ignore
      }
    }
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
    dismissTeaser(false);
  }, [dismissTeaser]);

  const autoSizeInput = useCallback(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 110)}px`;
  }, []);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || pending) return;
      setDraft("");
      window.requestAnimationFrame(autoSizeInput);

      const next: Message[] = [...history, { role: "user", content: text }];
      setHistory(next);
      setPending(true);

      if (!endpoint) {
        setPending(false);
        setHistory((h) => [...h, { role: "assistant", content: FALLBACK_REPLY }]);
        return;
      }

      abortRef.current?.abort();
      const ctrl = new AbortController();
      abortRef.current = ctrl;

      try {
        const reply = await callChatApi(endpoint, { messages: next }, ctrl.signal);
        setHistory((h) => [...h, { role: "assistant", content: reply }]);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        console.warn("[ha-bot]", err);
        setHistory((h) => [...h, { role: "assistant", content: ERROR_REPLY }]);
      } finally {
        setPending(false);
      }
    },
    [autoSizeInput, endpoint, history, pending],
  );

  const onTextareaKey = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send(draft);
      }
    },
    [draft, send],
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setHistory([]);
    setPending(false);
  }, []);

  const onBubbleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = (e.target as HTMLElement).closest("a") as
        | HTMLAnchorElement
        | null;
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        href.startsWith("http://") ||
        href.startsWith("https://")
      )
        return;
      e.preventDefault();
      setOpen(false);
      router.push(href);
    },
    [router],
  );

  const renderBubbles = useMemo(() => {
    return history.map((m, i) => {
      const html = m.role === "user" ? escapeUser(m.content) : m.content;
      return (
        <div
          key={i}
          className={`ha-msg ${m.role === "user" ? "user" : "bot"}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    });
  }, [history]);

  return (
    <div id="ha-bot-root">
      <div
        className={`ha-bot-teaser${showTeaser ? " show" : ""}`}
        role="status"
        onClick={(e) => {
          if ((e.target as HTMLElement).dataset.role === "x") return;
          handleOpen();
        }}
      >
        Hi! Ask me anything about Hemant.
        <button
          type="button"
          className="x"
          data-role="x"
          aria-label="Dismiss"
          onClick={(e) => {
            e.stopPropagation();
            dismissTeaser(true);
          }}
        >
          ✕
        </button>
      </div>

      <div
        className={`ha-bot-panel${open ? " open" : ""}`}
        role="dialog"
        aria-label="Chat with Hemant's portfolio assistant"
        aria-hidden={!open}
      >
        <div className="ha-bot-head">
          <div className="av" aria-hidden="true">
            <span className="g">HA</span>
          </div>
          <div className="meta">
            <div className="title">Ask about Hemant</div>
            <div className="sub">
              <i>●</i> SDE 3 · ASSISTANT
            </div>
          </div>
          <div className="actions">
            <button
              type="button"
              className="ico-btn"
              title="Clear conversation"
              aria-label="Clear conversation"
              onClick={reset}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v5h5" />
              </svg>
            </button>
            <button
              type="button"
              className="ico-btn"
              title="Close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="ha-bot-log"
          ref={logRef}
          aria-live="polite"
          onClick={onBubbleClick}
        >
          <div
            className="ha-msg bot"
            dangerouslySetInnerHTML={{ __html: WELCOME }}
          />
          {renderBubbles}
          {pending && (
            <div className="ha-typing" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        {history.length === 0 && (
          <div className="ha-chips">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className="ha-chip"
                onClick={() => send(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="ha-bot-foot">
          <textarea
            ref={inputRef}
            className="ha-input"
            rows={1}
            placeholder="Ask anything about Hemant…"
            aria-label="Message"
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              autoSizeInput();
            }}
            onKeyDown={onTextareaKey}
          />
          <button
            type="button"
            className="ha-send"
            aria-label="Send"
            disabled={pending || !draft.trim()}
            onClick={() => send(draft)}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <button
        type="button"
        className="ha-bot-fab"
        aria-label="Open chat assistant"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : handleOpen())}
      >
        <span className="ring" aria-hidden="true" />
        <span className="glyph">HA</span>
        <span className="status" aria-hidden="true" />
      </button>
    </div>
  );
}
