import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Motor Legacy Museum terms of service.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Motor Legacy Museum website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
  },
  {
    title: "Ticket Purchases & Refunds",
    content:
      "All ticket sales are final. Exchanges may be made up to 24 hours before your scheduled visit, subject to availability. In the event of a museum closure, tickets will be honored on an alternate date or refunded in full.\n\nOnline ticket prices may differ from box office prices. Group discount tickets must be purchased in advance.",
  },
  {
    title: "Museum Conduct",
    content:
      "Visitors are expected to behave respectfully toward staff, volunteers, other visitors, and museum property. The museum reserves the right to refuse entry or remove any visitor who violates our code of conduct.\n\nTouching exhibits, running, smoking, and consuming alcohol (except at designated events) are prohibited.",
  },
  {
    title: "Photography & Media",
    content:
      "Personal, non-commercial photography is permitted in most areas of the museum. Flash photography, tripods, and commercial photography require advance written permission. The museum reserves the right to restrict photography in certain exhibits.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including text, images, logos, and design, is the property of the Motor Legacy Museum or its licensors and is protected by copyright and trademark laws.",
  },
  {
    title: "Limitation of Liability",
    content:
      "The Motor Legacy Museum is not liable for any indirect, incidental, or consequential damages arising from your use of our website or attendance at the museum, to the fullest extent permitted by law.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the revised terms. Please review this page periodically.",
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" lastUpdated="January 1, 2026" sections={sections} />;
}
