import Link from "next/link";
import type { IndustryPage } from "@/lib/data";

type IndustryCardProps = {
  industry: IndustryPage;
};

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <article className="reveal group rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-tiger/40 hover:shadow-lg">
      <div className="h-1 w-14 rounded-full bg-gradient-to-r from-tiger/80 to-orange-400 transition group-hover:w-20" />
      <h3 className="mt-4 font-heading text-xl font-semibold text-onyx">{industry.h1}</h3>
      <p className="mt-3 text-sm leading-7 text-onyx/80">{industry.metaDescription}</p>
      <Link
        href={`/industries/${industry.slug}`}
        className="mt-5 inline-flex items-center text-sm font-semibold text-tiger hover:text-onyx"
      >
        View {industry.shortTitle} page <span aria-hidden="true" className="ml-1">→</span>
      </Link>
    </article>
  );
}
