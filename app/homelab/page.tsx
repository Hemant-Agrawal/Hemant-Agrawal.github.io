import type { Metadata } from "next";
import { Rack3D } from "./Rack3D";
import "./homelab.css";

export const metadata: Metadata = {
  title: "Homelab — Hemant Agrawal",
  description:
    "Self-hosted stack of Docker containers — Portainer, WireGuard, n8n + Claude. Where AI thesis becomes practice.",
};

type Service = {
  name: string;
  status: "RUNNING" | "AGENTIC";
  desc: string;
  tag: string;
};

const SERVICES: Service[] = [
  {
    name: "Portainer CE",
    status: "RUNNING",
    desc: "The single pane of glass. Manages every container in the lab — health, logs, stacks, volumes — without ever touching the CLI.",
    tag: "// orchestration · web ui",
  },
  {
    name: "Nginx Proxy Manager",
    status: "RUNNING",
    desc: "Reverse proxy in front of every service. TLS auto-renewed, internal subdomains, access lists. The lab is internet-facing, but only on my terms.",
    tag: "// tls · ingress · routing",
  },
  {
    name: "WireGuard VPN",
    status: "RUNNING",
    desc: "Zero-trust ingress. Admin surfaces (Portainer, n8n, Grafana) are only reachable via VPN — never exposed to the open web.",
    tag: "// vpn · zero-trust",
  },
  {
    name: "n8n",
    status: "AGENTIC",
    desc: "My agent orchestrator. Multi-step workflows chaining Claude calls, MCP tools, webhooks, schedules, and human-in-the-loop steps. 14 flows running.",
    tag: "// agentic · workflows · webhooks",
  },
  {
    name: "MCP Servers",
    status: "AGENTIC",
    desc: "Custom Model Context Protocol servers expose real tools (DB, files, search, internal APIs) to Claude. Each one is small, typed, and tested.",
    tag: "// claude tools · stdio + http",
  },
  {
    name: "Claude Proxy",
    status: "AGENTIC",
    desc: "A thin gateway in front of the Anthropic API — adds auth, logging, rate limits, and a unified retry/streaming layer for everything in the lab.",
    tag: "// llm gateway",
  },
  {
    name: "Postgres + Redis",
    status: "RUNNING",
    desc: "Stateful backbone. Postgres holds app data & n8n state; Redis handles caching and the agent queue. Boring, on purpose.",
    tag: "// data · queue · cache",
  },
  {
    name: "Grafana + Prometheus",
    status: "RUNNING",
    desc: "If it runs in the lab, it's scraped. Dashboards for container health, agent latency, and the bills my LLM proxy is racking up.",
    tag: "// observability",
  },
  {
    name: "Watchtower + Vaultwarden",
    status: "RUNNING",
    desc: "Watchtower auto-pulls image updates on a schedule. Vaultwarden keeps all the lab secrets self-hosted and out of any cloud vault.",
    tag: "// updates · secrets",
  },
];

export default function HomelabPage() {
  return (
    <div className="page" data-screen-label="Homelab">
      <div className="page-head reveal">
        <span className="lab">05 — HOMELAB</span>
        <h1>
          My <span className="accent">side-server</span>
          <br />
          that thinks for itself.
        </h1>
        <p className="lead">
          Where I prototype agentic AI in the open. A self-hosted stack of
          containers — orchestrated with Portainer, exposed through a VPN +
          reverse proxy, and wired up with n8n &amp; Claude.
        </p>
      </div>

      {/* HERO: Copy + 3D rack */}
      <section className="lab-hero">
        <div className="lab-copy reveal">
          <span className="eyebrow">WHY A HOMELAB</span>
          <h2>
            I learn by{" "}
            <span className="accent">building real systems</span> at home.
          </h2>
          <p>
            My homelab is where the AI thesis becomes practice. Multiple Docker
            containers managed through Portainer, wrapped behind a VPN and
            reverse proxy, and stitched into agentic workflows with n8n + Claude.
            It&apos;s small, but it&apos;s running 24/7 — and every weekend, it
            gets a new capability.
          </p>

          <blockquote className="pq">
            I wanted a sandbox where I could break things, ship things, and
            watch my own systems run — the homelab is exactly that.
            <cite>— Hemant</cite>
          </blockquote>

          <div className="lab-stats">
            <div className="cell">
              <div className="k">Containers</div>
              <div className="v">
                <span className="pulse" />
                12+
              </div>
            </div>
            <div className="cell">
              <div className="k">Uptime</div>
              <div className="v">99.4%</div>
            </div>
            <div className="cell">
              <div className="k">Orchestrator</div>
              <div className="v">Portainer</div>
            </div>
            <div className="cell">
              <div className="k">Agents</div>
              <div className="v">n8n + Claude</div>
            </div>
          </div>
        </div>

        <Rack3D />
      </section>

      {/* Architecture diagram */}
      <section className="arch reveal">
        <span className="lab">ARCHITECTURE</span>
        <h2>From the public internet to a thinking agent.</h2>
        <p className="desc">
          Every request flows the same way — through the VPN/proxy, into
          Portainer-managed containers, and (where it matters) up into the
          agentic AI layer that decides what to do next.
        </p>

        <div className="arch-flow">
          <div className="arch-node">
            <div className="icon">⇄</div>
            <h4>Internet</h4>
            <p>
              Public
              <br />
              HTTPS
            </p>
          </div>
          <div className="arch-arrow">
            <span>→</span>
          </div>
          <div className="arch-node violet">
            <div className="icon">▣</div>
            <h4>VPN + Proxy</h4>
            <p>
              WireGuard
              <br />
              Nginx PM
            </p>
          </div>
          <div className="arch-arrow">
            <span>→</span>
          </div>
          <div className="arch-node mint">
            <div className="icon">◆</div>
            <h4>Portainer</h4>
            <p>
              Containers
              <br />
              under control
            </p>
          </div>
        </div>

        <div className="arch-flow" style={{ marginTop: 12 }}>
          <div className="arch-node mint">
            <div className="icon">◆</div>
            <h4>Containers</h4>
            <p>
              App, DB,
              <br />
              queue, cache
            </p>
          </div>
          <div className="arch-arrow">
            <span>→</span>
          </div>
          <div className="arch-node">
            <div className="icon">⚙</div>
            <h4>n8n</h4>
            <p>
              Workflow
              <br />
              orchestrator
            </p>
          </div>
          <div className="arch-arrow">
            <span>→</span>
          </div>
          <div className="arch-node violet">
            <div className="icon">★</div>
            <h4>Claude + MCP</h4>
            <p>
              Reasoning +<br />
              custom tools
            </p>
          </div>
        </div>
      </section>

      {/* Services running */}
      <section className="services reveal">
        <div className="svc-head">
          <div>
            <span className="eyebrow">RUNNING NOW</span>
            <h2 style={{ marginTop: 12 }}>
              A snapshot of{" "}
              <span className="accent-grad">what&apos;s online.</span>
            </h2>
          </div>
          <div className="meta">
            <span className="dot" />
            LIVE · {`{{ updated daily }}`}
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc" key={s.name}>
              <div className="row1">
                <span className="svc-name">{s.name}</span>
                <span
                  className={
                    s.status === "AGENTIC" ? "stat violet" : "stat"
                  }
                >
                  {s.status}
                </span>
              </div>
              <p className="svc-desc">{s.desc}</p>
              <span className="tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Live terminal */}
      <div className="term reveal" aria-hidden="true">
        <div className="bar">
          <span className="led l1" />
          <span className="led l2" />
          <span className="led l3" />
          <span className="term-name">hemant@homelab:~$ portainer stack ps</span>
        </div>
        <pre className="term-body">
          <span className="com">{`# a typical day in the lab — agents working while I sleep`}</span>
          {"\n"}
          <span className="pmt">$</span>
          {` docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"\n\n`}
          <span className="mut">{`NAME                STATUS                      PORTS`}</span>
          {"\n"}
          {`portainer-ce        `}<span className="ok">Up 17 days (healthy)</span>{`     :9443\n`}
          {`nginx-proxy-mgr     `}<span className="ok">Up 17 days (healthy)</span>{`     :80, :81, :443\n`}
          {`wireguard           `}<span className="ok">Up 17 days (healthy)</span>{`     :51820/udp\n`}
          {`n8n                 `}<span className="ok">Up 12 days</span>{`               :5678\n`}
          {`mcp-server          `}<span className="ok">Up 12 days</span>{`               :8080\n`}
          {`claude-proxy        `}<span className="ok">Up 12 days</span>{`               :8787\n`}
          {`postgres-14         `}<span className="ok">Up 17 days (healthy)</span>{`     :5432\n`}
          {`redis               `}<span className="ok">Up 17 days (healthy)</span>{`     :6379\n`}
          {`grafana             `}<span className="ok">Up 17 days</span>{`               :3000\n`}
          {`prometheus          `}<span className="ok">Up 17 days</span>{`               :9090\n`}
          {`watchtower          `}<span className="ok">Up 17 days</span>{`               —\n`}
          {`vaultwarden         `}<span className="ok">Up 17 days (healthy)</span>{`     :8222\n\n`}
          <span className="pmt">$</span> <span className="mut">n8n executions:active</span>
          {"\n"}
          {`  `}<span className="vio">→ flow: triage-inbox</span>{`          `}<span className="com">{`// claude + mcp:gmail`}</span>
          {"\n"}
          {`  `}<span className="vio">→ flow: daily-digest</span>{`          `}<span className="com">{`// scheduled · 0 7 * * *`}</span>
          {"\n"}
          {`  `}<span className="vio">→ flow: webhook:pr-review</span>{`     `}<span className="com">{`// claude + mcp:github`}</span>
          {"\n\n"}
          <span className="pmt">$</span> <span className="blink" />
        </pre>
      </div>
    </div>
  );
}
