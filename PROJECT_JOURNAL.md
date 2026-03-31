# Project Journal — Spencer Portfolio Website

## 2026-03-30 — Full Site Redesign: Projects, Skills, Experience, Contact, Global Polish

### What Was Done
- **Projects section redesign**: Replaced 2x2 browser-mockup grid with bento layout (Oddsix featured large, Trading Bot medium, DevToolbox + Churn compact). Clickable cards open full-page magazine-spread case studies with slideshow, metrics bar, narrative sections (Challenge → Built → Result), tech stack, and "Next Project" navigation. All project content rewritten based on actual codebase research.
- **Skills section redesign**: Reorganized flat icon grid into 6 categorized rows (Languages, AI, ML, Visualization, Analytics, Tools) with colored accent bars. Added 10 new tech skills (scikit-learn, pandas, NumPy, Jupyter, Colab, VS Code, Teams, OneNote, Qualtrics, SurveyMonkey). Updated to 23 business skills. Wired rotating typewriter words into section header. Switched from Simple Icons CDN (broken) to Iconify API for brand logos.
- **Experience section polish**: Added parallax scroll on background images, accent-colored slide indicators, slide counter (1/7). Replaced all broken Wikipedia/Clearbit images with local photos (UofL Grawemeyer Hall, UK Young Library, Churchill Downs building, Terex warehouse, Saint Xavier stadium) and Google favicon logos.
- **Contact section enhancements**: Added resume download button (PDF placeholder), updated subtitle to "Open to BA/DA roles", added visible text labels below social icons.
- **Global polish**: Installed Lenis smooth scroll, added cursor spotlight effect (subtle cyan radial glow following mouse), optimized font loading.
- **CLV Predictor renamed to Churn Predictor**: Discovered the capstone project is actually churn prediction, not CLV. Updated all references.

### Decisions
- Bento grid layout chosen over stacked case studies or tabbed views — gives Oddsix clear visual dominance
- Full-page takeover for case studies (not modal or expand-in-place) — most room for screenshots and narrative
- Magazine-spread case study layout — cinematic hero, metrics bar, narrative sections with screenshots woven in
- Category rows for skills (not tabs or bento cards) — all skills visible at once, scannable by category
- Iconify API over Simple Icons CDN — Simple Icons was returning 404s for most slugs
- Local images for experience slides — Wikimedia Commons blocked from localhost, Clearbit fully down

### Discoveries
- Simple Icons CDN (`cdn.simpleicons.org`) returns 404 for many common slugs (openai, tableau, microsoftexcel, etc.)
- Wikimedia Commons blocks image loading from localhost (both img tags and fetch)
- Clearbit logo service (`logo.clearbit.com`) is completely down (returns 000 status)
- Iconify API (`api.iconify.design`) is the most reliable icon CDN — aggregates multiple icon sets
- Google favicon service (`google.com/s2/favicons?domain=X&sz=128`) is always available but quality varies by domain
- Lenis smooth scroll requires removing CSS `scroll-behavior: smooth` to avoid conflicts

### What's Next
- Add Spencer's photo to hero section (replace "SG" placeholder)
- Add resume PDF file (download button is wired up)
- Swap real screenshots into project slideshow data
- Adjust project case study copy as needed
- Consider deploying to Netlify/Vercel/Cloudflare Pages

## 2026-03-30 — Hero Redesign Research + First Implementations

### What Was Done
- **Comprehensive design research**: Researched 60+ sources across 21st.dev, Awwwards, Dribbble, hiring manager studies, and modern web animation trends. Compiled 54 specific ideas across 4 priority tiers for a full section-by-section redesign.
- **Hero ambient background blobs**: Added two large, blurred, slowly drifting blobs (cyan + blue) to the hero background. Replaces flat `#f8fafc` with a soft living wash. Uses standalone `.hero-blob` classes (not the existing `.blob` parent) to avoid stacked opacity issues.
- **Hero staggered entrance animation**: Applied existing `split-reveal` classes to hero elements in sequence — badge (0ms) → name (100ms) → subtitle (250ms) → tagline (400ms) → buttons (550ms) → media card (700ms). Creates a cinematic load experience.

### Discoveries
- The existing `.blob` parent class has `opacity: 0.4` which stacks multiplicatively with child opacity — caused initial blobs to be invisible. Solution: standalone `.hero-blob` class without inheriting `.blob`.
- Spencer has `prefers-reduced-motion: reduce` enabled in Windows (Accessibility → Visual Effects → Animation effects OFF). This disables all `split-reveal` and blob animations via the existing `@media (prefers-reduced-motion)` rule. He needs to toggle this to preview animations.
- The `TYPEWRITER_WORDS` array and `.typewriter-cursor` CSS exist in the codebase but are unused — leftover from a previous iteration. Could be wired up for rotating subtitle text.

### Decisions
- Working section-by-section through the hero first, then nav, about, projects, skills, experience, contact, global polish
- Spencer prefers "noticeable but soft" blob intensity (option A) over bold/vibrant (option B)
- 54 ideas saved to memory at `memory/project_redesign_plan.md` for cross-session continuity

### What's Next
- Spencer needs to enable Windows animation effects to preview the staggered hero entrance
- Continue hero section: rotating/flip words for subtitle, sharpen tagline copy, colored browser dots, richer card stats
- Then move to navigation, about, projects, etc.

## 2026-03-30 — Hero Redesign + About Section + Nav Pill

### What Was Done
- **Hero redesign**: Replaced browser card with split layout (text left, photo placeholder right). Colored browser dots (soft red/amber/green). New tagline: "From raw data to real results — predictive models, automated systems, and analytics tools." with bold first half. Removed generic stat cards.
- **Parallax scroll animation**: Hero text blurs and slides left, photo blurs and slides right as you scroll — staggered timing (text exits first 20-50%, photo exits 60-100%). Smooth crossfade.
- **Hero→About scrollytelling transition**: About content fades in inside the same sticky hero viewport after hero content blurs out. Blobs persist for continuity. About then fades out before releasing into Projects. No hard section boundary.
- **Floating pill nav**: Navigation collapses from transparent full-width bar to a centered frosted-glass pill with rounded buttons after scrolling past hero. Active section gets cyan highlight.
- **About section redesign**: Split layout — left side has "About Me" heading, "Turning raw data into real-world solutions" statement, and quick facts with icon squares. Right side has bio paragraph and 4 detail items with colored left accent borders (approach, strength, education, experience). Connected by gradient vertical divider.
- **Rotating typewriter words**: Hook (`useRotatingWord`) built and wired up but removed from hero subtitle — Spencer felt it disrupted the static scannable identity line. Will repurpose in Skills section.

### Decisions
- Photo in hero instead of About section — immediate personal connection in 6-second scan
- Tagline B2 chosen: "From raw data to real results" — specific without being cocky
- Static subtitle pills (no rotation) — hero should be scannable, not animated
- Removed stat cards entirely — numbers without context don't add value, will show in Projects
- Scrollytelling hero→about transition instead of hard section break — content transforms in viewport
- About section uses split layout with detail grid, not cards — multiple card-based approaches tried and rejected as bland

### Failed Approaches (do not retry)
- Rotating typewriter word in hero subtitle — disrupts scannability
- Dashboard mockup in hero card — looks like it's trying to show real data, confusing
- Dark bio card in About — feels off against light theme
- Bento grid cards with colored borders in About — still looked template-y
- Interactive typographic statement in About — felt like educational instruction, not portfolio
- Equal-width card grids for About traits — all variations looked bland on light bg

### What's Next
- Preview and tune the hero→about scrollytelling transition timing
- Move to Projects section (case studies, real screenshots, bento grid)
- Wire up rotating typewriter words in Skills section
- Continue section-by-section: Projects → Skills → Experience → Contact → Global polish
