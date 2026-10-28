import { createFileRoute } from "@tanstack/react-router";

import { TemplateSwitcher } from "@/components/TemplateSwitcher";
import {
  channels,
  facts,
  ledger,
  portraitImage,
  profile,
  projects,
  skills,
} from "@/lib/portfolio";

export const Route = createFileRoute("/neo")({
  head: () => ({
    meta: [
      { title: "Rida Fatima — Portfolio, Theme 02 (Studio)" },
      {
        name: "description",
        content:
          "A light studio take on Rida Fatima's front-end portfolio: seven live projects, skills and contact.",
      },
      { name: "author", content: profile.name },
      { property: "og:title", content: "Rida Fatima — Portfolio, Studio theme" },
      {
        property: "og:description",
        content: "A light studio take on a front-end portfolio: seven live projects on Netlify.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Studio,
});

const ticker = ["HTML5", "CSS3", "CSS Grid", "Flexbox", "Bootstrap", "Responsive", "Netlify"];

function Studio() {
  return (
    <div className="theme-neo min-h-screen bg-background font-neo text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <span className="grid size-8 place-items-center rounded-md bg-primary font-neo-mono text-sm text-primary-foreground">
              {profile.mark}
            </span>
            <span className="text-lg font-semibold tracking-tight">{profile.name}</span>
          </a>
          <nav className="hidden gap-7 font-neo-mono text-xs tracking-[0.18em] text-muted-foreground uppercase md:flex">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#work" className="hover:text-primary">Work</a>
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <TemplateSwitcher />
            <a
              href={`mailto:${profile.email}`}
              className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground no-underline transition-opacity hover:opacity-90 md:inline-flex"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-border px-4 py-1.5 font-neo-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              {profile.role}
            </p>

            <figure className="relative m-0 w-full max-w-[560px]">
              <div className="aspect-4/5 overflow-hidden rounded-3xl border border-border bg-secondary">
                <img
                  src={portraitImage.src}
                  alt={portraitImage.alt}
                  width={800}
                  height={1000}
                  className="size-full object-cover"
                />
              </div>
              <span aria-hidden className="absolute inset-0 rounded-3xl bg-primary/55" />
              <figcaption className="absolute inset-0 grid place-items-center px-6">
                <div className="drop-shadow-lg">
                  <span className="block font-neo-mono text-[11px] tracking-[0.34em] text-primary-foreground/85 uppercase md:text-sm">
                    My Portfolio
                  </span>
                  <span className="mt-4 block text-[clamp(40px,9vw,76px)] leading-[0.95] font-semibold tracking-tight text-primary-foreground">
                    Rida <span className="text-accent">Fatima</span>
                  </span>
                </div>
              </figcaption>
            </figure>

            <p className="mt-8 max-w-[48ch] text-lg text-muted-foreground">{profile.lede}</p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#work"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground no-underline transition-opacity hover:opacity-90"
              >
                View my work →
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener"
                className="rounded-lg border border-border px-5 py-3 text-sm font-semibold no-underline hover:border-primary hover:text-primary"
              >
                GitHub
              </a>
              <a
                href={profile.netlify}
                target="_blank"
                rel="noopener"
                className="rounded-lg border border-border px-5 py-3 text-sm font-semibold no-underline hover:border-primary hover:text-primary"
              >
                Netlify
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
            {ledger.map((l) => (
              <div key={l.label} className="bg-background p-6">
                <span className="font-neo-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {l.label}
                </span>
                <div className="mt-2 text-xl font-semibold tracking-tight">{l.value}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="overflow-hidden border-y border-border bg-secondary py-3">
          <div className="flex w-max animate-ticker gap-10 whitespace-nowrap font-neo-mono text-xs tracking-[0.25em] text-secondary-foreground uppercase">
            {[...ticker, ...ticker].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                {item}
                <span aria-hidden className="text-primary">/</span>
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[200px_1fr_1fr]">
            <div className="font-neo-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              01 — About
            </div>
            <p className="m-0 max-w-[30ch] text-2xl leading-snug font-semibold tracking-tight md:text-3xl">
              {profile.statement}
            </p>
            <div>
              <p className="mb-6 max-w-[46ch] text-muted-foreground">{profile.note}</p>
              <ul className="m-0 list-none p-0">
                {facts.map((f) => (
                  <li
                    key={f.label}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-border py-3 text-sm"
                  >
                    <span className="font-neo-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                      {f.label}
                    </span>
                    <span className="font-medium">
                      {f.href ? (
                        <a
                          href={f.href}
                          target={f.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener"
                          className="no-underline hover:text-primary"
                        >
                          {f.value}
                        </a>
                      ) : (
                        f.value
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-y border-border bg-secondary/70 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <h2 className="m-0 text-[clamp(34px,5vw,64px)] leading-none font-semibold tracking-tight text-balance">
                Built by hand, <span className="text-primary">shipped</span> live.
              </h2>
              <span className="font-neo-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                02 — Selected work
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((p) => (
                <article key={p.title} className="group">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Open ${p.title}`}
                      className="block overflow-hidden rounded-xl border border-border bg-card no-underline"
                    >
                      <img
                        src={p.image.src}
                        alt={p.image.alt}
                        loading="lazy"
                        className="aspect-16/10 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </a>
                  ) : (
                    <div className="overflow-hidden rounded-xl border border-border bg-card">
                      <img
                        src={p.image.src}
                        alt={p.image.alt}
                        loading="lazy"
                        className="aspect-16/10 w-full object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="m-0 text-xl font-semibold tracking-tight">{p.title}</h3>
                    <span className="font-neo-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                      {p.n} · {p.tech}
                    </span>
                  </div>
                  <p className="mt-2 mb-3 text-sm text-muted-foreground">{p.blurb}</p>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex font-neo-mono text-xs tracking-[0.18em] text-primary uppercase no-underline"
                    >
                      View live site →
                    </a>
                  ) : (
                    <span className="inline-flex font-neo-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                      Local project
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="m-0 text-[clamp(34px,5vw,64px)] leading-none font-semibold tracking-tight">
              The <span className="text-primary">toolkit</span>.
            </h2>
            <span className="font-neo-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              03 — Skills
            </span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.n} className="flex items-baseline gap-5 bg-background p-6">
                <span className="font-neo-mono text-xs text-primary">{s.n}</span>
                <div>
                  <div className="text-lg font-semibold tracking-tight">{s.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <span className="font-neo-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              04 — Contact · Open to projects &amp; collaboration
            </span>
            <p className="mt-6 mb-10 text-[clamp(40px,7vw,96px)] leading-[0.95] font-semibold tracking-tight text-balance">
              Let’s work <span className="text-primary">together.</span>
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex flex-wrap items-baseline gap-4 rounded-xl border border-border bg-card px-6 py-5 text-lg break-all no-underline hover:border-primary hover:text-primary"
            >
              {profile.email} <span aria-hidden>→</span>
            </a>

            <div className="mt-12 flex flex-wrap gap-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="rounded-lg border border-border px-5 py-3 text-sm font-semibold no-underline hover:border-primary hover:text-primary"
                >
                  {c.label} ↗
                </a>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-border pt-6 font-neo-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              <span>© 2026 {profile.name}</span>
              <span>{profile.role}</span>
              <a href="#top" className="no-underline hover:text-foreground">
                Back to top ↑
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
