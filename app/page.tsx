import type { Metadata } from "next";
import Link from "next/link";
import { IdCard } from "./IdCard";
import "./home.css";

export const metadata: Metadata = {
  title: "Hemant Agrawal — SDE 3 · Full-Stack & AI",
  description:
    "Senior software engineer (SDE 3). Five years of front-end heavy, full-stack products in React, Next.js, Tailwind — now exploring AI on the front-end.",
};

const STRIP_ITEMS = [
  "SHIPPED REACT → NEXT.JS MIGRATIONS",
  "CI/CD ON GCP",
  "PROGRESSIVE WEB APPS",
  "CLAUDE · MCP · AGENTIC AI",
  "PLAYWRIGHT · JEST · RTL · STORYBOOK",
  "N8N · HOMELAB · PORTAINER",
  "MENTORING JUNIORS",
  "SDE 2 → SDE 3",
];

export default function HomePage() {
  const stripSpan = (
    <span>
      {STRIP_ITEMS.map((t, i) => (
        <span key={i}>
          <i>◆</i> {t}
        </span>
      ))}
    </span>
  );

  return (
    <div className="page" data-screen-label="Home">
      <div className="page-head" style={{ marginBottom: 0, paddingTop: 0 }} />

      <section className="hero">
        <div className="hero-copy">
          <span className="greeting">HEMANT AGRAWAL · GURUGRAM, IN</span>
          <h1>
            I ship products that <em>scale</em>
            <br />
            &amp; interfaces that <em>think.</em>
          </h1>
          <p className="pitch">
            <b>Senior engineer (SDE 3).</b> Five years building front-end heavy,
            full-stack products in <b>React, Next.js and Tailwind</b> — now leading
            ownership areas at <b>CAW</b>, mentoring juniors, and exploring how AI
            merges with the front-end to ship delightful, performant experiences.
          </p>

          <div className="stat-row">
            <div className="cell"><div className="k">Years</div><div className="v">5+ <small>yrs</small></div></div>
            <div className="cell"><div className="k">Level</div><div className="v">SDE 3</div></div>
            <div className="cell"><div className="k">Companies</div><div className="v">3</div></div>
            <div className="cell"><div className="k">Award</div><div className="v">IC <small>of month</small></div></div>
          </div>

          <div className="hero-actions">
            <Link className="btn btn-primary" href="/projects">
              See my work <span className="arrow">→</span>
            </Link>
            <Link className="btn" href="/experience">
              Career timeline <span className="arrow">↗</span>
            </Link>
            <Link className="btn" href="/contact">Get in touch</Link>
          </div>
        </div>

        <IdCard />
      </section>

      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {stripSpan}
          {stripSpan}
        </div>
      </div>

      <section className="about reveal">
        <div>
          <span className="eyebrow">WHY ME</span>
          <h2 className="why-heading">
            A senior IC who{" "}
            <em>owns the surface, the system, and the ship date.</em>
          </h2>
          <p className="why-lead">
            I&apos;m not just shipping tickets — I&apos;m leading modules, driving
            design decisions and mentoring the next layer of engineers. My profile
            sits at the intersection of{" "}
            <b>front-end depth, full-stack range, and an emerging AI craft</b>.
            Hire me when the ask is &ldquo;own this end-to-end, make it fast, and
            bring the team with you.&rdquo;
          </p>

          <blockquote className="pq">
            Currently exploring how AI can merge with frontend to create
            delightful experiences.
            <cite>— Hemant, on what&apos;s next</cite>
          </blockquote>
        </div>

        <div className="why-list">
          <div className="why-card">
            <span className="ix">01</span>
            <div>
              <h4>I own modules, not tickets.</h4>
              <p>At CAW I lead larger ownership areas — driving design decisions and mentoring junior engineers, not just executing handed-off specs.</p>
            </div>
          </div>
          <div className="why-card">
            <span className="ix">02</span>
            <div>
              <h4>Performance &amp; quality are non-negotiable.</h4>
              <p>I migrate to faster stacks (React → Next.js, twice), ship PWAs with service workers, and gate every component with Jest, RTL and Playwright.</p>
            </div>
          </div>
          <div className="why-card">
            <span className="ix">03</span>
            <div>
              <h4>I build the pipeline, not just the page.</h4>
              <p>GitLab Runner with Google Cloud, Storybook, automated regression. The fastest team is the one whose CI never blocks them.</p>
            </div>
          </div>
          <div className="why-card">
            <span className="ix">04</span>
            <div>
              <h4>AI is the next layer of every product I build.</h4>
              <p>Claude, MCP servers, and agentic workflows on n8n are top of my stack. I&apos;m running a homelab of containers to prototype this in the open, every week.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights reveal">
        <div className="hl">
          <div className="badge">↑</div>
          <div className="lab">PROMOTION · 2026</div>
          <h4>SDE 2 → SDE 3 at CAW</h4>
          <p>Promoted into senior IC level after 2y 9m of contribution at Chimpsatwork Studios. Now leading ownership areas, design decisions and mentorship.</p>
        </div>
        <div className="hl gold">
          <div className="badge">★</div>
          <div className="lab">RECOGNITION</div>
          <h4>Individual Contributor of the Month</h4>
          <p>Recognized for high-impact individual contribution — shipping cleanly, defending decisions, and lifting the team along the way.</p>
        </div>
        <div className="hl violet">
          <div className="badge">▣</div>
          <div className="lab">EDUCATION · 2021—2023</div>
          <h4>MCA · Chandigarh University</h4>
          <p>Master of Computer Applications. BCA at GLA University before that. Self-taught full-stack and AI on top of formal CS foundations.</p>
        </div>
      </section>
    </div>
  );
}
