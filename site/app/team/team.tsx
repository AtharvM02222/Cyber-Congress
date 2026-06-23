import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <h1 className="page-title text-left">Team</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">
            {/* Photo */}
            <div className="team-card-img">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              {/* Socials on hover */}
              <div className="team-card-socials">
                {member.socials.linkedin && (
                  <Link href={member.socials.linkedin} target="_blank" className="social-btn" aria-label="LinkedIn">
                    <Linkedin size={15} />
                  </Link>
                )}
                {member.socials.github && (
                  <Link href={member.socials.github} target="_blank" className="social-btn" aria-label="GitHub">
                    <Github size={15} />
                  </Link>
                )}
                {member.socials.email && (
                  <Link href={`mailto:${member.socials.email}`} className="social-btn" aria-label="Email">
                    <Mail size={15} />
                  </Link>
                )}
              </div>
            </div>

            {/* Info */}
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
