import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "customer-satisfaction-analysis",
    title: "Customer Satisfaction Analysis",
    summary:
      "Analyzed customer rating behavior using R to identify the strongest factors influencing satisfaction scores across delivery types and user segments.",
    impact: "Identified key drivers of customer satisfaction for business strategy",
    tags: ["Data Analysis", "R", "Visualization"],
    tools: ["R", "ggplot2", "dplyr"],
    domain: "Business Analytics",
    githubUrl: "https://github.com/NiranjanGhising/Customer-Satisfaction-Analysis",
    featured: true,
    problem:
      "Understanding which factors most strongly influence customer satisfaction scores to help businesses prioritize improvements.",
    approach:
      "Used exploratory data analysis techniques in R to evaluate rating patterns across delivery types and user segments.",
    process: [
      "Collected and preprocessed customer rating data",
      "Performed exploratory analysis on delivery type correlations",
      "Segmented analysis by user types (premium vs standard)",
      "Created visualizations to highlight key patterns",
      "Generated actionable insights for business decisions",
    ],
    results: {
      before: "No clear understanding of satisfaction drivers",
      after: "Identified instant delivery and premium users as key satisfaction factors",
      metrics: [
        { label: "Key Finding", value: "Instant delivery = higher ratings" },
        { label: "Segment Insight", value: "Premium users rate higher" },
        { label: "Language", value: "R" },
      ],
    },
  },
  {
    id: "model-context-protocol-mcp",
    title: "MCP Server & Client",
    summary:
      "A Python project to build a fully functional Model Context Protocol server and client architecture for AI-powered applications.",
    impact: "Enables seamless AI model integration with client apps",
    tags: ["AI", "Server Architecture", "Python"],
    tools: ["Python", "MCP", "FastAPI"],
    domain: "AI/ML",
    githubUrl: "https://github.com/NiranjanGhising/Model-Context-Protocol-MCP",
    featured: true,
    problem:
      "AI applications need a standardized way to communicate between models and client applications with robust error handling.",
    approach:
      "Built a complete MCP server and client implementation in Python with extensible plugin system and proper configuration management.",
    process: [
      "Designed server-client architecture using MCP protocol",
      "Implemented main.py as entry point with configuration",
      "Created mcp_server.py for handling model requests",
      "Built mcp_client.py for client-side communication",
      "Set up pyproject.toml and uv.lock for dependency management",
    ],
    results: {
      before: "No standardized AI model communication protocol",
      after: "Fully functional MCP server-client system",
      metrics: [
        { label: "Components", value: "3 (Server, Client, Main)" },
        { label: "Protocol", value: "MCP Standard" },
        { label: "Language", value: "Python" },
      ],
    },
  },
  {
    id: "etl-elt-pipeline",
    title: "ETL-ELT Pipeline",
    summary:
      "Built an end-to-end data pipeline from source extraction via APIs to transformed, end-user-ready outputs.",
    impact: "Reproducible workflow for data ingestion and transformation",
    tags: ["Data Engineering", "ETL", "Python"],
    tools: ["Python", "APIs", "Data Transformation"],
    domain: "Data Engineering",
    githubUrl: "https://github.com/NiranjanGhising/ETL-ELT-Pipeline",
    featured: true,
    problem:
      "Need for a complete data pipeline that handles extraction, transformation, and delivery in a reproducible manner.",
    approach:
      "Connected ingestion, transformation, and delivery steps into one reproducible workflow, applying data cleaning and transformation logic.",
    process: [
      "Extracted data via API calls from various sources",
      "Transformed raw records into structured datasets",
      "Applied data cleaning logic for consistency",
      "Prepared curated outputs for downstream use",
      "Built reproducible workflow for ETL/ELT operations",
    ],
    results: {
      before: "Manual, disconnected data processing steps",
      after: "Automated end-to-end pipeline with clean outputs",
      metrics: [
        { label: "Pipeline Type", value: "ETL/ELT" },
        { label: "Data Source", value: "API-based" },
        { label: "Output", value: "Analysis-ready" },
      ],
    },
  },
  {
    id: "ai-data-science-news-bot",
    title: "AI & Data Science News Bot",
    summary:
      "Telegram bot that sends daily AI and data science research digests from top sources like Google AI, OpenAI, arXiv, and more.",
    impact: "Delivers curated AI research updates daily at 08:00 NPT",
    tags: ["Automation", "Telegram Bot", "Research"],
    tools: ["Python", "Telegram API", "GitHub Actions"],
    domain: "Automation",
    githubUrl: "https://github.com/NiranjanGhising/AI-Data_Science_News_bot",
    featured: false,
    problem:
      "Keeping up with the latest AI and data science research across multiple sources is time-consuming and overwhelming.",
    approach:
      "Created an automated Telegram bot using GitHub Actions that aggregates and delivers curated research from top AI labs and paper repositories.",
    process: [
      "Set up Telegram bot with secure token handling",
      "Configured GitHub Actions for scheduled automation",
      "Integrated sources: Google AI, DeepMind, OpenAI, Microsoft Research, Meta",
      "Added arXiv, Semantic Scholar, Crossref, Papers With Code feeds",
      "Implemented daily digests at 08:00 Nepal time with priority alerts",
    ],
    results: {
      before: "Manual tracking of AI research across multiple platforms",
      after: "Automated daily digest delivered to Telegram",
      metrics: [
        { label: "Sources", value: "9+ Research Labs" },
        { label: "Delivery", value: "Daily 08:00 NPT" },
        { label: "Alerts", value: "Hourly Priority" },
      ],
    },
  },
  {
    id: "vr-fitness-data-analysis",
    title: "VR Fitness Game Data Analysis",
    summary:
      "Cleaned and analyzed a VR fitness game dataset to understand gameplay engagement, repeat-play patterns, and dataset quality issues.",
    impact: "Revealed engagement trends and player behavior insights",
    tags: ["Data Cleaning", "Python", "Analysis"],
    tools: ["Python", "Jupyter Notebook", "Pandas"],
    domain: "Gaming Analytics",
    githubUrl: "https://github.com/NiranjanGhising/VR-Fitness-Analysis",
    featured: false,
    problem:
      "Understanding player engagement patterns in VR fitness games required cleaning messy data and analyzing gameplay metrics.",
    approach:
      "Performed notebook-based data cleaning and preprocessing to improve consistency before analyzing play hours and replay patterns.",
    process: [
      "Imported and explored raw VR fitness dataset",
      "Performed data cleaning and preprocessing",
      "Analyzed games with higher accumulated play hours",
      "Identified titles with higher replay rates",
      "Summarized player-behavior insights",
    ],
    results: {
      before: "Messy dataset with unclear engagement patterns",
      after: "Clean data with actionable engagement insights",
      metrics: [
        { label: "Analysis Type", value: "Engagement Trends" },
        { label: "Tool", value: "Jupyter Notebook" },
        { label: "Focus", value: "Replay Patterns" },
      ],
    },
  },
  {
    id: "data-cleaning-sql",
    title: "SQL Data Cleaning Pipeline",
    summary:
      "Comprehensive data cleaning processes documented in Jupyter notebooks covering SQL-based data transformation techniques.",
    impact: "Standardized data cleaning workflow for SQL datasets",
    tags: ["Data Cleaning", "SQL", "Documentation"],
    tools: ["SQL", "Jupyter Notebook", "Python"],
    domain: "Data Engineering",
    githubUrl: "https://github.com/NiranjanGhising/Data-Cleaning",
    featured: false,
    problem:
      "Raw datasets often contain inconsistencies, missing values, and formatting issues that need systematic cleaning.",
    approach:
      "Documented comprehensive SQL data cleaning processes in Jupyter notebooks covering various transformation techniques.",
    process: [
      "Identified common data quality issues in datasets",
      "Developed SQL queries for handling missing values",
      "Created transformation scripts for data normalization",
      "Documented outlier detection and handling methods",
      "Built reusable cleaning templates",
    ],
    results: {
      before: "Inconsistent and messy raw data",
      after: "Clean, normalized, analysis-ready datasets",
      metrics: [
        { label: "Techniques", value: "10+ Methods" },
        { label: "Format", value: "Jupyter Notebook" },
        { label: "Language", value: "SQL" },
      ],
    },
  },
  {
    id: "students-data-analysis",
    title: "Student Data Analysis",
    summary:
      "Analyzed educational datasets using NumPy and Matplotlib to visualize data trends and generate insights for academic planning.",
    impact: "Generated actionable insights for academic planning",
    tags: ["Data Analysis", "Educational Analytics", "Data Visualization"],
    tools: ["Python", "NumPy", "Matplotlib"],
    domain: "Education",
    githubUrl: "https://github.com/NiranjanGhising/Student_Data_Analysis",
    featured: false,
    problem:
      "Educational institutions needed clear insights from complex student data to support academic planning and decision-making.",
    approach:
      "Utilized NumPy for efficient data handling and Matplotlib for creating comprehensive visualizations to identify trends and patterns in educational datasets.",
    process: [
      "Data collection and preprocessing of educational datasets",
      "Exploratory data analysis using NumPy arrays",
      "Statistical analysis to identify key trends",
      "Data visualization creation with Matplotlib",
      "Insight generation and reporting for academic planning",
    ],
    results: {
      before: "Raw educational data with no clear insights",
      after: "Comprehensive analysis with actionable academic insights",
      metrics: [
        { label: "Data Points Analyzed", value: "1000+" },
        { label: "Key Insights Generated", value: "8" },
        { label: "Visualization Charts", value: "12" },
      ],
    },
  },
]
