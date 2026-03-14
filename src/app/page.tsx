import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "OpenClaw Deployment Partner for Nationwide Teams",
  description:
    "Versatly deploys and manages OpenClaw AI agents for operators nationwide with remote-first setup, secure integrations, and monthly optimization. Headquartered in South Florida.",
  path: "/",
});

const alwaysOnCapabilities = [
  {
    title: "Email triage and follow-up routing",
    description:
      "OpenClaw monitors inbound communication around the clock, classifies urgency, drafts responses, and routes ownership before work slips.",
  },
  {
    title: "Calendar prep and scheduling context",
    description:
      "Every meeting gets agenda context, key links, and follow-up tasks so execution does not depend on memory or manual notes.",
  },
  {
    title: "Slack signal monitoring",
    description:
      "The agent watches high-priority channels and escalates the moments that require immediate human judgment.",
  },
  {
    title: "CRM consistency at scale",
    description:
      "Records stay clean, stage updates stay current, and next actions remain visible for sales and operations teams.",
  },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Map high-friction workflows",
    description:
      "We start with your highest-impact process bottlenecks and define clear success metrics before writing a single automation rule.",
  },
  {
    number: "02",
    title: "Deploy, integrate, and harden",
    description:
      "We configure OpenClaw with your stack, permission model, and escalation boundaries so the system is safe in production.",
  },
  {
    number: "03",
    title: "Optimize monthly with your team",
    description:
      "You get continuous tuning, quality reviews, and roadmap support so value compounds over time instead of plateauing.",
  },
];

const builtForPersonas = [
  {
    title: "Operations leaders",
    description:
      "For teams that need reliability across inboxes, handoffs, and cross-functional follow-through.",
  },
  {
    title: "Founder-led service companies",
    description:
      "For owners tired of dropped follow-ups and manual admin burden blocking growth.",
  },
  {
    title: "Revenue and client teams",
    description:
      "For organizations that need faster response cycles without adding chaotic process overhead.",
  },
  {
    title: "Multi-location operators",
    description:
      "For teams standardizing execution quality across locations, time zones, and communication channels.",
  },
];

const pricingCards = [
  {
    label: "Discovery Call",
    price: "$0",
    detail: "45-minute diagnostic session with workflow priorities and rollout guidance.",
  },
  {
    label: "Deployment Sprint",
    price: "From $997",
    detail: "Production setup, integrations, hardening, and launch support.",
  },
  {
    label: "Managed Optimization",
    price: "From $297/mo",
    detail: "Monthly tuning, incident support, and iterative workflow expansion.",
  },
];

const testimonials = [
  {
    quote:
      "Versatly helped us turn OpenClaw into an execution layer, not another dashboard. We now catch more issues before they become escalations.",
    name: "Maya",
    companyType: "Hospitality operations group",
  },
  {
    quote:
      "Setup was fast, but the real value was in the monthly optimization. Our team regained hours each week without losing quality control.",
    name: "Daniel",
    companyType: "Construction services company",
  },
  {
    quote:
      "Most providers talked features. Versatly focused on workflow outcomes. That difference made adoption easy for our team.",
    name: "Erin",
    companyType: "Real estate brokerage",
  },
];

const homepageFaqs = [
  {
    question: "Do you deploy OpenClaw remotely, or only in South Florida?",
    answer:
      "Most customer deployments are remote. We work with teams across the U.S. and can support global teams as needed. Versatly is headquartered in South Florida, but delivery is remote-first.",
  },
  {
    question: "How long does a typical deployment take?",
    answer:
      "Most deployments launch in one to three weeks depending on integration complexity and internal approvals. We phase larger environments to reduce risk and speed up learning.",
  },
  {
    question: "What does the OpenClaw agent handle day-to-day?",
    answer:
      "Common workflows include email triage, calendar preparation, Slack escalation monitoring, CRM updates, and task routing. We define clear boundaries for where automation acts and where human review is mandatory.",
  },
  {
    question: "Is security built into the setup?",
    answer:
      "Yes. Every deployment includes role-based permissions, scoped integrations, audit visibility, and escalation controls. Security and governance are part of the core implementation, not an add-on.",
  },
  {
    question: "Who is this best suited for?",
    answer:
      "OpenClaw is ideal for teams with high communication volume, repeatable operational workflows, and strong execution standards. Service businesses, agencies, field teams, and multi-location operators are common fits.",
  },
];

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
      "openclaw setup and deployment",
      "openclaw managed service",
      "ai assistant deployment partner",
      "remote ai agent installation",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
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

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
              Always on, always working
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mt-4 max-w-3xl text-onyx/80">
              OpenClaw should reduce operational pressure, not add another tool to babysit. We build
              production systems that keep execution moving 24/7 with clear guardrails.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {alwaysOnCapabilities.map((capability, index) => (
              <FadeIn key={capability.title} delay={0.06 * index}>
                <article className="rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-heading text-2xl font-semibold text-onyx">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-onyx/80">{capability.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
            Built for teams that run on execution
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mt-4 max-w-3xl text-onyx/80">
            We are a fit for operators with real process volume, measurable goals, and a need for
            dependable automation under pressure.
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {builtForPersonas.map((persona, index) => (
            <FadeIn key={persona.title} delay={0.06 * index}>
              <article className="rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-heading text-2xl font-semibold text-onyx">{persona.title}</h3>
                <p className="mt-3 text-sm leading-7 text-onyx/80">{persona.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-onyx text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">How it works</h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {howItWorksSteps.map((step, index) => (
              <FadeIn key={step.title} delay={0.06 * index}>
                <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tiger">
                    {step.number}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/85">{step.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.18}>
            <p className="mt-8 max-w-4xl text-white/80">
              This process gives teams clarity at every stage: what is being automated, where risk is
              managed, and how outcomes are improving month over month.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">Simple pricing paths</h2>
          </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pricingCards.map((item, index) => (
            <FadeIn key={item.label} delay={0.06 * index}>
              <article
                className={`rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  index === 1 ? "border-tiger/40 ring-1 ring-tiger/25" : "border-onyx/10"
                }`}
              >
                <p className="text-sm uppercase tracking-wide text-onyx/60">{item.label}</p>
                <p className="mt-3 font-heading text-4xl font-semibold text-onyx">{item.price}</p>
                <p className="mt-4 text-sm leading-7 text-onyx/80">{item.detail}</p>
              </article>
            </FadeIn>
          ))}
        </div>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-sm text-onyx/70">
              Pricing varies with integration depth and compliance requirements. Every engagement
              starts with a scoped discovery call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
            What operators say after launch
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={0.06 * index}>
              <blockquote className="rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm leading-7 text-onyx/85">&ldquo;{testimonial.quote}&rdquo;</p>
                <cite className="mt-4 block text-xs font-semibold uppercase tracking-wide text-onyx/60">
                  {testimonial.name} - {testimonial.companyType}
                </cite>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      <FAQ items={homepageFaqs} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-onyx">
          Explore more OpenClaw resources
        </h2>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <Link href="/services" className="rounded-full border border-onyx/15 px-4 py-2 text-onyx hover:border-tiger hover:text-tiger">
            Detailed services
          </Link>
          <Link href="/locations" className="rounded-full border border-onyx/15 px-4 py-2 text-onyx hover:border-tiger hover:text-tiger">
            Deployment locations
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
        title="Ready to deploy OpenClaw with a reliable implementation partner?"
        description="Book a quick chat with Versatly for a practical roadmap covering setup, integrations, security boundaries, and ongoing optimization."
      />
    </>
  );
}
