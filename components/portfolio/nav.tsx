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

      </div>
    </header>
  )
}
