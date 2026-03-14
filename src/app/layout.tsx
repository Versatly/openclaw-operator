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
    default: "OpenClaw Operator Miami | Versatly AI Agent Deployment",
    template: "%s | OpenClaw Operator by Versatly",
  },
  description:
    "Versatly deploys and manages OpenClaw AI agents for Miami and South Florida businesses with secure setup, integrations, and ongoing optimization.",
  applicationName: siteConfig.siteName,
  keywords: [...primaryKeywords, ...secondaryKeywords],
  authors: [{ name: siteConfig.brand }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,
  openGraph: {
    title: "OpenClaw Operator Miami | Versatly AI Agent Deployment",
    description:
      "OpenClaw setup and managed deployment for Miami and South Florida businesses. Email triage, calendar workflows, Slack monitoring, and CRM automation.",
    url: siteConfig.domain,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OpenClaw Operator by Versatly for South Florida businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Operator Miami | Versatly AI Agent Deployment",
    description:
      "OpenClaw setup and managed AI agent deployment for Miami and South Florida businesses.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
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
