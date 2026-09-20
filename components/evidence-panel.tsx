import { Eye, Lock, ScanSearch } from "lucide-react"

export function EvidencePanel({ kind }: { kind: "clscan" | "darklands" }) {
  if (kind === "clscan") {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-background/80">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <ScanSearch className="size-3.5" />
            Shortlist loop
          </p>
          <p className="font-mono text-xs text-muted-foreground">local · no applications sent</p>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {[
            {
              label: "Hell yes",
              detail: "Keep as a positive example; drop from every profile so a replacement can surface.",
            },
            { label: "Maybe yes", detail: "Good listing to revisit. Stays out of the active shortlist." },
            { label: "Maybe not", detail: "Reasonable selection, less interesting. Retained for ranking analysis." },
            { label: "Bad result", detail: "Should not have been selected. Kept to debug filters, not to apply." },
          ].map((item) => (
            <div key={item.label} className="rounded-md border border-border bg-card/60 p-3">
              <p className="font-mono text-xs text-primary">{item.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
        <p className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          Collection and assessment run concurrently. Software keywords jump the queue. Scores stay on-box (llama.cpp /
          Ollama); reply addresses stay in the browser.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background/80">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          <Eye className="size-3.5" />
          Assistive path
        </p>
        <p className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Lock className="size-3" />
          game binary never shipped
        </p>
      </div>
      <ol className="space-y-2 p-4">
        {[
          {
            title: "dosboxStagingAccess",
            detail: "Loopback framebuffer, RAM, keyboard, and mouse APIs — independent of desktop focus.",
          },
          {
            title: "darktext",
            detail: "OCR story text and rapidly updated highlighted menu choices, spoken through Piper.",
          },
          {
            title: "darklands-coords",
            detail: "Save coordinates, live-RAM calibration, verified navigation to quests or rewards.",
          },
        ].map((item, i) => (
          <li key={item.title} className="flex gap-3 rounded-md border border-border bg-card/60 p-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-secondary font-mono text-xs text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-mono text-xs text-foreground">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
