'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We immerse ourselves in your business to uncover challenges and opportunities.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "We design tailored strategies that align with your goals and available resources.",
  },
  {
    number: "03",
    title: "Implement",
    description: "We guide execution to ensure solutions are practical, effective, and sustainable.",
  },
  {
    number: "04",
    title: "Measure",
    description: "We monitor performance, refine processes, and deliver clear, tangible results.",
  },
];

const ApproachStep = ({ step, index }: { step: typeof approachSteps[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <motion.li
      ref={ref as React.RefObject<HTMLLIElement>}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-white/5">
        <p className="font-display text-[32px] text-gray-400">{step.number}</p>
      </div>
      <div className="text-center sm:text-left">
        <h3 className="font-display text-white text-3xl font-semibold mb-2">
          {step.title}
        </h3>
        <p className="text-white/70 text-base font-normal leading-[1.6]">
          {step.description}
        </p>
      </div>
    </motion.li>
  );
};

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[#0F1828] py-16 sm:py-20 lg:py-32" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-5 lg:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#E8EBFF] rounded-full px-4 py-2 mb-8">
            <p className="text-[#2639ED] text-[13px] font-semibold leading-none tracking-[0.05em] uppercase">
              Our Approach
            </p>
          </div>
          <h2 className="font-display text-white text-3xl md:text-4xl lg:text-[45px] lg:leading-[1.3] mb-16 lg:mb-24">
            At Stratwell Consulting, we believe that strategy should do more than sit on paper — it should drive measurable change.
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-16">
            {approachSteps.map((step, index) => (
              <ApproachStep key={step.number} step={step} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;