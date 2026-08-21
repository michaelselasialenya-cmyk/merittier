export function PolicyPage({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{kicker}</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">{children}</div>
    </article>
  );
}
