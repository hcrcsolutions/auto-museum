import type { Metadata } from "next";
import { instituteConfig } from "@/lib/site-config";
import SubSiteHeader from "@/components/layout/SubSiteHeader";
import SubSiteFooter from "@/components/layout/SubSiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Motor Legacy Institute",
    template: "%s | Motor Legacy Institute",
  },
  description: instituteConfig.description,
};

export default function InstituteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubSiteHeader config={instituteConfig} />
      <main>{children}</main>
      <SubSiteFooter config={instituteConfig} />
    </div>
  );
}
