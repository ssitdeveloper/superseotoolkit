import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperSEOToolkit - Premium SEO Analysis & Optimization Tools",
  description:
    "Advanced SEO tools for analyzing, monitoring, and optimizing your website rankings. Professional-grade solutions for digital marketers and agencies.",
  keywords: [
    "SEO tools",
    "keyword research",
    "SEO analyzer",
    "ranking checker",
    "competitor analysis",
  ],
  authors: [{ name: "SuperSEOToolkit" }],
  creator: "SuperSEOToolkit",
  publisher: "SuperSEOToolkit",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://superseotoolkit.com",
    siteName: "SuperSEOToolkit",
    title: "SuperSEOToolkit - Premium SEO Analysis & Optimization Tools",
    description:
      "Advanced SEO tools for analyzing, monitoring, and optimizing your website rankings.",
    images: [
      {
        url: "https://superseotoolkit.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SuperSEOToolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperSEOToolkit - Premium SEO Analysis & Optimization Tools",
    description:
      "Advanced SEO tools for analyzing, monitoring, and optimizing your website rankings.",
    creator: "@superseotoolkit",
    images: ["https://superseotoolkit.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    canonical: "https://superseotoolkit.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
