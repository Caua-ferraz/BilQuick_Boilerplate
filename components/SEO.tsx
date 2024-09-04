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