"use client";

import { useRef, useState, FormEvent } from "react";

const ROLE_LABELS: Record<string, string> = {
  developer: "Fellow Developer",
  "project-owner": "Project Owner",
  recruiter: "Recruiter / Hiring",
  other: "Something Else",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [opened, setOpened] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);
    const kind = (fd.get("kind") || "other").toString();
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const company = (fd.get("company") || "").toString().trim();
    const subject = (fd.get("subject") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    if (!name || !email || !subject || !message) {
      form.reportValidity();
      return;
    }

    const subj = `[${ROLE_LABELS[kind] || "Hello"}] ${subject}`;
    const lines = [
      "Hi Hemant,",
      "",
      message,
      "",
      `— ${name}` + (company ? ` · ${company}` : ""),
      `Reply: ${email}`,
      "Sent via: portfolio contact form",
    ];
    const mailto = `mailto:ha.hemantagrawal@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = mailto;
    setOpened(true);
  };

  return (
    <form className="form-card" ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="field">
        <label>I&apos;m reaching out as a<span className="req">*</span></label>
        <div className="role-picker" role="radiogroup" aria-label="Sender type">
          <label className="role-opt">
            <input type="radio" name="kind" value="developer" required defaultChecked />
            <span className="box"><span className="glyph">{"</>"}</span><span className="role-lab">Fellow Developer</span></span>
          </label>
          <label className="role-opt">
            <input type="radio" name="kind" value="project-owner" />
            <span className="box"><span className="glyph">▣</span><span className="role-lab">Project Owner</span></span>
          </label>
          <label className="role-opt">
            <input type="radio" name="kind" value="recruiter" />
            <span className="box"><span className="glyph">★</span><span className="role-lab">Recruiter / Hiring</span></span>
          </label>
          <label className="role-opt">
            <input type="radio" name="kind" value="other" />
            <span className="box"><span className="glyph">?</span><span className="role-lab">Something Else</span></span>
          </label>
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Your name<span className="req">*</span></label>
          <input type="text" id="name" name="name" required placeholder="Jane Doe" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email<span className="req">*</span></label>
          <input type="email" id="email" name="email" required placeholder="jane@company.com" autoComplete="email" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="company">Company / Org</label>
          <input type="text" id="company" name="company" placeholder="Acme Inc." autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="subject">Subject<span className="req">*</span></label>
          <input type="text" id="subject" name="subject" required placeholder="React + AI side project — collab?" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message<span className="req">*</span></label>
        <textarea id="message" name="message" required placeholder="A few lines on what you're working on, the ask, and any links or context. The more specific, the faster I can help." />
      </div>

      <div className="form-actions">
        <span className="form-hint">{`// opens your email client — no data leaves the page`}</span>
        <button type="submit" className="submit">
          Send message <span className="arrow">→</span>
        </button>
      </div>

      <div className={`form-success${opened ? " show" : ""}`}>
        <b>✓ Ready to send.</b> Your email app should have just opened with everything prefilled. If nothing happened, copy the details and email{" "}
        <a href="mailto:ha.hemantagrawal@gmail.com" style={{ color: "var(--accent)" }}>
          ha.hemantagrawal@gmail.com
        </a>{" "}
        directly.
      </div>
    </form>
  );
}
