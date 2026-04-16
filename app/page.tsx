import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic';
import React from "react";
import TechnologyStack from "@/components/TechnologyStack";
import Link from "next/link";
import { FaQuoteLeft, FaDiscord } from 'react-icons/fa';
import FadeIn from "@/components/fadein";
import { generateMetadata } from "@/components/SEO";
import type { Metadata } from 'next';

const FAQDropdown = dynamic(() => import("@/components/FAQDropdown"), { loading: () => <p>Loading FAQ...</p> });
const WhyBetter = dynamic(() => import("@/components/WhyBetter"), { loading: () => <p>Loading WhyBetter...</p> });
const Price = dynamic(() => import("@/components/subscription/price"), { loading: () => <p>Loading Pricing...</p> });
const TypingTitle = dynamic(() => import("@/components/TypingTitle"), { loading: () => <p>Loading Title...</p> });
const CTASection = dynamic(() => import("@/components/cta"), { loading: () => <p>Loading CTA...</p> });
const Carousel = dynamic(() => import("@/components/ui/carousel").then(mod => mod.Carousel), { loading: () => <p>Loading Carousel...</p> });

export const metadata: Metadata = generateMetadata({
  title: "BilQuick - No BS, Just Results",
  description: "BilQuick is the boilerplate that cuts the crap. Build and launch your startup fast without getting bogged down in the details.",
  keywords: "saas boilerplate, next.js template, react starter, tailwind css, supabase, stripe integration, rapid development",
  ogType: "website",
  twitterCard: "summary_large_image"
});

// TODO: replace with your own testimonials. These are placeholders — do not
// ship as-is, fabricated testimonials can violate consumer-protection rules.
const testimonials = [
  {
    quote: "Placeholder testimonial — replace me with a real customer quote.",
    author: "Customer Name, Role @ Company",
    benefit: "Benefit",
  },
];

const TestimonialsSection = React.memo(function TestimonialsSection() {
  return (
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
          {/* TODO: replace with your own Discord invite URL + community name */}
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition-colors inline-flex items-center space-x-2"
          >
            <FaDiscord className="text-2xl" />
            <span>Join our Community on Discord</span>
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
  );
});

const Footer = React.memo(function Footer() {
  return (
  <footer className="w-full bg-card mt-auto py-4 sm:py-8 px-2 sm:px-4">
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-row justify-center items-center space-x-3">
          <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
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
  );
});

const HeroSection = React.memo(function HeroSection() {
  return (
  <section className="text-center space-y-4 sm:space-y-6 py-8 sm:py-10 md:py-20 px-2 sm:px-4 w-full bg-gradient-to-b from-background to-background/80">
    <FadeIn>
      <TypingTitle preText="Launch Your SaaS " highlightedText="Without the Hassle" />
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
        Focus on what matters, we&apos;ll handle the basics. Launch your SaaS quickly and efficiently with BilQuick.
      </p>
    </FadeIn>
  </section>
  );
});


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
        {/*
          TODO: add your own ProductHunt badge here after you launch, e.g.:
          <a href="https://www.producthunt.com/posts/YOUR-SLUG" target="_blank" rel="noopener noreferrer">
            <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=YOUR_ID&theme=light" ... />
          </a>
        */}
      </FadeIn>
    </div>
  );
}