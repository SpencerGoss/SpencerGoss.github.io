# HANDOFF — Spencer Portfolio Website

## 🟢 LIVE: https://spencergoss.github.io/  (deployed 2026-06-13)

### Resume updated + redeployed (2026-06-13)
Master resume (`OneDrive/Career/Spencer_Goss_Master_Resume.docx` + `.pdf`) refreshed and synced to the live site PDF (`public/Spencer_Goss_Resume.pdf`). **Now mirrors the website: 3 projects — Oddsix, Box Office, Churn.** Changes: added **Box Office** (ETL→PostgreSQL→Dash), synced **Oddsix** (72% / 290+ picks / 6 sports / 0.74 AUC), upgraded **Churn** to 2 bullets (4-model benchmark, CatBoost 0.899 AUC, SHAP drivers referrals/contract/tenure + a business-outcome/at-risk-list bullet), reframed **Churchill** to lead with the Relish-AI data-tagging work, summary re-led on analytics ending in "SHAP-driven retention recommendations." **Trading Bot CUT** (Spencer's call, for site consistency + BA/DA focus) — recoverable from the backup master for ML/quant applications. One page. Backups: `Spencer_Goss_Master_Resume.{docx,pdf}.bak-20260613` in OneDrive/Career (these still contain the Trading Bot block + the pre-edit version). PDF regenerated from docx via Word COM (`powershell` SaveAs wdFormatPDF=17) — Word installed; no LibreOffice/docx2pdf. To re-edit: edit the .docx (python-docx works), regenerate the PDF via Word COM SaveAs, copy to `public/`, redeploy.

Repo: `github.com/SpencerGoss/SpencerGoss.github.io` (public). `origin` is wired to it; `master` = source.

**How deploy works right now (deploy-from-branch, MANUAL):**
- `master` branch holds the source. GitHub Pages serves the **`gh-pages`** branch (root), which holds the **built `dist/`**.
- The GitHub CLI token has `repo` scope but NOT `workflow` scope, so the auto-deploy Action (`.github/workflows/deploy.yml`) could not be pushed — it was removed from master (recoverable from commit 2185018).
- **To redeploy after changing the site:** rebuild and force-push dist to gh-pages:
  ```bash
  cd "C:/Users/Spencer/OneDrive/Career/Personal Website"
  npx vite build && python bundle.py          # bundle.py only needed for portfolio.html deliverable, not the live site
  touch dist/.nojekyll && rm -f dist/og-card-source.html
  cd dist && rm -rf .git && git init -q && git checkout -q -b gh-pages && git add -A \
    && git -c user.name="Spencer" -c user.email="spencer.goss@outlook.com" commit -q -m "Deploy" \
    && git push -q -f https://github.com/SpencerGoss/SpencerGoss.github.io.git gh-pages && rm -rf .git
  ```
  Also push the source change to master normally (`git push`).
- **Upgrade to auto-deploy-on-push (optional, ~30s):** `gh auth refresh -h github.com -s workflow`, then restore `.github/workflows/deploy.yml` (from commit 2185018), push it to master, and in repo **Settings → Pages → Source** switch from "Deploy from a branch" to **GitHub Actions**. After that, every `git push` to master auto-builds and deploys; no more manual gh-pages step.

**Verified live (2026-06-13):** page renders, 0 console errors, all assets 200 (JS/CSS bundles, og-card.png, resume PDF, robots.txt, sitemap.xml, project images), og:url + og:image tags present.

**Still open before/after launch (not blockers):** (1) Resume PDF is the June 5 file — Spencer should confirm it's the version he wants (it's what recruiters download now). (2) OG card design awaiting Spencer's final OK (shipped as-is). (3) Pre-existing content calls: AI System section keep/trim, quantified day-job metrics, GPA/certs, grad photo for About.

## DECISION (2026-06-12, Spencer's explicit call): Trading Bot CUT, Churn Predictor KEPT
Portfolio is 4 projects now: Oddsix (featured), Box Office, From Box Scores (NBA), Churn.
Rationale: BA/DA role targeting. Trading Bot duplicated Oddsix's "real ML systems" signal with zero clickable proof (no repo link/demo/screenshots) and over-engineering perception risk; Churn is the only project whose deliverable is business recommendations to a stakeholder. Trading Bot data is deleted from PROJECTS (recoverable from git, commit 3ea1d26). Don't re-add without Spencer's say-so.

## Session Summary — 2026-06-12 (continued: Oddsix slideshow, project cut, churn evidence)
1. **Oddsix card = home page now** (Spencer's request); slideshow expanded to 5 slides (home, player, team page OKC, playoff bracket, betting) — fresh 1440×900 captures from the live site (commit b33458e).
2. **Image-fit fixes** (commit 2a7bff3): small cards aspect-video + hqdefault thumbs; featured card object-contain; slideshow aspect-[16/10] + object-contain.
3. **Box Office numbers corrected** (Spencer flagged): 5,659 films (NOT ~6,000), 2000-2025 (NOT 2026). Verified against films_enriched.csv. All other case-study claims spot-checked against the data and hold (commit 342c53e).
4. **Churn Predictor got real evidence** (commit 3ea1d26): 4 charts extracted from `C:/Users/Spencer/OneDrive/Documents/Presentations/CustomerChurn.pptx` (the case-competition deck) → padded to 16:10 white canvases in `public/images/projects/churn-*.png`. Slideshow: tenure churn (53/31/14%), ROC benchmark (CatBoost 0.899 AUC best of 4), CatBoost feature importances (referrals #1), SHAP beeswarm. Copy/tags/metrics updated to match. NOTE: local churn repo at `OneDrive/Documents/GitHub/MSBA-Customer-Churn-Case` is an empty working tree (only .git) — the pptx is the asset source.

## Session Summary — 2026-06-12 (Box Office completion + image-fit fixes)
Branch: master, 2 commits, tree clean. Built + bundled (`portfolio.html` current).

1. **Box Office vs. Ratings marked complete** (commit a90ec08). The project changed shape since the site copy was written: the final deliverable is a live **Dash + Plotly film explorer** (movie-theater theme), NOT the Power BI dashboard the case study described. Updated from the project's README at `C:/Users/Spencer/OneDrive/MSBA_692/box-office-vs-ratings/`:
   - Added video walkthrough `video: "mFgFajpfPD8"` (https://youtu.be/mFgFajpfPD8) — embeds in the case study, ▶ Video badge + thumbnail on the card.
   - Live dashboard wired to the Visit button: https://box-office-vs-ratings.onrender.com (Render free tier — sleeps after ~15 min idle, first hit takes 30-60s to wake).
   - Removed `status: "In Progress"`, subtitle/tags now Dash + Plotly (Power BI removed from this project only; it stays in Skills).
   - Data counts corrected to post-quality-filter reality: 5,659 films, 14,914 genre links, 349 rows dropped (placeholder budgets + streaming-only revenue).
   - Case study sections now: The Question / The Pipeline / The Database / The Film Explorer / The Answer (real findings: ratings correlate with returns, blockbusters best ROI, ~47% hit rate).
2. **Image-fit fixes across all project surfaces** (commit 2a7bff3) — Spencer flagged images not fitting their boxes, wanted per-surface sizing:
   - Small cards: image block `aspect-video` (was fixed `h-24` strip that cropped 16:9 thumbs to a sliver).
   - Video thumbs: `hqdefault.jpg` (480px, sharper) — its 4:3 letterbox bars crop away exactly under object-cover in the 16:9 box.
   - Featured Oddsix card: `object-contain` on white (was object-cover object-top, cut the bottom off the 760×820 card image).
   - Case-study slideshow: `aspect-[16/10]` (matches the 1440×900 Oddsix screenshots) + `object-contain` (was fixed h-48/h-72 + object-cover, cropped screenshot bottoms).
   - All verified in the browser (grid, Oddsix slideshow, both video case studies).

Stale-item updates: "Real dashboard screenshots — Box Office" is now covered by the video + live app link (Trading Bot screenshots still missing). The case-study line "Dashboard & visuals coming soon" no longer renders for Box Office (it keys off `status`, which was removed).

---

## Session Summary — 2026-06-05 (polish + accessibility + build-fix + perf session)
Branch: master. 14 commits this session. Tree clean except `.claude/` (root scratch PNGs now gitignored).

## Completed (all committed)
1. **Supporting project cards now have the accent glow** (HANDOFF #1 from last session — the edit that errored out before). Each non-featured BentoCard gets a soft per-card radial accent blob (top-right, clipped by `overflow:hidden`), content wrapped in `relative z-10`. Blob is smaller/softer than the featured card's (w-40, blur-34, opacity-70→100 on hover). Trading Bot reads cyan, Box Office purple, Churn amber. Verified on desktop + mobile.
2. **Build/deliverable fix — `bundle.py`** (replaces the hardcoded-head one-liner in CLAUDE.md). `portfolio.html` was being built from a hardcoded `<head>` that had a stale title (“Spencer Goss - Portfolio”) and was **missing the meta description, all Open Graph / Twitter tags, author, theme-color** — so every share of the actual file had no preview text. `bundle.py` now reads `dist/index.html` (Vite already injects the full correct head) and inlines the built CSS/JS → drift is impossible. Inline app script is placed at end of `<body>` (a plain inline script isn’t deferred like `type=module`; running it in `<head>` hit React #299). Has a guard that aborts if Vite’s output shape changes. CLAUDE.md bundle section updated to `npx vite build && python bundle.py`.
3. **Accessibility — full axe-core (WCAG AA) audit + fixes.**
   - aria: Oddsix wordmark span got `role="img"` so its `aria-label` is valid (was a prohibited-attr violation). Zero visual change.
   - **Targeted contrast pass — Spencer chose “targeted” (not full AA):** fix the genuinely illegible text, keep the main gray body text + soft look. Added `accentText()` helper mapping each accent hex to a deeper text-safe shade of the same hue (cyan #0E7490, orange #C2410C, amber #B45309, violet #7C3AED, emerald #047857), applied ONLY where an accent renders as small text (eyebrows, View Project, tag pills, video badge, About labels, skill-category headers, “real-world solutions”). Accent backgrounds / dots / bars / borders + `--primary` (CTA button) stay bright. Faint `/55`–`/50` labels de-faded (skill-group labels + “Business & Professional” → slate `#475569`; card desc /70, captions → full gray). **Result: 66 → 6 failing nodes.**
   - Case-study modal: slideshow pagination dots were unlabeled `<button>`s (critical button-name). Added `aria-label` + `aria-current`.
   - **Final audit: only 6 contrast nodes remain — all `#65758b` nav links, the exact body gray Spencer chose to keep (3.93).** Everything else (alt text, ARIA, headings, labels, landmarks, keyboard, button-name) passes.
4. **De-em-dashed the SEO/social meta tags** (Spencer’s no-em-dash rule — last session did visible copy but missed the meta). Title separators → `·` (his existing style), description prose → colon phrasing. Deliverable verified 0 em-dashes in head.
5. **Hero placeholder → cyan→purple SG monogram** (replaced the empty gray “SG” box). Mocked up two options (data-growth-curve motif vs gradient monogram) as real renders; Spencer picked the monogram. Gradient card + soft sheen + bold white SG, matching the favicon. `role="img"` labeled; glyph aria-hidden. Single block, swaps out for a photo later.
6. **Image performance — `public/images` 15MB → 3.4MB.** `terex.jpg` (7445×5859, 7.37MB) and `saint-xavier.jpg` (5184×2592, 3.69MB) were full-screen-bg images resized to 1920px wide @ JPEG q82 progressive (→349KB / 458KB; verified sharp). Removed 3 unreferenced dead files (`churchill-downs.webp`, `saint-xavier-logo.png`, `uofl-logo.jpg`). ~11MB saved — big on mobile/LTE. (Originals recoverable from git history.)
7. **SEO — Person JSON-LD** added to index.html (name, jobTitle, education, knowsAbout, real LinkedIn/GitHub/email). Education honest: UK in `alumniOf`, UofL MSBA as “candidate” in description. Flows into the deliverable via bundle.py; validated it parses.
8. **Case-study keyboard a11y** — opening a case study now moves focus to the “Back to Projects” button (was stranded on the hidden card) and **Escape** returns to the projects grid. Verified live.

## Current State
- `npx vite build` clean (never `tsc -b`). `python bundle.py` regenerates `portfolio.html` (rebuilt + current).
- Dev server: `npm run dev` → localhost:5173. View there (local `/images/...` only resolve when served).
- Zero JS console errors. App mounts correctly from the bundled single file (verified over HTTP).
- Site verified well-built: reduced-motion handled (Lenis off + CSS block), `:focus-visible` ring, skip link, responsive (checked 390px), lean deps.

## Things I verified were ALREADY good (no change needed)
- `prefers-reduced-motion` support (App.tsx:1784 + index.css:555) — comprehensive.
- Keyboard focus indicators (`:focus-visible` outline, index.css:549).
- Mobile layout at 390px — bento stacks cleanly, cards keep glow + readable accent text.
- Bundle size (100KB gzip) + deps — fine for a React 19 SPA; lucide uses tree-shakeable named imports. (`vite-plugin-singlefile` is an unused dep — harmless, left alone.)

## Needs Spencer’s input (did NOT act — flagged)
1. **og:image / twitter:image still missing** — social shares show no preview thumbnail. Highest-remaining SEO gap for a job-search portfolio. Blocked on: (a) needs an absolute hosted URL (so depends on deploying), and (b) an OG card shows his name/title → “representing him,” needs sign-off. Recommendation: deploy to Netlify (config already present), then add a branded 1200×630 OG card.
2. **Violet accent text** was darkened too (not just the cyan/orange Spencer named) so tag pills stay consistent — one-line revert in the `ACCENT_TEXT` map if unwanted.
3. **Nav-link gray (#65758b, 3.93)** left as-is per his “keep gray” choice — flip to a darker slate if he wants full AA.
4. ~~Hero “SG” placeholder~~ — DONE this session (gradient monogram). Swaps for a photo when he has one.

## Content review (2026-06-05)
**Done:**
- Resume download was a 404 → wired in his master resume at `public/Spencer_Goss_Resume.pdf` (dated May 6 — he should verify it's the version he wants before deploy).
- Churchill Downs reframed to lead with the analytics/Relish-AI angle (not "processed invoices"). Honest title kept.
- About degree label fixed to match the timeline/resume ("BBA Finance & Marketing (Analytics minor)").

**Spencer passed on (don't re-push unless he asks):**
- Trimming the Terex warehouse entry from 4 bullets to 2.
- Adding a recruiter-facing positioning line (role + Louisville + open-to) in the hero/contact.

**Open content items flagged, need his input:**
- **AI System section — strategic question:** it's high-variance for traditional BA roles (impressive but could read as over-engineering to a non-technical hiring manager). He should decide on purpose whether it serves the specific roles he wants. Not changed.
- **Quantified impact:** day-job bullets say "streamlined a manual process" with no number. If he has any metric (time/error reduction), add it.
- **New-grad credibility signals not shown:** GPA (if good), Dean's List/honors, certifications (Google Data Analytics, Tableau, Power BI, SQL). Add if he has them.
- **Real dashboard screenshots** (Box Office Power BI, Trading Bot React dashboard) — highest-value DA proof; blocked on his assets.

## Grad photo — decided, deferred (2026-06-05)
Spencer has a UK cap-and-gown grad photo to add. Decision: put it in the **About section** (which currently has no photo) as a supporting image — keep the hero monogram. He'll drop the file into `public/images/spencer-grad.jpg` later, then I crop/fit it into the right side of About (rounded + subtle accent glow), screenshot, commit on approval. The lacrosse action shot is REJECTED (VictoryViews watermark = licensing block, and high school JV lacrosse doesn't serve a data-analyst portfolio).

## Blocked on assets (unchanged from last session)
- Resume PDF at `/Spencer_Goss_Resume.pdf` (download button wired).
- Real screenshots for Trading Bot / Box Office / Churn cards (`getCardImage()` auto-shows them once added to a project’s `screenshots` with an `img` path).

## Key conventions / rules
- Build = `npx vite build && python bundle.py` → `portfolio.html`. Never `tsc -b`.
- Single file: `src/App.tsx` (~2240 lines, all data + components).
- Accent-as-text now goes through `accentText()` (App.tsx, just after `ProjectTitle`). Backgrounds/bars/dots keep the bright accent.
- Light theme, soft/subtle, cyan accent (`#06B6D4`), Oddsix dot teal `#2DBA9A`, plain non-AI em-dash-free copy.
- Not pushed (local master; no remote/PR workflow set up). CLAUDE.md was edited (bundle section) — flag if a push is ever wired up.

## What's Next (exact first action)
Ask Spencer about deploying to Netlify (config ready) so the og:image can get an absolute URL — then build a branded 1200×630 OG card (needs his sign-off on the name/title artifact). That OG preview image is the single highest-value remaining SEO item for his job search. If he’d rather keep iterating locally, next-best autonomous polish: review case-study copy for tightening, or refine hover/micro-interactions.
