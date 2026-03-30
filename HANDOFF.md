# HANDOFF — Spencer Portfolio Website

## Session Summary — 2026-03-30
Branch: master (6 commits)

## What Was Done This Session
1. **Deep design research** — 60+ sources researched (21st.dev, Awwwards, hiring manager studies, animation trends). 54 specific redesign ideas compiled across 4 priority tiers. Saved to `memory/project_redesign_plan.md`.
2. **Hero ambient blobs** — Two large cyan/blue blobs with 120px blur drift slowly behind hero content. Uses standalone `.hero-blob` class (NOT `.blob` parent — opacity stacking makes children invisible).
3. **Hero staggered entrance** — `split-reveal` classes applied in sequence: badge (0ms) → name (100ms) → subtitle (250ms) → tagline (400ms) → buttons (550ms) → media card (700ms).

## BLOCKER: prefers-reduced-motion
Spencer has Windows animation effects OFF (Settings → Accessibility → Visual Effects → Animation effects). This disables ALL animations via the `@media (prefers-reduced-motion)` rule in index.css. **He needs to toggle this ON to see any of the hero changes.**

## Current State
- **Build**: `npx vite build` passes. Do NOT use `tsc -b`.
- **Dev server**: `npm run dev` at localhost:5173
- **Git**: 6 commits on master, clean tree
- **Hero**: Blobs + stagger entrance added but unverified by Spencer due to reduced-motion setting

## Redesign Plan (section-by-section)
Working through in this order. Hero is in progress:

| Section | Status | Key Ideas |
|---------|--------|-----------|
| **Hero** | In progress | Blobs ✅, stagger ✅, rotating words (next), sharpen tagline, colored browser dots, richer card stats |
| Nav | Not started | Floating dock, cursor spotlight, magnetic buttons, richer scroll progress |
| About | Not started | Headshot, "How I Think" section, reframe quick facts |
| Projects | Not started | Case studies, real screenshots, bento grid, video hover preview |
| Skills | Not started | Bento tiles, capability framing, animated indicators |
| Experience | Not started | Horizontal scroll, parallax bg, animated indicators |
| Contact | Not started | Resume download, Calendly link |
| Global | Not started | Lenis smooth scroll, cursor effects, performance |

Full 54-idea list: `memory/project_redesign_plan.md`

## Failed Approaches (do not retry)
- `.blob` parent class for hero blobs — opacity 0.4 stacks multiplicatively, makes children invisible on light bg
- Radial gradients at low alpha (0.15) on near-white background — invisible even without parent opacity issue
- All previous failed approaches from prior sessions still apply (see below)

## Prior Failed Approaches (carried forward)
- Interactive text scramble hero — too busy
- 21st.dev dark mesh gradient hero — wrong theme
- Canvas constellation animation — removed
- `position: fixed` for hero — covered content below
- White background hero with subtle cyan particles — barely visible
- Simple Icons CDN for SQL/PromptEng/AIAgents/JMP/SPSS — no matching slugs

## Design Preferences (confirmed this session)
- Spencer prefers "noticeable but soft" effects (option A) over "bold and vibrant" (option B)
- One small change at a time, one question at a time
- Always ask before visual changes (hard rule in CLAUDE.md)

## What's Next
1. **Spencer toggles Windows animation effects ON** to preview hero changes
2. **Continue hero**: wire up `TYPEWRITER_WORDS` for rotating subtitle, sharpen tagline, color browser dots, richer card stats
3. Move to nav section after hero is complete
