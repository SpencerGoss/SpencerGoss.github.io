import { useState, useEffect, useRef, useCallback } from "react";
import {
  Mail,
  ExternalLink,
  Code2,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Database,
  Sparkles,
  Bot,
  BarChart3,
  FlaskConical,
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
    title: "Oddsix",
    subtitle: "NBA Analytics Platform",
    description:
      "Full-stack NBA prediction engine with 390+ ML features, 72.6% model accuracy, and a live analytics dashboard. 5-model ensemble with Bayesian weight optimization and Monte Carlo uncertainty.",
    tags: ["Python", "Machine Learning", "Plotly", "GitHub Pages"],
    url: "https://oddsix.app",
    github: "https://github.com/SpencerGoss/nba-analytics-project",
    metrics: [
      { value: "72.6%", label: "Accuracy" },
      { value: "82-31", label: "Record" },
      { value: "+7.9%", label: "ROI" },
    ],
    gradient: "from-[#0a0e1a] via-[#0D1326] to-[#161B2A]",
    accent: "#00C896",
    domain: "oddsix.app",
  },
  {
    title: "Trading Bot",
    subtitle: "Automated Trading System",
    description:
      "Algorithmic trading system with real-time risk management, circuit breakers, and multi-strategy signal processing. Automated execution with position sizing, drawdown limits, and audit logging.",
    tags: ["Python", "Risk Management", "APIs", "Automation"],
    url: "#",
    github: "#",
    metrics: [
      { value: "24/7", label: "Automated" },
      { value: "Multi", label: "Strategies" },
      { value: "Live", label: "Risk Mgmt" },
    ],
    gradient: "from-[#0F172A] via-[#1a1f35] to-[#1E293B]",
    accent: "#8B5CF6",
    domain: "automated-trading",
  },
  {
    title: "DevToolbox",
    subtitle: "AI Developer Tools Blog",
    description:
      "Content platform reviewing and comparing AI-powered developer tools. Hugo static site with automated content pipeline, SEO-optimized architecture, and category-driven navigation.",
    tags: ["Hugo", "SEO", "Content Pipeline", "Cloudflare"],
    url: "https://devtoolbox-blog.pages.dev",
    github: "#",
    metrics: [
      { value: "15+", label: "Articles" },
      { value: "3", label: "Categories" },
      { value: "Auto", label: "Pipeline" },
    ],
    gradient: "from-[#0F172A] via-[#162033] to-[#1E293B]",
    accent: "#0891B2",
    domain: "devtoolbox-blog.pages.dev",
  },
  {
    title: "CLV Predictor",
    subtitle: "Customer Analytics Capstone",
    description:
      "Predictive customer lifetime value model using gradient-boosted ensembles. Business analytics capstone applying ML to real-world marketing optimization and customer segmentation.",
    tags: ["Python", "scikit-learn", "Tableau", "SQL"],
    url: "#",
    github: "#",
    metrics: [
      { value: "94%", label: "Accuracy" },
      { value: "CLV", label: "Model" },
      { value: "$2.1M", label: "Impact" },
    ],
    gradient: "from-[#1E3A5F] via-[#1E4578] to-[#2563EB]",
    accent: "#F59E0B",
    domain: "capstone-project",
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

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const revealRef = useScrollReveal();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current || !wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cardRef.current.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  }, []);

  return (
    <div
      ref={(el) => {
        (wrapperRef as any).current = el;
        (revealRef as any).current = el;
      }}
      className="scroll-reveal project-card-wrapper"
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className="project-card-tilt">
        <div className="browser-mockup group cursor-pointer">
          {/* Browser chrome */}
          <div className="browser-chrome">
            <div className="browser-dots">
              <div className="browser-dot" style={{ background: "#FF5F57" }} />
              <div className="browser-dot" style={{ background: "#FEBC2E" }} />
              <div className="browser-dot" style={{ background: "#28C840" }} />
            </div>
            <div className="browser-url">{project.domain}</div>
          </div>

          {/* Screenshot area */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
            <div
              className={`screenshot-area absolute inset-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center`}
            >
              <div
                className="text-3xl font-bold tracking-tight mb-2"
                style={{ color: project.accent }}
              >
                {project.title}
              </div>
              <div className="text-white/50 text-sm font-medium">{project.subtitle}</div>

              {/* Decorative elements */}
              <div
                className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20"
                style={{ background: project.accent, filter: "blur(20px)" }}
              />
              <div
                className="absolute bottom-4 left-4 w-32 h-1 rounded-full opacity-30"
                style={{ background: project.accent }}
              />

              {/* Fake UI lines */}
              <div className="absolute top-8 left-6 space-y-2">
                <div className="w-16 h-1.5 rounded bg-white/10" />
                <div className="w-24 h-1.5 rounded bg-white/5" />
              </div>
            </div>

            {/* Glass overlay on hover */}
            <div className="glass-overlay absolute inset-0 flex flex-col justify-end p-5">
              <p className="text-sm text-foreground/80 leading-relaxed mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex gap-3 mb-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-sm font-bold" style={{ color: project.accent }}>
                      {m.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    View Live <ArrowUpRight size={12} />
                  </a>
                )}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-border hover:bg-secondary transition-colors"
                  >
                    <Code2 size={12} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Card footer */}
          <div className="bg-white p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-foreground tracking-tight text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.subtitle}</p>
              </div>
              {project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors mt-1"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-[10px] font-medium tracking-wide uppercase"
                >
                  {tag}
                </Badge>
              ))}
            </div>
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
  const [navShrunk, setNavShrunk] = useState(false);

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

  useEffect(() => {
    const handleHeroScroll = () => {
      if (!heroRef.current || !mediaCardRef.current || !heroContentRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const sectionHeight = heroRef.current.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -heroRect.top);
      const progress = sectionHeight > 0 ? Math.min(1, scrolled / sectionHeight) : 0;

      // Card width: 70% -> 100%
      const cardWidth = 70 + progress * 30;
      mediaCardRef.current.style.width = `${cardWidth}%`;
      if (progress > 0.5) {
        mediaCardRef.current.style.maxWidth = "none";
      } else {
        mediaCardRef.current.style.maxWidth = "";
      }

      // Border radius: 16px -> 0px
      const borderRadius = 16 * (1 - progress);
      mediaCardRef.current.style.borderRadius = `${borderRadius}px`;

      // Hero text fade out and move up
      if (heroTextRef.current) {
        const textOpacity = Math.max(0, 1 - progress * 2.5);
        const textTranslate = -progress * 50;
        heroTextRef.current.style.opacity = `${textOpacity}`;
        heroTextRef.current.style.transform = `translateY(${textTranslate}px)`;
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

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navShrunk ? "py-2 nav-glass" : "py-4"
        }`}
        style={navShrunk ? {} : { background: "transparent" }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-bold tracking-tight text-lg hover:text-primary transition-colors cursor-pointer text-foreground"
          >
            SG<span className="text-primary">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === key
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-white/95 backdrop-blur-lg">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-left px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors cursor-pointer"
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
        style={{ minHeight: "200vh", background: "#f8fafc" }}
      >
        {/* Sticky container */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden z-10">
          <div
            ref={heroContentRef}
            className="w-full h-full flex flex-col items-center justify-center px-6 transition-none"
            style={{ background: "#f8fafc" }}
          >
            {/* Hero text content */}
            <div ref={heroTextRef} className="text-center mb-12 transition-all duration-100" style={{ willChange: "opacity, transform" }}>
              {/* Status badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-muted-foreground">Open to opportunities</span>
                </div>
              </div>

              {/* Name */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-none mb-4 fade-in">
                Spencer Goss
              </h1>

              {/* Subtitle pills */}
              <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">Business Analyst</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">MSBA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-base md:text-lg font-semibold text-muted-foreground tracking-tight">AI Concentration</span>
              </div>

              {/* Tagline */}
              <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10">
                Turning data and hard problems into things that actually work.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center justify-center gap-4">
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

            {/* Media card - light theme, expands on scroll */}
            <div
              ref={mediaCardRef}
              className="w-[70%] bg-white border border-border rounded-[16px] shadow-md overflow-hidden transition-none"
              style={{ willChange: "width, border-radius" }}
            >
              {/* Browser chrome bar - light */}
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                </div>
                <div className="flex-1 ml-2">
                  <div className="text-xs text-gray-500 font-medium">spencergoss.com</div>
                </div>
              </div>

              {/* Stat cards inside */}
              <div className="p-8 flex items-center justify-center gap-6">
                {STATS.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                      <span className="gradient-text">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll cue */}
            <div ref={scrollCueRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow text-muted-foreground/40 transition-opacity duration-100" style={{ willChange: "opacity" }}>
              <ChevronDown size={28} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section ref={sectionRefs.about} className="section-alt min-h-screen flex items-center py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={aboutReveal} className="scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
              About Me
            </h2>
            <Separator className="w-12 bg-primary h-0.5 mb-10" />

            {/* Stat cards row */}
            <div className="grid grid-cols-3 gap-3 mb-10 max-w-md">
              {STATS.map((stat, i) => (
                <StatCard key={i} {...stat} />
              ))}
            </div>

            {/* Bio text — professional but approachable */}
            <div className="max-w-3xl mb-10">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                I'm a business analytics graduate student at the University of Louisville with a concentration in Artificial Intelligence. My background spans finance, marketing, and operations — and I've spent the last few years applying that mix to build data-driven solutions that deliver measurable results.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                At Churchill Downs, I introduced AI-powered invoice analysis that improved processing speed and accuracy across 10+ properties. Before that, I streamlined warehouse operations at Terex by adopting new systems and earning certifications to reduce turnaround time. I look for inefficiencies, and I fix them.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Outside of work and school, I build things. A full-stack ML prediction platform, automated trading systems with risk management, and AI-powered content pipelines. I learn best by shipping real products — and each one sharpens how I think about data, automation, and problem-solving.
              </p>
            </div>

            {/* Quick facts card */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { label: "Currently", value: "MSBA, AI Concentration — University of Louisville" },
                  { label: "Degree", value: "BBA Finance, Marketing & Analytics — University of Kentucky" },
                  { label: "Based in", value: "Louisville, KY" },
                  { label: "Looking for", value: "Business Analyst & Data Analyst roles" },
                  { label: "Industries", value: "Entertainment, Manufacturing, Real Estate" },
                  { label: "Focus", value: "ML, Automation & Process Optimization" },
                ].map((fact, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{fact.label}</div>
                      <div className="text-sm font-medium text-foreground">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section ref={sectionRefs.projects} className="min-h-screen flex items-center py-24 md:py-32" style={{ background: "#FAFBFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-2">
              Featured Projects
            </h2>
            <Separator className="w-12 bg-primary h-0.5 mb-4" />
            <p className="text-muted-foreground">
              Real projects, real data, real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
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
