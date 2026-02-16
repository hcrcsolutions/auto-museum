import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Motor Legacy Storage Facility terms of service.",
};

const sections = [
  {
    title: "Membership Agreement",
    content:
      "Storage services are governed by the membership agreement signed at enrollment. These website terms supplement but do not replace that agreement. In case of conflict, the signed membership agreement prevails.",
  },
  {
    title: "Vehicle Requirements",
    content:
      "All vehicles must be in safe, non-leaking condition. Vehicles must have valid registration and proof of insurance. The facility reserves the right to refuse storage of vehicles that pose safety, environmental, or insurance risks.\n\nMembers must disclose any known mechanical issues, fluid leaks, or hazardous materials prior to storage.",
  },
  {
    title: "Liability & Insurance",
    content:
      "The facility maintains comprehensive property and liability insurance. However, the facility's liability for vehicle damage is limited to the terms specified in the membership agreement.\n\nMembers are strongly advised to maintain their own comprehensive vehicle insurance. The facility is not responsible for pre-existing conditions, normal wear, or acts of nature beyond our control systems.",
  },
  {
    title: "Access & Conduct",
    content:
      "Members must follow all facility rules regarding access, speed limits, and conduct. Unauthorized visitors, photography of other members' vehicles, and any unsafe behavior may result in membership termination.",
  },
  {
    title: "Payment & Cancellation",
    content:
      "Monthly fees are billed on the 1st of each month. Payment is due within 10 days. Accounts more than 30 days past due may result in restricted access. Cancellation requires 30 days' written notice after the minimum commitment period.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these terms with 30 days' notice to members. Continued membership after the notice period constitutes acceptance of revised terms.",
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" lastUpdated="January 1, 2026" sections={sections} />;
}
