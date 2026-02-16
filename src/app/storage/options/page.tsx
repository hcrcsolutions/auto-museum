import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import PricingTable from "@/components/sections/PricingTable";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Storage Options",
  description:
    "Vehicle storage options at the Motor Legacy Storage Facility. General, private, and premium tiers with comparison.",
};

const tiers = [
  {
    name: "General Storage",
    price: "$495",
    period: "month",
    description: "Shared climate-controlled space for everyday collectors.",
    features: [
      "Climate-controlled environment",
      "24/7 security monitoring",
      "Monthly battery tending",
      "Covered and secured",
      "Scheduled access hours",
      "Annual detail included",
    ],
    cta: "Reserve a Bay",
  },
  {
    name: "Private Bay",
    price: "$895",
    period: "month",
    description: "Dedicated private bay for the serious enthusiast.",
    features: [
      "Private enclosed bay",
      "Individual climate zone",
      "24/7 member access",
      "Bi-weekly battery tending",
      "Quarterly detail included",
      "Remote camera access",
      "Concierge vehicle moves",
      "Guest access passes",
    ],
    highlighted: true,
    cta: "Reserve a Bay",
  },
  {
    name: "Premium Collection",
    price: "$1,495",
    period: "month",
    description: "White-glove service for museum-quality collections.",
    features: [
      "Oversized private suite",
      "Precision climate & humidity",
      "Unlimited 24/7 access",
      "Weekly maintenance checks",
      "Monthly detail included",
      "Live camera monitoring",
      "Dedicated concierge",
      "Transport coordination",
      "Insurance consultation",
      "Members lounge access",
    ],
    cta: "Reserve a Suite",
  },
];

export default function OptionsPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Storage Tiers"
        title="Storage"
        titleAccent="Options"
        subtitle="From shared climate-controlled spaces to private suites with white-glove service, choose the level of care your collection deserves."
      />

      <PricingTable
        eyebrow="Compare"
        heading="Choose Your"
        headingAccent="Tier"
        tiers={tiers}
      />

      <ContentSection
        eyebrow="Details"
        heading="What Every Tier"
        headingAccent="Includes"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">Climate Control:</strong>{" "}
            All storage tiers feature temperature control between 60–72°F and
            humidity management between 40–50% RH, protecting paint, leather,
            rubber, and mechanical components year-round.
          </p>
          <p>
            <strong className="text-foreground/80">Security:</strong>{" "}
            Multi-layer security including perimeter fencing, biometric
            building access, individual bay monitoring, 24/7 CCTV, and
            on-site security personnel during overnight hours.
          </p>
          <p>
            <strong className="text-foreground/80">Insurance:</strong>{" "}
            The facility maintains comprehensive property insurance. Members
            are encouraged to maintain their own vehicle insurance and may
            consult with our insurance partners for specialized collector
            vehicle coverage.
          </p>
          <p>
            <strong className="text-foreground/80">Multi-Vehicle Discounts:</strong>{" "}
            Storing more than one vehicle? Contact us for custom multi-vehicle
            pricing and collection management packages.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Schedule a"
        headingAccent="Tour"
        description="See our facility firsthand and discuss which storage option is right for your collection. Private tours available by appointment."
        primaryCTA={{ label: "Schedule a Tour", href: "/storage/tour" }}
        secondaryCTA={{ label: "Contact Us", href: "/storage/contact" }}
      />
    </>
  );
}
