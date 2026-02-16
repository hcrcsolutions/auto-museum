import Link from "next/link";
import PortalHeader from "@/components/layout/PortalHeader";
import PortalFooter from "@/components/layout/PortalFooter";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SteeringWheel from "@/components/SteeringWheel";
import CountdownTimer from "@/components/CountdownTimer";
import NewsletterForm from "@/components/NewsletterForm";
import MuseumIcon from "@/components/icons/MuseumIcon";
import InstituteIcon from "@/components/icons/InstituteIcon";
import StorageIcon from "@/components/icons/StorageIcon";
import { TAGLINE } from "@/lib/site-config";

const subSites = [
  {
    icon: <MuseumIcon className="h-10 w-10" />,
    title: "The Museum",
    description:
      "Explore over a century of automotive history through curated collections, interactive exhibits, and immersive galleries celebrating the machines that moved the world.",
    href: "/museum",
    highlights: ["Curated Collections", "Interactive Exhibits", "Restoration Workshop"],
  },
  {
    icon: <InstituteIcon className="h-10 w-10" />,
    title: "The Institute",
    description:
      "Hands-on automotive technology education preparing the next generation of technicians, restorers, and innovators with industry-leading programs.",
    href: "/institute",
    highlights: ["Auto Technology", "Collision Repair", "Street Rod Building"],
  },
  {
    icon: <StorageIcon className="h-10 w-10" />,
    title: "Storage Facility",
    description:
      "Premium climate-controlled vehicle storage with concierge services, 24/7 security, and white-glove maintenance for discerning collectors.",
    href: "/storage",
    highlights: ["Climate Controlled", "24/7 Security", "Concierge Service"],
  },
];

const newsItems = [
  {
    date: "February 2026",
    title: "Grand Opening Announcement Coming Soon",
    excerpt:
      "Stay tuned for exciting details about our grand opening celebration, featuring special exhibits and exclusive previews.",
  },
  {
    date: "January 2026",
    title: "Institute Program Applications Open",
    excerpt:
      "The Motor Legacy Institute is now accepting applications for the Fall 2026 semester across all automotive technology programs.",
  },
  {
    date: "December 2025",
    title: "Storage Facility Pre-Reservations Available",
    excerpt:
      "Founding members can now reserve premium storage bays at exclusive pre-opening rates with priority placement.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />

      {/* Hero */}
      <HeroSection
        badge="Under Construction"
        badgePulse
        title="Motor Legacy"
        titleAccent="Center"
        subtitle="An extraordinary destination celebrating automotive history, innovation, and the enduring passion for the machines that moved the world."
      >
        <p className="font-serif text-lg italic text-gold/80 sm:text-xl">
          {TAGLINE}
        </p>
        <div className="pt-4">
          <CountdownTimer />
        </div>
      </HeroSection>

      {/* About / Vision */}
      <section className="relative border-t border-foreground/5 bg-charcoal-dark px-6 py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Corner accents */}
                <div className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-gold/40" />
                <div className="absolute -right-3 -top-3 h-6 w-6 border-r-2 border-t-2 border-gold/40" />
                <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-gold/40" />
                <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-gold/40" />
                {/* Branding */}
                <div className="flex flex-col items-center gap-4 px-8 py-10">
                  <SteeringWheel className="h-24 w-24 text-gold" />
                  <span className="font-serif text-2xl font-bold tracking-wide text-foreground">
                    Motor Legacy <span className="text-gold">Center</span>
                  </span>
                  <p className="font-serif text-sm italic text-gold/60">
                    Preserving the past. Inspiring the future.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-sm uppercase tracking-[0.2em] text-gold">
                Our Vision
              </span>
              <h2 className="font-serif text-3xl font-bold leading-snug sm:text-4xl">
                Where Automotive History
                <span className="text-gold"> Comes Alive</span>
              </h2>
              <div className="h-px w-16 bg-gold/30" />
              <p className="leading-relaxed text-foreground/60">
                The Motor Legacy Center is more than a museum &mdash; it&apos;s
                an immersive journey through the evolution of the automobile.
                From the first horseless carriages to the electric revolution,
                we&apos;re creating a world-class destination that honors the
                engineers, designers, and dreamers who put the world on wheels.
              </p>
              <p className="leading-relaxed text-foreground/60">
                Our campus encompasses a world-class museum, a technical
                education institute, and a premium vehicle storage facility
                &mdash; three pillars united by a shared passion for automotive
                excellence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sub-Site Cards */}
      <section className="relative border-t border-foreground/5 px-6 py-24 sm:py-32">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.02] blur-3xl" />
        <Container wide>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Explore"
              heading="Three Pillars, One"
              headingAccent="Destination"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {subSites.map((site) => (
              <Link key={site.href} href={site.href} className="group">
                <Card className="flex h-full flex-col">
                  <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3 text-gold transition-colors group-hover:bg-gold/20">
                    {site.icon}
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-semibold transition-colors group-hover:text-gold">
                    {site.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground/50">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {site.highlights.map((h) => (
                      <Badge key={h} variant="muted">
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Explore
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* News & Updates */}
      <section className="border-t border-foreground/5 bg-charcoal-dark px-6 py-24 sm:py-32">
        <Container>
          <div className="mb-16">
            <SectionHeading
              eyebrow="Latest Updates"
              heading="News &"
              headingAccent="Events"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.title}>
                <span className="text-xs uppercase tracking-wider text-gold">
                  {item.date}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                  {item.excerpt}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Donate CTA */}
      <CTASection
        heading="Support the"
        headingAccent="Legacy"
        description="Help us preserve automotive history for future generations. Your contribution supports our museum collections, educational programs, and community initiatives."
        primaryCTA={{ label: "Donate Now", href: "/support" }}
        secondaryCTA={{ label: "Learn More", href: "/museum/support" }}
      />

      {/* Newsletter */}
      <section className="relative border-t border-foreground/5 px-6 py-24 sm:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <SteeringWheel className="h-12 w-12 text-gold/40" />
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Be the First to
            <span className="text-gold"> Know</span>
          </h2>
          <p className="text-foreground/60">
            Sign up to receive exclusive updates on our grand opening, exhibit
            previews, and special invitations. Join a community of enthusiasts
            who share your passion.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <PortalFooter />
    </div>
  );
}
