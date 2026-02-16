"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabSectionProps {
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  tabs: Tab[];
  dark?: boolean;
}

export default function TabSection({
  eyebrow,
  heading,
  headingAccent,
  tabs,
  dark = false,
}: TabSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={`border-t border-foreground/5 px-6 py-24 sm:py-32 ${
        dark ? "bg-charcoal-dark" : ""
      }`}
    >
      <Container>
        {heading && (
          <div className="mb-12">
            <SectionHeading
              eyebrow={eyebrow}
              heading={heading}
              headingAccent={headingAccent}
            />
          </div>
        )}

        <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-foreground/5">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveIndex(i)}
              className={`px-6 py-3 text-sm font-semibold transition-colors ${
                activeIndex === i
                  ? "border-b-2 border-gold text-gold"
                  : "text-foreground/40 hover:text-foreground/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>{tabs[activeIndex]?.content}</div>
      </Container>
    </section>
  );
}
