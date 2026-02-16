interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "muted";
  pulse?: boolean;
}

export default function Badge({
  children,
  variant = "gold",
  pulse = false,
}: BadgeProps) {
  const colors =
    variant === "gold"
      ? "border-gold/30 bg-gold/5 text-gold"
      : "border-foreground/10 bg-foreground/5 text-foreground/60";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-[0.2em] backdrop-blur-sm ${colors}`}
    >
      {pulse && (
        <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
      )}
      {children}
    </span>
  );
}
