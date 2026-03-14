import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Versatly | OpenClaw Operator South Florida Team",
  description:
    "Learn about Versatly, the team behind OpenClaw Operator, providing AI agent deployment and managed support for Miami and South Florida businesses.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="border-b border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-onyx sm:text-5xl">
            About Versatly in Miami
          </h1>
          <p className="mt-6 text-base leading-8 text-onyx/80">
            Versatly is a South Florida AI deployment company focused on one core mission: help
            local businesses run better with dependable OpenClaw agents. We are not a generic
            software shop. We are an operations-minded team that builds, secures, and manages AI
            systems where execution quality matters.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base leading-8 text-onyx/85">
          <p>
            Our team works closely with operators across Miami-Dade, Broward, and Palm Beach.
            We understand the pace of South Florida business: high communication volume, fast
            customer expectations, and lean teams carrying significant responsibility. OpenClaw
            provides leverage, but only when deployed with operational discipline.
          </p>
          <p>
            That is why our model combines strategy, deployment, and managed optimization. We map
            workflows first, implement guardrails early, and continue improving outputs as your
            business changes. This approach prevents the common failure mode of AI projects that
            look good in demos but break under daily operational pressure.
          </p>
          <p>
            We are straightforward about what AI should and should not do. OpenClaw is excellent for
            repeatable workflows such as email triage, calendar management support, Slack monitoring,
            and CRM automation. It should not replace human judgment in sensitive decisions. Our
            deployments are built around that practical boundary.
          </p>
          <p>
            If you are a Miami or South Florida business owner looking for openclaw consultant
            support with real accountability, you are in the right place. We focus on measurable
            outcomes, clear communication, and systems your team can trust over the long term.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 pb-6 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-onyx">Local presence</h2>
        <ul className="mt-4 space-y-3 text-sm text-onyx/80">
          <li className="reveal rounded-xl border border-onyx/10 bg-white p-4">
            <strong>Headquarters:</strong> {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}
          </li>
          <li className="reveal rounded-xl border border-onyx/10 bg-white p-4">
            <strong>Service area:</strong> Miami, Miami-Dade, Fort Lauderdale, Broward, West Palm Beach, and surrounding South Florida cities.
          </li>
          <li className="reveal rounded-xl border border-onyx/10 bg-white p-4">
            <strong>Engagement style:</strong> Remote-first delivery with local-market strategy and support.
          </li>
        </ul>
      </section>

      <CTA
        title="Want to meet the team behind your OpenClaw deployment?"
        description="Book a consultation and we’ll walk you through exactly how we scope, launch, and optimize AI agent systems for South Florida businesses."
      />
    </>
  );
}
