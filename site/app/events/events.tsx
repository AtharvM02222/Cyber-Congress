import { event } from "@/data/events";

export default function Events() {
  return (
    <div className="w-full flex flex-col bg-[var(--color-bg)] overflow-hidden">
      <div className="min-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-4 w-full border-t border-b border-[var(--color-border-dim)] relative">

        {/* Column 1 */}
        <div className="col-span-1 border-r border-[var(--color-border-dim)] p-8 flex flex-col relative min-h-[600px]">
          <h2 className="text-xl md:text-2xl font-black tracking-widest mb-24 z-10 text-[var(--color-text-muted)]">UPCOMING EVENT</h2>

          <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 whitespace-nowrap z-20 pointer-events-none">
            <div className="relative inline-block">
              <h1 className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter text-[var(--foreground)] mix-blend-multiply">
                {event.date}
              </h1>
              <svg className="absolute -inset-8 md:-inset-12 w-[calc(100%+4rem)] md:w-[calc(100%+6rem)] h-[calc(100%+4rem)] md:h-[calc(100%+6rem)] text-[var(--color-accent)] -z-10" viewBox="0 0 400 150" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40,75 C 40,10 360,10 360,75 C 360,140 40,140 40,75 Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="opacity-90" />
                <path d="M 35,70 C 45,15 355,15 365,80 C 355,135 45,135 35,70 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-60" />
                <path d="M 45,80 C 35,25 345,5 355,70 C 365,125 55,145 45,80 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
              </svg>
            </div>
          </div>

          <div className="mt-auto pt-24 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold max-w-[250px] leading-tight">
              {event.title}
            </h3>
            <div className="relative w-64 h-6 mt-2">
              <svg className="absolute inset-0 w-full h-full text-[var(--color-accent)]" viewBox="0 0 200 20" preserveAspectRatio="none" fill="none">
                <path d="M 0,10 Q 100,20 200,5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
                <path d="M 0,12 Q 100,22 200,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
              </svg>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-1 border-r border-[var(--color-border-dim)] p-8 flex flex-col z-10 hidden md:flex">
          <h4 className="event-label">Description</h4>
          <p className="text-lg leading-relaxed font-medium text-[var(--foreground)]">
            {event.description}
          </p>
        </div>

        {/* Column 3 */}
        <div className="col-span-1 border-r border-[var(--color-border-dim)] p-8 flex flex-col z-10 hidden md:flex">
          <h4 className="event-label">Theme</h4>
          <p className="text-lg leading-relaxed font-medium text-[var(--foreground)]">
            {event.theme ?? "TBA"}
          </p>
        </div>

        {/* Column 4 */}
        <div className="col-span-1 p-8 flex flex-col relative z-10 bg-[var(--color-bg)]">
          <svg className="absolute -top-16 -right-16 w-80 h-80 text-[var(--color-accent)] opacity-90 pointer-events-none hidden md:block" viewBox="0 0 200 200" fill="none">
            <path d="M 120,-20 Q 80,80 150,120 T 100,220" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 150,-40 Q 110,60 180,100 T 130,200" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 180,-60 Q 140,40 210,80 T 160,180" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="flex flex-col gap-6 font-semibold relative z-10 mb-24">
            {event.registerLink ? (
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="text-left text-xl font-black uppercase tracking-widest text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                Register Now
              </a>
            ) : (
              <span className="text-left text-xl font-black uppercase tracking-widest text-[var(--color-text-muted)]">
                Registrations Closed
              </span>
            )}
          </div>

          <div className="mt-auto flex flex-col gap-10 relative z-10">
            <div className="text-lg">
              <p className="event-label">Location</p>
              <p className="font-bold">{event.location ?? "TBA"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}