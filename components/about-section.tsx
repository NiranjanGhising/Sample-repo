"use client"

import { motion } from "framer-motion"

interface AboutSectionProps {
  className?: string
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section id="about" className={`py-20 bg-background ${className || ""}`}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a Data Analyst student from Kathmandu, Nepal with a passion for 
            turning messy data into clear, actionable insights. I love solving 
            problems, questioning "why," and making things make sense.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Currently pursuing my degree while building real-world projects in 
            data analysis and visualization. I believe good data work isn't just 
            about numbers—it's about telling stories that drive decisions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
