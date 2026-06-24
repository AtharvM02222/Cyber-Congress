import Image from "next/image";
import { Mail } from "lucide-react";
import { teamMembers } from "@/data/team";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/page-header";

export default function Team() {
  return (
    <div className="page-container">
      <PageHeader title="Team" actionText="Alumni" actionHref="/alumni" />
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-card">

            <div className="team-card-img">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
              <div className="team-card-socials">
                {member.socials.linkedin?.trim() ? (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                    <LinkedinIcon size={14} />
                  </a>
                ) : null}
                {member.socials.github?.trim() ? (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                    <GithubIcon size={14} />
                  </a>
                ) : null}
                {member.socials.email?.trim() ? (
                  <a href={`mailto:${member.socials.email}`} className="social-btn" aria-label="Email">
                    <Mail size={14} />
                  </a>
                ) : null}
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
