import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Amenities at the Motor Legacy Storage Facility. Security, climate control, maintenance, and concierge services.",
};

const amenities = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Precision Climate Control",
    description: "Individual climate zones maintain 60–72°F temperature and 40–50% relative humidity. Museum-grade HVAC with redundant systems and 24/7 monitoring.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Advanced Security",
    description: "Biometric access control, HD CCTV with 90-day retention, motion-activated alerts, perimeter intrusion detection, and overnight security personnel.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Maintenance Services",
    description: "On-site maintenance bay with trained technicians for battery tending, fluid checks, tire pressure management, and mechanical inspections.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Concierge Service",
    description: "White-glove vehicle handling for moves, show preparation, transport coordination, and on-demand requests. Your dedicated concierge is a call away.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Remote Monitoring",
    description: "Access live HD camera feeds of your vehicle anytime through our secure member portal. Push notifications for access events and environmental alerts.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Members Lounge",
    description: "Exclusive club-style lounge with comfortable seating, refreshments, and Wi-Fi. A gathering place for collectors to connect and enjoy their passion.",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <HeroSection
        compact
        badge="World-Class Care"
        title="Amenities &"
        titleAccent="Services"
        subtitle="Every detail of our facility is designed to protect, preserve, and celebrate your automotive collection."
      />

      <FeatureGrid
        eyebrow="Features"
        heading="The Complete"
        headingAccent="Experience"
        features={amenities}
      />

      <ContentSection
        eyebrow="The Facility"
        heading="Built for"
        headingAccent="Collectors"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            Our 50,000 square-foot facility was purpose-built from the ground
            up for vehicle storage — not a converted warehouse or repurposed
            building. Every design decision, from the vapor barrier flooring
            to the LED lighting spectrum, was made with vehicle preservation
            in mind.
          </p>
          <p>
            The facility features wide drive aisles, generous bay spacing,
            and a covered loading area to protect vehicles during arrivals
            and departures regardless of weather conditions.
          </p>
          <p>
            Fire suppression uses a clean agent system that protects vehicles
            without water damage. Electrical systems include surge protection
            and backup generators to ensure climate control continuity.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="See It"
        headingAccent="Yourself"
        description="Schedule a private tour to experience our amenities firsthand and discuss your collection's specific needs."
        primaryCTA={{ label: "Schedule a Tour", href: "/storage/tour" }}
        secondaryCTA={{ label: "View Options", href: "/storage/options" }}
      />
    </>
  );
}
