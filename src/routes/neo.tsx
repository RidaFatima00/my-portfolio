import { createFileRoute } from "@tanstack/react-router";

import { TemplateSwitcher } from "@/components/TemplateSwitcher";

export const Route = createFileRoute("/neo")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Portfolio, Template 02 (Terminal Index)" },
      {
        name: "description",
        content:
          "A dark, technical portfolio template: numbered project index, capabilities list and contact.",
      },
      { property: "og:title", content: "Alex Morgan — Terminal Index" },
      {
        property: "og:description",
        content: "A dark, technical portfolio template with a numbered project index.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Neo,
});

const projects = [
  { n: "01", title: "Northwind Rebrand", tag: "Brand Identity", year: "2026" },
  { n: "02", title: "Fieldnote App", tag: "Product Design", year: "2025" },
  { n: "03", title: "Atlas Commerce", tag: "Web Development", year: "2025" },
  { n: "04", title: "Kiln Studio", tag: "Art Direction", year: "2024" },
];

const capabilities = [
  ["Brand identity", "Naming, marks, systems, guidelines"],
  ["Web design", "Marketing sites, editorial layouts"],
  ["Front-end", "React, TypeScript, design systems"],
  ["Art direction", "Campaigns, photography, motion"],
];

const ticker = [
  "Brand identity",
  "Web design",
  "Front-end development",
  "Design systems",
  "Art direction",
];

function Neo() {
  return (
    <div className="theme-neo min-h-screen bg-background font-neo text-foreground">
      <header className="flex items-center justify-between gap-4 border-b border-border px-6 py-4 md:px-10">
        <span className="font-neo-mono text-xs uppercase tracking-[0.25em]">
          Alex&nbsp;Morgan
        </span>
        <nav className="hidden gap-6 font-neo-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#work" className="hover:text-primary">Work</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <TemplateSwitcher />
      </header>

      <section className="relative flex min-h-[80svh] flex-col justify-between overflow-hidden px-6 py-16 md:px-10">
        <div aria-hidden className="neo-grid pointer-events-none absolute inset-0 opacity-70" />
        <p className="relative flex items-center gap-3 font-neo-mono text-xs uppercase tracking-[0.25em] text-primary">
          <span className="inline-block size-2 animate-pulse rounded-full bg-primary" />
          Available — Q1 2026
        </p>
        <h1 className="relative mt-12 text-[clamp(3rem,11vw,10rem)] leading-[0.85] font-medium uppercase tracking-tight">
          Design
          <br />
          <span className="text-primary">&amp;</span> Build
        </h1>
        <div className="relative mt-12 grid gap-8 border-t border-border pt-8 font-neo-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:grid-cols-3">
          <p>Independent designer &amp; developer</p>
          <p>Karachi — working worldwide</p>
          <p>Ten years, three continents</p>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-secondary py-3">
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap font-neo-mono text-xs uppercase tracking-[0.25em] text-secondary-foreground">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
              <span aria-hidden className="text-primary">/</span>
            </span>
          ))}
        </div>
      </div>

      <section id="work" className="px-6 py-16 md:px-10">
        <h2 className="mb-8 font-neo-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Selected work
        </h2>
        <div className="border-t border-border">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className="group grid grid-cols-[auto_1fr] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-secondary md:grid-cols-[auto_1fr_auto] md:gap-8 md:py-8"
            >
              <span className="font-neo-mono text-xs text-primary">{p.n}</span>
              <span className="text-2xl uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
                {p.title}
              </span>
              <span className="col-start-2 font-neo-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-start-auto">
                {p.tag} · {p.year}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="grid gap-10 border-t border-border px-6 py-16 md:grid-cols-2 md:px-10">
        <p className="max-w-md text-2xl leading-snug md:text-4xl">
          I make brands and products that hold up under scrutiny — from the first
          sketch to the last shipped component.
        </p>
        <ul className="self-end">
          {capabilities.map(([name, note], i) => (
            <li
              key={name}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-border py-4 first:border-t-0"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-neo-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="text-lg uppercase tracking-tight md:text-2xl">{name}</span>
              </span>
              <span className="font-neo-mono text-xs text-muted-foreground">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="border-t border-border px-6 py-20 md:px-10">
        <p className="mb-6 font-neo-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Let's talk
        </p>
        <a
          href="mailto:hello@example.com"
          className="text-[clamp(2rem,8vw,6rem)] leading-none uppercase tracking-tight text-primary underline-offset-8 hover:underline"
        >
          hello@example.com
        </a>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-border pt-6 font-neo-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>© 2026 Alex Morgan</span>
          <span>Template 02 — Terminal Index</span>
        </div>
      </section>
    </div>
  );
}
