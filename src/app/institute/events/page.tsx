import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Institute events, open houses, and campus activities at the Motor Legacy Institute.",
};

const events = [
  {
    date: "March 8, 2026",
    title: "Spring Open House",
    type: "Open House",
    description: "Tour our campus, meet faculty, explore workshops, and learn about programs and financial aid. Families welcome. Refreshments provided.",
  },
  {
    date: "April 11, 2026",
    title: "Student Showcase",
    type: "Exhibition",
    description: "Our graduating class presents completed projects including restored vehicles, custom builds, and technical demonstrations.",
  },
  {
    date: "May 2, 2026",
    title: "Industry Career Fair",
    type: "Career",
    description: "Meet recruiters from leading dealerships, independent shops, fleet operations, and manufacturers. Bring your resume!",
  },
  {
    date: "June 20, 2026",
    title: "Summer Skills Clinic",
    type: "Workshop",
    description: "Free hands-on workshops for high school students interested in automotive careers. Welding, diagnostics, and custom painting demonstrations.",
  },
  {
    date: "August 15, 2026",
    title: "Fall Orientation",
    type: "Campus",
    description: "Welcome event for incoming students. Campus tour, program overviews, toolkit distribution, and meet-your-classmates social.",
  },
  {
    date: "October 24, 2026",
    title: "Fall Open House",
    type: "Open House",
    description: "Explore our campus and programs for the Spring 2027 semester. Hands-on demos, financial aid workshops, and Q&A sessions.",
  },
];

export default function EventsPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Calendar"
        title="Events &"
        titleAccent="Open Houses"
        subtitle="Join us on campus for open houses, career fairs, workshops, and student showcases throughout the year."
      />

      <section className="border-t border-foreground/5 px-6 py-24 sm:py-32">
        <Container>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Upcoming"
              heading="What's"
              headingAccent="Happening"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
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

      <CTASection
        heading="Visit Our"
        headingAccent="Campus"
        description="Can't make it to an event? Schedule a personal campus tour any weekday. We'd love to show you around."
        primaryCTA={{ label: "Schedule a Tour", href: "/institute/campus" }}
        secondaryCTA={{ label: "Contact Us", href: "/institute/contact" }}
      />
    </>
  );
}
