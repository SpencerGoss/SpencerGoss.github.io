# Skills Section Redesign — Design Spec

## Overview

Reorganize the flat icon grid + pill cloud into categorized rows with colored labels. Add new skills based on actual project work. Wire up the existing `useRotatingWord` hook into the section header. Keep all skills visible — no tabs or hidden content.

## Layout: Category Rows

```
┌─────────────────────────────────────────────┐
│  Skills &  [rotating word]                  │
│  ─────                                      │
│  Tools I use and skills I bring to the table │
│                                             │
│  LANGUAGES (cyan)                           │
│  [Python] [SQL] [R]                         │
│                                             │
│  AI & AUTOMATION (purple)                   │
│  [Claude] [ChatGPT] [Copilot] [Prompt] [AI] │
│                                             │
│  MACHINE LEARNING (green)                   │
│  [sklearn] [pandas] [NumPy] [Jupyter] [Colab]│
│                                             │
│  VISUALIZATION (cyan)                       │
│  [Tableau] [Power BI]                       │
│                                             │
│  ANALYTICS (amber)                          │
│  [JMP] [SPSS] [Qualtrics] [SurveyMonkey]   │
│                                             │
│  TOOLS & PLATFORMS (gray)                   │
│  [Excel] [PPT] [Word] [OneNote] [SAP]      │
│  [GitHub] [VS Code] [Teams]                 │
│                                             │
│  ─── Business & Professional ───            │
│  (pill cloud, all 23 skills)                │
└─────────────────────────────────────────────┘
```

## Section Header

- Title: "Skills & [rotating word]" where the rotating word cycles through: Business Analytics, Artificial Intelligence, Data Science, Machine Learning, Predictive Modeling, Data Visualization
- Uses the existing `useRotatingWord` hook + `TYPEWRITER_WORDS` array already in the codebase
- The rotating word has a fade transition and a blinking cursor (existing `.typewriter-cursor` CSS)
- Static part: "Skills & " — rotating part replaces after the ampersand

## Tech Skills — Category Rows

Each category has:
- Colored uppercase label (10px, bold, tracked, category color)
- Row of icon cards (same `TechIcon` component, existing hover/tooltip behavior)
- Subtle left border accent matching the category color
- Scroll-reveal entrance staggered per category

### Categories and Colors

| Category | Color | Accent BG |
|----------|-------|-----------|
| Languages | #06B6D4 (cyan) | rgba(6,182,212,0.06) |
| AI & Automation | #8B5CF6 (purple) | rgba(139,92,246,0.06) |
| Machine Learning | #10B981 (green) | rgba(16,185,129,0.06) |
| Visualization | #0891B2 (teal) | rgba(8,145,178,0.06) |
| Analytics | #F59E0B (amber) | rgba(245,158,11,0.06) |
| Tools & Platforms | #64748b (gray) | rgba(100,116,139,0.06) |

### Tech Skills Data (27 total)

**Languages:** Python, SQL, R

**AI & Automation:** Claude AI, ChatGPT, GitHub Copilot, Prompt Engineering, AI Agents

**Machine Learning:** scikit-learn, pandas, NumPy, Jupyter, Google Colab

**Visualization:** Tableau, Power BI

**Analytics:** JMP, SPSS, Qualtrics, SurveyMonkey

**Tools & Platforms:** Excel, PowerPoint, Word, OneNote, SAP, GitHub, VS Code, Microsoft Teams

### Icon Sources

Existing icons stay. New icons:
- scikit-learn: `https://cdn.simpleicons.org/scikitlearn/F7931E`
- pandas: `https://cdn.simpleicons.org/pandas/150458`
- NumPy: `https://cdn.simpleicons.org/numpy/013243`
- Jupyter: `https://cdn.simpleicons.org/jupyter/F37626`
- Google Colab: `https://cdn.simpleicons.org/googlecolab/F9AB00`
- VS Code: `https://cdn.simpleicons.org/visualstudiocode/007ACC`
- Microsoft Teams: `https://cdn.simpleicons.org/microsoftteams/6264A7`
- OneNote: `https://cdn.simpleicons.org/microsoftonenote/7719AA`
- Qualtrics: Lucide `ClipboardCheck` icon, color #00B4EF
- SurveyMonkey: Lucide `MessageSquare` icon, color #00BF6F

## Business Skills — Pill Cloud (23 total)

Same `BusinessSkillPill` component. Updated list:

Financial Analysis, Marketing Analytics, Predictive Modeling, Statistical Analysis, Data Storytelling, Econometrics & Forecasting, Regression & Classification, A/B Testing, Data Cleaning & ETL, Machine Learning, Feature Engineering, Customer Segmentation, Risk Analysis, SEO & Content Strategy, Data Pipeline Development, Dashboard Design, Data Wrangling, Stakeholder Communication, Requirements Gathering, Process Automation, Business Strategy, Cross-functional Collaboration, Project Management

**Removed:** RapidMiner, Google Sheets, Adaptability, Attention to Detail, Time Management, Problem Solving, Team Leadership, Research & Synthesis

## Animations

- Section header with rotating word: fade in/out transition (existing `useRotatingWord` hook handles this)
- Category rows: scroll-reveal with stagger (each category 100ms after the previous)
- Individual tech icons: existing hover lift + tooltip behavior preserved
- Business pills: existing hover behavior preserved

## Mobile

- Category rows stack naturally (flex-wrap already handles this)
- No layout changes needed — rows just wrap

## Components

- Reuse existing `TechIcon` component (no changes needed)
- Reuse existing `BusinessSkillPill` component (no changes needed)
- New: `SkillCategory` component — renders category label + row of TechIcon cards
- Modify: section header to include rotating word
- Restructure `TECH_SKILLS` data to include `category` field (already exists but unused for grouping)

## What Gets Removed

- The flat "Tools & Technologies" and "Business & Professional" subheaders (replaced by category labels)
- RapidMiner from tech skills
- Google Sheets from tech skills
- 8 business skills (listed above)
