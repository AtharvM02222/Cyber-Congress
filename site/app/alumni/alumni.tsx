import { alumni } from "@/data/alumni";
import { PageHeader } from "@/components/ui/page-header";
import { AlumniCard } from "@/components/ui/alumni-card";
import { CornerZigZag, CornerBurst, CornerCrosses, CornerWiggles } from "@/components/ui/page-doodles";

export default function Alumni() {
  return (
    <div className="layout-standard">
      <CornerZigZag className="doodle-alumni-tr" />
      <CornerBurst className="doodle-alumni-bl" />
      <CornerCrosses className="doodle-alumni-cl" />
      <CornerWiggles className="doodle-alumni-cr" />
      <div className="relative inline-block w-full">
        <PageHeader title="Alumni" actionText="Team" actionHref="/team" />
      </div>

      {alumni.length === 0 ? (
        <div className="text-center py-24 text-foreground/60 text-xl">
          Alumni records are currently being updated. Check back soon.
        </div>
      ) : (
        <div className="card-grid">
          {alumni.map((member) => (
            <AlumniCard key={member.id} {...member} />
          ))}
        </div>
      )}
    </div>
  );
}
