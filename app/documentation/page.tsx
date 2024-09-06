"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import TypingTitle from '@/components/TypingTitle';
import FadeIn from '@/components/fadein';
import SEODocumentation from './SEODocumentation';
import TypingTitleDocumentation from './TypingTitleDocumentation';

export default function DocumentationPage() {
  const [showComponentDocs, setShowComponentDocs] = useState({
    seo: false,
    typingTitle: false,
  });

  const toggleComponentDocs = (component: 'seo' | 'typingTitle') => {
    setShowComponentDocs(prev => ({
      ...prev,
      [component]: !prev[component]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        <TypingTitle 
          preText="Next.js + Supabase"
          highlightedText="SaaS Boilerplate"
        />
      </FadeIn>

      <div className="mt-8 space-y-8">
        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground">
              This boilerplate provides a solid foundation for building modern SaaS applications using Next.js, Supabase, and other powerful technologies. It includes features like authentication, payment integration, and responsive design out of the box.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
              <li>Next.js 14 with App Router</li>
              <li>Supabase Integration for auth and database</li>
              <li>Stripe subscription management</li>
              <li>TanStack Query for efficient data fetching</li>
              <li>Tailwind CSS for rapid UI development</li>
              <li>Dark mode support</li>
              <li>SEO optimization</li>
              <li>TypeScript for type safety</li>
            </ul>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="getting-started">
            <AccordionTrigger>Getting Started</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal list-inside space-y-2 text-base text-muted-foreground">
                <li>Clone the repository</li>
                <li>Install dependencies with <code className="bg-muted px-1 py-0.5 rounded">npm install</code></li>
                <li>Set up environment variables</li>
                <li>Run the development server with <code className="bg-muted px-1 py-0.5 rounded">npm run dev</code></li>
                <li>Open http://localhost:3000 in your browser</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="project-structure">
            <AccordionTrigger>Project Structure</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
                <li><code className="bg-muted px-1 py-0.5 rounded">/app</code>: Next.js app router pages and layouts</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">/components</code>: Reusable React components</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">/lib</code>: Utility functions and shared logic</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">/public</code>: Static assets</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">/styles</code>: Global styles and Tailwind CSS configuration</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="key-components">
            <AccordionTrigger>Key Components</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-6">
                <li>
                  <h3 className="text-lg font-semibold">SEO Component</h3>
                  <p className="text-base text-muted-foreground mb-2">Customizable SEO component for metadata generation.</p>
                  <button
                    onClick={() => toggleComponentDocs('seo')}
                    className="text-primary hover:underline focus:outline-none"
                  >
                    {showComponentDocs.seo ? 'Hide Documentation' : 'View Documentation'}
                  </button>
                  {showComponentDocs.seo && (
                    <div className="mt-2 p-4 bg-muted rounded-md">
                      <SEODocumentation />
                    </div>
                  )}
                </li>
                <li>
                  <h3 className="text-lg font-semibold">TypingTitle Component</h3>
                  <p className="text-base text-muted-foreground mb-2">Animated typing effect for headings.</p>
                  <button
                    onClick={() => toggleComponentDocs('typingTitle')}
                    className="text-primary hover:underline focus:outline-none"
                  >
                    {showComponentDocs.typingTitle ? 'Hide Documentation' : 'View Documentation'}
                  </button>
                  {showComponentDocs.typingTitle && (
                    <div className="mt-2 p-4 bg-white rounded-md shadow">
                      <TypingTitleDocumentation />
                    </div>
                  )}
                </li>
                <li>
                  <h3 className="text-lg font-semibold">ThemeProvider Component</h3>
                  <p className="text-base text-muted-foreground mb-2">Manages application-wide theming and dark mode.</p>
                  {/* Add a button and documentation for ThemeProvider if needed */}
                </li>
                <li>
                  <h3 className="text-lg font-semibold">QueryProvider Component</h3>
                  <p className="text-base text-muted-foreground mb-2">Sets up React Query for efficient data fetching and caching.</p>
                  {/* Add a button and documentation for QueryProvider if needed */}
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="customization">
            <AccordionTrigger>Customization</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
                <li>Modify <code className="bg-muted px-1 py-0.5 rounded">tailwind.config.js</code> for styling preferences</li>
                <li>Extend components in the <code className="bg-muted px-1 py-0.5 rounded">/components</code> directory</li>
                <li>Update default metadata in <code className="bg-muted px-1 py-0.5 rounded">components/SEO.tsx</code></li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="supabase-setup">
            <AccordionTrigger>Supabase Setup</AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal list-inside space-y-2 text-base text-muted-foreground">
                <li>Create a Supabase project at <a href="https://supabase.com" className="text-primary hover:underline">supabase.com</a></li>
                <li>Follow the Supabase CLI guide for local development</li>
                <li>Use provided migration scripts to set up your database schema</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="seo-optimization">
            <AccordionTrigger>SEO Optimization</AccordionTrigger>
            <AccordionContent>
              <p className="text-base text-muted-foreground mb-4">
                The SEO component generates metadata for your Next.js pages, improving search engine optimization and social media sharing.
              </p>
              <h3 className="text-lg font-semibold mb-2">Usage:</h3>
              <ol className="list-decimal list-inside space-y-2 text-base text-muted-foreground">
                <li>Import the <code className="bg-muted px-1 py-0.5 rounded">generateMetadata</code> function</li>
                <li>Use the function to generate metadata for your page</li>
                <li>For dynamic metadata, use Next.js's <code className="bg-muted px-1 py-0.5 rounded">generateMetadata</code> function</li>
              </ol>
              <p className="text-base text-muted-foreground mt-4">
                For more details, refer to the SEO documentation:
              </p>
              <code className="bg-muted px-1 py-0.5 rounded block mt-2">documentation/seo_documentation.md</code>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="typing-title">
            <AccordionTrigger>TypingTitle Component</AccordionTrigger>
            <AccordionContent>
              <p className="text-base text-muted-foreground mb-4">
                The TypingTitle component creates a typing animation effect for headings, with a blinking cursor.
              </p>
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
                <li>Animated typing effect</li>
                <li>Customizable typing speed</li>
                <li>Blinking cursor after typing completion</li>
              </ul>
              <p className="text-base text-muted-foreground mt-4">
                For more details on customizing the blinking cursor effect, refer to:
              </p>
              <code className="bg-muted px-1 py-0.5 rounded block mt-2">documentation/TypingTitle.md</code>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Learn More</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
              <li><a href="https://nextjs.org/docs" className="text-primary hover:underline">Next.js Documentation</a></li>
              <li><a href="https://supabase.com/docs" className="text-primary hover:underline">Supabase Documentation</a></li>
              <li><a href="https://tailwindcss.com/docs" className="text-primary hover:underline">Tailwind CSS</a></li>
              <li><a href="https://tanstack.com/query/latest/" className="text-primary hover:underline">TanStack Query</a></li>
              <li><a href="https://ui.shadcn.com/" className="text-primary hover:underline">Shadcn UI</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}