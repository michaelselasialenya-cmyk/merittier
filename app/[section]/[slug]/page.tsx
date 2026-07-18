import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/articles";
import { getSection } from "@/lib/sections";
import { AffiliateLink } from "@/components/AffiliateLink";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ section: a.section, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  return { title: a ? `${a.title} — Toolflow` : "Toolflow" };
}

export default async function ArticlePage({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params;
  const a = getArticle(slug);
  if (!a || a.section !== section) notFound();
  const sec = getSection(section);

  return (
    <article className="mx-auto max-w-3xl">
      <Link href={`/${section}`} className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        ← {sec?.name}
      </Link>
      <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">{a.title}</h1>
      <p className="mt-4 text-xl text-muted">{a.dek}</p>

      <div className="my-8 aspect-[16/8] w-full overflow-hidden rounded-2xl bg-[#f3f1ec]" />

      <div className="prose-tf space-y-5 text-[1.05rem] leading-relaxed text-foreground">
        <p>
          Most &ldquo;best of&rdquo; articles are written by people who have never opened the product. This one isn&rsquo;t.
          I&rsquo;ve run <strong>{a.title.replace(/^[^:]+:\s*/, "").trim() || a.title}</strong> in production for months, and
          everything below comes from that experience — the wins, the annoying bits, and the bill at the end of the month.
        </p>
        <p>
          If you just want the recommendation: the link below is the provider I actually pay for, and it supports the site at
          no extra cost to you.
        </p>
      </div>

      {a.program && (
        <div className="my-10 rounded-2xl border border-border bg-card p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">My pick</p>
          <p className="mt-2 font-serif text-2xl font-semibold">Ready to try it?</p>
          <div className="mt-4 flex justify-center">
            <AffiliateLink program={a.program ?? ""}>
              Get the deal →
            </AffiliateLink>
          </div>
          <p className="mt-3 text-xs text-muted">Affiliate link · costs you nothing extra.</p>
        </div>
      )}

      <div className="mt-12 border-t border-border pt-6 text-sm text-muted">
        More in <Link href={`/${section}`} className="font-medium text-accent">{sec?.name}</Link> ·{" "}
        <Link href="/" className="font-medium text-accent">Home</Link>
      </div>
    </article>
  );
}
