import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import TeamGrid from "@/components/sections/TeamGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Motor Legacy Institute's history, accreditation, mission, and leadership.",
};

const board = [
  {
    name: "Richard Harmon",
    role: "Board Chair",
    bio: "Retired automotive executive and lifelong advocate for vocational education. Former VP of manufacturing at a major OEM.",
  },
  {
    name: "Susan Nakamura",
    role: "Vice Chair",
    bio: "Philanthropist and collector with a passion for connecting education to industry opportunity.",
  },
  {
    name: "Frank DeLuca",
    role: "Board Member",
    bio: "Owner of a multi-location dealership group and active supporter of workforce development programs.",
  },
  {
    name: "Maria Santos",
    role: "Board Member",
    bio: "Community leader and education advocate. Former superintendent of Heritage City Public Schools.",
  },
  {
    name: "William Tran",
    role: "Board Member",
    bio: "Technology entrepreneur focused on the intersection of automotive innovation and education.",
  },
  {
    name: "Dorothy Kessler",
    role: "Board Member",
    bio: "Retired professor of engineering education with expertise in hands-on learning methodologies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Our Story"
        title="About the"
        titleAccent="Institute"
        subtitle="Founded on the belief that the automotive industry deserves a world-class training institution, the Motor Legacy Institute prepares passionate individuals for rewarding careers."
      />

      <ContentSection
        eyebrow="Mission"
        heading="Driving Careers,"
        headingAccent="Building Futures"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            The Motor Legacy Institute was established as part of the Motor
            Legacy Center campus to address the growing demand for skilled
            automotive professionals. Our mission is to provide exceptional
            hands-on education that prepares graduates for immediate
            employment and long-term career success.
          </p>
          <p>
            We believe that automotive technology is both an art and a
            science, and our programs are designed to develop the technical
            skills, critical thinking, and professional habits that employers
            value most.
          </p>
        </div>
      </ContentSection>

      <ContentSection
        eyebrow="Accreditation"
        heading="Accreditation &"
        headingAccent="Recognition"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            The Motor Legacy Institute is accredited by the Accrediting
            Commission of Career Schools and Colleges (ACCSC) and approved by
            the Michigan Department of Education. Our programs meet or exceed
            the standards set by the National Automotive Technicians Education
            Foundation (NATEF).
          </p>
          <p>
            We are an ASE Education Foundation accredited program, ensuring
            our curriculum aligns with industry standards and prepares
            students for ASE certification examinations.
          </p>
          <p>
            The institute is approved for VA educational benefits and
            participates in federal Title IV financial aid programs, making
            quality automotive education accessible to all qualified
            applicants.
          </p>
        </div>
      </ContentSection>

      <TeamGrid
        eyebrow="Governance"
        heading="Board of"
        headingAccent="Directors"
        members={board}
      />

      <CTASection
        heading="Be Part of"
        headingAccent="Our Story"
        description="Join a community of educators, industry professionals, and passionate students working together to advance automotive excellence."
        primaryCTA={{ label: "Apply Now", href: "/institute/admissions" }}
        secondaryCTA={{ label: "Contact Us", href: "/institute/contact" }}
      />
    </>
  );
}
