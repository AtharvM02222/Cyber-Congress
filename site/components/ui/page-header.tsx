import Link from "next/link";

interface PageHeaderProps {
  title: string;
  actionText?: string;
  actionHref?: string;
}

export function PageHeader({ title, actionText, actionHref }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-end mb-8 border-b-2 border-foreground/20 pb-4">
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-left m-0">{title}</h1>
      {actionText && actionHref && (
        <Link href={actionHref} className="text-xl font-bold uppercase tracking-widest text-foreground/60 transition-colors duration-200 hover:text-[#5a7a5a]">
          {actionText}
        </Link>
      )}
    </div>
  );
}
