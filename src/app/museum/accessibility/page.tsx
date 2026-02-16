import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Motor Legacy Museum accessibility information and commitment.",
};

const sections = [
  {
    title: "Our Commitment",
    content:
      "The Motor Legacy Museum is committed to ensuring that our facility, programs, and digital experiences are accessible to all visitors, including those with disabilities. We strive to comply with the Americans with Disabilities Act (ADA) and Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.",
  },
  {
    title: "Physical Accessibility",
    content:
      "Our facility is fully wheelchair accessible, including all galleries, restrooms, the museum store, and dining areas. Accessible parking spaces are located near the main entrance.\n\nWheelchairs are available on a first-come, first-served basis at no charge from our visitor services desk.\n\nService animals are welcome throughout the museum.",
  },
  {
    title: "Sensory Accommodations",
    content:
      "Assistive listening devices are available for guided tours and theater presentations. Large-print gallery guides and audio descriptions are available upon request.\n\nWe offer sensory-friendly hours on the first Saturday of each month from 9:00–10:00 AM, with reduced lighting, lower sound levels, and a quieter environment.",
  },
  {
    title: "Digital Accessibility",
    content:
      "We are committed to making our website accessible to all users. Our site is designed with semantic HTML, keyboard navigation support, appropriate color contrast, and alt text for images.\n\nIf you encounter accessibility barriers on our website, please contact us so we can address the issue.",
  },
  {
    title: "Feedback & Requests",
    content:
      "We welcome your feedback on accessibility at the Motor Legacy Museum. If you need accommodations or have suggestions for improvement, please contact us at accessibility@motorlegacy.org or call (555) 123-4567 ext. 150.",
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
