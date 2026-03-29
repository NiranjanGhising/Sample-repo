"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Avatar - Centered and Large, positioned above text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="flex justify-center mb-[-80px] md:mb-[-120px] lg:mb-[-160px] relative z-20"
        >
          <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] lg:w-96 lg:h-[32rem] relative">
            <Image
              src="/me_Animated.png"
              alt="Niranjan Ghising - Illustrated Avatar"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Big scattered "NIRANJAN" typography */}
        <div className="relative flex items-center justify-center">
          <div className="relative">
            {/* Year badge '18 */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -top-4 right-0 md:right-8 text-3xl md:text-4xl font-display font-bold text-foreground z-30"
            >
              '18
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
                
                {/* J */}
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
    </section>
  )
}
