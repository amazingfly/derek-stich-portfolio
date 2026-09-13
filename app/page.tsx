import { ProfilePanel } from "@/components/profile-panel"
import { Projects } from "@/components/projects"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground lg:flex lg:items-start">
      <ProfilePanel />
      <div className="lg:w-[65%]">
        <Projects />
      </div>
    </main>
  )
}
