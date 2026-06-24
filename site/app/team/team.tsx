import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { teamMembers } from "@/data/team";

const GithubIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Team() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <div className="flex justify-between items-end mb-8 border-b-2 border-[var(--color-border)] pb-4">
        <h1 className="page-title !mb-0 !text-left !w-auto">Team</h1>
        <Link href="/alumni" className="text-xl md:text-2xl font-bold hover:text-[var(--color-accent)] transition-colors uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
          Alumni
        </Link>
      </div>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">

            <div className="team-card-img">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
              <div className="team-card-socials">
                {member.socials.linkedin && (
                  <Link href={member.socials.linkedin} target="_blank" className="social-btn" aria-label="LinkedIn">
                    <LinkedinIcon size={14} />
                  </Link>
                )}
                {member.socials.github && (
                  <Link href={member.socials.github} target="_blank" className="social-btn" aria-label="GitHub">
                    <GithubIcon size={14} />
                  </Link>
                )}
                {member.socials.email && (
                  <Link href={`mailto:${member.socials.email}`} className="social-btn" aria-label="Email">
                    <Mail size={14} />
                  </Link>
                )}
              </div>
            </div>

            <div className="team-card-info">
              <p className="team-card-name">{member.name}</p>
              <p className="team-card-role">{member.role}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
