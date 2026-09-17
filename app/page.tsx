import { ProfilePanel } from "@/components/profile-panel"
import { Projects } from "@/components/projects"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground lg:flex lg:items-start">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to work
      </a>
      <ProfilePanel />
      <div id="work" className="min-w-0 flex-1 lg:w-[65%]">
        <Projects />
      </div>
    </main>
  )
}
