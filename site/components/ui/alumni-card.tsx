interface AlumniCardProps {
  name: string;
  role: string;
  year: string;
}

export function AlumniCard({ name, role, year }: AlumniCardProps) {
  return (
    <div className="p-6 flex flex-col justify-between min-h-[160px] rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div>
        <h3 className="text-2xl font-bold text-foreground">{name}</h3>
        <p className="text-[#5a7a5a] font-semibold mt-1">{role}</p>
      </div>
      <div className="flex justify-between items-end mt-4">
        <span className="text-xs text-foreground/60 tracking-widest uppercase font-bold">Class of</span>
        <span className="text-3xl font-black text-foreground/30">{year}</span>
      </div>
    </div>
  );
}
