import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

interface ContentSectionProps {
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  children: ReactNode;
  dark?: boolean;
  centered?: boolean;
}

export default function ContentSection({
  eyebrow,
  heading,
  headingAccent,
  children,
  dark = false,
  centered = false,
}: ContentSectionProps) {
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
              centered={centered}
            />
          </div>
        )}
        <div
          className={`prose-invert max-w-none text-foreground/60 leading-relaxed ${
            centered ? "text-center" : ""
          }`}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
