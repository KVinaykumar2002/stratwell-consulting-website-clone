"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star } from "lucide-react";

const experts = [
  { name: "Lucas Shaw", rating: 4.9, position: { top: "15%", left: "10%" }, delay: 0.2 },
  { name: "Samuel Reed", rating: 4.9, position: { top: "20%", left: "35%" }, delay: 0.3 },
  { name: "Ethan Collins", rating: 4.9, position: { top: "18%", right: "12%" }, delay: 0.4 },
  { name: "Jacob Bennett", rating: 4.9, position: { top: "25%", right: "35%" }, delay: 0.5 },
  { name: "Daniel Hayes", rating: 4.9, position: { top: "65%", left: "8%" }, delay: 0.6 },
  { name: "Liam Parker", rating: 4.9, position: { top: "68%", left: "32%" }, delay: 0.7 },
  { name: "Nathan Brooks", rating: 4.9, position: { top: "70%", right: "10%" }, delay: 0.8 },
];

export default function ExpertiseShowcaseSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref} 
      className="py-32 bg-gradient-to-b from-[#0a0e1a] to-[#0f172a] relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.95)),
          repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.03) 49px, rgba(255,255,255,0.03) 50px),
          repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.03) 49px, rgba(255,255,255,0.03) 50px)
        `
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-label-badge mb-6 backdrop-blur-sm border border-primary/30">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            OUR EXPERTS
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display mb-6 text-white">
            We Find Top <span className="text-primary italic">01%</span> Talent
          </h2>
          
          <p className="text-body-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            We take the time to understand your goals and match you with the
            perfect consultant, ensuring a seamless transition into your next opportunity.
          </p>
        </motion.div>

        {/* Floating Expert Cards */}
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              className="absolute"
              style={expert.position}
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: expert.delay }}
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 border border-white/20 shadow-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  {expert.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{expert.name}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-300">{expert.rating} Ratings</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}