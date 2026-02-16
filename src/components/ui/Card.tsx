interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-foreground/5 bg-charcoal-dark/30 p-8 ${
        hover
          ? "transition-all duration-300 hover:border-gold/20 hover:bg-charcoal-dark/60"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
