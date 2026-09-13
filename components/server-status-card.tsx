"use client"

import { useState } from "react"
import { Server, Cpu, Power, Eye } from "lucide-react"

type Node = {
  id: string
  name: string
  detail: string
  icon: typeof Server
}

const nodes: Node[] = [
  { id: "llm", name: "Local LLM Inference Node", detail: "Qwen 3.5 4B · GPU", icon: Cpu },
  { id: "imagegen", name: "Image Gen Microservice", detail: "ComfyUI · CUDA", icon: Server },
]

export function ServerStatusCard() {
  const [online, setOnline] = useState<Record<string, boolean>>({})
  const anyOnline = Object.values(online).some(Boolean)

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Server Status</p>
      <div className="mt-4 rounded-lg border border-border bg-card/50 p-4">
        <div className="space-y-3">
          {nodes.map((node) => {
            const isOn = online[node.id] ?? false
            return (
              <div
                key={node.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background/60 p-3"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                    <node.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium leading-tight">{node.name}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">{node.detail}</p>
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

        <div className="mt-4 flex flex-col items-start gap-3 border-t border-border pt-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-[11px]">
            <Power className={`h-3.5 w-3.5 ${anyOnline ? "text-primary" : "text-muted-foreground"}`} />
            {anyOnline ? (
              <span className="text-primary">Online — nodes active</span>
            ) : (
              <span className="text-muted-foreground">Standby / Offline</span>
            )}
          </div>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/60 px-4 py-2 text-xs font-medium transition-colors hover:border-primary/50 hover:bg-secondary"
          >
            <Eye className="h-4 w-4 text-primary" />
            View cached output demo
          </button>
        </div>
      </div>
    </div>
  )
}
