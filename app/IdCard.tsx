"use client";

import { useEffect, useRef } from "react";

export function IdCard() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const card = cardRef.current;
    if (!scene || !card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let tx = 0, ty = 0, cx = 0, cy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = scene.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const onLeave = () => { tx = 0; ty = 0; };

    const chips = scene.querySelectorAll<HTMLElement>(".chip-orbit");
    const depths = [10, 14, 18, 8];
    const baseZs = [80, 60, 100, 40];

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      const ry = cx * 22;
      const rx = -cy * 16;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.setProperty("--shimmer-x", (50 + cx * 100) + "%");
      card.style.setProperty("--shimmer-y", (50 + cy * 100) + "%");
      chips.forEach((el, i) => {
        const d = depths[i] ?? 10;
        const z = baseZs[i] ?? 60;
        el.style.transform = `translate(${-cx * d}px, ${-cy * d}px) translateZ(${z}px)`;
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let mx = 0.5, my = 0.5;
    let raf = 0;

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    const particles: P[] = [];

    const size = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();

    const N = 80;
    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.4 + 0.4,
        c: Math.random() < 0.5
          ? "oklch(0.82 0.14 235 / 0.7)"
          : Math.random() < 0.5
            ? "oklch(0.74 0.17 295 / 0.6)"
            : "oklch(0.86 0.13 165 / 0.6)",
      });
    }

    const parent = canvas.parentElement;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width;
      my = (e.clientY - r.top) / r.height;
    };
    parent?.addEventListener("mousemove", onMove);
    window.addEventListener("resize", size);

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      const cxp = mx * w, cyp = my * h;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 90) {
            ctx.strokeStyle = `oklch(0.82 0.14 235 / ${0.18 * (1 - d / 90)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        const ddx = cxp - p.x, ddy = cyp - p.y;
        const dist = Math.hypot(ddx, ddy);
        if (dist < 200) {
          p.x += (ddx / dist) * 0.4 * (1 - dist / 200);
          p.y += (ddy / dist) * 0.4 * (1 - dist / 200);
        }
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", size);
      parent?.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const barcodeHeights = [24, 18, 24, 14, 24, 20, 24, 16, 24, 22, 18, 24, 20, 24];

  return (
    <div className="id-scene" ref={sceneRef} aria-hidden="true">
      <canvas className="particles" ref={canvasRef} />

      <div className="chip-orbit c1"><span className="dot" />React · Next.js</div>
      <div className="chip-orbit c2"><span className="dot" />Claude · MCP</div>
      <div className="chip-orbit c3"><span className="dot" />n8n · Agentic AI</div>
      <div className="chip-orbit c4"><span className="dot" />Homelab · Portainer</div>

      <div className="id-card" ref={cardRef}>
        <div className="id-inner">
          <div className="id-top">
            <span className="logo">◆ HA / ENGINEER</span>
            <span className="id-no">ID · SDE-2026</span>
          </div>
          <div className="monogram"><span className="glyph">HA</span></div>
          <div className="id-name">Hemant Agrawal</div>
          <div className="id-title">SDE 3 · Full-Stack &amp; AI</div>
          <div className="id-rows">
            <div className="row"><span>EMPLOYER</span><span className="vv">CAW · Hyderabad</span></div>
            <div className="row"><span>STACK</span><span className="vv">Next.js / React</span></div>
            <div className="row"><span>AI</span><span className="vv">Claude · MCP · n8n</span></div>
            <div className="row"><span>STATUS</span><span className="vv" style={{ color: "var(--accent-3)" }}>● Open</span></div>
          </div>
          <div className="id-bottom">
            <span>HA-26-CAW</span>
            <div className="barcode" aria-hidden="true">
              {barcodeHeights.map((h, i) => (
                <i key={i} style={{ height: h }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
