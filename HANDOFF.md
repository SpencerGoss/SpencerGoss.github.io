# HANDOFF — Spencer Portfolio Website
Date: March 30, 2026

## Goal
Build Spencer's personal portfolio website (Business Analyst / Data Analyst) with scroll media expansion hero, full-screen experience slides with glass cards, and polished sections throughout.

## What Was Built
- `App.tsx` — Main React app (~1355 lines). All components, data, hooks, layout in one file.
- `index.css` — Global styles including `.exp-slide`, animations, scroll effects.
- `portfolio.html` — Single-file bundled output (319KB) with inline CSS+JS. This is the deliverable.
- `vite.config.ts` — Vite 8 config with `cssCodeSplit: false`.
- `package.json`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js` — Standard config files.
- `components/` — shadcn/ui components (some unused, cause tsc errors but Vite builds fine).
- `lib/` — shadcn utils.

## Tech Stack
- React 18 + TypeScript + Vite 8 + Tailwind CSS + shadcn/ui
- Plus Jakarta Sans + JetBrains Mono fonts
- IntersectionObserver for scroll-triggered experience slides
- Single-file HTML bundling via Python script (inline Vite dist CSS/JS into one HTML)

## Current State
- **Builds successfully** with `npx vite build` (skips strict tsc). Do NOT use `tsc -b` — unused shadcn components cause errors.
- **Hero**: Scroll media expansion pattern — sticky container, text fades out as card expands from 70%->100% width. Light theme, soft gray bg, cyan/purple accents.
- **Experience section**: Compact horizontal timeline overview (~half page) -> full-screen slides with real bg images + frosted glass card overlay for each entry.
- **Nav**: Always dark text (light theme throughout).
- **Images**: bg images use Wikimedia Commons + Unsplash URLs. Should load in browser.

## Build Commands
```bash
# Dev server
cd <project-root> && npm run dev

# Production build
cd <project-root> && npx vite build

# Bundle into single HTML (run after vite build from project root)
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

## Key Decisions
- **Single-file HTML** — portfolio.html is the deliverable, not a deployed app. Bundled with inline CSS+JS.
- **Sticky not fixed** — Hero inner container uses `position: sticky` (not fixed) so it scrolls away naturally.
- **Light theme throughout** — Spencer rejected all dark theme demos.
- **Plus Jakarta Sans + JetBrains Mono** — Font choices.
- **Real photos from web** — Experience bg images from Wikimedia/Unsplash, not placeholder gradients.
- **Glass card on images** — `backdrop-filter: blur(20px)` + semi-transparent white bg for experience detail cards.
- ~~Dark hero (#0A0E1A) over white~~ — superseded: switched to light theme
- ~~HTML Canvas constellation animation~~ — superseded: removed, replaced with scroll expansion hero
- Tagline "Turning data and hard problems into things that actually work" — kept from earlier sessions
- About copy written with spencer-voice-style skill — direct, practical, employer-focused

## Failed Approaches
- Interactive text scramble hero — too busy
- 21st.dev dark mesh gradient hero — wrong theme (dark)
- Canvas constellation animation (DataFlowCanvas) — removed
- Typewriter component — removed
- Detailed vertical experience timeline — too long, replaced with compact horizontal overview
- `position: fixed` for hero — caused it to cover ALL content below
- White background hero with subtle cyan particles — barely visible
- `type="module"` in bundled script tag — caused React mounting issues in earlier Parcel setup

## What's Left
1. **Verify images load** — Spencer needs to confirm Wikimedia/Unsplash URLs render in his browser
2. **Review remaining sections** — Only About has been reviewed. Projects, Skills, Contact still need Spencer's feedback.
3. **Section spacing & font updates** — Spencer requested these sitewide but not fully reviewed yet.
4. **Clean up old demo files** — 12+ hero-demo-*.html files in the folder that can be deleted.
5. **Real headshot photo** — currently placeholder (SG initials)
6. **Real project screenshots** — currently gradient placeholders
7. **Deployment** — Not started. Likely Cloudflare Pages or similar.

## Do NOT Forget
- `npx vite build` works. `tsc -b` does NOT (unused shadcn components). Always build with Vite directly.
- Hero uses `min-height: 200vh` outer + `sticky top-0` inner for the scroll expansion effect.
- Spencer is very particular about design — always ask before making visual changes.

## File Structure
```
spencer-portfolio/
  package.json
  vite.config.ts
  tsconfig.json / tsconfig.app.json / tsconfig.node.json
  tailwind.config.js
  postcss.config.js
  components.json     — shadcn config
  src/
    main.tsx          — React entry (createRoot on #root)
    App.tsx           — entire app (~1355 lines, single file)
    index.css         — global styles + experience slide animations
    lib/utils.ts      — cn() helper
    components/ui/    — shadcn components
```

## Next Action
Get Spencer's feedback on the experience slides (do images load? glass cards look right?). Then review Projects, Skills, and Contact sections. Clean up demo files when ready.
