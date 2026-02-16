import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import SteeringWheel from "@/components/SteeringWheel";

interface CTASectionProps {
  heading: string;
  headingAccent?: string;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  children?: ReactNode;
}

export default function CTASection({
  heading,
  headingAccent,
  description,
  primaryCTA,
  secondaryCTA,
  children,
}: CTASectionProps) {
  return (
    <section className="relative border-t border-foreground/5 bg-charcoal-dark px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark via-charcoal-dark to-background" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <SteeringWheel className="h-12 w-12 text-gold/40" />
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">
          {heading}
          {headingAccent && <span className="text-gold"> {headingAccent}</span>}
        </h2>
        <p className="text-foreground/60">{description}</p>

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-wrap items-center justify-center gap-4">
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
