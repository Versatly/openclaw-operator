import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/CalEmbed";
import { primaryKeywords, secondaryKeywords, siteConfig } from "@/lib/data";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "OpenClaw Operator | Versatly AI Agent Deployment Partner",
    template: "%s | OpenClaw Operator by Versatly",
  },
  description:
    "Versatly deploys and manages OpenClaw AI agents for teams nationwide with remote-first implementation, secure integrations, and ongoing optimization. Headquartered in South Florida.",
  applicationName: siteConfig.siteName,
  keywords: [...primaryKeywords, ...secondaryKeywords],
  authors: [{ name: siteConfig.brand }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,
  openGraph: {
    title: "OpenClaw Operator | Versatly AI Agent Deployment Partner",
    description:
      "OpenClaw setup and managed deployment for teams nationwide. Email triage, calendar workflows, Slack monitoring, and CRM automation with remote-first delivery.",
    url: siteConfig.domain,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OpenClaw Operator by Versatly for remote and nationwide teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Operator | Versatly AI Agent Deployment Partner",
    description:
      "OpenClaw setup and managed AI agent deployment for nationwide teams, with South Florida headquarters and remote-first delivery.",
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
      <body className={`${plusJakarta.variable} ${playfairDisplay.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-tiger focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <CalEmbed />
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
