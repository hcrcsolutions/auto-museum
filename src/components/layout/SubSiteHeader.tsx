import Link from "next/link";
import type { SiteConfig } from "@/lib/types";
import MobileNav from "./MobileNav";
import SteeringWheel from "@/components/SteeringWheel";

interface SubSiteHeaderProps {
  config: SiteConfig;
}

export default function SubSiteHeader({ config }: SubSiteHeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-foreground/5 bg-charcoal-dark/90 backdrop-blur-md">
      {/* Top bar: back to portal */}
      <div className="border-b border-foreground/5 bg-charcoal-dark">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-1.5">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-foreground/40 transition-colors hover:text-gold"
          >
            <SteeringWheel className="h-4 w-4 text-gold/60" />
            <span className="font-serif text-xs font-bold tracking-wide text-foreground/60">
              Motor Legacy <span className="text-gold/60">Center</span>
            </span>
          </Link>
          <span className="text-foreground/20">/</span>
          <span className="text-xs font-medium text-gold">
            {config.shortName}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={config.basePath}
          className="font-serif text-lg font-bold tracking-tight"
        >
          {config.name.replace("Motor Legacy ", "")}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {config.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/60 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileNav items={config.nav} />
      </div>
    </header>
  );
}
