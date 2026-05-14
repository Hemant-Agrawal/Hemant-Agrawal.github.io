import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Ambient } from "@/components/Ambient";
import { CursorGlow } from "@/components/CursorGlow";
import { Rail } from "@/components/Rail";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { PageTransitionProvider } from "@/components/PageTransition";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Hemant Agrawal — Portfolio",
  description: "SDE 3 · building end-to-end, no template.",
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
          {children}
          <Footer />
          <RevealObserver />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
