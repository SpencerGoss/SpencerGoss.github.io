# Projects Section Redesign — Design Spec

## Overview

Replace the current 2x2 browser-mockup card grid with a bento grid overview + full-page case study deep views. Each project card is clickable and opens a magazine-spread case study page with screenshots, narrative content, and tech stack details.

## Design Decisions

- **Bento grid** for the overview — Oddsix gets a large 2-row featured card, Trading Bot gets a medium card, DevToolbox and Churn Model share a compact row
- **Full-page takeover** when clicking any project — animated card expansion, "Back to Projects" to return
- **Magazine-spread case study** layout — cinematic hero with screenshot, metrics bar, narrative sections with screenshots woven in, tech stack pills
- **Light theme throughout** — white cards, #f8fafc background, #06B6D4 cyan accents, Plus Jakarta Sans. Matches existing hero/nav/about sections
- **Oddsix framed as NBA analytics platform**, not a betting tool — built by a basketball enthusiast, predictions are one feature among player tracking, league standings, historical data, and interactive visualizations

## Part 1: Bento Grid

### Layout

```
┌─────────────────────┬──────────────┐
│                     │ Trading Bot  │
│  Oddsix (featured)  │              │
│  2 rows tall        ├──────┬───────┤
│                     │DevTB │Churn  │
└─────────────────────┴──────┴───────┘
```

- Grid: `grid-template-columns: 1.6fr 1fr`, two rows
- Oddsix spans both rows (`grid-row: 1 / 3`)
- All cards: white bg, 1px #e2e8f0 border, soft shadow, rounded-2xl, cursor pointer
- Hover: subtle shadow increase + slight lift (translateY -2px)

### Oddsix Featured Card

- "FEATURED PROJECT" label in cyan uppercase
- Title "Oddsix" (26px, 800 weight)
- Subtitle: "NBA Analytics Platform"
- Description: "Comprehensive NBA analytics dashboard with ML-powered predictions, player tracking, historical data, and interactive visualizations — built by a basketball enthusiast."
- Screenshot placeholder (will be replaced with real oddsix.app screenshot)
- Metrics row: 73.5% Accuracy | 490+ ML Features | 25+ Years of Data
- Tech pills: Python, XGBoost, Plotly, GitHub Pages
- Subtle radial gradient glow in top-right corner (rgba(6,182,212,0.08))

### Trading Bot Card

- Purple accent dot + title
- Subtitle: "Automated Trading System"
- Description: "Async multi-asset trading system with 21-signal fusion, AI agent pipeline, circuit breakers, and 95% test coverage."
- Tech pills: Python, Async, FastAPI, LightGBM (purple-tinted bg)

### DevToolbox Card (compact)

- Cyan accent dot + title
- Subtitle: "AI Tools Blog"
- One-liner: "350+ articles, SEO-optimized Hugo site on Cloudflare Pages."

### Churn Model Card (compact)

- Amber accent dot + title
- Subtitle: "MSBA Capstone"
- One-liner: "Customer retention prediction with cluster segmentation."

### Section Header

- "Featured Projects" (3xl/4xl, 800 weight, tracking-tighter)
- Cyan separator line (w-12, h-0.5)
- "Real projects, real data, real impact. Click any to see the full case study."

## Part 2: Full-Page Case Study

### Transition

When a bento card is clicked:
1. Scroll to top
2. Projects section content replaced with case study view (React state toggle)
3. Smooth fade/slide transition
4. URL does not change (single-page app, no routing needed)

### Case Study Structure (all projects follow this template)

1. **Back bar** — sticky top bar with "← Back to Projects" link, white bg, bottom border
2. **Hero** — light gradient bg (#f8fafc → #ecfeff → #f0f9ff), subtle blob glow, contains:
   - "CASE STUDY" label (cyan uppercase)
   - Project title (32px, 800 weight)
   - One-line hook (15px, #64748b)
   - Hero screenshot (white card with shadow, rounded-xl)
   - Action buttons: "Visit [site] →" (cyan bg) + "View on GitHub" (outline)
3. **Metrics bar** — white bg, 4 stats side-by-side with dividers, full width
4. **Story sections** — max-width 640px centered, each section has:
   - Colored left accent bar (4px wide, 22px tall, rounded)
   - Section title (18px, 700 weight)
   - Body text (14px, #475569, 1.8 line-height)
   - Screenshots woven between sections (white card, border, soft shadow)
5. **Tech stack** — pill row at bottom

### Per-Project Content

#### Oddsix

- **Metrics:** 73.5% Prediction Accuracy | 490+ ML Features | 5 Dashboard Sections | 30 NBA Teams
- **The Challenge:** Personal motivation as basketball fan wanting comprehensive NBA data + rigorous ML predictions in one place
- **What I Built:** Feature breakdown cards (Home, Games, League, Players) + description of the ensemble model (stacked GBM + LR, 490 features, Elo ratings, RAPM, auto-calibration)
- **The Result:** 73.5% accuracy, daily auto-updates, confidence tiers, uncertainty quantification, plain-text explanations
- **Screenshots:** Dashboard home, games page with radar charts, player comparison view
- **Tech:** Python, scikit-learn, LightGBM, Plotly, Chart.js, GitHub Pages, SQL Server
- **Links:** oddsix.app, GitHub repo

#### Trading Bot

- **Metrics:** 31K+ Lines of Code | 3,082 Tests | 21 Signal Types | 95% Coverage
- **The Challenge:** Build a production-grade automated trading system with real risk management, not a toy script
- **What I Built:** Multi-asset async system (stocks via Alpaca, crypto via Kraken), 21-signal fusion (technical, ML, sentiment, insider, macro), 5-stage AI agent pipeline (Claude + Ollama), 4-layer circuit breakers with immutable kill switch
- **The Result:** Production-ready system with real-time React dashboard, mobile alerts, audit logging, tax compliance, graceful degradation
- **Screenshots:** React dashboard mockup (styled terminal/code view since it's not public-facing)
- **Tech:** Python, asyncio, FastAPI, LightGBM, Pydantic v2, React, SQLAlchemy
- **Links:** GitHub (if public), otherwise just description

#### DevToolbox

- **Metrics:** 350+ Articles | 38 Tools Reviewed | 3 Content Types | Cloudflare Pages
- **The Challenge:** Create a comprehensive resource for developers evaluating AI coding tools, with real depth instead of surface-level listicles
- **What I Built:** Hugo static site with 43 reviews, 28 comparisons, 27 guides, 255+ auto-generated tool comparisons, SEO schema (TechArticle, Review, FAQPage), AI-friendly llms.txt, Beehiiv newsletter
- **The Result:** Automated content pipeline, live at devtoolbox-blog.pages.dev, designed for both human readers and AI consumption
- **Screenshots:** Homepage, article page, comparison table
- **Tech:** Hugo, PaperMod, Cloudflare Pages, GoatCounter, Fuse.js
- **Links:** devtoolbox-blog.pages.dev

#### Churn Model

- **Metrics:** 3 Customer Clusters | Predictive Model | Data-Driven Recommendations
- **The Challenge:** MSBA capstone — identify churn risk factors and provide actionable retention strategies from customer behavioral data
- **What I Built:** Predictive churn model using gradient-boosted ensembles, customer segmentation into 3 clusters, analysis of tenure and contract type as key churn drivers
- **The Result:** Key insight: newest customers (0-6 months) on month-to-month contracts are highest churn risk. Referral programs significantly reduce churn. Each cluster needs different retention approach.
- **Screenshots:** Notebook output visualization or GitHub README
- **Tech:** Python, scikit-learn, Jupyter, pandas
- **Links:** GitHub repo (SpencerGoss/msba-portfolio-SpencerGoss)

## Part 3: Implementation Details

### Component Architecture

Current `App.tsx` is ~1,410 lines. The case study system adds significant complexity, so the project data and case study content should be extracted into a separate data file or kept as structured constants at the top of App.tsx.

New components needed:
- `BentoGrid` — the overview grid layout
- `BentoCard` — individual project card (featured variant + compact variant)
- `CaseStudy` — full-page case study template
- `MetricsBar` — row of stat cards with dividers
- `StorySection` — titled section with accent bar

State management:
- `selectedProject: string | null` — when set, renders CaseStudy instead of BentoGrid
- Back button sets it to null

### Removing Old Code

- Delete current `ProjectCard` component and its browser-mockup styles
- Delete `.browser-mockup`, `.browser-chrome`, `.browser-dots`, `.browser-url`, `.screenshot-area`, `.glass-overlay`, `.project-card-tilt`, `.project-card-wrapper` CSS
- Keep `PROJECTS` data array but restructure it with case study content fields

### Screenshots

For initial implementation, use styled gradient placeholders that clearly indicate "screenshot goes here." Spencer will provide or approve real screenshots later. The design should look complete even with placeholders.

### Animations

- Bento cards: scroll-reveal entrance (staggered, existing pattern)
- Card hover: subtle shadow increase + translateY(-2px)
- Case study transition: fade out bento grid, fade in case study (200-300ms)
- Case study sections: scroll-reveal with accent bar slide-in
- Metrics bar: countUp animation on numbers (reuse existing useCountUp hook)
- Back transition: reverse fade

### Mobile Responsive

- Bento grid collapses to single column on mobile (all cards stack vertically, Oddsix card is just taller, not spanning columns)
- Case study: full-width, no side padding changes needed (max-width 640px handles it)
- Metrics bar: 2x2 grid on mobile instead of 4 across
- Back bar stays sticky

## Out of Scope

- Real screenshots (placeholder-first, swap later)
- URL routing / browser history for case studies
- Lenis smooth scroll (separate global polish phase)
- Other sections (Skills, Experience, Contact)
