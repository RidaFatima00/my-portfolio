import { createFileRoute } from "@tanstack/react-router";

import { TemplateSwitcher } from "@/components/TemplateSwitcher";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Designer & Developer Portfolio" },
      { name: "description", content: "Selected work, services and contact for Alex Morgan, independent designer and developer." },
      { property: "og:title", content: "Alex Morgan — Portfolio" },
      { property: "og:description", content: "Selected work, services and contact for Alex Morgan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { title: "Northwind Rebrand", tag: "Brand Identity", year: "2026" },
  { title: "Fieldnote App", tag: "Product Design", year: "2025" },
  { title: "Atlas Commerce", tag: "Web Development", year: "2025" },
  { title: "Kiln Studio", tag: "Art Direction", year: "2024" },
];

const services = ["Brand identity", "Web design", "Front-end development", "Design systems"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl">Alex Morgan</span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-primary">Work</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <TemplateSwitcher />
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-primary">Available for projects — 2026</p>
        <h1 className="font-display text-6xl leading-[0.95] md:text-8xl">
          Designing calm,<br /><em className="text-primary">considered</em> digital work.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Independent designer & developer helping studios and startups build brands and products people remember.
        </p>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-sm uppercase tracking-[0.2em] text-muted-foreground">Selected work</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.title} className="group cursor-pointer">
              <div className={`aspect-[4/3] rounded-sm transition-transform duration-500 group-hover:scale-[0.98] ${i % 2 ? "bg-secondary" : "bg-accent"}`} />
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{p.title}</h3>
                <span className="text-sm text-muted-foreground">{p.tag} · {p.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">About</h2>
          <p className="font-display text-3xl leading-snug">
            Ten years shaping identities and interfaces for clients across three continents.
          </p>
        </div>
        <ul className="divide-y divide-border self-end border-y border-border">
          {services.map((s) => (
            <li key={s} className="py-4 text-lg">{s}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] opacity-70">Let's talk</p>
          <a href="mailto:hello@example.com" className="font-display text-5xl underline-offset-8 hover:underline md:text-7xl">
            hello@example.com
          </a>
          <p className="mt-16 text-sm opacity-70">© 2026 Alex Morgan</p>
        </div>
      </section>
    </div>
  );
}
