# Spencer Portfolio Website

## What This Is
Personal portfolio website for Spencer Goss (Business Analyst / Data Analyst / MSBA candidate). Single-page React app that bundles into a standalone `portfolio.html` file. Light theme, scroll-expansion hero, full-screen experience slides with glass cards.

## Stack
React 19 + TypeScript 5.9 + Vite 8 + Tailwind CSS 3.4 + shadcn/ui. Fonts: Plus Jakarta Sans + JetBrains Mono.

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — production build (Vite only, no tsc)
- `npx vite build` — same as above
- Do NOT run `tsc -b` — unused shadcn components cause TS errors, Vite builds fine without it

## Key Paths
- `src/App.tsx` — entire app (~1355 lines, single file with all components/hooks/data)
- `src/index.css` — global styles, experience slide animations, scroll effects
- `src/main.tsx` — React entry point
- `src/components/ui/` — shadcn/ui components (only badge, button, card, separator are used)
- `src/lib/utils.ts` — cn() helper
- `portfolio.html` — bundled single-file deliverable (rebuild with Python script after vite build)
- `vite.config.ts` — Vite 8 config, cssCodeSplit: false

## Hard Rules
- Spencer is very particular about design — always ask before making visual changes
- Light theme throughout — dark theme was rejected
- `portfolio.html` is the deliverable, not a deployed app
- Build with `vite build`, never `tsc -b`
- Hero is a normal full-screen section (`min-h-screen`); About is its own section below it that fades in via ScrollReveal. (The old 280vh sticky scrollytelling crossfade was removed 2026-06-04 — Spencer found it disorienting; simplified to a normal scroll so recruiters reach the projects faster.)
- Hero subtitle pills must stay static — no rotating/animated words there
- Don't use card-based layouts for About section — multiple attempts rejected as bland

## Design Decisions
- Hero: split layout (text left, photo right), staggered `split-reveal` entrance on load
- Hero→About: normal scroll. Hero is `min-h-screen`, then About is a standard section that fades in via ScrollReveal. (Replaced the scrollytelling crossfade 2026-06-04.)
- Hero ambient blobs: standalone `.hero-blob` class (NOT `.blob` parent — opacity stacking issue)
- Hero staggered entrance: `split-reveal` classes with delays on badge→name→subtitle→tagline→buttons→photo
- Tagline: "From raw data to real results — predictive models, automated systems, and analytics tools."
- Nav: floating frosted-glass pill (`.nav-pill`) appears after scrolling past hero
- About: split layout — statement + facts left, bio + detail grid right, vertical divider
- Experience: full-screen slides with real bg images + frosted glass
- Soft gray bg, cyan/purple accents
- Spencer prefers subtle/soft visual effects over bold/vibrant
- Accent-as-TEXT goes through `accentText()` (src/App.tsx, just after `ProjectTitle`): maps each bright accent hex to a deeper, WCAG-AA-legible shade of the same hue. Backgrounds, dots, bars, and borders keep the bright accent; `--primary` (CTA button) untouched. When adding accent-colored small text, wrap the color in `accentText(...)`.
- Accessibility: site passes axe-core WCAG AA except the muted-gray nav/body text (#65758b, ~3.9 — Spencer chose to keep the soft gray). Reduced-motion + `:focus-visible` + skip link all handled. Run a quick axe pass (load axe-core via CDN in the browser, `axe.run`) after layout/color changes.

## Redesign Status (2026-03-30)
- All sections redesigned: Hero ✅ → Nav ✅ → About ✅ → Projects ✅ → Skills ✅ → Experience ✅ → Contact ✅ → Global ✅
- Photo placeholder in hero — Spencer will take a casual photo to replace "SG" placeholder
- Resume PDF placeholder — download button wired up, needs actual file at `/Spencer_Goss_Resume.pdf`
- Project slideshow screenshots are placeholders — swap real screenshots into PROJECTS data when ready
- Experience slide images are local files at `public/images/experience/` — real campus/building photos
- Lenis smooth scroll + cursor spotlight are active
- Icons use Iconify API (reliable) — do NOT switch back to Simple Icons CDN (broken)

## Bundle Script (run after vite build)
```bash
npx vite build && python bundle.py
```
`bundle.py` reads `dist/index.html` (which already has the full `<head>` —
title, meta description, Open Graph / Twitter tags, favicon, straight from
`index.html`) and inlines the built CSS/JS into a single self-contained
`portfolio.html`. Bundling FROM the built HTML means any meta tag added to
`index.html` flows into the deliverable automatically — no drift. (Replaced the
old hardcoded-head one-liner 2026-06-04, which had a stale `<title>` and was
missing all SEO/social meta tags.)

Note: `portfolio.html` still references `/images/...` for project/experience
images, so it must be served alongside the `public/images/` directory (or
deployed) — opening the file directly shows broken images. Same as before.
