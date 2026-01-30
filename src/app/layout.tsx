import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "OpenClaw Operator | Deploy AI Operators in Minutes",
  description: "The Operator-as-a-Service platform. Deploy AI operators in minutes, scale without limits. Self-service AI automation for modern businesses.",
  keywords: ["AI operators", "automation platform", "SaaS", "AI agents", "business automation", "operator as a service"],
  authors: [{ name: "OpenClaw" }],
  creator: "OpenClaw",
  publisher: "OpenClaw",
  metadataBase: new URL("https://openclawoperator.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openclawoperator.com",
    siteName: "OpenClaw Operator",
    title: "OpenClaw Operator | Deploy AI Operators in Minutes",
    description: "The Operator-as-a-Service platform. Deploy AI operators in minutes, scale without limits. Self-service AI automation for modern businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenClaw Operator - AI Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Operator | Deploy AI Operators in Minutes",
    description: "The Operator-as-a-Service platform. Deploy AI operators in minutes, scale without limits.",
    images: ["/og-image.png"],
    creator: "@openclawai",
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
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://openclawoperator.com/#organization",
                  name: "OpenClaw",
                  url: "https://openclawoperator.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://openclawoperator.com/logo.png",
                  },
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://openclawoperator.com/#website",
                  url: "https://openclawoperator.com",
                  name: "OpenClaw Operator",
                  publisher: {
                    "@id": "https://openclawoperator.com/#organization",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "OpenClaw Operator",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  offers: {
                    "@type": "AggregateOffer",
                    lowPrice: "99",
                    highPrice: "999",
                    priceCurrency: "USD",
                    offerCount: "3",
                  },
                  description: "Operator-as-a-Service platform for deploying AI operators",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    ratingCount: "150",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
