import type { FaqItem } from "@/lib/data";

type FAQProps = {
  items: FaqItem[];
};

export default function FAQ({ items }: FAQProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
          Frequently asked questions about OpenClaw setup in Miami
        </h2>
        <p className="mt-4 text-onyx/80">
          Straight answers about AI agent deployment, security, timelines, and managed support for
          South Florida businesses.
        </p>
      </div>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <details key={item.question} className="reveal rounded-xl border border-onyx/10 bg-white p-5">
            <summary className="cursor-pointer list-none font-heading text-lg font-semibold text-onyx">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-onyx/80">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
