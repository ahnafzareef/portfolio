import Image from "next/image"

type Project = {
  id: string
  year: string
  title: string
  client: string
  category: string
  img: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    id: "01",
    year: "2025",
    title: "pulse monitor",
    client: "capstone / ece",
    category: "embedded / firmware",
    img: "/work-01.jpg",
    featured: true,
  },
  {
    id: "02",
    year: "2025",
    title: "terminal dashboard",
    client: "personal",
    category: "web / real-time",
    img: "/work-02.jpg",
  },
  {
    id: "03",
    year: "2024",
    title: "halftone.js",
    client: "open source",
    category: "creative code",
    img: "/work-03.jpg",
  },
  {
    id: "04",
    year: "2024",
    title: "pcb / rev. 04",
    client: "deltahacks",
    category: "hardware",
    img: "/work-04.jpg",
  },
]

export function Works() {
  return (
    <section id="work" className="relative border-b border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-6 md:py-16">
        <header className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-medium lowercase tracking-[0.18em] text-foreground/70">
              <span className="inline-block h-px w-6 bg-accent" />
              selected work
            </p>
            <h2 className="font-dot text-4xl lowercase leading-none tracking-tight md:text-5xl">
              the shelf.
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href="#"
              className="group border border-border p-3 transition-colors hover:bg-card"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <Image
                  src={p.img || "/placeholder.svg"}
                  alt={`${p.title} project cover`}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={p.featured}
                />
                {p.featured && (
                  <span className="absolute left-2 top-2 bg-accent px-2 py-0.5 font-dot text-[9px] lowercase tracking-[0.16em] text-accent-foreground">
                    featured
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-dot text-xl lowercase leading-none tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-medium lowercase tracking-[0.14em] text-foreground/55">
                    {p.category} · {p.client} · {p.year}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-foreground/30 transition-colors group-hover:text-accent">
                  &#8599;
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
