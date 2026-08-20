import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github, Linkedin, Mail, Rss, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merittier - Honest Reviews of AI Tools, Automation, Cloud & More",
  description:
    "Honest, first-hand reviews of AI tools, automation platforms, cloud hosting and productivity software. Built for people who ship.",
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/topics", label: "Topics" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Meri<span className="text-accent">ttier</span>
            </Link>
            <nav className="hidden gap-7 text-sm text-muted sm:flex">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/#newsletter"
                className="rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
              >
                Subscribe
              </Link>
            </div>
          </div>
          <nav className="flex gap-5 overflow-x-auto border-t border-border px-5 py-2 text-xs text-muted sm:hidden">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="whitespace-nowrap">
                {n.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">{children}</main>

        <footer className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="space-y-4">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                  Meri<span className="text-accent">ttier</span>
                </Link>
                <p className="text-sm text-muted">
                  Independent, first-hand reviews of AI tools, automation and cloud infrastructure.
                </p>
                <div className="flex space-x-4 text-muted">
                  <Link href="#" className="hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
                  <Link href="#" className="hover:text-foreground"><Github className="h-5 w-5" /></Link>
                  <Link href="#" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
                  <Link href="#" className="hover:text-foreground"><Rss className="h-5 w-5" /></Link>
                </div>
              </div>
              <div>
                <h3 className="mb-4 font-medium">Navigate</h3>
                <ul className="space-y-2 text-sm text-muted">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <Link href={n.href} className="hover:text-foreground">{n.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-medium">Resources</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li><Link href="/cloud/best-vps-for-ai-agents" className="hover:text-foreground">Best VPS Picks</Link></li>
                  <li><Link href="/topics" className="hover:text-foreground">Browse Topics</Link></li>
                  <li><Link href="/articles" className="hover:text-foreground">All Articles</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-medium">Contact</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>marketing@merittier.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-border pt-6 text-sm text-muted">
              <p>© {new Date().getFullYear()} Merittier. Not affiliated with the brands reviewed. Some links are affiliate links.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
