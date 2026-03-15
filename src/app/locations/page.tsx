import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { cityLocations } from "@/lib/locations";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "OpenClaw Deployment Locations | Remote and Worldwide Setup",
  description:
    "Versatly deploys OpenClaw remotely for teams worldwide, with strong support across major U.S. metros and headquarters in South Florida.",
  path: "/locations",
});

export default function LocationsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="relative overflow-hidden border-b border-onyx/10 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(242,100,48,0.18),transparent_45%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="inline-flex rounded-full border border-tiger/30 bg-tiger/10 px-4 py-1.5 text-sm font-medium text-onyx">
              Remote deployment coverage
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold text-onyx sm:text-5xl">
              We deploy remotely, worldwide
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-base leading-8 text-onyx/80">
              Most OpenClaw Operator customers are remote. We support teams across major U.S. metros
              and global operations from our South Florida headquarters.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
              Major metros we serve
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cityLocations.map((metro, index) => (
              <FadeIn key={metro.slug} delay={0.04 * index}>
                <Link
                  id={metro.slug}
                  href={`/locations/${metro.slug}`}
                  className="block rounded-2xl border border-onyx/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-tiger/30 hover:shadow-lg"
                >
                  <h3 className="font-heading text-2xl font-semibold text-onyx">{metro.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-onyx/80">{metro.summary}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-tiger">
                    View {metro.name} page
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl border border-onyx/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
              Remote-first by design
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-onyx/80">
              Our implementation model is built for remote delivery: structured discovery, secure
              integration handoff, guided launch, and monthly optimization. Whether your team is in
              Florida, New York, or a distributed global environment, we deploy with the same
              production standards.
            </p>
          </div>
        </FadeIn>
      </section>

      <CTA
        title="Need OpenClaw deployment in your city?"
        description="Book a quick chat and we will map the right setup approach for your team, whether local or fully remote."
      />
    </>
  );
}
