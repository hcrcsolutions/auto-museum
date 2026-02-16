import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Motor Legacy Institute terms of service.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing the Motor Legacy Institute website, submitting an application, or enrolling in programs, you agree to these terms of service.",
  },
  {
    title: "Academic Policies",
    content:
      "Students are expected to maintain satisfactory academic progress as defined in the student handbook. The institute reserves the right to dismiss students who fail to meet academic standards, violate the code of conduct, or fail to meet financial obligations.\n\nCourse schedules, program requirements, and policies are subject to change. Students will be notified of any changes that affect their enrollment.",
  },
  {
    title: "Tuition & Fees",
    content:
      "Tuition and fees are published annually and are subject to change. Payment is due according to the schedule outlined in the enrollment agreement. Failure to make timely payments may result in holds on academic records and registration.",
  },
  {
    title: "Refund Policy",
    content:
      "Refunds are calculated based on the date of official withdrawal. Full refund within week one, 75% through week two, 50% through week four, 25% through week six, and no refund after week six. Federal financial aid refunds are calculated per Title IV regulations.",
  },
  {
    title: "Intellectual Property",
    content:
      "Course materials, curriculum, and training resources are the property of the Motor Legacy Institute and may not be reproduced or distributed without written permission.",
  },
  {
    title: "Limitation of Liability",
    content:
      "The institute is not liable for indirect damages arising from website use or program participation. Employment outcomes are not guaranteed, though our career services team actively supports job placement.",
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" lastUpdated="January 1, 2026" sections={sections} />;
}
