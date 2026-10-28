import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rida Fatima — Front-End Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Rida Fatima, front-end web developer: clean, responsive HTML & CSS pages, live on Netlify.",
      },
      { name: "author", content: profile.name },
      { property: "og:title", content: "Rida Fatima — Front-End Web Developer" },
      {
        property: "og:description",
        content:
          "Clean, responsive web pages built with HTML, CSS and Bootstrap — seven live projects on Netlify.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const featured = projects[0];
const rest = projects.slice(1);

function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* ---------- top bar ---------- */}
      <header className="sticky top-0 z-20 border-b border-border bg-background">
        <div className="mx-auto flex h-17 max-w-7xl items-center justify-between gap-6 px-6 md:px-10">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <span className="grid size-8 place-items-center border border-border font-display text-lg leading-none">
              {profile.mark}
            </span>
            <span className="font-display text-2xl">{profile.name}</span>
          </a>

          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <TemplateSwitcher className="hidden sm:inline-flex" />
            <a
              href={`mailto:${profile.email}`}
              className="hidden bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground no-underline transition-opacity hover:opacity-90 md:inline-flex"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------- hero ---------- */}
        <section className="mx-auto max-w-7xl px-6 pt-16 md:px-10 md:pt-24">
          <div className="grid items-end gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
            <div>
              <Reveal className="mb-9 flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  {profile.role}
                </span>
              </Reveal>

              <Reveal delay={60}>
                <h1 className="m-0 font-display text-[clamp(56px,8.4vw,128px)] leading-[0.92] tracking-[-0.025em] text-balance">
                  <span className="block font-mono text-sm tracking-[0.3em] text-primary uppercase not-italic mb-4">My Portfolio</span>Rida <em className="text-primary">Fatima</em>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-10 max-w-[46ch] text-lg text-muted-foreground text-pretty">
                  {profile.lede}
                </p>
              </Reveal>

              <Reveal delay={180} className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground no-underline transition-opacity hover:opacity-90"
                >
                  View my work →
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener"
                  className="border border-border px-5 py-3 text-sm font-semibold no-underline transition-colors hover:border-primary hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href={profile.netlify}
                  target="_blank"
                  rel="noopener"
                  className="border border-border px-5 py-3 text-sm font-semibold no-underline transition-colors hover:border-primary hover:text-primary"
                >
                  Netlify
                </a>
              </Reveal>
            </div>

            <Reveal delay={120} className="md:pb-2">
              <figure className="m-0">
                <div className="aspect-4/5 overflow-hidden border border-border bg-secondary">
                  <img
                    src={portraitImage.src}
                    alt={portraitImage.alt}
                    width={800}
                    height={1000}
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="flex justify-between pt-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  <span>{profile.name}</span>
                  <span>Portfolio</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* ---------- ledger ---------- */}
          <Reveal className="mt-20 grid border-t border-foreground/40 md:grid-cols-4">
            {ledger.map((item, i) => (
              <div
                key={item.label}
                className={`py-6 pr-6 ${i > 0 ? "border-border py-6 pl-6 border-l md:border-t-0" : "border-b border-border md:border-b-0"} ${i < ledger.length - 1 ? "border-b border-border md:border-b-0" : ""}`}
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  {item.label}
                </span>
                <div className="mt-2 font-display text-2xl leading-tight">{item.value}</div>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ---------- about ---------- */}
        <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 grid gap-8 md:grid-cols-[200px_1fr]">
            <div className="border-t border-foreground/40 pt-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              01 — About
            </div>
            <h2 className="m-0 font-display text-[clamp(40px,5.2vw,72px)] leading-none tracking-[-0.02em] text-balance">
              Small ideas, turned into <em className="text-primary">tidy</em> pages.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="m-0 font-display text-[clamp(26px,2.4vw,34px)] leading-[1.25] text-pretty">
                {profile.statement}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="mb-5 max-w-[52ch] text-muted-foreground">{profile.note}</p>
              <ul className="m-0 list-none border-t border-foreground/40 p-0">
                {facts.map((f) => (
                  <li
                    key={f.label}
                    className="grid grid-cols-[110px_1fr] gap-4 border-b border-border py-4 text-sm"
                  >
                    <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                      {f.label}
                    </span>
                    <span className="font-medium">
                      {f.href ? (
                        <a
                          href={f.href}
                          target={f.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener"
                          className="border-b border-border no-underline hover:border-primary hover:text-primary"
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
            </Reveal>
          </div>
        </section>

        {/* ---------- work ---------- */}
        <section
          id="work"
          className="scroll-mt-20 border-y border-border bg-secondary/60 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 grid gap-8 md:grid-cols-[200px_1fr]">
              <div className="border-t border-foreground/40 pt-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                02 — Selected work
              </div>
              <h2 className="m-0 font-display text-[clamp(40px,5.2vw,72px)] leading-none tracking-[-0.02em] text-balance">
                Built by hand, <em className="text-primary">shipped</em> live.
              </h2>
            </div>

            {featured ? (
              <Reveal className="mb-16 grid gap-10 border-b border-border pb-16 md:grid-cols-[1.6fr_1fr] md:items-center md:gap-14">
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Open ${featured.title}`}
                  className="relative block overflow-hidden border border-border bg-card no-underline"
                >
                  <span className="absolute top-4 left-4 z-10 bg-background px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] uppercase">
                    Featured
                  </span>
                  <img
                    src={featured.image.src}
                    alt={featured.image.alt}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover object-top"
                  />
                </a>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                    No. {featured.n} · {featured.tech}
                  </span>
                  <h3 className="my-4 font-display text-[clamp(34px,3.6vw,52px)] leading-none tracking-[-0.015em]">
                    {featured.title}
                  </h3>
                  <p className="mb-7 max-w-[40ch] text-muted-foreground">{featured.blurb}</p>
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex border-b border-foreground pb-1 text-sm font-semibold no-underline hover:border-primary hover:text-primary"
                  >
                    View live site →
                  </a>
                </div>
              </Reveal>
            ) : null}

            <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 70}>
                  <article>
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener"
                        aria-label={`Open ${p.title}`}
                        className="group block overflow-hidden border border-border bg-card no-underline"
                      >
                        <img
                          src={p.image.src}
                          alt={p.image.alt}
                          loading="lazy"
                          className="aspect-16/10 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </a>
                    ) : (
                      <div className="overflow-hidden border border-border bg-card">
                        <img
                          src={p.image.src}
                          alt={p.image.alt}
                          loading="lazy"
                          className="aspect-16/10 w-full object-cover object-top"
                        />
                      </div>
                    )}
                    <div className="mt-5 flex items-baseline justify-between border-t border-foreground/40 pt-4">
                      <h3 className="m-0 font-display text-2xl leading-tight">{p.title}</h3>
                      <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                        {p.n}
                      </span>
                    </div>
                    <p className="my-3 text-sm text-muted-foreground">{p.blurb}</p>
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex border-b border-foreground pb-1 text-sm font-semibold no-underline hover:border-primary hover:text-primary"
                      >
                        View live site →
                      </a>
                    ) : (
                      <span className="inline-flex border-b border-border pb-1 text-sm font-medium text-muted-foreground">
                        Local project
                      </span>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- skills ---------- */}
        <section id="skills" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 grid gap-8 md:grid-cols-[200px_1fr]">
            <div className="border-t border-foreground/40 pt-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
              03 — Skills
            </div>
            <h2 className="m-0 font-display text-[clamp(40px,5.2vw,72px)] leading-none tracking-[-0.02em] text-balance">
              The <em className="text-primary">toolkit</em>.
            </h2>
          </div>

          <div className="border-t border-foreground/40">
            {skills.map((s) => (
              <Reveal key={s.n}>
                <div className="grid grid-cols-[40px_1fr] items-baseline gap-x-6 gap-y-1 border-b border-border py-5 transition-colors hover:bg-secondary/70 md:grid-cols-[60px_1fr_1.4fr]">
                  <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                  <span className="font-display text-2xl leading-tight md:text-3xl">{s.name}</span>
                  <span className="col-start-2 text-sm text-muted-foreground md:col-start-auto">
                    {s.detail}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- contact ---------- */}
        <section id="contact" className="scroll-mt-20 border-t border-border bg-card px-6 pt-24 pb-0 md:px-10 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 grid gap-8 md:grid-cols-[200px_1fr]">
              <div className="border-t border-foreground/40 pt-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                04 — Contact
              </div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Open to projects &amp; collaboration
              </span>
            </div>

            <Reveal>
              <p className="m-0 mb-14 font-display text-[clamp(52px,8vw,120px)] leading-[0.95] tracking-[-0.025em] text-balance">
                Let’s work <em className="text-primary">together.</em>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex flex-wrap items-baseline gap-4 border-b border-border pb-2 font-display text-[clamp(24px,3.4vw,44px)] break-all no-underline hover:border-primary hover:text-primary"
              >
                {profile.email} <span aria-hidden>→</span>
              </a>
            </Reveal>

            <div className="mt-24 grid border-t border-border md:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="flex items-center justify-between border-b border-border px-0 py-7 text-lg no-underline transition-colors hover:text-primary md:px-6 md:first:pl-0"
                >
                  {c.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border py-8 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
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
