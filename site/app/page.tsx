import { SwooshUnderline } from "@/components/ui/swoosh-underline";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] overflow-hidden">
      <div className="relative inline-block">
        <h1 className="w-full text-center font-black tracking-tighter leading-none text-[clamp(2.5rem,11vw,10rem)] relative z-10">CYBER_CONGRESS</h1>
        <SwooshUnderline className="absolute left-0 w-full text-[#5a7a5a] -z-10 bottom-[-1rem] h-6 sm:bottom-[-1.5rem] sm:h-10 md:bottom-[-2rem] md:h-16" />
      </div>
    </div>
  );
}
