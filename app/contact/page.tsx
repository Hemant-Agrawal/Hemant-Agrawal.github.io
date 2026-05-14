import type { Metadata } from "next";
import Link from "next/link";
import { Shards } from "./Shards";
import { ContactForm } from "./ContactForm";
import { withBase } from "@/lib/withBase";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact — Hemant Agrawal",
  description:
    "Reach out — fellow developer, project owner, or recruiter. Email, LinkedIn, GitHub, or résumé.",
};

export default function ContactPage() {
  return (
    <div className="page" data-screen-label="Contact">
      <div className="page-head reveal" style={{ textAlign: "center" }}>
        <span className="lab">06 — LET&apos;S TALK</span>
        <h1>
          Reach out, <span className="accent">any way</span> that works.
        </h1>
        <p className="lead" style={{ margin: "0 auto" }}>
          Whether you&apos;re a fellow developer, a project owner with a brief,
          or a recruiter with a role — the door&apos;s open. Drop a line below
          or pick a channel.
        </p>
      </div>

      <Shards />

      <section className="channels reveal">
        <a className="ch" href="mailto:ha.hemantagrawal@gmail.com">
          <span className="arrow">↗</span>
          <div className="ico">
            <svg viewBox="0 0 24 24"><path d="M2 6.5C2 5.67 2.67 5 3.5 5h17c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-17c-.83 0-1.5-.67-1.5-1.5v-11Zm2.18-.5L12 11.69 19.82 6H4.18ZM20 7.62l-7.39 5.39a1 1 0 0 1-1.22 0L4 7.62V17h16V7.62Z" /></svg>
          </div>
          <div className="lab">EMAIL</div>
          <h4>ha.hemantagrawal@gmail.com</h4>
          <p>Best for full briefs and threaded conversations.</p>
        </a>

        <a className="ch li" href="https://www.linkedin.com/in/hemant-ag" target="_blank" rel="noopener noreferrer">
          <span className="arrow">↗</span>
          <div className="ico">
            <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.74V21h-4v-5.55c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.92V21h-4V9Z" /></svg>
          </div>
          <div className="lab">LINKEDIN</div>
          <h4>linkedin.com/in/hemant-ag</h4>
          <p>Full work history, recommendations, recent posts.</p>
        </a>

        <a className="ch gh" href="https://github.com/Hemantagrawal" target="_blank" rel="noopener noreferrer">
          <span className="arrow">↗</span>
          <div className="ico">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.04A9.5 9.5 0 0 1 12 6.84c.85.01 1.7.12 2.5.34 1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.43.1 2.69.64.71 1.03 1.62 1.03 2.73 0 3.9-2.35 4.76-4.58 5.01.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" /></svg>
          </div>
          <div className="lab">GITHUB</div>
          <h4>github.com/Hemantagrawal</h4>
          <p>Code, side projects, AI experiments &amp; PRs.</p>
        </a>

        <a className="ch cv" href={withBase("/assets/Hemant-Agrawal-Resume.pdf")} download>
          <span className="arrow">↓</span>
          <div className="ico">
            <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM12 11a1 1 0 0 1 1 1v4.59l1.3-1.3a1 1 0 1 1 1.4 1.42l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.42L11 16.6V12a1 1 0 0 1 1-1Z" /></svg>
          </div>
          <div className="lab">RESUME · PDF</div>
          <h4>Download CV</h4>
          <p>Full résumé — work history, skills, education.</p>
        </a>
      </section>

      <section className="form-wrap reveal">
        <div className="form-left">
          <span className="eyebrow">DROP A LINE</span>
          <h2>
            Tell me what you&apos;re <span className="accent">building.</span>
          </h2>
          <p>
            I read every message personally. Whether it&apos;s a role, a collab,
            or &ldquo;hey, can you help me think through this React → Next
            migration&rdquo; — I&apos;ll get back to you, usually within 48
            hours.
          </p>

          <blockquote className="pq" style={{ margin: "18px 0" }}>
            Are you into building user-centric, performance-optimized web apps
            too? Let&apos;s connect!
            <cite>— Hemant</cite>
          </blockquote>

          <div className="quick">
            <a href="https://cal.com/hemant-ag" target="_blank" rel="noopener noreferrer">
              Book a 20-min call <span>cal.com/hemant-ag ↗</span>
            </a>
            <a href="mailto:ha.hemantagrawal@gmail.com">
              Email <span>ha.hemantagrawal@gmail.com</span>
            </a>
            <a href="tel:+918755988217">
              Phone <span>+91 87559 88217</span>
            </a>
            <a href="https://wa.me/918755988217" target="_blank" rel="noopener noreferrer">
              WhatsApp <span>+91 87559 88217</span>
            </a>
            <a href="https://www.linkedin.com/in/hemant-ag" target="_blank" rel="noopener noreferrer">
              LinkedIn DM <span>/in/hemant-ag</span>
            </a>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="resume-cta reveal" id="resume">
        <div className="left">
          <div className="ico">
            <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM7 13h10v1.5H7V13Zm0 3h10v1.5H7V16Zm0-6h6v1.5H7V10Z" /></svg>
          </div>
          <div>
            <h3>Prefer the long-form?</h3>
            <p>{`// Hemant-Agrawal-Resume.pdf · updated 2026`}</p>
          </div>
        </div>
        <div className="actions">
          <a className="btn btn-primary" href={withBase("/assets/Hemant-Agrawal-Resume.pdf")} download>
            Download CV <span className="arrow">↓</span>
          </a>
          <a className="btn" href={withBase("/assets/Hemant-Agrawal-Resume.pdf")} target="_blank" rel="noopener noreferrer">
            View <span className="arrow">↗</span>
          </a>
        </div>
      </section>

      <section className="closer reveal">
        <h2>
          Looking for a senior engineer who <span className="accent">owns</span>{" "}
          the system?
        </h2>
        <p>
          5+ years of front-end depth, full-stack range, and a growing AI craft —
          with a track record of leading modules, mentoring, and shipping at
          quality.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="https://cal.com/hemant-ag" target="_blank" rel="noopener noreferrer">
            Book a call <span className="arrow">↗</span>
          </a>
          <a className="btn" href="mailto:ha.hemantagrawal@gmail.com">
            Email me <span className="arrow">→</span>
          </a>
          <Link className="btn" href="/">
            Back to home <span className="arrow">↺</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
