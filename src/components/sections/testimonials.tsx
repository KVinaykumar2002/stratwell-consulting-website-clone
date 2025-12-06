'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Vika Nightshade',
    title: 'Founder, Retail Group',
    quote: '"Their expertise gave us the clarity to make smarter decisions and accelerate growth in record time."',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/DCBDjx44AuCf5b4Sop3JY4cfSw8-5.jpg',
  },
  {
    name: 'Mike Scott',
    title: 'CEO, Tech',
    quote: '"Stratwell gave us clarity when we needed it most—and results that exceeded expectations."',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/EbuEIRSFMZqqEnQCuigsuqBXRM-6.jpg',
  },
  {
    name: 'Anna White',
    title: 'COO, Retail Group',
    quote: '"Working with them gave us back valuable time, reduced expenses, and simplified everything."',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/4b4JmjE93g5ut9rRkQ1ByyXbGE-7.jpg',
  },
  {
    name: 'Marlo Fentris',
    title: 'CEO, Construction',
    quote: '"Their expertise gave us the clarity to make smarter decisions and accelerate growth in record time."',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/bD8BwLEuwK8d4LOSQvuCWMi0pUo-8.jpg',
  },
  {
    name: 'John Ravenwood',
    title: 'Co-Owner, Manufacturing Firm',
    quote: '"What impressed us most was how quickly their strategies turned into real results across the business."',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/oaP8cA7xInnmwqPQJtdh4s6ipbY-9.jpg',
  },
];

const TestimonialCard = ({
  name,
  title,
  quote,
  image,
}: {
  name: string;
  title: string;
  quote: string;
  image: string;
}) => (
  <div className="relative w-[280px] h-[400px] rounded-3xl overflow-hidden flex-shrink-0 shadow-[0_4px_24px_rgba(15,24,40,0.08)]">
    <Image
      src={image}
      alt={`Portrait of ${name}`}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,24,40,0.8)] via-[rgba(15,24,40,0.4)] to-transparent" />
    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
      <p className="text-lg leading-snug mb-6">{quote}</p>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-sm text-white/80">{title}</p>
        </div>
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <Play className="w-5 h-5 text-primary-navy fill-primary-navy ml-1" />
        </button>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const cardWidth = 280;
    const gap = 24;
    const scrollSpeed = 0.5;
    const totalWidth = testimonials.length * (cardWidth + gap);

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollAmount += scrollSpeed;
        
        if (scrollAmount >= totalWidth) {
          scrollAmount = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="bg-primary-navy text-text-light py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full bg-accent px-4 py-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <p className="text-primary text-label-badge">TESTIMONIALS</p>
        </div>
        <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
          What Our Clients Say
        </h2>
      </div>
      <div 
        className="mt-20"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent)',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={scrollRef}
          className="flex gap-6 w-max"
          style={{ willChange: 'transform' }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}