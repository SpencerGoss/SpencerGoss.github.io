import { useState, useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
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
  BarChart3,
  FlaskConical,
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
    subtitle: "Multi-Sport Analytics Platform",
    accent: "#06B6D4",
    accentBg: "rgba(6,182,212,0.08)",
    featured: true,
    cardImage: "/images/projects/oddsix-card.png",
    shortDescription: "A live multi-sport analytics platform covering the NBA, MLB, NFL, soccer, hockey and college: player stats and comparisons, historical data, league leaders, plus ML game predictions and a betting layer, all updated daily.",
    url: "https://oddsix.app",
    github: "https://github.com/SpencerGoss/nba-analytics-project",
    tags: ["Python", "scikit-learn", "LightGBM", "Sports Analytics", "Daily Pipeline", "Multi-Sport"],
    screenshots: [
      { label: "Today across all sports", desc: "Daily slate, top performers, and tonight's edge", img: "/images/projects/oddsix-home.png" },
      { label: "Betting hub", desc: "Model read vs. market line, point edges, and Kelly sizing", img: "/images/projects/oddsix-betting.png" },
      { label: "Player analytics", desc: "Per-game averages, shooting splits, and recent form", img: "/images/projects/oddsix-player.png" },
    ],
    metrics: [
      { value: 72, suffix: "%", label: "Win Rate · All-Time" },
      { value: 290, suffix: "+", label: "Picks Graded" },
      { value: 6, suffix: "", label: "Sports Covered" },
      { value: 210, suffix: "-80", label: "Won-Lost" },
    ],
    cardMetrics: [
      { display: "72%", label: "Win Rate" },
      { display: "0.74", label: "Model AUC" },
      { display: "6", label: "Sports" },
    ],
    caseStudy: {
      hook: "A live multi-sport analytics platform covering six sports: player stats and comparisons, historical data and league leaders, plus daily ML game predictions and a betting layer. Everything updates daily, and the prediction track record grades itself in public at 72% over 290 picks.",
      sections: [
        {
          title: "Why I Built It",
          color: "#06B6D4",
          body: "I built Oddsix as a personal project, driven by a deep passion for the NBA. I've watched basketball for years and wanted to build something that combined that love for the game with the data science and machine learning skills I've been developing. It started simply, as a place to dig into player stats and compare players across eras, and grew into something bigger: a real ML pipeline, game-outcome predictions, and a tool that explains every recommendation in plain English, so anyone can see why a pick might have value. It's not perfect, but it's real. Real data, real models, real predictions. And it's something I actually use.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "Oddsix is a full sports-analytics hub covering the NBA, MLB, NFL, soccer, hockey and college. It pulls together player stats and cross-era comparisons, team standings and league leaders, historical data and interactive Elo timelines, and on top of all that, daily ML game predictions with a betting layer. Each sport runs its own machine-learning model, trained only on information known before tip-off and calibrated so a 60% really means 60%. The NBA model alone is a three-model stacked ensemble over 490 engineered features (Elo ratings, clutch performance, lineup quality, opponent-adjusted stats) and lands around 0.74 AUC on games it hasn't seen. The betting layer turns those probabilities into real edges: it compares the model's read to the market line, flags value, and sizes the stake with the Kelly criterion. A daily pipeline pulls fresh data, regenerates everything, grades yesterday's results, and updates the site on its own.",
          features: [
            { emoji: "\u{1F3C0}", name: "Every Sport, One Place", desc: "Player stats, standings, history, and predictions across NBA, MLB, NFL, soccer, NHL & college" },
            { emoji: "\u{1F4CA}", name: "Player & Team Analytics", desc: "Per-game stats, cross-era player comparisons, league leaders, and Elo timelines" },
            { emoji: "\u{1F3AF}", name: "ML Predictions + Betting", desc: "Calibrated pre-tip-off models, market-edge detection, and Kelly stake sizing" },
            { emoji: "\u{1F4C8}", name: "Public Track Record", desc: "Every pick graded daily, recent and lifetime, every loss included" },
          ],
        },
        {
          title: "The Result",
          color: "#10B981",
          body: "Oddsix is live at oddsix.app, posting picks every day and grading itself in the open: 72% accuracy over 290 completed picks (210-80), with NBA running at 73% over the last 30 days. The track record updates on its own and shows every loss, because a prediction system you can't check isn't worth trusting.",
        },
      ],
    },
  },
  {
    id: "msba-nba",
    title: "From Box Scores to Predictions",
    subtitle: "NBA Prediction Model · MSBA 645",
    accent: "#EA580C",
    accentBg: "rgba(234,88,12,0.08)",
    featured: false,
    video: "QSooLoE32zk",
    shortDescription: "The honest NBA prediction model behind Oddsix, and the data-leakage trap I had to escape. Includes a recorded walkthrough.",
    url: "#",
    github: "#",
    tags: ["Python", "LightGBM", "scikit-learn", "K-Means", "NBA Stats API"],
    screenshots: [],
    metrics: [
      { value: 10500, suffix: "+", label: "Games Analyzed" },
      { value: 5, suffix: "", label: "NBA Seasons" },
      { value: 26, suffix: "", label: "Pre-Tipoff Features" },
      { value: 4, suffix: "", label: "Play-Style Clusters" },
    ],
    cardMetrics: [
      { display: "10.5K+", label: "Games" },
      { display: "26", label: "Features" },
      { display: "4", label: "Clusters" },
    ],
    caseStudy: {
      hook: "An honest NBA win-prediction model, and the data-leakage trap I had to escape to build it. This MSBA 645 final is the predictive-modeling base layer that later grew into Oddsix.",
      sections: [
        {
          title: "The Business Problem",
          color: "#06B6D4",
          body: "Game prediction sits at the center of a multi-billion-dollar sports analytics industry. Teams use it for prep, broadcasters build storylines around it, and bettors are always chasing an edge. For my MSBA 645 final, I set out to build a genuinely honest NBA win-prediction model on every game from the last five seasons: about 10,500 games across 30 teams, pulled straight from the NBA Stats API. Each row is one team's performance in one game, joined to its opponent and labeled with the outcome.",
        },
        {
          title: "Too Good to Be True",
          color: "#8B5CF6",
          body: "My first attempt looked great: an 80/20 split with Logistic Regression and LightGBM, both landing around 85% accuracy and a 0.93 ROC-AUC. Then I caught the flaw. The features I was leaning on (field-goal %, rebounds, turnovers) only exist after a game is played. I wasn't predicting games, I was describing them. It's like predicting a race from each runner's finishing time: of course it works, but you've already seen the answer.",
        },
        {
          title: "Making It Honest",
          color: "#10B981",
          body: "I rebuilt the model with walk-forward validation (train on past seasons, test on the most recent, never train on the future) and engineered 26 features that are all knowable before tip-off: last-10-game rolling form, home/away win-rate splits, season-to-date averages, and team-vs-opponent matchup differentials. Accuracy dropped, and that drop is the point: the model was finally being honest. I then ran K-Means clustering to group teams by play style (Elite Efficiency, Pace and Pressure, Rebuilding, Middle of the Pack), and it even caught the Rockets' real franchise transformation across seasons. Folding those style clusters back into the model added a small but real lift of about 1.3 points of accuracy.",
        },
        {
          title: "What It Taught Me",
          color: "#EA580C",
          body: "The hardest part of analytics isn't running models, it's making sure they're solving the problem you think they are. High accuracy on a hard problem is a red flag for leakage. Validation has to mirror real deployment, which means test sets from the future. Simpler models often win (logistic regression beat LightGBM here). And unsupervised work can feed supervised work. This project is the foundation Oddsix was built on, the same honest, pre-tip-off approach scaled into a full production platform.",
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
    shortDescription: "Async stock and crypto trading: 21 fused signals, a 5-stage AI agent pipeline, and risk controls that can't be overridden.",
    url: "#",
    github: "#",
    tags: ["Python", "asyncio", "FastAPI", "LightGBM", "Pydantic v2", "React", "SQLAlchemy"],
    screenshots: [
      { label: "Signal Dashboard", desc: "21 signals fused in real-time" },
      { label: "Risk Monitor", desc: "Circuit breakers & drawdown tracking" },
      { label: "Agent Pipeline", desc: "5-stage AI trade evaluation" },
    ],
    metrics: [
      { value: 21, suffix: "", label: "Signals Fused" },
      { value: 5, suffix: "-Stage", label: "AI Agent Pipeline" },
      { value: 4, suffix: "", label: "Risk-Control Layers" },
      { value: 95, suffix: "%", label: "Test Coverage" },
    ],
    cardMetrics: [
      { display: "21", label: "Signals" },
      { display: "5-stage", label: "AI Pipeline" },
      { display: "95%", label: "Coverage" },
    ],
    caseStudy: {
      hook: "A production-grade automated trading system that fuses 21 signal types through an AI agent pipeline, with immutable circuit breakers and real-time risk monitoring.",
      sections: [
        {
          title: "Why I Built It",
          color: "#06B6D4",
          body: "I wanted to find out if I could actually build something with AI that makes real money in live markets, not a demo, a real system. Markets are about as hard and unforgiving a problem as you can pick, so it was the best way I could think of to test my machine learning and engineering skills against something with real stakes and a clear scoreboard. That meant building it properly: multiple signal sources, risk controls that can't be overridden, and enough test coverage to actually trust it.",
        },
        {
          title: "What I Built",
          color: "#8B5CF6",
          body: "A fully async Python trading system that trades stocks (via Alpaca) and crypto (via Kraken). 21 signal generators (technical indicators, ML predictions with LightGBM, FinBERT sentiment analysis, SEC insider filings, institutional 13F flows, and macro regime detection from FRED data) are fused into a single confidence score. A 5-stage AI agent pipeline (Analyst, Risk Manager, Executor, Monitor, Researcher) evaluates every trade using Claude and Ollama with a hard $10/month LLM budget cap. Four-layer circuit breakers (per-trade, daily, weekly, kill switch) with immutable thresholds protect against catastrophic loss. The kill switch is permanent and cannot be overridden at runtime.",
        },
        {
          title: "The Result",
          color: "#10B981",
          body: "A production-grade system trading stocks through Alpaca and crypto through Kraken, tested to 95% coverage. It has a real-time React and FastAPI dashboard for monitoring, Pushover mobile alerts on every circuit-breaker trip, HMAC-signed audit logs, and tax compliance with wash-sale detection. Everything degrades gracefully: TimescaleDB, Redis, and push notifications are all optional, and the system falls back to in-memory operation.",
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
    video: "mFgFajpfPD8",
    shortDescription: "An end-to-end film analytics project: an ETL pipeline (TMDB API to a 3NF PostgreSQL database) powering a live interactive film explorer built with Dash. Includes a recorded walkthrough.",
    url: "https://box-office-vs-ratings.onrender.com",
    github: "https://github.com/SpencerGoss/box-office-vs-ratings",
    tags: ["Python", "pandas", "PostgreSQL", "SQLAlchemy", "Dash", "Plotly", "TMDB API"],
    screenshots: [],
    metrics: [
      { value: 6000, suffix: "+", label: "Films Pipelined" },
      { value: 19, suffix: "", label: "Genres" },
      { value: 7, suffix: "", label: "Data-Quality Checks" },
      { value: 3, suffix: "NF", label: "PostgreSQL Schema" },
    ],
    cardMetrics: [
      { display: "6,000+", label: "Films" },
      { display: "7", label: "QA Checks" },
      { display: "3NF", label: "Postgres" },
    ],
    caseStudy: {
      hook: "Do films that earn more also rate higher? An end-to-end data-engineering project: extract ~6,000 films from the TMDB API, load them into a normalized PostgreSQL database, and explore the box-office-versus-ratings story in a live, movie-theater-themed interactive film explorer.",
      sections: [
        {
          title: "The Question",
          color: "#06B6D4",
          body: "Do films that earn more also rate higher? And do certain genres show a consistent gap between revenue and reception that shifts across decades? That's the question this project answers end to end, from raw API data to a clean, reproducible pipeline. The source is the TMDB API: roughly 6,000 films from 2000 to 2026, each with budget, revenue, runtime, audience ratings, and genres.",
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
    shortDescription: "Customer retention prediction with cluster segmentation.",
    url: "#",
    github: "https://github.com/SpencerGoss/msba-portfolio-SpencerGoss",
    tags: ["Python", "scikit-learn", "Jupyter", "pandas"],
    screenshots: [
      { label: "Cluster Analysis", desc: "3 customer segments identified" },
      { label: "Churn Factors", desc: "Key drivers of customer attrition" },
    ],
    metrics: [
      { value: 3, suffix: "", label: "Customer Clusters" },
      { value: 5636, suffix: "", label: "Data Points" },
    ],
    cardMetrics: [
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
          body: "A gradient-boosted ensemble model for churn prediction, combined with customer segmentation using clustering. The analysis revealed that tenure and contract type are the strongest churn predictors: customers in their first 6 months on month-to-month plans are at highest risk. Customers who refer others churn significantly less. Three distinct customer clusters emerged, each requiring a different retention strategy.",
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

/* Tech skills — Iconify CDN for brand logos, Lucide for concepts */
type TechSkill = { name: string; category: string } & (
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
  { name: "GitHub Copilot", icon: "https://api.iconify.design/simple-icons:githubcopilot.svg", category: "AI & Automation" },
  { name: "Prompt Engineering", LucideIcon: Sparkles, iconColor: "#E8413C", category: "AI & Automation" },
  { name: "AI Agents", LucideIcon: Bot, iconColor: "#00B0D8", category: "AI & Automation" },
  // Machine Learning
  { name: "scikit-learn", icon: "https://api.iconify.design/devicon:scikitlearn.svg", category: "Machine Learning" },
  { name: "pandas", icon: "https://api.iconify.design/logos:pandas-icon.svg", category: "Machine Learning" },
  { name: "NumPy", icon: "https://api.iconify.design/logos:numpy.svg", category: "Machine Learning" },
  { name: "Jupyter", icon: "https://api.iconify.design/devicon:jupyter-wordmark.svg", category: "Machine Learning" },
  { name: "Google Colab", icon: "https://api.iconify.design/devicon:googlecolab.svg", category: "Machine Learning" },
  // Visualization
  { name: "Tableau", icon: "https://api.iconify.design/logos:tableau-icon.svg", category: "Visualization" },
  { name: "Power BI", icon: "https://api.iconify.design/logos:microsoft-power-bi.svg", category: "Visualization" },
  // Analytics
  { name: "JMP", LucideIcon: FlaskConical, iconColor: "#1E6FBA", category: "Analytics" },
  { name: "SPSS", LucideIcon: BarChart3, iconColor: "#1F70C1", category: "Analytics" },
  { name: "Qualtrics", icon: "https://api.iconify.design/simple-icons:qualtrics.svg", category: "Analytics" },
  { name: "SurveyMonkey", icon: "https://api.iconify.design/simple-icons:surveymonkey.svg", category: "Analytics" },
  // Tools & Platforms
  { name: "Excel", icon: "https://api.iconify.design/simple-icons:microsoftexcel.svg", category: "Tools & Platforms" },
  { name: "PowerPoint", icon: "https://api.iconify.design/simple-icons:microsoftpowerpoint.svg", category: "Tools & Platforms" },
  { name: "Word", icon: "https://api.iconify.design/simple-icons:microsoftword.svg", category: "Tools & Platforms" },
  { name: "OneNote", icon: "https://api.iconify.design/simple-icons:microsoftonenote.svg", category: "Tools & Platforms" },
  { name: "SAP", icon: "https://api.iconify.design/logos:sap.svg", category: "Tools & Platforms" },
  { name: "GitHub", icon: "https://api.iconify.design/logos:github-icon.svg", category: "Tools & Platforms" },
  { name: "VS Code", icon: "https://api.iconify.design/logos:visual-studio-code.svg", category: "Tools & Platforms" },
  { name: "Microsoft Teams", icon: "https://api.iconify.design/logos:microsoft-teams.svg", category: "Tools & Platforms" },
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
      { name: "Econometrics & Forecasting" },
    ],
  },
  {
    label: "Data Engineering",
    skills: [
      { name: "Data Pipeline Development", featured: true },
      { name: "Data Cleaning & ETL" },
      { name: "Data Wrangling" },
      { name: "Process Automation" },
    ],
  },
  {
    label: "Analytics & Experimentation",
    skills: [
      { name: "A/B Testing" },
      { name: "Customer Segmentation" },
      { name: "Risk Analysis" },
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
      { name: "Requirements Gathering" },
      { name: "Business Strategy" },
      { name: "Project Management" },
      { name: "Cross-functional Collaboration" },
    ],
  },
];

const EXPERIENCE = [
  {
    title: "M.S. Business Analytics",
    org: "University of Louisville",
    location: "Louisville, KY",
    period: "Aug 2025 - Aug 2026",
    description: "Pursuing a Master of Science in Business Analytics with a concentration in Artificial Intelligence. Building predictive models, ML pipelines, and data-driven tools that solve real business problems.",
    details: [
      "Concentration in Artificial Intelligence, applying ML techniques to real-world business challenges",
      "Developing expertise in Python, R, and SQL for advanced analytics and predictive modeling",
      "Building end-to-end machine learning pipelines from data collection through deployment",
      "Coursework spanning business analytics strategy, data mining, and applied AI",
    ],
    highlights: ["AI Concentration", "Predictive Modeling", "Machine Learning Pipelines"],
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
    description: "Shipping real products: a full-stack multi-sport analytics platform, automated trading systems with risk management, and an autonomous multi-agent AI development environment.",
    details: [
      "Built and deployed Oddsix, a live multi-sport sports-analytics platform (player stats, historical data, ML predictions, and betting tools) whose picks grade themselves in public at 72% over 290+ picks",
      "Developed automated trading systems with real-time risk management and circuit breakers",
      "Engineered a multi-agent AI development system with custom Claude skills, plugins, and autonomous overnight agents across multiple projects",
    ],
    highlights: ["ML Platform", "Automated Trading", "AI Agents"],
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
    description: "Managed the full accounts-payable cycle across 10+ properties and used Relish AI to train invoice-analysis models that streamlined a manual, high-volume review process. Worked across SAP and JD Edwards to keep vendor data accurate end to end.",
    details: [
      "Used Relish AI to train invoice-analysis models that streamlined a manual, high-volume review process",
      "Worked cross-functionally across SAP and JD Edwards to manage the full accounts-payable cycle",
      "Processed 100+ invoices daily across 10+ Churchill Downs properties with high accuracy",
      "Coordinated with vendors to resolve discrepancies and ensure timely, complete payments",
    ],
    highlights: ["AI-Powered Automation", "SAP & JD Edwards", "100+ Invoices Daily"],
    type: "work" as const,
    logo: "https://www.google.com/s2/favicons?domain=churchilldowns.com&sz=128",
    color: "#1B5E20",
    gradient: "from-[#1B5E20] to-[#388E3C]",
    year: "2024",
    bgImage: "/images/experience/churchill-downs.jpg",
  },
  {
    title: "BBA in Finance, Marketing & Business Analytics",
    org: "University of Kentucky",
    location: "Lexington, KY",
    period: "Aug 2020 - Mar 2024",
    description: "Bachelor of Business Administration with focuses in Finance, Marketing, and a minor in Business Analytics. Built a strong foundation in quantitative analysis, business strategy, and data-driven decision making.",
    details: [
      "Finance and Marketing majors with a minor in Business Analytics, combining quantitative and strategic skills",
      "Developed strong foundations in data analysis, financial modeling, and marketing analytics",
      "Coursework in Business Analytics Strategy (AN 450G), Data Mining (AN 420G), and applied quantitative methods",
      "Active member of Delta Tau Delta fraternity",
    ],
    highlights: ["Finance & Marketing", "Business Analytics Minor", "Delta Tau Delta"],
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
    description: "Coordinated shipping and receiving operations for a global heavy equipment manufacturer over 3+ years. Resolved delivery disputes, monitored daily package flow, trained new hires, and earned forklift certification.",
    details: [
      "Coordinated and collaborated with warehouse staff, management, and transporters to resolve delivery disputes and ensure steady flow of operations",
      "Monitored 100+ packages daily to ensure safety, correct location, and timeliness to meet quotas",
      "Trained new hires in day-to-day operations and served as a go-to resource for the team",
      "Learned shipping software and acquired forklift certification to increase efficiency and reduce turnaround time",
    ],
    highlights: ["3+ Years", "Team Training", "Forklift Certified"],
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
      "Member of the National Honors Society for academic excellence",
      "Served on the Student Activity Council, helping plan and coordinate school events",
      "Member of the Lacrosse and Powerlifting teams",
      "Active in Ryken Service Club, contributing to community service initiatives",
    ],
    highlights: ["National Honors Society", "Lacrosse", "Student Activity Council"],
    type: "education" as const,
    logo: "/images/experience/saint-xavier-logo.jpg",
    color: "#6A1B9A",
    gradient: "from-[#4A148C] to-[#6A1B9A]",
    year: "2016",
    bgImage: "/images/experience/saint-xavier.jpg",
  },
];

const NAV_ITEMS = [
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "aisystem", label: "AI System" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "contact", label: "Contact" },
];

const TYPEWRITER_WORDS = [
  "Business Analytics",
  "Artificial Intelligence",
  "Data Science",
  "Machine Learning",
  "Predictive Modeling",
  "Data Visualization",
];

/* ================================================================
   HOOKS
   ================================================================ */

function useRotatingWord(words: string[], interval = 3000) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return { word: words[index], visible };
}

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

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { count, ref };
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
  "#06B6D4": "#0E7490", // cyan
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

function BentoCard({ project, onClick, delay = 0 }: { project: typeof PROJECTS[0]; onClick: () => void; delay?: number }) {
  const revealRef = useScrollReveal();
  const cardImg = getCardImage(project);

  if (project.featured) {
    return (
      <div
        ref={revealRef}
        className="scroll-reveal bento-card bento-featured group/card"
        onClick={onClick}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }}
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} case study`}
        style={{ ["--accent" as string]: project.accent, transitionDelay: `${delay}ms` }}
      >
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${project.accentBg}, transparent 70%)`, filter: "blur(40px)" }}
        />
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ color: accentText(project.accent) }}>
              Featured Project
            </div>
            <h3 className="text-2xl md:text-[26px] font-extrabold tracking-tight text-foreground mb-1">
              <ProjectTitle project={project} />
            </h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>

          {cardImg ? (
            <div className="my-4 rounded-xl border border-border/50 flex-1 min-h-[200px] overflow-hidden relative bg-white">
              <img src={cardImg} alt={`${project.title} preview`} loading="lazy" className="w-full h-full object-contain" />
            </div>
          ) : (
            <div
              className="my-4 rounded-xl border border-border/50 h-20 flex items-center justify-center overflow-hidden relative"
              style={{ background: `linear-gradient(135deg, ${project.accent}08, ${project.accent}15, ${project.accent}06)` }}
            >
              <div className="flex gap-3 items-end">
                {[24, 36, 28, 42, 20].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-t-sm transition-all duration-500"
                    style={{ height: h, background: `${project.accent}30`, animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/30" />
            </div>
          )}

          <div>
            <div className="flex gap-6 mb-3">
              {project.cardMetrics.map((m, i) => (
                <div key={i}>
                  <div className="text-xl md:text-[22px] font-extrabold text-foreground">{m.display}</div>
                  <div className="text-[9px] text-muted-foreground uppercase tracking-[1px]">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-1 ml-auto text-xs font-semibold whitespace-nowrap opacity-70 group-hover/card:opacity-100 transition-opacity duration-200" style={{ color: accentText(project.accent) }}>
                View Project <ArrowUpRight size={13} className="transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={revealRef}
      className="scroll-reveal bento-card group/card"
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
      style={{ ["--accent" as string]: project.accent, transitionDelay: `${delay}ms` }}
    >
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none opacity-70 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{ background: `radial-gradient(circle, ${project.accentBg}, transparent 70%)`, filter: "blur(34px)" }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {cardImg && (
            <div className="mb-3 rounded-lg overflow-hidden aspect-video border border-border/50 bg-slate-900">
              <img src={cardImg} alt={`${project.title} preview`} loading="lazy" className="w-full h-full object-cover object-center" />
            </div>
          )}
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full" aria-hidden="true" style={{ background: project.accent }} />
            <h3 className="text-base md:text-lg font-extrabold text-foreground"><ProjectTitle project={project} /></h3>
            <div className="ml-auto flex items-center gap-1.5">
              {(project as { status?: string }).status && (
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 whitespace-nowrap"
                  style={{ background: "rgba(245,158,11,0.14)", color: "#B45309" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F59E0B" }} />
                  {(project as { status?: string }).status}
                </span>
              )}
              {(project as { video?: string }).video && (
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 whitespace-nowrap"
                  style={{ background: project.accentBg, color: accentText(project.accent) }}
                >
                  ▶ Video
                </span>
              )}
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground mb-2">{project.subtitle}</p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">{project.shortDescription}</p>
        </div>
        {project.cardMetrics.length > 0 && (
          <div className="flex gap-4 mt-3">
            {project.cardMetrics.map((m, i) => (
              <div key={i}>
                <div className="text-base font-extrabold text-foreground">{m.display}</div>
                <div className="text-[8px] text-muted-foreground uppercase tracking-[1px]">{m.label}</div>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex gap-1.5 flex-wrap">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-0.5 rounded-full border"
                style={{ background: project.accentBg, color: accentText(project.accent), borderColor: `${project.accent}20` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="ml-auto opacity-50 group-hover/card:opacity-100 transition-opacity duration-200">
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" style={{ color: project.accent }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoGrid({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  const oddsix = PROJECTS.find((p) => p.id === "oddsix")!;
  const tradingBot = PROJECTS.find((p) => p.id === "trading-bot")!;
  const boxOffice = PROJECTS.find((p) => p.id === "box-office")!;
  const msbaNba = PROJECTS.find((p) => p.id === "msba-nba")!;
  const churnModel = PROJECTS.find((p) => p.id === "churn-model")!;

  return (
    <div className="bento-grid">
      <div className="bento-col-left">
        <BentoCard project={oddsix} onClick={() => onSelectProject("oddsix")} delay={0} />
      </div>
      <div className="bento-col-right">
        <BentoCard project={tradingBot} onClick={() => onSelectProject("trading-bot")} delay={120} />
        <BentoCard project={boxOffice} onClick={() => onSelectProject("box-office")} delay={200} />
        <div className="bento-row-compact">
          <BentoCard project={msbaNba} onClick={() => onSelectProject("msba-nba")} delay={280} />
          <BentoCard project={churnModel} onClick={() => onSelectProject("churn-model")} delay={340} />
        </div>
      </div>
    </div>
  );
}

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
              background: shot.img ? "#0b1220" : `linear-gradient(135deg, ${accent}08, ${accent}15, ${accent}08)`,
            }}
          >
            {shot.img ? (
              <>
                <img src={shot.img} alt={shot.label} loading="lazy" className="w-full h-full object-contain" />
                <div className="absolute bottom-0 inset-x-0 px-4 py-2.5 bg-gradient-to-t from-black/75 via-black/40 to-transparent">
                  <div className="text-xs font-semibold text-white">{shot.label}</div>
                  <div className="text-[10px] text-white/70">{shot.desc}</div>
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
            <span className="text-[10px] font-bold tracking-[2px] uppercase" style={{ color: project.accent }}>
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
              <CaseStudyMetric key={i} metric={m} />
            ))}
          </div>
        </div>
      )}

      {/* Story sections */}
      <div className="max-w-2xl mx-auto px-6 py-10 md:py-14">
        {project.caseStudy.sections.map((section, i) => (
          <StorySection key={i} section={section} index={i} isLast={i === project.caseStudy.sections.length - 1} />
        ))}

        {!video && (
          <div
            className="rounded-xl border border-border h-24 md:h-32 flex flex-col items-center justify-center shadow-sm mb-10 overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${project.accent}05, ${project.accent}12, ${project.accent}05)` }}
          >
            <div className="flex gap-3 mb-2">
              {[40, 56, 48].map((w, i) => (
                <div key={i} className="h-8 rounded" style={{ width: w, background: `${project.accent}12` }} />
              ))}
            </div>
            <div className="text-xs text-muted-foreground/80">
              {(project as { status?: string }).status ? "Dashboard & visuals coming soon" : "More screenshots coming soon"}
            </div>
          </div>
        )}

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
                className="w-full text-left bg-white border border-border rounded-xl p-5 cursor-pointer hover:shadow-md hover:border-primary/20 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full" style={{ background: nextProject.accent }} />
                      <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {nextProject.title}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{nextProject.subtitle}</div>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
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
    <div
      className="tech-icon-card relative group flex flex-col items-center gap-2 cursor-default"
    >
      <div className="relative flex items-center justify-center bg-white border border-border rounded-xl w-[72px] h-[72px] transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]">
        {skill.icon ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <skill.LucideIcon
            size={28}
            className="transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.iconColor }}
          />
        )}
      </div>
      <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight max-w-[80px] group-hover:text-foreground transition-colors duration-200">
        {skill.name}
      </span>
    </div>
  );
}

function BusinessSkillPill({ skill }: { skill: { name: string; featured?: boolean } }) {
  return (
    <div className="skill-badge inline-flex items-center gap-2 rounded-full px-4 py-2 cursor-default text-sm font-medium bg-white border border-border text-foreground transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
      <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
      {skill.name}
    </div>
  );
}

const SKILL_CATEGORIES = [
  { name: "Languages", color: "#06B6D4" },
  { name: "AI & Automation", color: "#06B6D4" },
  { name: "Machine Learning", color: "#06B6D4" },
  { name: "Visualization", color: "#06B6D4" },
  { name: "Analytics", color: "#06B6D4" },
  { name: "Tools & Platforms", color: "#06B6D4" },
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
          style={{ color: accentText(category.color) }}
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

/* Full-viewport experience slide — full-screen bg image + glass card */
function ExperienceSlide({ entry, index, total }: { entry: typeof EXPERIENCE[0]; index: number; total: number }) {
  const slideRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const typeLabel = entry.type === "education" ? "Education" : entry.type === "work" ? "Work" : "Projects";

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); else setVisible(false); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Preload image
  useEffect(() => {
    if (!entry.bgImage) return;
    const img = new Image();
    img.onload = () => setImgLoaded(true);
    img.src = entry.bgImage;
  }, [entry.bgImage]);

  useEffect(() => {
    const handleScroll = () => {
      if (!slideRef.current) return;
      const rect = slideRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      // Only compute when slide is near viewport
      if (rect.bottom > -viewHeight && rect.top < viewHeight * 2) {
        const offset = (rect.top / viewHeight) * -30; // subtle 30px max movement
        setParallaxY(offset);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={slideRef}
      className="exp-slide relative"
      role="article"
      aria-label={`${entry.org}, ${entry.title}`}
    >
      {/* ---- Full-screen background image ---- */}
      <div className="absolute inset-0 z-0">
        {/* Gradient fallback (always present) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${entry.gradient}`} />
        {/* Actual image (fades in on load) */}
        {entry.bgImage && (
          <img
            src={entry.bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: imgLoaded ? 1 : 0, transform: `translateY(${parallaxY}px) scale(1.05)`, willChange: "transform" }}
            loading="lazy"
          />
        )}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Extra gradient at bottom for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* ---- Slide number indicator ---- */}
      <div className="absolute top-6 right-8 z-20 hidden md:flex flex-col items-end gap-2" aria-hidden="true">
        <div className="flex items-center gap-2">
          {Array.from({ length: total }, (_, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                width: i === index ? 24 : 6,
                height: 6,
                borderRadius: 3,
                background: i === index ? entry.color : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
        <span className="text-[10px] text-white/40 font-medium" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {index + 1} / {total}
        </span>
      </div>

      {/* ---- Content: logo + glass card ---- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center h-full gap-6">

        {/* Logo badge */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {entry.logo ? (
            <img
              src={entry.logo}
              alt={entry.org}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-contain bg-white/95 p-3 shadow-2xl"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          ) : (
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/95 flex items-center justify-center shadow-2xl">
              <Code2 size={28} className="text-foreground" />
            </div>
          )}
        </div>

        {/* Org name large */}
        <div className={`text-center transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">{entry.org}</h3>
          <p className="text-white/50 text-sm font-medium">{entry.location}</p>
        </div>

        {/* Glass card with details */}
        <div
          className={`w-full max-w-2xl transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div
            className="rounded-2xl p-6 md:p-8 border border-white/15 shadow-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Type + period row */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full"
                style={{ background: `${entry.color}30`, color: "#fff" }}
              >
                {typeLabel}
              </span>
              <span className="text-xs text-white/50 font-medium" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {entry.period}
              </span>
            </div>

            {/* Title */}
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 leading-tight">
              {entry.title}
            </h4>

            {/* Description */}
            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-5">
              {entry.description}
            </p>

            {/* Detail bullets */}
            {entry.details && entry.details.length > 0 && (
              <div className="space-y-2.5 mb-5">
                {entry.details.map((detail, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: entry.color, boxShadow: `0 0 6px ${entry.color}60` }}
                    />
                    <p className="text-sm text-white/60 leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-2">
              {entry.highlights.map((h) => (
                <span
                  key={h}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/15 text-white/80"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-4">
        {index > 0 && (
          <button
            onClick={() => {
              const prev = slideRef.current?.previousElementSibling as HTMLElement;
              prev?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200 cursor-pointer"
            aria-label="Previous experience"
          >
            <ChevronDown size={18} className="rotate-90" />
          </button>
        )}
        {index === 0 && (
          <div className="bounce-arrow text-white/30">
            <ChevronDown size={24} />
          </div>
        )}
        {index < total - 1 && (
          <button
            onClick={() => {
              const next = slideRef.current?.nextElementSibling as HTMLElement;
              next?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200 cursor-pointer"
            aria-label="Next experience"
          >
            <ChevronDown size={18} className="-rotate-90" />
          </button>
        )}
      </div>
    </div>
  );
}

/* Experience timeline with scroll-based progress */
/* Compact horizontal timeline — brief overview, ~half viewport */
function ExperienceTimeline() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="scroll-reveal py-16 md:py-20" style={{ background: "linear-gradient(180deg, #e3e7ed 0%, #e8ebf0 100%)" }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
          Experience & Education
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-3">
          My Journey
        </h3>
        <Separator className="w-12 bg-primary h-0.5 mx-auto mb-4" />
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          From high school to grad school. Scroll down to walk through each chapter.
        </p>

        {/* Compact horizontal timeline */}
        <div className="relative flex items-center justify-center gap-0 flex-wrap max-w-3xl mx-auto">
          {EXPERIENCE.map((entry, i) => (
            <div key={i} className="flex items-center">
              {/* Entry pill */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-default group">
                {entry.logo ? (
                  <img src={entry.logo} alt={entry.org} className="w-5 h-5 rounded object-contain" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                ) : (
                  <Code2 size={14} className="text-muted-foreground" />
                )}
                <span className="text-[11px] font-semibold text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
                  {entry.org}
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">{entry.year}</span>
              </div>
              {/* Connector line */}
              {i < EXPERIENCE.length - 1 && (
                <div className="w-4 h-[2px] bg-border hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-8 bounce-arrow text-muted-foreground/30">
          <ChevronDown size={24} />
        </div>
      </div>
    </div>
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
  { name: "Llama", role: "Free local / offline tier", color: "#9CA3AF", icon: "https://api.iconify.design/simple-icons:ollama.svg" },
];

const COUNCIL_FLOW = [
  { icon: Network, title: "Dispatch", desc: "The same question goes to every model at once, in parallel." },
  { icon: Repeat, title: "Cross-Review", desc: "Each model reads the others' answers, then revises its own." },
  { icon: Swords, title: "Adversarial Audit", desc: "One model has to attack the idea and try to break it, which catches groupthink." },
  { icon: Scale, title: "Governance", desc: "Two or more blocking votes can stop a decision automatically." },
  { icon: Users, title: "I Decide", desc: "Nothing ships without my review. The AI suggests, I make the call." },
  { icon: BrainCircuit, title: "It Learns", desc: "The result gets logged and the system updates itself for next time." },
];

const COUNCIL_PILLARS = [
  { icon: ShieldCheck, color: "#EF4444", title: "It argues with itself on purpose", body: "A bunch of AIs that all agree isn't worth much. So one of them always has the job of attacking the idea and trying to break it. That catches problems the others would have agreed right past." },
  { icon: BrainCircuit, color: "#8B5CF6", title: "It learns from every mistake", body: "When something goes wrong, it becomes a rule the system remembers. There are 233 of those now, plus 279 triggers, and they get fed into every AI call so the same mistake doesn't happen twice." },
  { icon: Activity, color: "#10B981", title: "I track whether it actually works", body: "I keep a ledger of what the AI recommended and what actually happened afterward. So I know how often its advice was right, instead of just assuming it was." },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">Multi-Agent AI Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-5">
            I built my own AI system.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Most people use one AI tool. I run <span className="text-slate-200 font-medium">five models that check each other's work</span>, catch their own mistakes, get better over time, and keep working across my projects while I review what they produce.
          </p>
        </ScrollReveal>

        {/* Metrics */}
        <ScrollReveal className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { value: "5", label: "AI Models in Council", color: "#06B6D4" },
              { value: "53", label: "Custom AI Skills", color: "#8B5CF6" },
              { value: "37", label: "Autonomous Agents", color: "#10B981" },
              { value: "233", label: "Self-Learned Safeguards", color: "#EF4444" },
              { value: "14K+", label: "Automated Tests", color: "#F59E0B" },
            ].map((s) => (
              <div key={s.label} className="text-center py-4 px-3 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: s.color }}>{s.value}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ===== THE COUNCIL ===== */}
        <ScrollReveal className="mb-20">
          <div className="text-center mb-8">
            <div className="text-[11px] font-bold uppercase tracking-[3px] text-cyan-300/80 mb-2">The Council</div>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              Every big decision goes to all five AI models at once, each picked for what it's best at.
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

        {/* ===== HOW THE COUNCIL REACHES A VERDICT ===== */}
        <ScrollReveal className="mb-20">
          <div className="text-center mb-8">
            <div className="text-[11px] font-bold uppercase tracking-[3px] text-violet-300/80 mb-2">How a verdict is reached</div>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              This is the part most people skip. If your AIs only ever agree with each other, they're not helping you. So I made them disagree on purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {COUNCIL_FLOW.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex gap-3.5 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-9 h-9 rounded-lg bg-violet-400/10 flex items-center justify-center">
                      <Icon size={16} className="text-violet-300" />
                    </div>
                    <span className="mt-1.5 text-[9px] font-mono text-slate-600">0{i + 1}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold text-white leading-tight mb-1">{step.title}</div>
                    <div className="text-[11px] text-slate-400 leading-snug">{step.desc}</div>
                  </div>
                </div>
              );
            })}
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

        {/* Bottom stats */}
        <div className="text-center mt-14">
          <p className="text-[10px] text-slate-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            five AI services  •  53 custom skills  •  gets better over time  •  I review every change
          </p>
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
  const { word: rotatingWord, visible: wordVisible } = useRotatingWord(TYPEWRITER_WORDS);

  // Lenis smooth scroll (disabled when user prefers reduced motion)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Cursor spotlight
  const spotlightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Cursor spotlight */}
      <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />

      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

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
              SG<span className="text-primary">.</span>
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
                      ? "text-primary bg-primary/10"
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
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6">
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
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                    <span className="text-xs font-semibold text-muted-foreground">Open to opportunities</span>
                  </div>
                </div>

                {/* Name */}
                <h1 className="split-reveal split-reveal-delay-1 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-none mb-4">
                  Spencer Goss
                </h1>

                {/* Subtitle pills */}
                <div className="split-reveal split-reveal-delay-2 flex items-center justify-center md:justify-start gap-3 mb-6 flex-wrap">
                  <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">Business Analyst</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">MSBA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">AI Concentration</span>
                </div>

                {/* Tagline */}
                <p className="split-reveal split-reveal-delay-3 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
                  <span className="font-medium text-foreground/70">From raw data to real results:</span> predictive models, automated systems, and analytics tools.
                </p>

                {/* CTA Buttons */}
                <div className="split-reveal flex items-center justify-center md:justify-start gap-4" style={{ animationDelay: "0.55s" }}>
                  <Button
                    size="lg"
                    onClick={() => scrollTo("projects")}
                    className="font-semibold tracking-tight cursor-pointer border-0"
                    style={{ background: "#06B6D4", color: "#e8ebf0" }}
                  >
                    View My Work
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollTo("contact")}
                    className="font-semibold tracking-tight cursor-pointer text-foreground border-foreground/20 hover:border-primary hover:bg-primary/5"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>

              {/* Right — photo */}
              <div data-hero="photo" className="split-reveal flex-shrink-0 relative transition-none" style={{ animationDelay: "0.7s", willChange: "transform, opacity" }}>
                {/* Decorative blob behind photo */}
                <div className="absolute -inset-6 rounded-full opacity-30" aria-hidden="true" style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)", filter: "blur(40px)" }} />
                <div
                  ref={mediaCardRef}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-white/50"
                >
                  {/* Placeholder — cyan→purple SG monogram. Swap this whole block for a photo later. */}
                  <div
                    className="w-full h-full relative flex items-center justify-center overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)" }}
                    role="img"
                    aria-label="Spencer Goss monogram"
                  >
                    <div
                      className="absolute inset-0"
                      aria-hidden="true"
                      style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.28), transparent 55%)" }}
                    />
                    <span
                      className="relative text-white font-extrabold tracking-tight select-none"
                      style={{ fontSize: "8.5rem", lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      SG
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll cue */}
            <div ref={scrollCueRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow text-muted-foreground/40 transition-opacity duration-100" aria-hidden="true" style={{ willChange: "opacity" }}>
              <ChevronDown size={28} />
            </div>

        </div>
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
                  { Icon: MapPin, value: "Louisville, KY" },
                  { Icon: GraduationCap, value: "MSBA in AI, UofL" },
                  { Icon: Briefcase, value: "Seeking BA & DA roles" },
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
                I'm pursuing my MSBA at the University of Louisville with a concentration in AI. Outside of coursework, I'm usually building something, whether a prediction engine, an automated trading system, or whatever problem I'm trying to solve that week. I learn best by shipping real products, and every project sharpens how I approach data and decision-making.
              </p>

              {/* Detail grid with left accent borders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Focus", value: "Predictive modeling, data pipelines, and analytics that drive decisions", color: "#06B6D4" },
                  { label: "Toolkit", value: "Python, SQL, R, scikit-learn, and Power BI", color: "#06B6D4" },
                  { label: "Education", value: "MSBA (AI) at UofL, BBA Finance & Marketing (Analytics minor) at UK", color: "#06B6D4" },
                  { label: "Experience", value: "Churchill Downs, Terex Corporation, Independent Projects", color: "#06B6D4" },
                ].map((item, i) => (
                  <div key={i} className="pl-4" style={{ borderLeft: `2px solid ${item.color}` }}>
                    <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: accentText(item.color) }}>{item.label}</div>
                    <div className="text-sm font-medium text-foreground leading-relaxed">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
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
                Real projects, real data, real impact. Click any to see the full case study.
              </p>
            </ScrollReveal>
            <BentoGrid onSelectProject={setSelectedProject} />
          </div>
        )}
      </section>

      {/* ===== AI SYSTEM ===== */}
      <AISystemSection sectionRef={sectionRefs.aisystem} />

      {/* ===== SKILLS ===== */}
      <section ref={sectionRefs.skills} aria-label="Skills" className="section-alt py-24 md:py-32">
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

          {/* Business & Professional skills, grouped by area */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-5 rounded-full bg-foreground/20" />
              <h3 className="text-[11px] font-bold text-[#475569] uppercase tracking-[1.5px]">
                Business & Professional
              </h3>
            </div>
            <div className="space-y-6">
              {BUSINESS_SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <div className="text-[10px] font-semibold text-[#475569] uppercase tracking-[1px] mb-3">
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

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <ExperienceTimeline />

      {/* ===== EXPERIENCE SLIDES ===== */}
      <section ref={sectionRefs.experience} aria-label="Experience" className="relative" style={{ background: "#e8ebf0" }}>
        {/* Individual experience slides */}
        {EXPERIENCE.map((entry, i) => (
          <ExperienceSlide key={i} entry={entry} index={i} total={EXPERIENCE.length} />
        ))}
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
              Open to Business Analyst and Data Analyst roles. Let's talk.
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
            <p className="text-xs text-muted-foreground mt-3">PDF • Updated March 2026</p>
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

          <p className="text-xs text-muted-foreground/40 mt-12">
            Built with React, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </section>
      </main>
    </>
  );
}
