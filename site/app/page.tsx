export default function HomePage() {
  return (
    <div className="page-container flex min-h-[70vh] flex-col items-center justify-center overflow-hidden">
      <div className="relative inline-block">
        <h1 className="w-full text-center font-black tracking-tighter text-[clamp(2.5rem,11vw,10rem)] leading-none relative z-10">
          CYBER_CONGRESS
        </h1>
        <svg className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 left-0 w-full h-6 sm:h-10 md:h-16 text-[var(--color-accent)] -z-10" viewBox="0 0 200 20" preserveAspectRatio="none" fill="none">
          <path d="M 0,10 Q 100,20 200,5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-90" />
          <path d="M 0,12 Q 100,22 200,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
        </svg>
      </div>
    </div>
  );
}
