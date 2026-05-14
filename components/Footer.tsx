import Link from "next/link";

export function Footer() {
  return (
    <footer className="foot">
      <div>© 2026 Hemant Agrawal — built end-to-end, no template.</div>
      <div>
        <a href="mailto:ha.hemantagrawal@gmail.com">email</a>
        <a
          href="https://www.linkedin.com/in/hemant-ag"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          href="https://github.com/Hemantagrawal"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <Link href="/contact#resume">resume</Link>
      </div>
    </footer>
  );
}
