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

export const metadata: Metadata = generateMetadata({
  title: "BilQuick - Transform Your Billing Workflow",
  description: "BilQuick helps you streamline tasks, boost productivity, and get paid faster than ever before.",
  keywords: "billing, invoicing, productivity, workflow, task management, automation",
  ogType: "website",
  twitterCard: "summary_large_image"
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center text-foreground">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-10 md:py-20 px-4 w-full bg-gradient-to-b from-background to-background/80">
        <FadeIn>
          <TypingTitle preText="Transform Your Billing with " highlightedText="BilQuick" />
        </FadeIn>
        <FadeIn>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            BilQuick helps you streamline invoicing, boost productivity, and get paid faster than ever before.
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
				Focus on your core business while we handle the complexity.
			</p>
			</div>
		</section>
		</FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <CTASection />
      </FadeIn>

      {/* Features Section */}
      <section className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl px-4 py-10 md:py-20 bg-card">
        {['Quick Invoicing', 'Smart Reminders', 'Effortless Tracking'].map((feature, index) => (
          <FadeIn key={index} className="p-6 bg-background shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-default">
            <h3 className="text-xl font-semibold text-foreground">{feature}</h3>
            <p className="text-sm md:text-base text-muted-foreground mt-2">Create professional invoices in seconds, automate payment reminders, and track your cash flow effortlessly.</p>
          </FadeIn>
        ))}
      </section>

      {/* Pricing Section with YouTube Video */}
      <section id="price-section" className="container max-w-3xl text-center space-y-10 px-4 py-10 md:py-20">
        <FadeIn>
          <Video videoId="xvFZjo5PgG0" title="BilQuick Overview" />
        </FadeIn>

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
      <section className="container max-w-4xl text-center space-y-6 py-10 md:py-16 px-4 bg-card">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">What Our Users Say</h2>
        </FadeIn>
        <div className="flex flex-col md:flex-row gap-6">
          {['John Doe, Freelance Designer', 'Jane Smith, Small Business Owner'].map((person, index) => (
            <FadeIn key={index} className="bg-background p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-default">
              <p className="text-sm md:text-base text-muted-foreground">
                {index === 0 
                  ? "BilQuick has revolutionized the way I handle invoicing. I get paid faster and spend less time on paperwork."
                  : "Since using BilQuick, our cash flow has improved dramatically. It's a game-changer for small businesses."}
              </p>
              <p className="mt-4 text-foreground font-semibold">&ndash; {person}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <FadeIn>
        <footer className="container w-full border-t pt-10 px-4 bg-background">
            <p className="mt-4 text-sm md:text-base text-muted-foreground">© {new Date().getFullYear()} BilQuick. All rights reserved.</p>
        </footer>
      </FadeIn>
    </div>
  );
}