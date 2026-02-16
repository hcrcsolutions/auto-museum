import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TabSection from "@/components/sections/TabSection";
import CTASection from "@/components/sections/CTASection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Exhibits",
  description:
    "Explore current, upcoming, and past exhibits at the Motor Legacy Museum.",
};

const currentExhibits = [
  {
    title: "The American Muscle Era",
    dates: "Ongoing",
    description:
      "A thundering tribute to the golden age of American horsepower. From the first Pontiac GTO to the last Dodge Challenger, experience the cars that defined a generation.",
  },
  {
    title: "Speed & Style: Italian Supercars",
    dates: "Through September 2026",
    description:
      "Ferrari, Lamborghini, Maserati, and more. This curated collection celebrates the artistry and engineering of Italy's most iconic marques.",
  },
  {
    title: "The Electric Revolution",
    dates: "Through December 2026",
    description:
      "From early electric carriages of the 1900s to today's cutting-edge EVs, trace the surprising history and promising future of electric propulsion.",
  },
];

const upcomingExhibits = [
  {
    title: "Land Speed Legends",
    dates: "Opening October 2026",
    badge: "Coming Soon",
    description:
      "The fastest machines on earth. Explore the engineering, courage, and obsession behind the quest to break the land speed record.",
  },
  {
    title: "Trucks That Built America",
    dates: "Opening January 2027",
    badge: "Coming Soon",
    description:
      "From Model TT Fords to modern heavy-duty haulers, discover how pickup trucks and commercial vehicles shaped American industry and culture.",
  },
];

const pastExhibits = [
  {
    title: "Brass Era Beauties",
    dates: "January – June 2026",
    description:
      "A lovingly preserved collection of pre-1920 automobiles showcasing the craftsmanship of the earliest automotive pioneers.",
  },
  {
    title: "Racing Through the Decades",
    dates: "September 2025 – January 2026",
    description:
      "From early hill climbs to Formula 1, this exhibit explored the evolution of motorsport and the technology it inspired.",
  },
];

function ExhibitCard({
  title,
  dates,
  description,
  badge,
}: {
  title: string;
  dates: string;
  description: string;
  badge?: string;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gold">{dates}</p>
        </div>
        {badge && <Badge>{badge}</Badge>}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/50">
        {description}
      </p>
    </Card>
  );
}

export default function ExhibitsPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Explore"
        title="Our"
        titleAccent="Exhibits"
        subtitle="Immerse yourself in the stories, machines, and innovations that shaped automotive history."
      />

      <TabSection
        eyebrow="Gallery"
        heading="What's On"
        headingAccent="Display"
        tabs={[
          {
            label: "Current",
            content: (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentExhibits.map((e) => (
                  <ExhibitCard key={e.title} {...e} />
                ))}
              </div>
            ),
          },
          {
            label: "Upcoming",
            content: (
              <div className="grid gap-6 md:grid-cols-2">
                {upcomingExhibits.map((e) => (
                  <ExhibitCard key={e.title} {...e} />
                ))}
              </div>
            ),
          },
          {
            label: "Past",
            content: (
              <div className="grid gap-6 md:grid-cols-2">
                {pastExhibits.map((e) => (
                  <ExhibitCard key={e.title} {...e} />
                ))}
              </div>
            ),
          },
        ]}
      />

      <CTASection
        heading="Experience It"
        headingAccent="In Person"
        description="Our exhibits are designed to be experienced firsthand. Plan your visit today and step inside automotive history."
        primaryCTA={{ label: "Buy Tickets", href: "/museum/tickets" }}
        secondaryCTA={{ label: "Plan Your Visit", href: "/museum/visit" }}
      />
    </>
  );
}
