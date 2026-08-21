import Link from "next/link";
import { SECTIONS } from "@/lib/sections";
import { articlesBySection } from "@/lib/articles";

export const metadata = { title: "Topics - Merittier" };

export default function TopicsPage() {
  return (
    <div>
      <header className="mb-10 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Browse by topic</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Topics</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Six fixed categories. Jump to the kind of buying decision you&rsquo;re actually making.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {SECTIONS.map((s) => {
          const count = articlesBySection(s.slug).length;
          return (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <h2 className="text-2xl font-bold group-hover:text-accent">{s.name}</h2>
              <p className="mt-2 text-muted">{s.blurb}</p>
              <p className="mt-4 text-sm font-medium text-accent">
                {count} article{count === 1 ? "" : "s"} →
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
