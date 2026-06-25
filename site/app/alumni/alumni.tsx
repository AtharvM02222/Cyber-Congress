import { alumni } from "@/data/alumni";
import { PageHeader } from "@/components/ui/page-header";
import { AlumniCard } from "@/components/ui/alumni-card";
import { CornerZigZag, CornerBurst, CornerCrosses, CornerWiggles } from "@/components/ui/page-doodles";

export default function Alumni() {
  return (
    <div className="mx-auto max-w-5xl py-24 px-4 sm:px-6 relative w-full overflow-hidden">
      <CornerZigZag className="absolute top-12 right-12 w-48 h-48 text-[#5a7a5a] -z-10 opacity-30 hidden md:block rotate-12 pointer-events-none" />
      <CornerBurst className="absolute bottom-12 left-0 w-64 h-64 text-[#5a7a5a] -z-10 opacity-20 hidden md:block -rotate-12 pointer-events-none" />
      <CornerCrosses className="absolute top-1/2 left-8 w-32 h-32 text-[#5a7a5a] -z-10 opacity-30 hidden md:block pointer-events-none" />
      <CornerWiggles className="absolute top-[20%] -right-12 w-40 h-40 text-[#5a7a5a] -z-10 opacity-20 hidden md:block pointer-events-none" />
      <div className="relative inline-block w-full">
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
