import type { ReactNode } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  badge?: string;
  badgePulse?: boolean;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  children?: ReactNode;
  compact?: boolean;
}

export default function HeroSection({
  badge,
  badgePulse,
  title,
  titleAccent,
  subtitle,
  primaryCTA,
  secondaryCTA,
  children,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex flex-col items-center justify-center overflow-hidden px-6 ${
        compact ? "min-h-[60vh] py-32" : "min-h-screen py-24"
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-dark" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute h-[400px] w-[400px] rounded-full bg-gold/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 text-center">
        {badge && <Badge pulse={badgePulse}>{badge}</Badge>}

        <h1
          className={`font-serif font-bold leading-tight tracking-tight ${
            compact ? "text-4xl sm:text-5xl lg:text-6xl" : "text-5xl sm:text-6xl lg:text-7xl"
          }`}
        >
          {title}
          {titleAccent && (
            <span className="block bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              {titleAccent}
            </span>
          )}
        </h1>

        {/* Decorative gold glow line (matches branding) */}
        <div className="relative h-px w-32 sm:w-48">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute -inset-y-1 inset-x-4 bg-gradient-to-r from-transparent via-gold/40 to-transparent blur-sm" />
        </div>

        {subtitle && (
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            {subtitle}
          </p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {primaryCTA && (
              <Button href={primaryCTA.href}>{primaryCTA.label}</Button>
            )}
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary">
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
