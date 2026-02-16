import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Motor Legacy Institute accessibility information and accommodations.",
};

const sections = [
  {
    title: "Our Commitment",
    content:
      "The Motor Legacy Institute is committed to providing equal access to education for all students, including those with disabilities. We comply with Section 504 of the Rehabilitation Act, the Americans with Disabilities Act (ADA), and applicable state laws.",
  },
  {
    title: "Academic Accommodations",
    content:
      "Students with documented disabilities may request academic accommodations through our Student Services office. Accommodations may include extended test time, note-taking assistance, alternative format materials, and modified lab procedures.\n\nTo request accommodations, contact Student Services with documentation from a qualified professional at least 30 days before the start of the semester.",
  },
  {
    title: "Physical Accessibility",
    content:
      "Our campus is designed to be fully accessible, including workshops, classrooms, labs, and common areas. Accessible parking, ramps, elevators, and restrooms are available throughout the facility.",
  },
  {
    title: "Digital Accessibility",
    content:
      "We strive to make our website and digital learning materials accessible to all users. If you encounter barriers, please contact us so we can address them promptly.",
  },
  {
    title: "Grievance Procedure",
    content:
      "If you believe you have been denied access or accommodations, you may file a grievance with the Academic Dean. Grievances are reviewed within 10 business days and resolved in accordance with our non-discrimination policy.",
  },
  {
    title: "Contact",
    content:
      "For accessibility questions or accommodation requests, contact Student Services at accessibility@motorlegacyinstitute.org or (555) 234-5678 ext. 300.",
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      lastUpdated="January 1, 2026"
      sections={sections}
    />
  );
}
