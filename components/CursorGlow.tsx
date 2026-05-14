"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const glow = document.querySelector<HTMLElement>(".cursor-glow");
    if (!glow) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight * 0.3;
    let cx = tx;
    let cy = ty;
    let active = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!active) {
        active = true;
        glow.style.opacity = "1";
      }
      // expose normalized cursor (used by other interactive bits if needed)
      (window as unknown as { __cursor: { x: number; y: number } }).__cursor = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    const onLeave = () => {
      glow.style.opacity = "0";
      active = false;
    };
    const frame = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      raf = requestAnimationFrame(frame);
    };

    (window as unknown as { __cursor: { x: number; y: number } }).__cursor = { x: 0.5, y: 0.5 };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
