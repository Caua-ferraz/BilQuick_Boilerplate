import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic';
import React from "react";
import TechnologyStack from "@/components/TechnologyStack";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaYoutube, FaRocket, FaLock, FaCode, FaCreditCard, FaChartLine, FaCogs, FaQuoteLeft, FaUsers, FaDiscord } from 'react-icons/fa';
import { TbBrandOpenSource } from "react-icons/tb";
import FadeIn from "@/components/fadein";
import { generateMetadata } from "@/components/SEO";
import type { Metadata } from 'next';

const FAQDropdown = dynamic(() => import("@/components/FAQDropdown"), { ssr: false, loading: () => <p>Loading Pricing...</p> });
const WhyBetter = dynamic(() => import("@/components/WhyBetter"), { loading: () => <p>Loading WhyBetter...</p> });
const Price = dynamic(() => import("@/components/subscription/price"), { ssr: false, loading: () => <p>Loading Pricing...</p> });
const TypingTitle = dynamic(() => import("@/components/TypingTitle"), { loading: () => <p>Loading Title...</p> });
const CTASection = dynamic(() => import("@/components/cta"), { loading: () => <p>Loading CTA...</p> });
const Carousel = dynamic(() => import("@/components/ui/carousel").then(mod => mod.Carousel), { ssr: false, loading: () => <p>Loading Carousel...</p> });

export const metadata: Metadata = generateMetadata({
  title: "BilQuick - No BS, Just Results",
  description: "BilQuick is the boilerplate that cuts the crap. Build and launch your startup fast without getting bogged down in the details.",
  keywords: "saas boilerplate, next.js template, react starter, tailwind css, supabase, stripe integration, rapid development",
  ogType: "website",
  twitterCard: "summary_large_image"
});

const features = [
  {
    icon: <FaRocket className="w-8 h-8 text-primary" />,
    title: "Launch Fast",
    description: "No nonsense. Get your SaaS up and running in days with pre-built components and integrations."
  },
  {
    icon: <FaLock className="w-8 h-8 text-primary" />,
    title: "Secure Auth",
    description: "Built-in user management, social logins, role-based access, and JWT authentication."
  },
  {
    icon: <FaCode className="w-8 h-8 text-primary" />,
    title: "Modern Stack",
    description: "Next.js, React, Tailwind CSS, and TypeScript for a future-proof and flexible codebase."
  },
  {
    icon: <FaCreditCard className="w-8 h-8 text-primary" />,
    title: "Subscription Ready",
    description: "Stripe integration for handling subscriptions, billing, and invoices right out of the box."
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
    title: "Analytics Built In",
    description: "Get the insights you need with pre-built dashboards for user metrics and business decisions."
  },
  {
    icon: <FaCogs className="w-8 h-8 text-primary" />,
    title: "Fully Customizable",
    description: "Tailor the UI, extend the functionality, and integrate any third-party service to fit your needs."
  }
];

const testimonials = [
  {
    quote: "I was drowning in tech debt. BilQuick threw me a lifeline, and now I ship faster than my competitors.",
    author: "Josh, Founder @ SpeedStack",
    benefit: "Saves Time"
  },
  {
    quote: "Honestly, I’m lazy. BilQuick did all the heavy lifting. Now, I get to focus on the cool stuff.",
    author: "Amy, Solo Founder",
    benefit: "Developer-Friendly"
  },
  {
    quote: "BilQuick helped me skip the boring parts. I launched my app in days, not weeks.",
    author: "Eric, Developer @ QuickApp",
    benefit: "Launch Fast"
  },
  {
    quote: "The analytics dashboard gave me real insights from day one. I knew exactly where to focus.",
    author: "Sam, Product Manager @ Insights.io",
    benefit: "Data-Driven"
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
      {/* Heading for testimonials */}
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Users Are Saying</h2>
      </FadeIn>

      {/* Testimonial Carousel */}
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

      {/* CTA Button at the bottom for joining the Discord community */}
      <FadeIn>
        <div className="mt-12 text-center">
          <a
            href="https://discord.gg/nrr3YrxSJj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition-colors inline-flex items-center space-x-2"
          >
            <FaDiscord className="text-2xl" /> {/* Discord icon */}
            <span>Join the BilQuick Community on Discord </span>
          </a>
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
      <TypingTitle preText="Launch Your SaaS" highlightedText="Without the Hassle" />
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
        Focus on what matters, we'll handle the basics. Launch your SaaS quickly and efficiently with BilQuick.
      </p>
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

      {/* FAQ Section */}
      <FAQDropdown />

      {/* Footer Section */}
      <FadeIn>
        <Footer />
        <div className="mt-4 flex justify-center">
          <a href="https://www.producthunt.com/posts/bilquick?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bilquick" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=487452&theme=light" 
              alt="BilQuick - Launch Your SaaS Faster | Product Hunt" 
              width="180" 
              height="40" 
            />
          </a>
        </div>
      </FadeIn>
    </div>
  );
}