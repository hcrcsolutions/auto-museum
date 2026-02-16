import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  basePath: string;
  description: string;
  nav: NavItem[];
  footerNav: NavItem[];
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface TabItem {
  label: string;
  content: ReactNode;
}
