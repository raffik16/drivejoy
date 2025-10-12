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
  title: "AICalledIT - AI-Powered Sports Predictions",
  description: "Win more games with AI-powered sports predictions. Expert analysis for NFL, NBA, MLB, NHL & Soccer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
