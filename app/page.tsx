import Link from "next/link";
import { ARTICLES } from "@/lib/articles";

function Card({ a, feature }: { a: (typeof ARTICLES)[number]; feature?: boolean }) {
  return (
    <Link
      href={`/${a.section}/${a.slug}`}
      className={`card-feature group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${feature ? "col-span-full" : ""}`}
    >
      <div className={`card-img relative w-full overflow-hidden bg-[#f3f1ec] ${feature ? "" : ""}`}>
        <div className="absolute inset-0 flex items-center justify-center font-serif text-3xl text-border">
          {a.title.slice(0, 1)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="card-cat">{a.type}</span>
        <h3 className={`mt-2 font-serif font-semibold leading-tight text-foreground group-hover:text-accent ${feature ? "text-3xl" : "text-xl"}`}>
          {a.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted">{a.dek}</p>
        <span className="mt-auto pt-4 text-sm font-medium text-foreground">Read →</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const [feature, ...rest] = ARTICLES;
  return (
    <div>
      <section className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">AI tools · automation · cloud</p>
        <h1 className="mt-3 font-serif text-4xl leading-[1.05] font-semibold sm:text-5xl">
          The tools worth your time — reviewed by someone who actually uses them.
        </h1>
        <p className="mt-4 text-lg text-muted">
          No fluff, no recycled listicles. First-hand testing of the software that helps you build, automate and ship.
        </p>
      </section>

      <div className="card-grid">
        <Card a={feature} feature />
        {rest.map((a) => (
          <Card key={a.slug} a={a} />
        ))}
      </div>
    </div>
  );
}
