export function SwooshUnderline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 20" preserveAspectRatio="none" fill="none">
      <path d="M 0,10 Q 100,20 200,5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-90" />
      <path d="M 0,12 Q 100,22 200,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
    </svg>
  );
}
