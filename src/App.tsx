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
    subtitle: "NBA Analytics Platform",
    accent: "#06B6D4",
    accentBg: "rgba(6,182,212,0.08)",
    featured: true,
    shortDescription: "Comprehensive NBA analytics dashboard with ML-powered predictions, player tracking, historical data, and interactive visualizations — built by a basketball enthusiast.",
    url: "https://oddsix.app",
    github: "https://github.com/SpencerGoss/nba-analytics-project",
    tags: ["Python", "scikit-learn", "LightGBM", "Plotly", "Chart.js", "GitHub Pages", "SQL Server"],
    screenshots: [
      { label: "Dashboard Home", desc: "Daily picks & live scores" },
      { label: "Game Predictions", desc: "Confidence tiers & radar charts" },
      { label: "Player Comparison", desc: "Stats, efficiency & career totals" },
      { label: "League Standings", desc: "Power rankings & playoff picture" },
    ],
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
            { emoji: "\u{1F3E0}", name: "Home", desc: "Daily picks, live scores carousel, season performance tracking" },
            { emoji: "\u{1F3AE}", name: "Games", desc: "ML predictions with confidence tiers, matchup radar charts, head-to-head history" },
            { emoji: "\u{1F3C6}", name: "League", desc: "Conference standings, power rankings, playoff picture, head-to-head matrix" },
            { emoji: "\u{1F464}", name: "Players", desc: "Stats for all 30 teams, player comparisons, prop projections with conformal intervals" },
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
    screenshots: [
      { label: "Signal Dashboard", desc: "21 signals fused in real-time" },
      { label: "Risk Monitor", desc: "Circuit breakers & drawdown tracking" },
      { label: "Agent Pipeline", desc: "5-stage AI trade evaluation" },
    ],
    metrics: [
      { value: 31, suffix: "K+", label: "Lines of Code" },
      { value: 3082, suffix: "", label: "Tests" },
      { value: 21, suffix: "", label: "Signal Types" },
      { value: 95, suffix: "%", label: "Test Coverage" },
    ],
    cardMetrics: [
      { display: "3K+", label: "Tests" },
      { display: "95%", label: "Coverage" },
    ],
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
    screenshots: [
      { label: "Homepage", desc: "Dark theme with category navigation" },
      { label: "Tool Review", desc: "In-depth analysis with ratings" },
      { label: "Comparison Table", desc: "Side-by-side feature breakdown" },
    ],
    metrics: [
      { value: 350, suffix: "+", label: "Articles Published" },
      { value: 38, suffix: "", label: "Tools Reviewed" },
      { value: 3, suffix: "", label: "Content Types" },
    ],
    cardMetrics: [
      { display: "350+", label: "Articles" },
    ],
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

/* Text-based business & professional skills — featured = stronger visual emphasis */
const BUSINESS_SKILLS: { name: string; featured?: boolean }[] = [
  { name: "Predictive Modeling", featured: true },
  { name: "Machine Learning", featured: true },
  { name: "Statistical Analysis", featured: true },
  { name: "Feature Engineering", featured: true },
  { name: "Data Pipeline Development", featured: true },
  { name: "Financial Analysis" },
  { name: "Marketing Analytics" },
  { name: "Data Storytelling" },
  { name: "Econometrics & Forecasting" },
  { name: "Regression & Classification" },
  { name: "A/B Testing" },
  { name: "Data Cleaning & ETL" },
  { name: "Customer Segmentation" },
  { name: "Risk Analysis" },
  { name: "SEO & Content Strategy" },
  { name: "Dashboard Design" },
  { name: "Data Wrangling" },
  { name: "Stakeholder Communication" },
  { name: "Requirements Gathering" },
  { name: "Process Automation" },
  { name: "Business Strategy" },
  { name: "Cross-functional Collaboration" },
  { name: "Project Management" },
];

const EXPERIENCE = [
  {
    title: "M.S. Business Analytics",
    org: "University of Louisville",
    location: "Louisville, KY",
    period: "Aug 2025 — Aug 2026",
    description: "Pursuing a Master of Science in Business Analytics with a concentration in Artificial Intelligence. Building predictive models, ML pipelines, and data-driven tools that solve real business problems.",
    details: [
      "Concentration in Artificial Intelligence — applying ML techniques to real-world business challenges",
      "Developing expertise in Python, R, and SQL for advanced analytics and predictive modeling",
      "Building end-to-end machine learning pipelines from data collection through deployment",
      "Coursework spanning business analytics strategy, data mining, and applied AI",
    ],
    highlights: ["AI Concentration", "Predictive Modeling", "Machine Learning Pipelines"],
    type: "education" as const,
    logo: "https://www.google.com/s2/favicons?domain=louisville.edu&sz=128",
    color: "#AD0000",
    gradient: "from-[#AD0000] to-[#D32F2F]",
    year: "2025",
    bgImage: "/images/experience/uofl-campus.jpg",
  },
  {
    title: "Independent Projects",
    org: "Self-Directed",
    location: "Louisville, KY",
    period: "2025 — Present",
    description: "Shipping real products: a full-stack ML prediction platform, automated trading systems with risk management, and content platforms with AI-powered pipelines.",
    details: [
      "Built Oddsix — a full-stack NBA prediction engine with 390+ ML features and 72.6% accuracy",
      "Developed automated trading systems with real-time risk management and circuit breakers",
      "Created DevToolbox — an SEO-optimized content platform with an AI-powered publishing pipeline",
      "Designed and deployed Claude AI skills, plugins, and agent workflows for process automation",
    ],
    highlights: ["ML Platform", "Automated Trading", "AI Pipelines"],
    type: "project" as const,
    logo: "",
    color: "#06B6D4",
    gradient: "from-[#0891B2] to-[#06B6D4]",
    year: "2025",
    bgImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&h=1080&fit=crop&q=80",
  },
  {
    title: "Accounts Payable Specialist",
    org: "Churchill Downs Incorporated",
    location: "Louisville, KY",
    period: "Aug 2024 — Jul 2025",
    description: "Reviewed and processed high-volume invoices for accuracy and documentation across 10+ properties. Coordinated with vendors to ensure timely and complete payments.",
    details: [
      "Processed 100+ invoices daily across 10+ Churchill Downs properties with high accuracy",
      "Coordinated with vendors to resolve discrepancies and ensure timely, complete payments",
      "Leveraged Relish AI to train invoice analysis models, streamlining business processes",
      "Worked cross-functionally using JD Edwards and SAP to manage the full AP cycle",
    ],
    highlights: ["100+ Invoices Daily", "AI-Powered Automation", "SAP & JD Edwards"],
    type: "work" as const,
    logo: "https://www.google.com/s2/favicons?domain=churchilldowns.com&sz=128",
    color: "#1B5E20",
    gradient: "from-[#1B5E20] to-[#388E3C]",
    year: "2024",
    bgImage: "/images/experience/churchill-downs.webp",
  },
  {
    title: "BBA — Finance, Marketing & Business Analytics",
    org: "University of Kentucky",
    location: "Lexington, KY",
    period: "Aug 2020 — Mar 2024",
    description: "Bachelor of Business Administration with focuses in Finance, Marketing, and a minor in Business Analytics. Built a strong foundation in quantitative analysis, business strategy, and data-driven decision making.",
    details: [
      "Finance and Marketing majors with a minor in Business Analytics — combining quantitative and strategic skills",
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
    period: "May 2020 — Aug 2023",
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
    period: "2016 — 2020",
    description: "All-boys Catholic college preparatory high school in Louisville, established in 1864. Active in athletics, leadership, and service organizations throughout all four years.",
    details: [
      "Member of the National Honors Society for academic excellence",
      "Served on the Student Activity Council, helping plan and coordinate school events",
      "Member of the Lacrosse and Powerlifting teams",
      "Active in Ryken Service Club, contributing to community service initiatives",
    ],
    highlights: ["National Honors Society", "Lacrosse", "Student Activity Council"],
    type: "education" as const,
    logo: "https://www.google.com/s2/favicons?domain=saintx.com&sz=128",
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

function BentoCard({ project, onClick, delay = 0 }: { project: typeof PROJECTS[0]; onClick: () => void; delay?: number }) {
  const revealRef = useScrollReveal();

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

          <div>
            <div className="flex gap-6 mb-3">
              {project.cardMetrics.map((m, i) => (
                <div key={i}>
                  <div className="text-xl md:text-[22px] font-extrabold text-foreground">{m.display}</div>
                  <div className="text-[9px] text-muted-foreground uppercase tracking-[1px]">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 flex-wrap">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="text-[11px] bg-secondary border border-border text-muted-foreground px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 ml-auto text-[11px] font-semibold whitespace-nowrap opacity-60 group-hover/card:opacity-100 transition-opacity duration-200" style={{ color: project.accent }}>
                View Case Study <ArrowUpRight size={12} className="transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
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
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full" aria-hidden="true" style={{ background: project.accent }} />
            <h3 className="text-base md:text-lg font-extrabold text-foreground">{project.title}</h3>
          </div>
          <p className="text-[11px] text-muted-foreground mb-2">{project.subtitle}</p>
          <p className="text-[11px] text-muted-foreground/70 leading-relaxed">{project.shortDescription}</p>
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
                style={{ background: project.accentBg, color: project.accent, borderColor: `${project.accent}20` }}
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
  const devtoolbox = PROJECTS.find((p) => p.id === "devtoolbox")!;
  const churnModel = PROJECTS.find((p) => p.id === "churn-model")!;

  return (
    <div className="bento-grid">
      <div className="bento-col-left">
        <BentoCard project={oddsix} onClick={() => onSelectProject("oddsix")} delay={0} />
      </div>
      <div className="bento-col-right">
        <BentoCard project={tradingBot} onClick={() => onSelectProject("trading-bot")} delay={120} />
        <div className="bento-row-compact">
          <BentoCard project={devtoolbox} onClick={() => onSelectProject("devtoolbox")} delay={240} />
          <BentoCard project={churnModel} onClick={() => onSelectProject("churn-model")} delay={300} />
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

function Slideshow({ screenshots, accent }: { screenshots: { label: string; desc: string }[]; accent: string }) {
  const [current, setCurrent] = useState(0);

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
      <div className="relative h-40 md:h-56">
        {screenshots.map((shot, i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "translateX(0)" : i < current ? "translateX(-20px)" : "translateX(20px)",
              background: `linear-gradient(135deg, ${accent}08, ${accent}15, ${accent}08)`,
            }}
          >
            <div className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center" style={{ background: `${accent}15` }}>
              <div className="w-6 h-6 rounded" style={{ background: `${accent}30` }} />
            </div>
            <div className="text-sm font-semibold text-foreground">{shot.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{shot.desc}</div>
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
  useEffect(() => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    }
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
        style={{ background: "linear-gradient(135deg, #f8fafc, #ecfeff, #f0f9ff)" }}
      >
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

          <Slideshow screenshots={project.screenshots} accent={project.accent} />

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
          <StorySection key={i} section={section} index={i} isLast={i === project.caseStudy.sections.length - 1} />
        ))}

        <div
          className="rounded-xl border border-border h-24 md:h-32 flex flex-col items-center justify-center shadow-sm mb-10 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.accent}05, ${project.accent}12, ${project.accent}05)` }}
        >
          <div className="flex gap-3 mb-2">
            {[40, 56, 48].map((w, i) => (
              <div key={i} className="h-8 rounded" style={{ width: w, background: `${project.accent}12` }} />
            ))}
          </div>
          <div className="text-xs text-muted-foreground/50">More screenshots coming soon</div>
        </div>

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
    <div className={`skill-badge inline-flex items-center gap-2 rounded-full px-4 py-2 cursor-default text-sm font-medium transition-all duration-200 ${
      skill.featured
        ? "bg-primary/8 border border-primary/25 text-foreground hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
        : "bg-white border border-border text-foreground hover:border-primary/30 hover:shadow-sm"
    }`}>
      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${skill.featured ? "bg-primary" : "bg-muted-foreground/30"}`} />
      {skill.name}
    </div>
  );
}

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
      aria-label={`${entry.org} — ${entry.title}`}
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
    <div ref={revealRef} className="scroll-reveal py-16 md:py-20" style={{ background: "linear-gradient(180deg, #F1F5F9 0%, #FAFBFF 100%)" }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
          Experience & Education
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-3">
          My Journey
        </h3>
        <Separator className="w-12 bg-primary h-0.5 mx-auto mb-4" />
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          From high school to grad school — scroll down to walk through each chapter.
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

const AI_NODES = {
  spencer: { label: "Spencer", sub: "Designs, directs, decides", color: "#06B6D4", detail: "Every task starts with me. I design the system architecture, set agent missions, define skill workflows, and make all strategic decisions. The AI executes — I direct." },
  skillRouter: { label: "Skill Router", sub: "44 custom workflows", color: "#06B6D4", detail: "Every task is automatically routed through one of 44 custom skills I built — from debugging to deployment to code review. Each skill enforces a proven step-by-step process so nothing gets skipped. Skills are versioned, audited weekly, and scored for fitness." },
  cliTools: { label: "CLI Tools", sub: "12 Python utilities", color: "#06B6D4", detail: "Lightweight Python scripts that replace heavyweight integrations. Stock data, research paper search, chart generation, web scraping, system health monitoring, and cross-project git stats — all invoked on demand with zero overhead." },
  sessionState: { label: "Session Memory", sub: "Context persistence", color: "#06B6D4", detail: "Every session reads a handoff file from the last session and writes one at the end. Working notes, decision logs, and failed approaches persist across sessions. No context is ever lost — I pick up exactly where I left off." },
  orchestrator: { label: "Orchestrator", sub: "Scheduled at 2:35 AM", color: "#8B5CF6", detail: "A PowerShell orchestrator launches 28 agents sequentially across 6 execution rounds every night. Each agent runs in its own Claude session with a standing mission, territory boundaries, and a shared intelligence protocol." },
  researchAgents: { label: "Research Agents", sub: "Discover & analyze", color: "#8B5CF6", detail: "Agents that scan for new techniques, analyze model performance, explore frontier AI concepts, and identify improvement opportunities. They read the latest papers, test hypotheses, and log discoveries for the next morning." },
  buildAgents: { label: "Build & Test Agents", sub: "Implement & validate", color: "#8B5CF6", detail: "Agents that write code, run tests, optimize pipelines, and build features. Each has a defined territory — specific files and directories they can modify — with a 3-tier enforcement system preventing conflicts." },
  qaAgents: { label: "Quality Agents", sub: "Audit & enforce", color: "#8B5CF6", detail: "Agents focused on consistency, test coverage, prompt optimization, and cross-project standards. They catch regressions, enforce naming conventions, and ensure overnight work meets quality gates before merging." },
  immuneMemory: { label: "Immune Memory", sub: "20 defensive antibodies", color: "#EF4444", detail: "Every real mistake generates an antibody — a defensive rule that fires automatically before the same error can happen again. 20 active antibodies cover auth bypasses, ML feature mismatches, false completions, and more. 100% precision rate — zero false positives." },
  vitalsMonitor: { label: "Vitals Monitor", sub: "9 real-time metrics", color: "#06B6D4", detail: "Homeostatic monitoring: context pressure, error rate, coherence score, insight rate, prediction accuracy, skill freshness, agent health, depth score, and merge rate. Each has healthy/warning/critical ranges with automatic behavioral responses." },
  worldModel: { label: "World Model", sub: "Predictive processing", color: "#8B5CF6", detail: "Maintains predictions about every project, the environment, and the skill ecosystem. Predictions are tested against reality each session — surprises drive investigation priority. Currently at 72% accuracy across 5 active hypotheses." },
  dreamCycle: { label: "Dream Cycle", sub: "Knowledge consolidation", color: "#F59E0B", detail: "End-of-session consolidation in 5 stages: artifact collection → fact extraction → connection discovery → memory integration → pruning. Knowledge compounds across sessions. Cross-project discoveries transfer automatically via a shared log." },
  crossTransfer: { label: "Cross-Project Transfer", sub: "Shared discovery log", color: "#10B981", detail: "When an agent discovers something useful in one project, it exports the finding to a shared transfer log. Other projects pick it up automatically. A calibration technique from analytics improved the trading system. A quality gate from business ops got ported to every project." },
  morningBriefing: { label: "Morning Briefing", sub: "Auto-generated summary", color: "#F59E0B", detail: "Every morning I wake up to an auto-generated report: agent results, system vitals, immune alerts, world model updates, and prioritized recommendations. I review it, make decisions, and the loop restarts — informed and improved." },
};

type AINodeKey = keyof typeof AI_NODES;

function AISystemSection({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [expanded, setExpanded] = useState<AINodeKey | null>(null);

  const Node = ({ id, icon, size = "md" }: { id: AINodeKey; icon: React.ReactNode; size?: "lg" | "md" | "sm" }) => {
    const node = AI_NODES[id];
    const isOpen = expanded === id;
    const sizes = { lg: "w-20 h-20", md: "w-14 h-14", sm: "w-11 h-11" };
    const textSizes = { lg: "text-sm", md: "text-xs", sm: "text-[11px]" };
    const subSizes = { lg: "text-[10px]", md: "text-[9px]", sm: "text-[8px]" };

    return (
      <div className="flex flex-col items-center cursor-pointer group" onClick={() => setExpanded(isOpen ? null : id)}>
        <div
          className={`${sizes[size]} rounded-2xl flex items-center justify-center border transition-all duration-300 ${
            isOpen ? "scale-110 shadow-[0_0_25px_rgba(6,182,212,0.2)]" : "group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          }`}
          style={{
            background: `${node.color}10`,
            borderColor: isOpen ? `${node.color}60` : `${node.color}25`,
          }}
        >
          <div style={{ color: node.color }}>{icon}</div>
        </div>
        <div className={`mt-2 font-semibold text-white text-center ${textSizes[size]}`}>{node.label}</div>
        <div className={`text-slate-500 text-center ${subSizes[size]}`}>{node.sub}</div>
      </div>
    );
  };

  const Connector = ({ direction = "down", length = 8, color = "rgba(6,182,212,0.2)" }: { direction?: "down" | "split"; length?: number; color?: string }) => (
    <div className="flex flex-col items-center" aria-hidden="true">
      <div className="w-px" style={{ height: `${length * 4}px`, background: `linear-gradient(to bottom, ${color}, transparent)` }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
    </div>
  );

  const expandedNode = expanded ? AI_NODES[expanded] : null;

  return (
    <section ref={sectionRef} aria-label="AI System" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}>
      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6,182,212,0.05) 1px, transparent 0)", backgroundSize: "48px 48px" }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06), transparent 70%)", filter: "blur(120px)" }} />
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05), transparent 70%)", filter: "blur(100px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">Running Nightly</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            AI System Architecture
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            I don't just use AI — I architect autonomous systems that learn, adapt, and compound knowledge while I sleep.
          </p>
        </ScrollReveal>

        {/* Metrics */}
        <ScrollReveal className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: "28", label: "Autonomous Agents", color: "#06B6D4" },
              { value: "44", label: "Custom Skills", color: "#8B5CF6" },
              { value: "5", label: "Active Projects", color: "#10B981" },
              { value: "6,100+", label: "Automated Tests", color: "#F59E0B" },
            ].map((s) => (
              <div key={s.label} className="text-center py-4 px-3 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="text-xl md:text-2xl font-extrabold tracking-tight" style={{ color: s.color }}>{s.value}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Tap hint */}
        <div className="text-center mb-8">
          <span className="text-[10px] text-slate-600 uppercase tracking-widest">Click any node to explore</span>
        </div>

        {/* ===== TREE DIAGRAM ===== */}
        <ScrollReveal className="mb-8">
          <div className="flex flex-col items-center">

            {/* TIER 0: Spencer */}
            <Node id="spencer" icon={<span className="text-base font-bold">SG</span>} size="lg" />
            <Connector color="rgba(6,182,212,0.3)" />

            {/* TIER 1: Two branches — Daytime & Overnight */}
            <div className="w-full max-w-3xl">
              {/* Horizontal connector bar */}
              <div className="hidden md:block mx-auto h-px mb-0" style={{ width: "60%", background: "linear-gradient(to right, transparent, rgba(6,182,212,0.2) 20%, rgba(139,92,246,0.2) 80%, transparent)" }} aria-hidden="true" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* LEFT BRANCH: Daytime */}
                <div className="flex flex-col items-center">
                  <div className="px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 mb-4">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Daytime</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Node id="skillRouter" icon={<Terminal size={18} />} size="sm" />
                    <Node id="cliTools" icon={<Code2 size={18} />} size="sm" />
                    <Node id="sessionState" icon={<FileText size={18} />} size="sm" />
                  </div>
                </div>

                {/* RIGHT BRANCH: Overnight */}
                <div className="flex flex-col items-center">
                  <div className="px-4 py-2 rounded-lg border border-violet-500/20 bg-violet-500/5 mb-4">
                    <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Overnight</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Node id="orchestrator" icon={<BrainCircuit size={18} />} size="sm" />
                    <div className="flex gap-4">
                      <Node id="researchAgents" icon={<BookOpen size={16} />} size="sm" />
                      <Node id="buildAgents" icon={<GitBranch size={16} />} size="sm" />
                      <Node id="qaAgents" icon={<ClipboardCheck size={16} />} size="sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 2: Converge into Living System */}
            <Connector length={6} color="rgba(16,185,129,0.25)" />
            <div className="px-4 py-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 mb-4">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Living System</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-2">
              <Node id="immuneMemory" icon={<span className="text-sm">🛡️</span>} size="sm" />
              <Node id="vitalsMonitor" icon={<span className="text-sm">💓</span>} size="sm" />
              <Node id="worldModel" icon={<span className="text-sm">🌍</span>} size="sm" />
              <Node id="dreamCycle" icon={<span className="text-sm">🌙</span>} size="sm" />
              <Node id="crossTransfer" icon={<span className="text-sm">🔄</span>} size="sm" />
            </div>

            {/* TIER 3: Morning Briefing */}
            <Connector length={6} color="rgba(245,158,11,0.25)" />
            <Node id="morningBriefing" icon={<Presentation size={18} />} size="md" />

            {/* Loop back arrow */}
            <div className="flex flex-col items-center mt-4" aria-hidden="true">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <path d="M30 0 C30 25, 30 30, 30 35" stroke="rgba(6,182,212,0.2)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M24 30 L30 38 L36 30" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Spencer returns */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/15 to-violet-500/15 border border-cyan-400/20 flex items-center justify-center">
                <span className="text-xs font-bold text-cyan-300">SG</span>
              </div>
              <div className="mt-2 text-[10px] font-semibold text-slate-500">Loop restarts — informed & improved</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Expanded detail panel */}
        {expandedNode && expanded && (
          <div className="mb-12 transition-all duration-300">
            <div className="max-w-2xl mx-auto rounded-2xl border p-6" style={{ borderColor: `${expandedNode.color}25`, background: `${expandedNode.color}05` }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: expandedNode.color, boxShadow: `0 0 10px ${expandedNode.color}40` }} />
                  <h3 className="text-base font-bold text-white">{expandedNode.label}</h3>
                </div>
                <button onClick={() => setExpanded(null)} className="text-slate-500 hover:text-white transition-colors cursor-pointer">
                  <X size={16} />
                </button>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{expandedNode.detail}</p>
            </div>
          </div>
        )}

        {/* Bottom stats */}
        <div className="text-center mt-8">
          <p className="text-[10px] text-slate-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            167,000+ tool calls  •  runs every night at 2:35 AM  •  self-improving since March 2026
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

      for (const [key, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(key);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (key: string) => {
    sectionRefs[key as keyof typeof sectionRefs]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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

  useEffect(() => {
    const handleHeroScroll = () => {
      if (!heroRef.current || !heroContentRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const sectionHeight = heroRef.current.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -heroRect.top);
      const progress = sectionHeight > 0 ? Math.min(1, scrolled / sectionHeight) : 0;

      // Phase 1: Hero exit (0% - 50% of scroll)
      const heroExit = Math.min(1, progress / 0.5);
      // Phase 2: About enter (35% - 60% of scroll)
      const aboutEnter = Math.max(0, Math.min(1, (progress - 0.35) / 0.25));
      // Phase 3: About exit (75% - 100% of scroll)
      const aboutExit = Math.max(0, Math.min(1, (progress - 0.75) / 0.25));

      if (heroTextRef.current) {
        const textEl = heroTextRef.current.querySelector('[data-hero="text"]') as HTMLElement;
        const photoEl = heroTextRef.current.querySelector('[data-hero="photo"]') as HTMLElement;

        if (textEl) {
          // Text: stays sharp until 20%, blurs out by 50%
          const textProgress = Math.max(0, Math.min(1, (heroExit - 0.4) / 0.6));
          const textBlur = textProgress * 16;
          const textOpacity = Math.max(0, 1 - textProgress);
          const textX = -textProgress * 80;
          textEl.style.transform = `translateX(${textX}px)`;
          textEl.style.opacity = `${textOpacity}`;
          textEl.style.filter = textBlur > 0.5 ? `blur(${textBlur}px)` : "none";
        }

        if (photoEl) {
          // Photo: starts later, blurs out by 50%
          const photoProgress = Math.max(0, Math.min(1, (heroExit - 0.6) / 0.4));
          const photoBlur = photoProgress * 16;
          const photoOpacity = Math.max(0, 1 - photoProgress);
          const photoX = photoProgress * 60;
          photoEl.style.transform = `translateX(${photoX}px)`;
          photoEl.style.opacity = `${photoOpacity}`;
          photoEl.style.filter = photoBlur > 0.5 ? `blur(${photoBlur}px)` : "none";
        }
      }

      // About content fades in, then fades out before releasing
      if (aboutRevealRef.current) {
        if (aboutExit > 0) {
          // Phase 3: About fading out
          aboutRevealRef.current.style.opacity = `${1 - aboutExit}`;
          aboutRevealRef.current.style.transform = `translateY(${-aboutExit * 30}px)`;
        } else {
          // Phase 2: About fading in
          aboutRevealRef.current.style.opacity = `${aboutEnter}`;
          aboutRevealRef.current.style.transform = `translateY(${(1 - aboutEnter) * 40}px)`;
        }
        aboutRevealRef.current.style.pointerEvents = aboutEnter > 0.5 && aboutExit < 0.5 ? "auto" : "none";
      }

      // Scroll cue fade out
      if (scrollCueRef.current) {
        scrollCueRef.current.style.opacity = `${Math.max(0, 1 - progress * 4)}`;
      }

      // Hide the entire hero sticky container once we've scrolled past the hero section
      if (heroContentRef.current) {
        heroContentRef.current.style.opacity = scrolled >= sectionHeight ? "0" : "1";
        heroContentRef.current.style.pointerEvents = scrolled >= sectionHeight ? "none" : "auto";
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
        className="relative"
        style={{ minHeight: "280vh", background: "#f8fafc" }}
      >
        {/* Sticky container */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden z-10">
          <div
            ref={heroContentRef}
            className="w-full h-full flex flex-col items-center justify-center px-6 transition-none relative"
            style={{ background: "#f8fafc" }}
          >
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
                  <span className="font-medium text-foreground/70">From raw data to real results</span> — predictive models, automated systems, and analytics tools.
                </p>

                {/* CTA Buttons */}
                <div className="split-reveal flex items-center justify-center md:justify-start gap-4" style={{ animationDelay: "0.55s" }}>
                  <Button
                    size="lg"
                    onClick={() => scrollTo("projects")}
                    className="font-semibold tracking-tight cursor-pointer border-0"
                    style={{ background: "#06B6D4", color: "#f8fafc" }}
                  >
                    View My Work
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollTo("contact")}
                    className="font-semibold tracking-tight cursor-pointer text-foreground border-border hover:border-primary hover:bg-primary/5"
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
                  {/* Placeholder — replace src with actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center" role="img" aria-label="Spencer Goss — photo placeholder">
                    <span className="text-4xl text-gray-300 font-bold select-none" aria-hidden="true">SG</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll cue */}
            <div ref={scrollCueRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow text-muted-foreground/40 transition-opacity duration-100" aria-hidden="true" style={{ willChange: "opacity" }}>
              <ChevronDown size={28} />
            </div>

            {/* About content — fades in as hero fades out */}
            <div
              ref={aboutRevealRef}
              className="absolute inset-0 flex items-center justify-center px-6"
              style={{ opacity: 0, willChange: "opacity, transform", pointerEvents: "none" }}
            >
              <div className="max-w-6xl mx-auto w-full">
                {/* Split layout with vertical divider */}
                <div className="flex flex-col lg:flex-row items-start">

                  {/* Left — headline + statement */}
                  <div className="lg:w-2/5 lg:pr-12 mb-12 lg:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
                      About Me
                    </h2>
                    <Separator className="w-12 bg-primary h-0.5 mb-8" />
                    <p className="text-xl md:text-2xl font-semibold tracking-tight text-foreground/80 leading-snug mb-8">
                      Turning raw data into<br />
                      <span style={{ color: "#06B6D4" }}>real-world solutions</span>
                    </p>

                    {/* Quick facts */}
                    <div className="flex flex-col gap-3">
                      {[
                        { Icon: MapPin, value: "Louisville, KY" },
                        { Icon: GraduationCap, value: "MSBA, AI — UofL" },
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
                      I'm pursuing my MSBA at the University of Louisville with a concentration in AI. Outside of coursework, I'm usually building something — a prediction engine, an automated trading system, or whatever problem I'm trying to solve that week. I learn best by shipping real products, and every project sharpens how I approach data and decision-making.
                    </p>

                    {/* Detail grid with left accent borders */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { label: "Approach", value: "Research deeply, build deliberately, refine relentlessly", color: "#06B6D4" },
                        { label: "Strength", value: "Turning messy problems into working products", color: "#8B5CF6" },
                        { label: "Education", value: "MSBA (AI) — UofL, BBA (Finance, Marketing, Analytics) — UK", color: "#10B981" },
                        { label: "Experience", value: "Churchill Downs, Terex Corporation, Independent Projects", color: "#F59E0B" },
                      ].map((item, i) => (
                        <div key={i} className="pl-4" style={{ borderLeft: `2px solid ${item.color}` }}>
                          <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: item.color }}>{item.label}</div>
                          <div className="text-sm font-medium text-foreground leading-relaxed">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT (anchor for nav tracking) ===== */}
      <section ref={sectionRefs.about} className="relative" style={{ marginTop: "-1px" }}>
        <div className="h-1" />
      </section>

      {/* ===== PROJECTS ===== */}
      <section ref={sectionRefs.projects} aria-label="Featured Projects" className="py-24 md:py-32" style={{ background: "#FAFBFF" }}>
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
      <section ref={sectionRefs.skills} aria-label="Skills" className="section-alt min-h-screen flex items-center py-24 md:py-32">
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
                <BusinessSkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <ExperienceTimeline />

      {/* ===== EXPERIENCE SLIDES ===== */}
      <section ref={sectionRefs.experience} aria-label="Experience" className="relative" style={{ background: "#FAFBFF" }}>
        {/* Individual experience slides */}
        {EXPERIENCE.map((entry, i) => (
          <ExperienceSlide key={i} entry={entry} index={i} total={EXPERIENCE.length} />
        ))}
      </section>

      {/* ===== CONTACT ===== */}
      <section
        ref={sectionRefs.contact}
        aria-label="Contact"
        className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F1F5F9 0%, #f8fafc 40%, #FAFBFF 100%)",
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
            <p className="text-xs text-muted-foreground/50 mt-3">PDF • Updated March 2026</p>
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

          <p className="text-xs text-muted-foreground/40 mt-20">
            Built with React, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </section>
      </main>
    </>
  );
}
