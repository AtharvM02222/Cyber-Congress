import Link from "next/link";
import { Radar, GraduationCap, ShieldAlert, ArrowRight } from "lucide-react";
import { event } from "@/data/events";
import { FloatingLogos } from "@/components/ui/floating-logos";

const pillars = [
  {
    title: "Awareness",
    icon: Radar,
    copy: "Campus-wide workshops, phishing simulations, and digital-hygiene drives that keep students and staff alert.",
  },
  {
    title: "Training",
    icon: GraduationCap,
    copy: "Hands-on labs in networking, web security basics, and CTFs — for members at every skill level.",
  },
  {
    title: "Response",
    icon: ShieldAlert,
    copy: "A direct channel to flag suspicious activity or breaches on school systems, triaged by the team.",
  },
];

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* HERO */}
      <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <FloatingLogos />

        <div className="relative z-10 flex flex-col items-center">
        <p className="event-label">
          Amity International School &middot; Sector 46 &middot; Gurugram
        </p>

        <div className="relative inline-block mt-2">
          <h1 className="text-[clamp(3rem,13vw,8rem)] font-black leading-none tracking-tight">
            CYBER_CONGRESS
          </h1>
          <div className="relative w-full h-3 sm:h-5 mt-3 sm:mt-5">
            <svg
              className="absolute inset-0 w-full h-full text-[var(--color-accent)]"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M 0,10 Q 100,20 200,5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="opacity-90" />
              <path d="M 0,12 Q 100,22 200,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
            </svg>
          </div>
        </div>

        <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed opacity-80">
          The cybersecurity society of AISG46 — run by students, for students.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/team" className="btn btn-primary">
            Meet the Team
          </Link>
          <Link href="/report" className="btn btn-outline">
            Report an Incident
          </Link>
        </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="w-full border-t border-b border-[var(--color-border-dim)]">
        <p className="event-label text-center pt-12">What We Do</p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`p-10 flex flex-col gap-4 border-[var(--color-border-dim)] ${
                i !== pillars.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
              }`}
            >
              <p.icon className="w-8 h-8 text-[var(--color-accent)]" strokeWidth={1.75} />
              <h3 className="text-lg font-bold uppercase tracking-wide">{p.title}</h3>
              <p className="text-base leading-relaxed opacity-80">{p.copy}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-12 pt-2">
          <Link href="/about" className="nav-link-accent text-base">
            About Us
          </Link>
        </div>
      </section>

      {/* UPCOMING EVENT TEASER */}
      <section className="page-container !py-20">
        <div className="panel flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="event-label">Next Up &mdash; {event.date}</p>
            <h2 className="text-2xl md:text-3xl font-bold">{event.title}</h2>
          </div>
          <Link href="/events" className="btn btn-outline whitespace-nowrap shrink-0">
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="w-full border-t border-[var(--color-border-dim)] py-20 px-6 flex flex-col items-center text-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold max-w-lg">
          Spotted something suspicious on campus systems?
        </h2>
        <p className="opacity-70 max-w-md">
          Report it — anonymously if you&apos;d like. We&apos;ll take it from there.
        </p>
        <Link href="/report" className="btn btn-primary mt-2">
          Report Now
        </Link>
      </section>
    </div>
  );
}
