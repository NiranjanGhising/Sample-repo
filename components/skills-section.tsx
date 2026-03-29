"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

// Skills from aboutme.json + Data Engineering skills
const skillsData = {
  core: ["Python", "SQL", "Pandas", "NumPy"],
  dataEngineering: ["Data Cleaning", "EDA", "ETL", "ELT"],
  analytics: ["Tableau", "Power BI"],
  tools: ["R", "GitHub"],
  web: ["TypeScript", "JavaScript", "Next.js", "Tailwind CSS"]
}

const categories = [
  { key: "all", label: "All" },
  { key: "core", label: "Core" },
  { key: "dataEngineering", label: "Data Engineering" },
  { key: "analytics", label: "Analytics" },
  { key: "tools", label: "Tools" },
  { key: "web", label: "Web" },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return [...skillsData.core, ...skillsData.dataEngineering, ...skillsData.analytics, ...skillsData.tools, ...skillsData.web]
    }
    return skillsData[activeCategory as keyof typeof skillsData] || []
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to turn data into insights
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.key
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-transparent border border-border text-foreground hover:bg-muted"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-background border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all cursor-default"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
