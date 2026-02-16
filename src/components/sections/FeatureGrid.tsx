import type { ReactNode } from "react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  features: FeatureItem[];
  columns?: 2 | 3;
  dark?: boolean;
}

export default function FeatureGrid({
  eyebrow,
  heading,
  headingAccent,
  features,
  columns = 3,
  dark = false,
}: FeatureGridProps) {
  return (
    <section
      className={`relative border-t border-foreground/5 px-6 py-24 sm:py-32 ${
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

        <div
          className={`grid gap-8 sm:grid-cols-2 ${
            columns === 3 ? "lg:grid-cols-3" : ""
          }`}
        >
          {features.map((feature) => (
            <Card key={feature.title}>
              <div className="group">
                <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3 text-gold transition-colors group-hover:bg-gold/20">
                  {feature.icon}
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/50">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
