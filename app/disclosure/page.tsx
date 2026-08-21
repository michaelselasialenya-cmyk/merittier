import { PolicyPage } from "@/components/PolicyPage";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = { title: "Affiliate Disclosure - Merittier" };

export default function DisclosurePage() {
  return (
    <PolicyPage kicker="Legal" title="Affiliate Disclosure">
      <p>
        Merittier participates in affiliate marketing programs, including ClickBank and other partner programs. This
        means that if you click a link on this site and make a qualifying purchase, we may earn a commission, at no
        additional cost to you.
      </p>
      <p>
        This financial relationship does not influence which products we choose to cover or how we describe them. We
        aim to give an honest assessment whether or not an article contains an affiliate link.
      </p>
      <p>
        Not every link on this site is an affiliate link, and not every product we mention is one we&rsquo;ve personally
        used. Where that&rsquo;s the case, the article will say so directly rather than implying hands-on testing.
      </p>
      <p>
        If you have questions about a specific link or recommendation, contact us at{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-accent">
          {SITE_EMAIL}
        </a>
        .
      </p>
    </PolicyPage>
  );
}
