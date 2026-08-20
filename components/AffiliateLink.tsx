import Link from "next/link";
import links from "@/lib/links.json";

// Cloaked affiliate link: <AffiliateLink program="contabo">Get Contabo</AffiliateLink>
// Swap real IDs in lib/links.json in ONE place.
export function AffiliateLink({
  program,
  children,
  className,
}: {
  program: string;
  children: React.ReactNode;
  className?: string;
}) {
  const href = (links as Record<string, string>)[program] ?? "#";
  return (
    <Link
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={className ?? "inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"}
    >
      {children}
    </Link>
  );
}
