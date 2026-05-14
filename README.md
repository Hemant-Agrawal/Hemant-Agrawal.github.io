<h1 align="center">Hi, I'm Hemant 👋</h1>
<p align="center">
  <b>Full-stack engineer (SDE 3)</b> · React / Next.js / Node · shipping production web apps with AI baked in, not bolted on.
</p>
<p align="center">
  <a href="https://www.linkedin.com/in/hemant-ag"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-hemant--ag-0A66C2?logo=linkedin&logoColor=white"></a>
  <a href="mailto:ha.hemantagrawal@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-ha.hemantagrawal%40gmail.com-EA4335?logo=gmail&logoColor=white"></a>
  <a href="https://github.com/Hemantagrawal"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-Hemantagrawal-181717?logo=github&logoColor=white"></a>
  <img alt="Status" src="https://img.shields.io/badge/Status-Open%20to%20roles-2EA043">
</p>

---

## What I do

I build **front-end heavy, full-stack products** end-to-end — UI, API, database, CI/CD, observability — and use **AI as a force multiplier** at every layer.

- **Frontend that thinks** — React + Next.js apps with AI-assisted UX: smart defaults, inline suggestions, adaptive empty states. Ambient intelligence, not a chat tab.
- **Backend that scales** — Node + Express services, REST contracts, Postgres + Redis, Docker-orchestrated deployments.
- **AI in the loop, every day** — Claude + Codex pair-program with me; I prompt, review, ship. Productivity multiplier on the work I'd already do.
- **Agents where they earn it** — when a workflow is repeatable, n8n + Claude + custom MCP tools take it over. Not for show; for leverage.
- **Pipeline + quality** — GitLab CI on GCP, Playwright + Jest + RTL, Storybook. The fastest team is the one whose CI never blocks them.

> _If a workflow is repeatable, an AI agent should run it. If a UI is non-trivial, AI should help me design it. The job is still shipping the product._

---

## Stack

**Languages:** TypeScript · JavaScript · Python · HTML5 · CSS3
**Frontend:** React · Next.js · Tailwind CSS · Storybook · PWA · Service Workers
**Backend:** Node.js · Express · Django Admin · REST · .NET Framework
**Data:** PostgreSQL · Redis · MongoDB
**Infra / DevOps:** Docker · Portainer · GitLab CI · Google Cloud · Nginx · WireGuard
**Testing:** Playwright · Jest · React Testing Library
**AI as a tool:** Claude (Anthropic) · OpenAI Codex · Claude Code · Cursor · MCP · n8n · Prompt engineering

---

## Career

| When | Role | Where |
|------|------|-------|
| Jan 2026 — present | **SDE 3** _(promoted)_ | Chimpsatwork Studios (CAW) |
| May 2023 — Jan 2026 | SDE 2 | Chimpsatwork Studios (CAW) |
| May 2022 — May 2023 | Frontend Developer | Fixcraft |
| May 2021 — May 2022 | SDE _(promoted)_ | Innostax Software Labs |
| Nov 2020 — May 2021 | Associate SE | Innostax Software Labs |

5+ years. Three companies. One upward arc.

**Recognition:** Individual Contributor of the Month
**Education:** MCA · Chandigarh University · BCA · GLA University

---

## What I'm shipping right now

- **Owning modules end-to-end at CAW** — architecture → release, mentoring juniors, defending design decisions in review.
- **AI-augmented workflows** — every repeatable task in my own dev loop is being moved to Claude Code / Codex / n8n. I work twice as fast as I did 12 months ago, and review what they ship.
- **Self-hosted homelab** — 12+ Docker containers behind WireGuard + Nginx, where I prototype the agentic stack in the open: n8n, Claude, custom MCP servers, Postgres, Grafana, Vaultwarden.
- **This portfolio** — Next.js 15 + App Router, six routes, hand-rolled 3D CSS scenes (server rack, isometric career landscape, holographic ID card, orbital sphere). No template.

---

## Selected work

| Case | What | Stack |
|------|------|-------|
| **Fixcraft migration** | React → Next.js + PWA, GitLab CI on GCP | Next.js, Tailwind, Service Workers, GitLab, GCP |
| **Homelab agent stack** | Multi-step agent workflows, custom MCP tools | Claude, MCP, n8n, Docker, Portainer |
| **Storybook + Jest** | Isolated UI components, regression-gated CI | Storybook, Jest, RTL |
| **Django Admin back-office** | Internal ops portal + 2nd React → Next migration | Django Admin, Python, Next.js, Tailwind |

---

## Run this site

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

**100% static.** No server, no API routes, no env vars. Deploys to any static host (GitHub Pages, Cloudflare Pages, Netlify, S3 + CloudFront).

### Contact form

Form opens the visitor's email client via `mailto:` with subject + body prefilled — no backend, no spam-vector, no third-party processing of submissions.

Direct CTAs (no friction):
- **Book a call** → [cal.com/hemant-ag](https://cal.com/hemant-ag) (replace with your handle)
- **Email me** → `mailto:` link
- LinkedIn / GitHub / WhatsApp / Phone in the channels grid

## Deploy to GitHub Pages

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the static export on every push to `main` and publishes to GitHub Pages.

One-time setup in the repo:
1. **Settings → Pages → Build and deployment → Source:** `GitHub Actions`
2. Push to `main` → site builds + deploys.
3. Site URL: `https://<user>.github.io/<repo>/` (project page) or `https://<user>.github.io/` (user/org page if repo is named `<user>.github.io`).

The workflow auto-detects whether to set `basePath` (project pages need `/<repo>` prefix; root user pages don't). No manual config needed.

### Custom domain (optional)
- Repo **Settings → Pages → Custom domain** → enter your domain.
- Add a `CNAME` file to `public/` containing the domain.
- Configure DNS: `CNAME` record from your subdomain → `<user>.github.io`, or `A` records to GH Pages IPs for apex.

### Other hosts
The `out/` dir is portable. Drop it on Cloudflare Pages / Netlify / Vercel (static) / any CDN.

---

## Reach me

| Channel | |
|---------|---|
| Email | <ha.hemantagrawal@gmail.com> |
| LinkedIn | [linkedin.com/in/hemant-ag](https://www.linkedin.com/in/hemant-ag) |
| GitHub | [github.com/Hemantagrawal](https://github.com/Hemantagrawal) |
| Phone / WhatsApp | +91 87559 88217 |
| Résumé | [Hemant-Agrawal-Resume.pdf](public/assets/Hemant-Agrawal-Resume.pdf) |

> _Built end-to-end, no template. Hire me when the ask is "own this end-to-end, make it fast, and bring the team with you."_
