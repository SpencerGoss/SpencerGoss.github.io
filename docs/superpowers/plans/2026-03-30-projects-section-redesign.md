# Projects Section Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 2x2 browser-mockup project grid with a bento grid overview + clickable full-page case study deep views for each project.

**Architecture:** Single-file React app (`App.tsx`). New project data structure at top, new components inline (BentoGrid, CaseStudy). `selectedProject` state controls view toggle. Old ProjectCard + browser-mockup code removed. CSS updated in `index.css`.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 3.4, Lucide React icons, existing shadcn/ui (Badge, Button, Separator)

**Important context:**
- This is a portfolio site with NO test framework — no Jest, Vitest, or test files. Verification is visual (`npm run dev` at localhost:5173).
- `App.tsx` is the entire app (~1,410 lines). All components, hooks, and data live in this single file.
- Build: `npx vite build` (never `tsc -b`). Light theme only. Plus Jakarta Sans + JetBrains Mono fonts.
- The hero section uses scrollytelling (280vh outer, sticky inner). Projects section starts at line 1297.
- Spencer approves design visually — build it, then iterate based on his feedback.

---

### Task 1: Replace PROJECTS data with case study content

**Files:**
- Modify: `src/App.tsx:49-118` (PROJECTS array)

- [ ] **Step 1: Replace the PROJECTS array** with the new data structure that includes case study content. Replace the entire `const PROJECTS = [...]` block (lines 49-118) with:

```typescript
const PROJECTS = [
  {
    id: "oddsix",
    title: "Oddsix",
    subtitle: "NBA Analytics Platform",
    accent: "#06B6D4",
    accentBg: "rgba(6,182,212,0.08)",
    featured: true,
    shortDescription: "Comprehensive NBA analytics dashboard with ML-powered predictions, player tracking, historical data, and interactive visualizations — built by a basketball enthusiast.",
    url: "https://oddsix.app",
    github: "https://github.com/SpencerGoss/nba-analytics-project",
    tags: ["Python", "scikit-learn", "LightGBM", "Plotly", "Chart.js", "GitHub Pages", "SQL Server"],
    metrics: [
      { value: 73, suffix: ".5%", label: "Prediction Accuracy" },
      { value: 490, suffix: "+", label: "ML Features" },
      { value: 5, suffix: "", label: "Dashboard Sections" },
      { value: 30, suffix: "", label: "NBA Teams Covered" },
    ],
    cardMetrics: [
      { display: "73.5%", label: "Accuracy" },
      { display: "490+", label: "ML Features" },
      { display: "25+", label: "Years of Data" },
    ],
    caseStudy: {
      hook: "A comprehensive NBA analytics platform with ML-powered predictions, player tracking, league standings, and interactive data visualizations — covering 25+ years of basketball history.",
      sections: [
        {
          title: "The Challenge",
          color: "#06B6D4",
          body: "As a lifelong basketball fan, I wanted a single place to explore NBA data — player stats, team standings, historical trends, and game predictions — without the clutter and ads of existing sports sites. Most prediction models online use basic stats and single-model approaches. I wanted to build something comprehensive: a platform that combines rigorous ML with rich data exploration.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "Oddsix is a free, open-source NBA analytics dashboard with five major sections: Home (daily picks, live scores), Games (ML predictions with confidence tiers, matchup radar charts, head-to-head history), League (conference standings, power rankings, playoff picture), Players (stats for all 30 teams, player comparisons, prop projections with conformal intervals), and Betting (odds tools, value detection, CLV tracking). The prediction engine uses a stacked ensemble (Gradient Boosting + Logistic Regression) trained on 490+ engineered features — Elo ratings, clutch performance, lineup net ratings, RAPM, and opponent-adjusted stats. Auto-calibrated with Platt/Isotonic scaling. Daily updates run automatically via scheduled pipelines.",
          features: [
            { emoji: "🏠", name: "Home", desc: "Daily picks, live scores carousel, season performance tracking" },
            { emoji: "🎮", name: "Games", desc: "ML predictions with confidence tiers, matchup radar charts, head-to-head history" },
            { emoji: "🏆", name: "League", desc: "Conference standings, power rankings, playoff picture, head-to-head matrix" },
            { emoji: "👤", name: "Players", desc: "Stats for all 30 teams, player comparisons, prop projections with conformal intervals" },
          ],
        },
        {
          title: "The Result",
          color: "#10B981",
          body: "73.5% moneyline prediction accuracy across 132+ tracked games. The live dashboard at oddsix.app serves daily predictions with confidence scores, model agreement indicators, and uncertainty quantification via Monte Carlo dropout. Every prediction comes with a plain-text explanation — not a black box.",
        },
      ],
    },
  },
  {
    id: "trading-bot",
    title: "Trading Bot",
    subtitle: "Automated Trading System",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.08)",
    featured: false,
    shortDescription: "Async multi-asset trading system with 21-signal fusion, AI agent pipeline, circuit breakers, and 95% test coverage.",
    url: "#",
    github: "#",
    tags: ["Python", "asyncio", "FastAPI", "LightGBM", "Pydantic v2", "React", "SQLAlchemy"],
    metrics: [
      { value: 31, suffix: "K+", label: "Lines of Code" },
      { value: 3082, suffix: "", label: "Tests" },
      { value: 21, suffix: "", label: "Signal Types" },
      { value: 95, suffix: "%", label: "Test Coverage" },
    ],
    cardMetrics: [],
    caseStudy: {
      hook: "A production-grade automated trading system that fuses 21 signal types through an AI agent pipeline, with immutable circuit breakers and real-time risk monitoring.",
      sections: [
        {
          title: "The Challenge",
          color: "#06B6D4",
          body: "Most open-source trading bots are toy scripts — a single strategy, no risk management, no testing. I wanted to build a production-grade system that could actually handle real money: multi-asset support, multiple signal sources, proper risk controls that can't be overridden, and enough test coverage to sleep at night.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "A fully async Python trading system that trades stocks (via Alpaca) and crypto (via Kraken). 21 signal generators — technical indicators, ML predictions (LightGBM), FinBERT sentiment analysis, SEC insider filings, institutional 13F flows, and macro regime detection (FRED data) — are fused into a single confidence score. A 5-stage AI agent pipeline (Analyst → Risk Manager → Executor → Monitor → Researcher) evaluates every trade using Claude and Ollama with a hard $10/month LLM budget cap. Four-layer circuit breakers (per-trade, daily, weekly, kill switch) with immutable thresholds protect against catastrophic loss. The kill switch is permanent and cannot be overridden at runtime.",
        },
        {
          title: "The Result",
          color: "#10B981",
          body: "31,000+ lines of production Python with 3,082 tests at 95% coverage. Real-time React/FastAPI dashboard for monitoring. Pushover mobile alerts for circuit breaker trips. HMAC-signed audit logs. Tax compliance with wash-sale detection. Graceful degradation — TimescaleDB, Redis, and push notifications are all optional; the system falls back to in-memory operation.",
        },
      ],
    },
  },
  {
    id: "devtoolbox",
    title: "DevToolbox",
    subtitle: "AI Developer Tools Blog",
    accent: "#0891B2",
    accentBg: "rgba(8,145,178,0.08)",
    featured: false,
    shortDescription: "350+ articles reviewing AI coding tools. SEO-optimized Hugo site on Cloudflare Pages.",
    url: "https://devtoolbox-blog.pages.dev",
    github: "#",
    tags: ["Hugo", "PaperMod", "Cloudflare Pages", "GoatCounter", "Fuse.js"],
    metrics: [
      { value: 350, suffix: "+", label: "Articles" },
      { value: 38, suffix: "", label: "Tools Reviewed" },
      { value: 3, suffix: "", label: "Content Types" },
      { value: 0, suffix: "", label: "" },
    ],
    cardMetrics: [],
    caseStudy: {
      hook: "A comprehensive content platform reviewing and comparing 38+ AI-powered developer tools, with automated SEO, schema markup, and AI-friendly content distribution.",
      sections: [
        {
          title: "The Challenge",
          color: "#06B6D4",
          body: "The AI developer tools landscape moves fast — new tools launch weekly, pricing changes constantly, and most review sites are either surface-level listicles or thinly disguised affiliate content. I wanted to build a resource with real depth: detailed reviews, honest comparisons, and practical guides that actually help developers choose the right tools.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "A Hugo static site with 43 in-depth reviews, 28 head-to-head comparisons, 27 practical guides, and 255+ auto-generated tool comparison pages. Every article has structured schema markup (TechArticle, Review, FAQPage) for search optimization. AI-friendly llms.txt endpoints serve content directly to language models. Beehiiv newsletter integration and transparent affiliate disclosures. The content pipeline auto-generates comparison pages from a central tools.json database — one data update creates dozens of pages.",
        },
        {
          title: "The Result",
          color: "#10B981",
          body: "350+ published articles covering 38 AI developer tools across code editors, terminal AI, code completion, app builders, and code review categories. Live at devtoolbox-blog.pages.dev on Cloudflare Pages with GoatCounter privacy-first analytics. Designed for both human readers (dark theme, smooth transitions, full-text search) and AI consumption (llms.txt, structured data).",
        },
      ],
    },
  },
  {
    id: "churn-model",
    title: "Churn Predictor",
    subtitle: "MSBA Capstone",
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.08)",
    featured: false,
    shortDescription: "Customer retention prediction with cluster segmentation.",
    url: "#",
    github: "https://github.com/SpencerGoss/msba-portfolio-SpencerGoss",
    tags: ["Python", "scikit-learn", "Jupyter", "pandas"],
    metrics: [
      { value: 3, suffix: "", label: "Customer Clusters" },
      { value: 5636, suffix: "", label: "Data Points" },
      { value: 0, suffix: "", label: "" },
      { value: 0, suffix: "", label: "" },
    ],
    cardMetrics: [],
    caseStudy: {
      hook: "A predictive churn model that identifies at-risk customers and segments them into actionable clusters for targeted retention strategies.",
      sections: [
        {
          title: "The Challenge",
          color: "#06B6D4",
          body: "For my MSBA capstone, we were given a real customer dataset of 5,636 records with demographics and behavioral characteristics. The goal: build a predictive model to identify churn risk, find the key factors driving churn, and provide data-driven recommendations for retention.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "A gradient-boosted ensemble model for churn prediction, combined with customer segmentation using clustering. The analysis revealed that tenure and contract type are the strongest churn predictors — customers in their first 6 months on month-to-month plans are at highest risk. Customers who refer others churn significantly less. Three distinct customer clusters emerged, each requiring a different retention strategy.",
        },
        {
          title: "The Result",
          color: "#10B981",
          body: "Key actionable insights: new customers (0-6 months) on month-to-month contracts need immediate engagement. Referral programs are a high-leverage retention tool. Each of the three customer segments should receive a tailored retention approach based on their risk profile and behavioral patterns. The model provides a prioritized list of at-risk customers for the marketing team to act on.",
        },
      ],
    },
  },
];
```

- [ ] **Step 2: Add the `ArrowLeft` import** to the lucide-react import block at line 2. Add `ArrowLeft` to the existing destructured import:

In the import from `"lucide-react"` (lines 2-21), add `ArrowLeft` to the list.

- [ ] **Step 3: Verify the dev server still runs**

Run: `cd "/c/Users/Spencer/OneDrive/Career/Personal Website" && npm run dev`
Expected: Vite dev server starts. The page will have errors because ProjectCard references old data shape — that's expected, we fix it in the next task.

- [ ] **Step 4: Commit**

```bash
cd "/c/Users/Spencer/OneDrive/Career/Personal Website"
git add src/App.tsx
git commit -m "feat: replace PROJECTS data with case study content structure"
```

---

### Task 2: Build BentoGrid and BentoCard components

**Files:**
- Modify: `src/App.tsx` — replace `ProjectCard` component (lines 417-568) with new `BentoGrid` component

- [ ] **Step 1: Delete the old `ProjectCard` component** (lines 417-568) and replace it with the new bento grid components. Insert these in the same location (after `StatCard`, before `TechIcon`):

```tsx
function BentoCard({ project, onClick }: { project: typeof PROJECTS[0]; onClick: () => void }) {
  const revealRef = useScrollReveal();

  if (project.featured) {
    return (
      <div
        ref={revealRef}
        className="scroll-reveal bento-card bento-featured"
        onClick={onClick}
      >
        {/* Subtle glow */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${project.accentBg}, transparent 70%)`, filter: "blur(40px)" }}
        />
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ color: project.accent }}>
              Featured Project
            </div>
            <h3 className="text-2xl md:text-[26px] font-extrabold tracking-tight text-foreground mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{project.subtitle}</p>
            <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-[360px]">
              {project.shortDescription}
            </p>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-4 rounded-xl border border-border bg-secondary/50 h-20 flex items-center justify-center">
            <span className="text-xs text-muted-foreground/40">[ screenshot ]</span>
          </div>

          <div>
            {/* Metrics */}
            <div className="flex gap-6 mb-3">
              {project.cardMetrics.map((m, i) => (
                <div key={i}>
                  <div className="text-xl md:text-[22px] font-extrabold text-foreground">{m.display}</div>
                  <div className="text-[9px] text-muted-foreground uppercase tracking-[1px]">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex gap-1.5 flex-wrap">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="text-[10px] bg-secondary border border-border text-muted-foreground px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Non-featured card (medium or compact)
  return (
    <div
      ref={revealRef}
      className="scroll-reveal bento-card"
      onClick={onClick}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
            <h3 className="text-base md:text-lg font-extrabold text-foreground">{project.title}</h3>
          </div>
          <p className="text-[11px] text-muted-foreground mb-2">{project.subtitle}</p>
          <p className="text-[11px] text-muted-foreground/70 leading-relaxed">{project.shortDescription}</p>
        </div>
        <div className="flex gap-1.5 flex-wrap mt-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-2 py-0.5 rounded-full border"
              style={{ background: project.accentBg, color: project.accent, borderColor: `${project.accent}20` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoGrid({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  const oddsix = PROJECTS.find((p) => p.id === "oddsix")!;
  const tradingBot = PROJECTS.find((p) => p.id === "trading-bot")!;
  const devtoolbox = PROJECTS.find((p) => p.id === "devtoolbox")!;
  const churnModel = PROJECTS.find((p) => p.id === "churn-model")!;

  return (
    <div className="bento-grid">
      {/* Oddsix — large featured (spans 2 rows) */}
      <div className="bento-col-left">
        <BentoCard project={oddsix} onClick={() => onSelectProject("oddsix")} />
      </div>

      {/* Right column */}
      <div className="bento-col-right">
        <BentoCard project={tradingBot} onClick={() => onSelectProject("trading-bot")} />
        <div className="bento-row-compact">
          <BentoCard project={devtoolbox} onClick={() => onSelectProject("devtoolbox")} />
          <BentoCard project={churnModel} onClick={() => onSelectProject("churn-model")} />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add BentoGrid and BentoCard components"
```

---

### Task 3: Build CaseStudy component

**Files:**
- Modify: `src/App.tsx` — add `CaseStudy` component after `BentoGrid`

- [ ] **Step 1: Add the CaseStudy component** right after the `BentoGrid` component:

```tsx
function CaseStudyMetric({ metric }: { metric: typeof PROJECTS[0]["metrics"][0] }) {
  const { count, ref } = useCountUp(metric.value);
  if (!metric.label) return null;
  return (
    <div ref={ref} className="flex-1 py-5 md:py-6 text-center border-r border-border last:border-r-0">
      <div className="text-2xl md:text-[26px] font-extrabold text-foreground tracking-tight">
        {count}{metric.suffix}
      </div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-[1px] mt-1">{metric.label}</div>
    </div>
  );
}

function StorySection({ section, index }: { section: { title: string; color: string; body: string; features?: { emoji: string; name: string; desc: string }[] }; index: number }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="scroll-reveal mb-8 md:mb-10" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-5 md:h-6 rounded-full" style={{ background: section.color }} />
        <h3 className="text-lg md:text-xl font-bold text-foreground">{section.title}</h3>
      </div>

      {/* Feature cards (only for "What I Built" with features) */}
      {section.features && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          {section.features.map((f, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-3.5">
              <div className="text-sm font-bold text-foreground mb-1">{f.emoji} {f.name}</div>
              <div className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      )}

      <p className="text-sm md:text-[15px] text-muted-foreground leading-[1.8]">{section.body}</p>
    </div>
  );
}

function CaseStudy({ project, onBack }: { project: typeof PROJECTS[0]; onBack: () => void }) {
  // Scroll to top when case study opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const heroRef = useScrollReveal();
  const metricsRef = useScrollReveal();

  const visibleMetrics = project.metrics.filter((m) => m.label);

  return (
    <div className="case-study-enter">
      {/* Back bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span className="font-medium">Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Hero */}
      <div
        ref={heroRef}
        className="scroll-reveal relative overflow-hidden border-b border-border"
        style={{ background: "linear-gradient(135deg, #f8fafc, #ecfeff, #f0f9ff)" }}
      >
        {/* Blob glow */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${project.accentBg}, transparent 70%)`, filter: "blur(60px)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 pt-12 md:pt-16 pb-8 md:pb-10">
          <div className="text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ color: project.accent }}>
            Case Study
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-1">
            {project.title}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            {project.caseStudy.hook}
          </p>

          {/* Screenshot placeholder */}
          <div className="bg-white border border-border rounded-xl h-32 md:h-48 flex items-center justify-center shadow-sm mb-6">
            <span className="text-sm text-muted-foreground/40">[ hero screenshot ]</span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            {project.url !== "#" && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ background: project.accent }}
              >
                Visit {project.title} <ArrowUpRight size={14} />
              </a>
            )}
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-white border border-border text-foreground hover:border-primary/30 transition-colors"
              >
                <Code2 size={14} /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Metrics bar */}
      {visibleMetrics.length > 0 && (
        <div ref={metricsRef} className="scroll-reveal bg-white border-b border-border">
          <div className="max-w-2xl mx-auto flex">
            {visibleMetrics.map((m, i) => (
              <CaseStudyMetric key={i} metric={m} />
            ))}
          </div>
        </div>
      )}

      {/* Story sections */}
      <div className="max-w-2xl mx-auto px-6 py-10 md:py-14">
        {project.caseStudy.sections.map((section, i) => (
          <StorySection key={i} section={section} index={i} />
        ))}

        {/* Screenshot placeholder between sections */}
        <div className="bg-white border border-border rounded-xl h-24 md:h-32 flex items-center justify-center shadow-sm mb-10">
          <span className="text-sm text-muted-foreground/40">[ additional screenshot ]</span>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 md:h-6 rounded-full" style={{ background: "#F59E0B" }} />
            <h3 className="text-lg md:text-xl font-bold text-foreground">Tech Stack</h3>
          </div>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-white border border-border text-muted-foreground px-3.5 py-1.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add CaseStudy, StorySection, and CaseStudyMetric components"
```

---

### Task 4: Wire up state and update the projects section render

**Files:**
- Modify: `src/App.tsx` — update `App()` component

- [ ] **Step 1: Add `selectedProject` state** to the App component. Near line 925 (after `const [mobileMenuOpen, setMobileMenuOpen] = useState(false);`), add:

```tsx
const [selectedProject, setSelectedProject] = useState<string | null>(null);
```

- [ ] **Step 2: Replace the projects section render.** Find the `{/* ===== PROJECTS ===== */}` section (around line 1297-1316) and replace the entire `<section>` with:

```tsx
      {/* ===== PROJECTS ===== */}
      <section ref={sectionRefs.projects} className="py-24 md:py-32" style={{ background: "#FAFBFF" }}>
        {selectedProject ? (
          <CaseStudy
            project={PROJECTS.find((p) => p.id === selectedProject)!}
            onBack={() => {
              setSelectedProject(null);
              // Scroll back to projects section after state update
              setTimeout(() => {
                sectionRefs.projects.current?.scrollIntoView({ behavior: "instant", block: "start" });
              }, 0);
            }}
          />
        ) : (
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
                Featured Projects
              </h2>
              <Separator className="w-12 bg-primary h-0.5 mb-4" />
              <p className="text-muted-foreground">
                Real projects, real data, real impact. Click any to see the full case study.
              </p>
            </div>
            <BentoGrid onSelectProject={setSelectedProject} />
          </div>
        )}
      </section>
```

- [ ] **Step 3: Remove the `min-h-screen flex items-center` classes** from the projects section. The bento grid and case study handle their own height.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wire up project selection state and case study toggle"
```

---

### Task 5: Add CSS for bento grid and case study

**Files:**
- Modify: `src/index.css` — replace browser-mockup CSS with bento grid CSS

- [ ] **Step 1: Delete old project card CSS.** Remove these CSS blocks from `index.css` (lines 221-298):
  - `.browser-mockup` and `.browser-mockup:hover`
  - `.browser-chrome`
  - `.browser-dots`
  - `.browser-dot`
  - `.browser-url`
  - `.project-card-wrapper`
  - `.project-card-tilt`
  - `.screenshot-area` and `.project-card-wrapper:hover .screenshot-area`
  - `.glass-overlay` and `.project-card-wrapper:hover .glass-overlay`

- [ ] **Step 2: Add bento grid and case study CSS** in the same location where the old CSS was:

```css
/* ========== BENTO GRID ========== */
.bento-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 16px;
}

.bento-col-left {
  display: flex;
}

.bento-col-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bento-row-compact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.bento-card {
  background: white;
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
  padding: 22px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  width: 100%;
}

.bento-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.bento-featured {
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

/* ========== CASE STUDY ========== */
.case-study-enter {
  animation: case-study-fade-in 0.3s ease-out;
}

@keyframes case-study-fade-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== BENTO RESPONSIVE ========== */
@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-row-compact {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Update the reduced-motion media query.** In the existing `@media (prefers-reduced-motion: reduce)` block (around line 454), add:

```css
  .case-study-enter { animation: none !important; }
```

- [ ] **Step 4: Verify visually.** Open `http://localhost:5173` and check:
  - Bento grid renders with Oddsix large on left, Trading Bot right, DevToolbox + Churn compact bottom-right
  - Clicking a card opens the case study full-page view
  - "Back to Projects" returns to the grid
  - Metrics animate with countUp
  - Story sections scroll-reveal into view
  - Mobile: cards stack in single column

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "feat: add bento grid and case study CSS, remove old browser-mockup styles"
```

---

### Task 6: Clean up unused code

**Files:**
- Modify: `src/App.tsx` — remove dead code

- [ ] **Step 1: Remove unused components and data.** Delete these blocks which are no longer used anywhere:
  - `StatCard` component (the one that uses `useCountUp` for standalone stat cards — NOT `CaseStudyMetric`)
  - `STATS` array (`const STATS = [...]`)
  - `ABOUT_TRAITS` array and `TraitWord` component
  - Any unused imports that result from these deletions

- [ ] **Step 2: Remove unused icon imports.** Check the lucide-react import block — remove any icons no longer referenced. After the changes, these should no longer be needed (verify before removing):
  - `Search`, `Target`, `RefreshCw`, `Rocket` (were used in `ABOUT_TRAITS`)

- [ ] **Step 3: Verify build passes**

Run: `cd "/c/Users/Spencer/OneDrive/Career/Personal Website" && npx vite build`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "chore: remove unused StatCard, STATS, ABOUT_TRAITS, TraitWord components"
```

---

### Task 7: Rebuild portfolio.html

**Files:**
- Modify: `portfolio.html` (rebuild via bundle script)

- [ ] **Step 1: Run the build**

```bash
cd "/c/Users/Spencer/OneDrive/Career/Personal Website" && npx vite build
```

- [ ] **Step 2: Run the bundle script** to regenerate `portfolio.html`:

```bash
cd "/c/Users/Spencer/OneDrive/Career/Personal Website" && python -c "
import os
dist = 'dist/assets'
css_file = [f for f in os.listdir(dist) if f.endswith('.css')][0]
js_file = [f for f in os.listdir(dist) if f.endswith('.js')][0]
with open(os.path.join(dist, css_file)) as f: css = f.read()
with open(os.path.join(dist, js_file)) as f: js = f.read()
html = '<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /><title>Spencer Goss - Portfolio</title><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" /><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin /><link href=\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap\" rel=\"stylesheet\" /><style>' + css + '</style></head><body><div id=\"root\"></div><script>' + js.replace('</script>','<\\/script>') + '</script></body></html>'
with open('portfolio.html','w') as f: f.write(html)
print('portfolio.html rebuilt')
"
```

- [ ] **Step 3: Commit**

```bash
git add portfolio.html dist/
git commit -m "build: rebuild portfolio.html with projects section redesign"
```
