import type { TeamMember } from "@/lib/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

interface TeamGridProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  members: TeamMember[];
  dark?: boolean;
}

export default function TeamGrid({
  eyebrow,
  heading,
  headingAccent,
  members,
  dark = false,
}: TeamGridProps) {
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border border-foreground/5 bg-charcoal-dark/30 p-8 text-center transition-all duration-300 hover:border-gold/20"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
                <span className="font-serif text-2xl font-bold text-gold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-gold">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
