# Affiliate Payout Table — Offer-First Foundation
Built: 2026-07-18. Numbers verified live via browser where possible; items marked [VERIFY] need confirmation at signup.

## TIER 1 — HIGHEST PAYOUT (prioritize these, they fund the site)
| Program | Category | Payout (verified) | Type | Cookie | Signup effort | Notes |
|---------|----------|-------------------|------|--------|--------------|-------|
| Contabo | Cloud / VPS | €30–€170 per NEW ORDER (fixed) [VERIFIED] | One-time, per order | 90 days | Manual approval | Highest raw payout. VPS tiers €30-170, dedicated up to €170. GREAT fit for "Best VPS for AI agents" articles. |
| Hostinger | Cloud / Hosting | 40%+ per sale, scales w/ volume [VERIFIED] | One-time, % | 30-60 days | Instant | High conversion, brand trust. Covers VPS + WordPress hosting. |
| Vultr | Cloud / VPS | ~$10–$100 per referral (1-tier) [VERIFY] | One-time | 30 days | Email signup | Similar audience to Contabo. Verify exact at vultr.com/affiliate (page bot-blocked today). |
| DigitalOcean | Cloud | $25 per referral after they spend $25 [VERIFIED] | Free-credit model | 30 days | Instant | Lower $ but trusted dev brand; good for "tutorials with affiliate opp." |

## TIER 2 — RECURRING / SaaS (build authority, lower per-sale but compounding)
| Program | Category | Payout (typical) | Type | Notes |
|---------|----------|------------------|------|-------|
| Notion | Productivity | ~$0 (no public affiliate) / partner program only | — | Do NOT rely on affiliate; use referral for free credits. Cover for SEO traffic, not commissions. |
| ClickUp | Productivity | ~$0 standard / affiliate via Impact (~$0 base) | — | Low payout; cover for traffic. |
| n8n | Automation | No classic affiliate (open source); Cloud has referral | — | Cover tutorials; monetize via hosting (Contabo/Vultr) NOT n8n directly. |
| Zapier / Make | Automation | Limited/no public affiliate | — | Cover for traffic; monetize via hosting. |
| Jasper / Copy.ai / Writesonic / Surfer SEO | AI Tools | Typically $0–$20 one-time OR free-trial only [LOW] | One-time | LOW payout. Cover for TRAFFIC + authority, not primary commissions. |

## STRATEGIC READ (council principle: offer-first)
- The MONEY is in TIER 1 (Cloud/VPS hosting): Contabo + Hostinger + Vultr + DigitalOcean.
  - One Contabo VPS sale (€95 avg) ≈ 30+ Amazon-style AI-tool clicks.
  - Priority article cluster: "Best VPS for AI agents / n8n / self-hosting" → Contabo + Vultr + Hostinger.
- The AI-Tools + Productivity sections (Jasper, Notion, ClickUp) are TRAFFIC/authority builders, not commission drivers. Write them to rank + capture search, but the affiliate link strategy there is weaker — lean on hosting recs inside those posts ("run it on Contabo").
- Automation (n8n/Zapier/Make): monetize INDIRECTLY via the hosting they need. n8n self-hosted = perfect Contabo/Vultr pitch.

## ACTION FOR USER (free, 10 min each)
1. Sign up: Contabo Affiliate (contabo.com/en/affiliate-program) — manual approval, highest payout.
2. Sign up: Hostinger Affiliates (hostinger.com/affiliates) — instant.
3. Sign up: Vultr Affiliate (vultr.com/affiliate) — verify exact tier.
4. Sign up: DigitalOcean Referral (digitalocean.com/referral-program) — instant.
5. AI-tools (Jasper etc.): only if a program with real $ exists; otherwise skip affiliate, use for traffic.

## LINK MANAGEMENT
- Central affiliate link map in repo: /affiliate-site/links.json (program → raw link → cloaked slug e.g. /go/contabo).
- Articles reference cloaked slugs only; swap raw links in one place.
