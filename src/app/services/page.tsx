import Link from "next/link";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { primaryKeywords, services, siteConfig } from "@/lib/data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "OpenClaw Services | Setup, Security, Integrations, Managed Support",
  description:
    "Explore OpenClaw setup Miami services by Versatly: deployment, security hardening, integration configuration, and managed support for South Florida businesses.",
  path: "/services",
  keywords: primaryKeywords,
});

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "OpenClaw AI agent deployment and managed support",
    provider: {
      "@type": "Organization",
      name: siteConfig.brand,
      url: siteConfig.domain,
    },
    areaServed: siteConfig.areasServed,
    offers: [
      {
        "@type": "Offer",
        name: "OpenClaw Setup & Deployment",
        price: "997",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Managed Care",
        price: "297",
        priceCurrency: "USD",
      },
    ],
    description:
      "OpenClaw setup, security hardening, integration configuration, and ongoing managed service for Miami and South Florida businesses.",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <section className="border-b border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-onyx sm:text-5xl">
            OpenClaw deployment services for Miami and South Florida
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-onyx/80">
            Versatly provides full-lifecycle OpenClaw installation service for businesses that need
            production-ready AI operations. We deploy quickly, harden responsibly, integrate with
            your existing stack, and manage optimization long term.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
          Detailed service breakdown
        </h2>
        <div className="mt-8 space-y-8">
          <article className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-2xl font-semibold text-onyx">Setup &amp; Deployment</h3>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              We handle OpenClaw environment architecture, deployment pipelines, role definitions,
              and initial workflow programming. This includes practical setup for Miami businesses
              that need fast implementation without skipping reliability basics.
            </p>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              Every deployment starts with a clear scope and execution map so your team understands
              exactly what is automated, where approvals are required, and what success metrics are
              tracked during launch.
            </p>
          </article>
          <article className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-2xl font-semibold text-onyx">Security Hardening</h3>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              We design role-based access controls, establish escalation policies, and configure
              restricted automation boundaries so your OpenClaw deployment supports daily operations
              while preserving governance standards.
            </p>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              Hardening also includes audit visibility and edge-case testing. For South Florida
              teams handling sensitive customer and internal data, this is the difference between a
              risky experiment and a dependable production system.
            </p>
          </article>
          <article className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-2xl font-semibold text-onyx">Integration Configuration</h3>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              We integrate OpenClaw with operational tools your team already uses, including email
              triage workflows, calendar management workflows, Slack monitoring rules, and CRM
              automation pipelines for cleaner records and faster follow-up cycles.
            </p>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              This integration-first approach reduces context switching and increases adoption because
              automation appears in your existing systems instead of forcing a disconnected process.
            </p>
          </article>
          <article className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-2xl font-semibold text-onyx">Ongoing Managed Support</h3>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              After launch, we provide monthly optimization for prompt logic, routing quality,
              workflow expansion, and incident response. Your OpenClaw system evolves alongside your
              operations so automation value compounds over time.
            </p>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              Our managed support is built for Miami and South Florida businesses that need a local
              partner mindset, clear accountability, and measurable outcomes from AI deployment.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-onyx text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
            What makes our OpenClaw managed service different
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-white/85">
            <p>
              Most providers stop at installation. We treat OpenClaw as an operational system that
              needs strategy, governance, and ongoing tuning. Your deployment is aligned to real
              workflows in Miami and South Florida, not generic automation templates.
            </p>
            <p>
              We integrate the workflows local teams use daily: email triage for overloaded inboxes,
              calendar management for high-volume scheduling, Slack monitoring for urgent issue
              visibility, and CRM automation for cleaner pipeline execution.
            </p>
            <p>
              Security hardening is built into every deployment. We define where AI can act, where
              it must escalate, and where human approval is mandatory. That allows your team to gain
              speed without introducing avoidable risk.
            </p>
            <p>
              As business conditions shift, we keep refining your automation. Monthly managed support
              includes performance reviews, prompt tuning, workflow expansion planning, and direct
              troubleshooting support. This keeps value compounding instead of plateauing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
          Service pathways
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-onyx">Free Consultation</h3>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              We review your current operating model, define high-impact workflows, and map an
              implementation path tailored to your Miami or South Florida business.
            </p>
          </article>
          <article className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-onyx">Setup from $997</h3>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              Includes architecture, OpenClaw deployment, initial integration configuration, security
              baseline hardening, and launch support with documented workflows.
            </p>
          </article>
          <article className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-onyx">Managed Care from $297/mo</h3>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              Monthly optimization, monitoring, incident response, and roadmap expansion to ensure
              your AI assistant deployment continues delivering measurable value.
            </p>
          </article>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <Link href="/industries" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Browse industry solutions
          </Link>
          <Link href="/blog" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Read AI automation guides
          </Link>
          <Link href="/contact" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Talk to a consultant
          </Link>
        </div>
      </section>

      <CTA
        title="Need OpenClaw installation service with local execution support?"
        description="Book a call and we will build a clear, staged deployment plan for your Miami or South Florida business."
      />
    </>
  );
}
