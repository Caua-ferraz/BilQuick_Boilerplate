import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic';
import React from "react"
import TechnologyStack from "@/components/TechnologyStack";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaYoutube, FaRocket, FaLock, FaCode, FaCreditCard, FaChartLine, FaCogs, FaQuoteLeft, FaUsers } from 'react-icons/fa';
import { TbBrandOpenSource } from "react-icons/tb";
import FadeIn from "@/components/fadein";
import { generateMetadata } from "@/components/SEO";
import type { Metadata } from 'next';
import { useState } from 'react';

const WhyBetter = dynamic(() => import("@/components/WhyBetter"), { loading: () => <p>Loading WhyBetter...</p> });
const Price = dynamic(() => import("@/components/subscription/price"), { ssr: false, loading: () => <p>Loading Pricing...</p> });
const TypingTitle = dynamic(() => import("@/components/TypingTitle"), { loading: () => <p>Loading Title...</p> });
const CTASection = dynamic(() => import("@/components/cta"), { loading: () => <p>Loading CTA...</p> });
const Carousel = dynamic(() => import("@/components/ui/carousel").then(mod => mod.Carousel), { ssr: false, loading: () => <p>Loading Carousel...</p> });

export const metadata: Metadata = generateMetadata({
  title: "BilQuick - Launch Your SaaS Faster",
  description: "BilQuick is the ultimate SaaS boilerplate. Build and launch your startup in days, not months. Next.js, React, Tailwind CSS, and more.",
  keywords: "saas boilerplate, next.js template, react starter, tailwind css, supabase, stripe integration, rapid development",
  ogType: "website",
  twitterCard: "summary_large_image"
});

const features = [
  {
    icon: <FaRocket className="w-8 h-8 text-primary" />,
    title: "Rapid Development",
    description: "Launch your SaaS in days, not months. Our boilerplate provides a solid foundation with pre-built components and integrations."
  },
  {
    icon: <FaLock className="w-8 h-8 text-primary" />,
    title: "Authentication & Authorization",
    description: "Secure user management system with social logins, role-based access control, and JWT authentication out of the box."
  },
  {
    icon: <FaCode className="w-8 h-8 text-primary" />,
    title: "Modern Tech Stack",
    description: "Built with Next.js, React, TypeScript, and Tailwind CSS for a powerful, flexible, and maintainable codebase."
  },
  {
    icon: <FaCreditCard className="w-8 h-8 text-primary" />,
    title: "Subscription Management",
    description: "Integrated Stripe payment system with subscription plans, usage-based billing, and invoice generation."
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: "Analytics Dashboard",
    description: "Ready-to-use admin dashboard with key metrics, user analytics, and customizable charts for data-driven decisions."
  },
  {
    icon: <FaCogs className="w-8 h-8 text-primary" />,
    title: "Customizable & Extendable",
    description: "Easily customize the UI, add new features, or integrate additional services to fit your specific SaaS needs."
  }
];

const testimonials = [
  {
    quote: "BilQuick's boilerplate accelerated our development process by 70%. We launched our SaaS in record time.",
    author: "CTO, TechStart Inc.",
    benefit: "Rapid Development"
  },
  {
    quote: "The built-in authentication and payment integration saved us months of work. It's rock-solid and production-ready.",
    author: "Lead Developer, InnoSoft Solutions",
    benefit: "Secure & Integrated"
  },
  {
    quote: "As a solo founder, this boilerplate was a game-changer. I could focus on my unique features instead of the basics.",
    author: "Founder, SoloPreneurApp",
    benefit: "Perfect for Startups"
  },
  {
    quote: "The customizable dashboard and analytics helped us make data-driven decisions from day one.",
    author: "Product Manager, DataDriven Co.",
    benefit: "Insightful Analytics"
  }
];

const userCount = 47;

const TestimonialCard = React.memo(({ quote, author, benefit }: { quote: string; author: string; benefit: string }) => (
  <div className="bg-card p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
    <div>
      <FaQuoteLeft className="text-primary text-xl mb-2" />
      <p className="text-sm text-muted-foreground mb-4">{quote}</p>
    </div>
    <div>
      <p className="font-semibold text-sm">{author}</p>
      <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mt-1">
        {benefit}
      </span>
    </div>
  </div>
));

const TestimonialsSection = React.memo(() => (
  <section className="w-full py-16 bg-gradient-to-b from-background to-card">
    <div className="container max-w-6xl mx-auto px-4">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
      </FadeIn>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <FadeIn key={index}>
            <div className="bg-card p-8 rounded-lg shadow-lg mx-4">
              <div className="flex items-start mb-6">
                <FaQuoteLeft className="text-primary text-4xl mr-4 flex-shrink-0" />
                <p className="text-lg italic text-muted-foreground">{testimonial.quote}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-semibold text-right">{testimonial.author}</p>
                <span className="inline-block bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full mt-2">
                  {testimonial.benefit}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </Carousel>
      <FadeIn>
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
            <FaUsers className="text-lg mr-2" />
            <span className="text-base font-bold">{userCount}+ Users</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Join the growing community of developers using BilQuick
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
));

const Footer = React.memo(() => (
  <footer className="w-full bg-card mt-auto py-4 sm:py-8 px-2 sm:px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-row justify-center items-center space-x-3">
          <Link href="/privacity" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacity Policy
          </Link>
          <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
        <p className="text-center text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} BilQuick. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
));

const HeroSection = React.memo(() => (
  <section className="text-center space-y-4 sm:space-y-6 py-8 sm:py-10 md:py-20 px-2 sm:px-4 w-full bg-gradient-to-b from-background to-background/80">
    <FadeIn>
      <TypingTitle preText="Get Your SaaS Running " highlightedText="Quick" />
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
        Let our boilerplate help you setting everything in seconds!
      </p>
      <div className="mt-4 flex justify-center">
        <a href="https://www.producthunt.com/posts/bilquick?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bilquick" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=487452&theme=light" 
            alt="BilQuick - Launch Your SaaS Faster | Product Hunt" 
            style={{ width: '250px', height: '54px' }} 
            width="250" 
            height="54" 
          />
        </a>
      </div>
    </FadeIn>
  </section>
));

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center text-foreground">
      {/* Hero Section */}
      <HeroSection />
      <Analytics />
      <SpeedInsights />


      {/* Technology Stack Section */}
      <FadeIn>
        <TechnologyStack />
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <CTASection />
      </FadeIn>

      {/* Features Section */}
      <FadeIn>
        <WhyBetter />
      </FadeIn>

      {/* Pricing Section */}
      <section id="price-section" className="container max-w-3xl text-center space-y-6 sm:space-y-10 px-2 sm:px-4 py-8 sm:py-10 md:py-20">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Simple and Transparent Pricing</h2>
        </FadeIn>
        <FadeIn>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            Choose the best plan that fits your billing needs.
          </p>
        </FadeIn>
        <FadeIn>
          <Price />
        </FadeIn>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer Section */}
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}