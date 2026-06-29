"use client";
import { useState } from "react";
import Link from "next/link";
import { Home, User, Calendar, Users, FileText, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoIcon from "@/assets/logo/logo-icon";

const navItems = {
  left: [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Events", href: "/events", icon: Calendar },
  ],
  right: [
    { label: "Team", href: "/team", icon: Users },
    { label: "Report", href: "/report", icon: FileText },
  ],
};

const NavLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => (
  <Link
    href={href}
    className="group flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
  >
    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
    <span>{label}</span>
  </Link>
);

export function NotchNavbar({
  className,
  logo,
}: React.HTMLAttributes<HTMLElement> & { logo?: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn("fixed top-0 inset-x-0 z-50 h-16 flex px-0", className)}
      >
        <div className="flex-1 h-10 bg-white z-20 relative min-w-0">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeWidth={0.5}
              className="text-foreground"
            />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeWidth={0.5}
              className="text-foreground"
            />
          </svg>
        </div>

        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          <div className="w-[50px] h-full relative shrink-0">
            <div
              className="absolute inset-0 bg-white"
              style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }}
            />
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 50 64"
            >
              <path
                d="M0 39.5 C25 39.5 25 63.5 50 63.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.05}
                strokeWidth={0.5}
                className="text-foreground"
              />
              <path
                d="M0 36.5 C25 36.5 25 60.5 50 60.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.05}
                strokeWidth={0.5}
                className="text-foreground"
              />
            </svg>
          </div>

          <div className="flex-1 h-full relative min-w-0 -ml-px">
            <div className="absolute inset-0 bg-white">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="63.5"
                  x2="100%"
                  y2="63.5"
                  stroke="currentColor"
                  strokeOpacity={0.05}
                  strokeWidth={0.5}
                  className="text-foreground"
                />
                <line
                  x1="0"
                  y1="60.5"
                  x2="100%"
                  y2="60.5"
                  stroke="currentColor"
                  strokeOpacity={0.05}
                  strokeWidth={0.5}
                  className="text-foreground"
                />
              </svg>
            </div>
            <div className="relative w-full h-full flex items-end justify-between pb-2 px-4 md:px-8">
              <nav className="hidden md:flex gap-8 mb-1 shrink-0">
                {navItems.left.map((item) => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>
              <button
                className="md:hidden mb-1 p-1 text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
              <div className="flex justify-center shrink-0 mx-2 md:mx-4 mt-1">
                {logo ?? (
                  <Link href="/" className="flex items-center justify-center">
                    <LogoIcon className="w-7 h-7 text-foreground rotate-180 hover:scale-105 transition-transform" />
                  </Link>
                )}
              </div>
              <nav className="hidden md:flex gap-8 mb-1 shrink-0">
                {navItems.right.map((item) => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>
            </div>
          </div>

          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            <div
              className="absolute inset-0 bg-white"
              style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }}
            />
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 50 64"
            >
              <path
                d="M0 63.5 C25 63.5 25 39.5 50 39.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.05}
                strokeWidth={0.5}
                className="text-foreground"
              />
              <path
                d="M0 60.5 C25 60.5 25 36.5 50 36.5"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.05}
                strokeWidth={0.5}
                className="text-foreground"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 h-10 bg-white z-20 relative min-w-0 -ml-px">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeWidth={0.5}
              className="text-foreground"
            />
            <line
              x1="0"
              y1="36.5"
              x2="100%"
              y2="36.5"
              stroke="currentColor"
              strokeOpacity={0.05}
              strokeWidth={0.5}
              className="text-foreground"
            />
          </svg>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white border-b border-foreground/5 p-4 md:hidden shadow-lg">
          <nav className="flex flex-col gap-2">
            {[...navItems.left, ...navItems.right].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 opacity-70" />
                <span className="font-medium text-foreground/90">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
