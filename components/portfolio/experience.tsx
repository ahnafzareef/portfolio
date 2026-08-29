type Experience = {
  company: string;
  url?: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  used: string[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "Carobot Learning & Research Organization",
    url: "https://carobot.org/",
    role: "Firmware/ML Developer Intern",
    period: "feb 2026 - present",
    type: "Toronto, ON",
    summary:
      "Built firmware and host tooling for on-device image classification on an ESP32-S3, running inference fully offline.",
    used: [
      "ESP32-S3",
      "ESP-IDF",
      "TinyUSB",
      "UVC + CDC",
      "TensorFlow.js",
      "Python",
      "MicroPython",
      "Blockly",
    ],
  },
  {
    company: "McMaster Solar Car Project",
    url: "https://www.mcmastersolarcar.com/",
    role: "Power & Data Acquisition Member",
    period: "sep 2025 - present",
    type: "Hamilton, ON",
    summary:
      "Designed an IV Curve Tracer PCB in Altium (Darlington pair, Hall-effect sensing, MOSFET/Zener protection) and wrote ESP32 C firmware for DAC-driven IV sweeps.",
    used: [
      "Altium Designer",
      "ESP32",
      "C",
      "Hall effect",
      "MOSFET",
      "Zener",
      "DAC/ADC",
      "oscilloscope",
      "soldering",
    ],
  },
  {
    company: "Circuit Stream",
    url: "https://www.circuitstream.com/",
    role: "AI & ML Teaching Assistant",
    period: "jun - sep 2025",
    type: "Toronto, ON",
    summary:
      "Taught supervised learning, CNNs, and MLPs to 40+ students, and guided them building LLM chatbots with the OpenAI API, LangChain, and RAG.",
    used: [
      "scikit-learn",
      "TensorFlow",
      "OpenCV",
      "Python",
      "OpenAI API",
      "LangChain",
      "RAG",
    ],
  },
  {
    company: "Platinum Medical",
    role: "Software Developer/IT Intern",
    period: "june - august 2023",
    type: "Toronto, ON",
    summary:
      "Rebuilt the patient website and e-referral system, lifting bookings 30% and cutting per-patient admin time.",
    used: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "Fetch API"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-dotted border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-6 md:py-14">
        <header className="mb-6 border-b border-dotted border-border pb-4">
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
              className="flex flex-col gap-3 py-5 md:flex-row md:items-start md:justify-between md:gap-6"
            >
              <div className="order-2 md:order-1">
                <h3 className="font-dot text-xl lowercase leading-none tracking-tight md:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-2 text-xs font-medium lowercase tracking-[0.14em] text-foreground/65">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75">
                  {exp.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.used.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 shrink-0 text-left md:order-2 md:text-right">
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
  );
}
