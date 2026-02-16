import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Motor Legacy Museum. Phone, email, mailing address, and contact form.",
};

const contacts = [
  {
    label: "General Inquiries",
    email: "info@motorlegacy.org",
    phone: "(555) 123-4567",
  },
  {
    label: "Group Visits & Tours",
    email: "groups@motorlegacy.org",
    phone: "(555) 123-4567 ext. 200",
  },
  {
    label: "Membership & Donations",
    email: "giving@motorlegacy.org",
    phone: "(555) 123-4567 ext. 300",
  },
  {
    label: "Events & Rentals",
    email: "events@motorlegacy.org",
    phone: "(555) 123-4567 ext. 400",
  },
  {
    label: "Press & Media",
    email: "press@motorlegacy.org",
    phone: "(555) 123-4567 ext. 500",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Get In Touch"
        title="Contact"
        titleAccent="Us"
        subtitle="We'd love to hear from you. Reach out with questions, feedback, or to learn more about the Motor Legacy Museum."
      />

      {/* Contact Cards */}
      <section className="border-t border-foreground/5 px-6 py-24 sm:py-32">
        <Container>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Departments"
              heading="How to"
              headingAccent="Reach Us"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((c) => (
              <Card key={c.label}>
                <h3 className="font-serif text-lg font-semibold">{c.label}</h3>
                <div className="mt-4 space-y-2 text-sm text-foreground/60">
                  <p>{c.email}</p>
                  <p>{c.phone}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <ContentSection
        eyebrow="Visit Us"
        heading="Location &"
        headingAccent="Hours"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">Address:</strong>{" "}
            1000 Motor Legacy Parkway, Heritage City, MI 48000
          </p>
          <p>
            <strong className="text-foreground/80">Hours:</strong>{" "}
            Tuesday–Sunday, 10:00 AM – 5:00 PM. Thursdays until 8:00 PM.
            Closed Mondays and major holidays.
          </p>
          <p>
            <strong className="text-foreground/80">Mailing Address:</strong>{" "}
            Motor Legacy Museum, P.O. Box 1926, Heritage City, MI 48001
          </p>
          <p className="text-foreground/40 text-sm">
            For urgent matters outside of business hours, please email
            info@motorlegacy.org and a team member will respond as soon as
            possible.
          </p>
        </div>
      </ContentSection>
    </>
  );
}
