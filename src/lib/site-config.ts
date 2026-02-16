import type { SiteConfig, NavItem } from "./types";

export const TAGLINE = "Preserving the past. Inspiring the future.";

export const portalNav: NavItem[] = [
  { label: "Museum", href: "/museum" },
  { label: "Institute", href: "/institute" },
  { label: "Storage", href: "/storage" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export const portalFooterNav: NavItem[] = [
  { label: "Privacy Policy", href: "/museum/privacy" },
  { label: "Terms of Service", href: "/museum/terms" },
  { label: "Accessibility", href: "/museum/accessibility" },
  { label: "Contact", href: "/contact" },
];

export const museumConfig: SiteConfig = {
  name: "Motor Legacy Museum",
  shortName: "Museum",
  basePath: "/museum",
  description:
    "Explore over a century of automotive history through curated collections, interactive exhibits, and immersive galleries.",
  nav: [
    { label: "Visit", href: "/museum/visit" },
    { label: "Exhibits", href: "/museum/exhibits" },
    { label: "Tickets", href: "/museum/tickets" },
    { label: "Events", href: "/museum/events" },
    { label: "Support", href: "/museum/support" },
    { label: "About", href: "/museum/about" },
    { label: "Contact", href: "/museum/contact" },
  ],
  footerNav: [
    { label: "Privacy Policy", href: "/museum/privacy" },
    { label: "Terms of Service", href: "/museum/terms" },
    { label: "Accessibility", href: "/museum/accessibility" },
  ],
};

export const instituteConfig: SiteConfig = {
  name: "Motor Legacy Institute",
  shortName: "Institute",
  basePath: "/institute",
  description:
    "Hands-on automotive technology education preparing the next generation of technicians, restorers, and innovators.",
  nav: [
    { label: "Programs", href: "/institute/programs" },
    { label: "Admissions", href: "/institute/admissions" },
    { label: "Financial Aid", href: "/institute/financial-aid" },
    { label: "Student Services", href: "/institute/student-services" },
    { label: "Campus", href: "/institute/campus" },
    { label: "Events", href: "/institute/events" },
    { label: "About", href: "/institute/about" },
    { label: "Contact", href: "/institute/contact" },
  ],
  footerNav: [
    { label: "Privacy Policy", href: "/institute/privacy" },
    { label: "Terms of Service", href: "/institute/terms" },
    { label: "Accessibility", href: "/institute/accessibility" },
  ],
};

export const storageConfig: SiteConfig = {
  name: "Motor Legacy Storage Facility",
  shortName: "Storage",
  basePath: "/storage",
  description:
    "Premium climate-controlled vehicle storage with concierge services for discerning collectors.",
  nav: [
    { label: "Options", href: "/storage/options" },
    { label: "Amenities", href: "/storage/amenities" },
    { label: "Membership", href: "/storage/membership" },
    { label: "Tour", href: "/storage/tour" },
    { label: "About", href: "/storage/about" },
    { label: "Contact", href: "/storage/contact" },
  ],
  footerNav: [
    { label: "Privacy Policy", href: "/storage/privacy" },
    { label: "Terms of Service", href: "/storage/terms" },
    { label: "Accessibility", href: "/storage/accessibility" },
  ],
};

export const allSites = [museumConfig, instituteConfig, storageConfig];
