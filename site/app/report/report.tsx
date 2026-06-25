import { CornerBurst } from "@/components/ui/page-doodles";

export default function Report() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] w-full max-w-5xl mx-auto py-12 px-4">
      <div className="relative inline-block w-full text-center">
        <CornerBurst className="report-deco" />
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
