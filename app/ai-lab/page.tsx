import type { Metadata } from "next";
import { Orb } from "./Orb";
import "./ailab.css";

export const metadata: Metadata = {
  title: "AI Lab — Hemant Agrawal",
  description:
    "Where AI merges with frontend. Claude · MCP · n8n — reasoning, tools, orchestration on a self-hosted stack.",
};

type StackCol = {
  title: string;
  desc: string;
  rows: { name: string; lvl: string }[];
};

const STACK: StackCol[] = [
  {
    title: "Frontend",
    desc: "// surface · interactions",
    rows: [
      { name: "React.js", lvl: "expert" },
      { name: "Next.js", lvl: "expert" },
      { name: "Tailwind CSS", lvl: "expert" },
      { name: "TypeScript", lvl: "strong" },
      { name: "HTML5 · CSS", lvl: "expert" },
    ],
  },
  {
    title: "Backend",
    desc: "// services · contracts",
    rows: [
      { name: "Node · Express", lvl: "strong" },
      { name: "Django Admin", lvl: "working" },
      { name: "Docker · Portainer", lvl: "strong" },
      { name: "REST endpoints", lvl: "expert" },
      { name: ".NET Framework", lvl: "working" },
    ],
  },
  {
    title: "DevOps / QA",
    desc: "// reliability · velocity",
    rows: [
      { name: "GitLab CI", lvl: "expert" },
      { name: "Google Cloud", lvl: "strong" },
      { name: "Playwright", lvl: "strong" },
      { name: "Jest · RTL", lvl: "expert" },
      { name: "Storybook · PWA", lvl: "strong" },
    ],
  },
  {
    title: "AI Layer",
    desc: "// next frontier",
    rows: [
      { name: "Claude (Anthropic)", lvl: "top skill" },
      { name: "MCP servers", lvl: "strong" },
      { name: "n8n · Agentic", lvl: "strong" },
      { name: "OpenAI Codex", lvl: "top skill" },
      { name: "Prompt · GenAI", lvl: "strong" },
    ],
  },
];

export default function AiLabPage() {
  return (
    <div className="page" data-screen-label="AI Lab">
      <div className="page-head reveal">
        <span className="lab">04 — AI LAB</span>
        <h1>
          Where I&apos;m pointed <span className="accent">next.</span>
        </h1>
        <p className="lead">
          &ldquo;Currently exploring how AI can merge with frontend to create
          delightful experiences.&rdquo; That line from my profile is the work —
          here&apos;s what it looks like.
        </p>
      </div>

      <section className="ai-hero">
        <div>
          <span className="eyebrow">PRINCIPLE</span>
          <h2>
            The UI <em>is</em> the prompt.
          </h2>
          <p className="lead-p">
            Every click, scroll and dwell is signal. A good AI-native interface
            uses that signal to compress steps — not to bolt a chatbot onto a
            finished screen. I&apos;m building toward product surfaces where
            intelligence is ambient, not a separate tab.
          </p>
          <blockquote className="pq" style={{ marginTop: 20 }}>
            Claude, MCP and n8n are the trio I&apos;m betting on — reasoning,
            tools, and orchestration. The future is agentic, and the front-end is
            the surface where it lands.
            <cite>— Hemant</cite>
          </blockquote>

          <div className="ai-bullets">
            <div className="ai-bullet">
              <span className="ix">01</span>
              <div>
                <h5>Claude-powered product surfaces</h5>
                <p>
                  Using Claude as the reasoning layer for AI-assisted UX — smart
                  defaults, inline suggestions, adaptive empty states. Not a chat
                  tab; an ambient layer.
                </p>
              </div>
            </div>
            <div className="ai-bullet">
              <span className="ix">02</span>
              <div>
                <h5>MCP servers as first-class tools</h5>
                <p>
                  Building custom Model Context Protocol servers that expose
                  real tools and data to LLMs — the foundation of every reliable
                  agent I&apos;m shipping.
                </p>
              </div>
            </div>
            <div className="ai-bullet">
              <span className="ix">03</span>
              <div>
                <h5>Agentic workflows with n8n</h5>
                <p>
                  n8n is my agent orchestrator — chaining LLM calls, tools and
                  human-in-the-loop steps into workflows that actually run.
                  Hosted in my homelab.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Orb />
      </section>

      <div className="term reveal" aria-hidden="true">
        <div className="bar">
          <span className="led l1" />
          <span className="led l2" />
          <span className="led l3" />
          <span className="term-name">~/lab · ai-frontend.tsx</span>
        </div>
        <pre className="term-body">
          <span className="com">{`// observe → suggest → confirm`}</span>
          {"\n"}
          <span className="pmt">›</span> <span className="mut">user.context</span> = collect(events, route)
          {"\n"}
          <span className="pmt">›</span> <span className="mut">draft</span>        = llm.suggest(context)
          {"\n"}
          <span className="pmt">›</span> <span className="mut">render</span>       = ui.inline(draft)
          {"\n"}
          <span className="pmt">›</span> <span className="ok">✓</span> shipped <span className="vio">tool:autocomplete-form</span>  <span className="com">{`// 142ms`}</span>
          {"\n"}
          <span className="pmt">›</span> <span className="ok">✓</span> shipped <span className="vio">ui:smart-empty-state</span>    <span className="com">{`// streaming`}</span>
          {"\n"}
          <span className="pmt">›</span> <span className="blink" />
        </pre>
      </div>

      <div className="page-head reveal" style={{ paddingTop: 80, marginBottom: 0 }}>
        <span className="lab">TOOLBOX</span>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginTop: 12 }}>
          My stack, by layer.
        </h2>
      </div>

      <div className="stack-grid reveal">
        {STACK.map((col) => (
          <div className="stack-col" key={col.title}>
            <h4>{col.title}</h4>
            <div className="desc">{col.desc}</div>
            {col.rows.map((r) => (
              <div className="row" key={r.name}>
                <span>{r.name}</span>
                <span className="lvl">{r.lvl}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
