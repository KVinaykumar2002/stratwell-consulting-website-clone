"use client";

import { useEffect } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ServiceGrid, Service } from "@/components/ui/service-grid";

// IT Consultancy services with Unsplash images
const itConsultancyServices: Service[] = [
  {
    name: "Cloud Migration",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&q=80",
    href: "/services/cloud-migration",
  },
  {
    name: "DevOps",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&q=80",
    href: "/services/devops",
  },
  {
    name: "Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop&q=80",
    href: "/services/cybersecurity",
  },
  {
    name: "Software Development",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&q=80",
    href: "/services/software-development",
  },
  {
    name: "Data Analytics",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&q=80",
    href: "/services/data-analytics",
  },
  {
    name: "AI & Machine Learning",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&q=80",
    href: "/services/ai-ml",
  },
  {
    name: "Cloud Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&q=80",
    href: "/services/cloud-infrastructure",
  },
  {
    name: "API Development",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80",
    href: "/services/api-development",
  },
  {
    name: "Database Management",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=400&fit=crop&q=80",
    href: "/services/database-management",
  },
  {
    name: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=400&fit=crop&q=80",
    href: "/services/ui-ux-design",
  },
  {
    name: "Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&q=80",
    href: "/services/digital-transformation",
  },
  {
    name: "IT Strategy",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80",
    href: "/services/it-strategy",
  },
  {
    name: "System Integration",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&q=80",
    href: "/services/system-integration",
  },
  {
    name: "Mobile Development",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&q=80",
    href: "/services/mobile-development",
  },
  {
    name: "Quality Assurance",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop&q=80",
    href: "/services/quality-assurance",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceGrid
        title="Our IT Consultancy Services"
        subtitle="Comprehensive technology solutions to drive your business forward. Choose from our wide range of expert IT services."
        services={itConsultancyServices}
        className="pt-32"
      />
      <Footer />
    </main>
  );
}

