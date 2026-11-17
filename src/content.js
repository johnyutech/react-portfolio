// Single source of content for the site.
// Every fact here traces to the approved source-of-truth resume content.
// Strings containing "[NEEDS INPUT: ...]" are unresolved gaps John must fill.
// They render visibly flagged on the page and are listed in the project report.

export const site = {
  name: "John Yu",
  title: "John Yu · Sales Operations",
  description:
    "Top 3 Inside Sales advisor across North America in Sales Per Hour, and the person who built the automation and analysis behind the number.",
  email: "fremontjohn@gmail.com",
  phone: "(408) 204-9022",
  location: "Fremont, CA",
  linkedin: "https://www.linkedin.com/in/jyu00/",
  github: "https://github.com/johnyutech/PortfolioProjects",
  resumeHref: "/John-Yu-Resume.pdf",
};

export const hero = {
  eyebrow: "Inside Sales Operations · Tesla · Fremont, CA",
  headlineLines: ["Nationally ranked", "seller. Builds the tools", "that make selling faster."],
  proof: "Top 3 in Sales Per Hour · NA Inside Sales · FY2025 & 2026 YTD",
  sub: "I'm John Yu, a Senior Advisor in Inside Sales Operations at Tesla. I carry a quota, build the automation that removes the manual parts of the job, and measure what it changes.",
};

export const throughline = {
  eyebrow: "Background",
  heading: "The analyst who learned to sell",
  body: [
    "I started on the analytics side, building Tableau dashboards and writing Snowflake SQL at JP Morgan and First Republic. Then I moved into sales to learn how revenue actually gets made.",
    "At Tesla I sell at the top of the leaderboard. The manual work behind that number bothered me enough to build the tooling that removes it, and then to measure what the tooling changed. A fix you can't measure isn't finished. Then I rolled it out. The prompt library I built for my own team ended up adopted by delivery, demo drive, support, and operations.",
    "A Business Operations, Sales Operations, or Project Management role is where all three get used at once.",
  ],
};

export const caseStudies = [
  {
    id: "re-engagement",
    number: "01",
    title: "Re-engagement campaign analysis",
    metric: { value: "500+", label: "dormant accounts measured" },
    problem:
      "Outreach to dormant accounts restarted every cycle with no measurement of what the last cycle actually returned.",
    built:
      "A Python analysis pipeline that measures re-engagement campaign performance across 500+ dormant accounts, quantifying reply and conversion rates for each outreach cycle and feeding the results into the next one.",
    outcome:
      "Reply and conversion rates quantified across 500+ dormant accounts, so each subsequent cycle retargets on measured response instead of intuition.",
    analyst:
      "This is cohort and funnel analysis on a live revenue process: define the population, measure reply and conversion at each stage, and reallocate the next cycle's effort to where response actually happens.",
    stack: ["Python"],
  },
  {
    id: "outreach-automation",
    number: "02",
    title: "Outreach & follow-up automation",
    metric: null,
    problem:
      "Personalized outreach, follow-ups, and inventory matching were manual, repetitive work competing directly with time spent selling.",
    built:
      "Python and Playwright automations that drive the browser at the DOM level: personalized inbound outreach, follow-ups generated from full conversation history, and Fleet inventory matching. Built with Claude Code.",
    outcome:
      "Outreach that used to be composed by hand now runs as a repeatable, personalized pipeline.",
    analyst:
      "Automating the pipeline is what made it measurable. Once outreach runs as a repeatable process, every send becomes a data point the re-engagement analysis can use.",
    stack: ["Python", "Playwright", "JavaScript / DOM", "Claude Code"],
  },
  {
    id: "ai-enablement",
    number: "03",
    title: "AI enablement across NA Inside Sales",
    metric: { value: "10+ hrs/wk", label: "saved across 135+ users" },
    problem:
      "An internal computer-vision tool could take real work off people's plates, but only with prompts fitted to each team's workflow.",
    built:
      "Developed and iterated the prompt library for the internal tool and led its enablement across the NA Inside Sales org. The delivery, demo drive, customer support, and operations teams all adopted it.",
    outcome:
      "10+ hours per week saved across 135+ users. Awarded AI Trailblazer (Q2 2026) for the highest measured workflow impact in the org.",
    analyst:
      "Adoption followed measurement. The case for rolling it out across delivery, demo drive, support, and operations was a quantified hours-saved figure, not a demo.",
    stack: ["LLM tooling", "Prompt development", "Computer vision (internal)"],
  },
];

export const experience = [
  {
    company: "Tesla",
    role: "Senior Inside Sales Operations Advisor",
    dates: "Feb 2025 - Present",
    promotion: "Promoted to Senior Advisor in Nov 2026 (Advisor, Feb 2025 - Nov 2026)",
    awards: [
      "2026 · Impact of the Year",
      "Q2 2026 · AI Trailblazer Award",
      "FY2025 & 2026 · Top 3 in Sales Per Hour",
    ],
    bullets: [
      "Ranked top 3 among NA Inside Sales advisors in Sales Per Hour for FY2025 and 2026 YTD, managing a high-volume B2C pipeline.",
      "Expanded into Fleet B2B account management, owning corporate relationships end to end.",
      "Built the re-engagement analysis, outreach automation, and AI enablement work above.",
    ],
  },
  {
    company: "MEAN WELL USA",
    role: "Account Manager",
    dates: "Aug 2024 - Feb 2025",
    bullets: [
      "Managed 8+ distributor relationships across all regions, covering quarterly sales reports, end-of-year business reviews, technical training, and project qualification through the internal ERP.",
      "Built a Price Search Tool and a Power Supply Feature Search Tool in Excel to speed up sales-team workflows and data access.",
    ],
  },
  {
    company: "JP Morgan Chase",
    role: "Support Analyst",
    dates: "July 2023 - July 2024",
    bullets: [
      "Designed and managed 10+ Tableau dashboards integrating diverse sources through pass-through SQL to Snowflake and MS SQL Server.",
      "Handled recurring and ad-hoc reporting in Snowflake SQL using CTEs, temp tables, subqueries, conditional aggregation, window functions, and joins.",
    ],
  },
  {
    company: "First Republic Bank",
    role: "Support Analyst",
    dates: "Oct 2022 - June 2023",
    bullets: [
      "Engineered a Microsoft Access/VBA application automating the daily Excel data refresh via Snowflake pass-through queries on a Python-based scheduler.",
      "Managed ad-hoc data requests end to end, from Snowflake extraction through pivot-table analysis.",
    ],
  },
];

export const education =
  "University of California, Riverside · Business Administration: Information Systems · Major GPA 3.8";

export const skills = [
  {
    group: "Analysis & Reporting",
    items: [
      "SQL",
      "Snowflake",
      "Python / pandas",
      "Tableau",
      "Power BI",
      "Excel & VBA",
      "Microsoft Access",
      "R",
      "Cognos",
    ],
  },
  {
    group: "Automation & Tooling",
    items: ["Playwright", "JavaScript & DOM", "Claude Code", "LLM tooling", "HTML & CSS"],
  },
  {
    group: "Systems",
    items: ["ERP workflows", "CRM & pipeline workflows"],
  },
];

export const languages = "English (native) · Mandarin (fluent)";

export const earlierProjects = [
  {
    title: "Python for Data Science",
    year: "2022",
    description:
      "Extracted and visualized stock and revenue data for TSLA and GME.",
    stack: "pandas · plotly · BeautifulSoup · yfinance",
    href: "https://github.com/johnyutech/PortfolioProjects",
    linkLabel: "View on GitHub",
  },
  {
    title: "COVID-19 SQL / Tableau Dashboard",
    year: "2022",
    description: "T-SQL analysis with forecasting and an interactive map.",
    stack: "T-SQL · Tableau",
    href: "https://public.tableau.com/app/profile/john.yu5447/viz/Covid-19DashboardProject_16485950465900/Dashboard1",
    linkLabel: "View on Tableau Public",
  },
];

export const contact = {
  heading: "Let's talk.",
  body: "If you're hiring for a Business or Sales Operations Analyst role, email is the fastest way to reach me.",
};
