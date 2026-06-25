interface AlumniCardProps {
  name: string;
  role: string;
  year: string | number;
}

export function AlumniCard({ name, role, year }: AlumniCardProps) {
  return (
    <div className="card">
      <div className="card-image-wrap">
        <div className="w-full h-full bg-foreground/10 flex items-center justify-center text-3xl font-bold text-foreground/20">
          {name.charAt(0)}
        </div>
      </div>
      <h3 className="card-title">{name}</h3>
      <p className="card-subtitle">{role}</p>
      <span className="card-tag">Class of {year}</span>
    </div>
  );
}
