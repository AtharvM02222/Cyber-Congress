import Link from "next/link";
import { alumni } from "@/data/alumni";

export default function Alumni() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <div className="flex justify-between items-end mb-8 border-b-2 border-[var(--color-border)] pb-4">
        <h1 className="page-title !mb-0 !text-left !w-auto">Alumni</h1>
        <Link href="/team" className="text-xl md:text-2xl font-bold hover:text-[var(--color-accent)] transition-colors uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
          Team
        </Link>
      </div>
      
      {alumni.length === 0 ? (
        <div className="text-center py-24 text-[var(--color-text-muted)]">
          <p className="text-xl">Alumni details coming soon...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((member) => (
            <div key={member.id} className="team-card p-6 flex flex-col justify-between min-h-[160px]">
              <div>
                <h3 className="text-2xl font-bold text-[var(--foreground)]">{member.name}</h3>
                <p className="text-[var(--color-accent)] font-semibold mt-1">{member.role}</p>
              </div>
              <div className="mt-4 flex justify-between items-end">
                <span className="text-sm text-[var(--color-text-muted)] tracking-widest uppercase font-bold">Class of</span>
                <span className="text-3xl font-black text-[var(--color-border-dim)]">{member.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
