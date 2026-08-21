import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = { title: "About - Merittier" };

export default function AboutPage() {
  return (
    <PolicyPage kicker="About" title="About Merittier">
      <p>Merittier exists to answer one question honestly: is this actually worth buying?</p>
      <p>
        We cover products and tools across six fixed categories: Tech &amp; Productivity, Health &amp; Wellness,
        Beauty &amp; Personal Care, Home &amp; Lifestyle, Money &amp; Finance, and Personal Development. Instead of
        chasing every trending product, we organize our coverage around these categories so readers always know
        what kind of site this is.
      </p>

      <h2 className="pt-4 text-2xl font-bold">How we work</h2>
      <p>
        Every article starts with a reader&rsquo;s actual problem, not a product we&rsquo;re trying to move. We
        research pricing, specs, and available information directly from manufacturers and providers, and we&rsquo;re
        upfront about the difference between something we&rsquo;ve used hands-on and something we&rsquo;ve researched
        thoroughly but not personally tested. We&rsquo;ll always tell you which one you&rsquo;re reading.
      </p>
      <p>
        We don&rsquo;t publish fake reviews, invented testimonials, or promised results. Where a product has real
        limitations, we say so. Where it isn&rsquo;t the right fit for a given reader, we say that too.
      </p>

      <h2 className="pt-4 text-2xl font-bold">How we make money</h2>
      <p>
        Merittier is supported by affiliate commissions. When you buy something through certain links on this site,
        we may earn a small commission, at no extra cost to you. This never determines which products we cover
        positively; it only helps keep the site running. Full details are on our{" "}
        <Link href="/disclosure" className="font-medium text-accent">
          Affiliate Disclosure
        </Link>{" "}
        page.
      </p>

      <h2 className="pt-4 text-2xl font-bold">Questions or corrections</h2>
      <p>
        Spotted something outdated, or want us to cover a specific product? Reach out at{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-accent underline underline-offset-2">
          {SITE_EMAIL}
        </a>
        .
      </p>
    </PolicyPage>
  );
}
