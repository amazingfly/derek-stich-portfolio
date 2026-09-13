"use client"

import { useState } from "react"
import { SectionHeading } from "./tech-stack"
import { Server, Cpu, Power, Eye } from "lucide-react"

type Node = {
  id: string
  name: string
  detail: string
  icon: typeof Server
}

const nodes: Node[] = [
  {
    id: "llm",
    name: "Local LLM Inference Node",
    detail: "Qwen 3.5 4B · GPU",
    icon: Cpu,
  },
  {
    id: "imagegen",
    name: "Image Gen Microservice",
    detail: "ComfyUI · CUDA",
    icon: Server,
  },
]

export function SystemsStatus() {
  const [online, setOnline] = useState<Record<string, boolean>>({})

  return (
    <section id="systems" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="03 / Live" title="System Infrastructure & Demos" />

      <div className="mt-10 rounded-xl border border-border bg-card/50 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {nodes.map((node) => {
            const isOn = online[node.id] ?? false
            return (
              <div
                key={node.id}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background/60 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                    <node.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{node.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{node.detail}</p>
                  </div>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={isOn}
                  aria-label={`Toggle ${node.name}`}
                  onClick={() => setOnline((prev) => ({ ...prev, [node.id]: !prev[node.id] }))}
                  className={`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${
                    isOn ? "border-primary/50 bg-primary/30" : "border-border bg-secondary"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full transition-all ${
                      isOn ? "left-[22px] bg-primary" : "left-0.5 bg-muted-foreground"
                    }`}
                  />
                </button>
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <StatusPill online={Object.values(online).some(Boolean)} />
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-secondary"
          >
            <Eye className="h-4 w-4 text-primary" />
            View cached output demo
          </button>
        </div>
      </div>
    </section>
  )
}

function StatusPill({ online }: { online: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-xs">
      <Power className={`h-3.5 w-3.5 ${online ? "text-primary" : "text-muted-foreground"}`} />
      {online ? (
        <span className="text-primary">Status: Online — nodes active</span>
      ) : (
        <span className="text-muted-foreground">
          Status: Standby / Offline — Click below to view cached output demo
        </span>
      )}
    </div>
  )
}
