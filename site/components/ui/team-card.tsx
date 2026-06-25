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
    <div className="rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute top-2.5 right-2.5 flex gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {socials.linkedin?.trim() && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[1.9rem] h-[1.9rem] bg-black/50 text-white rounded-md backdrop-blur-md transition-colors hover:bg-black/80" aria-label="LinkedIn">
              <LinkedinIcon size={14} />
            </a>
          )}
          {socials.github?.trim() && (
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[1.9rem] h-[1.9rem] bg-black/50 text-white rounded-md backdrop-blur-md transition-colors hover:bg-black/80" aria-label="GitHub">
              <GithubIcon size={14} />
            </a>
          )}
          {socials.email?.trim() && (
            <a href={`mailto:${socials.email}`} className="flex items-center justify-center w-[1.9rem] h-[1.9rem] bg-black/50 text-white rounded-md backdrop-blur-md transition-colors hover:bg-black/80" aria-label="Email">
              <Mail size={14} />
            </a>
          )}
        </div>
      </div>
      <div className="p-3 pb-4 px-4">
        <p className="text-base font-bold text-foreground">{name}</p>
        <p className="text-xs text-foreground/60 mt-0.5">{role}</p>
      </div>
    </div>
  );
}
