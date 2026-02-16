import type { PricingTier } from "@/lib/types";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

interface PricingTableProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  tiers: PricingTier[];
  dark?: boolean;
}

export default function PricingTable({
  eyebrow,
  heading,
  headingAccent,
  tiers,
  dark = false,
}: PricingTableProps) {
  return (
    <section
      className={`border-t border-foreground/5 px-6 py-24 sm:py-32 ${
        dark ? "bg-charcoal-dark" : ""
      }`}
    >
      <Container wide>
        <div className="mb-16">
          <SectionHeading
            eyebrow={eyebrow}
            heading={heading}
            headingAccent={headingAccent}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-lg border p-8 ${
                tier.highlighted
                  ? "border-gold/40 bg-gold/5"
                  : "border-foreground/5 bg-charcoal-dark/30"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal-dark">
                  Most Popular
                </span>
              )}

              <h3 className="font-serif text-xl font-semibold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold text-gold">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm text-foreground/40">
                    /{tier.period}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-foreground/50">
                {tier.description}
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground/60"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="#"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
