export default function MuseumIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3L2 9h20L12 3zM4 9v10h16V9M9 19v-4h6v4M4 19h16"
      />
    </svg>
  );
}
