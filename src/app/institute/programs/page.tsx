import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore automotive technology programs at the Motor Legacy Institute. Auto tech, collision repair, street rod building, and more.",
};

const programs = [
  {
    title: "Automotive Technology",
    duration: "2 years / 4 semesters",
    badge: "Flagship",
    description:
      "Our comprehensive automotive technology program covers modern vehicle systems from engine management and drivetrain to ADAS and electrical diagnostics. Graduates earn ASE certifications and are prepared for immediate employment.",
    careers: ["Automotive Technician", "Service Advisor", "Diagnostic Specialist", "Shop Foreman"],
  },
  {
    title: "Collision Repair & Refinishing",
    duration: "18 months / 3 semesters",
    description:
      "Master structural repair, panel replacement, frame alignment, paint mixing, and refinishing techniques. Industry-standard equipment and I-CAR aligned curriculum prepare you for a rewarding career.",
    careers: ["Collision Repair Technician", "Paint Technician", "Estimator", "Body Shop Manager"],
  },
  {
    title: "Street Rod & Custom Fabrication",
    duration: "2 years / 4 semesters",
    badge: "Specialty",
    description:
      "Build a complete street rod from the ground up. Learn metal shaping, welding, chassis fabrication, wiring, and engine building in this unique program that blends art with engineering.",
    careers: ["Custom Fabricator", "Hot Rod Builder", "Restoration Specialist", "Workshop Owner"],
  },
  {
    title: "EV & Hybrid Systems",
    duration: "1 year / 2 semesters",
    badge: "New",
    description:
      "Specialized training in electric vehicle architecture, battery management, high-voltage safety, and hybrid drivetrain diagnostics. Prepare for the future of automotive service.",
    careers: ["EV Technician", "Battery Systems Specialist", "Hybrid Service Advisor"],
  },
  {
    title: "Restoration Arts",
    duration: "18 months / 3 semesters",
    description:
      "Preserve automotive heritage through professional restoration. Covers bodywork, mechanical rebuilding, upholstery, wood graining, and concours-level finishing techniques.",
    careers: ["Restoration Technician", "Upholstery Specialist", "Concours Preparer", "Museum Conservator"],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Explore Programs"
        title="Our"
        titleAccent="Programs"
        subtitle="Industry-leading automotive education combining hands-on training with classroom theory. Choose the path that matches your passion."
      />

      <section className="border-t border-foreground/5 px-6 py-24 sm:py-32">
        <Container wide>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Catalog"
              heading="Find Your"
              headingAccent="Path"
            />
          </div>
          <div className="space-y-8">
            {programs.map((prog) => (
              <Card key={prog.title} className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">
                      {prog.title}
                    </h3>
                    <p className="mt-1 text-sm text-gold">{prog.duration}</p>
                  </div>
                  {prog.badge && <Badge>{prog.badge}</Badge>}
                </div>
                <p className="mt-4 leading-relaxed text-foreground/60">
                  {prog.description}
                </p>
                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/40">
                    Career Paths
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {prog.careers.map((c) => (
                      <Badge key={c} variant="muted">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <ContentSection
        eyebrow="Credentials"
        heading="Industry"
        headingAccent="Certifications"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            All programs are designed to prepare students for nationally
            recognized industry certifications, including ASE (Automotive
            Service Excellence), I-CAR, and manufacturer-specific credentials.
          </p>
          <p>
            Our curriculum is regularly reviewed and updated in partnership
            with industry advisory boards to ensure alignment with current
            workplace demands and emerging technologies.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Ready to"
        headingAccent="Apply?"
        description="Applications for Fall 2026 are now open. Schedule a campus tour to see our facilities and meet the faculty."
        primaryCTA={{ label: "Apply Now", href: "/institute/admissions" }}
        secondaryCTA={{ label: "Financial Aid", href: "/institute/financial-aid" }}
      />
    </>
  );
}
