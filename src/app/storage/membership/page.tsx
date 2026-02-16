import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import AccordionSection from "@/components/sections/AccordionSection";
import CTASection from "@/components/sections/CTASection";
import FeatureGrid from "@/components/sections/FeatureGrid";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Storage facility membership information, reservation process, policies, and member benefits.",
};

const benefits = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    title: "Museum Privileges",
    description: "Free unlimited museum admission for you and a guest, exhibit previews, and invitations to exclusive museum events and openings.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Institute Workshops",
    description: "Complimentary access to select Institute workshops including basic maintenance, detailing, and automotive appreciation classes.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Collector Community",
    description: "Members-only events, rallies, and social gatherings. Connect with fellow collectors who share your passion for automotive excellence.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Partner Discounts",
    description: "Exclusive discounts with partner businesses including detailing, transport, insurance, parts suppliers, and local hospitality.",
  },
];

const faqItems = [
  {
    title: "How do I reserve a storage bay?",
    content: "Start by scheduling a facility tour. After touring, your storage consultant will help you select the right tier and bay location. A signed membership agreement and first month's payment secure your reservation.",
  },
  {
    title: "What is the minimum commitment?",
    content: "General Storage requires a 3-month minimum. Private Bay and Premium Collection memberships require a 6-month minimum. After the initial term, memberships continue on a month-to-month basis with 30 days' notice for cancellation.",
  },
  {
    title: "Can I access my vehicle anytime?",
    content: "Private Bay and Premium Collection members have 24/7 access via biometric entry. General Storage members have scheduled access during facility hours (7 AM – 10 PM daily) with after-hours access available by appointment.",
  },
  {
    title: "Is my vehicle insured while in storage?",
    content: "Our facility carries comprehensive property insurance. However, we strongly recommend maintaining your own vehicle insurance. Our insurance partners offer specialized collector vehicle policies at competitive rates.",
  },
  {
    title: "Can I store multiple vehicles?",
    content: "Absolutely. Many of our members store multiple vehicles. We offer multi-vehicle discounts starting at 10% for two vehicles, scaling up to 20% for five or more. Contact us for a custom collection quote.",
  },
  {
    title: "What happens if I need my vehicle transported?",
    content: "Our concierge team coordinates enclosed transport through our network of vetted carriers. We handle scheduling, loading/unloading, and tracking. Transport costs are billed separately at preferred member rates.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Join Us"
        title="Membership"
        subtitle="More than just storage — membership connects you to a community of passionate collectors and a full campus of automotive experiences."
        primaryCTA={{ label: "Schedule a Tour", href: "/storage/tour" }}
        secondaryCTA={{ label: "View Options", href: "/storage/options" }}
      />

      <FeatureGrid
        eyebrow="Benefits"
        heading="Member"
        headingAccent="Advantages"
        features={benefits}
        columns={2}
      />

      <ContentSection
        eyebrow="Process"
        heading="How to"
        headingAccent="Join"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">1. Schedule a Tour:</strong>{" "}
            Visit our facility to see the spaces, meet the team, and discuss
            your collection&apos;s specific needs.
          </p>
          <p>
            <strong className="text-foreground/80">2. Choose Your Tier:</strong>{" "}
            Select from General Storage, Private Bay, or Premium Collection
            based on your desired level of service and access.
          </p>
          <p>
            <strong className="text-foreground/80">3. Sign & Reserve:</strong>{" "}
            Complete the membership agreement and first month&apos;s payment
            to secure your bay.
          </p>
          <p>
            <strong className="text-foreground/80">4. Move In:</strong>{" "}
            Our concierge team will coordinate the delivery or arrange a
            convenient time for you to bring your vehicle to its new home.
          </p>
        </div>
      </ContentSection>

      <AccordionSection
        eyebrow="FAQ"
        heading="Membership"
        headingAccent="Questions"
        items={faqItems}
      />

      <CTASection
        heading="Ready to"
        headingAccent="Join?"
        description="Schedule a private tour to experience the facility and discuss membership options tailored to your collection."
        primaryCTA={{ label: "Schedule a Tour", href: "/storage/tour" }}
        secondaryCTA={{ label: "Contact Us", href: "/storage/contact" }}
      />
    </>
  );
}
