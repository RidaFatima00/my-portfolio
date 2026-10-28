import { Link, useRouterState } from "@tanstack/react-router";

const templates = [
  { to: "/" as const, label: "01 / Graphite" },
  { to: "/neo" as const, label: "02 / Studio" },
];

/**
 * Lets you jump between the two portfolio themes. Uses only semantic tokens so
 * it reads correctly on both, and never wraps onto its own line.
 */
export function TemplateSwitcher({ className = "" }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Portfolio theme"
      className={`inline-flex shrink-0 overflow-hidden rounded-md border border-border text-xs ${className}`}
    >
      {templates.map((t) => {
        const active = pathname === t.to;
        return (
          <Link
            key={t.to}
            to={t.to}
            aria-current={active ? "page" : undefined}
            className={`px-3 py-1.5 font-sans uppercase tracking-[0.15em] transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
