import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

interface Socials {
  linkedin?: string;
  github?: string;
  email?: string;
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  socials: Socials;
}

export function TeamCard({ name, role, image, socials }: TeamCardProps) {
  return (
    <div className="card">
      <div className="card-image-wrap">
        <Image src={image} alt={name} fill className="card-image" />
        <div className="card-socials">
          {socials.linkedin?.trim() && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="card-social-link" aria-label="LinkedIn">
              <LinkedinIcon size={14} />
            </a>
          )}
          {socials.github?.trim() && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="card-social-link" aria-label="GitHub">
              <GithubIcon size={14} />
            </a>
          )}
          {socials.email?.trim() && (
            <a href={`mailto:${socials.email}`} className="card-social-link" aria-label="Email">
              <Mail size={14} />
            </a>
          )}
        </div>
      </div>
      <div className="card-content">
        <p className="card-title">{name}</p>
        <p className="card-subtitle">{role}</p>
      </div>
    </div>
  );
}
