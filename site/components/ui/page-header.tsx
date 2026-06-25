import Link from "next/link";

interface PageHeaderProps {
  title: string;
  actionText?: string;
  actionHref?: string;
}

export function PageHeader({ title, actionText, actionHref }: PageHeaderProps) {
  return (
    <div className="page-header-wrap">
      <h1 className="page-header-title">{title}</h1>
      {actionText && actionHref && (
        <Link href={actionHref} className="page-header-link">
          {actionText} →
        </Link>
      )}
    </div>
  );
}
