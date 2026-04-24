"use client"

import { useEffect, useState } from "react"

const LINKS = [
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
]

export function Nav() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Toronto",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).formatToParts(new Date())
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "00"
      setTime(`${get("hour")}:${get("minute")}:${get("second")} tor`)
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-[1400px] items-center px-4 md:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <span
            aria-hidden
            className="grid h-6 w-6 grid-cols-3 grid-rows-3 gap-[2px]"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={`block rounded-full ${
                  [0, 2, 4, 6, 8].includes(i) ? "bg-foreground" : "bg-foreground/20"
                }`}
              />
            ))}
          </span>
          <span className="font-dot text-xl lowercase leading-none tracking-tight">
            az/
          </span>
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
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <span className="h-1.5 w-1.5 bg-accent blink" />
            available
          </span>
          <span className="tabular-nums">{time || "--:--:-- tor"}</span>
        </div>
      </div>
    </header>
  )
}
