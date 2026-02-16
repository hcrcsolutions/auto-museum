import Link from "next/link";
import { portalNav } from "@/lib/site-config";
import MobileNav from "./MobileNav";
import SteeringWheel from "@/components/SteeringWheel";

export default function PortalHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-foreground/5 bg-charcoal-dark/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <SteeringWheel className="h-9 w-9 text-gold" />
          <span className="font-serif text-lg font-bold tracking-wide text-foreground">
            Motor Legacy <span className="text-gold">Center</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {portalNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/60 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-full border border-gold/30 px-5 py-2 text-sm text-gold transition-colors hover:bg-gold/10"
          >
            Member Login
          </Link>
        </nav>

        <MobileNav
          items={[...portalNav, { label: "Member Login", href: "/login" }]}
        />
      </div>
    </header>
  );
}
