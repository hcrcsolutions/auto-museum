interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export default function Container({
  children,
  className = "",
  wide = false,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-6 ${wide ? "max-w-7xl" : "max-w-5xl"} ${className}`}
    >
      {children}
    </div>
  );
}
