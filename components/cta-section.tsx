"use client"

import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 bg-neutral-900 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Main message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Open to internships, part-time roles, and exciting data science projects. 
              Let's turn data into insights together.
            </p>
          </div>

          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link 
              href="/contact"
              className="group inline-flex items-center justify-center h-10 rounded-full px-8 bg-[#C4A052] text-neutral-900 hover:bg-[#C4A052]/90 font-medium text-sm"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link 
              href="mailto:contact@niranjanghising.com.np"
              className="inline-flex items-center justify-center h-10 rounded-full px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-neutral-900 transition-colors font-medium text-sm"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Link>
          </motion.div>

          {/* Status */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-sm text-white/60"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Currently available for opportunities</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
