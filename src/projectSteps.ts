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
  stats?: { value: string; label: string }[];
  flow?: { name: string; does: string; limit: string }[];
  flowLabel?: string;
  body?: string;
  pointsTitle?: string;
  points?: string[];
  links?: { label: string; href: string }[];
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
      stats: [
        { value: "5,636", label: "customers" },
        { value: "1 in 4", label: "had already left" },
        { value: "0.899", label: "best model AUC" },
      ],
      body: "A case competition in my MSBA program. The company wanted to know who would leave next, why, and where its retention team should start.",
    },
    {
      label: "The data",
      title: "Where customers leave",
      body: "I loaded the customer file into a small SQL database so I could slice it different ways. Click through the groups.",
      widget: "churn",
      note: "The first six months are the danger zone. More than half of the newest customers left, compared with under 10% of customers past four years.",
    },
    {
      label: "How I did it",
      title: "Clean, model, explain, segment",
      flow: [
        { name: "Clean", does: "Fixed gaps and odd values and got the columns ready to model.", limit: "pandas" },
        { name: "Model", does: "Trained four models, tuned each the same way, and tested each once on held-out data.", limit: "CatBoost, XGBoost, LightGBM, RF" },
        { name: "Explain", does: "Looked at which way each factor pushes a single customer's risk.", limit: "SHAP" },
        { name: "Segment", does: "Split customers into three groups that need different approaches.", limit: "K-means" },
      ],
      figures: [{ img: P + "churn-roc.webp", caption: "All four models on the test set" }],
      table: {
        head: ["Model", "Test AUC"],
        rows: [["CatBoost", "0.899"], ["XGBoost", "0.893"], ["LightGBM", "0.885"], ["Random Forest", "0.867"]],
        best: 0,
      },
    },
    {
      label: "What I used",
      title: "Tools",
      tools: [
        { name: "Python and pandas", use: "Cleaning and prepping the data" },
        { name: "SQL (SQLite)", use: "A five-table database and the group numbers on this page" },
        { name: "scikit-learn", use: "Cross-validation, Random Forest and K-means" },
        { name: "XGBoost, LightGBM, CatBoost", use: "The three boosted models" },
        { name: "SHAP", use: "Explaining individual predictions" },
      ],
    },
    {
      label: "What I found",
      title: "Contract, tenure and referrals drive it",
      body: "Referrals and dependents pull customers toward staying. Month-to-month contracts and short tenure push them out.",
      figures: [
        { img: P + "churn-features.webp", caption: "Top 10 drivers in the CatBoost model" },
        { img: P + "churn-shap.webp", caption: "SHAP: each dot is one customer" },
      ],
    },
    {
      label: "What I'd tell them",
      title: "Where to start",
      points: [
        "Focus on new month-to-month customers. They leave the most, and early on is the cheapest time to keep them.",
        "Use referrals to keep customers, not just to find new ones.",
        "Give each of the three segments its own offer.",
        "Work the model's scores as a call list, highest risk first.",
      ],
      note: "These show what goes along with churn, not proof of what causes it.",
    },
  ],

  "box-office": [
    {
      label: "The question",
      title: "Do films that earn more also rate higher?",
      stats: [
        { value: "5,659", label: "films" },
        { value: "7", label: "data-quality checks" },
        { value: "3NF", label: "PostgreSQL database" },
      ],
      body: "I wanted to answer it end to end: pull the raw data, build a clean database, and put an app on top that anyone can explore.",
    },
    {
      label: "How it's built",
      title: "One script, start to finish",
      flow: [
        { name: "Extract", does: "Pulls every film from 2000 on, then each film's budget and revenue.", limit: "TMDB API" },
        { name: "Transform", does: "Works out profit, return on budget, budget tier and decade.", limit: "pandas" },
        { name: "Check", does: "Runs seven quality checks. A serious failure stops the run.", limit: "Python" },
        { name: "Load", does: "Writes to the database so a rerun never duplicates a row.", limit: "PostgreSQL" },
      ],
      body: "The quality filter dropped 349 films with placeholder budgets or streaming-only revenue. Netflix originals, for example, report tiny theater runs and would otherwise look like huge flops.",
      links: [{ label: "See the architecture diagram", href: P + "boxoffice-architecture.webp" }],
    },
    {
      label: "The answer",
      title: "Yes. Better-rated films earn far more",
      body: "The typical film rated under 5 loses money. The typical film rated 8 or higher makes back more than five times its budget. Switch the view to see budget size and genre.",
      widget: "boxoffice",
      note: "These are medians. A few tiny-budget viral hits would throw off an average.",
    },
    {
      label: "The app",
      title: "A film explorer anyone can use",
      body: "Search any film for its full breakdown, compare two films head to head, or browse the top 10 lists.",
      figures: [
        { img: P + "boxoffice-film.webp", caption: "One film's breakdown", tall: true },
        { img: P + "boxoffice-compare.webp", caption: "Two films head to head", tall: true },
        { img: P + "boxoffice-top.webp", caption: "Top 10 poster walls", tall: true },
        { img: P + "boxoffice-money.webp", caption: "What makes money", tall: true },
      ],
      links: [{ label: "Open the live app (can take a minute to wake up)", href: "https://box-office-vs-ratings.onrender.com" }],
    },
    {
      label: "What I used",
      title: "Tools",
      tools: [
        { name: "Python and the TMDB API", use: "Pulling the data, with retries when a call fails" },
        { name: "pandas", use: "Cleaning and building the new columns" },
        { name: "PostgreSQL and SQLAlchemy", use: "The database and the load" },
        { name: "Dash and Plotly", use: "The interactive app" },
        { name: "Render", use: "Hosting the live app" },
      ],
    },
  ],

  "chest-xray": [
    {
      label: "The problem",
      title: "One X-ray, 14 possible conditions",
      stats: [
        { value: "14", label: "conditions" },
        { value: "8", label: "models compared" },
        { value: "0.729", label: "best macro AUC" },
      ],
      body: "One chest X-ray can show several conditions at once, so the model gives a separate probability for each one. I also wanted it to show where it was looking.",
    },
    {
      label: "The data",
      title: "Most X-rays show nothing",
      body: "I used the public NIH ChestX-ray14 dataset. The average image is negative for 13.28 of the 14 conditions, so a model that always says \"nothing found\" would look very accurate. That's why I scored everything on AUC.",
      figures: [
        { img: P + "xray-frequency.webp", caption: "How often each condition appears" },
        { img: P + "xray-findings.webp", caption: "Findings per image" },
        { img: P + "xray-cooccur.webp", caption: "Which conditions show up together" },
      ],
    },
    {
      label: "How I did it",
      title: "Features, models, thresholds",
      flow: [
        { name: "Features", does: "A pretrained image network turns each X-ray into 1,280 numbers.", limit: "EfficientNetB0" },
        { name: "Models", does: "Eight models trained on those numbers, scored on AUC across all 14 conditions.", limit: "Keras, scikit-learn" },
        { name: "Thresholds", does: "A separate cutoff for each condition, set to catch more disease.", limit: "Recall 0.543 to 0.577" },
      ],
      table: {
        head: ["Model", "Test macro AUC"],
        rows: [
          ["Neural network (512-256-14)", "0.729"],
          ["Neural network, deeper", "0.725"],
          ["Random forest", "0.703"],
          ["Naive Bayes", "0.686"],
        ],
        best: 0,
      },
    },
    {
      label: "Checking it",
      title: "How far to trust it",
      points: [
        "The same patient can show up in many images. When no patient is allowed in both training and testing, the score drops to 0.670. That's the more realistic number.",
        "More data kept helping: 0.619 with 1,000 training images, 0.712 with 15,000.",
      ],
      figures: [{ img: P + "xray-learning.webp", caption: "Test AUC by number of training images" }],
    },
    {
      label: "Where it looked",
      title: "Heat maps of the model's attention",
      body: "Grad-CAM lights up the parts of the image behind a prediction. It shows when the model is looking in the right place and when it isn't.",
      figures: [
        { img: P + "xray-gradcam-right.webp", caption: "Right: fluid low in the chest, and that's where it looked" },
        { img: P + "xray-gradcam-wrong.webp", caption: "Off: it spread across both lungs and flagged extra conditions" },
      ],
      note: "A class project, not a medical tool.",
    },
    {
      label: "What I used",
      title: "Tools",
      tools: [
        { name: "TensorFlow and Keras", use: "The pretrained network and the neural nets" },
        { name: "scikit-learn", use: "The other six models" },
        { name: "Grad-CAM", use: "The heat maps" },
        { name: "Streamlit", use: "A small app: upload an X-ray, get the 14 probabilities" },
        { name: "Google Colab", use: "Runs the whole notebook in a browser" },
      ],
      links: [{ label: "Open the notebook in Colab", href: "https://colab.research.google.com/github/SpencerGoss/chest-xray-classifier/blob/main/chest_xray_portable_pipeline.ipynb" }],
    },
  ],

  "invoice-agent": [
    {
      label: "The problem",
      title: "Two clerks typing in 1,200 invoices a month",
      stats: [
        { value: "1,200", label: "invoices a month" },
        { value: "$15,200", label: "a month in clerk labor" },
        { value: "4 to 6%", label: "error rate" },
      ],
      body: "That's the setup in my capstone case. Most invoices are routine, but every one gets keyed into NetSuite by hand, and mistakes like missed POs and duplicate payments get through. I worked a year in accounts payable at Churchill Downs before my master's, so I knew this work well.",
      note: "MidwestCorp is the case company from the course, so the dollar figures on this page come from the case.",
    },
    {
      label: "How it works",
      title: "Three agents: read, check, route",
      flowLabel: "Agent",
      flow: [
        { name: "Read", does: "Pulls the vendor, PO, date, line items and total off the PDF.", limit: "Read-only" },
        { name: "Check", does: "Runs nine rules and marks the invoice CLEAN or ESCALATED, listing every reason.", limit: "Has no tools" },
        { name: "Route", does: "Clean invoices go to the approval queue. Anything flagged goes to an AP clerk.", limit: "Can only send notifications" },
      ],
      body: "I built a working one-agent version in Copilot Studio first, then split it into three so a mistake in one step can't spread to the next. None of the agents can approve or pay an invoice.",
      pointsTitle: "A person always steps in when",
      points: [
        "the PDF can't be read",
        "the agent is less than 90% sure",
        "the total is over $100,000",
        "anything asks it to skip a rule",
      ],
      links: [{ label: "See the full architecture diagram", href: P + "invoice-agent-architecture.webp" }],
    },
    {
      label: "Try it",
      title: "Run an invoice through the rules",
      body: "Pick a sample invoice. The nine checks are the same rules I wrote into the triage agent's prompt.",
      widget: "invoice",
    },
    {
      label: "What I used",
      title: "Tools",
      tools: [
        { name: "Microsoft Copilot Studio", use: "Built and tested the working agent" },
        { name: "Prompt writing", use: "One shared base prompt, plus one prompt for each agent" },
        { name: "NIST AI RMF", use: "The framework for the governance plan" },
        { name: "Claude", use: "Helped me pressure-test the design and draft test cases" },
      ],
    },
    {
      label: "Testing it",
      title: "How you'd know if it broke",
      points: [
        "40 test cases, run every week: normal invoices, edge cases, attack attempts (like instructions hidden in a PDF) and compliance checks.",
        "An error ceiling of 1%, which is about 12 invoices a month.",
        "Clear reasons to shut it off: the error rate climbs, results drift, or clerks start approving without looking.",
        "Checked against the NIST AI RMF, SOX, 1099 reporting and OFAC sanctions screening.",
      ],
    },
    {
      label: "My call",
      title: "Run a 30-day pilot first",
      table: {
        head: ["Monthly cost (case numbers)", "Today", "With the agent"],
        rows: [
          ["Clerk labor", "$15,200", "$3,800"],
          ["Errors that reach payment", "$3,000 to $4,500", "about $1,000"],
          ["API and compute", "$0", "$600"],
          ["Total", "$18,200 to $19,700", "$5,400"],
        ],
      },
      body: "In the case numbers that's about $150,000 to $170,000 saved a year, paid back in about two months. I'd still only expand past the pilot once sanctions screening is tested, clerks are trained to really review the agent's work, and the test set passes every week.",
    },
    {
      label: "The playbook",
      title: "The full write-up",
      body: "Seven pages covering the business case, the design, the prompts, testing and governance.",
      figures: [
        { img: P + "invoice-playbook-p1.webp", caption: "Page 1: business case" },
        { img: P + "invoice-playbook-p5.webp", caption: "Page 5: testing plan" },
        { img: P + "invoice-playbook-p6.webp", caption: "Page 6: governance" },
      ],
      links: [{ label: "Open the playbook (PDF)", href: "/docs/Invoice_Triage_Agent_Playbook.pdf" }],
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
