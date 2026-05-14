"use client";

import { useEffect, useRef } from "react";

export function IsoScene() {
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

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      const rx = 58 - cy * 8;
      const rz = -32 - cx * 12;
      stage.style.transform = `rotateX(${rx}deg) rotateZ(${rz}deg)`;
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
    <div className="iso-scene reveal" ref={sceneRef} aria-hidden="true">
      <div className="iso-stage" ref={stageRef}>
        <div className="iso-floor" />
        <div className="iso-path" />

        <div className="bldg b1">
          <div className="face front" />
          <div className="face right" />
          <div className="top"><div className="label">INNOSTAX · 2020</div></div>
        </div>
        <div className="bldg b2">
          <div className="face front" />
          <div className="face right" />
          <div className="top"><div className="label">FIXCRAFT · 2022</div></div>
        </div>
        <div className="bldg b3">
          <div className="face front" />
          <div className="face right" />
          <div className="top"><div className="label">CAW · SDE 2</div></div>
        </div>
        <div className="bldg b4">
          <div className="face front" />
          <div className="face right" />
          <div className="top"><div className="label">CAW · SDE 3 · NOW</div></div>
        </div>
      </div>
    </div>
  );
}
