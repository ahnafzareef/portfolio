const LINKS = [
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-[1400px] items-center px-4 md:px-6">

        <a href="#top" className="shrink-0 font-dot text-xl lowercase leading-none tracking-tight">
          az
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative inline-flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 text-[10px] tracking-wider text-muted-foreground">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-accent/50 bg-accent/10 px-2.5 py-1 font-medium lowercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            resume &#8599;
          </a>
        </div>
      </div>
    </header>
  )
}
