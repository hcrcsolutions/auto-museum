import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPage({
  title,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="mb-12">
          <SectionHeading heading={title} />
          <p className="mt-4 text-center text-sm text-foreground/40">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 font-serif text-xl font-semibold text-foreground/90">
                {section.title}
              </h2>
              <p className="leading-relaxed text-foreground/60 whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
