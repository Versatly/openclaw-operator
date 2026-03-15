import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CalButton from "@/components/CalButton";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";
import { cityLocations, getCityLocationBySlug } from "@/lib/locations";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cityLocations.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityLocationBySlug(slug);

  if (!city) {
    return buildMetadata({
      title: "Location page not found",
      description: "The requested city page could not be found.",
      path: "/locations",
    });
  }

  const cityLower = city.name.toLowerCase();

  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/locations/${city.slug}`,
    keywords: [
      `${cityLower} openclaw setup`,
      `openclaw setup ${cityLower}`,
      `${cityLower} openclaw deployment`,
      `${cityLower} ai agent setup`,
      `${cityLower} openclaw consultant`,
      `${cityLower} managed openclaw service`,
    ],
  });
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const city = getCityLocationBySlug(slug);

  if (!city) {
    notFound();
  }

  const cityPagePath = `/locations/${city.slug}`;
  const cityHeadline = `${city.name} OpenClaw Setup & Managed Deployment`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: city.name, path: cityPagePath },
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.brand} ${city.name} OpenClaw Setup`,
    image: absoluteUrl("/opengraph-image"),
    url: absoluteUrl(cityPagePath),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.stateCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.coordinates.latitude,
      longitude: city.coordinates.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: city.name,
      },
    ],
    serviceType: [
      `${city.name} OpenClaw setup`,
      `${city.name} OpenClaw deployment`,
      `${city.name} AI workflow automation`,
    ],
    description: city.metaDescription,
    priceRange: "$$$",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${city.name} OpenClaw Setup`,
    serviceType: "OpenClaw deployment, security hardening, and managed optimization",
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.brand,
      url: siteConfig.domain,
    },
    offers: [
      {
        "@type": "Offer",
        name: "Hosted OpenClaw Setup",
        price: "3000",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "OpenClaw Additional Agent Setup",
        price: "1500",
        priceCurrency: "USD",
      },
    ],
    description: city.metaDescription,
    url: absoluteUrl(cityPagePath),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden border-b border-onyx/10 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(242,100,48,0.18),transparent_45%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="inline-flex rounded-full border border-tiger/30 bg-tiger/10 px-4 py-1.5 text-sm font-medium text-onyx">
              {city.name} local deployment coverage
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold text-onyx sm:text-5xl">
              {cityHeadline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-base leading-8 text-onyx/80">
              {city.metaDescription}
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-onyx/10 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">Landmarks</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {city.landmarks.map((landmark) => (
                    <span key={landmark} className="rounded-full border border-onyx/15 px-3 py-1 text-xs text-onyx/80">
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-onyx/10 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">Business ecosystem</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {city.ecosystem.map((segment) => (
                    <span key={segment} className="rounded-full border border-tiger/25 bg-tiger/5 px-3 py-1 text-xs text-onyx/80">
                      {segment}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-8 text-onyx/85">
          {city.content.map((paragraph, index) => (
            <FadeIn key={paragraph.slice(0, 32)} delay={index * 0.04}>
              <p>{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </article>

      <section className="border-y border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
              {city.name} OpenClaw setup FAQs
            </h2>
          </FadeIn>
          <div className="mt-8 space-y-4">
            {city.faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.04}>
                <article className="rounded-2xl border border-onyx/10 bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-onyx">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-onyx/80">{faq.answer}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-onyx via-onyx to-slate-800 p-8 text-white sm:p-10">
            <h2 className="max-w-3xl font-heading text-3xl font-semibold sm:text-4xl">
              Ready to launch OpenClaw in {city.name}?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85">
              Book a consultation and we will map your highest-impact workflows, deployment timeline,
              and security model for a production-ready launch.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CalButton className="btn-primary text-center">Book your strategy call</CalButton>
              <Link href="/contact" className="btn-secondary-dark text-center">
                Contact Versatly
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
