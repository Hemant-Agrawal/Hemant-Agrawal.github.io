"use client";

import { useEffect, useRef } from "react";

export function Orb() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    if (!scene || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0, ty = 0, cx = 0, cy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = scene.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const onLeave = () => { tx = 0; ty = 0; };

    const labels = scene.querySelectorAll<HTMLElement>(".orb-label");
    const ds = [12, 14, 10, 16, 8];

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      stage.style.transform = `rotateX(${-cy * 18}deg) rotateY(${cx * 24}deg)`;
      labels.forEach((el, i) => {
        const d = ds[i] ?? 12;
        const base = el.classList.contains("ol5") ? "translate(-50%, -120px) " : "";
        el.style.transform = `${base}translate(${cx * d}px, ${cy * d}px)`;
      });
      raf = requestAnimationFrame(tick);
    };

    scene.addEventListener("mousemove", onMove);
    scene.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      scene.removeEventListener("mousemove", onMove);
      scene.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="orb-scene" ref={sceneRef} aria-hidden="true">
      <div className="orb-stage" ref={stageRef}>
        <div className="orb-ring r1" />
        <div className="orb-ring r2" />
        <div className="orb-ring r3" />
        <div className="orb-core" />
      </div>
      <div className="orb-label ol1">React · Next.js</div>
      <div className="orb-label ol2">Claude · MCP</div>
      <div className="orb-label ol3">n8n · Agentic AI</div>
      <div className="orb-label ol4">Homelab · Portainer</div>
      <div className="orb-label ol5">Hemant · SDE 3</div>
    </div>
  );
}
