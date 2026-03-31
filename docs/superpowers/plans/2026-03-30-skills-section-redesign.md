# Skills Section Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize the flat skills grid into categorized rows with colored labels, add 10 new tech skills + 6 new business skills, remove 10 outdated ones, and wire the rotating word into the section header.

**Architecture:** Single-file React app (`App.tsx`). Update `TECH_SKILLS` and `BUSINESS_SKILLS` data arrays, add `SkillCategory` component, restructure the skills section render, add 2 new lucide icon imports, wire existing `rotatingWord` into the header.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 3.4, Lucide React, Simple Icons CDN

**Important context:**
- All code lives in `src/App.tsx` (single file, ~1500 lines now)
- No test framework — visual verification only (`npm run dev` at localhost:5173)
- Build: `npx vite build` (never `tsc -b`)
- `useRotatingWord` hook and `TYPEWRITER_WORDS` already exist (lines 419-445)
- `rotatingWord` and `wordVisible` are already destructured in App() at line 1225 but unused in render
- Existing `TechIcon` component handles icon rendering with hover tooltips
- Existing `BusinessSkillPill` component handles business skill pills
- `TechSkill` type already has a `category` field on each skill

---

### Task 1: Update TECH_SKILLS data

**Files:**
- Modify: `src/App.tsx` — lines 245-265 (TECH_SKILLS array)
- Modify: `src/App.tsx` — lines 2-19 (lucide imports — add `ClipboardCheck`, `MessageSquare`)

- [ ] **Step 1: Add `ClipboardCheck` and `MessageSquare` to the lucide-react imports.**

In the import block (lines 2-19), add `ClipboardCheck` and `MessageSquare` to the destructured import from `"lucide-react"`.

- [ ] **Step 2: Replace the entire `TECH_SKILLS` array** (lines 245-265) with:

```typescript
const TECH_SKILLS: TechSkill[] = [
  // Languages
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", category: "Languages" },
  { name: "SQL", LucideIcon: Database, iconColor: "#4053D6", category: "Languages" },
  { name: "R", icon: "https://cdn.simpleicons.org/r/276DC3", category: "Languages" },
  // AI & Automation
  { name: "Claude AI", icon: "https://cdn.simpleicons.org/anthropic/191919", category: "AI & Automation" },
  { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/412991", category: "AI & Automation" },
  { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/000000", category: "AI & Automation" },
  { name: "Prompt Engineering", LucideIcon: Sparkles, iconColor: "#E8413C", category: "AI & Automation" },
  { name: "AI Agents", LucideIcon: Bot, iconColor: "#00B0D8", category: "AI & Automation" },
  // Machine Learning
  { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E", category: "Machine Learning" },
  { name: "pandas", icon: "https://cdn.simpleicons.org/pandas/150458", category: "Machine Learning" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243", category: "Machine Learning" },
  { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter/F37626", category: "Machine Learning" },
  { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00", category: "Machine Learning" },
  // Visualization
  { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau/E97627", category: "Visualization" },
  { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi/F2C811", category: "Visualization" },
  // Analytics
  { name: "JMP", LucideIcon: FlaskConical, iconColor: "#1E6FBA", category: "Analytics" },
  { name: "SPSS", LucideIcon: BarChart3, iconColor: "#1F70C1", category: "Analytics" },
  { name: "Qualtrics", LucideIcon: ClipboardCheck, iconColor: "#00B4EF", category: "Analytics" },
  { name: "SurveyMonkey", LucideIcon: MessageSquare, iconColor: "#00BF6F", category: "Analytics" },
  // Tools & Platforms
  { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel/217346", category: "Tools & Platforms" },
  { name: "PowerPoint", icon: "https://cdn.simpleicons.org/microsoftpowerpoint/B7472A", category: "Tools & Platforms" },
  { name: "Word", icon: "https://cdn.simpleicons.org/microsoftword/2B579A", category: "Tools & Platforms" },
  { name: "OneNote", icon: "https://cdn.simpleicons.org/microsoftonenote/7719AA", category: "Tools & Platforms" },
  { name: "SAP", icon: "https://cdn.simpleicons.org/sap/0FAAFF", category: "Tools & Platforms" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", category: "Tools & Platforms" },
  { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC", category: "Tools & Platforms" },
  { name: "Microsoft Teams", icon: "https://cdn.simpleicons.org/microsoftteams/6264A7", category: "Tools & Platforms" },
];
```

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: update TECH_SKILLS — add 10 new skills, remove RapidMiner and Google Sheets"
```

---

### Task 2: Update BUSINESS_SKILLS data

**Files:**
- Modify: `src/App.tsx` — lines 267-288 (BUSINESS_SKILLS array)

- [ ] **Step 1: Replace the entire `BUSINESS_SKILLS` array** with:

```typescript
const BUSINESS_SKILLS = [
  "Financial Analysis",
  "Marketing Analytics",
  "Predictive Modeling",
  "Statistical Analysis",
  "Data Storytelling",
  "Econometrics & Forecasting",
  "Regression & Classification",
  "A/B Testing",
  "Data Cleaning & ETL",
  "Machine Learning",
  "Feature Engineering",
  "Customer Segmentation",
  "Risk Analysis",
  "SEO & Content Strategy",
  "Data Pipeline Development",
  "Dashboard Design",
  "Data Wrangling",
  "Stakeholder Communication",
  "Requirements Gathering",
  "Process Automation",
  "Business Strategy",
  "Cross-functional Collaboration",
  "Project Management",
];
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: update BUSINESS_SKILLS — add 6 new skills, remove 8 generic ones"
```

---

### Task 3: Add SkillCategory component and category config

**Files:**
- Modify: `src/App.tsx` — add component before the skills section render

- [ ] **Step 1: Add the SKILL_CATEGORIES config and SkillCategory component.** Insert these right after the `BusinessSkillPill` component:

```tsx
const SKILL_CATEGORIES = [
  { name: "Languages", color: "#06B6D4" },
  { name: "AI & Automation", color: "#8B5CF6" },
  { name: "Machine Learning", color: "#10B981" },
  { name: "Visualization", color: "#0891B2" },
  { name: "Analytics", color: "#F59E0B" },
  { name: "Tools & Platforms", color: "#64748b" },
];

function SkillCategory({ category, delay }: { category: { name: string; color: string }; delay: number }) {
  const ref = useScrollReveal();
  const skills = TECH_SKILLS.filter((s) => s.category === category.name);
  if (skills.length === 0) return null;

  return (
    <div ref={ref} className="scroll-reveal mb-8" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-5 rounded-full" style={{ background: category.color }} />
        <h3
          className="text-[11px] font-bold uppercase tracking-[1.5px]"
          style={{ color: category.color }}
        >
          {category.name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <TechIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add SkillCategory component with colored labels and staggered reveal"
```

---

### Task 4: Rewire the skills section render with rotating header + categories

**Files:**
- Modify: `src/App.tsx` — the skills section JSX (around line 1628-1665)

- [ ] **Step 1: Replace the entire skills section** (from `{/* ===== SKILLS ===== */}` to the closing `</section>`) with:

```tsx
      {/* ===== SKILLS ===== */}
      <section ref={sectionRefs.skills} className="section-alt min-h-screen flex items-center py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={skillsReveal} className="scroll-reveal mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
              Skills &{" "}
              <span
                className="inline-block transition-all duration-300"
                style={{ opacity: wordVisible ? 1 : 0, transform: wordVisible ? "translateY(0)" : "translateY(8px)" }}
              >
                {rotatingWord}
              </span>
              <span className="typewriter-cursor" />
            </h2>
            <Separator className="w-12 bg-primary h-0.5 mb-6" />
            <p className="text-muted-foreground">
              Tools I use and skills I bring to the table.
            </p>
          </div>

          {/* Tech skills by category */}
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCategory key={cat.name} category={cat} delay={i * 80} />
          ))}

          {/* Business & Professional skills */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-5 rounded-full bg-foreground/20" />
              <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[1.5px]">
                Business & Professional
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {BUSINESS_SKILLS.map((skill) => (
                <BusinessSkillPill key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
```

Note: `rotatingWord` and `wordVisible` are already destructured in App() at line 1225 — they're currently unused but will now render in the header.

- [ ] **Step 2: Remove the `pt-10` padding from the old tech skills flex container** — this was compensating for tooltips clipping. The new category layout has enough spacing via the `mb-8` on each SkillCategory. If tooltips still clip, add `overflow: visible` to the section or keep the `pt-10` only on the first category.

- [ ] **Step 3: Verify visually at localhost:5173:**
  - Section header shows "Skills & [rotating word]" with blinking cursor
  - 6 category rows with colored accent bars
  - All 27 tech icons render with tooltips on hover
  - Business skills appear below a subtle divider
  - Staggered entrance animations on scroll
  - Mobile: rows wrap naturally

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat: restructure skills section — category rows, rotating header, business divider"
```

---

### Task 5: Build and commit

**Files:**
- Modify: `portfolio.html` (rebuild)

- [ ] **Step 1: Run vite build**

```bash
cd "/c/Users/Spencer/OneDrive/Career/Personal Website" && npx vite build
```

- [ ] **Step 2: Rebuild portfolio.html**

```bash
python -c "
import os
dist = 'dist/assets'
css_file = [f for f in os.listdir(dist) if f.endswith('.css')][0]
js_file = [f for f in os.listdir(dist) if f.endswith('.js')][0]
with open(os.path.join(dist, css_file), encoding='utf-8') as f: css = f.read()
with open(os.path.join(dist, js_file), encoding='utf-8') as f: js = f.read()
html = '<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\" /><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" /><title>Spencer Goss - Portfolio</title><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" /><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin /><link href=\"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap\" rel=\"stylesheet\" /><style>' + css + '</style></head><body><div id=\"root\"></div><script>' + js.replace(chr(60)+'/script>','<'+chr(92)+'/script>') + '</script></body></html>'
with open('portfolio.html','w', encoding='utf-8') as f: f.write(html)
print('Done')
"
```

- [ ] **Step 3: Commit**

```bash
git add portfolio.html
git commit -m "build: rebuild portfolio.html with skills section redesign"
```
