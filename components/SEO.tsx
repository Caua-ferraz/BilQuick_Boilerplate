import { Metadata } from 'next';

/**
 * Interface for SEO properties
 */
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'book' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

/**
 * Default metadata values
 * Customize these values to match your SaaS application
 */
const defaultMeta = {
  title: 'Your SaaS Name - Transform Your Workflow',
  description: 'Your SaaS Name helps you streamline tasks, boost productivity, and achieve more in less time.',
  keywords: 'saas, software, productivity, workflow, task management',
  ogImage: '/og-image.png', // Make sure to add this image to your public folder
  ogType: 'website' as const,
  twitterCard: 'summary_large_image' as const,
};

/**
 * Generates metadata for SEO
 * @param {SEOProps} props - SEO properties
 * @returns {Metadata} Metadata object for Next.js
 */
export function generateMetadata({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  ogImage = defaultMeta.ogImage,
  ogType = defaultMeta.ogType,
  twitterCard = defaultMeta.twitterCard,
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: ogType,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

// Customization options:

// 1. Update default metadata
// Modify the defaultMeta object to match your SaaS application:
// const defaultMeta = {
//   title: 'Your Actual SaaS Name - Your Unique Value Proposition',
//   description: 'A compelling description of your SaaS product...',
//   keywords: 'your, relevant, keywords',
//   ogImage: '/path-to-your-og-image.jpg',
//   ogType: 'website' as const,
//   twitterCard: 'summary_large_image' as const,
// };

// 2. Add additional metadata fields
// Extend the SEOProps interface and the generateMetadata function to include new fields:
// interface SEOProps {
//   ...
//   author?: string;
//   publishedDate?: string;
// }
//
// export function generateMetadata({ ..., author, publishedDate }: SEOProps): Metadata {
//   return {
//     ...
//     author,
//     publishedDate,
//   };
// }

// 3. Customize OpenGraph and Twitter metadata separately
// If you need different content for OpenGraph and Twitter:
// export function generateMetadata({ ... }: SEOProps): Metadata {
//   return {
//     ...
//     openGraph: {
//       title: 'OpenGraph specific title',
//       description: 'OpenGraph specific description',
//       ...
//     },
//     twitter: {
//       title: 'Twitter specific title',
//       description: 'Twitter specific description',
//       ...
//     },
//   };
// }

// 4. Add structured data
// Include structured data for rich results in search engines:
// export function generateMetadata({ ... }: SEOProps): Metadata {
//   return {
//     ...
//     structured: {
//       '@context': 'https://schema.org',
//       '@type': 'SoftwareApplication',
//       name: 'Your SaaS Name',
//       applicationCategory: 'BusinessApplication',
//       // Add more structured data properties as needed
//     },
//   };
// }

// 5. Localization
// If your SaaS supports multiple languages, you can add locale-specific metadata:
// export function generateMetadata({ ..., locale = 'en' }: SEOProps & { locale?: string }): Metadata {
//   const localizedData = getLocalizedData(locale); // Implement this function to return localized content
//   return {
//     ...
//     alternates: {
//       canonical: '/',
//       languages: {
//         'en-US': '/en-US',
//         'es-ES': '/es-ES',
//         // Add more locales as needed
//       },
//     },
//   };
// }

// SEO Best Practices for Google Search Rankings:

// 1. Keyword Research and Optimization
// - Use tools like Google Keyword Planner, SEMrush, or Ahrefs to find relevant keywords
// - Include your main keyword in the title, description, and content
// - Use long-tail keywords for more specific searches
// Example:
// const defaultMeta = {
//   title: 'Best Task Management SaaS for Small Teams | YourSaaS',
//   description: 'Streamline your team's workflow with YourSaaS. Our task management solution helps small teams boost productivity and collaboration.',
//   keywords: 'task management, team productivity, small business software, project collaboration',
//   ...
// };

// 2. Create High-Quality, Relevant Content
// - Develop comprehensive, informative content that addresses user needs
// - Regularly update your content to keep it fresh and relevant
// - Use your keywords naturally throughout your content

// 3. Optimize Page Speed
// - Compress images and use modern formats like WebP
// - Minimize CSS, JavaScript, and HTML
// - Use a content delivery network (CDN)
// - Implement lazy loading for images and videos

// 4. Mobile Optimization
// - Ensure your website is responsive and mobile-friendly
// - Use Google's Mobile-Friendly Test tool to check your site

// 5. Improve User Experience (UX)
// - Create a clear site structure with easy navigation
// - Optimize for Core Web Vitals (Largest Contentful Paint, First Input Delay, Cumulative Layout Shift)
// - Reduce bounce rate by providing engaging, relevant content

// 6. Build Quality Backlinks
// - Create shareable content that others want to link to
// - Guest post on reputable sites in your industry
// - Engage in social media and online communities related to your niche

// 7. Implement Schema Markup
// - Use structured data to help search engines understand your content better
// Example:
// export function generateMetadata({ ... }: SEOProps): Metadata {
//   return {
//     ...
//     structured: {
//       '@context': 'https://schema.org',
//       '@type': 'SoftwareApplication',
//       name: 'YourSaaS',
//       applicationCategory: 'TaskManagementApplication',
//       operatingSystem: 'Web',
//       offers: {
//         '@type': 'Offer',
//         price: '19.99',
//         priceCurrency: 'USD'
//       }
//     },
//   };
// }

// 8. Optimize for Local SEO (if applicable)
// - Create and optimize your Google My Business listing
// - Include location-specific keywords in your metadata and content
// - Encourage customer reviews on Google and other platforms

// 9. Use Internal Linking
// - Link to relevant pages within your site to improve navigation and distribute page authority

// 10. Monitor and Analyze Your Performance
// - Use Google Search Console to track your search performance and fix issues
// - Implement Google Analytics to understand user behavior and optimize accordingly

// Remember, SEO is an ongoing process. Continuously monitor your performance,
// adapt to algorithm changes, and refine your strategy based on results.