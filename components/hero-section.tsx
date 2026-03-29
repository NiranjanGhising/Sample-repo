"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Big scattered "NIRANJAN" typography like reference "PORTFOLIO" */}
        <div className="relative flex items-center justify-center">
          {/* The scattered letters */}
          <div className="relative">
            {/* Year badge '25 */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -top-4 right-0 md:right-8 text-3xl md:text-4xl font-display font-bold text-foreground z-20"
            >
              '25
            </motion.span>

            {/* Main NIRANJAN text - scattered/playful like reference */}
            <h1 className="font-display font-extrabold text-foreground leading-none tracking-tighter select-none">
              <div className="flex items-end justify-center relative">
                {/* N */}
                <motion.span
                  initial={{ y: 50, opacity: 0, rotate: -10 }}
                  animate={{ y: 0, opacity: 1, rotate: -5 }}
                  transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
                  className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] inline-block origin-bottom"
                >
                  N
                </motion.span>
                
                {/* I - smaller, rotated */}
                <motion.span
                  initial={{ y: -30, opacity: 0, rotate: 15 }}
                  animate={{ y: -10, opacity: 1, rotate: 8 }}
                  transition={{ delay: 0.15, duration: 0.6, type: "spring" }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block -ml-1 md:-ml-2"
                >
                  I
                </motion.span>
                
                {/* R - tilted other way */}
                <motion.span
                  initial={{ y: 40, opacity: 0, rotate: 5 }}
                  animate={{ y: 5, opacity: 1, rotate: -3 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl inline-block -ml-1"
                >
                  R
                </motion.span>
                
                {/* A */}
                <motion.span
                  initial={{ y: -20, opacity: 0, rotate: -8 }}
                  animate={{ y: -15, opacity: 1, rotate: 4 }}
                  transition={{ delay: 0.25, duration: 0.6, type: "spring" }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl inline-block"
                >
                  A
                </motion.span>
                
                {/* N */}
                <motion.span
                  initial={{ y: 30, opacity: 0, rotate: 10 }}
                  animate={{ y: 10, opacity: 1, rotate: -2 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] inline-block -ml-2"
                >
                  N
                </motion.span>
                
                {/* J - with illustrated avatar overlapping */}
                <motion.span
                  initial={{ y: -25, opacity: 0, rotate: -12 }}
                  animate={{ y: 0, opacity: 1, rotate: 6 }}
                  transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block relative"
                >
                  J
                </motion.span>
                
                {/* A */}
                <motion.span
                  initial={{ y: 35, opacity: 0, rotate: 8 }}
                  animate={{ y: 5, opacity: 1, rotate: -4 }}
                  transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl inline-block -ml-1"
                >
                  A
                </motion.span>
                
                {/* N - last letter */}
                <motion.span
                  initial={{ y: -15, opacity: 0, rotate: -6 }}
                  animate={{ y: -5, opacity: 1, rotate: 3 }}
                  transition={{ delay: 0.45, duration: 0.6, type: "spring" }}
                  className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] inline-block"
                >
                  N
                </motion.span>
              </div>
            </h1>
            
            {/* Avatar illustration overlapping the text - centered and larger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="absolute left-1/2 -translate-x-1/2 -top-20 md:-top-32 lg:-top-40 z-10"
            >
              <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] relative">
                <Image
                  src="/me_Animated.png"
                  alt="Niranjan Ghising - Illustrated Avatar"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Name subtitle below - golden/brown like reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-4 md:mt-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-accent tracking-wide uppercase">
            Niranjan Ghising
          </h2>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
          </motion.div>
        </div>
      </motion.a>
    </section>
  )
}
