import { CornerBurst, CornerWiggles, CornerCrosses, CornerDots } from "@/components/ui/page-doodles";

export default function Report() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] w-full max-w-5xl mx-auto py-12 px-4 relative overflow-hidden">
      <CornerBurst className="absolute top-0 right-0 w-56 h-56 text-[#5a7a5a] -z-10 opacity-30 hidden md:block pointer-events-none" />
      <CornerWiggles className="absolute bottom-0 left-0 w-64 h-64 text-[#5a7a5a] -z-10 opacity-30 hidden md:block -rotate-90 pointer-events-none" />
      <CornerCrosses className="absolute top-1/2 right-12 w-40 h-40 text-[#5a7a5a] -z-10 opacity-20 hidden md:block pointer-events-none" />
      <CornerDots className="absolute top-1/4 left-12 w-32 h-32 text-[#5a7a5a] -z-10 opacity-20 hidden md:block pointer-events-none" />
      <div className="relative inline-block w-full text-center">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight mb-8">Report Any Incident</h1>
      </div>
      <div className="w-full max-w-3xl aspect-[3/4] sm:aspect-[4/5] bg-foreground/5 rounded-xl overflow-hidden border border-foreground/10 flex justify-center relative z-10">
        <iframe
          src="https://forms.gle/gGrJbSzwdtF2AdDz7"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Report Form"
        >
          Loading form...
        </iframe>
      </div>
    </div>
  );
}
