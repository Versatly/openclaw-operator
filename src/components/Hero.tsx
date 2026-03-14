import Link from "next/link";
import CalButton from "@/components/CalButton";
import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-onyx/10 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(242,100,48,0.18),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div>
          <FadeIn>
            <p className="inline-flex rounded-full border border-tiger/30 bg-tiger/10 px-4 py-1.5 text-sm font-medium text-onyx">
              THE OpenClaw deployment partner - nationwide and remote
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-tight text-onyx sm:text-5xl lg:text-6xl">
              OpenClaw agents that work 24/7 so your team can ship faster
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg text-onyx/80">
              Versatly designs, deploys, and manages production-ready OpenClaw systems for operators
              who need dependable execution around the clock: email triage, calendar workflows, Slack
              monitoring, and CRM updates without the manual chaos.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="mt-4 text-sm text-onyx/70">
              Headquartered in South Florida. Deploying remotely for teams across the U.S.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CalButton className="btn-primary">{siteConfig.ctaLabel}</CalButton>
              <Link href="/services" className="btn-secondary text-center">
                Explore Services
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.22}>
            <ul className="mt-8 grid gap-3 text-sm text-onyx/75 sm:grid-cols-3">
              <li className="rounded-xl border border-onyx/10 bg-white px-4 py-3 shadow-sm">Production setup and hardening</li>
              <li className="rounded-xl border border-onyx/10 bg-white px-4 py-3 shadow-sm">Monthly optimization included</li>
              <li className="rounded-xl border border-onyx/10 bg-white px-4 py-3 shadow-sm">24/7 operational coverage</li>
            </ul>
          </FadeIn>
        </div>

        <FadeIn className="rounded-3xl border border-onyx/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-xl shadow-tiger/5 sm:p-8" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-onyx/60">
            Social proof
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-onyx">Trusted by operators who care about execution</h2>
          <div className="mt-6 space-y-4">
            <blockquote className="rounded-2xl border border-onyx/10 bg-white p-4">
              <p className="text-sm leading-7 text-onyx/80">
                &ldquo;We replaced endless inbox cleanup with a system that routes, drafts, and
                escalates correctly day and night.&rdquo;
              </p>
              <cite className="mt-3 block text-xs font-semibold uppercase tracking-wide text-onyx/60">
                Alex - Multi-location hospitality group
              </cite>
            </blockquote>
            <blockquote className="rounded-2xl border border-onyx/10 bg-white p-4">
              <p className="text-sm leading-7 text-onyx/80">
                &ldquo;Our coordinators recovered hours each week while follow-through quality
                improved.&rdquo;
              </p>
              <cite className="mt-3 block text-xs font-semibold uppercase tracking-wide text-onyx/60">
                Priya - Construction services company
              </cite>
            </blockquote>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-onyx px-3 py-4 text-white">
              <p className="text-2xl font-semibold">24/7</p>
              <p className="text-xs text-white/75">Agent uptime</p>
            </div>
            <div className="rounded-xl bg-onyx px-3 py-4 text-white">
              <p className="text-2xl font-semibold">&lt;2 wk</p>
              <p className="text-xs text-white/75">Typical launch</p>
            </div>
            <div className="rounded-xl bg-onyx px-3 py-4 text-white">
              <p className="text-2xl font-semibold">Remote</p>
              <p className="text-xs text-white/75">Delivery first</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="mx-auto mb-2 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-tiger/40 to-transparent" />
      </div>
    </section>
  );
}
