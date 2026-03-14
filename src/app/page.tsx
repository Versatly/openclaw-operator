import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import {
  faqs,
  homepageIntro,
  pricing,
  processSteps,
  services,
  siteConfig,
  targetSegments,
  testimonials,
} from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Agent Deployment for Miami & South Florida Businesses",
  description:
    "OpenClaw setup Miami service by Versatly. We deploy and manage secure AI agents for South Florida businesses with integrations and ongoing optimization.",
  path: "/",
});

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.brand} - ${siteConfig.serviceName}`,
    image: `${siteConfig.domain}/opengraph-image`,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.areasServed,
    priceRange: "$$",
    serviceType: [
      "openclaw setup miami",
      "openclaw deployment south florida",
      "ai assistant deployment miami",
      "openclaw installation service",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
          OpenClaw setup in Miami that is built for production, not demos
        </h2>
        <div className="mt-6 space-y-5 text-base leading-8 text-onyx/85">
          {homepageIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
            What we do: OpenClaw deployment, hardening, and integration
          </h2>
          <p className="mt-4 max-w-3xl text-onyx/80">
            Our OpenClaw installation service is engineered for business outcomes. Every
            deployment includes technical setup, operational design, and managed support so your
            AI agent keeps improving in Miami and South Florida conditions.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
          Who OpenClaw Operator is for in South Florida
        </h2>
        <p className="mt-4 max-w-3xl text-onyx/80">
          We deploy AI agent systems for local businesses that need reliable execution across
          communication-heavy workflows. These are teams with growth goals, operational pressure,
          and a need for practical automation instead of experiments.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {targetSegments.map((segment) => (
            <article key={segment.title} className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-onyx">{segment.title}</h3>
              <p className="mt-3 text-sm leading-7 text-onyx/80">{segment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-onyx text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
            How our AI assistant deployment in Miami works
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.title} className="reveal rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/85">{step.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-white/80">
            This process gives South Florida business owners clarity at every stage. You know what
            is being deployed, why it matters, and how performance is trending. We are transparent
            about what should be automated now, what should wait, and where human review should
            remain mandatory. That balance is what makes OpenClaw implementation durable.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
          Pricing for OpenClaw managed service in Florida
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pricing.map((item) => (
            <article key={item.title} className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-wide text-onyx/60">{item.title}</p>
              <p className="mt-3 font-heading text-3xl font-semibold text-onyx">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-onyx/80">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-onyx/70">
          Prices vary based on integration complexity and compliance requirements. Every engagement
          starts with a free consultation.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
            Why Miami business owners choose Versatly for OpenClaw deployment
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-onyx/85">
            <p>
              AI is easiest to buy when the conversation stays abstract. It becomes harder when you
              ask specific operational questions: What exactly will this automate? Who reviews edge
              cases? How do we prevent bad actions? How do we keep improving after launch? Versatly
              is built around answering those questions clearly for Miami and South Florida teams.
            </p>
            <p>
              Our deployments are not generic templates. They are workflow systems aligned to your
              operating model. That means understanding your team structure, communication channels,
              service standards, and growth constraints before we automate anything. We configure
              OpenClaw to match that reality, not the other way around.
            </p>
            <p>
              We also know that local businesses need practical accountability. You need response
              speed, measurable outcomes, and support that does not disappear after implementation.
              That is why we include managed optimization with every long-term engagement. As your
              organization changes, your AI system changes with it.
            </p>
            <p>
              Miami and South Florida markets are dynamic. Demand spikes, team priorities shift, and
              communication volume can surge with little warning. An AI agent that looked perfect in
              testing can drift in production if no one is tuning it. Our monthly optimization model
              is designed to prevent that drift and protect the value of your investment.
            </p>
            <p>
              If you have been searching for openclaw consultant miami, ai automation miami, or ai
              employee miami solutions and most options feel vague, this is the difference with
              OpenClaw Operator: we design for execution, maintainability, and business outcomes.
              Your team gets a dependable operating layer, not another tool to babysit.
            </p>
            <p>
              The result is operational leverage that compounds. Teams respond faster, follow through
              more consistently, and keep critical systems cleaner with less manual effort. That is
              how AI assistant deployment in Miami creates real ROI: by making strong teams more
              consistent, not by chasing unrealistic autonomy.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
          Local proof from South Florida operators
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-onyx/85">&ldquo;{testimonial.quote}&rdquo;</p>
              <cite className="mt-4 block text-xs font-semibold uppercase tracking-wide text-onyx/60">
                {testimonial.name}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-onyx">
          Explore more OpenClaw resources for Miami businesses
        </h2>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <Link href="/services" className="rounded-full border border-onyx/15 px-4 py-2 text-onyx hover:border-tiger hover:text-tiger">
            Detailed services
          </Link>
          <Link href="/industries" className="rounded-full border border-onyx/15 px-4 py-2 text-onyx hover:border-tiger hover:text-tiger">
            Industry pages
          </Link>
          <Link href="/blog" className="rounded-full border border-onyx/15 px-4 py-2 text-onyx hover:border-tiger hover:text-tiger">
            SEO content hub
          </Link>
          <Link href="/contact" className="rounded-full border border-onyx/15 px-4 py-2 text-onyx hover:border-tiger hover:text-tiger">
            Contact Versatly
          </Link>
        </div>
      </section>

      <CTA
        title="Ready to deploy OpenClaw for your Miami or South Florida business?"
        description="Book a call with Versatly and get a practical roadmap for AI agent setup, secure deployment, and monthly managed optimization."
      />
    </>
  );
}
