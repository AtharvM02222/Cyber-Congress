import { SwooshUnderline } from "@/components/ui/swoosh-underline";
import { CornerSquiggles, CornerZigZag, CornerDots, CornerCrosses } from "@/components/ui/page-doodles";

export default function HomePage() {
  return (
    <div className="layout-hero">
      <CornerSquiggles className="doodle-home-tl" />
      <CornerZigZag className="doodle-home-br" />
      <CornerDots className="doodle-home-cr" />
      <CornerCrosses className="doodle-home-bl" />
      <div className="relative inline-block">
        <h1 className="heading-hero">CYBER_CONGRESS</h1>
        <SwooshUnderline className="absolute left-0 w-full text-[#5a7a5a] -z-10 bottom-[-1rem] h-6 sm:bottom-[-1.5rem] sm:h-10 md:bottom-[-2rem] md:h-16" />
      </div>
    </div>
  );
}
