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
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: ID Card with Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Lanyard */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-gray-300 to-gray-400 dark:via-gray-600 dark:to-gray-500" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-8 h-8">
                <div className="w-full h-full border-4 border-gray-400 dark:border-gray-500 rounded-full bg-background" />
              </div>
              
              {/* ID Card */}
              <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                {/* Photo area */}
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100 dark:from-blue-900/30 dark:via-sky-900/20 dark:to-cyan-900/30 relative overflow-hidden">
                  <Image
                    src="/niranjan-photo.jpg"
                    alt="Niranjan Ghising"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                
                {/* Card info */}
                <div className="p-4 text-center bg-card">
                  <h3 className="font-display font-bold text-lg text-foreground">{aboutData.name}</h3>
                  <p className="text-sm text-muted-foreground">{aboutData.education.degree}</p>
                  <p className="text-xs text-muted-foreground mt-1">{aboutData.education.institution}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Bio Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Greeting */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                HI, I'm <span className="text-accent">{aboutData.name.split(' ')[0]}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {aboutData.bio}
              </p>
            </div>
            
            {/* Education highlight */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Currently studying <span className="text-foreground font-medium">{aboutData.education.degree}</span> at{" "}
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
