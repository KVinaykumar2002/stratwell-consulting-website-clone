"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import StatisticsSection from "@/components/sections/statistics";
import ServicesSection from "@/components/sections/services";
import FeatureSection from "@/components/ui/stack-feature-section";
import CaseStudies from "@/components/sections/case-studies";
import Testimonials from "@/components/sections/testimonials";
import AboutSection from "@/components/sections/about";
import ApproachSection from "@/components/sections/approach";
import TrustedBy from "@/components/sections/trusted-by";
import CtaFinal from "@/components/sections/cta-final";
import Footer from "@/components/sections/footer";
import TeamCommunitySection from "@/components/sections/team-community";
import ExpertiseShowcaseSection from "@/components/sections/expertise-showcase";
import GlobalReachSection from "@/components/sections/global-reach";
import GlobalNetworkSection from "@/components/sections/global-network";
import FeaturesAccordionSection from "@/components/sections/features-accordion";
import CurvedLoop from "@/components/CurvedLoop";
import { NeonOrbs } from "@/components/ui/neon-orbs";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <NeonOrbs />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <div className="container">
        <div className="h-px bg-border my-20" />
      </div>
      <ServicesSection />
      <div className="container">
        <div className="h-px bg-border my-20" />
      </div>
      <FeatureSection />
      <div className="container">
        <div className="h-px bg-border my-20" />
      </div>
      <CaseStudies />
     
      <TeamCommunitySection />
      <div className="py-8 overflow-visible">
        <CurvedLoop 
          marqueeText="Welcome to TechnoRealm ✦"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
        />
      </div>
      <AboutSection />
      <FeaturesAccordionSection />
      <ExpertiseShowcaseSection />
      <ApproachSection />
      <GlobalReachSection />
      <GlobalNetworkSection />
      <TrustedBy />
      <Testimonials />
      <div className="container px-6 pb-20">
        <CtaFinal />
      </div>
      <Footer />
    </main>
  );
}