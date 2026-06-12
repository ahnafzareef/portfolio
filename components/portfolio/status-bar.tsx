"use client"

import { useEffect, useState } from "react"

export function StatusBar() {
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
      setTime(`${get("hour")}:${get("minute")}:${get("second")}`)
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-7 max-w-[1400px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4 text-[10px] font-medium lowercase tracking-[0.18em] text-foreground/35">
          <span className="font-dot">az/</span>
          <span className="hidden md:inline">ahnaf zareef · computer engineering · mcmaster</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-medium lowercase tracking-[0.18em] text-foreground/35">
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <span className="h-1 w-1 bg-accent blink" />
            open to internships · 2026
          </span>
          <span className="tabular-nums">{time || "--:--:--"}</span>
        </div>
      </div>
    </div>
  )
}
