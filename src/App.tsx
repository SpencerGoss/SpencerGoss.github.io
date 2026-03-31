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
  BarChart3,
  FlaskConical,
  Search,
  Target,
  RefreshCw,
  Rocket,
  MapPin,
  GraduationCap,
  Briefcase,
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
      { value: 350, suffix: "+", label: "Articles Published" },
      { value: 38, suffix: "", label: "Tools Reviewed" },
      { value: 3, suffix: "", label: "Content Types" },
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

/* Tech skills — Simple Icons CDN for brands, Lucide icons for generic concepts */
type TechSkill = { name: string; category: string } & (
  | { icon: string; LucideIcon?: never }
  | { icon?: never; LucideIcon: React.ComponentType<{ className?: string; size?: number }>; iconColor: string }
);

const TECH_SKILLS: TechSkill[] = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", category: "Languages" },
  { name: "SQL", LucideIcon: Database, iconColor: "#4053D6", category: "Languages" },
  { name: "R", icon: "https://cdn.simpleicons.org/r/276DC3", category: "Languages" },
  { name: "Claude AI", icon: "https://cdn.simpleicons.org/anthropic/191919", category: "AI & Automation" },
  { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/412991", category: "AI & Automation" },
  { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/000000", category: "AI & Automation" },
  { name: "Prompt Engineering", LucideIcon: Sparkles, iconColor: "#E8413C", category: "AI & Automation" },
  { name: "AI Agents", LucideIcon: Bot, iconColor: "#00B0D8", category: "AI & Automation" },
  { name: "RapidMiner", icon: "https://cdn.simpleicons.org/rapidminer/F47920", category: "Analytics" },
  { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau/E97627", category: "Visualization" },
  { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi/F2C811", category: "Visualization" },
  { name: "JMP", LucideIcon: FlaskConical, iconColor: "#1E6FBA", category: "Analytics" },
  { name: "SPSS", LucideIcon: BarChart3, iconColor: "#1F70C1", category: "Analytics" },
  { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel/217346", category: "Tools" },
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853", category: "Tools" },
  { name: "PowerPoint", icon: "https://cdn.simpleicons.org/microsoftpowerpoint/B7472A", category: "Tools" },
  { name: "Word", icon: "https://cdn.simpleicons.org/microsoftword/2B579A", category: "Tools" },
  { name: "SAP", icon: "https://cdn.simpleicons.org/sap/0FAAFF", category: "Tools" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", category: "Tools" },
];

/* Text-based business & professional skills */
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
  "Business Strategy",
  "Process Improvement",
  "Cross-functional Collaboration",
  "Project Management",
  "Problem Solving",
  "Team Leadership",
  "Research & Synthesis",
  "Time Management",
  "Attention to Detail",
  "Adaptability",
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
    logo: "https://logo.clearbit.com/louisville.edu",
    color: "#AD0000",
    gradient: "from-[#AD0000] to-[#D32F2F]",
    year: "2025",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Grawemeyer_Hall_-_University_of_Louisville_-_IMG_3845.jpg/1280px-Grawemeyer_Hall_-_University_of_Louisville_-_IMG_3845.jpg",
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
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&q=80",
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
    logo: "https://logo.clearbit.com/churchilldowns.com",
    color: "#1B5E20",
    gradient: "from-[#1B5E20] to-[#388E3C]",
    year: "2024",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Churchill_Downs%2C_Louisville%2C_Kentucky_%2814381476265%29.jpg/1280px-Churchill_Downs%2C_Louisville%2C_Kentucky_%2814381476265%29.jpg",
  },
  {
    title: "BBA — Finance, Marketing & Business Analytics",
    org: "University of Kentucky",
    location: "Lexington, KY",
    period: "Aug 2020 — Mar 2024",
    description: "Bachelor of Business Administration in Finance, Marketing, and Business Analytics. Built a strong foundation in quantitative analysis, business strategy, and data-driven decision making.",
    details: [
      "Triple focus in Finance, Marketing, and Business Analytics — combining quantitative and strategic skills",
      "Developed strong foundations in data analysis, financial modeling, and marketing analytics",
      "Coursework in Business Analytics Strategy, Data Mining, and applied quantitative methods",
      "Active member of Delta Tau Delta fraternity",
    ],
    highlights: ["Finance & Marketing", "Business Analytics", "Delta Tau Delta"],
    type: "education" as const,
    logo: "https://logo.clearbit.com/uky.edu",
    color: "#0033A0",
    gradient: "from-[#001F6D] to-[#0033A0]",
    year: "2020",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Main_Building_2_%28University_of_Kentucky%29.jpg/1280px-Main_Building_2_%28University_of_Kentucky%29.jpg",
  },
  {
    title: "Warehouse Associate",
    org: "Terex Corporation",
    location: "Louisville, KY",
    period: "May 2020 — Aug 2023",
    description: "Coordinated shipping and receiving operations for a global manufacturer. Monitored 100+ packages daily, trained new hires, and earned forklift certification to increase efficiency.",
    details: [
      "Coordinated with warehouse staff, management, and transporters to resolve delivery disputes and ensure steady operations",
      "Monitored 100+ packages daily for safety, correct location, and timeliness to meet quotas",
      "Trained new hires in day-to-day operations and served as a go-to resource for the team",
      "Acquired forklift certification and learned shipping software to improve efficiency and reduce turnaround time",
    ],
    highlights: ["100+ Packages Daily", "Team Training", "Forklift Certified"],
    type: "work" as const,
    logo: "https://logo.clearbit.com/terex.com",
    color: "#1565C0",
    gradient: "from-[#0D47A1] to-[#1565C0]",
    year: "2020",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80",
  },
  {
    title: "High School Diploma",
    org: "Saint Xavier High School",
    location: "Louisville, KY",
    period: "2016 — 2020",
    description: "All-boys Catholic preparatory high school. One of the top academic institutions in Louisville, established in 1864.",
    details: [
      "Attended one of Louisville's top college preparatory institutions, established in 1864",
      "Built foundational academic discipline and work ethic in a rigorous academic environment",
    ],
    highlights: ["College Preparatory", "Louisville, KY"],
    type: "education" as const,
    logo: "https://logo.clearbit.com/saintx.com",
    color: "#6A1B9A",
    gradient: "from-[#4A148C] to-[#6A1B9A]",
    year: "2016",
    bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop&q=80",
  },
];

const STATS = [
  { value: 4, suffix: "+", label: "Live Projects" },
  { value: 2, suffix: "", label: "Degrees" },
  { value: 3, suffix: "", label: "Industries" },
];

const NAV_ITEMS = [
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
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

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="counter-card bg-white border border-border rounded-xl p-6 text-center cursor-default">
      <div className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {count}
        <span className="gradient-text">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground mt-1 font-medium">{label}</div>
    </div>
  );
}

function BentoCard({ project, onClick }: { project: typeof PROJECTS[0]; onClick: () => void }) {
  const revealRef = useScrollReveal();

  if (project.featured) {
    return (
      <div
        ref={revealRef}
        className="scroll-reveal bento-card bento-featured"
        onClick={onClick}
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

          <div className="my-4 rounded-xl border border-border bg-secondary/50 h-20 flex items-center justify-center">
            <span className="text-xs text-muted-foreground/40">[ screenshot ]</span>
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
      <div className="bento-col-left">
        <BentoCard project={oddsix} onClick={() => onSelectProject("oddsix")} />
      </div>
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
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

          <div className="bg-white border border-border rounded-xl h-32 md:h-48 flex items-center justify-center shadow-sm mb-6">
            <span className="text-sm text-muted-foreground/40">[ hero screenshot ]</span>
          </div>

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

        <div className="bg-white border border-border rounded-xl h-24 md:h-32 flex items-center justify-center shadow-sm mb-10">
          <span className="text-sm text-muted-foreground/40">[ additional screenshot ]</span>
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
      </div>
    </div>
  );
}

function TechIcon({ skill }: { skill: TechSkill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="tech-icon-card relative group flex flex-col items-center justify-center bg-white border border-border rounded-xl w-20 h-20 cursor-default transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {skill.icon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      ) : (
        <skill.LucideIcon
          size={32}
          className="transition-transform duration-300 group-hover:scale-110"
          style={{ color: skill.iconColor }}
        />
      )}
      {/* Tooltip — positioned above to avoid clipping between rows */}
      <div
        className={`absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-foreground text-background text-[11px] font-medium whitespace-nowrap transition-all duration-200 pointer-events-none z-10 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {skill.name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
      </div>
    </div>
  );
}

const ABOUT_TRAITS: { word: string; description: string; color: string; Icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { word: "curiosity", description: "I start by understanding the full picture — the context, the constraints, and what success actually looks like.", color: "#06B6D4", Icon: Search },
  { word: "deliberate", description: "Every decision is researched and pressure-tested. I don't commit to an approach until I'm confident it's the right one.", color: "#8B5CF6", Icon: Target },
  { word: "never settled", description: "I refine until the work meets a high standard — not just until it functions.", color: "#F59E0B", Icon: RefreshCw },
  { word: "builder", description: "I go beyond analysis to ship real products — prediction engines, trading systems, and automation tools.", color: "#10B981", Icon: Rocket },
];

function TraitWord({ trait }: { trait: typeof ABOUT_TRAITS[0] }) {
  const [active, setActive] = useState(false);
  return (
    <span className="relative inline-block">
      <button
        className="trait-keyword font-bold cursor-pointer border-b-2 border-dashed transition-all duration-200"
        style={{ color: trait.color, borderColor: active ? trait.color : `${trait.color}40` }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => setActive(!active)}
      >
        {trait.word}
      </button>
      <div
        className="absolute left-0 top-full mt-3 z-20 transition-all duration-300 pointer-events-none"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        <div className="flex items-start gap-3 px-5 py-4 rounded-xl shadow-lg border border-border/50 w-72" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${trait.color}15` }}>
            <trait.Icon size={16} style={{ color: trait.color }} />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{trait.description}</p>
        </div>
      </div>
    </span>
  );
}

function BusinessSkillPill({ skill }: { skill: string }) {
  return (
    <div className="skill-badge inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 cursor-default text-sm font-medium text-foreground hover:border-primary/30 hover:shadow-sm transition-all duration-200">
      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      {skill}
    </div>
  );
}

/* Full-viewport experience slide — full-screen bg image + glass card */
function ExperienceSlide({ entry, index, total }: { entry: typeof EXPERIENCE[0]; index: number; total: number }) {
  const slideRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
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

  return (
    <div
      ref={slideRef}
      className="exp-slide relative"
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
            style={{ opacity: imgLoaded ? 1 : 0 }}
            loading="lazy"
          />
        )}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Extra gradient at bottom for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* ---- Slide number indicator ---- */}
      <div className="absolute top-6 right-8 z-20 hidden md:flex items-center gap-2">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className="transition-all duration-500"
            style={{
              width: i === index ? 24 : 6,
              height: 6,
              borderRadius: 3,
              background: i === index ? "#fff" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
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

      {/* Scroll hint on first slide */}
      {index === 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow text-white/30 hidden md:block">
          <ChevronDown size={24} />
        </div>
      )}
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
                  <img src={entry.logo} alt={entry.org} className="w-5 h-5 rounded object-contain" loading="lazy" />
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

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
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
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation — floating pill */}
      <nav
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
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && navShrunk && (
          <div className="pointer-events-auto absolute top-16 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-lg border border-border/50 shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map(({ key, label }) => (
                <button
                  key={key}
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
      <section
        ref={heroRef}
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
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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
                <div className="absolute -inset-6 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)", filter: "blur(40px)" }} />
                <div
                  ref={mediaCardRef}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-white/50"
                >
                  {/* Placeholder — replace src with actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-4xl text-gray-300 font-bold select-none">SG</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll cue */}
            <div ref={scrollCueRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow text-muted-foreground/40 transition-opacity duration-100" style={{ willChange: "opacity" }}>
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
      <section ref={sectionRefs.projects} className="py-24 md:py-32" style={{ background: "#FAFBFF" }}>
        {selectedProject ? (
          <CaseStudy
            project={PROJECTS.find((p) => p.id === selectedProject)!}
            onBack={() => {
              setSelectedProject(null);
              setTimeout(() => {
                sectionRefs.projects.current?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
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

      {/* ===== SKILLS ===== */}
      <section ref={sectionRefs.skills} className="section-alt min-h-screen flex items-center py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={skillsReveal} className="scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
              Skills & Tech Stack
            </h2>
            <Separator className="w-12 bg-primary h-0.5 mb-6" />
            <p className="text-muted-foreground mb-12">
              Tools I use and skills I bring to the table.
            </p>
          </div>

          {/* Tech tools logo grid */}
          <div className="mb-16">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-4 pt-10 pb-4">
              {TECH_SKILLS.map((skill) => (
                <TechIcon key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Business & Professional skills */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Business & Professional
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {BUSINESS_SKILLS.map((skill) => (
                <BusinessSkillPill key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <ExperienceTimeline />

      {/* ===== EXPERIENCE SLIDES ===== */}
      <section ref={sectionRefs.experience} className="relative" style={{ background: "#FAFBFF" }}>
        {/* Individual experience slides */}
        {EXPERIENCE.map((entry, i) => (
          <ExperienceSlide key={i} entry={entry} index={i} total={EXPERIENCE.length} />
        ))}
      </section>

      {/* ===== CONTACT ===== */}
      <section
        ref={sectionRefs.contact}
        className="min-h-screen flex items-center py-24 md:py-32"
        style={{
          background: "linear-gradient(180deg, #F1F5F9 0%, #FAFBFF 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
            Let's Connect
          </h2>
          <Separator className="w-12 bg-primary h-0.5 mx-auto mb-6" />
          <p className="text-muted-foreground mb-10 text-lg">
            Interested in working together? I'd love to hear from you.
          </p>

          <div className="flex items-center justify-center gap-4">
            <ContactButton
              href="https://linkedin.com/in/spencergoss1234"
              icon={<Linkedin size={22} />}
              label="LinkedIn"
            />
            <ContactButton
              href="https://github.com/SpencerGoss"
              icon={<Github size={22} />}
              label="GitHub"
            />
            <ContactButton
              href="mailto:spencer.goss@outlook.com"
              icon={<Mail size={22} />}
              label="Email"
            />
          </div>

          <p className="text-xs text-muted-foreground/60 mt-16">
            Built with React, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </section>
    </>
  );
}
