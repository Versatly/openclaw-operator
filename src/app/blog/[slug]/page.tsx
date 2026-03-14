import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { blogPosts, siteConfig } from "@/lib/data";
import { absoluteUrl, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "The requested article could not be found.",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brand,
      url: siteConfig.domain,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <section className="border-b border-onyx/10 bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm text-onyx/65">
            Published{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-onyx sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-onyx/80">{post.description}</p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {post.sections.map((section) => (
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
        <h2 className="font-heading text-2xl font-semibold text-onyx">Keep exploring</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/services" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            View services
          </Link>
          <Link href="/industries" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Industry pages
          </Link>
          <Link href="/contact" className="rounded-full border border-onyx/15 px-4 py-2 hover:border-tiger hover:text-tiger">
            Book consultation
          </Link>
        </div>
      </section>

      <CTA
        title="Ready to put these AI automation ideas into production?"
        description="Versatly helps Miami and South Florida businesses deploy OpenClaw agents with clear guardrails and measurable outcomes."
      />
    </>
  );
}
