"use client";

import { useEffect, useRef } from "react";

type Blade = {
  name: string;
  sub: string;
  port: string;
  variant?: "warn" | "priority" | "priority2";
};

const BLADES: Blade[] = [
  { name: "portainer-ce", sub: "orchestrator · web ui", port: ":9443", variant: "priority" },
  { name: "nginx-proxy-manager", sub: "reverse proxy · tls", port: ":81", variant: "priority" },
  { name: "wireguard", sub: "vpn · zero-trust", port: ":51820", variant: "priority2" },
  { name: "n8n", sub: "agentic workflows", port: ":5678", variant: "priority2" },
  { name: "mcp-server", sub: "custom tools for claude", port: ":8080" },
  { name: "claude-proxy", sub: "api gateway", port: ":8787" },
  { name: "postgres-14", sub: "app + n8n store", port: ":5432" },
  { name: "redis", sub: "cache · queue", port: ":6379" },
  { name: "vaultwarden", sub: "self-hosted secrets", port: ":8222" },
  { name: "grafana", sub: "metrics dashboard", port: ":3000", variant: "warn" },
  { name: "prometheus", sub: "metrics scrape", port: ":9090" },
  { name: "watchtower", sub: "auto image updates", port: "—" },
];

export function Rack3D() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const stage = stageRef.current;
    if (!scene || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = scene.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const cards = scene.querySelectorAll<HTMLElement>(".float-card");
    const ds = [14, 18, 12, 10];
    const baseZs = [80, 110, 60, 40];

    const tick = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      const rx = 8 - cy * 14;
      const ry = -18 + cx * 22;
      stage.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      cards.forEach((el, i) => {
        const d = ds[i] ?? 12;
        const baseZ = baseZs[i] ?? 60;
        el.style.transform = `translate(${-cx * d}px, ${-cy * d}px) translateZ(${baseZ}px)`;
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
    <div className="rack-scene reveal" ref={sceneRef} aria-hidden="true">
      <div className="rack-stage" ref={stageRef}>
        <div className="float-card fc-portainer">
          <div className="ttl">PORTAINER</div>
          <div className="val">12 containers up</div>
          <div className="sub">// healthy · all green</div>
        </div>

        <div className="float-card fc-vpn">
          <div className="ttl">VPN + REVERSE PROXY</div>
          <div className="val">WireGuard · Nginx</div>
          <div className="sub">// TLS terminated · zero-trust ingress</div>
        </div>

        <div className="float-card fc-agent">
          <div className="ttl">CLAUDE + MCP</div>
          <div className="val">Reasoning + tools</div>
          <div className="sub">// custom mcp servers</div>
        </div>

        <div className="float-card fc-stats">
          <div className="ttl">N8N</div>
          <div className="val">14 active flows</div>
          <div className="sub">// agentic + scheduled</div>
        </div>

        <div className="rack">
          <div className="rack-inner">
            <div className="rack-top">
              <span>◆ HEMANT-LAB / U-01</span>
              <span className="live">ONLINE</span>
            </div>

            {BLADES.map((b) => (
              <div
                key={b.name}
                className={`blade${b.variant ? " " + b.variant : ""}`}
              >
                <span className="led" />
                <span className="blade-name">
                  {b.name}
                  <small>{b.sub}</small>
                </span>
                <span className="port">{b.port}</span>
              </div>
            ))}

            <div className="rack-top bottom">
              <span>POWER · 64W</span>
              <span>RAM · 14 / 32 GB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
