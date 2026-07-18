# Design Spec — Affiliate Publication (Next.js)
Derived from user inspiration: Gridlove (grid magazine), Amanda (clean minimal), Design Hunter (editorial curation).
Date: 2026-07-18.

## Aesthetic direction
"Editorial magazine grid, minimal, sophisticated — NOT SaaS/dashboard slop."
Blend: Gridlove's varied card grid + Amanda's whitespace + Design Hunter's image-led curation.

## Color
- Background: #FFFFFF / #FAFAF8 (warm off-white, not pure white)
- Text primary: #2B2925 (warm charcoal, Design Hunter rgb 66,61,51 derived)
- Text secondary: #6B6862 (muted grey, Amanda rgb 85,85,85 derived)
- Accent: single restrained accent — #C8553D (terracotta) OR #1A4731 (deep green). Pick ONE. Used for links, tags, CTAs only.
- Borders: #ECE9E4 hairlines, not heavy boxes.

## Typography (Google Fonts, no cost)
- Headings: "Fraunces" (characterful editorial serif) OR "Newsreader" — gives magazine feel.
- Body / UI: "Inter" (clean, neutral, excellent readability).
- Nav labels: uppercase, letter-spaced, small (Amanda style).
- Scale: large display headlines (clamp 2rem–3.5rem), comfortable 1.125rem body, 1.7 line-height.

## Layout
- Header: minimal sticky bar. Left = wordmark (serif). Right = uppercase nav: AI TOOLS / AUTOMATION / CLOUD / PRODUCTIVITY. No mega-menu.
- Homepage: Gridlove-style responsive card grid. Mix card sizes (1 large featured + smaller). 3-col desktop → 2-col tablet → 1-col mobile. Generous gap (1.5–2rem).
- Card: image (16:9 or 4:3), category tag (accent, uppercase micro), bold serif headline, 1-line dek (secondary), "Read review →".
- Section landing pages: hub layout — intro + grid of that section's tool cards + a "Best [section]" pillar link at top.
- Tool page (review): hero (title + meta + featured image), sticky affiliate CTA box (right rail desktop), comparison table, pros/cons, FAQ, internal links footer.
- Comparison page: two-column vs layout, verdict box, dual affiliate CTAs.
- Best-list page: ranked list with mini-cards, each with affiliate CTA.

## Anti-slop rules (hard)
- NO centered-everything hero with gradient.
- NO bootstrap-blue / default Tailwind indigo.
- NO stock-photo-everywhere; use real product screenshots + clean typographic cards.
- NO "Welcome to our website" copy.
- Image-led but text-forward; editorial, not ad-board.

## Tech mapping
- Next.js (App Router) + Tailwind CSS (utility, but themed via above tokens).
- Fonts via next/font/google (Fraunces + Inter).
- Content: MDX files in /content (section/tool/comparison/bestlist).
- Images: next/image, stored in /public or remote (product screenshots).
- Affiliate links: cloaked /go/[slug] → mapped in links.json.

## Accent decision needed from user
Terracotta (#C8553D) = warmer, more "Design Hunter"
Deep green (#1A4731) = more "trust/authority/SEO"
DEFAULT if no reply: Terracotta.
