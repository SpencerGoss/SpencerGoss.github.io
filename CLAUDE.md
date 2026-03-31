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
- Hero uses `min-height: 280vh` outer + `sticky top-0` inner for scrollytelling (hero→about crossfade)
- Hero subtitle pills must stay static — no rotating/animated words there
- Don't use card-based layouts for About section — multiple attempts rejected as bland

## Design Decisions
- Hero: split layout (text left, photo right), parallax blur exit (text left, photo right, staggered)
- Hero→About: scrollytelling crossfade in same sticky viewport (hero blurs out, about fades in, about fades out)
- Hero ambient blobs: standalone `.hero-blob` class (NOT `.blob` parent — opacity stacking issue)
- Hero staggered entrance: `split-reveal` classes with delays on badge→name→subtitle→tagline→buttons→photo
- Tagline: "From raw data to real results — predictive models, automated systems, and analytics tools."
- Nav: floating frosted-glass pill (`.nav-pill`) appears after scrolling past hero
- About: split layout — statement + facts left, bio + detail grid right, vertical divider
- Experience: full-screen slides with real bg images + frosted glass
- Soft gray bg, cyan/purple accents
- Spencer prefers subtle/soft visual effects over bold/vibrant

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
python3 -c "
import os
dist = 'dist/assets'
css_file = [f for f in os.listdir(dist) if f.endswith('.css')][0]
js_file = [f for f in os.listdir(dist) if f.endswith('.js')][0]
with open(os.path.join(dist, css_file)) as f: css = f.read()
with open(os.path.join(dist, js_file)) as f: js = f.read()
html = '<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /><title>Spencer Goss - Portfolio</title><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" /><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin /><link href=\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap\" rel=\"stylesheet\" /><style>' + css + '</style></head><body><div id=\"root\"></div><script>' + js.replace('</script>','<\\/script>') + '</script></body></html>'
with open('portfolio.html','w') as f: f.write(html)
"
```
