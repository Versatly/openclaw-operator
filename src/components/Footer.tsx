import Link from "next/link";
import CalButton from "@/components/CalButton";
import { siteConfig } from "@/lib/data";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "OpenClaw Setup & Deployment" },
  { href: "/services", label: "Security Hardening" },
  { href: "/services", label: "Integration Configuration" },
  { href: "/services", label: "Managed Optimization" },
];

const industryLinks = [
  { href: "/industries/restaurants", label: "Hospitality & Restaurants" },
  { href: "/industries/construction", label: "Construction & Field Services" },
  { href: "/industries/real-estate", label: "Real Estate Teams" },
  { href: "/industries/agencies", label: "Agencies" },
];

const locationLinks = [
  { href: "/locations#miami", label: "Miami" },
  { href: "/locations#fort-lauderdale", label: "Fort Lauderdale" },
  { href: "/locations#west-palm-beach", label: "West Palm Beach" },
  { href: "/locations#new-york", label: "New York" },
  { href: "/locations#los-angeles", label: "Los Angeles" },
  { href: "/locations", label: "All locations" },
];

export default function Footer() {
  return (
    <footer className="border-t border-onyx/10 bg-onyx text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_repeat(4,minmax(0,1fr))] lg:px-8">
        <div>
          <p className="font-heading text-xl font-semibold">{siteConfig.siteName}</p>
          <p className="mt-3 max-w-md text-sm text-white/80">
            We deploy and manage OpenClaw AI agents for operators nationwide with a remote-first
            model designed for reliable 24/7 execution.
          </p>
          <p className="mt-4 text-sm text-white/75">
            Headquarters: Brickell, Miami, FL. Most customer engagements are delivered remotely.
          </p>
          <CalButton className="mt-5 rounded-lg bg-tiger px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500">
            Book a quick chat
          </CalButton>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {serviceLinks.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
            Industries
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {industryLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
            Locations
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {locationLinks.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
          <p>OpenClaw deployment partner for remote and nationwide teams.</p>
        </div>
      </div>
    </footer>
  );
}
