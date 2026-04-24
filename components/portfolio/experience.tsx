type Experience = {
  company: string
  role: string
  period: string
  type: string
}

const EXPERIENCES: Experience[] = [
  {
    company: "company name",
    role: "software / hardware engineer intern",
    period: "may – aug 2025",
    type: "internship",
  },
  {
    company: "mcmaster university",
    role: "undergraduate research assistant",
    period: "jan – apr 2025",
    type: "research",
  },
  {
    company: "deltahacks",
    role: "hardware lead",
    period: "2024 – present",
    type: "volunteer",
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-6 md:py-14">
        <header className="mb-6 border-b border-border pb-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-medium lowercase tracking-[0.18em] text-foreground/70">
            <span className="inline-block h-px w-6 bg-accent" />
            experience
          </p>
          <h2 className="font-dot text-3xl lowercase leading-none tracking-tight md:text-4xl">
            background.
          </h2>
        </header>

        <div className="divide-y divide-border">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="flex items-start justify-between gap-6 py-5"
            >
              <div>
                <h3 className="font-dot text-xl lowercase leading-none tracking-tight md:text-2xl">
                  {exp.company}
                </h3>
                <p className="mt-2 text-xs font-medium lowercase tracking-[0.14em] text-foreground/65">
                  {exp.role}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span className="font-dot text-sm lowercase text-muted-foreground">
                  {exp.period}
                </span>
                <p className="mt-1 text-[10px] font-medium lowercase tracking-[0.14em] text-foreground/40">
                  {exp.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
