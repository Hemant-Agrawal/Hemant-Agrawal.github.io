"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageTransition } from "./PageTransition";

const PAGES = [
  { href: "/", label: "Home", short: "01" },
  { href: "/experience", label: "Experience", short: "02" },
  { href: "/projects", label: "Projects", short: "03" },
  { href: "/ai-lab", label: "AI Lab", short: "04" },
  { href: "/homelab", label: "Homelab", short: "05" },
  { href: "/contact", label: "Contact", short: "06" },
];

export function Rail() {
  const pathname = usePathname();
  const { trigger } = usePageTransition();

  return (
    <nav className="rail" aria-label="Primary">
      <div className="mark" title="Hemant Agrawal">HA</div>
      {PAGES.map((p) => {
        const active = pathname === p.href;
        return (
          <Link
            key={p.href}
            href={p.href}
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
              if (pathname === p.href) return;
              trigger(p.label);
            }}
          >
            {p.short}
            <span className="tip">{p.label}</span>
          </Link>
        );
      })}
      <div className="sep" />
      <a
        href="https://www.linkedin.com/in/hemant-ag"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        in<span className="tip">LinkedIn</span>
      </a>
      <a
        href="https://github.com/Hemantagrawal"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        gh<span className="tip">GitHub</span>
      </a>
    </nav>
  );
}
