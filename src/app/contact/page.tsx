import type { Metadata } from "next";
import PortalHeader from "@/components/layout/PortalHeader";
import PortalFooter from "@/components/layout/PortalFooter";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Motor Legacy Center. Find the right department for your inquiry.",
};

const sites = [
  {
    name: "Museum",
    description: "General admission, exhibits, events, tours, and membership.",
    email: "info@motorlegacy.org",
    phone: "(555) 123-4567",
    href: "/museum/contact",
  },
  {
    name: "Institute",
    description: "Admissions, financial aid, programs, and student services.",
    email: "info@motorlegacyinstitute.org",
    phone: "(555) 234-5678",
    href: "/institute/contact",
  },
  {
    name: "Storage Facility",
    description: "Tours, membership, concierge services, and maintenance.",
    email: "info@motorlegacystorage.com",
    phone: "(555) 345-6789",
    href: "/storage/contact",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />

      <HeroSection
        compact
        badge="Get In Touch"
        title="Contact the"
        titleAccent="Center"
        subtitle="The Motor Legacy Center campus includes a museum, technical institute, and storage facility. Find the right team for your inquiry below."
      />

      <section className="border-t border-foreground/5 px-6 py-24 sm:py-32">
        <Container>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Directory"
              heading="Choose Your"
              headingAccent="Department"
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {sites.map((site) => (
              <Card key={site.name} className="flex flex-col">
                <h3 className="font-serif text-xl font-semibold">
                  {site.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-foreground/50">
                  {site.description}
                </p>
                <div className="mt-4 space-y-1 text-sm text-foreground/60">
                  <p>{site.email}</p>
                  <p>{site.phone}</p>
                </div>
                <div className="mt-6">
                  <Button href={site.href} variant="secondary" className="w-full">
                    Contact {site.name}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <ContentSection
        eyebrow="Campus"
        heading="General"
        headingAccent="Information"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">Campus Address:</strong>{" "}
            1000 Motor Legacy Parkway, Heritage City, MI 48000
          </p>
          <p>
            <strong className="text-foreground/80">General Email:</strong>{" "}
            hello@motorlegacycenter.org
          </p>
          <p>
            <strong className="text-foreground/80">Main Phone:</strong>{" "}
            (555) 100-2000
          </p>
          <p className="text-sm text-foreground/40">
            For media inquiries, please contact press@motorlegacy.org.
          </p>
        </div>
      </ContentSection>

      <PortalFooter />
    </div>
  );
}
