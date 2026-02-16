interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  headingAccent,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <span className="text-sm uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
        {heading}
        {headingAccent && <span className="text-gold"> {headingAccent}</span>}
      </h2>
      <div
        className={`relative mt-4 h-px w-20 ${centered ? "mx-auto" : ""}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute -inset-y-0.5 inset-x-2 bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-sm" />
      </div>
    </div>
  );
}
