import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle, type Article } from "@/lib/articles";
import { getSection } from "@/lib/sections";
import { AffiliateLink } from "@/components/AffiliateLink";
import { CoverImage } from "@/components/CoverImage";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ section: a.section, slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  return { title: a ? `${a.title} - Merittier` : "Merittier" };
}

// Minimal, safe markdown renderer (subset: #, ##, ###, tables, - lists, **bold**, paragraphs).
// Avoids a dependency; renders to real HTML for SEO.
function renderMarkdown(body: string) {
  const lines = body.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={key++} className="mt-8 text-2xl font-bold">{line.slice(4)}</h3>);
      i++;
    } else if (line.startsWith("## ")) {
      blocks.push(<h2 key={key++} className="mt-10 text-3xl font-bold">{line.slice(3)}</h2>);
      i++;
    } else if (line.startsWith("# ")) {
      blocks.push(<h1 key={key++} className="mt-6 text-4xl font-bold">{line.slice(2)}</h1>);
      i++;
    } else if (line.startsWith("|")) {
      // table block
      const rows: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) { rows.push(lines[i]); i++; }
      const parse = (r: string) => r.split("|").slice(1, -1).map((c) => c.trim());
      const head = parse(rows[0]);
      const bodyRows = rows.slice(2).map(parse);
      blocks.push(
        <div key={key++} className="my-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-hover">{head.map((h, hi) => <th key={hi} className="border-b border-border px-4 py-2 text-left font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {bodyRows.map((r, ri) => (
                <tr key={ri} className="odd:bg-background even:bg-card-hover/40">
                  {r.map((c, ci) => <td key={ci} className="border-b border-border px-4 py-2 align-top" dangerouslySetInnerHTML={{ __html: inline(c) }} />)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) { items.push(lines[i].slice(2)); i++; }
      blocks.push(
        <ul key={key++} className="my-4 list-disc space-y-1 pl-6 text-[1.02rem] leading-relaxed">
          {items.map((it, ii) => <li key={ii} dangerouslySetInnerHTML={{ __html: inline(it) }} />)}
        </ul>
      );
    } else if (line.trim() === "") {
      i++;
    } else {
      blocks.push(<p key={key++} className="my-4 text-[1.05rem] leading-relaxed text-foreground/90" dangerouslySetInnerHTML={{ __html: inline(line) }} />);
      i++;
    }
  }
  return blocks;
}

// inline formatting: **bold** only (escaped already by React for text, but we use dangerouslySetInnerHTML for lists/tables)
function inline(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+?)`/g, "<code class='rounded bg-card-hover px-1 py-0.5 text-[0.9em]'>$1</code>");
}

export default async function ArticlePage({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params;
  const a: Article | undefined = getArticle(slug);
  if (!a || a.section !== section) notFound();
  const sec = getSection(section);
  const bodyHtml = a.body ? renderMarkdown(a.body) : null;

  return (
    <article className="mx-auto max-w-3xl">
      <Link href={`/${section}`} className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        ← {sec?.name}
      </Link>
      <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{a.title}</h1>
      <p className="mt-4 text-xl text-muted">{a.dek}</p>

      <CoverImage
        src={a.image}
        alt={a.title}
        className="my-8 aspect-[16/8] w-full rounded-xl border border-border"
        sizes="(max-width: 768px) 100vw, 768px"
        priority
      />

      {bodyHtml ? (
        <div className="prose-tf space-y-2">{bodyHtml}</div>
      ) : (
        <div className="prose-tf space-y-5 text-[1.05rem] leading-relaxed text-foreground">
          <p>Most &ldquo;best of&rdquo; articles are written by people who have never opened the product. This one isn&rsquo;t.</p>
        </div>
      )}

      {a.program && (
        <div className="my-10 rounded-xl border border-border bg-card p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">My pick</p>
          <p className="mt-2 text-2xl font-bold">Ready to try it?</p>
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
