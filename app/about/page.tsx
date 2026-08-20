export const metadata = { title: "About - Merittier" };

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">About</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Reviews from someone who actually uses the tools.</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
        <p>
          Merittier exists because most &ldquo;best of&rdquo; roundups are written by people who never
          opened the product. We test AI tools, automation platforms and cloud infrastructure first-hand,
          verify pricing directly from provider sites, and write it up straight. No fluff, no filler.
        </p>
        <p>
          Some links on this site are affiliate links. They cost you nothing extra and help keep the
          site running. We only recommend what we&rsquo;d actually use ourselves.
        </p>
        <p>
          Have a tool you want reviewed, or spotted something out of date? Reach out at{" "}
          <a href="mailto:marketing@merittier.com" className="font-medium text-accent">
            marketing@merittier.com
          </a>.
        </p>
      </div>
    </article>
  );
}
