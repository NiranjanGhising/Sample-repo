"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Data from aboutme.json
const aboutData = {
  name: "Niranjan Ghising",
  headline: "Data Fellow 2025 | Data Science | AI Enthusiastic",
  bio: "I am a Data Science enthusiast and I love solving problems, questioning 'why,' and making data tell stories. Data Science isn't just about numbers; it's about people, patterns, and the tiny details that make insights worth pursuing. It's not just about looking good; it's about feeling effortless. If it makes sense without overthinking, I've done my job.",
  education: {
    institution: "Asia Pacific University of Technology and Innovation (APU)",
    degree: "BSc (Hons) in Information Technology",
    years: "2024 - 2027"
  }
}

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left: Compact ID Card with Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <div className="relative pt-12 lg:pt-16">
              {/* Lanyard */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12 lg:h-16 bg-gradient-to-b from-transparent via-gray-300 to-gray-400 dark:via-gray-600 dark:to-gray-500" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6">
                <div className="w-full h-full border-2 border-gray-400 dark:border-gray-500 rounded-full bg-background" />
              </div>
              
              {/* ID Card - Smaller and Compact */}
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl w-56 mx-auto lg:mx-0">
                {/* Photo area - smaller aspect ratio */}
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 dark:from-blue-900/30 dark:via-sky-900/20 dark:to-cyan-900/30 relative overflow-hidden">
                  <Image
                    src="/niranjan-photo.jpg"
                    alt="Niranjan Ghising"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                
                {/* Card info - compact */}
                <div className="p-3 text-center bg-card">
                  <h3 className="font-display font-bold text-sm text-foreground">{aboutData.name}</h3>
                  <p className="text-xs text-muted-foreground">{aboutData.education.degree}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{aboutData.education.institution}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Bio - Aligned with card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 lg:pt-12"
          >
            {/* Greeting */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                HI, I'm <span className="text-accent">{aboutData.name.split(' ')[0]}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {aboutData.bio}
              </p>
            </div>
            
            {/* Education highlight */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Currently studying <span className="text-accent font-medium">{aboutData.education.degree}</span> at{" "}
                <span className="text-foreground font-medium">{aboutData.education.institution}</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">{aboutData.education.years}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
