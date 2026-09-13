import { Play, ArrowRight, Braces, ImageIcon } from "lucide-react"

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {label}
    </span>
  )
}

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="group/video relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-background/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div className="relative flex flex-col items-center gap-3">
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-secondary text-primary transition-transform group-hover/video:scale-110 hover:border-primary/50"
          aria-label={`Play ${label}`}
        >
          <Play className="h-5 w-5 translate-x-0.5 fill-current" />
        </button>
        <span className="font-mono text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  )
}

function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Architecture</p>
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-background/60 p-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-md bg-secondary px-2.5 py-1.5 font-mono text-xs text-foreground">{step}</span>
            {i < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-primary" />}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  index,
  title,
  description,
  highlights,
  tags,
  children,
}: {
  index: string
  title: string
  description: string
  highlights: string[]
  tags: string[]
  children: React.ReactNode
}) {
  return (
    <article className="group rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{index}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="mt-5 space-y-2">
        {highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-5">{children}</div>

      <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
        {tags.map((t) => (
          <li key={t}>
            <Tag label={t} />
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Projects() {
  return (
    <div className="flex flex-col gap-6 px-6 py-10 sm:px-8 lg:py-12">
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Selected Work</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Featured Projects</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          A vertical walkthrough of production systems — each with a demo capture and its underlying architecture.
        </p>
      </div>

      <ProjectCard
        index="Project 01"
        title="AI Job Scanner & Local Ranking Engine"
        description="A multi-stage pipeline that scrapes listings, filters them through Python heuristics, and ranks top matches using local Qwen 3.5 4B inference — no third-party LLM calls."
        highlights={[
          "Async scraper collects and de-duplicates listings across multiple sources.",
          "Rule-based heuristics pre-filter noise before any model inference runs.",
          "Local Qwen 3.5 4B scores each role and emits a structured JSON ranking.",
        ]}
        tags={["Python", "Qwen 3.5", "Local LLM", "Heuristics", "JSON API"]}
      >
        <VideoPlaceholder label="ranking_engine_demo.mp4" />
        <ArchitectureDiagram steps={["Scraper", "Heuristics", "Qwen 3.5 4B", "JSON Ranking"]} />
        <div className="overflow-hidden rounded-lg border border-border bg-background/80">
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
      </ProjectCard>

      <ProjectCard
        index="Project 02"
        title="Generative Media & Synthetic Audio/Video Pipelines"
        description="End-to-end automated media generation that coordinates AI voice synthesis, image generation models, and video rendering stacks into a single reproducible pipeline."
        highlights={[
          "Orchestrates ComfyUI image graphs alongside audio synthesis workers.",
          "Queue-driven jobs render, composite, and encode video without manual steps.",
          "Deterministic seeds and manifests make every output reproducible.",
        ]}
        tags={["Python", "ComfyUI", "Audio Synth", "Video Pipelines", "CUDA"]}
      >
        <VideoPlaceholder label="media_pipeline_demo.mp4" />
        <ArchitectureDiagram steps={["Prompt", "Audio Synth", "ComfyUI", "Compositor", "Encoder"]} />
      </ProjectCard>

      <ProjectCard
        index="Project 03"
        title="Real-Time CCTV Object & Facial Recognition"
        description="A computer-vision security suite performing real-time OCR, PTZ zoom control, and object tracking on GPU hardware across a self-hosted Linux fleet."
        highlights={[
          "PyTorch + OpenCV inference pipeline tracks objects across frames in real time.",
          "OCR and facial recognition run on-device with CUDA acceleration.",
          "Event-driven alerts trigger zoom control and clip capture automatically.",
        ]}
        tags={["PyTorch", "OpenCV", "CUDA", "OCR", "Linux"]}
      >
        <VideoPlaceholder label="cctv_tracking_demo.mp4" />
        <ArchitectureDiagram steps={["Camera Feed", "OpenCV", "PyTorch Model", "Tracker", "Alerts"]} />
        <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-background/80 text-muted-foreground">
          <span className="flex flex-col items-center gap-2 font-mono text-xs">
            <ImageIcon className="h-6 w-6 text-primary" />
            Detection overlay preview
          </span>
        </div>
      </ProjectCard>

      <ProjectCard
        index="Project 04"
        title="Smart Microcontroller & IoT Automation"
        description="Custom MicroPython firmware on ESP32 microcontrollers communicating with Go-based TCP client/server infrastructure for low-latency home and lab automation."
        highlights={[
          "Custom MicroPython firmware handles sensors and actuators on the ESP32.",
          "Lightweight TCP protocol keeps device-to-server latency minimal.",
          "Go services coordinate fleets of devices and expose a control API.",
        ]}
        tags={["MicroPython", "ESP32", "Golang", "Networking"]}
      >
        <VideoPlaceholder label="iot_automation_demo.mp4" />
        <ArchitectureDiagram steps={["ESP32", "MicroPython FW", "TCP", "Go Server", "Control API"]} />
      </ProjectCard>
    </div>
  )
}
