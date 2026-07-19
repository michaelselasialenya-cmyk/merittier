import Link from "next/link";
import { notFound } from "next/navigation";
import { SECTIONS, getSection } from "@/lib/sections";
import { articlesBySection } from "@/lib/articles";

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.slug }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const sec = getSection(section);
  if (!sec) notFound();
  const articles = articlesBySection(section);

  // Simple "best pick" heuristic: first featured article in the section.
  const best = articles.find((a) => a.featured) ?? articles[0];

  return (
    <div>
      <header className="mb-10 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{sec.name}</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">{sec.name}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{sec.blurb}</p>
      </header>

      {best && (
        <div className="mb-10 rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Our pick for {sec.name}</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link href={`/${best.section}/${best.slug}`} className="font-serif text-2xl font-semibold hover:text-accent">
                {best.title}
              </Link>
              <p className="mt-1 max-w-xl text-sm text-muted">{best.dek}</p>
            </div>
            <Link
              href={`/${best.section}/${best.slug}`}
              className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Read the pick →
            </Link>
          </div>
        </div>
      )}

      {articles.length === 0 ? (
        <p className="text-muted">New reviews landing here soon.</p>
      ) : (
        <div className="card-grid">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/${section}/${a.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              <div className="card-img relative w-full overflow-hidden bg-[#f3f1ec]" />
              <div className="flex flex-1 flex-col p-5">
                <span className="card-cat">{a.type}</span>
                <h3 className="mt-2 font-serif text-xl font-semibold leading-tight group-hover:text-accent">{a.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted">{a.dek}</p>
                <span className="mt-auto pt-4 text-sm font-medium">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
