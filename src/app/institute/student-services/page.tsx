import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Student Services",
  description:
    "Student services at the Motor Legacy Institute including housing, career services, academic support, and student life.",
};

const services = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Housing Assistance",
    description: "While we don't operate campus housing, our student services team maintains a list of approved local housing options, roommate matching, and relocation assistance.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Career Services",
    description: "Resume workshops, interview prep, job fairs, and direct connections with our network of employer partners. 95% of graduates are employed within 6 months.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Academic Support",
    description: "Tutoring, study groups, and one-on-one academic advising. Our student success center is staffed by experienced educators and peer mentors.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Student Life",
    description: "Car clubs, tech competitions, community service projects, and social events create a vibrant campus culture centered around shared automotive passion.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Wellness & Counseling",
    description: "Access to personal counseling, wellness resources, and mental health support. We care about the whole student, not just the technician.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Transportation",
    description: "Free campus shuttle service connecting to local transit hubs, student parking on campus, and bicycle storage facilities.",
  },
];

export default function StudentServicesPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Student Life"
        title="Student"
        titleAccent="Services"
        subtitle="We're committed to your success beyond the classroom. From housing assistance to career placement, we've got you covered."
      />

      <FeatureGrid
        eyebrow="Support"
        heading="Everything You"
        headingAccent="Need"
        features={services}
      />

      <ContentSection
        eyebrow="Career Outcomes"
        heading="Where Our Graduates"
        headingAccent="Work"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            Our graduates are employed at leading dealerships, independent
            shops, fleet operations, manufacturing facilities, and custom
            builders across the country. Many have launched their own
            successful businesses.
          </p>
          <p>
            Our industry partnerships include relationships with major
            automotive brands, national repair chains, and specialty
            restoration shops, providing students with internship
            opportunities and direct-hire pathways.
          </p>
        </div>
      </ContentSection>

      <CTASection
        heading="Join Our"
        headingAccent="Community"
        description="Ready to become part of the Motor Legacy family? Apply today and discover a supportive community of passionate automotive students and professionals."
        primaryCTA={{ label: "Apply Now", href: "/institute/admissions" }}
        secondaryCTA={{ label: "Contact Us", href: "/institute/contact" }}
      />
    </>
  );
}
