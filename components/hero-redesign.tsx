"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function HeroRedesign() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Bold Typography */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Playful scattered name */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Main name with scattered letters effect */}
                <h1 className="font-display font-bold text-foreground leading-none select-none">
                  <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter">
                    <motion.span
                      initial={{ y: 20, rotate: -5 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="inline-block"
                    >
                      N
                    </motion.span>
                    <motion.span
                      initial={{ y: -15, rotate: 3 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                      className="inline-block text-accent"
                    >
                      I
                    </motion.span>
                    <motion.span
                      initial={{ y: 10, rotate: -2 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-block"
                    >
                      R
                    </motion.span>
                    <motion.span
                      initial={{ y: -20, rotate: 4 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.25, duration: 0.5 }}
                      className="inline-block"
                    >
                      A
                    </motion.span>
                    <motion.span
                      initial={{ y: 15, rotate: -3 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="inline-block text-accent"
                    >
                      N
                    </motion.span>
                    <motion.span
                      initial={{ y: -10, rotate: 2 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      className="inline-block"
                    >
                      J
                    </motion.span>
                    <motion.span
                      initial={{ y: 20, rotate: -4 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="inline-block"
                    >
                      A
                    </motion.span>
                    <motion.span
                      initial={{ y: -15, rotate: 5 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      className="inline-block text-accent"
                    >
                      N
                    </motion.span>
                  </span>
                </h1>
                
                {/* Year badge like reference */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute -top-2 -right-2 sm:top-0 sm:right-0 text-2xl sm:text-3xl font-display font-bold text-accent"
                >
                  '25
                </motion.span>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-muted-foreground max-w-md">
                Data Analyst Student turning{" "}
                <span className="text-foreground font-medium">messy data</span> into{" "}
                <span className="text-accent font-medium">clear decisions</span>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 rounded-full text-lg"
                asChild
              >
                <Link href="/contact">
                  Let's work together
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted px-8 py-6 rounded-full text-lg bg-transparent"
                asChild
              >
                <Link href="/resume">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/NiranjanGhising"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/niranjan-ghising-04500424a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contact@niranjanghising.com"
                  className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Avatar Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-[3rem] transform rotate-6 scale-105" />
              
              {/* Avatar container styled like an ID badge */}
              <div className="relative bg-card border-2 border-border rounded-[2rem] p-6 shadow-2xl max-w-sm">
                {/* Lanyard hole */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-muted rounded-full border-4 border-border" />
                
                {/* Avatar image placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Placeholder - Replace with actual avatar */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-5xl font-display font-bold text-accent">N</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Illustrated avatar coming soon
                    </p>
                  </div>
                  {/* Uncomment and update src when you have avatar image:
                  <Image
                    src="/avatar.png"
                    alt="Niranjan Ghising - Illustrated Avatar"
                    fill
                    className="object-cover"
                    priority
                  />
                  */}
                </div>
                
                {/* Badge info */}
                <div className="mt-4 text-center">
                  <h2 className="font-display font-bold text-lg text-foreground">
                    Niranjan Ghising
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Data Analyst Student
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8 border-t border-b border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground">3+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">Python</div>
              <div className="text-sm text-muted-foreground mt-1">Primary Tool</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground">2027</div>
              <div className="text-sm text-muted-foreground mt-1">Graduate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
