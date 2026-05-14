import type { Metadata } from "next";
import { TiltCard } from "./TiltCard";
import "./projects.css";

export const metadata: Metadata = {
  title: "Projects — Hemant Agrawal",
  description:
    "Selected work — current portfolio, finance tracker, Diwali wish creator, NLP chatbot, Python game. Side projects shipped end-to-end.",
};

export default function ProjectsPage() {
  return (
    <div className="page" data-screen-label="Projects">
      <div className="page-head reveal">
        <span className="lab">03 — SELECTED WORK</span>
        <h1>
          Things I shipped<br />
          that I can <span className="accent">defend</span> in a room.
        </h1>
        <p className="lead">
          Recent first. Hover the cards. They tilt with your cursor — like the
          work, they reward attention.
        </p>
      </div>

      <div className="proj-grid">
        {/* 1. Current Portfolio (this site) — v1 · now */}
        <TiltCard>
          <div className="proj-inner">
            <div className="viz">
              <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="p1Glow" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 235 / 0.6)" />
                    <stop offset="100%" stopColor="oklch(0.74 0.17 295 / 0.4)" />
                  </linearGradient>
                </defs>
                {/* Iso grid floor */}
                <g stroke="oklch(0.82 0.14 235 / 0.25)" strokeWidth="0.6" fill="none">
                  <path d="M 60 130 L 200 60 L 340 130 L 200 200 Z" />
                  <path d="M 95 112 L 200 60" />
                  <path d="M 130 95 L 200 60" />
                  <path d="M 165 78 L 200 60" />
                  <path d="M 305 112 L 200 60" />
                  <path d="M 270 95 L 200 60" />
                  <path d="M 235 78 L 200 60" />
                  <path d="M 95 112 L 305 112" />
                  <path d="M 130 95 L 270 95" />
                  <path d="M 165 78 L 235 78" />
                </g>
                {/* Floating UI cards */}
                <g>
                  <rect x="60"  y="40" width="56" height="22" rx="5"
                    fill="oklch(0.16 0.014 260 / 0.9)" stroke="oklch(0.82 0.14 235 / 0.5)" />
                  <rect x="280" y="56" width="60" height="22" rx="5"
                    fill="oklch(0.16 0.014 260 / 0.9)" stroke="oklch(0.74 0.17 295 / 0.5)" />
                  <rect x="135" y="118" width="68" height="22" rx="5"
                    fill="oklch(0.16 0.014 260 / 0.9)" stroke="oklch(0.86 0.13 165 / 0.5)" />
                </g>
                {/* Core orb */}
                <circle cx="200" cy="100" r="18" fill="url(#p1Glow)" />
                <circle cx="200" cy="100" r="6"  fill="oklch(1 0 0 / 0.95)" />
              </svg>
            </div>
            <div className="pmark">
              <span>CASE 01 · PORTFOLIO V1 · NEXT.JS</span>
              <span className="badge-now">● LIVE · 2026</span>
            </div>
            <h3>This site you&apos;re reading.</h3>
            <p>
              Next.js 15 (App Router) + React 19. Six routes, hand-rolled 3D
              CSS scenes — server rack, isometric career landscape, holographic
              ID card, orbital sphere. Static-exported, deploys to GH Pages
              with one push. No template, no UI kit.
            </p>
            <div className="proj-tags">
              <span>Next.js 15</span>
              <span>React 19</span>
              <span>TypeScript</span>
              <span>CSS 3D</span>
              <span>GitHub Pages</span>
            </div>
            <div className="proj-cta">
              <a className="demo" href="https://hemant-agrawal.github.io" target="_blank" rel="noopener noreferrer">
                Live demo <span className="arr">↗</span>
              </a>
              <a href="https://github.com/Hemant-Agrawal/Hemant-Agrawal.github.io" target="_blank" rel="noopener noreferrer">
                Source <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </TiltCard>

        {/* 2. FinanceTracker — recent, has demo */}
        <TiltCard>
          <div className="proj-inner">
            <div className="viz">
              <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="ftBar" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 235)" />
                    <stop offset="100%" stopColor="oklch(0.82 0.14 235 / 0.3)" />
                  </linearGradient>
                  <linearGradient id="ftLine" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="oklch(0.86 0.13 165)" />
                    <stop offset="100%" stopColor="oklch(0.74 0.17 295)" />
                  </linearGradient>
                </defs>
                <g>
                  <rect x="30"  y="100" width="20" height="50"  fill="url(#ftBar)" rx="2" />
                  <rect x="60"  y="80"  width="20" height="70"  fill="url(#ftBar)" rx="2" />
                  <rect x="90"  y="60"  width="20" height="90"  fill="url(#ftBar)" rx="2" />
                  <rect x="120" y="90"  width="20" height="60"  fill="url(#ftBar)" rx="2" />
                  <rect x="150" y="50"  width="20" height="100" fill="url(#ftBar)" rx="2" />
                  <rect x="180" y="35"  width="20" height="115" fill="url(#ftBar)" rx="2" />
                  <rect x="210" y="55"  width="20" height="95"  fill="url(#ftBar)" rx="2" />
                  <rect x="240" y="40"  width="20" height="110" fill="url(#ftBar)" rx="2" />
                  <rect x="270" y="25"  width="20" height="125" fill="url(#ftBar)" rx="2" />
                  <rect x="300" y="45"  width="20" height="105" fill="url(#ftBar)" rx="2" />
                  <rect x="330" y="20"  width="20" height="130" fill="url(#ftBar)" rx="2" />
                </g>
                <path
                  d="M 40 110 L 70 90 L 100 70 L 130 100 L 160 60 L 190 45 L 220 65 L 250 50 L 280 35 L 310 55 L 340 30"
                  stroke="url(#ftLine)" strokeWidth="2" fill="none"
                />
              </svg>
            </div>
            <div className="pmark">
              <span>CASE 02 · FINANCETRACKER</span>
              <span className="badge-now">● 2025</span>
            </div>
            <h3>Personal finance, all in one place.</h3>
            <p>
              A comprehensive tracker for expenses, multiple accounts, and
              investment portfolios. Budget tracking, transaction insights,
              investment performance analytics, and personalized financial
              planning — single intuitive platform.
            </p>
            <div className="proj-tags">
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>React</span>
              <span>Charts</span>
              <span>Vercel</span>
            </div>
            <div className="proj-cta">
              <a className="demo" href="https://finance-tracker-orpin-rho.vercel.app" target="_blank" rel="noopener noreferrer">
                Live demo <span className="arr">↗</span>
              </a>
              <a href="https://github.com/Hemant-Agrawal/FinanceTracker" target="_blank" rel="noopener noreferrer">
                Source <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </TiltCard>

        {/* 3. Wisher — Diwali wish creator */}
        <TiltCard>
          <div className="proj-inner">
            <div className="viz">
              <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="diyaGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.92 0.18 75 / 0.95)" />
                    <stop offset="60%" stopColor="oklch(0.85 0.16 50 / 0.5)" />
                    <stop offset="100%" stopColor="oklch(0.85 0.16 50 / 0)" />
                  </radialGradient>
                  <linearGradient id="diyaBowl" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.55 0.13 60)" />
                    <stop offset="100%" stopColor="oklch(0.32 0.10 50)" />
                  </linearGradient>
                </defs>
                {/* Sparks / stars */}
                <g fill="oklch(0.92 0.18 75)">
                  <circle cx="60"  cy="40"  r="1.5" />
                  <circle cx="120" cy="28"  r="1.2" />
                  <circle cx="280" cy="36"  r="1.5" />
                  <circle cx="340" cy="60"  r="1.3" />
                  <circle cx="80"  cy="78"  r="1.1" />
                  <circle cx="320" cy="96"  r="1.3" />
                  <circle cx="50"  cy="120" r="1.2" />
                  <circle cx="360" cy="130" r="1.4" />
                </g>
                {/* Center diya glow */}
                <ellipse cx="200" cy="78" rx="120" ry="50" fill="url(#diyaGlow)" opacity="0.7" />
                {/* Flame */}
                <path d="M 200 50 Q 192 70 200 88 Q 208 70 200 50 Z" fill="oklch(0.92 0.18 75)" />
                <path d="M 200 58 Q 196 70 200 82 Q 204 70 200 58 Z" fill="oklch(0.97 0.005 260 / 0.85)" />
                {/* Bowl */}
                <path d="M 170 90 Q 200 120 230 90 L 222 100 Q 200 112 178 100 Z" fill="url(#diyaBowl)" stroke="oklch(0.62 0.14 60)" strokeWidth="0.6" />
                {/* Petals around */}
                <g fill="none" stroke="oklch(0.85 0.16 50 / 0.5)" strokeWidth="1">
                  <path d="M 200 130 Q 180 138 160 130" />
                  <path d="M 200 130 Q 220 138 240 130" />
                  <path d="M 200 130 Q 200 142 200 145" />
                </g>
              </svg>
            </div>
            <div className="pmark">
              <span>CASE 03 · WISHER · DIWALI WISH CREATOR</span>
              <span className="badge-now">● 2026</span>
            </div>
            <h3>Festive wish pages, in 2 clicks.</h3>
            <p>
              Web app for personalized Diwali greetings — 6 themes, 11
              pre-written messages, confetti + fireworks + floating diyas,
              WhatsApp + image-share. Real-time storage on Supabase.
            </p>
            <div className="proj-tags">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>Tailwind</span>
              <span>Animations</span>
            </div>
            <div className="proj-cta">
              <a className="demo" href="https://wisher-rose.vercel.app" target="_blank" rel="noopener noreferrer">
                Live demo <span className="arr">↗</span>
              </a>
              <a href="https://github.com/Hemant-Agrawal/wisher" target="_blank" rel="noopener noreferrer">
                Source <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </TiltCard>

        {/* 4. 3D Portfolio v0 — three.js predecessor */}
        <TiltCard>
          <div className="proj-inner">
            <div className="viz">
              <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="orbCore" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 235)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="oklch(0.82 0.14 235)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <g stroke="oklch(0.82 0.14 235 / 0.5)" fill="none" strokeWidth="1">
                  <ellipse cx="200" cy="80" rx="160" ry="22" />
                  <ellipse cx="200" cy="80" rx="120" ry="46" transform="rotate(-18 200 80)" />
                  <ellipse cx="200" cy="80" rx="90" ry="60" transform="rotate(20 200 80)" stroke="oklch(0.74 0.17 295 / 0.45)" />
                </g>
                <circle cx="200" cy="80" r="36" fill="url(#orbCore)" />
                <circle cx="200" cy="80" r="10" fill="oklch(1 0 0 / 0.95)" />
                <g fill="oklch(0.86 0.13 165)">
                  <circle cx="40"  cy="80" r="4" />
                  <circle cx="360" cy="80" r="4" />
                </g>
                <g fill="oklch(0.74 0.17 295)">
                  <circle cx="120" cy="36" r="4" />
                  <circle cx="280" cy="124" r="4" />
                </g>
              </svg>
            </div>
            <div className="pmark">
              <span>CASE 04 · PORTFOLIO V0 · THREE.JS</span>
              <span className="badge-old">// archived · 2023</span>
            </div>
            <h3>The original 3D portfolio.</h3>
            <p>
              Predecessor to this site. Real-time three.js scenes — desktop
              setup, planet, particle field — built with React + Tailwind +
              GSAP. Where I learned that web + 3D is a craft of its own.
              Superseded by v1 above.
            </p>
            <div className="proj-tags">
              <span>React</span>
              <span>three.js</span>
              <span>Tailwind</span>
              <span>GSAP</span>
              <span>EmailJS</span>
            </div>
            <div className="proj-cta">
              <a href="https://github.com/Hemant-Agrawal/Hemant-Agrawal.github.io/tree/main" target="_blank" rel="noopener noreferrer">
                Source (archived) <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </TiltCard>

        {/* 5. Chat-e-Bot — Django + NLP */}
        <TiltCard>
          <div className="proj-inner">
            <div className="viz">
              <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chatBubble" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.86 0.13 165 / 0.25)" />
                    <stop offset="100%" stopColor="oklch(0.86 0.13 165 / 0.05)" />
                  </linearGradient>
                </defs>
                <rect x="30" y="30" width="170" height="38" rx="14"
                  fill="url(#chatBubble)" stroke="oklch(0.86 0.13 165 / 0.5)" />
                <g fill="oklch(0.78 0.012 260)">
                  <rect x="46" y="42" width="100" height="4" rx="2" />
                  <rect x="46" y="52" width="60"  height="4" rx="2" />
                </g>
                <rect x="200" y="92" width="170" height="38" rx="14"
                  fill="oklch(0.82 0.14 235 / 0.18)" stroke="oklch(0.82 0.14 235 / 0.5)" />
                <g fill="oklch(0.97 0.005 260)">
                  <rect x="216" y="104" width="120" height="4" rx="2" />
                  <rect x="216" y="114" width="80"  height="4" rx="2" />
                </g>
                <g fill="oklch(0.86 0.13 165)">
                  <circle cx="195" cy="74" r="2.5" />
                  <circle cx="205" cy="80" r="2.5" />
                  <circle cx="215" cy="86" r="2.5" />
                </g>
              </svg>
            </div>
            <div className="pmark">
              <span>CASE 05 · CHAT-E-BOT · NLP</span>
              <span className="badge-old">// 2023</span>
            </div>
            <h3>Placement chatbot in Django.</h3>
            <p>
              Django-powered chatbot answering placement-related queries with
              Natural Language Processing. Drop-in: integrates into any website
              or app with a tiny embed.
            </p>
            <div className="proj-tags">
              <span>Django</span>
              <span>Python</span>
              <span>NLP</span>
              <span>HTML/CSS</span>
            </div>
            <div className="proj-cta">
              <a href="https://github.com/Hemant-Agrawal/Chat-e-Bot" target="_blank" rel="noopener noreferrer">
                Source <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </TiltCard>

        {/* 6. Space Invasion — Python + Pygame */}
        <TiltCard>
          <div className="proj-inner">
            <div className="viz">
              <svg viewBox="0 0 400 160" preserveAspectRatio="none">
                <g fill="oklch(0.97 0.005 260)">
                  <rect x="20"  y="20"  width="2" height="2" />
                  <rect x="80"  y="40"  width="2" height="2" />
                  <rect x="140" y="14"  width="2" height="2" />
                  <rect x="220" y="28"  width="2" height="2" />
                  <rect x="300" y="18"  width="2" height="2" />
                  <rect x="360" y="50"  width="2" height="2" />
                  <rect x="50"  y="100" width="2" height="2" />
                  <rect x="180" y="120" width="2" height="2" />
                  <rect x="340" y="130" width="2" height="2" />
                </g>
                <g fill="oklch(0.86 0.13 165)" transform="translate(170 50)">
                  <rect x="10" y="0"  width="6" height="6" />
                  <rect x="44" y="0"  width="6" height="6" />
                  <rect x="16" y="6"  width="6" height="6" />
                  <rect x="38" y="6"  width="6" height="6" />
                  <rect x="10" y="12" width="40" height="6" />
                  <rect x="4"  y="18" width="6" height="6" />
                  <rect x="16" y="18" width="6" height="6" />
                  <rect x="28" y="18" width="6" height="6" />
                  <rect x="38" y="18" width="6" height="6" />
                  <rect x="50" y="18" width="6" height="6" />
                  <rect x="0"  y="24" width="60" height="6" />
                  <rect x="0"  y="30" width="6" height="6" />
                  <rect x="22" y="30" width="6" height="6" />
                  <rect x="32" y="30" width="6" height="6" />
                  <rect x="54" y="30" width="6" height="6" />
                </g>
                <g fill="oklch(0.82 0.14 235)" transform="translate(190 130)">
                  <rect x="8" y="0"  width="6" height="6" />
                  <rect x="0" y="6"  width="22" height="6" />
                  <rect x="0" y="12" width="22" height="6" />
                </g>
                <rect x="200" y="100" width="2" height="22" fill="oklch(0.82 0.14 235)" />
              </svg>
            </div>
            <div className="pmark">
              <span>CASE 06 · SPACE INVASION · PYGAME</span>
              <span className="badge-old">// 2023</span>
            </div>
            <h3>Defend Earth, one alien at a time.</h3>
            <p>
              Space-themed action game in Python + Pygame. Captivating
              storyline, immersive gameplay, and an intergalactic battle. Where
              I cut my teeth on game loops, sprite collisions, and frame
              budgets.
            </p>
            <div className="proj-tags">
              <span>Python</span>
              <span>Pygame</span>
              <span>Game Dev</span>
            </div>
            <div className="proj-cta">
              <a href="https://github.com/Hemant-Agrawal/Space-Invasion" target="_blank" rel="noopener noreferrer">
                Source <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </TiltCard>
      </div>

      <div className="pq-strip reveal">
        <blockquote className="pq">
          With a commitment to quality, I use Playwright, Jest and
          React-testing-library to make sure every app is flawless.
          <cite>— Hemant, on shipping with confidence</cite>
        </blockquote>
      </div>
    </div>
  );
}
