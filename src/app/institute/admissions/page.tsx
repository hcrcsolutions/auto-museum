import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import AccordionSection from "@/components/sections/AccordionSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to the Motor Legacy Institute. Admission requirements, application process, and campus tour scheduling.",
};

const steps = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "1. Submit Application",
    description: "Complete our online application form with your personal information, educational background, and program preference.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "2. Provide Documents",
    description: "Submit your high school transcript or GED, a valid photo ID, and any relevant prior training certificates.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "3. Interview",
    description: "Meet with an admissions counselor to discuss your goals, ask questions, and learn about financial aid options.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "4. Enrollment",
    description: "Accept your offer, complete enrollment paperwork, secure financial aid, and prepare for your first day on campus.",
  },
];

const faqItems = [
  {
    title: "What are the admission requirements?",
    content: "Applicants must have a high school diploma or GED equivalent, be at least 18 years of age (or 17 with parental consent), and demonstrate a genuine interest in automotive technology. No prior experience is required for most programs.",
  },
  {
    title: "Can I transfer credits from another institution?",
    content: "We evaluate transfer credits on a case-by-case basis. Official transcripts from accredited institutions will be reviewed by our registrar. Up to 50% of program credits may be transferred if coursework aligns with our curriculum.",
  },
  {
    title: "When are application deadlines?",
    content: "We offer rolling admissions with priority deadlines: Fall semester — June 1. Spring semester — November 1. Summer intensive — March 1. Applications received after priority deadlines are considered on a space-available basis.",
  },
  {
    title: "Is there an application fee?",
    content: "There is no application fee. We believe cost should not be a barrier to exploring educational opportunities.",
  },
  {
    title: "Can I visit campus before applying?",
    content: "Absolutely! We encourage prospective students to schedule a campus tour. Tours are offered Monday through Friday and include facility walkthroughs, program demonstrations, and one-on-one time with an admissions counselor.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Apply Now"
        title="Admissions"
        subtitle="Your journey to a rewarding automotive career starts here. Our admissions process is straightforward and supportive — we're here to help every step of the way."
        primaryCTA={{ label: "Start Application", href: "#" }}
        secondaryCTA={{ label: "Schedule a Tour", href: "/institute/campus" }}
      />

      <FeatureGrid
        eyebrow="How to Apply"
        heading="Application"
        headingAccent="Process"
        features={steps}
        columns={2}
      />

      <ContentSection
        eyebrow="Requirements"
        heading="What You"
        headingAccent="Need"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">High School Diploma or GED:</strong>{" "}
            All applicants must provide proof of high school completion.
            Official transcripts should be sent directly from your school or
            GED testing center.
          </p>
          <p>
            <strong className="text-foreground/80">Photo Identification:</strong>{" "}
            A valid government-issued photo ID is required for enrollment.
          </p>
          <p>
            <strong className="text-foreground/80">Personal Statement:</strong>{" "}
            A brief statement (250–500 words) about your interest in
            automotive technology and career goals. This is not graded — we
            simply want to understand your motivation.
          </p>
          <p>
            <strong className="text-foreground/80">Recommendation (Optional):</strong>{" "}
            A letter of recommendation from a teacher, employer, or mentor can
            strengthen your application but is not required.
          </p>
        </div>
      </ContentSection>

      <AccordionSection
        eyebrow="FAQ"
        heading="Admissions"
        headingAccent="Questions"
        items={faqItems}
      />

      <CTASection
        heading="Questions?"
        headingAccent="We're Here to Help"
        description="Our admissions team is available Monday through Friday to answer your questions and guide you through the application process."
        primaryCTA={{ label: "Contact Admissions", href: "/institute/contact" }}
      />
    </>
  );
}
