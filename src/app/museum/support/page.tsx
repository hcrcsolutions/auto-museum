import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import PricingTable from "@/components/sections/PricingTable";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Support & Membership",
  description:
    "Support the Motor Legacy Museum through membership, donations, corporate sponsorship, and volunteering.",
};

const membershipTiers = [
  {
    name: "Individual",
    price: "$75",
    period: "year",
    description: "For the passionate enthusiast.",
    features: [
      "Unlimited free admission",
      "2 guest passes per year",
      "10% museum store discount",
      "Members-only newsletter",
      "Early exhibit access",
    ],
    cta: "Join Now",
  },
  {
    name: "Family",
    price: "$125",
    period: "year",
    description: "Share the experience with loved ones.",
    features: [
      "Unlimited admission for 2 adults + children",
      "4 guest passes per year",
      "15% museum store discount",
      "Members-only newsletter",
      "Early exhibit access",
      "Kids' program discounts",
    ],
    highlighted: true,
    cta: "Join Now",
  },
  {
    name: "Patron",
    price: "$500",
    period: "year",
    description: "For dedicated supporters of automotive heritage.",
    features: [
      "All Family benefits",
      "10 guest passes per year",
      "Private curator-led tours",
      "Annual donor reception invitation",
      "Name recognition in gallery",
      "Behind-the-scenes access",
    ],
    cta: "Join Now",
  },
];

export default function SupportPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Get Involved"
        title="Support the"
        titleAccent="Museum"
        subtitle="Your generosity preserves automotive history for future generations. Join as a member, make a donation, or volunteer your time."
      />

      <PricingTable
        eyebrow="Membership"
        heading="Join Our"
        headingAccent="Community"
        tiers={membershipTiers}
      />

      <ContentSection
        eyebrow="Ways to Give"
        heading="Make a"
        headingAccent="Difference"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">Annual Fund:</strong>{" "}
            Unrestricted gifts to the annual fund support daily operations,
            educational programs, and collection preservation. Every dollar
            makes a difference.
          </p>
          <p>
            <strong className="text-foreground/80">Corporate Sponsorship:</strong>{" "}
            Align your brand with automotive excellence. Sponsorship packages
            include naming rights, event hosting, logo placement, and
            exclusive employee benefits.
          </p>
          <p>
            <strong className="text-foreground/80">Vehicle Donations:</strong>{" "}
            Donate a vehicle to our collection and receive a tax deduction. Our
            curatorial team evaluates all donated vehicles for potential
            inclusion in our permanent collection.
          </p>
          <p>
            <strong className="text-foreground/80">Planned Giving:</strong>{" "}
            Include the Motor Legacy Museum in your estate plans to create a
            lasting legacy. Our development team can assist with bequests,
            charitable trusts, and other planned giving instruments.
          </p>
          <p>
            <strong className="text-foreground/80">Volunteer:</strong>{" "}
            Share your passion as a docent, event volunteer, restoration
            assistant, or education program facilitator. Training provided.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Every Gift"
        headingAccent="Matters"
        description="Whether you give $10 or $10,000, your contribution helps preserve automotive history and inspire the next generation of enthusiasts."
        primaryCTA={{ label: "Donate Now", href: "/support" }}
        secondaryCTA={{ label: "Contact Us", href: "/museum/contact" }}
      />
    </>
  );
}
