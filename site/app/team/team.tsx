import { teamMembers } from "@/data/team";
import { PageHeader } from "@/components/ui/page-header";
import { TeamCard } from "@/components/ui/team-card";
import { CornerDots, CornerSquiggles, CornerCrosses, CornerWiggles } from "@/components/ui/page-doodles";

export default function Team() {
  return (
    <div className="layout-standard">
      <CornerDots className="doodle-team-tl" />
      <CornerSquiggles className="doodle-team-br" />
      <CornerCrosses className="doodle-team-tr" />
      <CornerWiggles className="doodle-team-bl" />
      <div className="relative inline-block w-full">
        <PageHeader title="Team" actionText="Alumni" actionHref="/alumni" />
      </div>
      <div className="card-grid">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
