import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import ContentSection from "@/components/sections/ContentSection";

export const metadata: Metadata = {
  title: "Motor Legacy Storage Facility",
  description:
    "Premium climate-controlled vehicle storage with concierge services for discerning collectors.",
};

const amenities = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Climate Controlled",
    description:
      "Precision temperature and humidity control maintained 24/7 to protect your vehicle's paint, interior, and mechanical systems.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "24/7 Security",
    description:
      "Multi-layer security including biometric access, CCTV surveillance, motion detection, and on-site security personnel.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Concierge Service",
    description:
      "White-glove vehicle handling, detailing, maintenance coordination, and transport services tailored to your needs.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Maintenance Bay",
    description:
      "On-site maintenance facility with trained technicians for regular upkeep, battery tending, and mechanical inspections.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Remote Monitoring",
    description:
      "Access live camera feeds of your vehicle anytime through our secure member portal and mobile application.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Members Lounge",
    description:
      "Exclusive lounge area where collectors gather, share stories, and enjoy their vehicles in a private club atmosphere.",
  },
];

export default function StorageHome() {
  return (
    <>
      <HeroSection
        compact
        badge="Now Accepting Members"
        title="Motor Legacy"
        titleAccent="Storage"
        subtitle="Premium climate-controlled vehicle storage with concierge services, 24/7 security, and white-glove maintenance for discerning collectors."
        primaryCTA={{ label: "View Options", href: "/storage/options" }}
        secondaryCTA={{ label: "Schedule a Tour", href: "/storage/tour" }}
      />

      <FeatureGrid
        eyebrow="Amenities"
        heading="The Collector's"
        headingAccent="Sanctuary"
        features={amenities}
      />

      <ContentSection
        eyebrow="Our Facility"
        heading="Where Prized Vehicles"
        headingAccent="Rest Easy"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            The Motor Legacy Storage Facility is designed from the ground up
            for the serious collector. Our 50,000 square-foot facility
            features individually metered climate zones, vapor barrier
            flooring, and museum-grade environmental controls.
          </p>
          <p>
            Every bay is designed with generous spacing, soft lighting, and
            premium finishes that honor the vehicles they house. From daily
            drivers to million-dollar concours winners, every vehicle receives
            the same extraordinary level of care.
          </p>
          <p>
            As part of the Motor Legacy Center campus, storage members enjoy
            exclusive access to museum events, institute workshops, and a
            vibrant community of fellow enthusiasts.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Reserve Your"
        headingAccent="Space"
        description="Limited bays available. Schedule a private tour to see our facility and discuss membership options tailored to your collection."
        primaryCTA={{ label: "Schedule a Tour", href: "/storage/tour" }}
        secondaryCTA={{ label: "View Membership", href: "/storage/membership" }}
      />
    </>
  );
}
