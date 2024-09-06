import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import React from "react";
import Price from "@/components/subscription/price";
import TypingTitle from "@/components/TypingTitle";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiSupabase, SiStripe, SiTailwindcss } from "react-icons/si";
import { TbBrandOpenSource } from "react-icons/tb";
import Video from "@/components/ui/video";
import FadeIn from "@/components/fadein";
import { generateMetadata } from "@/components/SEO";
import type { Metadata } from 'next';
import CTASection from "@/components/cta";
import { FaRocket, FaLock, FaCode, FaCreditCard, FaChartLine, FaCogs,FaQuoteLeft, FaUsers } from 'react-icons/fa';
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";

export const metadata: Metadata = generateMetadata({
  title: "BilQuick - Transform Your Billing Workflow",
  description: "BilQuick helps you streamline tasks, boost productivity, and get paid faster than ever before.",
  keywords: "billing, invoicing, productivity, workflow, task management, automation",
  ogType: "website",
  twitterCard: "summary_large_image"
});

export default function LandingPage() {
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

  return (
    <div className="min-h-screen bg-background flex flex-col items-center text-foreground">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-10 md:py-20 px-4 w-full bg-gradient-to-b from-background to-background/80">
        <FadeIn>
          <TypingTitle preText="Transform Your SaaS with " highlightedText="BilQuick" />
        </FadeIn>
        <SpeedInsights />
        <Analytics />
        <FadeIn>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop wasting time with the website, let BilQuick handle it.
          </p>
        </FadeIn>
      </section>

      {/* Technology Stack Section */}
		<FadeIn>
		<section className="w-full py-10 bg-card px-4">
			<div className="container max-w-4xl mx-auto text-center">
			<div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-6 justify-items-center">
				{[
				{ Icon: SiReact, name: "React", color: "text-blue-500" },
				{ Icon: SiNextdotjs, name: "Next.js", color: "text-gray-700" },
				{ Icon: SiSupabase, name: "Supabase", color: "text-green-500" },
				{ Icon: SiStripe, name: "Stripe", color: "text-purple-500" },
				{ Icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
				{ Icon: TbBrandOpenSource, name: "Open Source", color: "text-orange-500" }
				].map(({ Icon, name, color }) => (
				<div key={name} className="flex flex-col items-center">
					<Icon className={`w-8 h-8 md:w-12 md:h-12 ${color}`} title={name} />
					<span className="text-xs mt-2">{name}</span>
				</div>
				))}
			</div>
			<p className="text-sm md:text-base text-muted-foreground">
				Built with cutting-edge technologies to save you time and effort.
			</p>
			<p className="text-sm md:text-base text-muted-foreground mt-2">
				Focus on your core business while we handle the website.
			</p>
			</div>
		</section>
		</FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <CTASection />
      </FadeIn>

      {/* Features Section */}
      <section className="w-full py-16 bg-card">
        <div className="container max-w-6xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Powerful Features to Accelerate Your SaaS</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index}>
                <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-default flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with YouTube Video */}
      <section id="price-section" className="container max-w-3xl text-center space-y-10 px-4 py-10 md:py-20">

        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Simple and Transparent Pricing</h2>
        </FadeIn>
        <FadeIn>
          <p className="text-sm md:text-base text-muted-foreground">
            Choose the best plan that fits your billing needs.
          </p>
        </FadeIn>
        <FadeIn>
          <Price />
        </FadeIn>
      </section>

      {/* Testimonials Section */}
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
          
          {/* User Count */}
          <FadeIn>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
                <FaUsers className="text-2xl mr-3" />
                <span className="text-xl font-bold">{userCount}+ Users</span>
              </div>
              <p className="mt-4 text-muted-foreground">Join the growing community of developers using BilQuick</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer Section */}
      <FadeIn>
        <footer className="w-full bg-card mt-auto">
          <div className="container max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <div className="flex space-x-6 mb-2">
                  <Link href="/privacity" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </div>
                <p className="md:text-left text-sm text-muted-foreground">© {new Date().getFullYear()} BilQuick. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </FadeIn>
    </div>
  );
}