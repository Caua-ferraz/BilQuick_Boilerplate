import React from 'react';

const SEODocumentation: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">SEO Component Documentation</h2>
      
      <p>
        The SEO component is designed to generate metadata for your Next.js pages, improving search engine optimization and social media sharing.
      </p>
      
      <section>
        <h3 className="text-xl font-semibold">How it works</h3>
        <p>The <code>generateMetadata</code> function creates a metadata object compatible with Next.js, including:</p>
        <ul className="list-disc list-inside">
          <li>Basic SEO tags (title, description, keywords)</li>
          <li>Open Graph tags for social media sharing</li>
          <li>Twitter Card tags for Twitter sharing</li>
          <li>Favicon</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold">Usage</h3>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <p>Import the <code>generateMetadata</code> function in your page file:</p>
            <pre className="p-2 rounded"><code>{`import { generateMetadata } from '@/components/SEO';`}</code></pre>
          </li>
          <li>
            <p>Use the function to generate metadata for your page:</p>
            <pre className="p-2 rounded"><code>{`export const metadata = generateMetadata({
  title: "My Page Title",
  description: "A brief description of my page",
  keywords: "relevant, keywords, for, this, page",
});`}</code></pre>
          </li>
          <li>
            <p>For dynamic metadata, use Next.js's <code>generateMetadata</code> function:</p>
            <pre className="p-2 rounded"><code>{`export async function generateMetadata({ params }: any) {
  // Fetch data if needed
  const data = await fetchSomeData(params.id);
  
  return generateMetadata({
    title: data.title,
    description: data.description,
    // ... other properties
  });
}`}</code></pre>
          </li>
        </ol>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold">Best Practices</h3>
        <ol className="list-decimal list-inside">
          <li>Provide unique titles and descriptions for each page.</li>
          <li>Keep descriptions concise (around 150-160 characters).</li>
          <li>Use relevant keywords naturally in your content.</li>
          <li>Provide high-quality, relevant Open Graph images for better social media sharing.</li>
        </ol>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold">Example Implementation</h3>
        <p>Here's an example of how to use the SEO component in a page:</p>
        <pre className="p-2 rounded"><code>{`import { generateMetadata } from '@/components/SEO';

export const metadata = generateMetadata({
  title: "Your SaaS Name - Streamline Your Invoicing",
  description: "Your SaaS Name helps freelancers and small businesses create professional invoices, track payments, and get paid faster.",
  keywords: "invoicing, billing, freelance, small business, payment tracking",
  ogImage: "/images/your-og-image.png",
});

export default function InvoicingPage() {
  // Your page component code here
}`}</code></pre>
        <p className="mt-2">Remember to adjust the metadata for each page to accurately reflect its content and purpose.</p>
      </section>
    </div>
  );
};

export default SEODocumentation;