import { AudioLines, BookOpen, Eye, ScanSearch } from "lucide-react"

const systems = [
  { icon: AudioLines, name: "Media pipeline", detail: "SA3 · LTX · shorts" },
  { icon: BookOpen, name: "Storybook", detail: "Qwen review · narration" },
  { icon: ScanSearch, name: "clScan", detail: "Local LLM job triage" },
  { icon: Eye, name: "Darklands a11y", detail: "OCR speech · navigation" },
]

export function LabStatus() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Now shipping</p>
      <div className="mt-4 rounded-lg border border-border bg-card/50 p-4">
        <ul className="space-y-3">
          {systems.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 rounded-lg border border-border bg-background/60 p-3"
            >
              <span className="flex size-8 items-center justify-center rounded-md border border-border bg-secondary text-primary">
                <item.icon className="size-4" />
              </span>
              <div>
                <p className="text-xs font-medium leading-tight">{item.name}</p>
                <p className="font-mono text-[11px] text-muted-foreground">{item.detail}</p>
              </div>
              <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                live
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
