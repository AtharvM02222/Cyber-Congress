import { CornerBurst, CornerWiggles, CornerCrosses, CornerDots } from "@/components/ui/page-doodles";

export default function Report() {
  return (
    <div className="layout-centered">
      <CornerBurst className="doodle-report-tr" />
      <CornerWiggles className="doodle-report-bl" />
      <CornerCrosses className="doodle-report-cr" />
      <CornerDots className="doodle-report-tl" />
      <div className="relative inline-block w-full text-center">
        <h1 className="heading-main">Report Any Incident</h1>
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
