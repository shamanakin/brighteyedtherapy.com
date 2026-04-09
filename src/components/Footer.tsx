import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-footer-bg py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main grid */}
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {/* Left: info */}
          <div className="space-y-4">
            <p className="font-serif text-h3 text-bg">{siteConfig.name}</p>
            <p className="text-small text-text-tertiary leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="space-y-1 text-small text-text-tertiary">
              <p>{siteConfig.address.full}</p>
              <a
                href={siteConfig.phoneHref}
                className="block hover:text-bg"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block hover:text-bg"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Right: links */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-small text-text-tertiary hover:text-bg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/online-therapy-california"
              className="text-small text-text-tertiary hover:text-bg transition-colors"
            >
              Online Therapy
            </Link>
            <Link
              href="/resources"
              className="text-small text-text-tertiary hover:text-bg transition-colors"
            >
              Resources
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 space-y-1">
          <p className="text-caption text-text-tertiary">
            {siteConfig.credentials.name}, {siteConfig.credentials.license} | Supervised by{" "}
            {siteConfig.credentials.supervisor}
          </p>
          <p className="text-caption text-text-tertiary">
            Registered Associate Marriage and Family Therapist in Roseville, CA
          </p>
          <Link
            href="/privacy"
            className="inline-block text-caption text-text-tertiary hover:text-bg transition-colors mt-2"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
