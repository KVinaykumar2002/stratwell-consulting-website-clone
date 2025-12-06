'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface CaseStudy {
  image: string;
  alt: string;
  tag1: string;
  tag1Color: 'blue' | 'purple';
  tag2: string;
  title: string;
  description: string;
  href: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/h1FFMflbeNYPldZVJSJvCtFF08-2.jpg",
    alt: "SaaS cover image",
    tag1: "Business Strategy",
    tag1Color: "blue",
    tag2: "SaaS Startup",
    title: "Helped a SaaS startup grow revenue 65% in 12 months.",
    description: "We helped a fast-growing SaaS company refine its go-to-market strategy, resulting in a 65% revenue increase in just 12 months.",
    href: '#',
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/IPPUqw8xXSnl5QW2tjJ6v5dovDo-3.jpg",
    alt: "Manufacturing cover image",
    tag1: "Operations Optimization",
    tag1Color: "purple",
    tag2: "Manufacturing",
    title: "Get 20% Cost Savings & Efficiency for Manufacturing company",
    description: "Through a detailed operations audit, process redesign, and automation of key workflows, we reduced overhead by 20% while improving on-time delivery rates and overall efficiency.",
    href: '#',
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/bWNDsHzhR05nWHFwzgqstonYog-4.jpg",
    alt: "E-commerce cover image",
    tag1: "Financial Advisory",
    tag1Color: "blue",
    tag2: "e-commerce",
    title: "Transforming Financial Strategy for Sustainable Growth",
    description: "A leading consulting firm helped a mid-sized enterprise optimize finances, improve cash flow, and implement strategic investments, resulting in increased profitability and long-term business resilience.",
    href: '#',
  }
];

const CategoryBadge = ({ text, color }: { text: string; color: 'blue' | 'purple' }) => {
  const colorClass = color === 'blue' ? 'bg-[#475DF3]' : 'bg-[#9747FF]';
  return (
    <div className={`rounded-full px-3.5 py-1 text-white text-[13px] font-semibold ${colorClass}`}>
      {text}
    </div>
  );
};

const SubCategoryBadge = ({ text }: { text: string }) => (
  <div className="rounded-full px-3.5 py-1 bg-white/10 backdrop-blur-[2px] text-white text-[13px] font-semibold">
    {text}
  </div>
);

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link href={study.href} className="group relative block aspect-[4/5] w-full h-[480px] overflow-hidden rounded-3xl">
        <Image
          src={study.image}
          alt={study.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1828E6] via-[#0F182866] to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
          <div className="flex flex-wrap gap-2 mb-4">
            <CategoryBadge text={study.tag1} color={study.tag1Color} />
            <SubCategoryBadge text={study.tag2} />
          </div>
          <h3 className="font-display text-3xl font-semibold leading-snug mb-3">
            {study.title}
          </h3>
          <p className="text-white/70 text-sm font-normal leading-relaxed mb-6">
            {study.description}
          </p>
          <div className="mt-auto flex items-center gap-3 font-medium text-base text-white">
            View Case Study
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};


export default function CaseStudies() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[#E8EBF2] py-[120px]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-blue bg-badge-blue px-4 py-[5px] text-primary-blue">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-blue" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.05em] leading-none">
              Case Studies
            </span>
          </div>
          <h2 className="font-display text-[56px] font-normal leading-[1.2] tracking-[-0.01em] text-primary-navy max-w-3xl">
            Proven <em className="font-normal not-italic">Results</em> Across Industries
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-[60px] flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="#" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-primary-blue px-7 py-4 text-white text-base font-medium transition-colors hover:bg-hover-blue">
            View More Case Studies
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}