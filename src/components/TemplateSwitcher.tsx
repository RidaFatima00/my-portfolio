import { Link, useMatchRoute } from "@tanstack/react-router";

const templates = [
  { to: "/" as const, label: "01 / Editorial" },
  { to: "/neo" as const, label: "02 / Index" },
];

/**
 * Lets you jump between the portfolio templates. Uses only semantic tokens so
 * it reads correctly on every theme, and never wraps on its own line.
 */
export function TemplateSwitcher({ className = "" }: { className?: string }) {
  const matchRoute = useMatchRoute();

  return (
    <nav
      aria-label="Portfolio template"
      className={`inline-flex shrink-0 overflow-hidden rounded-md border border-border text-xs ${className}`}
    >
      {templates.map((t) => {
        const active = Boolean(matchRoute({ to: t.to, exact: true }));
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
