# HANDOFF — Spencer Portfolio Website

## Session Summary — 2026-03-30
Branch: master

## Completed
- Fixed project structure: source files moved into `src/` to match Vite/TS config expectations (fa97a0e)
- Removed duplicate nested directories (`components/components/`, `lib/lib/`) (fa97a0e)
- Fixed build script: `tsc -b && vite build` → `vite build` (fa97a0e)
- Installed dependencies (`npm install`) (fa97a0e)
- Created CLAUDE.md with project conventions (fa97a0e)
- Initialized git repo with .gitignore (fa97a0e)
- Deleted 12 abandoned hero demo HTML prototypes (aad18ca)
- Removed 39 unused shadcn components + 26 unused npm packages (ce1471e)
  - CSS bundle: 64KB → 33KB (-48%), build time: 1.1s → 0.6s
  - portfolio.html: 319KB → 289KB
- Regenerated portfolio.html from clean build

## Current State
- **Build**: `npx vite build` passes clean (635ms). Do NOT use `tsc -b`.
- **Dev server**: `npm run dev` works at localhost:5173
- **Git**: 3 commits on master, clean working tree
- **Structure**: Standard Vite layout — `src/App.tsx`, `src/components/ui/`, `src/lib/`
- **Components kept**: badge, button, card, separator (4 of original 43)

## Decisions Made (with rejected alternatives)
- **Create `src/` directory** instead of changing all configs to point at root — standard Vite convention, configs already expected it
  - Rejected: updating configs to root — non-standard, mixes source with config files
- **Remove unused shadcn components** rather than keeping for potential future use — 39 components added bloat and caused tsc errors; can re-add via `npx shadcn-ui@latest add <component>` anytime
  - Rejected: keeping them — they blocked `tsc -b`, added 31KB to CSS, and were never imported
- **Remove Parcel devDependencies** — leftover from previous bundling approach, Vite is the bundler now

## Failed Approaches (do not retry)
- Interactive text scramble hero — too busy
- 21st.dev dark mesh gradient hero — wrong theme (dark)
- Canvas constellation animation (DataFlowCanvas) — removed
- Typewriter component — removed
- Detailed vertical experience timeline — too long
- `position: fixed` for hero — covered all content below
- White background hero with subtle cyan particles — barely visible
- `type="module"` in bundled script tag — React mounting issues

## What's Left
1. **Verify images load** — Experience section bg images use Wikimedia/Unsplash URLs. Need browser check.
2. **Review remaining sections** — Only About has been reviewed. Projects, Skills, Contact need Spencer's feedback.
3. **Section spacing & font updates** — Spencer requested sitewide but not fully reviewed.
4. **Real headshot photo** — currently placeholder (SG initials).
5. **Real project screenshots** — currently gradient placeholders.
6. **Deployment** — Not started. Likely Cloudflare Pages or similar.
7. **App.tsx decomposition** — 1355-line monolith with 10+ components, 3 hooks, 6 data arrays. Could split into files for maintainability.

## Rejected Items (do not re-add)
- Dark theme — Spencer rejected all dark theme demos
- tsc -b in build — unused shadcn components cause errors, Vite handles everything

## Key Decisions
- Light theme throughout (no dark mode)
- portfolio.html is the deliverable (single-file bundle)
- Plus Jakarta Sans + JetBrains Mono fonts
- Scroll media expansion hero pattern
- Glass card overlays on experience slides

## Skills/Tools Access
All 44 skills + 32 plugins + CLI tools from `C:/dev/claude-skills/` are accessible globally via `~/.claude/rules/common/`. No project-level configuration needed.

## Build Commands
```bash
npm run dev          # Dev server (localhost:5173)
npm run build        # Vite production build
# Bundle into single HTML (after vite build):
python -c "..." # see CLAUDE.md for full script
```

## What's Next
Get Spencer's feedback on what to work on: section reviews, deployment setup, or App.tsx decomposition. Connect Chrome extension for visual review if needed.
