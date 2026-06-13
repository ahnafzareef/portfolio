import Image from "next/image"

type Project = {
  title: string
  description: string
  tags: string[]
  href: string
  img: string
  /** Override the default cover/zoom framing (base scale + hover scale). */
  imgClassName?: string
  /** Text for the call-to-action link. Defaults to "GitHub". */
  linkLabel?: string
}

// Default framing: slight zoom-in on hover, grayscale until hover.
const DEFAULT_IMG_CLASS =
  "scale-[1.15] object-cover object-center group-hover:scale-[1.22]"

const PROJECTS: Project[] = [
  {
    title: "XNOR-9",
    description:
      "A Binarized Neural Network accelerator on a Tang Nano 9K FPGA, replacing multiply-accumulate with XNOR-popcount for 32× model compression. Hit 95% accuracy within the 8,640-LUT budget, with an ESP32-S3 front-end streaming hand-drawn digits to the FPGA over UART.",
    tags: [
      "FPGA",
      "Verilog",
      "Python",
      "ESP32",
      "RTL",
      "UART",
      "Yosys/nextpnr",
      "Larq",
      "TensorFlow",
    ],
    href: "https://github.com/ahnafzareef/XNOR-9",
    img: "/projects/xnor-9.jpg",
  },
  {
    title: "IV Curve Tracer",
    description:
      "A custom Altium PCB that characterizes per-cell solar efficiency and detects faults, using a Darlington pair for high-gain current amplification and a Hall-effect sensor. ESP32 firmware drives a DAC-based IV sweep with 16-sample ADC averaging, plus MOSFET/Zener protection on the cell output and ADC.",
    tags: [
      "Altium",
      "PCB",
      "ESP32",
      "C",
      "Darlington",
      "Hall effect",
      "MOSFET",
      "Zener",
      "DAC/ADC",
    ],
    href: "https://github.com/ahnafzareef/IV-Curve-Tracer",
    img: "/projects/iv-curve-tracer.jpg",
    imgClassName: "object-contain object-center p-2 group-hover:scale-[1.04]",
  },
  {
    title: "Delvie",
    description:
      "A spatial scanner running C firmware that drives a half-stepped motor and a VL53L1X ToF sensor over I2C, sampling 128 points per 360° sweep with per-step settling. Interrupt-driven start/stop control and range validation stream polar data over UART to MATLAB for 3D point-cloud reconstruction.",
    tags: [
      "C",
      "MSP432",
      "Keil",
      "VL53L1X ToF",
      "I2C",
      "UART",
      "MATLAB",
      "Logic Analyzer",
    ],
    href: "https://github.com/ahnafzareef/Lidar_Sensor",
    img: "/projects/delvie.jpg",
  },
  {
    title: "piBlocker",
    description:
      "A network-level DNS ad blocker running on a Raspberry Pi 3B. Listens for DNS queries, checks each domain against a custom blocklist, and returns a sinkhole response for matches while forwarding everything else upstream — killing ads across every device on the network.",
    tags: ["Python", "Raspberry Pi", "DNS", "Networking", "Linux"],
    href: "https://github.com/ahnafzareef/piBlocker",
    img: "/projects/piblocker.svg",
    imgClassName: "object-cover object-center group-hover:scale-[1.04]",
  },
  {
    title: "International Airport Challenge",
    description:
      "An automated passenger check-in and baggage transfer system for a modeled airport. A hinged-ramp mechanism driven by a linear actuator moves luggage from conveyor to plane, with Python handling passenger and luggage verification — designed in Inventor and 3D printed as a team.",
    tags: [
      "Autodesk Inventor",
      "Python",
      "3D Printing",
      "Linear Actuator",
      "CAD",
    ],
    href: "https://beautiful-node-cb6.notion.site/Project-1-International-Airport-Challenge-16e2e8cb8891803c9e14d980c60fd436",
    img: "/projects/airport.jpg",
    imgClassName: "object-cover object-center group-hover:scale-[1.04]",
    linkLabel: "Notion",
  },
  {
    title: "Microplastic Filtration",
    description:
      "A material-selection study to design a wastewater filtration component that captures 10–20µm microplastics. Used Ansys Granta EduPack, Ashby chart analysis, and a decision matrix — backed by porosity calculations and an eco-audit/LCA — to land on polypropylene as the optimal material.",
    tags: [
      "Granta EduPack",
      "Ashby Charts",
      "Eco-Audit",
      "Materials",
      "Excel",
    ],
    href: "https://beautiful-node-cb6.notion.site/Project-2-Microplastic-Filtration-1ce2e8cb8891801ebcebd13e87d84468",
    img: "/projects/microplastic.jpg",
    imgClassName: "object-cover object-center group-hover:scale-[1.04]",
    linkLabel: "Notion",
  },
  {
    title: "XY Slice and Dice",
    description:
      "An accessible kitchen cutting tool designed for a client with Usher's Syndrome. A guided blade travels in a fixed vertical plane with a gravity-controlled guard for safe slicing, on a non-slip base with high-contrast colors for visibility — modelled in Autodesk Inventor and 3D printed.",
    tags: [
      "Autodesk Inventor",
      "3D Printing",
      "CAD",
      "Accessibility",
      "Engineering Drawings",
    ],
    href: "https://www.notion.so/Project-3-XY-Slice-and-Dice-1ce2e8cb88918024aedbe8789bd36109",
    img: "/projects/xy-slice.jpg",
    imgClassName: "object-cover object-center group-hover:scale-[1.04]",
    linkLabel: "Notion",
  },
]

export function Works() {
  return (
    <section id="work" className="relative border-b border-dotted border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-6 md:py-16">
        <header className="mb-8 border-b border-dotted border-border pb-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-medium lowercase tracking-[0.18em] text-foreground/70">
            <span className="inline-block h-px w-6 bg-accent" />
            selected work
          </p>
          <h2 className="font-dot text-4xl lowercase leading-none tracking-tight md:text-5xl">
            projects.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black transition-shadow duration-500 group-hover:shadow-[0_0_35px_-4px] group-hover:shadow-accent/60">
                <Image
                  src={p.img || "/placeholder.svg"}
                  alt={`${p.title} project cover`}
                  fill
                  className={`grayscale transition-all duration-500 group-hover:grayscale-0 ${p.imgClassName ?? DEFAULT_IMG_CLASS}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-dot text-2xl lowercase leading-none tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {p.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold lowercase tracking-wide text-accent transition-colors group-hover:text-foreground">
                  {p.linkLabel ?? "GitHub"} &#8594;
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <a
            href="https://github.com/ahnafzareef"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-medium lowercase tracking-[0.14em] text-foreground/55 transition-colors hover:text-accent"
          >
            view all &#8599;
          </a>
        </div>
      </div>
    </section>
  )
}
