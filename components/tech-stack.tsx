import { Brain, Server, Database, Cpu } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type StackGroup = {
  icon: LucideIcon
  title: string
  items: string[]
}

const groups: StackGroup[] = [
  {
    icon: Brain,
    title: "AI & LLM Engineering",
    items: [
      "LLM APIs",
      "Local Model Inference (Qwen 3.5)",
      "RAG Architectures",
      "Prompt Engineering Pipelines",
      "PyTorch",
      "OpenCV",
      "CUDA",
    ],
  },
  {
    icon: Server,
    title: "Backend & Microservices",
    items: [
      "Python (FastAPI, Flask)",
      "Golang",
      "RESTful APIs",
      "AMQP/RabbitMQ",
      "Node.js",
      "Asynchronous Workflows",
    ],
  },
  {
    icon: Database,
    title: "Databases & Infrastructure",
    items: [
      "PostgreSQL",
      "Vector Databases",
      "Redis",
      "Docker",
      "AWS Lambda",
      "Linux Systems Administration",
    ],
  },
  {
    icon: Cpu,
    title: "Hardware & AI Edge",
    items: ["ESP32", "MicroPython", "Raspberry Pi", "NVIDIA Jetson", "Circuit Design"],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="01 / Toolkit" title="Technical Stack" />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="group rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                <group.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold">{group.title}</h3>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  )
}
