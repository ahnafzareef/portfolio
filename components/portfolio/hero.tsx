export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-dotted border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="py-10 md:py-16">
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-medium lowercase tracking-[0.18em] text-foreground/70">
              <span className="inline-block h-px w-6 bg-accent" />
              portfolio / vol. 01
            </p>

            <h1 className="max-w-[10ch] font-dot text-[clamp(2.5rem,9vw,7rem)] font-black lowercase leading-[0.76] tracking-tight text-balance">
              ahnaf
              <br />
              <span className="relative inline-block">
                zareef
                <span
                  className="absolute -right-3 top-1 h-2 w-2 bg-accent md:-right-5 md:top-1.5 md:h-3 md:w-3"
                  aria-hidden
                />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              computer engineering student at{" "}
              <span className="text-foreground">mcmaster university</span>, based
              in <span className="text-foreground">toronto, ontario</span>.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-5 py-3 text-xs font-medium lowercase tracking-[0.14em] text-background transition-colors hover:border-accent hover:bg-accent"
              >
                view selected work
                <span className="transition-transform group-hover:translate-x-1">
                  &#8594;
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-border px-5 py-3 text-xs font-medium lowercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground"
              >
                <span className="h-1.5 w-1.5 bg-accent" />
                get in touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
