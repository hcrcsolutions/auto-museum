import type { Metadata } from "next";
import { storageConfig } from "@/lib/site-config";
import SubSiteHeader from "@/components/layout/SubSiteHeader";
import SubSiteFooter from "@/components/layout/SubSiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Motor Legacy Storage Facility",
    template: "%s | Motor Legacy Storage",
  },
  description: storageConfig.description,
};

export default function StorageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SubSiteHeader config={storageConfig} />
      <main>{children}</main>
      <SubSiteFooter config={storageConfig} />
    </div>
  );
}
