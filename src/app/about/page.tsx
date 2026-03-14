import CTA from "@/components/CTA";
import Link from "next/link";
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
            If you are a business owner looking for an OpenClaw deployment partner with real
            accountability, you are in the right place. We focus on measurable outcomes, clear
            communication, and systems your team can trust over the long term.
          </p>
        </div>
      </section>

      <section className="border-y border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-onyx">
            We don&apos;t just deploy OpenClaw — we build the ecosystem
          </h2>
          <p className="mt-4 text-base leading-8 text-onyx/80">
            Most OpenClaw setup services install the software and configure integrations. Versatly is different.
            We are active builders in the AI agent ecosystem, creating open-source tools used by thousands of developers worldwide.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-onyx/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-tiger/10 text-xl">🧠</span>
                <h3 className="font-heading text-lg font-semibold text-onyx">ClawVault</h3>
              </div>
              <p className="mt-2 text-sm text-onyx/70 font-medium">500+ GitHub Stars · Open Source</p>
              <p className="mt-3 text-sm leading-7 text-onyx/80">
                The most advanced filesystem-native memory system for AI agents. ClawVault solves context death —
                the #1 failure mode in production AI deployments. Features memory graphs, semantic search,
                observational memory, and checkpoint/recovery.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="https://clawvault.dev" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-onyx/15 px-3 py-1 text-xs font-medium text-onyx/80 hover:border-tiger hover:text-tiger">
                  Website →
                </a>
                <a href="https://github.com/psobral/clawvault" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-onyx/15 px-3 py-1 text-xs font-medium text-onyx/80 hover:border-tiger hover:text-tiger">
                  GitHub →
                </a>
                <a href="https://docs.clawvault.dev" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-onyx/15 px-3 py-1 text-xs font-medium text-onyx/80 hover:border-tiger hover:text-tiger">
                  Docs →
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-onyx/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-tiger/10 text-xl">⚡</span>
                <h3 className="font-heading text-lg font-semibold text-onyx">WorkGraph</h3>
              </div>
              <p className="mt-2 text-sm text-onyx/70 font-medium">Multi-Agent Coordination Kernel</p>
              <p className="mt-3 text-sm leading-7 text-onyx/80">
                A coordination fabric for multi-agent systems built on markdown primitives. WorkGraph manages
                threads, typed ledger events, policy gates, and webhook gateways. It powers how Versatly
                orchestrates AI agents working together on the same company.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-onyx/15 px-3 py-1 text-xs font-medium text-onyx/70">
                  MCP Server
                </span>
                <span className="inline-flex items-center rounded-full border border-onyx/15 px-3 py-1 text-xs font-medium text-onyx/70">
                  Webhook Gateway
                </span>
                <span className="inline-flex items-center rounded-full border border-onyx/15 px-3 py-1 text-xs font-medium text-onyx/70">
                  Tailscale
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-onyx/10 bg-white p-6">
            <h3 className="font-heading text-lg font-semibold text-onyx">Published CLI Tools & Skills</h3>
            <p className="mt-2 text-sm leading-7 text-onyx/80">
              We&apos;ve published multiple npm packages and OpenClaw skills that extend what AI agents can do:
              pdauth (OAuth connections), zoho-mail-cli, clovercli (Clover POS for restaurants), linkedin-cli,
              tasktime (execution benchmarking), skillbench (skill quality measurement), and more.
              Multiple skills published on the{" "}
              <a href="https://clawhub.com" target="_blank" rel="noreferrer" className="text-tiger hover:underline">
                ClawHub marketplace
              </a>.
            </p>
          </div>

          <p className="mt-8 text-sm leading-7 text-onyx/80">
            When you hire Versatly for Miami OpenClaw setup, you&apos;re hiring the team that builds the ecosystem — not just installs it.
            Learn more at{" "}
            <a href="https://versatly.com" target="_blank" rel="noreferrer" className="text-tiger hover:underline">
              versatly.com
            </a>.
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
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link href="/services" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Explore services
          </Link>
          <Link href="/industries" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Browse industry pages
          </Link>
          <Link href="/blog" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Read AI guides
          </Link>
        </div>
      </section>

      <CTA
        title="Want to meet the team behind your OpenClaw deployment?"
        description="Book a consultation and we’ll walk you through exactly how we scope, launch, and optimize AI agent systems for South Florida businesses."
      />
    </>
  );
}
