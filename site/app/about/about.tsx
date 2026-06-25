import { CornerSquiggles, CornerWiggles, CornerDots, CornerBurst } from "@/components/ui/page-doodles";

export default function About() {
  return (
    <div className="layout-centered">
      <CornerSquiggles className="doodle-tl" />
      <CornerWiggles className="doodle-br" />
      <CornerDots className="doodle-cr" />
      <div className="panel-container">
        <CornerBurst className="doodle-panel-tr" />
        <div className="space-y-8 relative z-10">
          <p className="text-prompt-large">
            The cybersecurity society of Amity International School, Sector 46, Gurugram.
          </p>
          <p className="text-prompt-medium">
            Awareness, hands-on training, and incident response — run by students, for students.
          </p>
        </div>
      </div>
    </div>
  );
}
