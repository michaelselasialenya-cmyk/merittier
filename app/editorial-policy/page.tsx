import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = { title: "Editorial Policy - Merittier" };

export default function EditorialPolicyPage() {
  return (
    <PolicyPage kicker="Trust" title="Editorial Policy">
      <h2 className="text-2xl font-bold">What we cover</h2>
      <p>
        Merittier organizes all content into six fixed categories: Tech &amp; Productivity, Health &amp; Wellness,
        Beauty &amp; Personal Care, Home &amp; Lifestyle, Money &amp; Finance, and Personal Development. We don&rsquo;t
        publish one-off content outside these categories just because a product or offer becomes available.
      </p>
      <p>
        We also intentionally don&rsquo;t cover certain categories, even when offers are available and commissions are
        attractive, including astrology, tarot, and psychic products, betting systems, and sensitive personal topics
        like eating disorders or abuse recovery. These either rest on claims we can&rsquo;t honestly evaluate or carry
        a real risk of harm, and neither fits what this site is for.
      </p>

      <h2 className="pt-4 text-2xl font-bold">How we choose what to feature</h2>
      <p>Before covering any product, we ask:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>What problem does it actually solve, and for whom?</li>
        <li>Is there enough public information (specs, pricing, documentation, independent user feedback) to write about it honestly?</li>
        <li>Would we be comfortable recommending it to someone we know?</li>
      </ul>

      <h2 className="pt-4 text-2xl font-bold">What we won&rsquo;t do</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          We won&rsquo;t claim to have personally tested something we haven&rsquo;t. Articles are clearly framed as
          either hands-on or research-based.
        </li>
        <li>We won&rsquo;t invent reviews, testimonials, statistics, or results.</li>
        <li>
          We won&rsquo;t claim any product cures, treats, prevents, or diagnoses a medical condition, or guarantees a
          financial outcome.
        </li>
        <li>We won&rsquo;t use high-pressure or urgency language that isn&rsquo;t tied to a real, verifiable fact.</li>
      </ul>

      <h2 className="pt-4 text-2xl font-bold">Affiliate relationships and editorial independence</h2>
      <p>
        Some articles contain affiliate links, and we may earn a commission on qualifying purchases. Affiliate
        relationships never determine whether coverage is positive. We note real limitations and better alternatives
        where they exist. See our{" "}
        <Link href="/disclosure" className="font-medium text-accent">
          Affiliate Disclosure
        </Link>{" "}
        for details.
      </p>

      <h2 className="pt-4 text-2xl font-bold">Corrections</h2>
      <p>
        If you find outdated pricing, a factual error, or a broken link, tell us at{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-accent">
          {SITE_EMAIL}
        </a>{" "}
        and we&rsquo;ll fix it.
      </p>
    </PolicyPage>
  );
}
