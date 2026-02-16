import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Motor Legacy Institute privacy policy.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide when you apply for admission, enroll in programs, request information, or communicate with us. This includes your name, contact details, educational history, financial information, and demographic data.\n\nWe also collect website usage data automatically through cookies and analytics tools.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to process applications and enrollment, administer financial aid, communicate about programs and services, improve our educational offerings, and comply with regulatory requirements.\n\nStudent educational records are maintained in accordance with the Family Educational Rights and Privacy Act (FERPA).",
  },
  {
    title: "Information Sharing",
    content:
      "We may share information with accreditation bodies, government agencies (as required by law), financial aid processors, and employer partners (with your consent for career placement). We do not sell personal information to third parties.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate security measures to protect student and applicant information. Access to personal data is restricted to authorized personnel with a legitimate need.",
  },
  {
    title: "Your Rights",
    content:
      "Students have rights under FERPA to access their educational records, request corrections, and control disclosure of personally identifiable information. Contact the registrar's office to exercise these rights.",
  },
  {
    title: "Contact Us",
    content:
      "Questions about this privacy policy may be directed to privacy@motorlegacyinstitute.org or the Institute registrar at (555) 234-5678 ext. 400.",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" lastUpdated="January 1, 2026" sections={sections} />;
}
