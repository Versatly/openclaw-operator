"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CalButton from "@/components/CalButton";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-onyx/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2" aria-label="Go to homepage">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-tiger to-orange-500 text-sm font-bold text-white shadow-sm">
            O
          </span>
          <div>
            <p className="font-heading text-sm font-semibold text-onyx sm:text-base">
              {siteConfig.brand}
            </p>
            <p className="text-xs text-onyx/70">{siteConfig.serviceName}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                pathname === item.href
                  ? "bg-onyx/5 text-onyx"
                  : "text-onyx/75 hover:bg-onyx/5 hover:text-onyx"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CalButton className="btn-primary text-sm">
            {siteConfig.ctaLabel}
          </CalButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-onyx/15 md:hidden"
          onClick={() => setIsOpen((previousState) => !previousState)}
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-onyx transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-onyx transition ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-onyx transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-onyx/10 bg-white/95 backdrop-blur md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href ? "bg-onyx/5 text-onyx" : "text-onyx hover:bg-onyx/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <CalButton
              className="mt-2 rounded-md bg-tiger px-3 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              {siteConfig.ctaLabel}
            </CalButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
