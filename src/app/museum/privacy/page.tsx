import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Motor Legacy Museum privacy policy.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly, such as when you purchase tickets, create an account, sign up for our newsletter, make a donation, or contact us. This may include your name, email address, postal address, phone number, and payment information.\n\nWe also collect certain information automatically when you visit our website, including your IP address, browser type, device information, pages viewed, and referring URLs.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to process transactions, send communications you've requested, improve our website and services, personalize your experience, analyze usage trends, and comply with legal obligations.\n\nWe do not sell your personal information to third parties.",
  },
  {
    title: "Information Sharing",
    content:
      "We may share your information with service providers who assist us in operating our website and conducting our business, such as payment processors, email platforms, and analytics providers. These parties are contractually obligated to keep your information confidential.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, please contact us at privacy@motorlegacy.org.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions about this privacy policy, please contact us at privacy@motorlegacy.org or write to: Motor Legacy Museum, P.O. Box 1926, Heritage City, MI 48001.",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" lastUpdated="January 1, 2026" sections={sections} />;
}
