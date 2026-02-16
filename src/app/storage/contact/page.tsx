import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Motor Legacy Storage Facility. Tours, membership inquiries, and general information.",
};

const contacts = [
  {
    label: "Tours & Membership",
    email: "tours@motorlegacystorage.com",
    phone: "(555) 345-6789 ext. 100",
  },
  {
    label: "Concierge Services",
    email: "concierge@motorlegacystorage.com",
    phone: "(555) 345-6789 ext. 200",
  },
  {
    label: "Maintenance",
    email: "maintenance@motorlegacystorage.com",
    phone: "(555) 345-6789 ext. 300",
  },
  {
    label: "General Inquiries",
    email: "info@motorlegacystorage.com",
    phone: "(555) 345-6789",
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
        subtitle="Questions about storage options, membership, or scheduling a tour? Our team is here to help."
      />

      <section className="border-t border-foreground/5 px-6 py-24 sm:py-32">
        <Container>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Departments"
              heading="How to"
              headingAccent="Reach Us"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
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
            <strong className="text-foreground/80">Facility Access:</strong>{" "}
            24/7 for Private Bay and Premium members. General Storage: 7 AM – 10 PM daily.
          </p>
          <p>
            <strong className="text-foreground/80">Office Hours:</strong>{" "}
            Monday–Friday 9 AM – 6 PM, Saturday 10 AM – 4 PM.
          </p>
        </div>
      </ContentSection>
    </>
  );
}
