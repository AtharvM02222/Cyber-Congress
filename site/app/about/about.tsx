import { AboutDoodle } from "@/components/ui/page-doodles";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] w-full max-w-5xl mx-auto py-12 px-4">
      <div className="w-full p-8 md:p-12 border-2 border-foreground/10 bg-foreground/5 rounded-xl shadow-sm text-left relative overflow-hidden z-10">
        <AboutDoodle className="about-deco" />
        <div className="space-y-8 relative z-10">
          <p className="prompt text-2xl sm:text-3xl md:text-4xl leading-relaxed">
            The cybersecurity society of Amity International School, Sector 46, Gurugram.
          </p>
          <p className="prompt text-xl sm:text-2xl md:text-3xl leading-relaxed opacity-80">
            Awareness, hands-on training, and incident response — run by students, for students.
          </p>
        </div>
      </div>
    </div>
  );
}
