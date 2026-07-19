# Security & Integrity Review — Merittier affiliate site
Date: 2026-07-19. Scope: local project `/Users/mac/Agentic System/affiliate-site`.
Checks run with built-in tooling only (no external repos). Read-only unless noted.

## Verdict
Fundamentals SOLID. No blocking issues, no user-facing vulnerabilities. Structure verified intact.
NOT "100% secure" — see open items below.

## Checks performed
| Check | Command | Result |
|---|---|---|
| Production build | `npm run build` | ✅ Compiles, TS passes, 14 static pages |
| Runtime smoke (all routes) | curl localhost:3001 | ✅ All 6 articles + 4 hubs + home = 200 |
| Lint | `npm run lint` | ⚠️ 1 warning (ThemeToggle setState-in-effect) — accepted by owner |
| Dependency audit | `npm audit` | ⚠️ 1 moderate (transitive postcss in Next's internal bundle) |
| Renderer XSS | grep dangerouslySetInnerHTML | ✅ Renders author-controlled markdown only; no user input |

## Open items (accepted / monitored)
1. **Lint warning** — `components/ThemeToggle.tsx:17` `react-hooks/set-state-in-effect`.
   Toggle works correctly. Owner chose to keep as-is. Non-blocking.
2. **postcss <8.5.10 (moderate)** — nested in `node_modules/next/node_modules/postcss`
   (8.4.31). Installed top-level postcss is already 8.5.19 (safe).
   - Exploit surface: Next.js internal build pipeline only. NOT exposed to site visitors.
   - DO NOT run `npm audit fix --force` — it downgrades Next.js to v9 (breaks app).
   - Proper fix: wait for Next.js to bump its pinned postcss. Re-audit on Next upgrade.

## XSS notes
- Article renderer (`app/[section]/[slug]/page.tsx`) uses `dangerouslySetInnerHTML`
  with `inline()` which only emits `<strong>`/`<code>` from **author-written** markdown
  in `lib/articles.ts`. No user-generated content flows here → no injection vector.
- If user-submitted content is ever added (comments, forms), revisit this.

## Recommendations (future)
- Re-run `npm audit` after each `npm update` / Next.js upgrade.
- Before adding any user input, sanitize (e.g. DOMPurify) before render.
- Consider resolving the ThemeToggle warning via lazy state init if desired later.
