import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/sections/CTASection";
import ContentSection from "@/components/sections/ContentSection";

export const metadata: Metadata = {
  title: "Motor Legacy Institute",
  description:
    "Hands-on automotive technology education preparing the next generation of technicians, restorers, and innovators.",
};

const programs = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Automotive Technology",
    description:
      "Comprehensive training in modern vehicle systems, diagnostics, and repair across all major manufacturers.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Collision Repair",
    description:
      "Master the art and science of collision repair, from structural analysis to finish refinishing and paint matching.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Street Rod Building",
    description:
      "Learn to build custom street rods from the ground up, combining traditional craftsmanship with modern engineering.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "EV & Hybrid Systems",
    description:
      "Specialized training in electric vehicle technology, battery systems, and the future of automotive propulsion.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Restoration Arts",
    description:
      "Preserve automotive heritage through professional restoration techniques covering bodywork, upholstery, and mechanical systems.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Career Services",
    description:
      "Industry partnerships, job placement assistance, and career development support to launch your automotive career.",
  },
];

export default function InstituteHome() {
  return (
    <>
      <HeroSection
        compact
        badge="Enrolling Now"
        title="Motor Legacy"
        titleAccent="Institute"
        subtitle="Hands-on automotive technology education preparing the next generation of technicians, restorers, and innovators."
        primaryCTA={{ label: "Apply Now", href: "/institute/admissions" }}
        secondaryCTA={{ label: "View Programs", href: "/institute/programs" }}
      />

      <FeatureGrid
        eyebrow="Programs"
        heading="Build Your"
        headingAccent="Future"
        features={programs}
      />

      <ContentSection
        eyebrow="Why Choose Us"
        heading="Education That"
        headingAccent="Drives Careers"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            The Motor Legacy Institute offers nationally accredited programs
            that combine classroom theory with extensive hands-on training in
            our state-of-the-art workshop facilities.
          </p>
          <p>
            Our industry-experienced faculty and small class sizes ensure
            personalized attention, while partnerships with leading
            manufacturers and dealerships provide direct pathways to
            employment upon graduation.
          </p>
          <p>
            With a 95% job placement rate and an average starting salary that
            exceeds industry standards, our graduates are prepared to lead the
            next generation of automotive innovation.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Start Your"
        headingAccent="Journey"
        description="Applications are now open for Fall 2026. Schedule a campus tour to experience our facilities firsthand and meet our faculty."
        primaryCTA={{ label: "Apply Now", href: "/institute/admissions" }}
        secondaryCTA={{ label: "Schedule a Tour", href: "/institute/campus" }}
      />
    </>
  );
}
