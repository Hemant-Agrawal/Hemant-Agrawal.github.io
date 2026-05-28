"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { usePageTransition } from "./PageTransition";

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<string, ReactNode> = {
  home: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...STROKE}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  exp: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...STROKE}>
      <path d="M4 20V8" />
      <path d="M10 20V12" />
      <path d="M16 20V5" />
      <path d="M3 20h18" />
    </svg>
  ),
  proj: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...STROKE}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...STROKE}>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1" />
      <path d="m16.3 16.3 2.1 2.1" />
      <path d="m5.6 18.4 2.1-2.1" />
      <path d="m16.3 7.7 2.1-2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  ),
  lab: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...STROKE}>
      <rect x="3.5" y="4" width="17" height="5.5" rx="1.2" />
      <rect x="3.5" y="14.5" width="17" height="5.5" rx="1.2" />
      <circle cx="7" cy="6.75" r="0.6" fill="currentColor" />
      <circle cx="7" cy="17.25" r="0.6" fill="currentColor" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...STROKE}>
      <path d="M3.5 7 12 13l8.5-6" />
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.75h4V21H3V9.75ZM9.5 9.75h3.8v1.55h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.96 1.3-1.96 2.66V21h-4V9.75Z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2A9.8 9.8 0 0 0 8.9 21.3c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.55 2.37 1.1 2.95.84.1-.65.36-1.1.65-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.37.32.7.94.7 1.9v2.81c0 .27.18.59.69.49A9.8 9.8 0 0 0 12 2.2Z" />
    </svg>
  ),
};

const PAGES = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/experience", label: "Experience", icon: "exp" },
  { href: "/projects", label: "Projects", icon: "proj" },
  { href: "/ai-lab", label: "AI Lab", icon: "ai" },
  { href: "/homelab", label: "Homelab", icon: "lab" },
  { href: "/contact", label: "Contact", icon: "contact" },
];

function stripSlash(p: string) {
  if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
  return p;
}

export function Rail() {
  const pathname = usePathname();
  const { trigger } = usePageTransition();
  const here = stripSlash(pathname || "/");

  return (
    <nav className="rail" aria-label="Primary">
      <div className="mark" title="Hemant Agrawal">HA</div>
      {PAGES.map((p) => {
        const active = here === stripSlash(p.href);
        return (
          <Link
            key={p.href}
            href={p.href}
            aria-label={p.label}
            className={active ? "active" : ""}
            onClick={(e) => {
              if (
                e.defaultPrevented ||
                e.button !== 0 ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey
              )
                return;
              if (active) return;
              trigger(p.label);
            }}
          >
            {ICONS[p.icon]}
            <span className="tip">{p.label}</span>
          </Link>
        );
      })}
      <div className="sep" />
      <a
        href="https://www.linkedin.com/in/hemant-ag"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        {ICONS.linkedin}
        <span className="tip">LinkedIn</span>
      </a>
      <a
        href="https://github.com/Hemantagrawal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        {ICONS.github}
        <span className="tip">GitHub</span>
      </a>
    </nav>
  );
}
