/* Step-by-step write-ups for each project page (#/projects/<id>).
   Each project walks through the work in order: the problem, the data, the tools,
   how it was done, what came out of it. Images live in public/images/projects.
   Rules for this file: only claims Spencer can defend, no Oddsix accuracy numbers,
   MidwestCorp numbers are course-case numbers, no long dashes. */

export type Fig = { img: string; caption: string; alt?: string; tall?: boolean };
export type StepTable = { head: string[]; rows: string[][]; best?: number; note?: string };
export type Step = {
  label: string;
  title: string;
  body?: string;
  points?: string[];
  tools?: { name: string; use: string }[];
  figures?: Fig[];
  table?: StepTable;
  widget?: "churn" | "invoice" | "boxoffice";
  note?: string;
};

const P = "/images/projects/";

export const PROJECT_STEPS: Record<string, Step[]> = {
  "churn-model": [
    {
      label: "The problem",
      title: "Who's about to cancel, and why?",
      body: "This was a case competition in my MSBA program. A subscription business was losing customers and wanted three answers: who is likely to leave next, what is driving it, and where a retention team should spend its time first.",
    },
    {
      label: "The data",
      title: "5,636 customers in one flat file",
      body: "Each row was a customer: demographics, the services they paid for, their contract and billing, and whether they had left. About one in four had. To query it properly I also loaded it into a normalized SQLite database with five linked tables. Every number in the chart below comes from that database.",
      widget: "churn",
      note: "The first six months are where customers are lost. More than half of the newest customers left, against under 10% of customers past four years.",
    },
    {
      label: "What I used",
      title: "The tools and what each one did",
      tools: [
        { name: "Python and pandas", use: "Cleaning the data and getting the columns ready for modeling" },
        { name: "SQL (SQLite)", use: "A five-table database for the data and the group comparisons on this page" },
        { name: "scikit-learn", use: "Cross-validation, the Random Forest baseline and K-means clustering" },
        { name: "XGBoost, LightGBM, CatBoost", use: "The three gradient-boosted models I compared" },
        { name: "SHAP", use: "Explaining which way each factor pushes a single customer's risk" },
        { name: "Jupyter", use: "The full analysis, start to finish, in one notebook" },
      ],
    },
    {
      label: "How I solved it",
      title: "Four models, tuned the same way, tested once",
      body: "I trained four tree-based models on the same features and tuned each with cross-validation. Each was then scored one time on a held-out test set it had never seen, so the comparison is fair. CatBoost came out on top.",
      figures: [{ img: P + "churn-roc.webp", caption: "ROC curves for all four models on the test set" }],
      table: {
        head: ["Model", "Test AUC"],
        rows: [["CatBoost", "0.899"], ["XGBoost", "0.893"], ["LightGBM", "0.885"], ["Random Forest", "0.867"]],
        best: 0,
      },
    },
    {
      label: "What I found",
      title: "Contract, tenure and referrals drive it",
      body: "Feature importance shows what the model leans on. SHAP shows the direction: referrals and dependents pull customers toward staying, while month-to-month contracts and short tenure push them toward leaving.",
      figures: [
        { img: P + "churn-features.webp", caption: "Top 10 drivers in the CatBoost model" },
        { img: P + "churn-shap.webp", caption: "SHAP summary: each dot is one customer" },
      ],
    },
    {
      label: "What I'd tell the business",
      title: "Where a retention team should start",
      points: [
        "Start with new customers on month-to-month plans. That group leaves the most, and early onboarding is the cheapest time to keep them.",
        "Treat referrals as a retention tool, not only a marketing one. Customers who refer friends leave far less often.",
        "Give each of the three customer segments from K-means its own approach instead of one blanket offer.",
        "Use the model's scores as a ranked call list so the team starts with the customers most likely to leave.",
      ],
      note: "These are associations, not proof of cause. They show where to look first.",
    },
  ],

  "invoice-agent": [
    {
      label: "The problem",
      title: "1,200 invoices a month, keyed by hand",
      body: "My MSBA capstone. In the course case, MidwestCorp's two AP clerks key about 1,200 vendor invoices a month into NetSuite. That costs about $15,200 a month in labor and runs a 4 to 6% error rate from missed POs, duplicate payments and wrong amounts. Before my master's I spent a year in accounts payable at Churchill Downs, so this was a workflow I knew from the inside.",
      note: "MidwestCorp is the case company from the course. All dollar figures on this page come from that case, not a real deployment.",
    },
    {
      label: "The design",
      title: "Three agents, each with one job",
      body: "I built a single-agent prototype in Microsoft Copilot Studio, then split it into three agents. Each one gets its own tools and its own limits, so a mistake in one can't spread. None of them can approve or pay anything.",
      figures: [{ img: P + "invoice-agent-architecture.webp", caption: "The three-agent design, with the points where a person steps in" }],
      table: {
        head: ["Agent", "Job", "Can it change anything?"],
        rows: [
          ["1. Intake", "Read the PDF and pull out the fields", "No, read-only"],
          ["2. Triage", "Apply nine rules, label CLEAN or ESCALATED with every reason", "No, no tools at all"],
          ["3. Router", "Send the right notification", "Notifications only"],
        ],
      },
    },
    {
      label: "Try the rules",
      title: "Pick an invoice and watch it get triaged",
      body: "These are the nine escalation rules from my triage prompt. Pick a sample and they run right here.",
      widget: "invoice",
    },
    {
      label: "What I used",
      title: "The tools and what each one did",
      tools: [
        { name: "Microsoft Copilot Studio", use: "Built and tested the working prototype agent" },
        { name: "Prompt design", use: "A shared base prompt plus one prompt per agent, so each stage has clear rules" },
        { name: "NIST AI Risk Management Framework", use: "Structure for the governance plan: govern, map, measure, manage" },
        { name: "Claude", use: "Pressure-testing the design and drafting test cases from my rules (noted in the playbook)" },
      ],
    },
    {
      label: "Testing and governance",
      title: "How a team would know if it stopped working",
      points: [
        "40 test cases in four groups: normal invoices, edge cases, attacks (override requests, instructions hidden inside a PDF) and compliance checks. Run every week.",
        "An error ceiling of 1%, about 12 invoices a month, tied back to the dollar savings.",
        "A human escalation matrix with response times, and kill criteria for error rate, drift and clerks rubber-stamping the agent's work.",
        "Mapped to the NIST AI RMF, with an EU AI Act risk tier and the US rules that apply: SOX, 1099 reporting and OFAC sanctions screening.",
      ],
      figures: [
        { img: P + "invoice-playbook-p5.webp", caption: "Playbook p5: the evaluation plan", tall: true },
        { img: P + "invoice-playbook-p6.webp", caption: "Playbook p6: governance and the escalation matrix", tall: true },
      ],
    },
    {
      label: "The recommendation",
      title: "Deploy, with conditions",
      body: "A 30-day pilot at limited volume, expanding only after sanctions screening is tested end to end, clerks are trained to actually review the agent's work, and the test set passes every week.",
      table: {
        head: ["Monthly cost (case numbers)", "Today", "With the agent"],
        rows: [
          ["Clerk labor", "$15,200", "$3,800"],
          ["Errors that reach payment", "$3,000 to $4,500", "about $1,000"],
          ["API and compute", "$0", "$600"],
          ["Total", "$18,200 to $19,700", "$5,400"],
        ],
        note: "About $150,000 to $170,000 a year in savings at full volume, with payback in about two months.",
      },
      figures: [{ img: P + "invoice-playbook-p1.webp", caption: "Playbook p1: the recommendation and the business case", tall: true }],
    },
  ],

  "box-office": [
    {
      label: "The question",
      title: "Do films that earn more also rate higher?",
      body: "And do some genres or budget sizes show a steady gap between what a film earns and how audiences rate it? I wanted to answer that end to end, from raw API data to an app anyone can explore.",
    },
    {
      label: "The data",
      title: "5,659 films from the TMDB API",
      body: "Every film released from 2000 on with a real budget and revenue: runtime, audience rating, vote count and genres. A quality filter dropped 349 rows with placeholder budgets or streaming-only revenue. Netflix originals, for example, report token theater runs that would otherwise look like nine-figure flops.",
    },
    {
      label: "What I used",
      title: "The tools and what each one did",
      tools: [
        { name: "Python and the TMDB API", use: "A two-stage extract with retry and backoff" },
        { name: "pandas", use: "Cleaning and deriving profit, return, budget tier and decade" },
        { name: "PostgreSQL and SQLAlchemy", use: "A normalized (3NF) database with an idempotent load" },
        { name: "Dash and Plotly", use: "The interactive film explorer" },
        { name: "Render", use: "Hosting the live app" },
      ],
    },
    {
      label: "The pipeline",
      title: "One script, no manual steps",
      points: [
        "Extract: find films by year, then pull each film's financials.",
        "Transform: derive profit, return on budget, budget tier, hit or flop, and decade.",
        "Check: seven data-quality checks run before anything loads (nulls, duplicate keys, types, ranges, references, row counts). A critical failure stops the run.",
        "Load: upserts into PostgreSQL, so running it twice never duplicates a row.",
      ],
      figures: [{ img: P + "boxoffice-architecture.webp", caption: "TMDB API to ETL to PostgreSQL to the Dash app" }],
    },
    {
      label: "The answer",
      title: "Better-rated films earn far more",
      body: "Median return climbs with every step up in rating. Films rated under 5 lose money on a typical release; films rated 8 and up return more than five times their budget. Switch the view to see budget size and genre.",
      widget: "boxoffice",
      note: "Medians, not averages. A few micro-budget viral hits would pull any average way up.",
    },
    {
      label: "The app",
      title: "A film explorer anyone can use",
      body: "Search any film and get its full breakdown: poster, budget to revenue to profit, percentile ranks, and where it sits against every other film. Top-10 poster walls, head-to-head comparisons and filters for genre, decade and budget round it out.",
      figures: [
        { img: P + "boxoffice-film.webp", caption: "One film's full breakdown", tall: true },
        { img: P + "boxoffice-compare.webp", caption: "Two films head to head", tall: true },
        { img: P + "boxoffice-top.webp", caption: "Top-10 poster walls", tall: true },
        { img: P + "boxoffice-money.webp", caption: "What makes money", tall: true },
      ],
    },
  ],

  "chest-xray": [
    {
      label: "The problem",
      title: "One X-ray, up to 14 possible conditions",
      body: "A single chest X-ray can show several conditions at once, so this is a multi-label problem: the model gives a separate probability for each of 14 conditions. The goal was a model that is honest about how well it works and can show where it is looking.",
    },
    {
      label: "The data",
      title: "Why plain accuracy is the wrong score here",
      body: "The public NIH ChestX-ray14 dataset. Most images have no finding at all, and the conditions are very unbalanced. An average image is negative for 13.28 of the 14 conditions, so a model that always says \"nothing found\" looks highly accurate. That's why I scored everything on AUC instead.",
      figures: [
        { img: P + "xray-frequency.webp", caption: "How often each condition appears" },
        { img: P + "xray-findings.webp", caption: "Findings per image: most have none" },
        { img: P + "xray-cooccur.webp", caption: "Which conditions show up together" },
      ],
    },
    {
      label: "What I used",
      title: "The tools and what each one did",
      tools: [
        { name: "TensorFlow and Keras", use: "EfficientNetB0, pretrained on ImageNet, to turn each X-ray into 1,280 features" },
        { name: "scikit-learn", use: "Logistic regression, naive Bayes, k-NN, random forest and gradient boosting" },
        { name: "Grad-CAM", use: "Heat maps of where the model looked" },
        { name: "Streamlit", use: "A small app: upload an X-ray, get 14 probabilities and the heat map" },
        { name: "Google Colab", use: "Runs the whole notebook in a browser with no setup" },
      ],
    },
    {
      label: "How I solved it",
      title: "Eight models on the same image features",
      body: "Transfer learning turned every image into the same 1,280 features. I trained eight models on top, from a baseline to two neural networks, and scored them on macro AUC across all 14 conditions. Then I tuned a separate decision threshold for each condition to favor catching disease.",
      table: {
        head: ["Model", "Test macro AUC"],
        rows: [
          ["Neural network (512-256-14)", "0.729"],
          ["Neural network, deeper", "0.725"],
          ["Random forest", "0.703"],
          ["Naive Bayes", "0.686"],
        ],
        best: 0,
        note: "Tuned thresholds raised macro recall from 0.543 to 0.577.",
      },
    },
    {
      label: "Checking the result",
      title: "Two tests of how far to trust it",
      points: [
        "Patient-level split: the same patient can appear in many images. Re-splitting so no patient sits in both train and test gives 0.670 AUC, the more realistic number.",
        "Learning curve: test AUC rose from 0.619 with 1,000 training images to 0.712 with 15,000, so more data is the clearest next step.",
      ],
      figures: [{ img: P + "xray-learning.webp", caption: "Test AUC by number of training images" }],
    },
    {
      label: "Seeing inside it",
      title: "Where the model looked",
      body: "Grad-CAM lights up the parts of the image that drove a prediction. It shows when the model is looking in a sensible place, and when it isn't.",
      figures: [
        { img: P + "xray-gradcam-right.webp", caption: "Right: effusion, and the heat sits low in the chest where fluid collects" },
        { img: P + "xray-gradcam-wrong.webp", caption: "Off: true finding was infiltration, but the heat spreads across both lungs and it also flags nodule and mass" },
      ],
      note: "An educational project, not a medical device. Never for real diagnosis.",
    },
  ],

  oddsix: [
    {
      label: "Why I built it",
      title: "One place for the stats I actually care about",
      body: "I'm a big sports fan, especially basketball, and I wanted one place that combined real stats with real predictive modeling. It started as a way to compare players across eras and grew into a full site covering five leagues. I designed, built and run all of it.",
      figures: [{ img: P + "oddsix-home.webp", caption: "The home page, across every league" }],
    },
    {
      label: "The data",
      title: "Five leagues, 25+ years, updated all day",
      body: "League data feeds and public odds come in through the day and are validated on the way in. The site holds about 68,000 games and pages for about 57,000 players, with record books going back to each league's early years.",
      figures: [{ img: P + "oddsix-overview.webp", caption: "A league overview: tonight's games, last night's scores, standings and leaders" }],
    },
    {
      label: "What I used",
      title: "The tools and what each one did",
      tools: [
        { name: "Python and SQL", use: "The data pipeline, feature engineering and the databases" },
        { name: "scikit-learn and LightGBM", use: "A prediction model for each sport" },
        { name: "Astro", use: "A static site where one template serves every player page" },
        { name: "Cloudflare Pages and R2", use: "Hosting the site and storing the large archives" },
        { name: "AI coding tools", use: "How one person builds and maintains all of it, with tests on every change" },
      ],
    },
    {
      label: "How it works",
      title: "From raw feeds to a page",
      points: [
        "Ingest and validate each feed as it arrives.",
        "Engineer features like team strength, recent form, opponent-adjusted efficiency, rest and injuries.",
        "Run a separate model per sport, validated on seasons it never trained on, with calibrated probabilities.",
        "Rebuild the static site automatically when the data changes.",
      ],
    },
    {
      label: "Inside the site",
      title: "Teams, players and daily games",
      figures: [
        { img: P + "oddsix-team.webp", caption: "Team pages: record, splits, efficiency and roster" },
        { img: P + "oddsix-player.webp", caption: "Player pages: career stats, game logs and shot data" },
        { img: P + "oddsix-trivia.webp", caption: "Daily trivia games built on the same data" },
      ],
    },
    {
      label: "Where it's going",
      title: "A new generation of models",
      body: "A new generation of prediction models is in live testing this season. The site is live at oddsix.app.",
    },
  ],

  "agent-engineering": [
    {
      label: "The problem",
      title: "AI agents are fast, and confidently wrong",
      body: "AI coding agents can do real work quickly, but they also make mistakes with full confidence, and two agents agreeing doesn't make them right. I needed a way to use them on real projects without trusting every answer.",
    },
    {
      label: "The approach",
      title: "Route the work by its shape, then check it",
      points: [
        "Independent pieces go to parallel agents.",
        "Open design questions get several competing attempts and a judge panel picks the best.",
        "Simple, step-by-step work stays with one agent.",
        "Every result is checked by an independent reviewer that redoes the work rather than voting.",
        "Mistakes that repeat become written rules that are checked automatically next time.",
      ],
    },
    {
      label: "What I used",
      title: "The tools and what each one did",
      tools: [
        { name: "Claude Code", use: "The main agent I build with day to day" },
        { name: "Codex, Gemini CLI, Copilot", use: "Second opinions from different model families, so reviews are independent" },
        { name: "Prompt engineering", use: "Each skill is a structured prompt with triggers, hard rules and a method" },
        { name: "Git and GitHub", use: "Versioning the skills and publishing them" },
      ],
    },
    {
      label: "What's published",
      title: "Three patterns and eleven skills",
      body: "The patterns cover multi-agent orchestration, a multi-model review council and learned guardrails. The eleven skills cover code review, debugging, planning, testing, security review, refactoring and decision records. Each one is prompt-only, so it works in any compatible AI coding tool.",
    },
    {
      label: "Where it's used",
      title: "How I build everything else",
      body: "Oddsix, its data pipeline and front end, and my other projects are built with these workflows, with automated checks and tests gating each change before it ships.",
    },
  ],

  "financial-research-assistant": [
    {
      label: "The problem",
      title: "Financial data is easy to find and hard to read",
      body: "A cloud computing class project with a classmate. Researching one company means jumping between several sites, and most tools either dump raw numbers on you or tell you what to buy. We wanted something that just explains.",
    },
    {
      label: "How it works",
      title: "Ask about a company, get a plain-English report",
      body: "The user types a company or ticker. The agent calls the Finnhub API and gets back the price and daily change, the company profile, metrics like P/E ratio, revenue growth and profit margins, and recent headlines. Then the model writes a short report. Nothing is stored ahead of time; the data is pulled fresh every time.",
      figures: [{ img: P + "fra-azure.webp", caption: "The Azure setup: Foundry project, model, Agent Service, OpenAPI tool and stored connection" }],
    },
    {
      label: "What we used",
      title: "The tools and what each one did",
      tools: [
        { name: "Azure AI Foundry", use: "The project, the model deployment and the agent" },
        { name: "OpenAPI tool", use: "Lets the agent call the Finnhub API" },
        { name: "Finnhub API", use: "Live prices, company profiles, metrics and news" },
        { name: "Azure connection", use: "Stores the API key outside the agent's instructions" },
      ],
    },
    {
      label: "Responsible AI",
      title: "No made-up numbers, no buy or sell",
      points: [
        "Only numbers that came back from the API. A missing metric is reported as not available instead of guessed.",
        "Never says buy, sell or hold. Asked what to buy, it offers to walk through the metrics instead.",
        "Every report names its source, shows when the data was pulled, and ends with a disclaimer.",
      ],
      figures: [{ img: P + "fra-responsible.webp", caption: "The responsible AI rules built into the agent" }],
    },
  ],

  "msba-nba": [
    {
      label: "The problem",
      title: "Predict a game using only what's known before tip-off",
      body: "My MSBA 645 final. Game prediction is central to sports analytics, and the hard part is honesty: the model can only use information available before the game starts.",
    },
    {
      label: "The data",
      title: "About 10,500 games over five seasons",
      body: "Pulled from the NBA Stats API: 30 teams, five seasons, each row one team's game joined to its opponent and labeled with the result.",
    },
    {
      label: "What I used",
      title: "The tools and what each one did",
      tools: [
        { name: "Python and the NBA Stats API", use: "Pulling and joining five seasons of games" },
        { name: "pandas", use: "26 pre-game features: rolling form, home and away splits, matchup differences" },
        { name: "scikit-learn and LightGBM", use: "Logistic regression and gradient boosting, compared head to head" },
        { name: "K-means", use: "Grouping teams by play style" },
      ],
    },
    {
      label: "How I solved it",
      title: "Train on the past, test on the next season",
      body: "Models trained on earlier seasons and tested on the most recent one, the way they would be used for real. K-means grouped teams into four play styles (Elite Efficiency, Pace and Pressure, Rebuilding, Middle of the Pack), which picked up real franchise shifts across seasons.",
    },
    {
      label: "The result",
      title: "Simple won, and the clusters helped",
      body: "Logistic regression edged out LightGBM, and adding the play-style clusters as features added about 1.3 points of accuracy. The same pre-game approach and season-by-season testing became the foundation of the Oddsix models.",
    },
  ],
};
