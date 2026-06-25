import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: "Raphael Ejeogo — Web Developer",
    template: "%s | Raphael Ejeogo",
  },
  description: "Web developer helping local businesses convert visitors into customers. Fast, accessible websites built with modern technology. Free audit available.",
  keywords: ["web developer", "freelance web developer", "website audit", "website rebuild", "web development services"],
  authors: [{ name: "Raphael Ejeogo" }],
  creator: "Raphael Ejeogo",
  publisher: "Raphael Ejeogo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raphaelejeogo.com",
    siteName: "Raphael Ejeogo — Web Developer",
    title: "Raphael Ejeogo — Web Developer",
    description: "Web developer helping local businesses convert visitors into customers. Fast, accessible websites built with modern technology.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raphael Ejeogo — Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphael Ejeogo — Web Developer",
    description: "Web developer helping local businesses convert visitors into customers. Free audit available.",
    images: ["/images/og-image.png"],
    creator: "@raphaelejeogo",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0a0a0a",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Raphael Ejeogo",
  description: "Web developer helping local businesses convert visitors into customers.",
  url: "https://raphaelejeogo.com",
  image: "https://raphaelejeogo.com/images/og-image.png",
  email: "hello@raphaelejeogo.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  knowsAbout: ["Web Development", "Website Audit", "Performance Optimization", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Free Website Audit",
      description: "Free audit of your current site's speed, design, and mobile experience",
      price: "0",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Website Rebuild",
      description: "Complete rebuild with modern technology, optimized for speed and conversions",
    },
    {
      "@type": "Offer",
      name: "Ongoing Maintenance",
      description: "Monthly retainer for updates, security, and performance monitoring",
    },
  ],
  sameAs: [
    "https://linkedin.com/in/raphaelejeogo",
    "https://github.com/raphaelejeogo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-accent text-background px-4 py-2 rounded-md font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}