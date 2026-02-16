import Link from "next/link";
import type { SiteConfig } from "@/lib/types";
import { TAGLINE } from "@/lib/site-config";
import SteeringWheel from "@/components/SteeringWheel";

interface SubSiteFooterProps {
  config: SiteConfig;
}

export default function SubSiteFooter({ config }: SubSiteFooterProps) {
  return (
    <footer className="border-t border-foreground/5 bg-charcoal-dark">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-serif text-lg text-foreground/40">
            {config.name}
          </p>

          <nav className="flex flex-wrap justify-center gap-6">
            {config.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/30 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="h-px w-full max-w-xs bg-foreground/5" />

          <div className="flex flex-wrap justify-center gap-6">
            {config.footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-foreground/30 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link href="/" className="flex items-center gap-2 opacity-50 transition-opacity hover:opacity-80">
              <SteeringWheel className="h-7 w-7 text-gold" />
              <span className="font-serif text-base font-bold tracking-wide text-foreground">
                Motor Legacy <span className="text-gold">Center</span>
              </span>
            </Link>
            <p className="font-serif text-xs italic text-gold/40">
              {TAGLINE}
            </p>
            <span className="text-xs text-foreground/20">
              &copy; 2026 All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
