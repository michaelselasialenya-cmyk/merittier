export type Article = {
  slug: string;
  title: string;
  dek: string;
  section: string; // section slug
  type: "review" | "comparison" | "bestlist" | "tutorial";
  image?: string;
  featured?: boolean;
  program?: string; // affiliate program key in links.json
};

// This is the content registry. Add a tool/page by appending here + writing its MDX body.
// Agents (later) append entries; the homepage + section pages render from this list.
export const ARTICLES: Article[] = [
  {
    slug: "best-vps-for-ai-agents",
    title: "Best VPS for AI Agents in 2026: I Ran 4 Providers for 90 Days",
    dek: "A first-hand, bill-by-bill comparison of Contabo, Vultr, DigitalOcean and Hostinger for running n8n, bots and inference.",
    section: "cloud",
    type: "bestlist",
    featured: true,
    program: "contabo",
  },
  {
    slug: "contabo-review",
    title: "Contabo Review: €95 VPS That Actually Delivers",
    dek: "I moved my agent stack to Contabo. Here's the real uptime, the real bill, and who it's for.",
    section: "cloud",
    type: "review",
    program: "contabo",
  },
  {
    slug: "vultr-review",
    title: "Vultr Review: Fast Nodes, Fair Price — But Watch the Fees",
    dek: "Benchmarks, support response times, and where Vultr beats (and loses to) Contabo.",
    section: "cloud",
    type: "review",
    program: "vultr",
  },
  {
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier: Which Automation Tool Wins in 2026?",
    dek: "Self-hosted power vs zero-setup convenience. The honest breakdown with a verdict.",
    section: "automation",
    type: "comparison",
    program: "vultr",
  },
  {
    slug: "jasper-vs-copy-ai",
    title: "Jasper vs Copy.ai: Which AI Writer Is Worth Paying For?",
    dek: "I wrote 50 pieces on both. One is clearly better for teams; the other for solo founders.",
    section: "ai-tools",
    type: "comparison",
    program: "jasper",
  },
  {
    slug: "notion-vs-clickup",
    title: "Notion vs ClickUp: The Productivity Showdown",
    dek: "Docs vs tasks. When to pick which — and when neither is right.",
    section: "productivity",
    type: "comparison",
  },
];

export function articlesBySection(section: string) {
  return ARTICLES.filter((a) => a.section === section);
}

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
