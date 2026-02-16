import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import AccordionSection from "@/components/sections/AccordionSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Plan your visit to the Motor Legacy Museum. Hours, directions, parking, accessibility, and group visit information.",
};

const visitFeatures = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hours of Operation",
    description: "Tuesday–Sunday: 10:00 AM – 5:00 PM. Extended hours on Thursdays until 8:00 PM. Closed Mondays and major holidays.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location & Directions",
    description: "Conveniently located off Interstate 75, just 20 minutes from downtown. Look for the distinctive Motor Legacy Center campus signage.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Parking",
    description: "Free on-site parking with over 500 spaces, including accessible spots, EV charging stations, and motorcycle/RV overflow parking.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Accessibility",
    description: "Fully ADA-compliant facility with wheelchair access throughout, assistive listening devices, large-print guides, and sensory-friendly hours.",
  },
];

const faqItems = [
  {
    title: "Can I bring food and drinks into the museum?",
    content: "Outside food and beverages are not permitted in the gallery spaces. Our on-site Pit Stop Café offers a full menu of refreshments, snacks, and meals. Picnic areas are available on the grounds for those who prefer to bring their own food.",
  },
  {
    title: "Is photography allowed?",
    content: "Personal photography is welcome throughout most of the museum. Flash photography and tripods are not permitted in certain gallery areas to protect sensitive materials. Commercial photography requires advance permission.",
  },
  {
    title: "How long does a typical visit take?",
    content: "Most visitors spend 2–3 hours exploring the museum. Those interested in the restoration workshop tours, archive library, and special exhibits should plan for 4+ hours.",
  },
  {
    title: "Are pets allowed?",
    content: "Service animals are welcome throughout the museum. Emotional support animals and pets are not permitted inside the building but may enjoy our outdoor grounds.",
  },
  {
    title: "How do I book a group visit?",
    content: "Groups of 10 or more can book guided tours at discounted rates. Contact our group sales coordinator at groups@motorlegacy.org or call (555) 123-4567 ext. 200 at least two weeks in advance.",
  },
  {
    title: "Is there a coat check or locker service?",
    content: "Complimentary coat check and locker facilities are available near the main entrance on a first-come, first-served basis.",
  },
];

export default function VisitPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Plan Ahead"
        title="Plan Your"
        titleAccent="Visit"
        subtitle="Everything you need to know to make the most of your Motor Legacy Museum experience."
      />

      <FeatureGrid
        eyebrow="Essentials"
        heading="Visitor"
        headingAccent="Information"
        features={visitFeatures}
        columns={2}
      />

      <ContentSection
        eyebrow="Group Visits"
        heading="Bring Your"
        headingAccent="Group"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            The Motor Legacy Museum offers tailored experiences for school
            groups, corporate outings, car clubs, and private events. Our
            guided tours are led by knowledgeable docents who bring the
            stories behind our collections to life.
          </p>
          <p>
            <strong className="text-foreground/80">School Groups:</strong>{" "}
            Curriculum-aligned programs for K–12 with hands-on STEM
            activities. Free admission for Title I schools.
          </p>
          <p>
            <strong className="text-foreground/80">Corporate Events:</strong>{" "}
            Host your next team-building event, product launch, or client
            reception in our stunning gallery spaces. Catering and A/V
            available.
          </p>
          <p>
            <strong className="text-foreground/80">Car Clubs:</strong>{" "}
            Special rates and behind-the-scenes access for registered
            automotive clubs. Contact us to arrange a custom tour.
          </p>
        </div>
      </ContentSection>

      <AccordionSection
        eyebrow="FAQ"
        heading="Frequently Asked"
        headingAccent="Questions"
        items={faqItems}
      />

      <CTASection
        heading="Ready to"
        headingAccent="Visit?"
        description="Purchase your tickets online for the best rates and skip-the-line access, or stop by our box office during museum hours."
        primaryCTA={{ label: "Buy Tickets", href: "/museum/tickets" }}
        secondaryCTA={{ label: "Contact Us", href: "/museum/contact" }}
      />
    </>
  );
}
