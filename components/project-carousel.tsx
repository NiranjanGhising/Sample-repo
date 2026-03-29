"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, ExternalLink, ArrowRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

export function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  // Color schemes for project cards
  const colorSchemes = [
    { bg: "from-cyan-500/20 to-cyan-600/10", accent: "bg-cyan-500", text: "text-cyan-600 dark:text-cyan-400" },
    { bg: "from-emerald-500/20 to-emerald-600/10", accent: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400" },
    { bg: "from-violet-500/20 to-violet-600/10", accent: "bg-violet-500", text: "text-violet-600 dark:text-violet-400" },
    { bg: "from-orange-500/20 to-orange-600/10", accent: "bg-orange-500", text: "text-orange-600 dark:text-orange-400" },
    { bg: "from-rose-500/20 to-rose-600/10", accent: "bg-rose-500", text: "text-rose-600 dark:text-rose-400" },
  ]

  return (
    <section id="projects" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world data analysis projects showcasing my skills in Python, visualization, and insight generation.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur border border-border shadow-lg hover:bg-muted transition-colors -translate-x-1/2 hidden md:flex"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur border border-border shadow-lg hover:bg-muted transition-colors translate-x-1/2 hidden md:flex"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Embla viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {projects.map((project, index) => {
                const colorScheme = colorSchemes[index % colorSchemes.length]
                const isSelected = index === selectedIndex
                
                return (
                  <div
                    key={project.id}
                    className="flex-[0_0_90%] md:flex-[0_0_70%] lg:flex-[0_0_50%] min-w-0 pl-4"
                  >
                    <motion.div
                      animate={{
                        scale: isSelected ? 1 : 0.9,
                        opacity: isSelected ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <div className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${colorScheme.bg} border border-border p-8 md:p-10`}>
                        {/* Large number */}
                        <div className="absolute top-6 right-6 text-8xl md:text-9xl font-display font-bold opacity-20 text-foreground select-none">
                          {index + 1}
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tools.slice(0, 3).map((tool) => (
                              <span
                                key={tool}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${colorScheme.accent} text-white`}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                            {project.title}
                          </h3>

                          {/* Summary */}
                          <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                            {project.summary}
                          </p>

                          {/* Impact */}
                          <div className={`text-sm font-medium ${colorScheme.text} mb-6`}>
                            ✨ {project.impact}
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-4">
                            <Button
                              asChild
                              className="bg-foreground text-background hover:bg-foreground/90 rounded-full"
                            >
                              <Link href={`/projects/${project.id}`}>
                                View Details
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-background/50 transition-colors"
                                aria-label={`View ${project.title} on GitHub`}
                              >
                                <Github className="h-5 w-5 text-foreground" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild className="rounded-full">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
