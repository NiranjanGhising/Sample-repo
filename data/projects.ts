import type { Project } from "@/lib/types"

export const projects: Project[] = [
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
    id: "ai-data-science-news-bot",
    title: "AI & Data Science News Bot",
    summary:
      "Telegram bot that sends daily AI and data science research digests from top sources like Google AI, OpenAI, arXiv, and more.",
    impact: "Delivers curated AI research updates daily at 08:00 NPT",
    tags: ["Automation", "Telegram Bot", "Research"],
    tools: ["Python", "Telegram API", "GitHub Actions"],
    domain: "Automation",
    githubUrl: "https://github.com/NiranjanGhising/AI-Data_Science_News_bot",
    featured: true,
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
    id: "data-cleaning-sql",
    title: "SQL Data Cleaning Pipeline",
    summary:
      "Comprehensive data cleaning processes documented in Jupyter notebooks covering SQL-based data transformation techniques.",
    impact: "Standardized data cleaning workflow for SQL datasets",
    tags: ["Data Cleaning", "SQL", "Documentation"],
    tools: ["SQL", "Jupyter Notebook", "Python"],
    domain: "Data Engineering",
    githubUrl: "https://github.com/NiranjanGhising/Data-Cleaning",
    featured: true,
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
  {
    id: "netflix-movie-analysis",
    title: "Netflix 1990s Movie Analysis",
    summary:
      "Analyzed Netflix movie dataset in Python, exploring trends in durations and release years with histogram visualizations.",
    impact: "Revealed key trends in 1990s movie duration patterns",
    tags: ["Data Analysis", "Entertainment Analytics", "Python"],
    tools: ["Python", "Matplotlib", "Pandas"],
    domain: "Entertainment",
    githubUrl: "https://github.com/NiranjanGhising/Netflix_1900sMovie_Analysis",
    featured: false,
    problem:
      "Understanding movie duration trends and patterns in Netflix's 1990s catalog required systematic analysis and visualization.",
    approach:
      "Conducted comprehensive analysis of Netflix movie dataset focusing on 1990s content, using Python for data manipulation and Matplotlib for visualization.",
    process: [
      "Dataset acquisition and initial exploration",
      "Data filtering for 1990s movies",
      "Duration trend analysis across release years",
      "Histogram creation for duration distribution",
      "Pattern identification and insight documentation",
    ],
    results: {
      before: "Unstructured movie dataset with no trend analysis",
      after: "Clear visualization of movie duration patterns and trends",
      metrics: [
        { label: "Movies Analyzed", value: "500+" },
        { label: "Years Covered", value: "1990-1999" },
        { label: "Visualizations Created", value: "5" },
      ],
    },
  },
  {
    id: "python-intermediate-projects",
    title: "Python Intermediate Projects",
    summary:
      "Collection of intermediate Python projects including games built using OOP concepts like Tic Tac Toe and Rock Paper Scissors.",
    impact: "Demonstrates OOP principles through practical applications",
    tags: ["Python", "OOP", "Game Development"],
    tools: ["Python", "OOP"],
    domain: "Software Development",
    githubUrl: "https://github.com/NiranjanGhising/Python-Intermediate-Projects",
    featured: false,
    problem:
      "Needed to practice and demonstrate intermediate Python concepts including Object-Oriented Programming.",
    approach:
      "Built practical game applications using OOP principles to solidify understanding of classes, objects, and inheritance.",
    process: [
      "Designed class structures for game logic",
      "Implemented Tic Tac Toe with OOP",
      "Created Rock Paper Scissors game",
      "Added QR code generation project",
      "Documented code with clear comments",
    ],
    results: {
      before: "Basic Python knowledge",
      after: "Working OOP-based game applications",
      metrics: [
        { label: "Projects", value: "3+" },
        { label: "Concepts", value: "OOP" },
        { label: "Language", value: "Python" },
      ],
    },
  },
]
