import Link from "next/link";
import { siteConfig } from "@/lib/data";

type CTAProps = {
  title: string;
  description: string;
};

export default function CTA({ title, description }: CTAProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-onyx px-6 py-10 text-white sm:px-10">
        <h2 className="max-w-3xl font-heading text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-white/85">{description}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a className="btn-primary text-center" href={siteConfig.ctaHref} target="_blank" rel="noreferrer">
            {siteConfig.ctaLabel}
          </a>
          <Link href="/contact" className="btn-secondary text-center">
            Contact Versatly
          </Link>
        </div>
      </div>
    </section>
  );
}
