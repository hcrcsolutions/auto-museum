import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import TeamGrid from "@/components/sections/TeamGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Campus & Faculty",
  description:
    "Explore the Motor Legacy Institute campus facilities, virtual tour, and meet our faculty.",
};

const facilities = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Main Workshop",
    description: "40,000 sq ft of hands-on workspace with 30 vehicle lifts, alignment racks, and modern diagnostic equipment from leading manufacturers.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Classrooms & Labs",
    description: "Smart classrooms with interactive displays, computer labs with diagnostic software, and dedicated study areas for focused learning.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Collision Center",
    description: "Dedicated collision repair facility with spray booths, frame machines, welding stations, and a full refinishing lab.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: "Fabrication Shop",
    description: "Metal shaping, TIG/MIG welding, CNC cutting, and chassis fabrication equipment for our street rod and custom programs.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "EV Lab",
    description: "Purpose-built lab for electric and hybrid vehicle training with high-voltage safety equipment and manufacturer training vehicles.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Resource Center",
    description: "Technical library, computer stations, and student lounge with automotive media collection and quiet study space.",
  },
];

const faculty = [
  {
    name: "Mike Delgado",
    role: "Program Director, Auto Technology",
    bio: "ASE Master Technician with 20+ years of dealership and independent shop experience. Manufacturer-certified trainer.",
  },
  {
    name: "Sarah Chen",
    role: "Lead Instructor, Collision Repair",
    bio: "I-CAR Platinum instructor with expertise in structural repair and advanced refinishing. 15 years of industry experience.",
  },
  {
    name: "Tom Westbrook",
    role: "Lead Instructor, Street Rod Building",
    bio: "Award-winning custom builder whose creations have been featured at SEMA and Pebble Beach. 25 years of fabrication experience.",
  },
  {
    name: "Anika Patel",
    role: "Lead Instructor, EV & Hybrid Systems",
    bio: "Former EV systems engineer at a major manufacturer. PhD in electrical engineering with a passion for teaching.",
  },
  {
    name: "Carlos Rivera",
    role: "Lead Instructor, Restoration Arts",
    bio: "Concours-winning restorer with expertise in pre-war and post-war American and European automobiles.",
  },
  {
    name: "Jennifer Okafor",
    role: "Academic Dean",
    bio: "Educator and administrator with a deep commitment to student success and industry-aligned curriculum development.",
  },
];

export default function CampusPage() {
  return (
    <>
      <HeroSection
        compact
        badge="Our Campus"
        title="Campus &"
        titleAccent="Faculty"
        subtitle="State-of-the-art facilities and industry-experienced instructors create an unmatched learning environment."
        primaryCTA={{ label: "Schedule a Tour", href: "#" }}
        secondaryCTA={{ label: "Apply Now", href: "/institute/admissions" }}
      />

      <FeatureGrid
        eyebrow="Facilities"
        heading="Where Learning"
        headingAccent="Happens"
        features={facilities}
      />

      <TeamGrid
        eyebrow="Faculty"
        heading="Learn From the"
        headingAccent="Best"
        members={faculty}
        dark
      />

      <CTASection
        heading="See It for"
        headingAccent="Yourself"
        description="Schedule a campus tour to explore our facilities, meet our faculty, and experience what makes the Motor Legacy Institute unique."
        primaryCTA={{ label: "Schedule a Tour", href: "#" }}
        secondaryCTA={{ label: "Contact Us", href: "/institute/contact" }}
      />
    </>
  );
}
