import React from "react";
import FadeIn from "@/components/fadein";
import TypingTitle from "@/components/TypingTitle";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import Link from "next/link";

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
          <p className="text-sm md:text-base text-muted-foreground">
            Need help getting started? Check out our tutorials and documentation!
          </p>
        </FadeIn>
        <FadeIn>
          <Link href="/documentation">
            <Button className="mt-6">Get Started with Tutorials</Button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
