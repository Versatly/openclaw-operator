import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { industries } from "@/lib/data";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return buildMetadata({
      title: "Industry page not found",
      description: "The requested industry page could not be found.",
      path: "/industries",
    });
  }

  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.shortTitle, path: `/industries/${industry.slug}` },
  ]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: industry.metaTitle,
    description: industry.metaDescription,
    url: absoluteUrl(`/industries/${industry.slug}`),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <section className="border-b border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-onyx sm:text-5xl">{industry.h1}</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-onyx/80">
            {industry.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {industry.sections.map((section) => (
            <section key={section.heading} className="reveal">
              <h2 className="font-heading text-3xl font-semibold text-onyx">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-onyx/85">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <section className="mx-auto w-full max-w-4xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-onyx">
          Deployment standards for long-term results in Miami and South Florida
        </h2>
        <div className="mt-5 space-y-5 text-base leading-8 text-onyx/85">
          <p>
            Across every industry we serve, the same pattern appears: teams get the best AI outcomes
            when deployment is treated like operational infrastructure, not a one-time software
            installation. That means clear ownership, role-based controls, documented escalation
            paths, and measurable service-level goals. Without those standards, even strong AI tools
            can create inconsistent execution in daily business environments.
          </p>
          <p>
            Our Miami and South Florida implementations are designed around this reality. We start
            with focused scope, validate quality under real workload conditions, and then expand
            responsibly. This staged model protects service quality while helping your team build
            confidence in automation. It also prevents the common trap of over-automating too early
            and spending months cleaning up process drift.
          </p>
          <p>
            If your leadership team wants sustainable ROI, governance and optimization must continue
            after launch. We review output quality, workflow adherence, and performance trends each
            month so improvements compound over time. That ongoing discipline is what turns OpenClaw
            from an experiment into a dependable operating layer for organizations across Miami-Dade
            and the broader South Florida market.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 pb-6 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-onyx">Related resources</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/services" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            OpenClaw services
          </Link>
          <Link href="/blog" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            South Florida AI blog
          </Link>
          <Link href="/contact" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Talk with Versatly
          </Link>
        </div>
      </section>

      <CTA
        title={`Need ${industry.shortTitle.toLowerCase()} AI automation in South Florida?`}
        description="Book a call and we’ll build a deployment plan that fits your team’s real workflows, compliance needs, and growth targets."
      />
    </>
  );
}
