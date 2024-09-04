'use client';

import React from 'react';
import Link from 'next/link';

/**
 * CTASection Component
 * 
 * This component represents a Call-to-Action (CTA) section for the BilQuick application.
 * It's designed to encourage users to start using the service by highlighting its main benefit
 * and providing a prominent action link.
 * 
 * Features:
 * - Clean design with white text and orange highlight
 * - Responsive text sizing
 * - Interactive text link that glows on hover and scrolls to the pricing section
 * 
 * Usage:
 * <CTASection />
 * 
 * Note: This is a Client Component and should be used within a Client Component context
 * or wrapped with a Client Boundary when used within a Server Component.
 */
const CTASection: React.FC = () => {
  /**
   * Scrolls the page to the pricing section when the CTA link is clicked.
   * The pricing section should have an id of 'price-section'.
   */
  const scrollToPrice = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const priceSection = document.getElementById('price-section');
    priceSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Main CTA section container
    <section className="w-full text-white py-16 px-4">
      {/* Content container */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stop Wasting Time. Start Billing. Get Paid <span className="text-orange-400">QUICK</span>!
        </h2>
        
        {/* Subheading */}
        <p className="text-xl mb-8">
          BilQuick streamlines your billing process, so you can focus on what really matters - growing your business.
        </p>
        
        {/* CTA Link */}
        <Link 
          href="#price-section"
          onClick={scrollToPrice}
          className="text-lg font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-300 relative group"
        >
          Start Now 
          {/* Glow effect on hover */}
          <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-orange-400 opacity-25 rounded-full blur-sm"></span>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;