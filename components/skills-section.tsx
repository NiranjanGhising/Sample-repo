"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { skills } from "@/data/skills"
import type { Skill } from "@/lib/types"
import { TrendingUp, Award, Code, BarChart3 } from "lucide-react"

const categories = [
  { key: "all", label: "All Skills", icon: Award },
  { key: "programming", label: "Programming", icon: Code },
  { key: "tools", label: "Tools", icon: BarChart3 },
  { key: "analysis", label: "Analysis", icon: TrendingUp },
  { key: "visualization", label: "Visualization", icon: BarChart3 },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="space-y-16">
          {/* Enhanced section header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent font-medium text-sm">
              <Award className="w-4 h-4" />
              Technical Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Skills & <span className="text-accent">Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proficient in modern data analysis tools and techniques with hands-on project experience across multiple
              domains
            </p>
          </div>

          {/* Enhanced filter chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.key}
                  variant={activeCategory === category.key ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(category.key)}
                  className={`transition-all duration-300 rounded-full px-6 py-3 h-auto ${
                    activeCategory === category.key
                      ? "bg-accent hover:bg-accent/90 text-background shadow-lg scale-105"
                      : "border-accent/30 hover:border-accent hover:bg-accent/5 hover:scale-105"
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>

          {/* Enhanced skills grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className={`group bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-6">
        {/* Skill name and category */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {skill.name}
          </h3>
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 font-medium px-3 py-1">
            {skill.category}
          </Badge>
        </div>

        {/* Enhanced proficiency visualization */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Proficiency Level</span>
            <span className="text-lg font-bold text-accent">{skill.proficiency}%</span>
          </div>

          {/* Animated progress bar */}
          <div className="relative w-full bg-accent/10 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-accent to-accent/80 h-3 rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: isVisible ? `${skill.proficiency}%` : "0%" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>

          {/* Proficiency level indicator */}
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Beginner</span>
            <span>Intermediate</span>
            <span>Advanced</span>
            <span>Expert</span>
          </div>
        </div>

        {/* Skill level description */}
        <div className="pt-2 border-t border-accent/10">
          <p className="text-sm text-muted-foreground">
            {skill.proficiency >= 90
              ? "Expert level with extensive project experience"
              : skill.proficiency >= 75
                ? "Advanced proficiency with real-world applications"
                : skill.proficiency >= 60
                  ? "Intermediate level with growing expertise"
                  : "Foundational knowledge with hands-on practice"}
          </p>
        </div>
      </div>
    </div>
  )
}
