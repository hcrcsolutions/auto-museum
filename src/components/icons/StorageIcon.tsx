export default function StorageIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 7H4a1 1 0 00-1 1v4a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1zM20 15H4a1 1 0 00-1 1v2a1 1 0 001 1h16a1 1 0 001-1v-2a1 1 0 00-1-1zM6 3h12l2 4H4l2-4zM7 10h.01M7 17h.01"
      />
    </svg>
  );
}
