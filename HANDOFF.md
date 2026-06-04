# HANDOFF — Spencer Portfolio Website

## Session Summary — 2026-06-04 (big content + design session)
Branch: master. Clean tree (only `.claude/` untracked, expected). ~20 commits this session.

## What this session did (all committed)
- **Removed DevToolbox** (dead/obsolete project).
- **Added two projects:**
  - **From Box Scores to Predictions** — the MSBA 645 NBA presentation, with an embedded YouTube video (`QSooLoE32zk`) and a case study built from Spencer's real slides. Card shows the YouTube thumbnail.
  - **Box Office vs. Ratings** — MSBA ETL project (TMDB API → 3NF PostgreSQL → Power BI), tagged **In Progress** (status badge). Public repo: github.com/SpencerGoss/box-office-vs-ratings. NOTE: course number is ambiguous (folder says MSBA-962, the project docs/DB say MSBA 692) — I deliberately left the course number OFF the card; confirm with Spencer if he wants it shown.
- **Redesigned the AI System section** around the multi-model **council** (Claude, GPT-5/Codex, Gemini, Copilot, Llama — real brand logos via CSS mask). Three pillars: argues-with-itself, learns-from-mistakes, measured-not-vibes. Verified numbers from the living system (5 models, 53 skills, 37 agents, 233 safeguards, 14K+ tests). The section is intentionally DARK (it always was).
- **Oddsix reframed** from "prediction platform" → **multi-sport ANALYTICS platform** (player stats, comparisons, historical data, league leaders, Elo timelines, PLUS ML predictions + betting). Spencer corrected this multiple times — do NOT call it just a prediction platform.
- **Oddsix wordmark**: the "i" renders as a dotless-i stem (ı) + a teal dot (#2DBA9A) on top, matching oddsix.app. Component `OddsixWordmark` / `ProjectTitle`. aria-label keeps it readable as "Oddsix".
- **Real Oddsix screenshots** (captured from oddsix.app): slideshow = home / betting / player. Featured card uses a tall, focused player-analytics shot (`oddsix-card.png`) that fills the card and stays legible.
- **Stats**: card shows 72% Win Rate / 0.74 Model AUC / 6 Sports (the live, public, auto-graded track record + model quality). 290+ picks, 210-80 in the case study.
- **De-em-dashed + de-AI'd ALL visible copy** (project case studies, AI System, hero tagline, About, experience, timeline). No em dashes, no AI tells ("I don't just X, I Y", "proposes; I dispose", alliterative triads). Plain, first-person.
- **Skills section**: business skills grouped into 4 labeled buckets (ML & Modeling, Data Engineering, Analytics & Experimentation, Business & Communication). Dropped "SEO & Content Strategy". All category labels + business pills unified to the cyan accent; tool logos keep their brand colors.
- **About section**: replaced fluffy grid items ("Research deeply, build deliberately…") with factual Focus / Toolkit / Education / Experience; unified to cyan.
- **Hero → About simplified**: removed the 280vh sticky scrollytelling crossfade (Spencer found it disorienting). Hero is now a normal `min-h-screen` section; About is its own section that fades in via ScrollReveal. Lenis smooth-scroll + section reveals kept. CLAUDE.md updated.
- **Favicon** added (inline SVG SG monogram). Zero console errors.
- **Project cards**: featured Oddsix card is image-led (big legible product image fills it) and decluttered (removed the long description + the tech-tag row). Supporting card descriptions tightened to one line each.

## Provenance rules SAVED to memory (~/.claude/projects/C--Users-Spencer-OneDrive-Career-Personal-Website/memory/)
- **Never fabricate Spencer's motivation** — use his real words (e.g. oddsix.app About page "Why I built this") or ask. He called this out hard this session.
- **No em dashes, no AI voice** — plain, first-person, no curly quotes, no AI tells.
Read MEMORY.md there at session start.

## Current State
- `npx vite build` passes clean (never `tsc -b`). Then run the Python bundle script in CLAUDE.md → regenerates `portfolio.html` (the deliverable). portfolio.html is REBUILT and current.
- Dev server: `npm run dev` → localhost:5173. **View via the dev server**, not by opening portfolio.html as a file (local `/images/...` paths only resolve when served).
- Zero console errors.

## What's Next (in priority order)
1. **Make the supporting (non-featured) cards more visually attractive.** This session I tried adding a subtle accent-glow blob to them but the edit hit an internal error and did NOT apply — only the description-tightening landed. Next: add a subtle accent radial glow (like the featured card's blob) + wrap content in `relative z-10`, to the non-featured BentoCard branch (around src/App.tsx line ~767). Spencer explicitly wants ALL cards attractive, not just the featured one.
2. **Featured card height** — it's tall (~999px; the big image fills it to match the right column). Spencer was asked keep-as-is vs cap; he said "do what looks best." Currently as-is. If it feels too tall, cap the image or rebalance the bento.
3. **Real screenshots for Trading Bot / Box Office / Churn cards** — only Oddsix (real shots) and From Box Scores (YouTube thumb) have card images; the other three use the abstract placeholder. `getCardImage()` will auto-show real images if added to a project's `screenshots` with an `img` path.
4. **Spencer-only assets:** hero photo (still "SG" placeholder — he said deprioritize), resume PDF at `/Spencer_Goss_Resume.pdf` (download button wired), and deploying to a shareable URL.
5. **Trading Bot numbers** — I removed the lines-of-code vanity metric; card now shows 21 Signals / 5-stage AI Pipeline / 95% Coverage. The repo actually has ~5,220 tests / 96% per the living system — Spencer to confirm if he wants updated numbers anywhere.

## Key conventions / rules
- Spencer is very particular about design — the recent direction: light theme, soft/subtle, cyan accent, plain non-AI copy, real product imagery, no clutter.
- Build = `vite build` + Python bundle → portfolio.html. Never `tsc -b`.
- Single file: `src/App.tsx` (~2200 lines, all data + components).
- Oddsix logo dot color: `#2DBA9A` (teal). Site accent: cyan `#06B6D4`.

## Failed / didn't-apply this session
- The non-featured-card accent-glow edit returned an internal error and was not written. Re-attempt next session (see What's Next #1).
