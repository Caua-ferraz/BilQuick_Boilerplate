import type { Metadata, Viewport } from "next";

interface SEOProps {
	title: string;
	description: string;
	keywords?: string;
	ogImage?: string;
	ogType?: "website" | "article" | "product";
	twitterCard?: "summary" | "summary_large_image" | "app" | "player";
	canonicalUrl?: string;
	alternateLocales?: string[];
	author?: string;
	publishedTime?: string;
	modifiedTime?: string;
}

// TODO: replace these defaults with your own brand values before deploying.
const defaultMeta = {
	title: "Your SaaS - Launch Faster",
	description:
		"The ultimate SaaS boilerplate. Build and launch your startup in days, not months.",
	ogImage: "/og-image.png",
	canonicalUrl: process.env.SITE_URL ?? "http://localhost:3000",
};

// Next 15+ requires `viewport` as a separate export, not nested in Metadata.
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export function generateMetadata({
	title,
	description,
	keywords,
	ogImage,
	ogType = "website",
	twitterCard = "summary_large_image",
	canonicalUrl,
	alternateLocales = [],
	author,
	publishedTime,
	modifiedTime,
}: SEOProps): Metadata {
	const metaTitle = title === defaultMeta.title ? title : `${title} | Your SaaS`;

	return {
		title: metaTitle,
		description,
		keywords: keywords?.split(",").map((k) => k.trim()),
		authors: author ? [{ name: author }] : [{ name: "BilQuick Team" }],
		openGraph: {
			title: metaTitle,
			description,
			type: ogType === "product" ? "website" : ogType,
			images: [
				{
					url: ogImage || defaultMeta.ogImage,
					width: 1200,
					height: 630,
					alt: metaTitle,
				},
			],
			siteName: "Your SaaS",
		},
		twitter: {
			card: twitterCard,
			title: metaTitle,
			description,
			images: ogImage ? [ogImage] : undefined,
			// TODO: replace with your own Twitter/X handle
			creator: "@yourhandle",
		},
		icons: {
			icon: "/favicon.ico",
			apple: "/apple-touch-icon.png",
		},
		metadataBase: new URL(canonicalUrl || defaultMeta.canonicalUrl),
		alternates: {
			canonical: canonicalUrl,
			languages: Object.fromEntries(
				alternateLocales.map((locale) => [locale, `/${locale}`])
			),
		},
		robots: {
			index: true,
			follow: true,
			googleBot: { index: true, follow: true },
		},
		...(publishedTime && { publishedTime }),
		...(modifiedTime && { modifiedTime }),
	};
}
