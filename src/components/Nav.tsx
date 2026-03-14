"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-onyx/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2" aria-label="Go to homepage">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-tiger text-sm font-bold text-white">
            O
          </span>
          <div>
            <p className="font-heading text-sm font-semibold text-onyx sm:text-base">{siteConfig.brand}</p>
            <p className="text-xs text-onyx/70">{siteConfig.serviceName}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-onyx/80 transition hover:text-onyx"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={siteConfig.ctaHref} className="btn-primary text-sm" target="_blank" rel="noreferrer">
            {siteConfig.ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-onyx/15 p-2 md:hidden"
          onClick={() => setIsOpen((previousState) => !previousState)}
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
        >
          <span className="sr-only">Open navigation</span>
          <span className="block h-0.5 w-5 bg-onyx" />
          <span className="mx-0.5 my-1 block h-0.5 w-5 bg-onyx" />
          <span className="block h-0.5 w-5 bg-onyx" />
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-onyx/10 bg-white md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-onyx hover:bg-onyx/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-md bg-tiger px-3 py-2 text-center text-sm font-semibold text-white"
            >
              {siteConfig.ctaLabel}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
