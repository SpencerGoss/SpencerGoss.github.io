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
      title: "One place for the stats I care about",
      stats: [
        { value: "5", label: "leagues live" },
        { value: "57K", label: "player pages" },
        { value: "25+", label: "years of history" },
      ],
      body: "I'm a big sports fan, basketball most of all, and I wanted real stats and real predictions in one place. It started as a way to compare players across eras and grew into five leagues. I designed, built and run all of it.",
      figures: [{ img: P + "oddsix-home.webp", caption: "The home page" }],
    },
    {
      label: "How it works",
      title: "Feeds in, pages out",
      flow: [
        { name: "Ingest", does: "League feeds and public odds come in all day and get checked on the way in.", limit: "Python" },
        { name: "Store", does: "About 68,000 games, with the big archives kept in the cloud.", limit: "SQL, Cloudflare R2" },
        { name: "Model", does: "A separate model for each sport, tested on seasons it never trained on.", limit: "scikit-learn, LightGBM" },
        { name: "Publish", does: "The site rebuilds itself when the data changes.", limit: "Astro, Cloudflare Pages" },
      ],
    },
    {
      label: "Inside the site",
      title: "Leagues, teams, players and games",
      figures: [
        { img: P + "oddsix-overview.webp", caption: "League overview: tonight's games, scores, standings" },
        { img: P + "oddsix-team.webp", caption: "Team page: record, splits, roster" },
        { img: P + "oddsix-player.webp", caption: "Player page: career stats and shot data" },
        { img: P + "oddsix-trivia.webp", caption: "Daily trivia built on the same data" },
      ],
    },
    {
      label: "What I used",
      title: "Tools",
      tools: [
        { name: "Python and SQL", use: "The data pipeline and the databases" },
        { name: "scikit-learn and LightGBM", use: "The prediction models" },
        { name: "Astro", use: "The site, where one template serves every player page" },
        { name: "Cloudflare Pages and R2", use: "Hosting and storage" },
        { name: "AI coding tools", use: "How I build and maintain it alone, with tests on every change" },
      ],
    },
    {
      label: "What's next",
      title: "New models this season",
      body: "A new generation of prediction models is in live testing this season.",
      links: [{ label: "Visit oddsix.app", href: "https://oddsix.app" }],
    },
  ],

  "agent-engineering": [
    {
      label: "The problem",
      title: "AI agents are fast, and sometimes confidently wrong",
      stats: [
        { value: "11", label: "reusable skills" },
        { value: "3", label: "written patterns" },
      ],
      body: "AI coding agents get real work done quickly, but they also make mistakes with total confidence. Two of them agreeing doesn't make them right. I needed a way to use them on real projects without trusting every answer.",
    },
    {
      label: "How it works",
      title: "Split it, check it, learn from it",
      flow: [
        { name: "Split", does: "Independent pieces run in parallel. Open questions get several attempts and a judge picks one.", limit: "Parallel agents" },
        { name: "Check", does: "A separate reviewer redoes the work instead of just voting on it.", limit: "Independent review" },
        { name: "Learn", does: "A mistake that repeats becomes a rule that gets checked automatically next time.", limit: "Guardrails" },
      ],
    },
    {
      label: "What's published",
      title: "Patterns and skills anyone can use",
      points: [
        "Three patterns: running agents in parallel, a review council made of different AI models, and guardrails built from past mistakes.",
        "Eleven skills, including code review, debugging, planning, testing, security review and refactoring.",
        "Each skill is just a prompt, so it works in any compatible AI coding tool.",
      ],
      links: [{ label: "See it on GitHub", href: "https://github.com/SpencerGoss/agent-engineering" }],
    },
    {
      label: "What I used",
      title: "Tools",
      tools: [
        { name: "Claude Code", use: "The main agent I build with" },
        { name: "Codex, Gemini CLI, Copilot", use: "Second opinions from different AI models" },
        { name: "Prompt writing", use: "Each skill has triggers, hard rules and a method" },
        { name: "Git and GitHub", use: "Versioning and publishing the skills" },
      ],
    },
    {
      label: "Where I use it",
      title: "Everything else I build",
      body: "Oddsix and my other projects are built this way, with checks and tests on each change before it ships.",
    },
  ],

  "financial-research-assistant": [
    {
      label: "The problem",
      title: "Financial data is easy to find and hard to read",
      stats: [
        { value: "Live", label: "data on every request" },
        { value: "5", label: "Azure parts" },
        { value: "2", label: "person team" },
      ],
      body: "A cloud computing class project with a classmate. Most tools either dump raw numbers on you or tell you what to buy. We wanted one that just explains.",
    },
    {
      label: "How it works",
      title: "Ask, fetch, explain",
      flow: [
        { name: "Ask", does: "Type in a company name or ticker.", limit: "Agent playground" },
        { name: "Fetch", does: "The agent pulls price, company profile, key metrics and recent news.", limit: "Finnhub API" },
        { name: "Explain", does: "The model writes a short report in plain English.", limit: "Azure AI Foundry" },
      ],
      figures: [{ img: P + "fra-azure.webp", caption: "The Azure setup" }],
    },
    {
      label: "Guardrails",
      title: "No made-up numbers, no stock picks",
      points: [
        "It only uses numbers the API sent back. If one is missing, the report says so.",
        "It never says buy, sell or hold.",
        "Every report names its source and shows when the data was pulled.",
      ],
      figures: [{ img: P + "fra-responsible.webp", caption: "The rules built into the agent" }],
    },
    {
      label: "What we used",
      title: "Tools",
      tools: [
        { name: "Azure AI Foundry", use: "The project, the model and the agent" },
        { name: "OpenAPI tool", use: "Lets the agent call the Finnhub API" },
        { name: "Finnhub API", use: "Live prices, profiles, metrics and news" },
        { name: "Azure connection", use: "Keeps the API key out of the agent's instructions" },
      ],
    },
  ],

  "msba-nba": [
    {
      label: "The problem",
      title: "Pick the winner using only what's known before tip-off",
      stats: [
        { value: "10.5K", label: "games" },
        { value: "5", label: "seasons" },
        { value: "26", label: "pre-game features" },
      ],
      body: "My MSBA 645 final. The hard part is staying honest: the model can only see what was known before the game started.",
    },
    {
      label: "How I did it",
      title: "Features, testing, play styles",
      flow: [
        { name: "Features", does: "Recent form, home and away records, season averages and matchup gaps.", limit: "pandas" },
        { name: "Test", does: "Train on earlier seasons, test on the next one, the way it would really be used.", limit: "Walk-forward" },
        { name: "Cluster", does: "Group teams into four play styles.", limit: "K-means" },
      ],
      body: "The four styles were Elite Efficiency, Pace and Pressure, Rebuilding, and Middle of the Pack. They picked up real changes in teams from season to season.",
    },
    {
      label: "The result",
      title: "The simpler model won",
      body: "Logistic regression edged out LightGBM, and adding the play-style groups added about 1.3 points of accuracy. This approach became the starting point for the Oddsix models.",
    },
    {
      label: "What I used",
      title: "Tools",
      tools: [
        { name: "Python and the NBA Stats API", use: "Pulling five seasons of games" },
        { name: "pandas", use: "Building the 26 pre-game features" },
        { name: "scikit-learn and LightGBM", use: "The models" },
        { name: "K-means", use: "The play-style groups" },
      ],
    },
  ],
};

