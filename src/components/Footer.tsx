import Link from "next/link";
import { siteConfig } from "@/lib/data";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ecosystemLinks = [
  { href: "https://versatly.com", label: "Versatly", external: true },
  { href: "https://clawvault.dev", label: "ClawVault", external: true },
  { href: "https://docs.clawvault.dev", label: "ClawVault Docs", external: true },
  { href: "https://clawhub.com", label: "ClawHub Skills", external: true },
  { href: "https://github.com/psobral/clawvault", label: "GitHub", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-onyx/10 bg-onyx text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-heading text-xl font-semibold">{siteConfig.siteName}</p>
          <p className="mt-3 max-w-md text-sm text-white/80">
            We deploy and manage OpenClaw AI agents for Miami and South Florida businesses
            that need dependable automation for daily operations.
          </p>
          <p className="mt-4 text-sm text-white/75">
            Service area: Miami, Miami-Dade, Fort Lauderdale, Broward, West Palm Beach, and
            greater South Florida.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
            Site Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {footerLinks.map((link) => (
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
            Ecosystem
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {ecosystemLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-white" href={link.href} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/90">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a className="hover:text-white" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>Brickell, Miami, FL</li>
            <li>
              <a className="text-tiger hover:text-white" href={siteConfig.ctaHref} rel="noreferrer" target="_blank">
                Book a call
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
          <p>Miami OpenClaw setup and managed AI agent deployment by <a href="https://versatly.com" target="_blank" rel="noreferrer" className="hover:text-white">Versatly</a>.</p>
        </div>
      </div>
    </footer>
  );
}
