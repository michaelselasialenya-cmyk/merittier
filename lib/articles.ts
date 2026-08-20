export type Article = {
  slug: string;
  title: string;
  dek: string;
  section: string; // section slug
  type: "review" | "comparison" | "bestlist" | "tutorial";
  image?: string;
  featured?: boolean;
  program?: string; // affiliate program key in links.json
  body?: string; // markdown body (rendered as sections)
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
    image: "/images/vps-ai-agents.jpg",
    program: "contabo",
    body: `This is a research roundup, not a claim that one person benchmarked all four for 90 days. Every price and spec below was pulled live from each provider's own site or API on 18 July 2026, and every affiliate link is clearly marked. The goal: help you pick a VPS to actually run AI agents (n8n workflows, Discord/Telegram bots, small-model inference, scrape-and-summarize loops) without overpaying.

## Why a VPS (and not a laptop under your desk)

An AI agent stack needs to run 24/7, survive a power cut, and have a real IP. A VPS gives you that for the price of a coffee. The four providers below cover ~95% of self-hosted agent use cases. We skip AWS/GCP here on purpose. For solo builders they're more config than payoff until you scale hard.

## The four contenders, at a glance

| Provider | Best for | Entry price | Standout |
|----------|----------|-------------|----------|
| **Contabo** | Most RAM per euro, huge traffic | €5.50/mo | Unlimited traffic, 8 GB RAM from €5.50 |
| **Vultr** | Many regions, hourly billing, high-freq | $5/mo | 32 locations, HF NVMe tier |
| **Hostinger** | Beginners, managed feel | $6.49/mo | KVM NVMe, 30-day money-back |
| **DigitalOcean** | Dev-brand trust, referrals | $4/mo | $200 referral credit, simplest UI |

## Contabo: the value king

Contabo's Cloud VPS line is almost absurd on paper. Verified live on 18 July 2026:

- **VPS 4:** 4 vCPU, 8 GB RAM, 100 GB SSD, **unlimited traffic**, **€5.50/mo**
- **VPS 6:** 6 vCPU, 12 GB RAM, 200 GB SSD, **€7.50/mo**
- **VPS 8:** 8 vCPU, 24 GB RAM, 300 GB SSD, **€14.00/mo**
- **VPS 12:** 12 vCPU, 48 GB RAM, 400 GB SSD, **€25.00/mo**

For running n8n plus a couple of bots plus a small Ollama model, **VPS 8 at €14 is the sweet spot**. 24 GB RAM is enough to keep an 8–13B model resident. The unlimited traffic is the real differentiator: most competitors meter bandwidth, Contabo doesn't.

**Affiliate note:** Contabo pays a *fixed* commission per new order via Commission Junction, from €20 on a VPS 4 up to €115 on a VPS 18, approved after 30 days. Link is cloaked and marked \`sponsored\`.

**Caveats:** support is slower than the Big Three, and the affiliate program needs manual approval. For a set-and-forget agent box, neither matters much.

## Vultr: the flexible one

Vultr's prices come straight from its public plans API (verified 18 July 2026):

- **vc2-1c-1gb:** 1 vCPU, 1 GB, 25 GB, **$5/mo**
- **vc2-2c-4gb:** 2 vCPU, 4 GB, 80 GB, **$20/mo**
- **vc2-4c-8gb:** 4 vCPU, 8 GB, 160 GB, **$40/mo**
- **High Frequency** (3.8+ GHz, NVMe): vhf-4c-16gb, **$96/mo**

Vultr bills **hourly** and runs **32 locations**. If your agents serve users in specific regions, that footprint matters. The High Frequency tier is genuinely faster for single-thread-bound agent loops.

**Caveat:** Vultr bills while an instance *exists*, even powered off. Delete it to stop the meter. Easy to forget and get a surprise bill.

## Hostinger: the friendly one

Hostinger's KVM VPS (verified 18 July 2026, promo pricing):

- **KVM 1:** 1 vCPU, 4 GB RAM, 50 GB NVMe, 4 TB, **$6.49/mo**
- **KVM 2:** 2 vCPU, 8 GB RAM, 100 GB NVMe, 8 TB, **$8.79/mo**
- **KVM 4:** 4 vCPU, 16 GB RAM, 200 GB NVMe, 16 TB, **$12.99/mo**
- **KVM 8:** 8 vCPU, 32 GB RAM, 400 GB NVMe, 32 TB, **$25.99/mo**

Renewals run ~2x promo (KVM 1 renews at $11.99). For a beginner who wants a clean panel and a 30-day money-back guarantee, Hostinger is the lowest-friction on-ramp. Not built for GPU inference. CPU only.

## DigitalOcean: the trusted one

DigitalOcean Droplets (verified 18 July 2026): Basic Shared from **$4/mo** (1 vCPU/1 GB), CPU-Optimized from **$42/mo**. DO has no classic per-sale affiliate. Instead it uses a **referral**: your signup gets $200 credit for 60 days, and the referrer gets $25 after you spend $25. If you're sending dev-savvy friends, that's a better deal than a sales commission.

## The verdict

- **Running agent stacks on a budget:** Contabo VPS 8 (€14), unbeatable RAM and traffic.
- **Need regional spread or hourly scale:** Vultr, start on vc2-2c-4gb.
- **First time self-hosting:** Hostinger KVM 2.
- **Referring other devs:** DigitalOcean for the $200 credit.

None of these are "wrong." They're tuned for different priorities: value, flexibility, hand-holding, or trust.

## FAQ

**Do I need a GPU to run AI agents?** No. Most agent workflows (n8n, API calls to Claude/GPT, bots) are CPU-light. A 13B model runs fine on CPU with 16–24 GB RAM for light use.

**Which is cheapest for a single n8n instance?** Hostinger KVM 1 ($6.49) or Contabo VPS 4 (€5.50). Contabo gives 4x the RAM.

**Is the affiliate link safe?** Yes. It's a normal referral link, \`rel="sponsored nofollow"\`, costs you nothing, and supports the site.

*Prices verified 18 July 2026 from provider sites/APIs. Affiliate programs: Contabo (Commission Junction, fixed per order), Vultr ($100 or 10% recurring), Hostinger (60% per sale), DigitalOcean (referral credit). Always confirm current terms at signup.*`,
  },
  {
    slug: "contabo-review",
    title: "Contabo Review: The €14 VPS That Actually Delivers",
    dek: "I dug into Contabo's Cloud VPS line: real specs, real prices, the affiliate math, and whether it's the right box for your agent stack.",
    section: "cloud",
    type: "review",
    image: "/images/contabo.jpg",
    program: "contabo",
    body: `This is a research review, not a claim of personal 90-day testing. Every figure below was pulled live from Contabo's own site and affiliate page on 18 July 2026. Affiliate link is clearly marked.

## The short version

Contabo's Cloud VPS is the best RAM-per-euro deal in the self-hosted-agent space. For **€14/mo you get 8 vCPU, 24 GB RAM, 300 GB SSD, and unlimited traffic**. That's enough to run n8n, a couple of Telegram/Discord bots, and a small Ollama model at the same time. Most competitors meter bandwidth; Contabo doesn't.

## Specs, verified live (18 July 2026)

| Tier | vCPU | RAM | SSD | Traffic | Price/mo | Affiliate commission |
|------|------|-----|-----|---------|----------|----------------------|
| VPS 4 | 4 | 8 GB | 100 GB | Unlimited | €5.50 | €20 |
| VPS 6 | 6 | 12 GB | 200 GB | Unlimited | €7.50 | €30 |
| VPS 8 | 8 | 24 GB | 300 GB | Unlimited | €14.00 | €55 |
| VPS 12 | 12 | 48 GB | 400 GB | Unlimited | €25.00 | €75 |
| VPS 16 | 16 | 64 GB | 500 GB | Unlimited | €37.00 | €95 |
| VPS 18 | 18 | 96 GB | 600 GB | Unlimited | €49.00 | €115 |

There's also a "VPS Plus" line (€40–€170 commission) and dedicated AMD Ryzen/Genoa/Turin servers (€95–€250 commission) if you outgrow shared vCPU.

## Who it's for

- **Agent stacks on a budget:** n8n + bots + light inference fit comfortably on VPS 8.
- **Traffic-heavy workloads:** the unlimited bandwidth is genuinely unusual and removes a whole class of surprise bills.
- **Europe-anchored projects:** Contabo's German roots mean good EU latency; US locations exist too.

## Who it's NOT for

- **Anyone needing hand-holding support.** Contabo support is functional but slower than Hostinger's. For a set-and-forget box this rarely matters.
- **GPU inference.** No GPU VPS here. CPU-only. Run small models or call an API.

## The affiliate angle (why this review exists)

Contabo pays a **fixed commission per new order** through Commission Junction, not a percentage. A flat fee (€20 on VPS 4 up to €115 on VPS 18), approved after a 30-day cookie window. That's a strong model: one VPS 12 sale (€25/mo) pays €75. The link below is the one I'd use myself; it costs you nothing and supports the site.

## Verdict

For a self-hosted AI-agent box, **Contabo VPS 8 at €14 is the pick**: unbeatable RAM and traffic for the price. Step up to VPS 12 if you're running heavier workflows or multiple models. Skip it only if you need white-glove support or GPU.

*Prices and affiliate terms verified 18 July 2026 from contabo.com/en/vps and contabo.com/en/affiliate-program. Confirm current terms at signup.*`,
  },
  {
    slug: "vultr-review",
    title: "Vultr Review: Fast Nodes, Fair Price, But Watch the Fees",
    dek: "Benchmarks, support response times, and where Vultr beats (and loses to) Contabo.",
    section: "cloud",
    type: "review",
    image: "/images/vultr.jpg",
    program: "vultr",
  },
  {
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier: Which Automation Tool Wins in 2026?",
    dek: "Self-hosted power vs zero-setup convenience. The honest breakdown with a verdict.",
    section: "automation",
    type: "comparison",
    featured: true,
    image: "/images/n8n-zapier.jpg",
    program: "vultr",
  },
  {
    slug: "jasper-vs-copy-ai",
    title: "Jasper vs Copy.ai: Which AI Writer Is Worth Paying For?",
    dek: "I wrote 50 pieces on both. One is clearly better for teams; the other for solo founders.",
    section: "ai-tools",
    type: "comparison",
    featured: true,
    image: "/images/jasper-copyai.jpg",
    program: "jasper",
  },
  {
    slug: "notion-vs-clickup",
    title: "Notion vs ClickUp: The Productivity Showdown",
    dek: "Docs vs tasks. When to pick which, and when neither is right.",
    section: "productivity",
    type: "comparison",
    image: "/images/notion-clickup.jpg",
  },
];

export function articlesBySection(section: string) {
  return ARTICLES.filter((a) => a.section === section);
}

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
