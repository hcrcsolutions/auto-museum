import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Events & Programs",
  description:
    "Museum events, programs, and private rental information at the Motor Legacy Museum.",
};

const upcomingEvents = [
  {
    date: "March 15, 2026",
    title: "Cars & Coffee Morning",
    type: "Community",
    description: "Monthly gathering for enthusiasts. Bring your ride, grab a coffee, and connect with fellow car lovers on our scenic grounds.",
  },
  {
    date: "April 4, 2026",
    title: "Spring Auction Preview",
    type: "Special Event",
    description: "Exclusive preview of vehicles consigned for our Spring Classic Auction. Members receive priority access.",
  },
  {
    date: "April 18, 2026",
    title: "Kids' Pit Crew Day",
    type: "Family",
    description: "Hands-on STEM activities for kids ages 6–12. Build model cars, learn about engines, and meet real mechanics.",
  },
  {
    date: "May 9, 2026",
    title: "Concours in the Park",
    type: "Show",
    description: "Annual judged car show featuring over 100 vehicles on our manicured grounds. Open to all makes and eras.",
  },
];

const programTypes = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Educational Programs",
    description: "Lectures, workshops, and film screenings that explore the history, art, and science of the automobile for all ages.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Community Events",
    description: "Cars & Coffee mornings, cruise-ins, swap meets, and social events that bring the local automotive community together.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Private Rentals",
    description: "Host your wedding, corporate event, or private party in our stunning gallery spaces. Full catering and A/V services available.",
  },
];

export default function EventsPage() {
  return (
    <>
      <HeroSection
        compact
        badge="What's Happening"
        title="Events &"
        titleAccent="Programs"
        subtitle="From monthly Cars & Coffee mornings to exclusive auctions and educational workshops, there's always something happening at the Motor Legacy Museum."
      />

      {/* Upcoming Events */}
      <section className="border-t border-foreground/5 px-6 py-24 sm:py-32">
        <Container>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Calendar"
              heading="Upcoming"
              headingAccent="Events"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card key={event.title}>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm text-gold">{event.date}</span>
                  <Badge variant="muted">{event.type}</Badge>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                  {event.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FeatureGrid
        eyebrow="Programs"
        heading="Something for"
        headingAccent="Everyone"
        features={programTypes}
        columns={3}
        dark
      />

      <CTASection
        heading="Host Your"
        headingAccent="Event"
        description="Our gallery spaces, outdoor grounds, and event facilities provide a stunning backdrop for any occasion. Contact our events team to start planning."
        primaryCTA={{ label: "Inquire Now", href: "/museum/contact" }}
        secondaryCTA={{ label: "View Rental Info", href: "/museum/contact" }}
      />
    </>
  );
}
