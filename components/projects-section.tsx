"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Github, ExternalLink, X, ChevronRight } from "lucide-react"

// Projects data from aboutme.json
const projects = [
  {
    id: "model-context-protocol-mcp",
    title: "MCP Server",
    shortDesc: "Model Context Protocol Server",
    description: "A Python project to build a fully functional MCP server and client architecture. Implements the Model Context Protocol for AI-powered applications with robust error handling and extensible plugin system.",
    tech: ["Python", "FastAPI", "WebSockets", "Docker"],
    github: "https://github.com/NiranjanGhising",
    featured: true
  },
  {
    id: "ai-data-science-news-bot",
    title: "AI News Bot",
    shortDesc: "Telegram Research Radar",
    description: "Telegram-focused AI and data science research radar with daily digests. Automatically curates and summarizes the latest AI research papers and news for daily consumption.",
    tech: ["Python", "Telegram API", "NLP", "Scheduling"],
    github: "https://github.com/NiranjanGhising",
    featured: true
  },
  {
    id: "data-cleaning",
    title: "Data Cleaning Pipeline",
    shortDesc: "SQL Data Processing",
    description: "Comprehensive data-cleaning processes documented in Jupyter notebooks. Covers handling missing values, outlier detection, data normalization, and transformation techniques.",
    tech: ["Python", "Pandas", "SQL", "Jupyter"],
    github: "https://github.com/NiranjanGhising"
  },
  {
    id: "student-data-analysis",
    title: "Student Analysis",
    shortDesc: "Educational Analytics",
    description: "Analyzing educational datasets using NumPy and Matplotlib for insights. Explores student performance patterns, demographic correlations, and predictive factors for success.",
    tech: ["Python", "NumPy", "Matplotlib", "Statistics"],
    github: "https://github.com/NiranjanGhising"
  },
  {
    id: "netflix-movie-analysis",
    title: "Netflix Analysis",
    shortDesc: "Entertainment Analytics",
    description: "Analyzed Netflix movie dataset exploring trends in durations and release years. Uncovered patterns in content production, genre popularity, and viewer preferences over time.",
    tech: ["Python", "Pandas", "Seaborn", "Data Viz"],
    github: "https://github.com/NiranjanGhising"
  }
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my data science and development work
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                {/* Project Image/Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-accent/20 via-accent/10 to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-display font-black text-accent/20 group-hover:text-accent/30 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.shortDesc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{project.tech.length - 3}</span>
                    )}
                  </div>
                  
                  {/* View More */}
                  <div className="flex items-center text-sm text-accent font-medium">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="aspect-video bg-gradient-to-br from-accent/20 via-accent/10 to-transparent relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-display font-black text-accent/20">
                    {String(projects.findIndex(p => p.id === selectedProject.id) + 1).padStart(2, '0')}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="bg-muted px-3 py-1.5 rounded-full text-sm text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  <Link
                    href={`/projects/${selectedProject.id}`}
                    className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Project Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
