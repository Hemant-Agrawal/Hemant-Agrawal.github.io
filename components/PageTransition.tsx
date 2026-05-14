"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Ctx = { trigger: (label?: string) => void };

const TransitionCtx = createContext<Ctx>({ trigger: () => {} });

export function usePageTransition() {
  return useContext(TransitionCtx);
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState("Loading");
  const showStartRef = useRef(0);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPathRef = useRef(pathname);

  const trigger = useCallback((next?: string) => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setLabel(next || "Loading");
    setShow(true);
    showStartRef.current = performance.now();
  }, []);

  useEffect(() => {
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;

    const elapsed = performance.now() - showStartRef.current;
    const minVisible = 350;
    const remaining = Math.max(0, minVisible - elapsed);

    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShow(false), remaining + 80);

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [pathname]);

  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setShow(false);
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  useEffect(() => {
    const ROUTES: Record<string, string> = {
      "/": "Home",
      "/experience": "Experience",
      "/projects": "Projects",
      "/ai-lab": "AI Lab",
      "/homelab": "Homelab",
      "/contact": "Contact",
    };
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;
      let url: URL;
      try { url = new URL(href, location.href); } catch { return; }
      if (url.origin !== location.origin) return;
      const path = url.pathname.replace(/\/$/, "") || "/";
      if (!(path in ROUTES)) return;
      if (path === pathname && url.hash === "") return;
      trigger(ROUTES[path]);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, trigger]);

  return (
    <TransitionCtx.Provider value={{ trigger }}>
      {children}
      <div className={`page-transition${show ? " show" : ""}`} aria-hidden="true">
        {show && <div className="pt-bar" />}
        <div className="center">
          <div className="pt-mark"><span className="glyph">HA</span></div>
          <div className="pt-label">
            <span className="arrow">→</span>
            <span className="dest">{label}</span>
            <span className="dots" />
          </div>
        </div>
      </div>
    </TransitionCtx.Provider>
  );
}
