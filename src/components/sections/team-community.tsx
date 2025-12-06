"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const teamMembers = [
  { name: "Oliver Grant", role: "Senior Strategist", position: { top: "15%", left: "5%" }, delay: 0.2 },
  { name: "Martin Garez", role: "Operations Lead", position: { top: "12%", right: "8%" }, delay: 0.4 },
  { name: "James Garret", role: "CEO", position: { top: "50%", left: "8%" }, delay: 0.6 },
  { name: "Mary Rodriguez", role: "Digital Advisor", position: { top: "55%", right: "10%" }, delay: 0.8 },
];

const connections = [
  { from: { top: "20%", left: "10%" }, to: { top: "50%", left: "20%" }, color: "stroke-purple-400" },
  { from: { top: "20%", right: "12%" }, to: { top: "50%", right: "20%" }, color: "stroke-yellow-400" },
  { from: { top: "50%", left: "15%" }, to: { top: "60%", right: "15%" }, color: "stroke-blue-400" },
];

export default function TeamCommunitySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-label-badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            OUR COMMUNITY
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display mb-6">
            We are a community of{" "}
            <span className="italic">strategists, experts,</span> and visionaries
          </h2>
          
          <p className="text-body-lg text-text-body mb-10 max-w-3xl mx-auto">
            Dedicated to helping you build sustainable growth with confidence.
            Our mission is to make strategic consulting accessible, understandable,
            and actionable for everyone, from startups to established enterprises.
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-hover-blue transition-all text-button group">
            About us
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Floating Team Cards */}
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="absolute"
              style={member.position}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: member.delay }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 backdrop-blur-sm border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-semibold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((connection, index) => (
              <motion.path
                key={index}
                d={`M ${connection.from.left || `calc(100% - ${connection.from.right})`} ${connection.from.top} Q 50% 50%, ${connection.to.left || `calc(100% - ${connection.to.right})`} ${connection.to.top}`}
                className={`${connection.color} fill-none`}
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isVisible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.5, delay: 1 + index * 0.3 }}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}