import { useState, useEffect, useRef, useCallback } from "react";
import {
  Mail,
  ExternalLink,
  Code2,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  ArrowLeft,
  Database,
  Sparkles,
  Bot,
  ClipboardCheck,
  MessageSquare,
  MapPin,
  GraduationCap,
  Briefcase,
  FileCode2,
  BrainCircuit,
  Sigma,
  BookOpen,
  Cloud,
  LayoutDashboard,
  TrendingUp,
  FileSpreadsheet,
  Presentation,
  FileText,
  StickyNote,
  Boxes,
  GitBranch,
  MonitorSmartphone,
  Users,
  Terminal,
  Download,
  Network,
  ShieldCheck,
  Swords,
  Activity,
  Scale,
  Repeat,
} from "lucide-react";

/* Inline SVG brand icons (removed from lucide-react v1.x) */
const Github = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Linkedin = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ================================================================
   DATA
   ================================================================ */

const PROJECTS = [
  {
    id: "oddsix",
    title: "Oddsix",
    subtitle: "Multi-Sport Data and Prediction Platform",
    accent: "#06B6D4",
    accentBg: "rgba(6,182,212,0.08)",
    featured: true,
    cardImage: "/images/projects/oddsix-card.png",
    shortDescription: "A live sports data and prediction site covering the NBA, NFL, MLB, NHL and soccer: scores, standings, team and player pages, record books going back to each league's early years, and a model prediction for every game. I designed, built and run all of it.",
    url: "https://oddsix.app",
    github: "https://github.com/SpencerGoss/oddsix",
    tags: ["Python", "SQL", "scikit-learn", "LightGBM", "Astro", "Cloudflare"],
    screenshots: [
      { label: "Today across all sports", desc: "The daily slate, live scores and the model's view of every game", img: "/images/projects/oddsix-home.png" },
      { label: "Franchise history", desc: "Season-by-season records and all-time marks going back decades", img: "/images/projects/oddsix-team.png" },
      { label: "Career shot charts", desc: "Every zone graded against that season's league average, so eras compare fairly", img: "/images/projects/oddsix-shotchart.png" },
    ],
    metrics: [
      { value: 5, suffix: "", label: "Live Leagues" },
      { value: 57, suffix: "K", label: "Player Pages" },
      { value: 25, suffix: "+", label: "Years of History" },
      { value: 68, suffix: "K", label: "Games Stored" },
    ],
    cardMetrics: [
      { display: "5", label: "Live leagues" },
      { display: "57K", label: "Player pages" },
      { display: "25+", label: "Years of data" },
    ],
    caseStudy: {
      hook: "A live sports data and prediction platform covering five leagues, with 25+ years of history alongside the current season: live scores, standings, team and player pages, record books, and a model prediction on every game. Data updates continuously through the day.",
      sections: [
        {
          title: "Why I Built It",
          color: "#06B6D4",
          body: "I built Oddsix as a personal project because I'm a big sports fan, especially basketball, and I wanted one place that combined the stats I care about with real predictive modeling. It started as a way to compare players across eras and grew into a full platform covering five leagues, with a prediction and a plain-English explanation for every game.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "Oddsix pulls from league data feeds and public odds through the day, validates everything on the way in, and rebuilds the site's data products automatically. It holds roughly 68,000 games and pages for about 57,000 players, with record books going back to each league's early years. Each sport has its own prediction model built from engineered features like team strength ratings, recent form, opponent-adjusted efficiency, rest and injuries. Models are validated on seasons they never trained on, their probabilities are calibrated, and every prediction is graded publicly after the game. A new generation of models is being evaluated live this season.",
          features: [
            { emoji: "\u{1F3C0}", name: "Five Leagues, One Place", desc: "Live scores, standings, team and player pages across the NBA, NFL, MLB, NHL and soccer" },
            { emoji: "\u{1F4CA}", name: "Player and Team Analytics", desc: "Career stats and game logs for about 57,000 players, shot charts, and franchise records" },
            { emoji: "\u{1F3AF}", name: "A Model Per Sport", desc: "Win probability and projected score for every game, explained in plain English" },
            { emoji: "\u{1F4C8}", name: "Graded Publicly", desc: "Every prediction is scored after the game and shown on the accuracy page" },
          ],
        },
        {
          title: "How It's Built",
          color: "#10B981",
          body: "The pipeline is Python and SQL, with relational databases and versioned data files, and large archives on Cloudflare R2. The front end is an Astro static site on Cloudflare Pages, where a single template serves every player page. Thousands of automated tests run on every change, and the platform is built and maintained by one developer working with AI coding tools.",
        },
      ],
    },
  },
  {
    id: "agent-engineering",
    title: "AI Agent Workflows",
    subtitle: "Multi-Agent Engineering · Open Patterns",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.08)",
    featured: false,
    shortDescription: "The method I use to run AI coding agents on real work: tasks split across parallel agents, every result checked by an independent reviewer, and recurring errors turned into enforced rules. Published as reusable patterns and skills.",
    url: "#",
    github: "https://github.com/SpencerGoss/agent-engineering",
    tags: ["Claude", "Codex", "Gemini", "Copilot", "Prompt Engineering", "Multi-Agent"],
    screenshots: [],
    metrics: [
      { value: 11, suffix: "", label: "Reusable Skills" },
      { value: 3, suffix: "", label: "Published Patterns" },
      { value: 5, suffix: "", label: "AI Models Coordinated" },
    ],
    cardMetrics: [
      { display: "11", label: "Reusable skills" },
      { display: "3", label: "Patterns" },
      { display: "5", label: "AI models" },
    ],
    caseStudy: {
      hook: "A working method for using AI coding agents on real projects, built and refined while developing Oddsix and my other work, and published as open patterns and skills that run in Claude Code, Codex, Gemini CLI and Copilot.",
      sections: [
        {
          title: "The Approach",
          color: "#8B5CF6",
          body: "Work is routed by its shape. Independent pieces go to parallel agents, open design questions get several competing attempts and a judge panel, and simple sequential work stays with a single agent. Every result is checked by an independent reviewer that re-does the work rather than voting, and important decisions go to several different AI models at once so the answers are genuinely independent.",
        },
        {
          title: "What's Published",
          color: "#06B6D4",
          body: "Three engineering patterns (multi-agent orchestration, a multi-model review council, and learned guardrails) and eleven installable skills covering code review, debugging, planning, testing, security review, refactoring and decision records. Each skill is prompt-only, so it works in any compatible AI coding tool without extra software.",
        },
        {
          title: "Where It's Used",
          color: "#10B981",
          body: "This is how I build day to day: Oddsix, its data pipeline and front end, and my other projects are developed with these workflows, with automated checks and tests gating each change before it ships.",
        },
      ],
    },
  },
  {
    id: "msba-nba",
    title: "NBA Win Prediction Model",
    subtitle: "Predictive Modeling · MSBA 645",
    accent: "#EA580C",
    accentBg: "rgba(234,88,12,0.08)",
    featured: false,
    // VIDEO REMOVED 2026-10-06: YouTube id "QSooLoE32zk" no longer exists. To restore, put
    // `video: "<new id>",` back on this line.
    shortDescription: "A game-outcome model on five NBA seasons using only information known before tip-off, with play-style clustering. The modeling foundation that grew into Oddsix.",
    url: "#",
    github: "#",
    tags: ["Python", "LightGBM", "scikit-learn", "K-Means", "NBA Stats API"],
    screenshots: [],
    metrics: [
      { value: 10500, suffix: "+", label: "Games Analyzed" },
      { value: 5, suffix: "", label: "NBA Seasons" },
      { value: 26, suffix: "", label: "Pre-Game Features" },
      { value: 4, suffix: "", label: "Play-Style Clusters" },
    ],
    cardMetrics: [
      { display: "10.5K+", label: "Games" },
      { display: "26", label: "Features" },
      { display: "4", label: "Clusters" },
    ],
    caseStudy: {
      hook: "A win-prediction model for every NBA game across five seasons, built for my MSBA 645 final and later scaled into Oddsix.",
      sections: [
        {
          title: "The Problem",
          color: "#06B6D4",
          body: "Game prediction is central to sports analytics: teams use it for preparation, broadcasters for storylines, and fans for every argument. The goal was a model that predicts NBA game outcomes using only what is known before tip-off. The data covers about 10,500 games across 30 teams over five seasons, pulled from the NBA Stats API, with each row one team's game joined to its opponent and labeled with the result.",
        },
        {
          title: "The Approach",
          color: "#8B5CF6",
          body: "I engineered 26 pre-game features: last-10-game rolling form, home and away win-rate splits, season-to-date averages, and team-versus-opponent matchup differentials. Models were trained on past seasons and tested on the most recent one (walk-forward validation), comparing logistic regression with LightGBM. I also used K-Means clustering to group teams by play style (Elite Efficiency, Pace and Pressure, Rebuilding, Middle of the Pack), which picked up real franchise shifts across seasons.",
        },
        {
          title: "The Result",
          color: "#10B981",
          body: "Logistic regression edged out LightGBM, and adding the play-style clusters as features added about 1.3 points of accuracy. The same pre-game feature approach and walk-forward testing became the foundation of the Oddsix prediction models.",
        },
      ],
    },
  },
  {
    id: "box-office",
    title: "Box Office vs. Ratings",
    subtitle: "Film Analytics · ETL → PostgreSQL → Dash App",
    accent: "#2563EB",
    accentBg: "rgba(37,99,235,0.08)",
    featured: false,
    cardImage: "/images/projects/boxoffice-card.png",
    // VIDEO REMOVED 2026-10-06: YouTube id "mFgFajpfPD8" now returns "This video isn't available
    // anymore". Replaced with a live screenshot of the running app. To restore the walkthrough,
    // put `video: "<new id>",` back on this line.
    shortDescription: "An end-to-end film analytics project: an ETL pipeline (TMDB API to a 3NF PostgreSQL database) powering a live interactive film explorer built with Dash.",
    url: "https://box-office-vs-ratings.onrender.com",
    github: "https://github.com/SpencerGoss/box-office-vs-ratings",
    tags: ["Python", "pandas", "PostgreSQL", "SQLAlchemy", "Dash", "Plotly", "TMDB API"],
    screenshots: [
      { label: "The film explorer, live", desc: "Spotlight any film: budget to revenue to profit, percentile ranks, and where it sits against every other film", img: "/images/projects/boxoffice-app.png" },
    ],
    metrics: [
      { value: 5659, suffix: "", label: "Films Pipelined" },
      { value: 19, suffix: "", label: "Genres" },
      { value: 7, suffix: "", label: "Data-Quality Checks" },
      { value: 3, suffix: "NF", label: "PostgreSQL Schema" },
    ],
    cardMetrics: [
      { display: "5,659", label: "Films" },
      { display: "7", label: "QA Checks" },
      { display: "3NF", label: "Postgres" },
    ],
    caseStudy: {
      hook: "Do films that earn more also rate higher? An end-to-end data-engineering project: extract 5,659 films (2000-2025) from the TMDB API, load them into a normalized PostgreSQL database, and explore the box-office-versus-ratings story in a live, movie-theater-themed interactive film explorer.",
      sections: [
        {
          title: "The Question",
          color: "#06B6D4",
          body: "Do films that earn more also rate higher? And do certain genres show a consistent gap between revenue and reception that shifts across decades? That's the question this project answers end to end, from raw API data to a clean, reproducible pipeline. The source is the TMDB API: 5,659 films from 2000 to 2025, each with budget, revenue, runtime, audience ratings, and genres.",
        },
        {
          title: "The Pipeline",
          color: "#8B5CF6",
          body: "A single self-contained Python script runs the whole thing end to end (extract, clean, validate, load, export) with no manual steps. A two-stage TMDB extract (discover films by year, then pull per-film financials) with retry and backoff feeds a pandas transform layer that derives profit, ROI, profit margin, budget tier, hit/flop performance, and decade. A stricter quality filter drops 349 rows with placeholder budgets or streaming-only revenue (Netflix originals report token theatrical runs, so they masquerade as nine-figure flops). Before anything loads, 7 data-quality checks run (null required fields, duplicate keys, dtype coercion, range bounds, referential integrity, and row-count reconciliation), each logged PASS/FAIL, with critical failures aborting the run. The load is idempotent: ON CONFLICT upserts mean re-running never duplicates a row.",
        },
        {
          title: "The Database",
          color: "#2563EB",
          body: "Everything lands in a 3NF PostgreSQL schema: a films table, a genres lookup, and a many-to-many film_genres bridge, plus an enriched view that joins in profit, ROI, and a comma-separated genre list. The current load holds 5,659 films (after the quality filter), 19 genres, and 14,914 film-genre links, fully documented with an ER diagram. Postgres is the source of truth and the app's CSV fallback is derived from it, so the live database, the inlined DDL, and the ER diagram all describe exactly the same schema, with no drift.",
        },
        {
          title: "The Film Explorer",
          color: "#2563EB",
          body: "The final layer is a live interactive web app built with Dash and Plotly, themed like a movie theater with real movie posters throughout. Search any film (or click any chart point) and the page becomes a full breakdown: poster, budget-to-revenue-to-profit, percentile rankings, and where that film sits on the ratings-vs-returns scatter of every film. Tabs cover top-10 poster walls (biggest box office, most profitable, best return, biggest flops), head-to-head film comparisons, a sortable table of every film, and the core ratings-versus-returns analysis. Six KPI cards recompute live with genre, decade, budget-tier, and release-year filters. The app queries PostgreSQL directly and falls back to a bundled CSV snapshot when the database isn't reachable, which is what lets it run free in the cloud.",
        },
        {
          title: "The Answer",
          color: "#10B981",
          body: "Yes: better-rated films are far more profitable. Median return climbs steadily with rating: films rated under 5 lose money, while films rated 8+ return several times their budget. Blockbusters (over $150M) post the highest median ROI and the best ratings, animation is the sweet spot of high ratings and strong returns, and about 47% of films are outright hits (returning at least 2x their budget). The project reports medians throughout, because a few micro-budget viral hits would skew any average.",
        },
      ],
    },
  },
  {
    id: "churn-model",
    title: "Churn Predictor",
    subtitle: "MSBA Case Competition",
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.08)",
    featured: false,
    cardImage: "/images/projects/churn-card.png",
    shortDescription: "Churn prediction on 5,636 customers: four models benchmarked, SHAP driver analysis, and three actionable retention segments.",
    url: "#",
    github: "https://github.com/SpencerGoss/customer-churn-prediction",
    tags: ["Python", "scikit-learn", "CatBoost", "SHAP", "Jupyter", "pandas"],
    screenshots: [
      { label: "Churn by tenure", desc: "New customers churn at 53%; long-tenure customers at 14%", img: "/images/projects/churn-tenure.png" },
      { label: "Model benchmark", desc: "Random Forest vs. XGBoost vs. LightGBM vs. CatBoost", img: "/images/projects/churn-roc.png" },
      { label: "What drives churn", desc: "Referrals, dependents, and month-to-month contracts top the list", img: "/images/projects/churn-features.png" },
      { label: "SHAP driver analysis", desc: "Direction and strength of every churn driver", img: "/images/projects/churn-shap.png" },
    ],
    metrics: [
      { value: 3, suffix: "", label: "Customer Clusters" },
      { value: 5636, suffix: "", label: "Data Points" },
      { value: 4, suffix: "", label: "Models Benchmarked" },
    ],
    cardMetrics: [
      { display: "0.899", label: "Best AUC" },
      { display: "3", label: "Clusters" },
    ],
    caseStudy: {
      hook: "A predictive churn model that identifies at-risk customers and segments them into actionable clusters for targeted retention strategies.",
      sections: [
        {
          title: "The Brief",
          color: "#06B6D4",
          body: "This was a case competition in my MSBA program. We were handed a real customer dataset of 5,636 records and a business problem: figure out who was likely to churn, pin down what was driving it, and turn that into retention recommendations the business could actually act on.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "I benchmarked four models for churn prediction (Random Forest, XGBoost, LightGBM, and CatBoost), with CatBoost winning at 0.899 AUC, and combined the winner with customer segmentation using clustering. SHAP driver analysis revealed that referrals, contract type, and tenure dominate: customers in their first 6 months on month-to-month plans are at highest risk (53% churn versus 14% for long-tenure customers), and customers who refer others churn significantly less. Three distinct customer clusters emerged, each requiring a different retention strategy.",
        },
        {
          title: "The Result",
          color: "#10B981",
          body: "The practical takeaways: new customers (0-6 months) on month-to-month contracts need immediate engagement. Referral programs are one of the strongest retention tools in the data. Each of the three customer segments gets its own retention approach based on risk profile and behavior. The model also produces a prioritized list of at-risk customers for the marketing team to act on.",
        },
      ],
    },
  },
  {
    id: "chest-xray",
    title: "Chest X-ray Classifier",
    subtitle: "Deep Learning · Medical Imaging",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.08)",
    featured: false,
    shortDescription: "A deep-learning classifier that reads a chest X-ray and flags 14 possible thoracic conditions, with Grad-CAM heat maps showing where the model is looking and a runnable Streamlit app.",
    url: "#",
    github: "https://github.com/SpencerGoss/chest-xray-classifier",
    tags: ["Python", "TensorFlow", "Keras", "Grad-CAM", "Streamlit", "Google Colab"],
    screenshots: [
      { label: "Where the model looks", desc: "Grad-CAM heat map over a chest X-ray, highlighting the regions behind the prediction", img: "/images/projects/xray-gradcam.png" },
    ],
    metrics: [
      { value: 14, suffix: "", label: "Conditions Detected" },
      { value: 8, suffix: "", label: "Models Compared" },
    ],
    cardMetrics: [
      { display: "14", label: "Conditions" },
      { display: "8", label: "Models compared" },
      { display: "Grad-CAM", label: "Explainability" },
    ],
    caseStudy: {
      hook: "A multi-label image classifier trained on the public NIH ChestX-ray14 dataset. Give it a chest X-ray and it returns a probability for each of 14 thoracic conditions, plus a heat map of the regions that drove the call. The whole thing is packaged so anyone can read the results or reproduce them.",
      sections: [
        {
          title: "The Problem",
          color: "#06B6D4",
          body: "A single chest X-ray can show several conditions at once, so this is a multi-label problem, not a pick-one classification. The NIH ChestX-ray14 dataset is public and large, and it comes with the kind of messy labels (mined from radiology reports) that make a model easy to overfit and hard to trust, so the goal was a model that gives a probability for each condition and can show its reasoning, not just a score.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "A pretrained EfficientNetB0 network (transfer learning from ImageNet) turns each X-ray into 1,280 image features, and eight models are trained and compared on top of them, from logistic regression and random forests to neural networks, scored on macro AUC across all 14 conditions. The best, a neural network, reached 0.73 macro AUC, with per-condition decision thresholds tuned for recall. Grad-CAM produces a heat map over the X-ray showing which regions drove each prediction, and a small Streamlit app returns the 14 probabilities and the heat map for any uploaded image.",
        },
        {
          title: "Packaged to Run Anywhere",
          color: "#10B981",
          body: "The repo is built to be read or run. The notebook has every output baked in, so the results are visible without training anything. If you do want to reproduce it, the package downloads its own data, trains, and ships the working app, and there is a Colab badge so it runs in the browser with no setup. Computer vision, model explainability, and deployment in one self-contained project.",
        },
      ],
    },
  },
];

/* Tech skills — Iconify CDN for brand logos, Lucide for concepts */
/* `shortName` is the label drawn under the icon when the full name is too long for the
   grid. The full `name` stays in the img alt and the tooltip, so the keywords are still
   in the DOM for anyone (or anything) reading the page. */
type TechSkill = { name: string; category: string; shortName?: string } & (
  | { icon: string; LucideIcon?: never; iconColor?: never }
  | { icon?: never; LucideIcon: React.ComponentType<{ className?: string; size?: number }>; iconColor: string }
);

const TECH_SKILLS: TechSkill[] = [
  // Languages
  { name: "Python", icon: "https://api.iconify.design/logos:python.svg", category: "Languages" },
  { name: "SQL", LucideIcon: Database, iconColor: "#4053D6", category: "Languages" },
  { name: "R", icon: "https://api.iconify.design/logos:r-lang.svg", category: "Languages" },
  // AI & Automation
  { name: "Claude AI", icon: "https://api.iconify.design/simple-icons:anthropic.svg", category: "AI & Automation" },
  { name: "ChatGPT", icon: "https://api.iconify.design/logos:openai-icon.svg", category: "AI & Automation" },
  { name: "Gemini", icon: "https://api.iconify.design/simple-icons:googlegemini.svg", category: "AI & Automation" },
  { name: "GitHub Copilot", icon: "https://api.iconify.design/simple-icons:githubcopilot.svg", category: "AI & Automation" },
  { name: "Microsoft Copilot", icon: "https://api.iconify.design/logos:microsoft-icon.svg", category: "AI & Automation" },
  { name: "Prompt Engineering", LucideIcon: Sparkles, iconColor: "#E8413C", category: "AI & Automation" },
  { name: "AI Agents", LucideIcon: Bot, iconColor: "#00B0D8", category: "AI & Automation" },
  // Machine Learning
  { name: "scikit-learn", icon: "https://api.iconify.design/devicon:scikitlearn.svg", category: "Machine Learning" },
  { name: "TensorFlow", icon: "https://api.iconify.design/logos:tensorflow.svg", category: "Machine Learning" },
  { name: "pandas", icon: "https://api.iconify.design/logos:pandas-icon.svg", category: "Machine Learning" },
  { name: "NumPy", icon: "https://api.iconify.design/logos:numpy.svg", category: "Machine Learning" },
  { name: "Jupyter", icon: "https://api.iconify.design/devicon:jupyter-wordmark.svg", category: "Machine Learning" },
  // Visualization
  { name: "Tableau", icon: "https://api.iconify.design/logos:tableau-icon.svg", category: "Visualization" },
  { name: "Power BI", icon: "https://api.iconify.design/logos:microsoft-power-bi.svg", category: "Visualization" },
  { name: "Streamlit", icon: "https://api.iconify.design/simple-icons:streamlit.svg", category: "Visualization" },
  // Data
  { name: "PostgreSQL", icon: "https://api.iconify.design/logos:postgresql.svg", category: "Data" },
  { name: "SQL Server", icon: "https://api.iconify.design/simple-icons:microsoftsqlserver.svg", category: "Data" },
  // Analytics
  // Tools & Platforms
  { name: "Excel (pivot tables, XLOOKUP, VLOOKUP)", shortName: "Excel", icon: "https://api.iconify.design/simple-icons:microsoftexcel.svg", category: "Tools & Platforms" },
  { name: "PowerPoint", icon: "https://api.iconify.design/simple-icons:microsoftpowerpoint.svg", category: "Tools & Platforms" },
  { name: "Azure (coursework)", icon: "https://api.iconify.design/logos:microsoft-azure.svg", category: "Tools & Platforms" },
  { name: "SAP", icon: "https://api.iconify.design/logos:sap.svg", category: "Tools & Platforms" },
  { name: "JD Edwards", LucideIcon: FileSpreadsheet, iconColor: "#C74634", category: "Tools & Platforms" },
  { name: "GitHub", icon: "https://api.iconify.design/logos:github-icon.svg", category: "Tools & Platforms" },
];

/* Business & professional skills, grouped by area. featured = stronger visual emphasis */
const BUSINESS_SKILL_GROUPS: { label: string; skills: { name: string; featured?: boolean }[] }[] = [
  {
    label: "Machine Learning & Modeling",
    skills: [
      { name: "Predictive Modeling", featured: true },
      { name: "Machine Learning", featured: true },
      { name: "Statistical Analysis", featured: true },
      { name: "Feature Engineering", featured: true },
      { name: "Regression & Classification" },
      { name: "Deep Learning" },
      { name: "Model Explainability (SHAP)" },
    ],
  },
  {
    label: "Data Engineering",
    skills: [
      { name: "Data Pipeline Development", featured: true },
      { name: "Data Cleaning & ETL" },
      { name: "Data Validation & Quality Checks" },
      { name: "Process Automation" },
    ],
  },
  {
    label: "Analytics",
    skills: [
      { name: "Customer Segmentation" },
      { name: "Sports Analytics" },
      { name: "Marketing Analytics" },
      { name: "Financial Analysis" },
      { name: "Dashboard Design" },
      { name: "Data Storytelling" },
    ],
  },
  {
    label: "Business & Communication",
    skills: [
      { name: "Stakeholder Communication" },
      { name: "Process Documentation" },
      { name: "Training & Onboarding" },
    ],
  },
];

const EXPERIENCE = [
  {
    title: "M.S. Business Analytics",
    org: "University of Louisville",
    location: "Louisville, KY",
    period: "Aug 2025 - Aug 2026",
    description: "Completed a Master of Science in Business Analytics with a concentration in Artificial Intelligence in August 2026. Built predictive models, ML pipelines, and data tools that solve real business problems.",
    details: [
      "Graduated with a 3.94 GPA; recipient of the College of Business Graduate Programs Scholarship",
      "Concentration in Artificial Intelligence, applying ML techniques to real business problems",
      "Python, R, and SQL for advanced analytics and predictive modeling",
      "Built machine learning pipelines from data collection through deployment",
      "Coursework in machine learning, predictive modeling, data mining, database systems, cloud (Azure), and applied AI; case competition on customer churn",
    ],
    highlights: ["3.94 GPA", "AI Concentration", "Predictive Modeling", "Machine Learning Pipelines"],
    type: "education" as const,
    logo: "/images/experience/uofl-logo.png",
    color: "#AD0000",
    gradient: "from-[#AD0000] to-[#D32F2F]",
    year: "2025",
    bgImage: "/images/experience/uofl-campus.jpg",
  },
  {
    title: "Independent Projects",
    org: "Independent Projects",
    location: "Louisville, KY",
    period: "2025 - Present",
    description: "Shipping real products: a live multi-sport analytics platform, a multi-model AI development system, a film-analytics data pipeline, and a deep-learning image classifier.",
    details: [
      "Built and run Oddsix, a live sports data and prediction platform covering five leagues with 25+ years of history, pages for about 57,000 players, and a prediction model for every sport, updated continuously through the day",
      "Built a multi-model AI development system where independent AI reviewers check each other's work, with a guardrail layer that turns past mistakes into enforced checks; the patterns and skills are published at github.com/SpencerGoss/agent-engineering",
      "Built a film-analytics pipeline pulling 5,659 films from the TMDB API into a 3NF PostgreSQL database behind 7 data-quality checks, feeding a live Dash dashboard",
      "Built a deep-learning classifier for 14 thoracic conditions on the NIH ChestX-ray14 dataset in TensorFlow, with Grad-CAM explainability and a runnable Streamlit app",
    ],
    highlights: ["ML Platform", "AI Agents", "Data Pipelines", "Deep Learning"],
    type: "project" as const,
    logo: "",
    color: "#06B6D4",
    gradient: "from-[#0891B2] to-[#06B6D4]",
    year: "2025",
    bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&q=80",
  },
  {
    title: "Accounts Payable Specialist",
    org: "Churchill Downs Incorporated",
    location: "Louisville, KY",
    period: "Aug 2024 - Jul 2025",
    description: "Accounts payable across 10+ Churchill Downs properties, working every day in SAP and JD Edwards at a publicly traded company.",
    details: [
      "Verified invoice data daily in SAP and JD Edwards across 10+ properties, checking amounts, vendor codes, and account classifications against source documentation and correcting errors before they reached reporting",
      "Maintained vendor master data across subsidiary properties and resolved payment discrepancies directly with vendors",
      "Created accounts payable procedures and onboarding documentation and trained new hires on the system workflows",
      "Supported an automated invoice-processing rollout by validating the data behind it",
    ],
    highlights: ["SAP & JD Edwards", "Data Validation", "Process Documentation"],
    type: "work" as const,
    logo: "https://www.google.com/s2/favicons?domain=churchilldowns.com&sz=128",
    color: "#1B5E20",
    gradient: "from-[#1B5E20] to-[#388E3C]",
    year: "2024",
    bgImage: "/images/experience/churchill-downs.jpg",
  },
  {
    title: "BBA in Finance & Marketing, Business Analytics Minor",
    org: "University of Kentucky",
    location: "Lexington, KY",
    period: "Aug 2020 - Mar 2024",
    description: "Bachelor of Business Administration with focuses in Finance, Marketing, and a minor in Business Analytics. Built a strong foundation in quantitative analysis, business strategy, and data-driven decision-making.",
    details: [
      "Graduated with a 3.61 GPA and Dean's List honors most semesters; UK Provost Scholarship and Humana Foundation Scholarship recipient",
      "Finance and Marketing majors with a minor in Business Analytics, combining quantitative and strategic skills",
      "Developed strong foundations in data analysis, financial modeling, and marketing analytics",
      "Coursework in Business Analytics Strategy (AN 450G), Data Mining (AN 420G), and applied quantitative methods",
      "Active member of Delta Tau Delta fraternity",
    ],
    highlights: ["3.61 GPA", "Dean's List", "Business Analytics Minor"],
    type: "education" as const,
    logo: "https://www.google.com/s2/favicons?domain=uky.edu&sz=128",
    color: "#0033A0",
    gradient: "from-[#001F6D] to-[#0033A0]",
    year: "2020",
    bgImage: "/images/experience/uk-campus.jpg",
  },
  {
    title: "Warehouse Associate",
    org: "Terex Corporation",
    location: "Louisville, KY",
    period: "May 2020 - Aug 2023",
    description: "Shipping and receiving for a global heavy-equipment manufacturer over three years. Advanced from parts picker into shipping and receiving, coordinated with drivers and sales teams on order and delivery issues, and helped onboard new hires.",
    details: [
      "Advanced from parts picker into shipping and receiving, handling both roles concurrently across 100+ daily packages",
      "Coordinated with drivers and sales teams to resolve order and delivery issues",
      "Helped onboard new hires on warehouse workflows; earned forklift certification",
    ],
    highlights: ["3+ Years", "Shipping & Receiving", "Team Onboarding"],
    type: "work" as const,
    logo: "https://www.google.com/s2/favicons?domain=terex.com&sz=128",
    color: "#1565C0",
    gradient: "from-[#0D47A1] to-[#1565C0]",
    year: "2020",
    bgImage: "/images/experience/terex.jpg",
  },
  {
    title: "High School Diploma",
    org: "Saint Xavier High School",
    location: "Louisville, KY",
    period: "2016 - 2020",
    description: "All-boys Catholic college preparatory high school in Louisville, established in 1864. Active in athletics, leadership, and service organizations throughout all four years.",
    details: [
      "Member of the National Honor Society for academic excellence",
      "Served on the Student Activity Council, helping plan and coordinate school events",
      "Member of the Lacrosse and Powerlifting teams",
      "Active in Ryken Service Club, contributing to community service initiatives",
    ],
    highlights: ["National Honor Society", "Lacrosse", "Student Activity Council"],
    type: "education" as const,
    logo: "/images/experience/saint-xavier-logo.jpg",
    color: "#6A1B9A",
    gradient: "from-[#4A148C] to-[#6A1B9A]",
    year: "2016",
    bgImage: "/images/experience/saint-xavier.jpg",
  },
];

const NAV_ITEMS = [
  { key: "projects", label: "Projects" },
  { key: "about", label: "About" },
  { key: "aisystem", label: "AI" },
  { key: "experience", label: "Experience" },
  { key: "skills", label: "Skills" },
  { key: "contact", label: "Contact" },
];


/* ================================================================
   HOOKS
   ================================================================ */


function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return <div ref={ref} className={`scroll-reveal ${className}`}>{children}</div>;
}


/* ================================================================
   COMPONENTS
   ================================================================ */

/* Oddsix wordmark — the "i" is a dotless-i stem with a teal dot on top, matching oddsix.app */
function OddsixWordmark() {
  return (
    <span role="img" aria-label="Oddsix">
      <span aria-hidden="true">Odds</span>
      <span aria-hidden="true" style={{ position: "relative", display: "inline-block" }}>
        {"ı"}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "-0.02em",
            transform: "translateX(-50%)",
            width: "0.24em",
            height: "0.24em",
            borderRadius: "50%",
            background: "#2DBA9A",
          }}
        />
      </span>
      <span aria-hidden="true">x</span>
    </span>
  );
}

function ProjectTitle({ project }: { project: typeof PROJECTS[0] }) {
  if (project.id === "oddsix") return <OddsixWordmark />;
  return <>{project.title}</>;
}

/* Accent hexes are tuned for fills, dots, and blobs. Used as small text on the
   light theme they fall below WCAG AA contrast, so map each to a deeper shade
   of the same hue for TEXT only. Backgrounds, borders, and bars keep the bright
   accent. */
const ACCENT_TEXT: Record<string, string> = {
  "#06B6D4": "#0D6B86", // cyan (passes AA on white AND the case-study tinted bg)
  "#EA580C": "#C2410C", // orange
  "#F59E0B": "#B45309", // amber
  "#8B5CF6": "#7C3AED", // violet
  "#10B981": "#047857", // emerald
};
function accentText(hex: string): string {
  return ACCENT_TEXT[(hex || "").toUpperCase()] ?? hex;
}

/* Pick a preview image for a project card: explicit cardImage, else first real screenshot, else a video thumbnail */
function getCardImage(project: typeof PROJECTS[0]): string | undefined {
  const p = project as { cardImage?: string; video?: string };
  if (p.cardImage) return p.cardImage;
  const shot = project.screenshots.find((s) => (s as { img?: string }).img) as { img?: string } | undefined;
  if (shot?.img) return shot.img;
  if (p.video) return `https://i.ytimg.com/vi/${p.video}/hqdefault.jpg`;
  return undefined;
}

/* ===== Project showcase (2026-10-13 redesign) =====
   Projects are the centerpiece: Oddsix gets a full-width feature with its screenshot slideshow,
   four projects sit in a two-column grid of large readable cards, and the class model that grew
   into Oddsix closes the section as a slim row. Every card opens the existing case study, and the
   links inside a card stop propagation so "Live site" and "GitHub" never open the case study. */

type ShowcaseProject = typeof PROJECTS[0] & { github?: string; url?: string };

function ProjectLinks({ project, onOpen }: { project: ShowcaseProject; onOpen: () => void }) {
  const linkClass = "inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-lg border transition-colors duration-200";
  return (
    <div className="flex flex-wrap items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
      {project.url && project.url !== "#" && (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkClass}
           style={{ background: project.accent, color: "#fff", borderColor: project.accent }}>
          <ExternalLink size={14} aria-hidden="true" /> Live site
        </a>
      )}
      {project.github && project.github !== "#" && (
        <a href={project.github} target="_blank" rel="noopener noreferrer"
           className={`${linkClass} bg-white text-foreground border-border hover:border-foreground/30`}>
          <Github size={14} /> GitHub
        </a>
      )}
      <button type="button" onClick={onOpen}
              className={`${linkClass} bg-transparent border-transparent cursor-pointer`}
              style={{ color: accentText(project.accent) }}>
        Read more <ArrowUpRight size={14} aria-hidden="true" />
      </button>
    </div>
  );
}

function ProjectStats({ project, size = "md" }: { project: ShowcaseProject; size?: "md" | "lg" }) {
  if (!project.cardMetrics.length) return null;
  return (
    <dl className={`grid gap-4 ${size === "lg" ? "grid-cols-3" : "grid-cols-3"}`}>
      {project.cardMetrics.map((m, i) => (
        <div key={i} className="pl-3" style={{ borderLeft: `2px solid ${project.accent}` }}>
          <dd className={`${size === "lg" ? "text-2xl md:text-3xl" : "text-xl"} font-extrabold text-foreground tabular-nums leading-tight`}>{m.display}</dd>
          <dt className="text-xs text-muted-foreground mt-0.5">{m.label}</dt>
        </div>
      ))}
    </dl>
  );
}

/* Projects with no screenshot get a quiet visual built from their own content instead of an
   empty grey box: the agent workflow is drawn as its actual flow. */
function AgentFlowVisual({ accent }: { accent: string }) {
  const node = "rounded-lg bg-white border px-3 py-2 text-xs font-semibold text-foreground shadow-sm text-center";
  return (
    <div className="w-full h-full flex items-center justify-center p-6"
         style={{ background: `linear-gradient(135deg, ${accent}0d, ${accent}1f)` }}>
      <div className="grid grid-cols-[auto_auto_auto] items-center gap-x-3 gap-y-3 text-center">
        <div className={node} style={{ borderColor: `${accent}40` }}>Task</div>
        <div className="text-muted-foreground text-xs">routed to</div>
        <div className="flex flex-col gap-2">
          <div className={node} style={{ borderColor: `${accent}40` }}>Parallel agents</div>
          <div className={node} style={{ borderColor: `${accent}40` }}>Competing attempts</div>
        </div>
        <div />
        <div />
        <div className="text-muted-foreground text-xs">checked by</div>
        <div />
        <div />
        <div className={node} style={{ borderColor: accent, color: accentText(accent) }}>Independent reviewer</div>
      </div>
    </div>
  );
}

function ProjectVisual({ project, className = "" }: { project: ShowcaseProject; className?: string }) {
  const img = getCardImage(project);
  if (project.id === "agent-engineering") {
    return <div className={`overflow-hidden ${className}`}><AgentFlowVisual accent={project.accent} /></div>;
  }
  if (!img) return null;
  return (
    <div className={`overflow-hidden bg-[#eceff4] ${className}`}>
      <img src={img} alt={`${project.title} screenshot`} loading="lazy"
           className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-[1.02]" />
    </div>
  );
}

function FeaturedProject({ project, onOpen }: { project: ShowcaseProject; onOpen: () => void }) {
  const revealRef = useScrollReveal();
  return (
    <article ref={revealRef} className="scroll-reveal project-card project-featured"
             style={{ ["--accent" as string]: project.accent }}>
      <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-10 items-center">
        <div className="[&_.slideshow-container]:mb-0">
          <Slideshow screenshots={project.screenshots} accent={project.accent} />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-semibold mb-1.5" style={{ color: accentText(project.accent) }}>Featured project</p>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              <ProjectTitle project={project} />
            </h3>
            <p className="text-base text-muted-foreground mt-1">{project.subtitle}</p>
          </div>
          <p className="text-base text-foreground/80 leading-relaxed">{project.shortDescription}</p>
          <ProjectStats project={project} size="lg" />
          <div className="flex gap-1.5 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full border"
                    style={{ background: project.accentBg, color: accentText(project.accent), borderColor: `${project.accent}25` }}>
                {tag}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} onOpen={onOpen} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, onOpen, delay = 0 }: { project: ShowcaseProject; onOpen: () => void; delay?: number }) {
  const revealRef = useScrollReveal();
  return (
    <article
      ref={revealRef}
      className="scroll-reveal project-card group/card cursor-pointer flex flex-col"
      onClick={onOpen}
      onKeyDown={(e) => { if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onOpen(); } }}
      tabIndex={0}
      aria-label={`${project.title}: open the full write-up`}
      style={{ ["--accent" as string]: project.accent, transitionDelay: `${delay}ms` }}
    >
      <ProjectVisual project={project} className="aspect-[16/9] rounded-xl border border-border/60 mb-5" />
      <div className="flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground"><ProjectTitle project={project} /></h3>
          <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
        </div>
        <p className="text-[15px] text-foreground/80 leading-relaxed">{project.shortDescription}</p>
        <div className="mt-auto pt-3 flex flex-col gap-4">
          <ProjectStats project={project} />
          <ProjectLinks project={project} onOpen={onOpen} />
        </div>
      </div>
    </article>
  );
}

function ProjectStrip({ project, onOpen }: { project: ShowcaseProject; onOpen: () => void }) {
  const revealRef = useScrollReveal();
  return (
    <article ref={revealRef} className="scroll-reveal project-card group/card cursor-pointer"
             onClick={onOpen}
             onKeyDown={(e) => { if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onOpen(); } }}
             tabIndex={0} aria-label={`${project.title}: open the full write-up`}
             style={{ ["--accent" as string]: project.accent }}>
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-extrabold tracking-tight text-foreground"><ProjectTitle project={project} /></h3>
          <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          <p className="text-[15px] text-foreground/80 leading-relaxed">{project.shortDescription}</p>
        </div>
        <div className="flex flex-col gap-4">
          <ProjectStats project={project} />
          <ProjectLinks project={project} onOpen={onOpen} />
        </div>
      </div>
    </article>
  );
}

function ProjectShowcase({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  const get = (id: string) => PROJECTS.find((p) => p.id === id)! as ShowcaseProject;
  const grid = ["agent-engineering", "box-office", "chest-xray", "churn-model"];
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <FeaturedProject project={get("oddsix")} onOpen={() => onSelectProject("oddsix")} />
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {grid.map((id, i) => (
          <ProjectCard key={id} project={get(id)} onOpen={() => onSelectProject(id)} delay={(i % 2) * 120} />
        ))}
      </div>
      <ProjectStrip project={get("msba-nba")} onOpen={() => onSelectProject("msba-nba")} />
    </div>
  );
}

function CaseStudyMetric({ metric, accent }: { metric: typeof PROJECTS[0]["metrics"][0]; accent: string }) {
  if (!metric.label) return null;
  return (
    <div className="flex-1 py-5 md:py-6 text-center border-r border-border last:border-r-0">
      <div className="w-6 h-[3px] rounded-full mx-auto mb-2.5 opacity-70" aria-hidden="true" style={{ background: accent }} />
      <div className="text-2xl md:text-[26px] font-extrabold text-foreground tracking-tight tabular-nums">
        {metric.value.toLocaleString("en-US")}{metric.suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1 px-1 leading-snug">{metric.label}</div>
    </div>
  );
}

function StorySection({ section, index, isLast }: { section: { title: string; color: string; body: string; features?: { emoji: string; name: string; desc: string }[] }; index: number; isLast?: boolean }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`scroll-reveal ${isLast ? "mb-8 md:mb-10" : "mb-10 md:mb-12 pb-10 md:pb-12 border-b border-border/50"}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-5 md:h-6 rounded-full" style={{ background: section.color }} />
        <h3 className="text-lg md:text-xl font-bold text-foreground">{section.title}</h3>
      </div>

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

function VideoEmbed({ id }: { id: string }) {
  return (
    <div className="aspect-video w-full rounded-xl border border-border shadow-sm mb-6 overflow-hidden bg-black">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="Project video walkthrough"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

function Slideshow({ screenshots, accent }: { screenshots: { label: string; desc: string; img?: string }[]; accent: string }) {
  const [current, setCurrent] = useState(0);
  const hasImages = screenshots.some((s) => s.img);

  useEffect(() => {
    if (screenshots.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(id);
  }, [screenshots.length]);

  return (
    <div className="slideshow-container rounded-xl border border-border shadow-sm mb-6 overflow-hidden">
      {/* Slides */}
      <div className={`relative ${hasImages ? "aspect-[16/10]" : "h-40 md:h-56"}`}>
        {screenshots.map((shot, i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "translateX(0)" : i < current ? "translateX(-20px)" : "translateX(20px)",
              background: shot.img ? "#eceff4" : `linear-gradient(135deg, ${accent}08, ${accent}15, ${accent}08)`,
            }}
          >
            {shot.img ? (
              <>
                <img src={shot.img} alt={shot.label} loading="lazy" className="w-full h-full object-contain" />
                {/* Caption sits on a light scrim, not a dark one: every screenshot on this
                    site is a light-theme product shot, so white-on-black floated badly. */}
                <div className="absolute bottom-0 inset-x-0 px-4 pt-6 pb-2.5 bg-gradient-to-t from-white via-white/85 to-transparent">
                  <div className="text-xs font-semibold text-foreground">{shot.label}</div>
                  <div className="text-[10px] text-muted-foreground">{shot.desc}</div>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center" style={{ background: `${accent}15` }}>
                  <div className="w-6 h-6 rounded" style={{ background: `${accent}30` }} />
                </div>
                <div className="text-sm font-semibold text-foreground">{shot.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{shot.desc}</div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      {screenshots.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-3 bg-white border-t border-border">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to screenshot ${i + 1} of ${screenshots.length}`}
              aria-current={i === current}
              className="transition-all duration-300 rounded-full cursor-pointer"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background: i === current ? accent : "#e2e8f0",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CaseStudy({ project, onBack, sectionRef, onSelectProject }: { project: typeof PROJECTS[0]; onBack: () => void; sectionRef?: React.RefObject<HTMLElement | null>; onSelectProject: (id: string) => void }) {
  const backRef = useRef<HTMLButtonElement>(null);
  // On open: jump to the top of the case study and move keyboard focus into it
  // (otherwise focus is stranded on the now-hidden project card).
  useEffect(() => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    }
    backRef.current?.focus();
  }, []);
  // Escape returns to the projects list, matching the Back button.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onBack(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onBack]);

  const heroRef = useScrollReveal();
  const metricsRef = useScrollReveal();
  const visibleMetrics = project.metrics.filter((m) => m.label);
  const video = (project as { video?: string }).video;

  return (
    <div className="case-study-enter">
      {/* Back bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2">
          <button
            ref={backRef}
            onClick={onBack}
            aria-label="Back to projects list"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span className="font-medium">Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Hero */}
      <div
        ref={heroRef}
        className="scroll-reveal relative overflow-hidden border-b border-border"
        style={{ background: "linear-gradient(135deg, #e8ebf0, #ecfeff, #f0f9ff)" }}
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${project.accentBg}, transparent 70%)`, filter: "blur(60px)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 pt-12 md:pt-16 pb-8 md:pb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold tracking-[2px] uppercase" style={{ color: accentText(project.accent) }}>
              {project.subtitle}
            </span>
            {(project as { status?: string }).status && (
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 whitespace-nowrap"
                style={{ background: "rgba(245,158,11,0.14)", color: "#B45309" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F59E0B" }} />
                {(project as { status?: string }).status}
              </span>
            )}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-1">
            <ProjectTitle project={project} />
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            {project.caseStudy.hook}
          </p>

          {video ? (
            <VideoEmbed id={video} />
          ) : project.screenshots.length > 0 ? (
            <Slideshow screenshots={project.screenshots} accent={project.accent} />
          ) : null}

          <div className="flex gap-3">
            {video && (
              <a
                href={`https://youtu.be/${video}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ background: project.accent }}
              >
                Watch on YouTube <ArrowUpRight size={14} />
              </a>
            )}
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
              <CaseStudyMetric key={i} metric={m} accent={project.accent} />
            ))}
          </div>
        </div>
      )}

      {/* Story sections */}
      <div className="max-w-2xl mx-auto px-6 py-10 md:py-14">
        {project.caseStudy.sections.map((section, i) => (
          <StorySection key={i} section={section} index={i} isLast={i === project.caseStudy.sections.length - 1} />
        ))}

        {/* The old "more screenshots coming soon" filler block lived here. Removed 2026-10-06:
            it fired on every project without a video (including ones that already had a five-shot
            slideshow above it) and the only thing it told a recruiter was that something was
            missing. */}

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

        {/* Next Project */}
        {(() => {
          const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
          const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
          return (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Next Project</div>
              <button
                onClick={() => onSelectProject(nextProject.id)}
                className="w-full text-left bg-white border border-border rounded-xl p-4 cursor-pointer hover:shadow-md hover:border-primary/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  {(() => {
                    const thumb = getCardImage(nextProject);
                    return thumb ? (
                      <div className="hidden sm:block w-28 h-20 shrink-0 rounded-lg overflow-hidden border border-border/60 bg-secondary">
                        <img src={thumb} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover object-top" />
                      </div>
                    ) : null;
                  })()}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full shrink-0" aria-hidden="true" style={{ background: nextProject.accent }} />
                      <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        <ProjectTitle project={nextProject} />
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{nextProject.subtitle}</div>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

function TechIcon({ skill }: { skill: TechSkill }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-white border border-border px-3 py-2 text-sm font-medium text-foreground" title={skill.name}>
      {skill.icon ? (
        <img src={skill.icon} alt="" aria-hidden="true" className="w-4 h-4 object-contain" loading="lazy" />
      ) : (
        <skill.LucideIcon size={16} style={{ color: skill.iconColor }} />
      )}
      {skill.shortName ?? skill.name}
    </span>
  );
}

/* `featured` marks the handful of skills Spencer leads with. It was in the data but
   unused, so every pill looked identical; featured pills now carry a faint cyan wash
   and a slightly stronger label. */
function BusinessSkillPill({ skill }: { skill: { name: string; featured?: boolean } }) {
  return (
    <div
      className={`skill-badge inline-flex items-center gap-2 rounded-full px-3 py-1.5 cursor-default text-sm border transition-all duration-200 hover:border-primary/30 hover:shadow-sm ${
        skill.featured
          ? "font-semibold text-foreground border-primary/25"
          : "font-medium text-foreground bg-white border-border"
      }`}
      style={skill.featured ? { background: "rgba(6,182,212,0.07)" } : undefined}
    >
      <div className={`w-1.5 h-1.5 rounded-full shrink-0 bg-primary ${skill.featured ? "" : "opacity-60"}`} />
      {skill.name}
    </div>
  );
}

const SKILL_CATEGORIES = [
  { name: "Languages", color: "#06B6D4" },
  { name: "AI & Automation", color: "#06B6D4" },
  { name: "Machine Learning", color: "#06B6D4" },
  { name: "Visualization", color: "#06B6D4" },
  { name: "Data", color: "#06B6D4" },
  { name: "Tools & Platforms", color: "#06B6D4" },
];

function SkillCategory({ category }: { category: { name: string; color: string }; delay?: number }) {
  const skills = TECH_SKILLS.filter((s) => s.category === category.name);
  if (skills.length === 0) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-3">{category.name}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TechIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

/* Full-viewport experience slide — full-screen bg image + glass card */

/* Experience timeline with scroll-based progress */
/* Compact horizontal timeline — brief overview, ~half viewport */

/* ===== Experience & education (2026-10-13 redesign) =====
   Replaces the six full-screen photo slides (about eight screens of scrolling) with a compact
   timeline: each chapter keeps its real photo as a banner, its logo, the summary and the key
   points, so the whole history reads in about two screens. High school stays, by request. */
function ExperienceCard({ entry, index }: { entry: typeof EXPERIENCE[0]; index: number }) {
  const revealRef = useScrollReveal();
  const typeLabel = entry.type === "education" ? "Education" : entry.type === "work" ? "Work" : "Projects";
  return (
    <li ref={revealRef} className="scroll-reveal relative md:grid md:grid-cols-[150px_1fr] md:gap-8"
        style={{ transitionDelay: `${(index % 2) * 80}ms` }}>
      {/* Rail: period on desktop, a dot on the line */}
      <div className="hidden md:flex flex-col items-end pt-6 text-right">
        <span className="text-sm font-semibold text-foreground tabular-nums">{entry.period}</span>
        <span className="text-xs text-muted-foreground mt-1">{entry.location}</span>
      </div>
      <span aria-hidden="true" className="hidden md:block absolute left-[150px] top-7 -translate-x-[calc(50%-16px)] w-3 h-3 rounded-full border-2 border-white shadow"
            style={{ background: entry.color }} />
      <article className="project-card !p-0 overflow-hidden" style={{ ["--accent" as string]: entry.color }}>
        <div className="relative h-24 md:h-28 overflow-hidden">
          <img src={entry.bgImage} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.15), rgba(15,23,42,0.55))" }} />
          <div className="absolute left-5 bottom-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center overflow-hidden">
              {entry.logo ? (
                <img src={entry.logo} alt={`${entry.org} logo`} className="w-7 h-7 object-contain" loading="lazy" />
              ) : (
                <Code2 size={18} className="text-foreground" />
              )}
            </div>
            <div className="text-white">
              <div className="text-base md:text-lg font-bold leading-tight">{entry.org}</div>
              <div className="text-xs opacity-85 md:hidden">{entry.period}</div>
            </div>
          </div>
          <span className="absolute right-4 top-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 text-foreground">{typeLabel}</span>
        </div>
        <div className="p-5 md:p-6">
          <h3 className="text-lg font-bold text-foreground">{entry.title}</h3>
          <p className="text-[15px] text-foreground/80 leading-relaxed mt-1.5">{entry.description}</p>
          {entry.details.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {entry.details.slice(0, 3).map((d, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: entry.color }} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          )}
          {entry.highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {entry.highlights.map((h) => (
                <span key={h} className="text-xs px-2.5 py-1 rounded-full border border-border bg-white text-foreground/80">{h}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    </li>
  );
}

function ExperienceSection({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section ref={sectionRef} aria-label="Experience" className="py-24 md:py-28" style={{ background: "#e8ebf0" }}>
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">Experience & Education</h2>
          <Separator className="w-12 bg-primary h-0.5 mb-4" />
          <p className="text-muted-foreground">Work, school and independent projects, most recent first.</p>
        </ScrollReveal>
        <ol className="relative flex flex-col gap-6 md:before:content-[''] md:before:absolute md:before:left-[166px] md:before:top-2 md:before:bottom-2 md:before:w-px md:before:bg-border">
          {EXPERIENCE.map((entry, i) => (
            <ExperienceCard key={entry.org + entry.title} entry={entry} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ================================================================
   AI SYSTEM SECTION
   ================================================================ */

type SystemNodeData = { label: string; sub: string; color: string; icon: React.ReactNode; detail: string };

const COUNCIL_MODELS = [
  { name: "Claude", role: "Architecture, code & reasoning", color: "#D97757", icon: "https://api.iconify.design/simple-icons:anthropic.svg" },
  { name: "GPT-5 / Codex", role: "Code review & second opinions", color: "#19C37D", icon: "https://api.iconify.design/simple-icons:openai.svg" },
  { name: "Gemini", role: "Research & fact-grounding", color: "#4796E3", icon: "https://api.iconify.design/simple-icons:googlegemini.svg" },
  { name: "Copilot", role: "Pattern recall & structure", color: "#C9D1D9", icon: "https://api.iconify.design/simple-icons:githubcopilot.svg" },
  { name: "Ollama", role: "Free local / offline tier", color: "#9CA3AF", icon: "https://api.iconify.design/simple-icons:ollama.svg" },
];


const COUNCIL_PILLARS = [
  { icon: ShieldCheck, color: "#EF4444", title: "Independent review", body: "One model is always assigned to challenge the result and look for what breaks, so problems surface before anything is accepted." },
  { icon: BrainCircuit, color: "#8B5CF6", title: "Errors become rules", body: "When something goes wrong, it is written down as a rule that is checked automatically on later work." },
  { icon: Activity, color: "#10B981", title: "Outcomes are tracked", body: "Recommendations are logged against what actually happened, so I know which advice held up." },
];

function AISystemSection({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const ModelGlyph = ({ url, color }: { url: string; color: string }) => (
    <span
      aria-hidden="true"
      style={{
        display: "block",
        width: 22,
        height: 22,
        backgroundColor: color,
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );

  return (
    <section ref={sectionRef} aria-label="AI System" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #e8ebf0 0%, #0f172a 6%, #1e293b 50%, #0f172a 94%, #e3e7ed 100%)" }}>
      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6,182,212,0.04) 1px, transparent 0)", backgroundSize: "48px 48px" }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)", filter: "blur(120px)" }} />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)", filter: "blur(120px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-5">
            How I work with AI
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            I use five AI models together on real work. Each has a defined job, an independent reviewer checks results before they are accepted, and recurring errors become enforced rules. Every change is reviewed by me before it ships.
          </p>
        </ScrollReveal>

        {/* ===== THE COUNCIL ===== */}
        <ScrollReveal className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">The model council</h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              Important decisions go to all five models at once, each chosen for what it does best.
            </p>
          </div>

          {/* Hub */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-xl" aria-hidden="true" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.35), transparent 70%)" }} />
              <div className="relative flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.06] backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-cyan-400/15 flex items-center justify-center">
                  <Network size={18} className="text-cyan-300" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white leading-tight">A hard decision</div>
                  <div className="text-[10px] text-cyan-300/70 leading-tight">dispatched to the council</div>
                </div>
              </div>
            </div>
            {/* connector + parallel label */}
            <div className="flex justify-center my-3" aria-hidden="true"><div style={{ width: 1, height: 26, background: "linear-gradient(rgba(6,182,212,0.4), rgba(255,255,255,0.08))" }} /></div>
            <div className="text-[10px] uppercase tracking-[2px] text-slate-500 mb-5">consulted in parallel</div>
          </div>

          {/* 5 model chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {COUNCIL_MODELS.map((m) => (
              <div
                key={m.name}
                className="group flex flex-col items-center text-center gap-2.5 px-3 py-5 rounded-2xl border transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = m.color + "55"; e.currentTarget.style.background = m.color + "0d"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: m.color + "1a" }}>
                  <ModelGlyph url={m.icon} color={m.color} />
                </div>
                <div>
                  <div className="text-[13px] font-bold leading-tight" style={{ color: m.color }}>{m.name}</div>
                  <div className="text-[10px] text-slate-500 leading-snug mt-1">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ===== PILLARS ===== */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COUNCIL_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-200 hover:bg-white/[0.04]" style={{ borderTop: `2px solid ${p.color}55` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: p.color + "1a" }}>
                    <Icon size={20} style={{ color: p.color }} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{p.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="text-center mt-12">
          <a href="https://github.com/SpencerGoss/agent-engineering" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-sm font-semibold text-white hover:bg-white/5 transition-colors">
            <Github size={16} /> See the patterns and skills on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
      className="magnetic-btn relative overflow-hidden flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer group"
      title={label}
      aria-label={label}
    >
      <div className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors">
        {icon}
      </div>
      {ripple && (
        <span
          className="ripple-effect absolute w-5 h-5 rounded-full bg-primary/20 pointer-events-none"
          style={{ top: ripple.y, left: ripple.x }}
        />
      )}
    </a>
  );
}

/* ================================================================
   MAIN APP
   ================================================================ */

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [navShrunk, setNavShrunk] = useState(false);

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    aisystem: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollH > 0 ? (window.scrollY / scrollH) * 100 : 0);
      setNavShrunk(window.scrollY > 50);

      // Check if we're in the hero zone (top of page)
      if (window.scrollY < window.innerHeight) {
        setActiveSection("hero");
      } else {
        // Find which section is currently in view (first match wins)
        for (const [key, ref] of Object.entries(sectionRefs)) {
          if (key === "hero") continue; // hero handled above
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(key);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (key: string) => {
    if (key === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      sectionRefs[key as keyof typeof sectionRefs]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false);
  };

  const aboutReveal = useScrollReveal();
  const skillsReveal = useScrollReveal();
  const skillsGridReveal = useScrollReveal();

  // Hero scroll expansion effect
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const mediaCardRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const aboutRevealRef = useRef<HTMLDivElement>(null);

  // Fade the scroll cue out as the user scrolls past the hero
  useEffect(() => {
    const handleHeroScroll = () => {
      if (scrollCueRef.current) {
        const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.4));
        scrollCueRef.current.style.opacity = `${fade}`;
      }
    };
    window.addEventListener("scroll", handleHeroScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleHeroScroll);
  }, []);

  return (
    <>
      {/* Skip to content (a11y) */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>


      {/* Navigation — floating pill */}
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          navShrunk ? "top-4 pointer-events-none" : "top-0 pointer-events-none"
        }`}
      >
        {/* Floating pill container */}
        <div
          className={`pointer-events-auto transition-all duration-500 ${
            navShrunk
              ? "nav-pill px-2 py-1.5 rounded-full shadow-lg"
              : "w-full px-6 py-4"
          }`}
          style={navShrunk ? {} : { background: "transparent" }}
        >
          <div className={`flex items-center ${navShrunk ? "gap-1" : "max-w-6xl mx-auto justify-between"}`}>
            <button
              onClick={() => scrollTo("hero")}
              className={`font-bold tracking-tight hover:text-primary transition-colors cursor-pointer text-foreground ${
                navShrunk ? "text-sm px-3" : "text-lg"
              }`}
            >
              Spencer Goss
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  aria-current={activeSection === key ? "true" : undefined}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === key
                      ? "text-[#0D6B86] bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 cursor-pointer text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && navShrunk && (
          <div id="mobile-menu" role="menu" className="pointer-events-auto absolute top-16 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-lg border border-border/50 shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map(({ key, label }) => (
                <button
                  key={key}
                  role="menuitem"
                  onClick={() => scrollTo(key)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ===== HERO WITH SCROLL EXPANSION ===== */}
      <main id="main-content">
      <section
        ref={heroRef}
        aria-label="Introduction"
        className="relative overflow-hidden"
        style={{ background: "#e8ebf0" }}
      >
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 md:pt-0 md:pb-0">
            {/* Ambient background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <div className="hero-blob hero-blob-1" />
              <div className="hero-blob hero-blob-2" />
            </div>

            {/* Hero split layout */}
            <div ref={heroTextRef} className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-all duration-100" style={{ willChange: "opacity, transform" }}>
              {/* Left — text content */}
              <div data-hero="text" className="flex-1 text-center md:text-left transition-none" style={{ willChange: "transform, opacity" }}>
                {/* Status badge */}
                <div className="split-reveal flex items-center justify-center md:justify-start gap-2 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                    <span className="text-xs font-semibold text-muted-foreground">Open to opportunities</span>
                  </div>
                </div>

                {/* Name */}
                <h1 className="split-reveal split-reveal-delay-1 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-none mb-4">
                  Spencer Goss
                </h1>

                {/* Subtitle pills */}
                <div className="split-reveal split-reveal-delay-2 flex items-center justify-center md:justify-start gap-3 mb-6 flex-wrap">
                  <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">M.S. Business Analytics</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">AI Concentration</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">University of Louisville</span>
                </div>

                {/* Tagline */}
                <p className="split-reveal split-reveal-delay-3 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
                  I build data products, predictive models and AI-assisted workflows, from the data pipeline through to the finished app.
                </p>

                {/* CTA Buttons */}
                <div className="split-reveal flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4" style={{ animationDelay: "0.55s" }}>
                  <Button
                    size="lg"
                    onClick={() => scrollTo("projects")}
                    className="font-semibold tracking-tight cursor-pointer border-0"
                    style={{ background: "#06B6D4", color: "#e8ebf0" }}
                  >
                    View Projects
                  </Button>
                  <a
                    href="/Spencer_Goss_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-6 rounded-md border border-foreground/20 bg-white/60 text-sm font-semibold tracking-tight text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <Download size={16} aria-hidden="true" /> Resume
                  </a>
                  <div className="flex items-center gap-1 ml-1">
                    <a href="https://linkedin.com/in/spencergoss1234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                       className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/70 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/SpencerGoss" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                       className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/70 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — photo */}
              <div data-hero="photo" className="split-reveal flex-shrink-0 relative transition-none" style={{ animationDelay: "0.7s", willChange: "transform, opacity" }}>
                {/* Decorative blob behind photo */}
                <div className="absolute -inset-6 rounded-full opacity-30" aria-hidden="true" style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)", filter: "blur(40px)" }} />
                <div
                  ref={mediaCardRef}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border border-white/50"
                >
                  {/* Headshot. Swap the src for a casual photo later if desired.
                      Circular crop + zoomed in on the face (transform scale) so the
                      blazer/shoulders crop out. Tune scale/origin to reframe. */}
                  <img
                    src="/images/spencer-headshot.jpg"
                    alt="Spencer Goss"
                    width={800}
                    height={800}
                    loading="eager"
                    className="w-full h-full object-cover object-center select-none"
                    style={{ transform: "scale(1.4)", transformOrigin: "50% 34%" }}
                    draggable={false}
                  />
                </div>
              </div>
            </div>



        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section ref={sectionRefs.projects} aria-label="Featured Projects" className="py-24 md:py-32" style={{ background: "#e8ebf0" }}>
        {selectedProject ? (
          <CaseStudy
            project={PROJECTS.find((p) => p.id === selectedProject)!}
            sectionRef={sectionRefs.projects}
            onSelectProject={(id) => {
              setSelectedProject(id);
              setTimeout(() => {
                sectionRefs.projects.current?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
              }, 0);
            }}
            onBack={() => {
              setSelectedProject(null);
              setTimeout(() => {
                sectionRefs.projects.current?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
              }, 0);
            }}
          />
        ) : (
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
                Featured Projects
              </h2>
              <Separator className="w-12 bg-primary h-0.5 mb-4" />
              <p className="text-muted-foreground">
                Things I have designed, built and shipped. Open any project for the full write-up.
              </p>
            </ScrollReveal>
            <ProjectShowcase onSelectProject={setSelectedProject} />
          </div>
        )}
      </section>

      {/* ===== ABOUT ===== */}
      <section ref={sectionRefs.about} aria-label="About" className="relative py-24 md:py-28" style={{ background: "#e8ebf0" }}>
        <ScrollReveal className="max-w-6xl mx-auto w-full px-6">
          <div className="flex flex-col lg:flex-row items-start">
            {/* Left — headline + statement */}
            <div className="lg:w-2/5 lg:pr-12 mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
                About Me
              </h2>
              <Separator className="w-12 bg-primary h-0.5 mb-8" />
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-foreground/80 leading-snug mb-8">
                Turning raw data into<br />
                <span style={{ color: accentText("#06B6D4") }}>real-world solutions</span>
              </p>

              {/* Quick facts */}
              <div className="flex flex-col gap-3">
                {[
                  { Icon: MapPin, value: "Louisville, KY · open to relocation and remote" },
                  { Icon: GraduationCap, value: "M.S. Business Analytics (AI), 3.94 GPA" },
                  { Icon: Briefcase, value: "Open to AI, analytics and finance roles" },
                ].map((fact, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(6,182,212,0.1)" }}>
                      <fact.Icon size={15} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px self-stretch" style={{ background: "linear-gradient(to bottom, transparent, #cbd5e1, transparent)" }} />

            {/* Right — bio + details */}
            <div className="lg:w-3/5 lg:pl-12">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                I finished my M.S. in Business Analytics, with a concentration in AI, at the University of Louisville in August 2026. Before that I spent a year in accounts payable at Churchill Downs, checking invoice and vendor data across more than ten properties, and three years in shipping and receiving at Terex. Outside of work I build: a live sports data platform, AI agent workflows, data pipelines and predictive models. The work I enjoy most is taking a manual, error-prone process and making it reliable and automatic.
              </p>

              {/* Where I fit: one line per kind of team, each backed by real work */}
              <h3 className="text-base font-semibold text-foreground mb-4">Where I fit</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "AI and automation", value: "Multi-agent AI workflows, Claude and Microsoft Copilot in daily use, and a Copilot agent that triages invoices.", color: "#8B5CF6" },
                  { label: "Data and analytics", value: "SQL, Python, Power BI and Tableau, from data pipelines through to dashboards and live apps.", color: "#06B6D4" },
                  { label: "Finance and operations", value: "A year validating invoice and vendor data in SAP and JD Edwards, plus a B.B.A. in Finance.", color: "#10B981" },
                ].map((item, i) => (
                  <div key={i} className="pl-4" style={{ borderLeft: `2px solid ${item.color}` }}>
                    <div className="text-sm font-semibold mb-1" style={{ color: accentText(item.color) }}>{item.label}</div>
                    <div className="text-sm text-foreground/80 leading-relaxed">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== AI SYSTEM ===== */}
      <AISystemSection sectionRef={sectionRefs.aisystem} />

      {/* ===== EXPERIENCE ===== */}
      <ExperienceSection sectionRef={sectionRefs.experience} />

      {/* ===== SKILLS ===== */}
      <section ref={sectionRefs.skills} aria-label="Skills" className="section-alt py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={skillsReveal} className="scroll-reveal mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
              Skills
            </h2>
            <Separator className="w-12 bg-primary h-0.5 mb-6" />
            <p className="text-muted-foreground">
              Tools I use and skills I bring to the table.
            </p>
          </div>

          {/* Tech skills by category */}
          <div ref={skillsGridReveal} className="scroll-reveal grid md:grid-cols-2 gap-x-10 gap-y-8">
            {SKILL_CATEGORIES.map((cat) => (
              <SkillCategory key={cat.name} category={cat} />
            ))}
          </div>

          {/* Business & Professional skills, grouped by area */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <h3 className="text-lg font-semibold text-foreground mb-6">Business and professional skills</h3>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
              {BUSINESS_SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <div className="text-sm font-medium text-muted-foreground mb-2.5">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <BusinessSkillPill key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        ref={sectionRefs.contact}
        aria-label="Contact"
        className="relative flex items-center py-24 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #e3e7ed 0%, #e8ebf0 40%, #e8ebf0 100%)",
        }}
      >
        {/* Decorative ambient blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)", filter: "blur(80px)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.04), transparent 70%)", filter: "blur(80px)" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-3">
              Let's Connect
            </h2>
            <Separator className="w-12 bg-primary h-0.5 mx-auto mb-6" />
            <p className="text-muted-foreground mb-12 text-lg max-w-md mx-auto">
              Open to AI, analytics and finance roles, on site or remote. The fastest way to reach me is email or LinkedIn.
            </p>
          </ScrollReveal>

          {/* Resume download — prominent */}
          <ScrollReveal className="mb-12">
            <a
              href="/Spencer_Goss_Resume.pdf"
              download
              aria-label="Download Spencer Goss resume (PDF)"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 shadow-lg shadow-primary/10"
              style={{ background: "linear-gradient(135deg, #06B6D4, #0891B2)" }}
            >
              <Download size={20} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <p className="text-xs text-muted-foreground mt-3">PDF • Updated October 2026</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex items-center justify-center gap-8">
              {[
                { href: "https://linkedin.com/in/spencergoss1234", icon: <Linkedin size={24} />, label: "LinkedIn" },
                { href: "https://github.com/SpencerGoss", icon: <Github size={24} />, label: "GitHub" },
                { href: "mailto:spencer.goss@outlook.com", icon: <Mail size={24} />, label: "Email" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2.5">
                  <ContactButton href={item.href} icon={item.icon} label={item.label} />
                  <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>


        </div>
      </section>
      </main>
    </>
  );
}
