import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SECTIONS } from "@/lib/sections";
import Link from "next/link";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toolflow — AI Tools, Automation & Cloud for Builders",
  description:
    "Honest, first-hand reviews of AI tools, automation platforms, cloud hosting and productivity software. Built for people who ship.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
              Toolflow<span className="text-accent">.</span>
            </Link>
            <nav className="hidden gap-7 text-xs font-medium uppercase tracking-[0.14em] text-muted sm:flex">
              {SECTIONS.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="transition-colors hover:text-foreground">
                  {s.name}
                </Link>
              ))}
            </nav>
            <Link
              href="/cloud/best-vps-for-ai-agents"
              className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              Start here
            </Link>
          </div>
          <nav className="flex gap-5 overflow-x-auto border-t border-border px-5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:hidden">
            {SECTIONS.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="whitespace-nowrap">
                {s.name}
              </Link>
            ))}
          </nav>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10">{children}</main>

        <footer className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted">
            <p className="font-serif text-lg text-foreground">Toolflow</p>
            <p className="mt-2 max-w-md">
              Independent, first-hand reviews. Some links are affiliate links — they cost you nothing and help keep the site running.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.14em]">
              {SECTIONS.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="mr-4 hover:text-foreground">
                  {s.name}
                </Link>
              ))}
            </p>
            <p className="mt-6 text-xs">© {new Date().getFullYear()} Toolflow. Not affiliated with the brands reviewed.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
