"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="https://framerusercontent.com/assets/wgHWlu6sTglBDJ9jxgyB4tfvEY.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-label="Business professionals collaborating in a modern office."
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F182866] to-[#0F182899]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <motion.div 
            className="w-full lg:max-w-[680px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-[56px] font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-[72px]">
              Strategy That Powers <em className="italic">Your Next Level</em> of Growth.
            </h1>
          </motion.div>
          <motion.div 
            className="flex w-full flex-col items-start gap-10 lg:max-w-[440px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body text-xl font-normal leading-[1.6] text-white">
              We help businesses unlock opportunities, scale faster, and achieve
              measurable results through data-driven strategies.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-medium leading-none text-primary-navy transition-colors hover:bg-secondary"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}