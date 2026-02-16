import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import TeamGrid from "@/components/sections/TeamGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Motor Legacy Storage Facility's story, leadership, and integration with the Motor Legacy Center campus.",
};

const team = [
  {
    name: "Gregory Holt",
    role: "Facility Director",
    bio: "Former luxury automotive logistics director with 20 years of experience managing high-value vehicle storage and transport operations.",
  },
  {
    name: "Diane Yamamoto",
    role: "Head of Concierge",
    bio: "Hospitality and client services expert with a background in luxury hotel management and private aviation.",
  },
  {
    name: "Marcus Blackwell",
    role: "Security Director",
    bio: "Former federal law enforcement officer specializing in asset protection and security systems design.",
  },
  {
    name: "Rachel Nguyen",
    role: "Maintenance Manager",
    bio: "ASE Master Technician with concours preparation experience. Ensures every vehicle receives meticulous care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Our Story"
        title="About the"
        titleAccent="Facility"
        subtitle="Purpose-built for the serious collector, the Motor Legacy Storage Facility represents the gold standard in vehicle preservation and care."
      />

      <ContentSection
        eyebrow="Our Philosophy"
        heading="Built by Collectors,"
        headingAccent="For Collectors"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            The Motor Legacy Storage Facility was conceived by collectors who
            understood that existing storage options fell short. Generic
            warehouses, self-storage units, and even dedicated car storage
            facilities often lacked the precision climate control, security,
            and white-glove service that significant collections demand.
          </p>
          <p>
            We designed every aspect of our facility with one goal: to
            provide the safest, most caring environment possible for
            vehicles that represent not just financial investments, but
            personal passions and family legacies.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Campus Integration"
        heading="Part of Something"
        headingAccent="Bigger"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            As part of the Motor Legacy Center campus, storage members enjoy
            unique benefits that no standalone facility can offer. The
            adjacent museum provides world-class exhibits and events, while
            the institute offers workshops and educational programming.
          </p>
          <p>
            This integration creates a true automotive lifestyle campus where
            collectors don&apos;t just store their vehicles — they immerse
            themselves in a community that shares their passion, learn from
            experts, and participate in a vibrant cultural institution.
          </p>
        </div>
      </ContentSection>

      <TeamGrid
        eyebrow="Leadership"
        heading="Meet Our"
        headingAccent="Team"
        members={team}
      />

      <CTASection
        heading="Experience the"
        headingAccent="Difference"
        description="Schedule a tour to see why the Motor Legacy Storage Facility is the collector's choice for vehicle preservation."
        primaryCTA={{ label: "Schedule a Tour", href: "/storage/tour" }}
        secondaryCTA={{ label: "Contact Us", href: "/storage/contact" }}
      />
    </>
  );
}
