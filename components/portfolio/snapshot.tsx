const FACTS = [
  {
    label: "program",
    value: "computer engineering",
  },
  {
    label: "year",
    value: "class of 2028",
  },
  {
    label: "base",
    value: "toronto, on",
  },
  {
    label: "school",
    value: "mcmaster university",
  },
]

export function Snapshot() {
  return (
    <section aria-label="Profile Snapshot" className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-6 md:py-10">
        <p className="mb-6 flex items-center gap-2 text-xs font-medium lowercase tracking-[0.18em] text-foreground/70">
          <span className="inline-block h-px w-6 bg-accent" />
          profile / snapshot
        </p>

        <div className="border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {FACTS.map((fact, index) => (
              <div
                key={fact.label}
                className={`border-border p-4 ${
                  index < FACTS.length - 1 ? "border-b" : ""
                } ${
                  index < FACTS.length - 1 ? "md:border-b-0" : ""
                } ${
                  index < FACTS.length - 1 ? "md:border-r md:border-border" : ""
                }`}
              >
                <p className="text-[11px] font-medium lowercase tracking-[0.14em] text-foreground/65">
                  {fact.label}
                </p>
                <p className="mt-2 font-dot text-xl lowercase leading-none text-foreground md:text-2xl">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
