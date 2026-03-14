import CTA from "@/components/CTA";
import IndustryCard from "@/components/IndustryCard";
import JsonLd from "@/components/JsonLd";
import { industries } from "@/lib/data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries We Serve | OpenClaw AI Deployment in South Florida",
  description:
    "Industry-specific OpenClaw setup and AI automation services for Miami and South Florida restaurants, construction firms, real estate teams, agencies, and law firms.",
  path: "/industries",
});

export default function IndustriesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="border-b border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-onyx sm:text-5xl">
            Industry-specific OpenClaw deployment pages
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-onyx/80">
            We build dedicated AI agent setups for Miami and South Florida industries with tailored
            workflows, security controls, and integration plans. Explore your sector below to see
            practical use cases and deployment details.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>

      <CTA
        title="Not sure which OpenClaw use case fits your business?"
        description="Book a strategy call and we’ll map the right AI automation roadmap for your team in Miami, Miami-Dade, or anywhere in South Florida."
      />
    </>
  );
}
