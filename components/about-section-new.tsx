"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Data from aboutme.json
const aboutData = {
  name: "Niranjan Ghising",
  headline: "Data Fellow 2025 | Data Science | AI Enthusiastic",
  bio: "I am a Data Science enthusiast and I love solving problems, questioning 'why,' and making data tell stories. Data Science isn't just about numbers; it's about people, patterns, and the tiny details that make insights worth pursuing. It's not just about looking good; it's about feeling effortless. If it makes sense without overthinking, I've done my job.",
  hobbies: ["Sports", "Building new things", "Anime"],
  interests: ["AI systems", "Analytics", "Workflow automation"]
}

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left: ID Card - Clean, no ribbon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <div className="relative">
              {/* ID Card */}
              <motion.div 
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl w-64 lg:w-72 mx-auto lg:mx-0 relative"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Photo area */}
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 relative overflow-hidden">
                  <Image
                    src="/niranjan-photo.jpg"
                    alt="Niranjan Ghising"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                
                {/* Card info */}
                <div className="p-4 text-center bg-card border-t border-border/50">
                  <h3 className="font-display font-bold text-base lg:text-lg text-foreground">{aboutData.name}</h3>
                  <p className="text-sm text-accent font-medium mt-1">Data Science Enthusiast</p>
                  <p className="text-xs text-muted-foreground mt-1">AI • Analytics • Automation</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right: Bio + Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 lg:pt-16"
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
            
            {/* Hobbies & Interests - Clean inline design */}
            <div className="pt-4 border-t border-border space-y-4">
              {/* Hobbies */}
              <div className="flex items-start gap-3">
                <span className="text-sm font-semibold text-foreground min-w-[80px]">Hobbies</span>
                <div className="flex flex-wrap gap-2">
                  {aboutData.hobbies.map((hobby, i) => (
                    <span key={i} className="text-sm text-muted-foreground px-3 py-1 bg-muted/50 rounded-full">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Interests */}
              <div className="flex items-start gap-3">
                <span className="text-sm font-semibold text-foreground min-w-[80px]">Interests</span>
                <div className="flex flex-wrap gap-2">
                  {aboutData.interests.map((interest, i) => (
                    <span key={i} className="text-sm text-muted-foreground px-3 py-1 bg-muted/50 rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
