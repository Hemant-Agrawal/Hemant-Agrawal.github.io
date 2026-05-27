import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Ambient } from "@/components/Ambient";
import { CursorGlow } from "@/components/CursorGlow";
import { Rail } from "@/components/Rail";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { PageTransitionProvider } from "@/components/PageTransition";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://hemant-agrawal.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hemant Agrawal — SDE 3 · Full-Stack & AI",
    template: "%s — Hemant Agrawal",
  },
  description:
    "Senior software engineer (SDE 3). Five years of front-end heavy, full-stack products in React, Next.js, Tailwind — now exploring AI on the front-end.",
  keywords: [
    "Hemant Agrawal",
    "SDE 3",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "AI",
    "Frontend",
    "Portfolio",
  ],
  authors: [{ name: "Hemant Agrawal" }],
  creator: "Hemant Agrawal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Hemant Agrawal",
    title: "Hemant Agrawal — SDE 3 · Full-Stack & AI",
    description:
      "Senior software engineer (SDE 3). Front-end heavy, full-stack — React, Next.js, AI.",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hemant Agrawal — SDE 3 · Full-Stack & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemant Agrawal — SDE 3 · Full-Stack & AI",
    description:
      "Senior software engineer (SDE 3). Front-end heavy, full-stack — React, Next.js, AI.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrains.variable}`}>
      <body>
        <Ambient />
        <CursorGlow />
        <PageTransitionProvider>
          <Rail />
          <TopBar />
          <main id="main">{children}</main>
          <Footer />
          <RevealObserver />
        </PageTransitionProvider>
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      </body>
    </html>
  );
}
