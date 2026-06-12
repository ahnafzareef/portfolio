export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-dotted border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-4 py-12 md:px-6 md:py-16">
        <p className="mb-4 flex items-center gap-2 text-xs font-medium lowercase tracking-[0.18em] text-foreground/70">
          <span className="inline-block h-px w-6 bg-accent" />
          contact
        </p>

        <h2 className="font-dot text-[clamp(1.75rem,5vw,4rem)] font-black lowercase leading-[0.82] tracking-tight">
          contact
          <br />
          <span className="text-muted-foreground">me</span>
          <span className="text-accent">.</span>
        </h2>

        <div className="mt-8 max-w-lg">
          <a
            href="mailto:ahnaf.zareef07@gmail.com"
            className="group inline-flex items-center gap-3 border-b border-foreground pb-2 font-dot text-lg lowercase leading-none tracking-tight transition-colors hover:text-accent md:text-2xl"
          >
            ahnaf.zareef07@gmail.com
            <span className="transition-transform group-hover:translate-x-1">&#8599;</span>
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-medium lowercase tracking-[0.14em]">
            <a
              href="https://www.linkedin.com/in/ahnafzareef"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/70 transition-colors hover:text-accent"
            >
              linkedin &#8599;
            </a>
            <a
              href="https://github.com/ahnafzareef"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/70 transition-colors hover:text-accent"
            >
              github &#8599;
            </a>
            <span className="flex items-center gap-1.5 text-foreground/50">
              <span className="h-1.5 w-1.5 bg-accent blink" />
              open to internships · 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
