import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { SystemsStatus } from "@/components/systems-status"
import { Experience } from "@/components/experience"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TechStack />
      <Projects />
      <SystemsStatus />
      <Experience />
      <SiteFooter />
    </main>
  )
}
