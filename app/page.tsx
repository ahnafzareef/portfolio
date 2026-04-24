import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Marquee } from "@/components/portfolio/marquee"
import { Experience } from "@/components/portfolio/experience"
import { Works } from "@/components/portfolio/works"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Experience />
      <Works />
      <Contact />
    </main>
  )
}
