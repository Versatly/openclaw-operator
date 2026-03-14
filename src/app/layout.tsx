import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { primaryKeywords, secondaryKeywords, siteConfig } from "@/lib/data";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Miami OpenClaw Setup & Managed Deployment | Versatly",
    template: "%s | OpenClaw Operator by Versatly",
  },
  description:
    "Miami OpenClaw setup service by Versatly. We deploy, harden, and manage OpenClaw AI agents for businesses. Email triage, calendar management, Slack monitoring, CRM automation. Free consultation.",
  applicationName: siteConfig.siteName,
  keywords: [
    "miami openclaw setup",
    "openclaw setup miami",
    ...primaryKeywords,
    ...secondaryKeywords,
  ],
  authors: [{ name: siteConfig.brand }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,
  openGraph: {
    title: "Miami OpenClaw Setup & Managed AI Agent Deployment | Versatly",
    description:
      "Miami OpenClaw setup and managed deployment service. Professional AI agent deployment with security hardening, integrations, and ongoing optimization for businesses.",
    url: siteConfig.domain,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Miami OpenClaw Setup — Professional AI Agent Deployment by Versatly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami OpenClaw Setup & Managed Deployment | Versatly",
    description:
      "Professional Miami OpenClaw setup and managed AI agent deployment. Security hardening, integrations, and ongoing optimization.",
    images: ["/opengraph-image"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-tiger focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
