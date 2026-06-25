import { teamMembers } from "@/data/team";
import { PageHeader } from "@/components/ui/page-header";
import { TeamCard } from "@/components/ui/team-card";
import { CornerDots } from "@/components/ui/page-doodles";

export default function Team() {
  return (
    <div className="mx-auto max-w-5xl py-24 px-4 sm:px-6">
      <div className="relative inline-block w-full">
        <CornerDots className="team-deco" />
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
