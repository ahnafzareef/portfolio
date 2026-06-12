const ITEMS = [
  // languages
  "C",
  "C++",
  "Verilog",
  "Python",
  "Bash",
  // protocols
  "I2C",
  "SPI",
  "UART",
  "I2S",
  "CAN",
  "USB",
  "Ethernet",
  // tools
  "Keil",
  "Quartus",
  "Icarus Verilog",
  "Yosys/nextpnr",
  "Altium",
  "ESP-IDF",
  "OrCAD",
  "MATLAB",
  "Logic Analyzer",
  // platforms
  "ARM Cortex-M",
  "ESP32",
  "Tang Nano 9K FPGA",
  "DE10-Lite",
  "FreeRTOS",
  "Linux",
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
