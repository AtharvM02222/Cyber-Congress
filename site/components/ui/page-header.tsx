import Link from "next/link";

interface PageHeaderProps {
  title: string;
  actionText?: string;
  actionHref?: string;
}

export function PageHeader({ title, actionText, actionHref }: PageHeaderProps) {
  return (
    <div className="page-header-container">
      <h1 className="page-title !mb-0 !text-left !w-auto">{title}</h1>
      {actionText && actionHref && (
        <Link href={actionHref} className="nav-link-accent">
          {actionText}
        </Link>
      )}
    </div>
  );
}
