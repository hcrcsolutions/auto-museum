import type { Metadata } from "next";
import { museumConfig } from "@/lib/site-config";
import SubSiteHeader from "@/components/layout/SubSiteHeader";
import SubSiteFooter from "@/components/layout/SubSiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Motor Legacy Museum",
    template: "%s | Motor Legacy Museum",
  },
  description: museumConfig.description,
};

export default function MuseumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubSiteHeader config={museumConfig} />
      <main>{children}</main>
      <SubSiteFooter config={museumConfig} />
    </div>
  );
}
