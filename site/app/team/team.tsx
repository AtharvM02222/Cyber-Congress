import { teamMembers } from "@/data/team";
import { PageHeader } from "@/components/ui/page-header";
import { TeamCard } from "@/components/ui/team-card";
import { CornerDots, CornerSquiggles, CornerCrosses, CornerWiggles } from "@/components/ui/page-doodles";

export default function Team() {
  return (
    <div className="mx-auto max-w-5xl py-24 px-4 sm:px-6 relative w-full overflow-hidden">
      <CornerDots className="absolute top-8 left-8 w-40 h-40 text-[#5a7a5a] -z-10 opacity-30 hidden md:block pointer-events-none" />
      <CornerSquiggles className="absolute bottom-20 right-0 w-64 h-64 text-[#5a7a5a] -z-10 opacity-20 hidden md:block rotate-45 pointer-events-none" />
      <CornerCrosses className="absolute top-1/3 -right-8 w-48 h-48 text-[#5a7a5a] -z-10 opacity-20 hidden md:block pointer-events-none" />
      <CornerWiggles className="absolute top-2/3 left-0 w-56 h-56 text-[#5a7a5a] -z-10 opacity-30 hidden md:block -rotate-45 pointer-events-none" />
      <div className="relative inline-block w-full">
        <PageHeader title="Team" actionText="Alumni" actionHref="/alumni" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 w-full">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
