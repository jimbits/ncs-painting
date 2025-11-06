import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  // Title: Primary keyword first, include trust signal (35+ years)
  title: {
    template: 'NCS Painting Edmonton - %s | Residential Painting Specialists',
    default:
      'NCS Painting Edmonton - Residential Painters (35+ Years) | Interior & Exterior',
  },

  // Meta Description: Lead with core offering, mention specialties, include CTA
  // Target: 155-160 characters for optimal display
  description:
    "NCS Painting - Edmonton's trusted residential painters for 35+ years. Interior & exterior painting, cabinet refinishing, drywall repair. Eco-friendly options. Free estimates: (780) 722-5577",

  // Keywords: Separate each keyword, prioritize high-intent local terms
  // Focus: Core service (residential painting) + locations + specialties + CTA intent
  keywords: [
    'residential painters Edmonton',
    'house painters Edmonton',
    'interior painting Edmonton',
    'exterior painting Edmonton',
    'cabinet refinishing Edmonton',
    'drywall repair Edmonton',
    'eco-friendly paint Edmonton',
    'painting contractors Edmonton',
    'free painting estimate',
    'painters St Albert',
    'painters Sherwood Park',
    'painters Fort Saskatchewan',
    'professional painters',
    'licensed painters Edmonton',
  ],

  // Favicon
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg' }],
  },

  // Author metadata
  authors: [{ name: 'James Foley' }, { name: 'Niall Smith' }],
  creator: 'James Foley & Niall Smith',

  // Robots configuration: Allow indexing, set snippet/image preferences for Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Open Graph: Critical for social media sharing, improves CTR
  // Dimensions: 1200x630px (optimal for most platforms)
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ncspainting.com',
    siteName: 'NCS Painting',
    title: 'NCS Painting Edmonton - Trusted Residential Painters (35+ Years)',
    description:
      'Professional residential painting services in Edmonton & area. Interior, exterior, cabinet refinishing & drywall repair. Eco-friendly options. Free estimates.',
    images: [
      {
        url: 'https://ncspainting.com/images/og/og-home-1200x630.jpg', // ✅ FIXED: Correct URL and filename
        width: 1200,
        height: 630,
        alt: 'NCS Painting - Professional residential painters in Edmonton',
        type: 'image/jpeg',
      },
    ],
  },

  // Canonical URL: Prevents duplicate content issues, tells Google which version to index
  alternates: {
    canonical: 'https://ncspainting.com',
  },

  // Verification & Analytics (optional, add if using these services)
  // verification: {
  //   google: 'your-google-verification-code',
  // },

  // Category: Helps search engines understand site purpose
  category: 'Painting Services',
};
