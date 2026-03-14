import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Open Source Work — ClawVault, WorkGraph & AI Agent Tools",
  description:
    "Versatly builds open-source tools for the AI agent ecosystem. ClawVault (500+ stars) for agent memory, WorkGraph for multi-agent coordination, and CLI tools published on npm.",
  path: "/open-source",
  keywords: [
    "clawvault",
    "ai agent memory",
    "workgraph",
    "openclaw tools",
    "versatly open source",
    "agent memory system",
  ],
});

export default function OpenSourcePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Open Source", path: "/open-source" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="border-b border-onyx/10 bg-gradient-to-br from-onyx via-onyx to-slate-800 text-white">
        <div className="relative mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,100,48,0.25),transparent_40%)]" />
          <div className="relative">
            <p className="text-sm font-medium text-tiger">Built by Versatly</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              We build the tools that power the OpenClaw ecosystem
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/80">
              Versatly is not just an OpenClaw deployment service. We are active builders — creating open-source
              tools used by thousands of developers, contributing to the AI agent ecosystem, and running production
              deployments 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* ClawVault */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-tiger/10 text-3xl">🧠</span>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-onyx">ClawVault</h2>
            <p className="text-sm text-onyx/60">AI Agent Memory System · 500+ GitHub Stars · Open Source</p>
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-onyx/85">
          <p>
            ClawVault is the most advanced filesystem-native memory system for AI agents. It solves the #1 failure
            mode in production AI deployments: <strong>context death</strong> — when an agent loses everything it
            knew about you, your business, and your preferences because the conversation window reset.
          </p>
          <p>
            Unlike cloud-based memory solutions, ClawVault stores everything locally in plain markdown files. This
            approach outperforms specialized vector databases: our research showed filesystem-native approaches
            score 74.0% on the LoCoMo benchmark vs 68.5% for Mem0 (the leading cloud competitor). This finding was
            independently validated by Letta/MemGPT (14K+ GitHub stars).
          </p>
          <p>
            ClawVault powers every OpenClaw deployment we manage. When your agent remembers your preferences,
            your team structure, your client relationships, and your workflow patterns across sessions — that&apos;s
            ClawVault working under the hood.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-onyx/10 bg-slate-50 p-5">
            <h3 className="font-heading text-sm font-semibold text-onyx">Core Features</h3>
            <ul className="mt-3 space-y-2 text-sm text-onyx/80">
              <li>• Memory graph with wiki-style linking</li>
              <li>• Hybrid search (BM25 + semantic vectors)</li>
              <li>• Observational memory (automatic session compression)</li>
              <li>• Context profiles for different work modes</li>
              <li>• Checkpoint/recovery for context death prevention</li>
              <li>• 14+ structured storage categories</li>
            </ul>
          </div>
          <div className="rounded-xl border border-onyx/10 bg-slate-50 p-5">
            <h3 className="font-heading text-sm font-semibold text-onyx">Background Workers</h3>
            <ul className="mt-3 space-y-2 text-sm text-onyx/80">
              <li>• <strong>Curator</strong> — organizes and maintains memory quality</li>
              <li>• <strong>Janitor</strong> — cleans stale entries and deduplicates</li>
              <li>• <strong>Distiller</strong> — compresses long memories into key insights</li>
              <li>• <strong>Surveyor</strong> — scans for patterns across the memory graph</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://clawvault.dev" target="_blank" rel="noreferrer"
            className="inline-flex items-center rounded-full bg-tiger px-5 py-2 text-sm font-medium text-white hover:bg-tiger/90">
            clawvault.dev →
          </a>
          <a href="https://github.com/psobral/clawvault" target="_blank" rel="noreferrer"
            className="inline-flex items-center rounded-full border border-onyx/15 px-5 py-2 text-sm font-medium text-onyx/80 hover:border-tiger hover:text-tiger">
            GitHub →
          </a>
          <a href="https://docs.clawvault.dev" target="_blank" rel="noreferrer"
            className="inline-flex items-center rounded-full border border-onyx/15 px-5 py-2 text-sm font-medium text-onyx/80 hover:border-tiger hover:text-tiger">
            Documentation →
          </a>
          <a href="https://www.npmjs.com/package/clawvault" target="_blank" rel="noreferrer"
            className="inline-flex items-center rounded-full border border-onyx/15 px-5 py-2 text-sm font-medium text-onyx/80 hover:border-tiger hover:text-tiger">
            npm →
          </a>
        </div>
      </section>

      <hr className="mx-auto w-full max-w-4xl border-onyx/10" />

      {/* WorkGraph */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-tiger/10 text-3xl">⚡</span>
          <div>
            <h2 className="font-heading text-3xl font-semibold text-onyx">WorkGraph</h2>
            <p className="text-sm text-onyx/60">Multi-Agent Coordination Kernel</p>
          </div>
        </div>

        <div className="mt-8 space-y-6 text-base leading-8 text-onyx/85">
          <p>
            WorkGraph is a coordination fabric for multi-agent systems. When businesses deploy multiple AI agents —
            one for sales, one for operations, one for finance — they need a way to coordinate. WorkGraph provides
            that coordination layer using markdown-native primitives.
          </p>
          <p>
            Built on the principle that AI agents work best with familiar tools, WorkGraph uses typed threads,
            ledger events, policy gates, and trigger systems instead of complex orchestration frameworks. It
            includes an MCP (Model Context Protocol) server so any AI agent can interact with it natively.
          </p>
          <p>
            WorkGraph powers Versatly&apos;s internal operations — coordinating our AI workforce across development,
            deployment, and support functions. When we deploy multi-agent setups for enterprise clients, WorkGraph
            provides the coordination backbone.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-onyx/10 bg-slate-50 p-5">
            <h3 className="font-heading text-sm font-semibold text-onyx">Core</h3>
            <ul className="mt-3 space-y-2 text-sm text-onyx/80">
              <li>• Markdown primitives</li>
              <li>• Typed ledger events</li>
              <li>• Policy gates & triggers</li>
              <li>• Thread context store</li>
            </ul>
          </div>
          <div className="rounded-xl border border-onyx/10 bg-slate-50 p-5">
            <h3 className="font-heading text-sm font-semibold text-onyx">Integrations</h3>
            <ul className="mt-3 space-y-2 text-sm text-onyx/80">
              <li>• MCP server</li>
              <li>• GitHub webhooks</li>
              <li>• Linear webhooks</li>
              <li>• Cursor automations</li>
            </ul>
          </div>
          <div className="rounded-xl border border-onyx/10 bg-slate-50 p-5">
            <h3 className="font-heading text-sm font-semibold text-onyx">Infrastructure</h3>
            <ul className="mt-3 space-y-2 text-sm text-onyx/80">
              <li>• Tailscale networking</li>
              <li>• Webhook deduplication</li>
              <li>• Runtime adapters</li>
              <li>• Federation-ready</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="mx-auto w-full max-w-4xl border-onyx/10" />

      {/* CLI Tools */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-onyx">Published CLI Tools</h2>
        <p className="mt-4 text-base leading-8 text-onyx/80">
          We publish npm packages that extend what AI agents can do. These tools are used in our client deployments
          and available to the open-source community.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "pdauth", desc: "OAuth connection manager for Pipedream integrations" },
            { name: "zoho-mail-cli", desc: "CLI for Zoho Mail — list, read, send, search emails" },
            { name: "clovercli", desc: "Clover POS integration for restaurant operations" },
            { name: "linkedin-cli", desc: "LinkedIn posting and profile management" },
            { name: "tasktime", desc: "Task execution benchmarking for agents" },
            { name: "skillbench", desc: "Agent skill quality measurement framework" },
          ].map((tool) => (
            <div key={tool.name} className="rounded-xl border border-onyx/10 bg-slate-50 p-5">
              <h3 className="font-heading text-sm font-semibold text-onyx font-mono">{tool.name}</h3>
              <p className="mt-2 text-sm text-onyx/70">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-onyx">
            Why this matters for your OpenClaw deployment
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-onyx/80">
            <p>
              When you choose Versatly for your Miami OpenClaw setup, you are not hiring a generic IT consultancy.
              You are hiring the team that builds the memory system (ClawVault), the coordination kernel (WorkGraph),
              and the CLI tools that make OpenClaw deployments production-grade.
            </p>
            <p>
              We understand OpenClaw at the architecture level because we build at the architecture level.
              That depth translates into better deployments, smarter workflow design, and faster problem resolution
              when issues arise.
            </p>
            <p>
              Learn more about our company at{" "}
              <a href="https://versatly.com" target="_blank" rel="noreferrer" className="text-tiger hover:underline">
                versatly.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to work with the team that builds the ecosystem?"
        description="Book a free consultation and see how our deep OpenClaw expertise translates into better deployments for your business."
      />
    </>
  );
}
