import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Motor Legacy Storage Facility privacy policy.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide when inquiring about or enrolling in storage services, including your name, contact details, vehicle information, payment details, and insurance information.\n\nWe also collect access logs (entry/exit times), security camera footage, and website usage data.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to manage your storage membership, provide concierge and maintenance services, process payments, communicate about your account, maintain security, and improve our services.\n\nSecurity camera footage is retained for 90 days and used exclusively for facility security and incident investigation.",
  },
  {
    title: "Information Sharing",
    content:
      "We may share information with insurance providers (at your request), payment processors, security monitoring services, and law enforcement (when legally required). We do not sell your personal information.",
  },
  {
    title: "Data Security",
    content:
      "We implement strong security measures to protect your personal and vehicle information, including encrypted storage, access controls, and regular security audits.",
  },
  {
    title: "Your Rights",
    content:
      "You may access, correct, or request deletion of your personal information by contacting privacy@motorlegacystorage.com. Note that certain records may be retained as required by law or contractual obligations.",
  },
  {
    title: "Contact Us",
    content:
      "For privacy questions, contact privacy@motorlegacystorage.com or write to: Motor Legacy Storage Facility, 1000 Motor Legacy Parkway, Heritage City, MI 48000.",
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" lastUpdated="January 1, 2026" sections={sections} />;
}
