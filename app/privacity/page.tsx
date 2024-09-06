import React from 'react';
import FadeIn from "@/components/fadein";
import TypingTitle from "@/components/TypingTitle";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  const policies = [
    {
      title: "Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you use our services. This may include:",
      list: [
        "Contact information (e.g., name, email address, phone number)",
        "Account credentials",
        "Billing information",
        "User-generated content",
        "Usage data and analytics"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We use your information for various purposes, including:",
      list: [
        "Providing and maintaining our services",
        "Processing transactions",
        "Sending you important updates and notifications",
        "Improving our services and user experience",
        "Complying with legal obligations"
      ]
    },
    {
      title: "Data Security",
      content: "We prioritize the security of your data and employ industry-standard measures to protect it, including:",
      list: [
        "Encryption of data in transit and at rest",
        "Regular security audits and penetration testing",
        "Access controls and authentication mechanisms",
        "Employee training on data protection"
      ]
    },
    {
      title: "Your Rights and Choices",
      content: "You have certain rights regarding your personal information:",
      list: [
        "Request deletion of your data",
        "Data portability"
      ]
    },
    {
      title: "Third-Party Services",
      content: "We may use third-party services that collect, monitor and analyze data. These services may include:",
      list: [
        "Payment processors",
        "Analytics providers",
        "Customer support tools",
        "Hosting and cloud services"
      ]
    },
    {
      title: "Changes to This Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any significant changes by:",
      list: [
        "Posting the new policy on this page",
        "Updating the 'Last updated' date",
        "Sending an email notification to users (for material changes)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center text-foreground">
      <section className="w-full max-w-4xl mx-auto px-4 py-12 space-y-8">
        <FadeIn>
          <TypingTitle preText="Our " highlightedText="Privacy Policy" />
        </FadeIn>

        <FadeIn>
          <p className="text-base md:text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </FadeIn>

        <FadeIn>
          <p className="text-sm md:text-base text-muted-foreground">
            At BilQuick, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services.
          </p>
        </FadeIn>

        {policies.map((policy, index) => (
          <FadeIn key={index}>
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-default">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{policy.title}</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-2">{policy.content}</p>
              <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground">
                {policy.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}

        <FadeIn>
          <div className="text-center mt-8 space-y-4">
            <p className="text-sm md:text-base text-muted-foreground">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
