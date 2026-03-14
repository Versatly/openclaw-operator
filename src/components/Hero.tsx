import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-onyx/10 bg-gradient-to-br from-onyx via-onyx to-slate-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,100,48,0.35),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium">
          OpenClaw deployment and managed service in Miami &amp; South Florida
        </p>
        <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          AI Agent Deployment for Miami &amp; South Florida Businesses
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-white/85">
          Versatly deploys and manages OpenClaw AI agents that handle operational workflows like
          email triage, calendar management, Slack monitoring, and CRM automation so your team can
          focus on customers, growth, and execution.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href={siteConfig.ctaHref} target="_blank" rel="noreferrer" className="btn-primary">
            {siteConfig.ctaLabel}
          </a>
          <Link href="/services" className="btn-secondary text-center">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
