'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const CtaFinal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl bg-primary-navy py-[120px] px-4 md:py-20 sm:py-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/G6uXFBOzh6vAiHkQIbFMIYuCAc-11.jpg"
        alt="A business team collaborating in a modern office."
        fill
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="absolute inset-0 z-10 bg-primary-navy/[.65]" />
      <motion.div 
        className="relative z-20 flex w-full max-w-[680px] flex-col items-center gap-6 rounded-3xl bg-white/[.08] p-10 text-center backdrop-blur-[8px] md:p-8 sm:p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="font-display text-[56px] font-normal leading-[1.2] tracking-[-0.01em] text-white md:text-[48px] sm:text-[40px]">
          Ready to <em className="italic">Transform</em> Your Business?
        </h2>
        <p className="max-w-xl font-body text-base leading-[1.6] text-white/70">
          Schedule a free consultation and discover how Stratwell Consulting can streamline your operations, optimize performance, and deliver measurable results.
        </p>
        <Link
          href="/contact"
          className="mt-2 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-medium text-primary-navy transition-colors hover:bg-neutral-200"
        >
          <span className="text-base">Get Started Today</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAEFF5]">
            <ArrowRight className="h-4 w-4 text-primary-navy" />
          </div>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default CtaFinal;