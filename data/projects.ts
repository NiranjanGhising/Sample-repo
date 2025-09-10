import type { Project } from "@/lib/types"

export const projects: Project[] = [
  {
    id: "students-data-analysis",
    title: "Students Data Analysis",
    summary:
      "Analyzed educational datasets using NumPy and Matplotlib to visualize data trends and generate insights for academic planning.",
    impact: "Generated actionable insights for academic planning",
    tags: ["Data Analysis", "Educational Analytics", "Data Visualization"],
    tools: ["Python", "NumPy", "Matplotlib"],
    domain: "Education",
    githubUrl: "https://github.com/NiranjanGhising/Student_Data_Analysis", // updated to actual GitHub URL
    featured: true,
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
    githubUrl: "https://github.com/NiranjanGhising/Netflix_1900sMovie_Analysis", // updated to actual GitHub URL
    featured: true,
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
    id: "email-contact-classifier",
    title: "Email Contact Classifier (Rules + Logistic Regression)",
    summary:
      "End-to-end mini project that cleans an email contact dataset, explores it (EDA), classifies emails into generic vs personal using simple rules, and optionally trains a tiny Logistic Regression model—with minimal pytest tests.",
    impact: "Improves outreach quality by separating generic inboxes (info@, support@) from personal contacts.",
    tags: ["Data Cleaning", "EDA", "Classification", "Unit Testing"],
    tools: ["Python", "pandas", "scikit-learn", "NumPy", "openpyxl", "pytest"],
    domain: "Data Science",
    githubUrl: "https://github.com/NiranjanGhising/ML-and-Data_Analayst_Project",
    featured: true,
    problem:
      "Teams often email generic inboxes that don’t reach an individual, hurting conversion. We needed a simple, explainable way to identify generic vs personal emails from a raw contact list.",
    approach:
      "Start simple with a baseline prefix rule (info/support/admin/etc.). Add refined heuristics (functional tokens, brand@brand.com catch, company-name similarity, personal-name guard). Optionally train a tiny Logistic Regression on rule labels (weak supervision) to inspect feature importance and tune threshold.",
    process: [
      "Load and clean the raw Excel dataset; normalize columns and validate emails",
      "Run EDA to understand distributions and top companies; create a few charts",
      "Implement baseline generic-email rule; compare counts",
      "Refine rules with additional functional tokens and similarity checks",
      "Optionally train Logistic Regression on rule labels and report metrics",
      "Validate key helpers with minimal pytest tests",
    ],
    results: {
      before: "Unlabeled contact emails with mixed generic/personal addresses",
      after: "Cleaned dataset with generic vs personal labels, rule vs model metrics, and simple visualizations",
      metrics: [
        { label: "Logic Layers", value: "Baseline + Refined + ML (optional)" },
        { label: "Tests", value: "Pytest (validation & rules)" },
        { label: "Visualizations", value: ">= 2 charts (EDA)" },
      ],
    },
  },
]
