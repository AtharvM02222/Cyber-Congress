import { event } from "@/data/events";
import { SwooshUnderline } from "@/components/ui/swoosh-underline";
import { CornerSquiggles, CornerDots, CornerCrosses } from "@/components/ui/page-doodles";

export default function Events() {
  return (
    <div className="w-full flex flex-col bg-background overflow-hidden relative">
      <CornerSquiggles className="absolute top-1/4 left-0 w-64 h-64 text-[#5a7a5a] -z-10 opacity-20 hidden md:block rotate-90 pointer-events-none" />
      <CornerDots className="absolute top-3/4 right-0 w-56 h-56 text-[#5a7a5a] -z-10 opacity-30 hidden md:block pointer-events-none" />
      <CornerCrosses className="absolute bottom-1/4 left-12 w-40 h-40 text-[#5a7a5a] -z-10 opacity-20 hidden md:block pointer-events-none" />
      
      <div className="min-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-4 w-full border-y border-foreground/20 relative">

        {/* Column 1 — Date + Title */}
        <div className="border-r border-foreground/20 p-8 flex flex-col relative z-10 min-h-[600px]">
          <h2 className="text-xl md:text-2xl font-black tracking-widest mb-24 z-10 text-foreground/60">UPCOMING EVENT</h2>

          <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 whitespace-nowrap z-20 pointer-events-none">
            <div className="relative inline-block">
              <h1 className="text-[12vw] md:text-[8vw] font-black leading-none tracking-tighter text-foreground mix-blend-multiply">{event.date}</h1>
              <svg className="absolute -inset-8 md:-inset-12 w-[calc(100%+4rem)] md:w-[calc(100%+6rem)] h-[calc(100%+4rem)] md:h-[calc(100%+6rem)] text-[#5a7a5a] -z-10" viewBox="0 0 400 150" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40,75 C 40,10 360,10 360,75 C 360,140 40,140 40,75 Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="opacity-90" />
                <path d="M 35,70 C 45,15 355,15 365,80 C 355,135 45,135 35,70 Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-60" />
                <path d="M 45,80 C 35,25 345,5 355,70 C 365,125 55,145 45,80 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
              </svg>
            </div>
          </div>

          <div className="mt-auto pt-24 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold max-w-[250px] leading-[1.2]">{event.title}</h3>
            <SwooshUnderline className="block w-64 h-6 mt-2 text-[#5a7a5a]" />
          </div>
        </div>

        {/* Column 2 — Description */}
        <div className="hidden md:flex border-r border-foreground/20 p-8 flex-col relative z-10">
          <h4 className="text-xs font-bold mb-4 uppercase tracking-widest text-[#5a7a5a]">Description</h4>
          <p className="text-lg leading-relaxed font-medium text-foreground">{event.description}</p>
        </div>

        {/* Column 3 — Theme */}
        <div className="hidden md:flex border-r border-foreground/20 p-8 flex-col relative z-10">
          <h4 className="text-xs font-bold mb-4 uppercase tracking-widest text-[#5a7a5a]">Theme</h4>
          <p className="text-lg leading-relaxed font-medium text-foreground">{event.theme ?? "TBA"}</p>
        </div>

        {/* Column 4 — Register + Location */}
        <div className="p-8 flex flex-col relative z-10 bg-background border-r-0">
          <svg className="hidden md:block absolute -top-16 -right-16 w-80 h-80 text-[#5a7a5a] opacity-90 pointer-events-none" viewBox="0 0 200 200" fill="none">
            <path d="M 120,-20 Q 80,80 150,120 T 100,220" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 150,-40 Q 110,60 180,100 T 130,200" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 180,-60 Q 140,40 210,80 T 160,180" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="flex flex-col gap-6 font-semibold relative z-10 mb-24">
            {event.registerLink ? (
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="text-xl font-black uppercase tracking-widest text-[#5a7a5a] transition-opacity hover:opacity-80">
                Register Now
              </a>
            ) : (
              <span className="text-xl font-black uppercase tracking-widest text-foreground/60">Registrations Closed</span>
            )}
          </div>

          <div className="mt-auto flex flex-col gap-10 relative z-10">
            <div>
              <p className="text-xs font-bold mb-4 uppercase tracking-widest text-[#5a7a5a]">Location</p>
              <p className="font-bold text-lg">{event.location ?? "TBA"}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}