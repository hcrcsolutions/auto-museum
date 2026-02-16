import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import PricingTable from "@/components/sections/PricingTable";
import ContentSection from "@/components/sections/ContentSection";
import AccordionSection from "@/components/sections/AccordionSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Financial Aid & Tuition",
  description:
    "Tuition information, scholarships, federal and state financial aid, and payment plans at the Motor Legacy Institute.",
};

const tuitionTiers = [
  {
    name: "Automotive Technology",
    price: "$18,500",
    period: "program",
    description: "2-year / 4-semester program.",
    features: [
      "Tuition and lab fees",
      "Tool kit included",
      "ASE exam fees covered",
      "Textbooks and digital resources",
      "Career placement support",
    ],
    cta: "Apply Now",
  },
  {
    name: "Collision Repair",
    price: "$14,000",
    period: "program",
    description: "18-month / 3-semester program.",
    features: [
      "Tuition and lab fees",
      "Safety equipment provided",
      "I-CAR certification prep",
      "Textbooks and digital resources",
      "Career placement support",
    ],
    highlighted: true,
    cta: "Apply Now",
  },
  {
    name: "EV & Hybrid Systems",
    price: "$9,800",
    period: "program",
    description: "1-year / 2-semester program.",
    features: [
      "Tuition and lab fees",
      "High-voltage safety cert",
      "Textbooks and digital resources",
      "Career placement support",
    ],
    cta: "Apply Now",
  },
];

const faqItems = [
  {
    title: "Does the institute accept FAFSA?",
    content: "Yes. The Motor Legacy Institute is approved to participate in federal Title IV financial aid programs. Complete the FAFSA at studentaid.gov using our school code to determine your eligibility for grants, loans, and work-study.",
  },
  {
    title: "What scholarships are available?",
    content: "We offer merit-based, need-based, and industry-sponsored scholarships. The Motor Legacy Founders' Scholarship covers up to 50% of tuition for qualifying students. Additional scholarships are available through industry partners and local organizations.",
  },
  {
    title: "Are payment plans available?",
    content: "Yes. We offer interest-free monthly payment plans that spread tuition costs over the duration of your program. A $500 deposit is required at enrollment, with remaining balance divided into equal monthly installments.",
  },
  {
    title: "Can I use VA benefits?",
    content: "Yes. The Motor Legacy Institute is approved for VA educational benefits including the GI Bill and Vocational Rehabilitation programs. Our veterans coordinator can help you navigate the benefits process.",
  },
  {
    title: "What if I need to withdraw?",
    content: "Our refund policy provides a full refund within the first week of classes, 75% through week two, 50% through week four, and 25% through week six. After week six, no refund is available. Financial aid adjustments are made according to federal regulations.",
  },
];

export default function FinancialAidPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Invest in Your Future"
        title="Financial Aid &"
        titleAccent="Tuition"
        subtitle="We're committed to making automotive education accessible. Explore tuition costs, scholarships, federal aid, and flexible payment options."
      />

      <PricingTable
        eyebrow="Tuition"
        heading="Program"
        headingAccent="Costs"
        tiers={tuitionTiers}
      />

      <ContentSection
        eyebrow="Funding Options"
        heading="Ways to"
        headingAccent="Pay"
        dark
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p>
            <strong className="text-foreground/80">Federal Financial Aid:</strong>{" "}
            Complete the FAFSA to determine eligibility for Pell Grants,
            Federal Direct Loans, and work-study programs.
          </p>
          <p>
            <strong className="text-foreground/80">State Grants:</strong>{" "}
            Michigan residents may qualify for the Michigan Competitive
            Scholarship and Tuition Grant. Check with your state for similar
            programs if you reside elsewhere.
          </p>
          <p>
            <strong className="text-foreground/80">Scholarships:</strong>{" "}
            Over $200,000 in scholarships are awarded annually. Applications
            are reviewed on a rolling basis — apply early for best
            consideration.
          </p>
          <p>
            <strong className="text-foreground/80">Employer Sponsorship:</strong>{" "}
            Many employers offer tuition reimbursement or sponsorship for
            employees pursuing automotive training. Our financial aid office
            can provide documentation for your employer.
          </p>
        </div>
      </ContentSection>

      <AccordionSection
        eyebrow="FAQ"
        heading="Financial Aid"
        headingAccent="Questions"
        items={faqItems}
      />

      <CTASection
        heading="Need Help"
        headingAccent="Paying for School?"
        description="Our financial aid office is here to help you explore every option. Schedule a one-on-one consultation to build a personalized funding plan."
        primaryCTA={{ label: "Contact Financial Aid", href: "/institute/contact" }}
        secondaryCTA={{ label: "Apply Now", href: "/institute/admissions" }}
      />
    </>
  );
}
