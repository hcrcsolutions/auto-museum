"use client";

import { useState } from "react";
import type { AccordionItem } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

interface AccordionSectionProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  items: AccordionItem[];
  dark?: boolean;
}

export default function AccordionSection({
  eyebrow,
  heading,
  headingAccent,
  items,
  dark = false,
}: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className={`border-t border-foreground/5 px-6 py-24 sm:py-32 ${
        dark ? "bg-charcoal-dark" : ""
      }`}
    >
      <Container>
        <div className="mb-16">
          <SectionHeading
            eyebrow={eyebrow}
            heading={heading}
            headingAccent={headingAccent}
          />
        </div>

        <div className="mx-auto max-w-3xl">
          {items.map((item, i) => (
            <div key={item.title} className="border-b border-foreground/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-gold"
              >
                <span className="font-serif text-lg font-semibold">
                  {item.title}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="pb-5 text-sm leading-relaxed text-foreground/60">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
