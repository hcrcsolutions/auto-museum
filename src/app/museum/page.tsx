import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import ContentSection from "@/components/sections/ContentSection";

export const metadata: Metadata = {
  title: "Motor Legacy Museum",
  description:
    "Explore over a century of automotive history through curated collections, interactive exhibits, and immersive galleries.",
};

const features = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Curated Collections",
    description:
      "Decades of automotive excellence showcased through meticulously curated collections spanning over a century of motoring history.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Interactive Exhibits",
    description:
      "Step inside the story with hands-on displays, simulators, and immersive technology that puts you behind the wheel of history.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Events & Gatherings",
    description:
      "From exclusive car shows and auctions to educational programs and community gatherings, there's always something happening.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Restoration Workshop",
    description:
      "Watch master craftspeople breathe new life into classic automobiles in our glass-walled restoration workshop.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Archive & Library",
    description:
      "Explore our extensive archive of automotive literature, photography, blueprints, and memorabilia spanning the entire motor age.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    title: "Museum Store",
    description:
      "Take a piece of history home with exclusive merchandise, scale models, vintage prints, and curated automotive gifts.",
  },
];

export default function MuseumHome() {
  return (
    <>
      <HeroSection
        compact
        badge="Now Open"
        title="Motor Legacy"
        titleAccent="Museum"
        subtitle="Journey through over a century of automotive innovation. From brass-era pioneers to modern supercars, experience the machines that changed the world."
        primaryCTA={{ label: "Plan Your Visit", href: "/museum/visit" }}
        secondaryCTA={{ label: "View Exhibits", href: "/museum/exhibits" }}
      />

      <FeatureGrid
        eyebrow="Discover"
        heading="What to"
        headingAccent="Expect"
        features={features}
      />

      <ContentSection
        eyebrow="Our Story"
        heading="A Living Tribute to the"
        headingAccent="Automobile"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            The Motor Legacy Museum houses one of the most comprehensive
            automotive collections in the region, featuring over 200 vehicles
            spanning from the dawn of the automobile to cutting-edge electric
            and autonomous vehicles.
          </p>
          <p>
            Our 120,000 square-foot facility includes permanent galleries,
            rotating exhibition spaces, a glass-walled restoration workshop,
            an automotive research library, and a state-of-the-art theater for
            educational programming.
          </p>
          <p>
            Whether you&apos;re a lifelong enthusiast or discovering the joy of
            automotive history for the first time, the Motor Legacy Museum
            offers an experience unlike any other.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Plan Your"
        headingAccent="Visit"
        description="Open Tuesday through Sunday, 10 AM to 5 PM. Purchase tickets online for the best rates and skip-the-line access."
        primaryCTA={{ label: "Buy Tickets", href: "/museum/tickets" }}
        secondaryCTA={{ label: "Group Visits", href: "/museum/visit" }}
      />
    </>
  );
}
