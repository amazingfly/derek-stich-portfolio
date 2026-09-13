import { SectionHeading } from "./tech-stack"

type Role = {
  role: string
  org: string
  period: string
  description: string
}

const roles: Role[] = [
  {
    role: "R&D Software Development",
    org: "CommerceV3",
    period: "Full-time",
    description:
      "Research and development across backend services and data systems, building and maintaining production software and internal automation tooling.",
  },
  {
    role: "Independent AI Automation Engineering",
    org: "Self-directed",
    period: "Ongoing",
    description:
      "Designing local LLM orchestration, RAG pipelines, computer vision suites, and IoT automation across a self-hosted Linux GPU infrastructure.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="04 / Background" title="Professional Experience" />

      <div className="mt-10 space-y-0">
        {roles.map((role, i) => (
          <div key={role.role} className="relative pl-8 pb-8 last:pb-0">
            {/* line */}
            {i < roles.length - 1 && (
              <span className="absolute left-[5px] top-3 h-full w-px bg-border" aria-hidden="true" />
            )}
            {/* dot */}
            <span className="absolute left-0 top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border border-primary bg-background">
              <span className="h-1 w-1 rounded-full bg-primary" />
            </span>

            <div className="rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold">{role.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
              </div>
              <p className="mt-1 font-mono text-sm text-primary">{role.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{role.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
