import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Motor Legacy Storage Facility accessibility information.",
};

const sections = [
  {
    title: "Our Commitment",
    content:
      "The Motor Legacy Storage Facility is committed to providing accessible services and facilities for all members and visitors, including those with disabilities.",
  },
  {
    title: "Facility Accessibility",
    content:
      "Our facility features accessible parking near the entrance, wide drive aisles that accommodate wheelchair access, an accessible members lounge, and ADA-compliant restrooms.\n\nThe front office and consultation areas are fully wheelchair accessible.",
  },
  {
    title: "Service Accommodations",
    content:
      "Our concierge team can assist with vehicle handling, documentation, and any other tasks that may require accommodation. Please inform us of your needs when scheduling a tour or enrolling in membership.",
  },
  {
    title: "Digital Accessibility",
    content:
      "We strive to make our website and member portal accessible to all users. If you encounter any barriers, please contact us and we will work to resolve the issue promptly.",
  },
  {
    title: "Contact",
    content:
      "For accessibility questions or to request accommodations, contact us at info@motorlegacystorage.com or (555) 345-6789.",
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
