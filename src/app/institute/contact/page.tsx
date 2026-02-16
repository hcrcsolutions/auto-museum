import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Motor Legacy Institute. Admissions, financial aid, and general inquiries.",
};

const contacts = [
  {
    label: "Admissions",
    email: "admissions@motorlegacyinstitute.org",
    phone: "(555) 234-5678 ext. 100",
  },
  {
    label: "Financial Aid",
    email: "finaid@motorlegacyinstitute.org",
    phone: "(555) 234-5678 ext. 200",
  },
  {
    label: "Student Services",
    email: "students@motorlegacyinstitute.org",
    phone: "(555) 234-5678 ext. 300",
  },
  {
    label: "General Inquiries",
    email: "info@motorlegacyinstitute.org",
    phone: "(555) 234-5678",
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Get In Touch"
        title="Contact the"
        titleAccent="Institute"
        subtitle="We're here to answer your questions about programs, admissions, financial aid, and campus life."
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
            <strong className="text-foreground/80">Office Hours:</strong>{" "}
            Monday–Friday, 8:00 AM – 5:00 PM. Closed weekends and holidays.
          </p>
          <p>
            <strong className="text-foreground/80">Campus Tours:</strong>{" "}
            Available Monday–Friday by appointment. Walk-ins welcome on
            Open House days.
          </p>
        </div>
      </ContentSection>
    </>
  );
}
