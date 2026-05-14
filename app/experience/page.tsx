import type { Metadata } from "next";
import { IsoScene } from "./IsoScene";
import "./experience.css";

export const metadata: Metadata = {
  title: "Experience — Hemant Agrawal",
  description:
    "Five years, three companies, one upward arc. Career trajectory from Innostax to Fixcraft to CAW (SDE 2 → SDE 3).",
};

type Role = {
  when: string;
  title: string;
  company: string;
  summary: string;
  bullets: string[];
  stats?: { v: string; k: string }[];
  current?: boolean;
  pill?: string;
};

const ROLES: Role[] = [
  {
    when: "JAN 2026 — PRESENT · CAW · HYDERABAD",
    title: "Software Development Engineer 3",
    company: "Chimpsatwork Studios",
    summary:
      "Promoted into SDE 3 after three years at CAW. Now leading larger ownership areas, driving design decisions, mentoring junior engineers, and contributing to scalable systems.",
    bullets: [
      "Leading ownership of larger modules end-to-end — from architecture through release.",
      "Driving technical design decisions and reviewing proposals across the team.",
      "Mentoring junior engineers and shaping how they grow into the codebase.",
      "Investing personal cycles into AI + front-end as the next layer of every product.",
    ],
    stats: [
      { v: "SDE 3", k: "level" },
      { v: "Module", k: "ownership" },
      { v: "Mentor", k: "to juniors" },
    ],
    current: true,
    pill: "● Current · Promoted",
  },
  {
    when: "MAY 2023 — JAN 2026 · CAW · 2Y 9M",
    title: "Software Developer II",
    company: "Chimpsatwork Studios",
    summary:
      "Joined CAW as SDE 2 and grew into a senior individual contributor. Built robust software solutions, influenced project architectures, and laid the groundwork for the SDE 3 promotion.",
    bullets: [
      "Contributed to building robust software solutions across multiple product surfaces.",
      "Influenced project architectures and helped set technical direction.",
      "Worked Agile end-to-end — incremental, timely, qualitative builds.",
    ],
    stats: [
      { v: "2y 9m", k: "tenure" },
      { v: "SDE 2 → 3", k: "promotion" },
    ],
  },
  {
    when: "MAY 2022 — MAY 2023 · FIXCRAFT.IN · 1Y 1M",
    title: "Frontend Developer",
    company: "Fixcraft",
    summary:
      "Owned the front-end transformation at Fixcraft — migrated the existing React codebase to Next.js with Tailwind, set up CI/CD on Google Cloud, and added service workers to ship a PWA.",
    bullets: [
      "Configured GitLab Runner with Google Cloud for CI/CD across multiple web projects.",
      "Revamped the existing React JS app into a Next.js application using Tailwind CSS.",
      "Implemented service workers to support Progressive Web Application behaviour.",
      "Built UI in React + Next.js with HTML5, CSS and TypeScript.",
      "Wrote Jest tests for components, prioritizing maximum coverage on independents.",
      "Worked Agile, with incremental delivery across multiple web projects.",
    ],
    stats: [
      { v: "React → Next", k: "migration" },
      { v: "PWA", k: "shipped" },
      { v: "GitLab + GCP", k: "ci/cd" },
    ],
  },
  {
    when: "MAY 2021 — MAY 2022 · INNOSTAX · 1Y 1M",
    title: "Software Development Engineer",
    company: "Innostax Software Labs · Gurugram",
    summary:
      "Promoted from Associate. Shipped real product across UI, services, and tooling — and concurrently worked with Vice Software, LLC.",
    bullets: [
      "Migrated an existing React + Bootstrap app to Next.js + Tailwind for performance gains.",
      "Built an Admin portal using Django Admin to manage back-end operations.",
      "Integrated Storybook into existing products and built independent components with Jest coverage.",
      "Built multiple Express + Node endpoints for back-end ↔ front-end communication.",
      "Assisted 5 software personnel with project work and client requirements.",
    ],
    stats: [
      { v: "5", k: "teammates supported" },
      { v: "React→Next", k: "migration" },
      { v: "Django", k: "admin portal" },
    ],
  },
  {
    when: "NOV 2020 — MAY 2021 · INNOSTAX · 7M",
    title: "Associate Software Engineer",
    company: "Innostax Software Labs · Gurugram",
    summary:
      "Where it started. Cut my teeth on responsive React UI, Express endpoints, and the testing harness that's followed me through every job since.",
    bullets: [
      "Built highly-responsive UI components with React.",
      "Stood up multiple Express + Node endpoints for back-end ↔ front-end communication.",
      "Tested with Playwright, Jest and React-testing-library — set the bar for the team.",
      "Worked Agile for incremental delivery and timely releases.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="page" data-screen-label="Experience">
      <div className="page-head reveal">
        <span className="lab">02 — TRAJECTORY</span>
        <h1>
          Five years.<br />Three companies.<br />One{" "}
          <span className="accent">upward</span> arc.
        </h1>
        <p className="lead">
          A career landscape — drag your cursor across it. The taller the
          building, the bigger the role.
        </p>
      </div>

      <IsoScene />

      <blockquote className="pq reveal">
        I love the incremental, timely, and qualitative builds Agile fosters —
        that&apos;s how I&apos;ve been shipping for five years.
        <cite>— Hemant, on how he works</cite>
      </blockquote>

      <div className="roles" style={{ marginTop: 40 }}>
        {ROLES.map((r) => (
          <article
            key={r.when}
            className={`role reveal${r.current ? " current" : ""}`}
          >
            <div className="role-head">
              <div>
                <div className="when">{r.when}</div>
                <h3>{r.title}</h3>
                <div className="co">{r.company}</div>
              </div>
              {r.pill && <span className="pill">{r.pill}</span>}
            </div>
            <p className="summary">{r.summary}</p>
            <ul>
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {r.stats && (
              <div className="role-stats">
                {r.stats.map((s) => (
                  <div key={s.k} className="s">
                    <div className="v">{s.v}</div>
                    <div className="k">{s.k}</div>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
