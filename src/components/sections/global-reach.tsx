"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function GlobalReachSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Globe Background */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-30"
            />

            {/* Globe Map */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative z-10"
            >
              <svg width="350" height="350" viewBox="0 0 200 200" fill="none">
                {/* Simplified world map paths */}
                <motion.path
                  d="M30,80 Q50,70 70,75 T90,85 Q95,90 100,88 T120,90"
                  stroke="#93c5fd"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.path
                  d="M40,100 Q60,95 80,100 T100,105 Q110,108 120,105"
                  stroke="#bfdbfe"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
                <motion.circle cx="50" cy="80" r="15" fill="#dbeafe" opacity="0.5" />
                <motion.circle cx="100" cy="90" r="20" fill="#bfdbfe" opacity="0.5" />
                <motion.circle cx="130" cy="100" r="12" fill="#dbeafe" opacity="0.5" />
              </svg>
            </motion.div>

            {/* Paper Plane */}
            <motion.div
              initial={{ x: -100, y: 100, opacity: 0 }}
              animate={isVisible ? { x: 0, y: 0, opacity: 1 } : { x: -100, y: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-12 right-12 z-20"
            >
              <motion.div
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                  <path d="M10,50 L50,10 L90,50 L50,40 L40,80 Z" fill="url(#planeGradient)" />
                  <defs>
                    <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>

            {/* Profile Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-20 left-8 bg-white rounded-full w-16 h-16 shadow-xl border-4 border-white overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-24 right-16 bg-white rounded-full w-16 h-16 shadow-xl border-4 border-white overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500" />
            </motion.div>

            {/* Card Display */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute bottom-12 left-12 bg-white rounded-2xl shadow-2xl p-4 border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-6 h-4 rounded-sm bg-gradient-to-br from-red-500 to-yellow-500" />
                  <div className="w-6 h-4 rounded-sm bg-gradient-to-br from-yellow-500 to-orange-500" />
                </div>
                <div className="flex gap-1 text-xs font-mono">
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span className="font-bold">7328</span>
                </div>
              </div>
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 80,150 Q 180,180 280,220"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
              />
            </svg>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-label-badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              GLOBAL REACH
            </div>

            <h2 className="text-5xl md:text-6xl font-display mb-6">
              Work with clients{" "}
              <span className="italic">everywhere,</span> deliver results{" "}
              <span className="italic">effortlessly</span>
            </h2>

            <p className="text-body-lg text-text-body mb-8">
              Our global network and digital-first approach enable seamless collaboration
              across time zones and borders. We connect expertise with opportunity,
              ensuring flexible consulting solutions that adapt to your business needs.
            </p>

            <button className="group relative inline-flex items-center h-14 px-6 bg-[#2639ED] text-white rounded-2xl overflow-hidden transition-all duration-300 text-button mb-8">
              {/* Overlay animation from left to right - darker blue */}
              <span className="absolute inset-0 bg-[#1B28C3] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-2xl"></span>
              
              {/* Text */}
              <span className="relative z-10 leading-none transition-colors duration-300 delay-100 mr-3">
                Learn more
              </span>
              
              {/* Blue circle with arrow - aligned next to text */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-white/20 rounded-full transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-text-body italic mb-2">
                  "We know the consulting market very well and this approach provides
                  the speed, flexible engagement model and results-first methodology
                  that no one else can match."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}