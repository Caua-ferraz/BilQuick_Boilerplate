import React from 'react';
import FadeIn from "@/components/fadein";
import TypingTitle from "@/components/TypingTitle";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function TermsOfServicePage() {
  const terms = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using BilQuick, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.",
    },
    {
      title: "Use License",
      content: "BilQuick grants you a limited, non-exclusive, non-transferable, and revocable license to use our boilerplate and services for your personal or business use, subject to these terms:",
      list: [
        "You may not distribute, sell, lease, rent, or sublicense the boilerplate or any part of our services",
        "You may not copy, modify, merge, or incorporate the boilerplate into other software being subscriber",
        "You may not use the boilerplate to create a competing product or service explicity copying bilquick"
      ]
    },
    {
      title: "Intellectual Property",
      content: "The BilQuick boilerplate, including all associated source code, designs, and documentation, is protected by copyright, trademark, and other intellectual property laws. Our intellectual property includes:",
      list: [
        "All software code and algorithms",
        "User interface designs and graphics",
        "Documentation and written content",
        "Logos, trademarks, and brand elements"
      ]
    },
    {
      title: "Restrictions",
      content: "You are strictly prohibited from:",
      list: [
        "Spreading non-licensed copies of our boilerplate",
        "Using our boilerplate or services for any illegal or unauthorized purpose",
        "Interfering with or disrupting the integrity or performance of the services",
        "Attempting to gain unauthorized access to our systems or networks"
      ]
    },
    {
      title: "User Responsibilities",
      content: "As a user of BilQuick, you are responsible for:",
      list: [
        "Maintaining the confidentiality of your account and password",
        "Restricting access to your account and accepting responsibility for all activities under your account",
        "Ensuring that your use of our services complies with all applicable laws and regulations",
        "Promptly notifying us of any unauthorized use of your account or other security breaches"
      ]
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including:",
      list: [
        "Breach of these Terms of Service",
        "Violation of intellectual property rights",
        "Engaging in fraudulent or illegal activities",
        "At our sole discretion, for any other reason we deem necessary"
      ]
    },
    {
      title: "Disclaimer",
      content: "BilQuick is provided 'as is' and 'as available' without any warranties, either express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.",
    },
    {
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, BilQuick shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.",
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify or replace these Terms of Service at any time. We will provide notice of any material changes by:",
      list: [
        "Posting the updated terms on this page",
        "Updating the 'Last updated' date at the top of this page",
        "Sending an email notification to users (for significant changes)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center text-foreground">
      <section className="w-full max-w-4xl mx-auto px-4 py-12 space-y-8">
        <FadeIn>
          <TypingTitle preText="Our " highlightedText="Terms of Service" />
        </FadeIn>

        <FadeIn>
          <p className="text-base md:text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </FadeIn>

        <FadeIn>
          <p className="text-sm md:text-base text-muted-foreground">
            Welcome to BilQuick. These Terms of Service govern your use of our boilerplate and services. By using BilQuick, you agree to these terms. Please read them carefully.
          </p>
        </FadeIn>

        {terms.map((term, index) => (
          <FadeIn key={index}>
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-default">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{term.title}</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-2">{term.content}</p>
              {term.list && (
                <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground">
                  {term.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}

        <FadeIn>
          <div className="text-center mt-8 space-y-4">
            <p className="text-sm md:text-base text-muted-foreground">
              By using BilQuick, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}