import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { CoverImage } from "@/components/CoverImage";

export const metadata = { title: "All Articles - Merittier" };

export default function ArticlesPage() {
  return (
    <div>
      <header className="mb-10 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Every review</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">All Articles</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Every review, comparison and guide we&rsquo;ve published, newest first.
        </p>
      </header>

      <div className="card-grid">
        {ARTICLES.map((a) => (
          <Link
            key={a.slug}
            href={`/${a.section}/${a.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50"
          >
            <CoverImage src={a.image} alt={a.title} className="card-img w-full" />
            <div className="flex flex-1 flex-col p-5">
              <span className="card-cat">{a.type}</span>
              <h3 className="mt-2 text-xl font-bold leading-tight group-hover:text-accent">{a.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{a.dek}</p>
              <span className="mt-auto pt-4 text-sm font-medium text-accent">Read →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
