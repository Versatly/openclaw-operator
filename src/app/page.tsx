import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/FadeIn";
import CalButton from "@/components/CalButton";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Miami OpenClaw Setup — Professional AI Agent Deployment",
  description:
    "Miami OpenClaw setup by Versatly. We deploy, harden, and manage OpenClaw AI agents for businesses. Email triage, calendar management, Slack monitoring, CRM automation. Free consultation.",
  path: "/",
  keywords: [
    "miami openclaw setup",
    "openclaw setup miami",
    "openclaw deployment miami",
    "ai agent setup miami",
    "openclaw installation miami",
    "openclaw consultant miami",
    "openclaw managed service miami",
  ],
});

const homepageFaqs = [
  {
    question: "What is OpenClaw?",
    answer:
      "An open-source AI assistant that runs 24/7 on dedicated infrastructure. It can triage email, schedule meetings, draft replies, monitor Slack, and automate workflows across your tools — proactively, without you asking. Think of it as a digital employee that never sleeps.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "Not at all. We handle everything — you don't touch a terminal or write any code. After setup, you talk to your bot through Telegram, Slack, or WhatsApp just like texting an assistant.",
  },
  {
    question: "Do I need to be in Miami?",
    answer:
      "No. Most customers are remote — we set everything up over a video call regardless of where you are. We have customers across the U.S. and internationally.",
  },
  {
    question: "Can't I just set it up myself?",
    answer:
      "You can — it's open source. But every self-install we've seen has security gaps: exposed credentials, no audit trail, no sandbox. The installation is straightforward; the hardening is where most teams need help.",
  },
  {
    question: "What's included in implementation?",
    answer:
      "VPS or Mac Mini provisioning, security hardening (Docker sandbox, firewall, exec allowlists), OAuth middleware setup, email and calendar integration, up to 3 workflows, documentation, and 14-day hypercare. You go live same day.",
  },
  {
    question: "What about ongoing maintenance?",
    answer:
      "OAuth tokens expire, OpenClaw ships updates monthly, integrations break, workflows drift. Implementation includes 14-day hypercare. For ongoing monitoring, updates, and support, Managed Care keeps everything running.",
  },
  {
    question: "VPS or Mac Mini?",
    answer:
      "Most customers use a cloud VPS ($5–10/mo) — more secure, easier to maintain, and we handle it remotely. Mac Mini is for teams that need iMessage integration or prefer owning the hardware (~$600 at cost).",
  },
  {
    question: "Do you do multi-agent deployments?",
    answer:
      "Yes — most 4–50 employee teams deploy 2–6 agents. A CEO bot for email/calendar, a Sales bot for CRM and outreach, a Finance bot for invoices. We help decide which roles need their own agent vs shared workflows.",
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
    address: { "@type": "PostalAddress", ...siteConfig.address },
    geo: { "@type": "GeoCoordinates", latitude: siteConfig.geo.latitude, longitude: siteConfig.geo.longitude },
    areaServed: siteConfig.areasServed,
    priceRange: "$$$",
    serviceType: ["miami openclaw setup", "openclaw setup miami", "openclaw deployment miami", "ai agent setup miami", "openclaw managed service florida"],
    description: "Professional Miami OpenClaw setup and managed AI agent deployment service by Versatly.",
    knowsAbout: ["OpenClaw", "AI agents", "AI assistant deployment", "business automation"],
    offers: [
      { "@type": "Offer", name: "Hosted Setup", price: "3000", priceCurrency: "USD", description: "Managed hosted deployment with security hardening and 14-day hypercare." },
      { "@type": "Offer", name: "Mac Mini Setup (Remote)", price: "5000", priceCurrency: "USD", description: "Remote Mac Mini setup with iMessage integration and security hardening." },
      { "@type": "Offer", name: "Mac Mini Setup (In-Person)", price: "6000", priceCurrency: "USD", description: "In-person setup in South Florida with iMessage and on-site experience." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <Hero />

      {/* Built for */}
      <section className="border-b border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">Built for</p>
          </FadeIn>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Founders & CEOs", desc: "Drowning in email, calendar chaos, need leverage" },
              { title: "Exec teams", desc: "CFO, Head of Sales, EA — each gets their own agent" },
              { title: "Agencies & studios", desc: "Client workflows, reporting, project management" },
              { title: "Field services", desc: "Job updates, subcontractor comms, permit tracking" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.04 * i}>
                <div className="rounded-xl border border-onyx/10 bg-white px-4 py-4">
                  <p className="text-sm font-medium text-onyx">{item.title}</p>
                  <p className="mt-1 text-xs text-onyx/60">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Always on */}
      <section>
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">Always on, always working</p>
          </FadeIn>
          <FadeIn delay={0.04}>
            <p className="mt-3 max-w-3xl text-sm text-onyx/70">
              Unlike ChatGPT or Claude Desktop, your OpenClaw agent runs 24/7 on dedicated infrastructure.
              It wakes up every 30 minutes, checks your email, calendar, and connected tools — and takes action without you asking.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Every 30 min", desc: "Scans your inbox, flags urgent emails, drafts replies for your review" },
              { label: "9:00 AM daily", desc: "Sends you a briefing: today's meetings, attendee backgrounds, prep notes" },
              { label: "On demand", desc: "\"I'm running 10 min late\" → bot emails your next meeting and reschedules" },
              { label: "Ongoing", desc: "Monitors Slack channels, summarizes threads, surfaces what matters" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={0.04 * i}>
                <div className="rounded-xl border border-onyx/10 bg-white p-4">
                  <p className="text-sm font-semibold text-onyx">{item.label}</p>
                  <p className="mt-2 text-xs leading-5 text-onyx/65">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xs text-onyx/50">
              You talk to your bot through Telegram (or Slack, WhatsApp, Discord) — just like texting an assistant. No technical knowledge required.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What's an Executive Agent */}
      <section className="border-y border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">What&apos;s an &quot;Executive Agent&quot;?</p>
          </FadeIn>
          <FadeIn delay={0.04}>
            <p className="mt-3 text-sm leading-7 text-onyx/75">
              1 Executive Agent = 1 OpenClaw instance configured for one primary identity (CEO inbox/calendar, CFO inbox,
              Head of Sales, shared EA inbox). This keeps pricing fair and security boundaries clean.
              Most 4–50 employee teams deploy <strong className="text-onyx">2–6 agents</strong>: a CEO bot managing email and calendar,
              a Sales bot handling CRM and outreach, a Finance bot tracking invoices — all coordinating through shared context.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-onyx text-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">How it works</p>
          </FadeIn>
          <div className="mt-8 space-y-6">
            {[
              { n: "1", title: "Kickoff call", desc: "We discuss your goals, map your integrations (email, calendar, CRM, messaging), and plan your agent's workflows. You tell us what to automate — we handle the rest." },
              { n: "2", title: "Deploy & harden", desc: "We set up your VPS or Mac Mini, install OpenClaw, configure secure OAuth, connect your tools, set up Docker sandboxing, firewall rules, and cron jobs. You go live same day." },
              { n: "3", title: "14-day hypercare", desc: "We tune workflows, expand permissions as you build trust, fix edge cases, and make sure everything runs smoothly. Dedicated Slack channel for direct support." },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={0.06 * i}>
                <div className="flex gap-5">
                  <p className="text-xs font-medium text-white/40 pt-0.5">{step.n}</p>
                  <div>
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-7 text-white/70">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">What people are saying</p>
          </FadeIn>
          <div className="mt-6 space-y-3">
            {[
              "It feels like hiring an employee rather than opening another chat window.",
              "Setup was fast, but the real value is the monthly optimization. We got hours back every week.",
              "I could have set it up myself, but every self-install I've seen has security gaps. The hardening alone was worth it.",
              "Most providers talked features. Versatly focused on workflow outcomes. That difference made adoption easy.",
            ].map((quote, i) => (
              <FadeIn key={i} delay={0.04 * i}>
                <blockquote className="rounded-xl border border-onyx/10 px-5 py-4">
                  <p className="text-sm text-onyx/75">&ldquo;{quote}&rdquo;</p>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why teams hire us */}
      <section className="border-y border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">Why teams hire us</p>
          </FadeIn>
          <FadeIn delay={0.04}>
            <p className="mt-3 text-sm leading-7 text-onyx/75">
              OpenClaw is open-source — you could set it up yourself. But most teams need custom integrations
              beyond the defaults, and even experienced engineers spend hours getting everything wired up.
              Then there&apos;s the ongoing maintenance: updates, drift, broken workflows, security patches.
              We handle all of it — deployed securely from day one so your team gets leverage instead of another project to maintain.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Security */}
      <section>
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">Security-first by design</p>
          </FadeIn>
          <FadeIn delay={0.04}>
            <p className="mt-3 text-sm leading-7 text-onyx/75">
              Your bot never sees raw credentials. All OAuth tokens are managed through a security middleware layer
              with a full audit trail and instant revoke capability. Docker sandboxing, firewall hardening,
              exec allowlists, and read-only permissions by default. We start minimal and expand access gradually
              as you build trust with your agent.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-6 rounded-xl border border-onyx/10 bg-slate-50 px-5 py-4">
              <p className="text-sm font-medium text-onyx">Already running OpenClaw?</p>
              <p className="mt-1 text-xs text-onyx/60">
                Many customers come to us with a working install that has security gaps. We&apos;ll audit your setup,
                harden your config, and migrate you to managed care. Same pricing —{" "}
                <CalButton className="text-tiger hover:underline inline">book a call</CalButton> and we&apos;ll assess what needs fixing.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-y border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <CalButton className="text-sm text-tiger hover:underline">Book a free consultation →</CalButton>
          </FadeIn>
          <div className="mt-8 space-y-3">
            {[
              { label: "Hosted Setup", badge: "Recommended", desc: "Managed service — we host, harden + 14-day hypercare", price: "$3,000", sub: null },
              { label: "Mac Mini Setup", badge: null, desc: "Remote — iMessage integration + local hardware", price: "$5,000", sub: null },
              { label: "Mac Mini In-Person", badge: null, desc: "South Florida — on-site setup + iMessage", price: "$6,000", sub: null },
              { label: "Add Another Agent", badge: null, desc: "CEO, EA, Sales, Finance — deploy your exec team", price: "+$1,500", sub: "each" },
            ].map((tier, i) => (
              <FadeIn key={tier.label} delay={0.04 * i}>
                <div className={`flex items-center justify-between rounded-xl border px-5 py-4 transition hover:shadow-md ${
                  tier.badge ? "border-tiger/30 bg-white ring-1 ring-tiger/15" : "border-onyx/10 bg-white"
                }`}>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-onyx">{tier.label}</p>
                        {tier.badge && (
                          <span className="rounded-full bg-tiger px-2 py-0.5 text-[10px] font-semibold text-white">{tier.badge}</span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-onyx/55">{tier.desc}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <p className="text-lg font-semibold text-onyx">{tier.price}</p>
                    {tier.sub && <p className="text-xs text-onyx/50">{tier.sub}</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CalButton className="btn-primary text-sm">Book a free call →</CalButton>
            </div>
          </FadeIn>
          <FadeIn delay={0.24}>
            <p className="mt-6 text-xs text-onyx/50">
              One-time setup fee. Most customers deploy on a cloud VPS ($5–10/mo) — we handle setup remotely.
              Mac Mini available for teams that need iMessage or prefer local hardware (~$600 at cost).
            </p>
            <p className="mt-2 text-xs text-onyx/50">
              Implementation includes 14-day hypercare. Ongoing support requires Managed Care.
            </p>
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
              <p className="text-xs font-medium text-green-800">
                100% satisfaction guarantee — if you&apos;re not happy with the setup, we&apos;ll refund you. No questions asked.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* After you purchase */}
      <section>
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">After you purchase</p>
          </FadeIn>
          <div className="mt-6 space-y-4">
            {[
              { label: "Within 48 hrs", desc: "We reach out to schedule your kickoff call and create a dedicated Slack channel" },
              { label: "Kickoff call", desc: "20–45 min requirements session: your integrations, workflows, and preferences" },
              { label: "Setup session", desc: "1–3 hr live build: you go live same day with a working bot on Telegram" },
            ].map((step, i) => (
              <FadeIn key={step.label} delay={0.04 * i}>
                <div className="flex gap-4">
                  <p className="text-xs font-semibold text-onyx/40 pt-0.5 w-24 shrink-0">{step.label}</p>
                  <p className="text-sm text-onyx/70">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={homepageFaqs} />

      {/* Industries */}
      <section className="border-t border-onyx/10">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">OpenClaw for your team</p>
          </FadeIn>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Restaurants", desc: "Reservations, reviews, delivery issues", href: "/industries/restaurants" },
              { title: "Construction", desc: "Job updates, subcontractor comms, permits", href: "/industries/construction" },
              { title: "Real Estate", desc: "Lead intake, showings, CRM hygiene", href: "/industries/real-estate" },
              { title: "Agencies", desc: "Client comms, reporting, project coordination", href: "/industries/agencies" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.04 * i}>
                <Link href={item.href} className="block rounded-xl border border-onyx/10 bg-white px-4 py-4 transition hover:border-tiger/30 hover:shadow-sm">
                  <p className="text-sm font-medium text-onyx">{item.title}</p>
                  <p className="mt-1 text-xs text-onyx/55">{item.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">Available nationwide</p>
          </FadeIn>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { city: "Miami", note: "HQ" },
              { city: "Fort Lauderdale", note: "Local" },
              { city: "Tampa", note: "Remote" },
              { city: "New York", note: "Remote" },
              { city: "Los Angeles", note: "Remote" },
              { city: "Chicago", note: "Remote" },
              { city: "Atlanta", note: "Remote" },
              { city: "Austin", note: "Remote" },
              { city: "Denver", note: "Remote" },
              { city: "Seattle", note: "Remote" },
            ].map((loc, i) => (
              <FadeIn key={loc.city} delay={0.03 * i}>
                <div className="rounded-lg border border-onyx/10 bg-white px-3 py-2.5 text-center">
                  <p className="text-sm font-medium text-onyx">{loc.city}</p>
                  <p className="text-[10px] text-onyx/45">{loc.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-xs text-onyx/50">
              We deploy remotely worldwide. Don&apos;t see your city?{" "}
              <CalButton className="text-tiger hover:underline inline">Book a call</CalButton> — happy to help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Learn more */}
      <section className="border-t border-onyx/10">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/50">Learn more</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/services" className="text-onyx/70 hover:text-tiger">Services →</Link>
            <Link href="/open-source" className="text-onyx/70 hover:text-tiger">Our open source work →</Link>
            <Link href="/locations" className="text-onyx/70 hover:text-tiger">All locations →</Link>
            <Link href="/blog" className="text-onyx/70 hover:text-tiger">Blog →</Link>
          </div>
        </div>
      </section>

      <CTA
        title="Questions?"
        description="Book a call or reach out at hello@versatly.com — we're happy to walk through your setup."
      />
    </>
  );
}
