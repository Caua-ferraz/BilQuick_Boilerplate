import React from "react";
import FadeIn from "@/components/fadein";
import TypingTitle from "@/components/TypingTitle";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { MdDashboard, MdMenuBook } from "react-icons/md";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center text-foreground">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-10 md:py-20 px-4 w-full bg-gradient-to-b from-background to-background/80">
        <FadeIn>
          <TypingTitle preText="Thank You for Choosing " highlightedText="BilQuick!" />
        </FadeIn>
        <FadeIn>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your purchase has been successful! We’re excited to see you get your SaaS running. :&gt;
          </p>
        </FadeIn>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-10 md:py-20 px-4 w-full bg-card">
        <FadeIn>
          <p className="text-sm md:text-base text-muted-foreground mb-8">
            Here are some quick actions to help you get started:
          </p>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://discord.gg/gDE7PAf7Cy" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">
                <FaDiscord className="mr-2" /> Join Community
              </Button>
            </a>
            <Link href="/dashboard">
              <Button variant="default" className="w-full sm:w-auto">
                <MdDashboard className="mr-2" /> Manage Settings
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="secondary" className="w-full sm:w-auto">
                <MdMenuBook className="mr-2" /> Get Started
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
