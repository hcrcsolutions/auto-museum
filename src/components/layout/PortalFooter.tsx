import Link from "next/link";
import { allSites, portalFooterNav, TAGLINE } from "@/lib/site-config";
import SteeringWheel from "@/components/SteeringWheel";

export default function PortalFooter() {
  return (
    <footer className="border-t border-foreground/5 bg-charcoal-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <SteeringWheel className="h-9 w-9 text-gold" />
              <span className="font-serif text-lg font-bold tracking-wide text-foreground">
                Motor Legacy <span className="text-gold">Center</span>
              </span>
            </Link>
            <p className="font-serif text-sm italic text-gold/70">
              {TAGLINE}
            </p>
            <p className="text-sm leading-relaxed text-foreground/50">
              An extraordinary destination celebrating automotive history,
              innovation, and the enduring passion for the machines that moved
              the world.
            </p>
          </div>

          {/* Sub-sites */}
          {allSites.map((site) => (
            <div key={site.basePath}>
              <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-gold">
                {site.shortName}
              </h3>
              <ul className="flex flex-col gap-2">
                {site.nav.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/40 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-foreground/5 pt-8 sm:flex-row sm:justify-between">
          <div className="flex gap-6">
            {portalFooterNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-foreground/30 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-foreground/20">
            &copy; 2026 Motor Legacy Center &mdash; All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
