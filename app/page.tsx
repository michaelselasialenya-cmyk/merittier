import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { CoverImage } from "@/components/CoverImage";
import { Clock, Eye, Sparkles } from "lucide-react";

function FeaturedCard({ a }: { a: (typeof ARTICLES)[number] }) {
  return (
    <Link
      href={`/${a.section}/${a.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50"
    >
      <CoverImage src={a.image} alt={a.title} className="card-img w-full" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-sm text-accent">
          <Sparkles className="h-4 w-4" />
          <span>{a.type}</span>
        </div>
        <h3 className="text-xl font-bold leading-tight group-hover:text-accent">{a.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted">{a.dek}</p>
        <div className="mt-auto flex items-center justify-between pt-6 text-sm text-muted">
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 2026</span>
          <span className="text-accent">Read more →</span>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ a }: { a: (typeof ARTICLES)[number] }) {
  return (
    <Link href={`/${a.section}/${a.slug}`} className="group">
      <div className="space-y-3">
        <CoverImage
          src={a.image}
          alt={a.title}
          className="card-img w-full rounded-lg border border-border group-hover:border-accent/50"
        />
        <div>
          <span className="card-cat">{a.type}</span>
          <h3 className="mt-2 font-semibold leading-tight group-hover:text-accent">{a.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{a.dek}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const featured = ARTICLES.filter((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);
  return (
    <div>
      <section className="mb-20 grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            The tools worth your time <span className="text-accent">reviewed properly.</span>
          </h1>
          <p className="text-lg text-muted md:text-xl">
            No fluff, no recycled listicles. First-hand testing of AI tools, automation and cloud infrastructure.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/cloud" className="rounded-md bg-accent px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-accent-hover">
              Latest Reviews
            </Link>
            <Link href="/cloud/best-vps-for-ai-agents" className="rounded-md border border-border px-6 py-3 text-center font-semibold transition-colors hover:border-accent">
              Our Top Pick
            </Link>
          </div>
        </div>
        <CoverImage
          src="/images/hero.jpg"
          alt="Workspace with a laptop used for reviewing developer tools"
          className="h-[360px] w-full rounded-xl border border-border"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </section>

      <section className="mb-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Reviews</h2>
          <Link href="/articles" className="flex items-center gap-2 text-sm text-accent hover:text-accent-hover">
            View all <Eye className="h-4 w-4" />
          </Link>
        </div>
        <div className="card-grid">
          {featured.map((a) => <FeaturedCard key={a.slug} a={a} />)}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-bold">Recent Articles</h2>
        <div className="card-grid">
          {rest.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </section>

      <section id="newsletter" className="mt-20 rounded-xl border border-border bg-card p-8 sm:p-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold">Stay Updated</h2>
          <p className="mt-2 text-muted">
            Get new reviews, comparisons and pricing updates as soon as they&rsquo;re published.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
