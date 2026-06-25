import { SwooshUnderline } from "@/components/ui/swoosh-underline";
import { CornerSquiggles, CornerZigZag, CornerDots, CornerCrosses } from "@/components/ui/page-doodles";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] overflow-hidden relative w-full">
      <CornerSquiggles className="absolute top-0 md:top-8 left-0 md:left-8 w-32 md:w-64 h-32 md:h-64 text-[#5a7a5a] -z-10 hidden md:block opacity-60" />
      <CornerZigZag className="absolute bottom-0 md:bottom-8 right-0 md:right-8 w-32 md:w-48 h-32 md:h-48 text-[#5a7a5a] -z-10 hidden md:block opacity-60" />
      <CornerDots className="absolute top-1/4 right-[10%] w-32 md:w-48 h-32 md:h-48 text-[#5a7a5a] -z-10 hidden md:block opacity-40" />
      <CornerCrosses className="absolute bottom-1/4 left-[10%] w-24 md:w-40 h-24 md:h-40 text-[#5a7a5a] -z-10 hidden md:block opacity-30" />
      <div className="relative inline-block">
        <h1 className="w-full text-center font-black tracking-tighter leading-none text-[clamp(2.5rem,11vw,10rem)] relative z-10">CYBER_CONGRESS</h1>
        <SwooshUnderline className="absolute left-0 w-full text-[#5a7a5a] -z-10 bottom-[-1rem] h-6 sm:bottom-[-1.5rem] sm:h-10 md:bottom-[-2rem] md:h-16" />
      </div>
    </div>
  );
}
