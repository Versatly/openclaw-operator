"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { FaqItem } from "@/lib/data";

type FAQProps = {
  items: FaqItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold text-onyx sm:text-4xl">
          Frequently asked questions about OpenClaw deployment
        </h2>
        <p className="mt-4 text-onyx/80">
          Straight answers on remote setup, timelines, security, and managed support for teams
          across the U.S.
        </p>
      </div>
      <div className="mt-8 divide-y divide-onyx/10 overflow-hidden rounded-2xl border border-onyx/10 bg-white">
        {items.map((item, index) => (
          <article key={item.question} className="px-5 py-3 sm:px-6">
            <button
              type="button"
              onClick={() => setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index))}
              className="flex w-full items-center justify-between gap-4 py-2 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="font-heading text-xl font-semibold text-onyx">{item.question}</span>
              <span
                className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-onyx/15 text-sm text-onyx transition ${
                  openIndex === index ? "bg-onyx text-white" : "bg-white"
                }`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index ? (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-2 pt-1 text-sm leading-7 text-onyx/80">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        ))}
      </div>
    </section>
  );
}
