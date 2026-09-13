import { SectionHeading } from "./tech-stack"
import { Play, ArrowRight, ImageIcon, Braces } from "lucide-react"

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {label}
    </span>
  )
}

function ProjectShell({
  title,
  description,
  tags,
  children,
}: {
  title: string
  description: string
  tags: string[]
  children?: React.ReactNode
}) {
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {children}
      <ul className="mt-5 flex flex-wrap gap-2 pt-1">
        {tags.map((t) => (
          <li key={t}>
            <Tag label={t} />
          </li>
        ))}
      </ul>
    </article>
  )
}

function PipelineFlow({ steps }: { steps: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2 rounded-lg border border-border bg-background/60 p-3">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-foreground">
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-primary" />}
        </div>
      ))}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="02 / Selected Work" title="Featured Projects" />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProjectShell
          title="AI Job Scanner & Local Ranking Engine"
          description="Multi-stage scraper that filters listings via Python heuristics and ranks top matches using local Qwen 3.5 4B LLM inference."
          tags={["Python", "Qwen 3.5", "Local LLM", "Heuristics", "JSON API"]}
        >
          <PipelineFlow steps={["Scraper", "Heuristics", "Qwen 3.5 4B", "JSON Ranking"]} />
          <div className="mt-4 overflow-hidden rounded-lg border border-border bg-background/80">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Braces className="h-3.5 w-3.5 text-primary" />
                ranking_output.json
              </span>
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              </span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-muted-foreground">
              <code>{`{
  "match_score": 0.94,
  "title": "Senior ML Engineer",
  "reason": "Strong RAG + FastAPI overlap",
  "flags": ["remote", "python", "llm"]
}`}</code>
            </pre>
          </div>
        </ProjectShell>

        <ProjectShell
          title="Generative Media & Synthetic Audio/Video Pipelines"
          description="End-to-end automated media generation pipelines coordinating AI voice synthesis, image generation models, and video rendering stacks."
          tags={["Python", "ComfyUI", "Audio Synth", "Video Pipelines"]}
        >
          <div className="group/video mt-5 flex aspect-video items-center justify-center rounded-lg border border-border bg-background/80">
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-secondary text-primary transition-transform group-hover/video:scale-110 hover:border-primary/50"
              aria-label="Play demo video"
            >
              <Play className="h-5 w-5 translate-x-0.5 fill-current" />
            </button>
          </div>
        </ProjectShell>

        <ProjectShell
          title="Real-Time CCTV Object & Facial Recognition"
          description="Computer vision security suite performing real-time OCR, zoom control, and object tracking on GPU hardware."
          tags={["PyTorch", "OpenCV", "CUDA", "OCR", "Linux"]}
        >
          <div className="mt-5 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-background/80 text-muted-foreground">
            <span className="flex flex-col items-center gap-2 font-mono text-xs">
              <ImageIcon className="h-6 w-6 text-primary" />
              Media preview
            </span>
          </div>
        </ProjectShell>

        <ProjectShell
          title="Smart Microcontroller & IoT Automation"
          description="Custom MicroPython firmware on ESP32 microcontrollers communicating with Go-based TCP client/server infrastructure."
          tags={["MicroPython", "ESP32", "Golang", "Networking"]}
        >
          <PipelineFlow steps={["ESP32", "MicroPython FW", "TCP", "Go Server"]} />
        </ProjectShell>
      </div>
    </section>
  )
}
