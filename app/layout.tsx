import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/shared/Footer";
import { GoogleAnalytics } from "@/lib/analytics/GoogleAnalytics";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://aicalledit.com'),
  title: {
    default: "AICalledIT - Professional Sports Betting Analysis & Predictions",
    template: "%s | AICalledIT"
  },
  description: "Win more with professional-grade sports betting intelligence. Advanced edge detection, CLV analysis, and statistical modeling for NFL, NBA, MLB, NHL & Soccer. Start your 3-day free trial.",
  keywords: [
    "sports betting predictions",
    "AI sports picks",
    "sports betting analytics",
    "NFL picks",
    "NBA predictions",
    "MLB betting analysis",
    "NHL picks",
    "soccer betting",
    "sports betting edge",
    "CLV analysis",
    "betting intelligence",
    "sharp sports picks",
    "professional sports betting",
    "sports handicapping",
    "betting analytics"
  ],
  authors: [{ name: "AICalledIT" }],
  creator: "AICalledIT",
  publisher: "AICalledIT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "AICalledIT - Professional Sports Betting Analysis & Predictions",
    description: "Professional-grade betting intelligence with advanced edge detection and statistical analysis. Get expert picks for NFL, NBA, MLB, NHL & Soccer. 3-day free trial.",
    siteName: "AICalledIT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AICalledIT - Professional Sports Betting Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AICalledIT - Professional Sports Betting Analysis",
    description: "Professional betting intelligence with advanced edge detection. Expert picks for NFL, NBA, MLB, NHL & Soccer. Start your 3-day free trial.",
    images: ["/og-image.png"],
    creator: "@aicalledit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0066FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable}`}>
        {children}
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
