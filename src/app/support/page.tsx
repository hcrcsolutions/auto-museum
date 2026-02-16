import type { Metadata } from "next";
import Link from "next/link";
import PortalHeader from "@/components/layout/PortalHeader";
import PortalFooter from "@/components/layout/PortalFooter";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContentSection from "@/components/sections/ContentSection";

export const metadata: Metadata = {
  title: "Support & Donate",
  description:
    "Support the Motor Legacy Center through donations, membership, corporate sponsorship, and volunteering.",
};

const ways = [
  {
    title: "Make a Donation",
    description:
      "Your tax-deductible gift supports museum operations, educational programs, collection preservation, and community outreach. Every contribution makes a difference.",
    cta: "Donate Now",
  },
  {
    title: "Become a Member",
    description:
      "Museum memberships start at $75/year and include unlimited admission, guest passes, store discounts, and exclusive event access.",
    cta: "View Memberships",
    href: "/museum/support",
  },
  {
    title: "Corporate Sponsorship",
    description:
      "Align your brand with automotive excellence. Sponsorship packages include naming rights, event hosting, and employee benefits.",
    cta: "Learn More",
  },
  {
    title: "Volunteer",
    description:
      "Share your passion as a docent, event helper, restoration assistant, or education facilitator. Training provided for all roles.",
    cta: "Get Involved",
  },
  {
    title: "Planned Giving",
    description:
      "Create a lasting legacy by including the Motor Legacy Center in your estate plans. Bequests, charitable trusts, and more.",
    cta: "Learn More",
  },
  {
    title: "Vehicle Donation",
    description:
      "Donate a vehicle to our collection and receive a tax deduction. Our curatorial team evaluates all donated vehicles.",
    cta: "Contact Us",
    href: "/museum/contact",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />

      <HeroSection
        compact
        badge="Give Back"
        title="Support the"
        titleAccent="Legacy"
        subtitle="Your generosity preserves automotive history, funds educational programs, and builds a community united by a shared passion for the automobile."
      />

      <section className="border-t border-foreground/5 px-6 py-24 sm:py-32">
        <Container wide>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Ways to Give"
              heading="Make a"
              headingAccent="Difference"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ways.map((way) => (
              <Link
                key={way.title}
                href={way.href || "/contact"}
                className="group"
              >
                <Card className="flex h-full flex-col">
                  <h3 className="font-serif text-xl font-semibold transition-colors group-hover:text-gold">
                    {way.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/50">
                    {way.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    {way.cta}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContentSection
        eyebrow="Impact"
        heading="Where Your"
        headingAccent="Gift Goes"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">40%</strong> — Collection
            preservation, restoration, and new acquisitions
          </p>
          <p>
            <strong className="text-foreground/80">30%</strong> — Educational
            programs, scholarships, and community outreach
          </p>
          <p>
            <strong className="text-foreground/80">20%</strong> — Facility
            operations, maintenance, and improvement
          </p>
          <p>
            <strong className="text-foreground/80">10%</strong> — Research,
            publication, and digital initiatives
          </p>
          <p className="text-sm text-foreground/40">
            The Motor Legacy Center is a 501(c)(3) nonprofit organization. All
            donations are tax-deductible to the extent permitted by law.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Every Gift"
        headingAccent="Matters"
        description="Whether you give your time, your expertise, or a financial contribution, you're helping preserve automotive heritage for future generations."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Museum Membership", href: "/museum/support" }}
      />

      <PortalFooter />
    </div>
  );
}
