import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import TeamGrid from "@/components/sections/TeamGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Motor Legacy Museum's history, mission, leadership, and commitment to preserving automotive heritage.",
};

const leadership = [
  {
    name: "Margaret Ashford",
    role: "Museum Director",
    bio: "Former curator at the National Automotive Museum with 25 years of experience in collection management and museum administration.",
  },
  {
    name: "James Thornton",
    role: "Chief Curator",
    bio: "Automotive historian and author with deep expertise in pre-war and post-war American automobiles. PhD from the University of Michigan.",
  },
  {
    name: "Patricia Reeves",
    role: "Director of Education",
    bio: "Former high school science teacher turned museum educator, passionate about making automotive history accessible to all ages.",
  },
  {
    name: "Robert Kimura",
    role: "Head of Restoration",
    bio: "Master restorer with over 30 years of hands-on experience. Former chief technician at a premier concours restoration shop.",
  },
  {
    name: "Linda Marchetti",
    role: "Development Director",
    bio: "Nonprofit development professional with a track record of building sustainable donor communities for cultural institutions.",
  },
  {
    name: "David Okonkwo",
    role: "Operations Manager",
    bio: "Facilities and operations expert ensuring our visitors and staff enjoy a world-class experience every day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Our Story"
        title="About the"
        titleAccent="Museum"
        subtitle="Founded on a passion for preserving automotive heritage, the Motor Legacy Museum is dedicated to inspiring generations through the stories of the machines that moved the world."
      />

      <ContentSection
        eyebrow="Our Mission"
        heading="Preserving the Past,"
        headingAccent="Inspiring the Future"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            The Motor Legacy Museum was established with a singular vision: to
            create a world-class institution that preserves, celebrates, and
            shares the rich history of the automobile with the widest possible
            audience.
          </p>
          <p>
            What began as a private collection of rare and significant
            vehicles has grown into a comprehensive museum spanning 120,000
            square feet, housing over 200 vehicles, and serving more than
            100,000 visitors annually.
          </p>
          <p>
            As part of the Motor Legacy Center campus — alongside the
            Institute for automotive education and a premier vehicle storage
            facility — the museum sits at the heart of a thriving ecosystem
            dedicated to all facets of automotive culture.
          </p>
        </div>
      </ContentSection>

      {/* Timeline */}
      <ContentSection
        eyebrow="History"
        heading="Our"
        headingAccent="Journey"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-8">
          {[
            { year: "2018", event: "Private collection formalized as a nonprofit foundation" },
            { year: "2019", event: "Campus site acquired and master plan unveiled" },
            { year: "2020", event: "Groundbreaking ceremony for the Motor Legacy Center" },
            { year: "2022", event: "Museum building construction completed" },
            { year: "2023", event: "Institute and Storage Facility construction begins" },
            { year: "2025", event: "Collection installation and exhibit design finalized" },
            { year: "2026", event: "Grand opening of the complete Motor Legacy Center campus" },
          ].map((item) => (
            <div key={item.year} className="flex gap-6">
              <span className="shrink-0 font-serif text-2xl font-bold text-gold">
                {item.year}
              </span>
              <div className="border-l border-gold/20 pl-6">
                <p className="text-foreground/70">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <TeamGrid
        eyebrow="Leadership"
        heading="Meet Our"
        headingAccent="Team"
        members={leadership}
      />

      <CTASection
        heading="Support Our"
        headingAccent="Mission"
        description="Help us continue to preserve automotive heritage for future generations through membership, donations, and volunteer opportunities."
        primaryCTA={{ label: "Get Involved", href: "/museum/support" }}
        secondaryCTA={{ label: "Contact Us", href: "/museum/contact" }}
      />
    </>
  );
}
