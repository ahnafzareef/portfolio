const ITEMS = [
  "firmware",
  "circuit design",
  "pcb",
  "fpga",
  "microcontrollers",
  "communication protocols",
]

export function Marquee() {
  return (
    <section
      aria-label="Disciplines"
      className="overflow-hidden border-b border-border bg-foreground text-background"
    >
      <div className="flex marquee-track whitespace-nowrap py-2">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 pr-3 font-dot text-sm lowercase md:text-base"
          >
            {item}
            <span aria-hidden className="inline-block h-1 w-1 bg-accent" />
          </span>
        ))}
      </div>
    </section>
  )
}
