import { alumni } from "@/data/alumni";
import { PageHeader } from "@/components/ui/page-header";
import { AlumniCard } from "@/components/ui/alumni-card";
import { AlumniDoodle } from "@/components/ui/page-doodles";

export default function Alumni() {
  return (
    <div className="mx-auto max-w-5xl py-24 px-4 sm:px-6">
      <div className="relative inline-block w-full">
        <AlumniDoodle className="alumni-deco" />
        <PageHeader title="Alumni" actionText="Team" actionHref="/team" />
      </div>

      {alumni.length === 0 ? (
        <div className="text-center py-24 text-foreground/60 text-xl">
          <p>Alumni details coming soon...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((member) => (
            <AlumniCard key={member.id} {...member} />
          ))}
        </div>
      )}
    </div>
  );
}
