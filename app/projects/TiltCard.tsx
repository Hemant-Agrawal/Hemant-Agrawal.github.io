"use client";

import { useEffect, useRef } from "react";

export function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0, ty = 0, cx = 0, cy = 0;
    let raf: number | null = null;

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      card.style.transform = `rotateX(${-cy * 8}deg) rotateY(${cx * 10}deg)`;
      if (Math.abs(cx - tx) > 0.005 || Math.abs(cy - ty) > 0.005) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    };
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--mx", ((tx + 0.5) * 100) + "%");
      card.style.setProperty("--my", ((ty + 0.5) * 100) + "%");
      if (raf == null) raf = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      tx = 0; ty = 0;
      if (raf == null) raf = requestAnimationFrame(loop);
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <article className="proj reveal" ref={cardRef}>
      {children}
      <div className="glare" />
    </article>
  );
}
