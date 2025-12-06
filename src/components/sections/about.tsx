'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FloatingElement } from "@/components/ui/floating-element";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-background py-[60px] md:py-20 lg:py-[120px] relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start relative">
          {/* Floating decorative profile cards */}
          <FloatingElement
            delay={0}
            duration={15}
            xOffset={-80}
            yOffset={-100}
            className="hidden lg:block left-[10%] top-[15%] z-10"
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                OG
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Oliver Grant</p>
                <p className="text-xs text-muted-foreground">Investor</p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement
            delay={2}
            duration={18}
            xOffset={0}
            yOffset={0}
            className="hidden lg:block right-[15%] top-[10%] z-10"
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">
                MG
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Martin Garez</p>
                <p className="text-xs text-muted-foreground">Trader</p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement
            delay={1}
            duration={16}
            xOffset={20}
            yOffset={20}
            className="hidden lg:block left-[5%] bottom-[20%] z-10"
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">
                JG
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">James Garret</p>
                <p className="text-xs text-muted-foreground">CEO of Nexoro</p>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement
            delay={3}
            duration={17}
            xOffset={-20}
            yOffset={-20}
            className="hidden lg:block right-[10%] bottom-[15%] z-10"
          >
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Mary Rodriguez</p>
                <p className="text-xs text-muted-foreground">Junior Trader</p>
              </div>
            </div>
          </FloatingElement>

          {/* Connecting lines SVG overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 5 }}>
            <motion.path
              d="M 200 150 Q 400 200 600 180"
              stroke="rgba(38, 57, 237, 0.2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M 150 400 Q 350 350 550 420"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <motion.path
              d="M 700 250 Q 650 400 750 500"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0.9 }}
            />
          </svg>

          <motion.div 
            className="order-2 lg:order-1 relative z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-3xl shadow-[0_4px_24px_rgba(15,24,40,0.08)] p-10">
              <div className="mb-6">
                <div className="inline-flex items-center rounded-full bg-accent px-4 py-2">
                  <span className="font-body text-[13px] font-semibold uppercase tracking-[0.05em] text-accent-foreground">
                    Our Goal
                  </span>
                </div>
              </div>
              <h2 className="font-display text-[40px] font-semibold leading-[1.2] text-foreground mb-6">
                Transforming Strategy into <em className="italic">Results</em>
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
                Our team brings together expertise in strategy, operations,
                finance, and digital transformation, with one shared mission: to
                simplify complexity and deliver results that last. Whether it's
                entering new markets, streamlining processes, or guiding
                organizational change, we focus on creating solutions that are
                practical, actionable, and aligned with your goals.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0F1828] text-white text-base font-medium py-4 px-6 rounded-xl hover:bg-[#0F1828]/90 transition-colors"
              >
                Meet Our Team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2 relative z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-[94/100] rounded-3xl shadow-[0_4px_24px_rgba(15,24,40,0.08)] overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/vx1HXVs37pYbdKL6ZMAgtcAnHas-10.jpg"
                alt="Two business professionals reviewing a tablet"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}