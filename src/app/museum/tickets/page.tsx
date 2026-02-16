import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import PricingTable from "@/components/sections/PricingTable";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Tickets & Admission",
  description:
    "Purchase tickets for the Motor Legacy Museum. Individual, family, and group pricing with member discounts.",
};

const tiers = [
  {
    name: "Adult",
    price: "$24",
    description: "General admission for ages 18–64.",
    features: [
      "Full museum access",
      "Restoration workshop viewing",
      "Audio guide included",
      "Museum store discount (10%)",
    ],
    cta: "Buy Tickets",
  },
  {
    name: "Family Pack",
    price: "$65",
    description: "2 adults + up to 3 children (ages 6–17).",
    features: [
      "Full museum access for the family",
      "Restoration workshop viewing",
      "Audio guides for all",
      "Free parking validation",
      "Museum store discount (15%)",
    ],
    highlighted: true,
    cta: "Buy Family Pack",
  },
  {
    name: "Senior / Student",
    price: "$18",
    description: "Ages 65+ or with valid student ID.",
    features: [
      "Full museum access",
      "Restoration workshop viewing",
      "Audio guide included",
    ],
    cta: "Buy Tickets",
  },
];

export default function TicketsPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Admission"
        title="Tickets &"
        titleAccent="Pricing"
        subtitle="Purchase tickets online for the best rates and skip-the-line access. Members always enjoy free admission."
      />

      <PricingTable
        eyebrow="General Admission"
        heading="Choose Your"
        headingAccent="Experience"
        tiers={tiers}
      />

      <ContentSection
        eyebrow="Good to Know"
        heading="Admission"
        headingAccent="Details"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">Children under 6:</strong>{" "}
            Free admission with a ticketed adult.
          </p>
          <p>
            <strong className="text-foreground/80">Military & Veterans:</strong>{" "}
            $5 off general admission with valid ID. Free admission on Veterans
            Day and Memorial Day.
          </p>
          <p>
            <strong className="text-foreground/80">Members:</strong>{" "}
            Free unlimited admission plus guest passes, exhibit previews, and
            exclusive events. Visit our membership page to learn more.
          </p>
          <p>
            <strong className="text-foreground/80">Group Rates:</strong>{" "}
            Groups of 10+ receive 20% off general admission. School groups
            and Title I schools may qualify for free admission. Contact us for
            details.
          </p>
          <p>
            <strong className="text-foreground/80">Special Exhibits:</strong>{" "}
            Some touring exhibitions may require an additional ticket or
            timed-entry reservation. Check individual exhibit pages for
            details.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Become a"
        headingAccent="Member"
        description="Enjoy unlimited free admission, exclusive previews, guest passes, and more. Memberships start at $75/year."
        primaryCTA={{ label: "Join Today", href: "/museum/support" }}
        secondaryCTA={{ label: "Learn More", href: "/museum/support" }}
      />
    </>
  );
}
