import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Schedule a Tour",
  description:
    "Schedule a private tour of the Motor Legacy Storage Facility. See our climate-controlled bays, security systems, and amenities.",
};

const tourHighlights = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "See the Facility",
    description: "Walk through our climate-controlled bays, security operations center, maintenance bay, and members lounge firsthand.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Discuss Your Needs",
    description: "Meet with a storage consultant to discuss your collection, preferred tier, and any special requirements for your vehicles.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Get a Custom Quote",
    description: "Receive a personalized membership proposal based on your collection size, storage preferences, and desired services.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Flexible Scheduling",
    description: "Tours are available Monday through Saturday by appointment. Most tours take 45–60 minutes depending on your questions and interests.",
  },
];

export default function TourPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Visit Us"
        title="Schedule a"
        titleAccent="Tour"
        subtitle="See our world-class facility up close. A private tour is the best way to experience the Motor Legacy Storage difference."
      />

      <FeatureGrid
        eyebrow="Your Tour"
        heading="What to"
        headingAccent="Expect"
        features={tourHighlights}
        columns={2}
      />

      <ContentSection
        eyebrow="Book Now"
        heading="Request a"
        headingAccent="Tour"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            To schedule a private facility tour, please contact our storage
            team by phone or email. We&apos;ll find a time that works for your
            schedule and prepare a personalized walkthrough.
          </p>
          <p>
            <strong className="text-foreground/80">Phone:</strong>{" "}
            (555) 345-6789
          </p>
          <p>
            <strong className="text-foreground/80">Email:</strong>{" "}
            tours@motorlegacystorage.com
          </p>
          <p>
            <strong className="text-foreground/80">Tour Hours:</strong>{" "}
            Monday–Friday 9 AM – 6 PM, Saturday 10 AM – 4 PM. Closed Sundays.
          </p>
          <p className="text-sm text-foreground/40">
            Virtual tours are also available for out-of-area collectors.
            Contact us to arrange a video walkthrough with one of our storage
            consultants.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Ready to"
        headingAccent="Reserve?"
        description="After your tour, your storage consultant can help you select the perfect tier and bay for your collection."
        primaryCTA={{ label: "View Options", href: "/storage/options" }}
        secondaryCTA={{ label: "Contact Us", href: "/storage/contact" }}
      />
    </>
  );
}
