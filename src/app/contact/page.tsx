import Link from "next/link";
import CalButton from "@/components/CalButton";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Versatly | OpenClaw Consultant Miami",
  description:
    "Contact Versatly for OpenClaw setup in Miami and South Florida. Book a call for AI agent deployment, integrations, and managed service support.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="border-b border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-onyx sm:text-5xl">
            Contact our Miami OpenClaw deployment team
          </h1>
          <p className="mt-6 text-base leading-8 text-onyx/80">
            If you need an OpenClaw consultant in Miami or South Florida, book a call and we will
            map a practical implementation path for your business. We support organizations across
            Miami-Dade, Broward, and Palm Beach.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-heading text-2xl font-semibold text-onyx">Send us details</h2>
          <p className="mt-3 text-sm leading-7 text-onyx/80">
            Share your current workflow challenges and we will come prepared with recommendations
            for AI agent setup, security hardening, and ongoing managed support.
          </p>
          <form className="mt-6 grid gap-4">
            <label className="text-sm font-medium text-onyx">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="mt-2 w-full rounded-lg border border-onyx/20 px-3 py-2 text-sm focus:border-tiger focus:outline-none focus:ring-2 focus:ring-tiger/20"
                required
              />
            </label>
            <label className="text-sm font-medium text-onyx">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-onyx/20 px-3 py-2 text-sm focus:border-tiger focus:outline-none focus:ring-2 focus:ring-tiger/20"
                required
              />
            </label>
            <label className="text-sm font-medium text-onyx">
              Company
              <input
                type="text"
                name="company"
                autoComplete="organization"
                className="mt-2 w-full rounded-lg border border-onyx/20 px-3 py-2 text-sm focus:border-tiger focus:outline-none focus:ring-2 focus:ring-tiger/20"
              />
            </label>
            <label className="text-sm font-medium text-onyx">
              What do you want to automate?
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-lg border border-onyx/20 px-3 py-2 text-sm focus:border-tiger focus:outline-none focus:ring-2 focus:ring-tiger/20"
                placeholder="Example: email triage, calendar management, Slack monitoring, CRM automation..."
                required
              />
            </label>
            <CalButton className="inline-flex items-center justify-center rounded-lg bg-tiger px-4 py-3 text-sm font-semibold text-white hover:opacity-90">
              Book your call
            </CalButton>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-onyx">Service area</h2>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              Miami, Miami-Dade, Fort Lauderdale, Broward, West Palm Beach, and the broader South
              Florida region.
            </p>
          </div>
          <div className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-onyx">Direct contact</h2>
            <p className="mt-3 text-sm leading-7 text-onyx/80">
              Phone:{" "}
              <a className="text-tiger hover:text-onyx" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
              <br />
              Email:{" "}
              <a className="text-tiger hover:text-onyx" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-onyx">Helpful links</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link href="/services" className="rounded-full border border-onyx/15 px-3 py-1.5 hover:border-tiger hover:text-tiger">
                Services
              </Link>
              <Link href="/industries" className="rounded-full border border-onyx/15 px-3 py-1.5 hover:border-tiger hover:text-tiger">
                Industries
              </Link>
              <Link href="/blog" className="rounded-full border border-onyx/15 px-3 py-1.5 hover:border-tiger hover:text-tiger">
                Blog
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
