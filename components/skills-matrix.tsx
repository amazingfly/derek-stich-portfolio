import { Brain, Cpu, Database, Server } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type StackGroup = {
  icon: LucideIcon
  title: string
  items: string[]
}

const groups: StackGroup[] = [
  {
    icon: Brain,
    title: "AI & media systems",
    items: [
      "Local LLMs (Qwen 3.5, llama.cpp, Ollama)",
      "LTX-Video / SA3",
      "SDXL · FLUX · LoRA",
      "RAG & prompt pipelines",
      "PyTorch · CUDA",
    ],
  },
  {
    icon: Server,
    title: "Backend & orchestration",
    items: ["Python (FastAPI)", "Golang", "Resumable pipelines", "Colab workers", "Async queues"],
  },
  {
    icon: Database,
    title: "Data & infrastructure",
    items: ["PostgreSQL", "SQLite", "Docker", "Linux GPU hosts", "Provenance / checkpoints"],
  },
  {
    icon: Cpu,
    title: "Accessibility & edge",
    items: ["OCR + Piper TTS", "ESP32 / MicroPython", "Assistive navigation", "Self-hosted inference"],
  },
]

export function SkillsMatrix() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Skills Matrix</p>
      <div className="mt-4 space-y-4">
        {groups.map((group) => (
          <div key={group.title} className="rounded-lg border border-border bg-card/50 p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                <group.icon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-semibold">{group.title}</h3>
            </div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
