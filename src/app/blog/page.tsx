import Link from "next/link";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { blogPosts } from "@/lib/data";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "OpenClaw Blog | AI Automation Insights for South Florida",
  description:
    "Read practical guides on OpenClaw setup Miami, AI assistant deployment, and automation strategy for South Florida business operators.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="border-b border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-onyx sm:text-5xl">
            AI automation insights for Miami and South Florida businesses
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-onyx/80">
            Our blog is built to answer practical deployment questions: how to set up OpenClaw for
            local operations, how to compare AI workflows with traditional staffing, and how to
            scale automation safely in real businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="reveal rounded-2xl border border-onyx/10 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-onyx/60">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-onyx">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-onyx/80">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center text-sm font-semibold text-tiger hover:text-onyx"
              >
                Read article <span className="ml-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTA
        title="Need implementation help, not just theory?"
        description="Book a call and we’ll map the right OpenClaw deployment strategy for your Miami or South Florida company."
      />
    </>
  );
}
