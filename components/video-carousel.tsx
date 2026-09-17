"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { AutoplayVideo } from "@/components/autoplay-video"
import { MUSIC_CLIPS } from "@/lib/videos"
import { cn } from "@/lib/utils"

export function VideoCarousel() {
  const [index, setIndex] = useState(0)
  const stripRef = useRef<HTMLDivElement>(null)
  const startX = useRef<number | null>(null)
  const clip = MUSIC_CLIPS[index] ?? MUSIC_CLIPS[0]

  const go = useCallback((next: number) => {
    const len = MUSIC_CLIPS.length
    setIndex(((next % len) + len) % len)
  }, [])

  useEffect(() => {
    const node = stripRef.current?.querySelector<HTMLButtonElement>(`[data-clip="${index}"]`)
    node?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" })
  }, [index])

  if (!clip) return null

  return (
    <div
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault()
          go(index + 1)
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          go(index - 1)
        }
      }}
      className="flex min-w-0 flex-col gap-3 overflow-hidden rounded-xl border border-border bg-background/80 p-3 sm:p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{clip.label}</p>
        <p className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(MUSIC_CLIPS.length).padStart(2, "0")}
        </p>
      </div>

      <div
        className="relative"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button, [role='slider']")) {
            startX.current = null
            return
          }
          startX.current = event.clientX
        }}
        onPointerUp={(event) => {
          if (startX.current == null) return
          const dx = event.clientX - startX.current
          startX.current = null
          if (dx <= -48) go(index + 1)
          if (dx >= 48) go(index - 1)
        }}
      >
        <AutoplayVideo
          key={clip.id}
          src={clip.src}
          poster={clip.poster}
          label={`${clip.label} from the media pipeline`}
          onEnded={() => go(index + 1)}
          className="mx-auto w-full max-w-xl"
        />

        <button
          type="button"
          onClick={() => go(index - 1)}
          className="absolute top-1/2 left-1 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-card/90 text-foreground backdrop-blur-sm"
          aria-label="Previous clip"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          className="absolute top-1/2 right-1 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-card/90 text-foreground backdrop-blur-sm"
          aria-label="Next clip"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div ref={stripRef} className="flex w-full min-w-0 gap-2 overflow-x-auto pb-1" aria-label="Clip filmstrip">
        {MUSIC_CLIPS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            data-clip={i}
            onClick={() => go(i)}
            aria-current={i === index}
            aria-label={item.label}
            className={cn(
              "relative h-20 w-14 shrink-0 overflow-hidden rounded-sm border",
              i === index ? "border-primary" : "border-border opacity-70 hover:opacity-100",
            )}
          >
            <img src={item.poster} alt="" className="size-full object-cover" draggable={false} />
            <span className="absolute inset-x-0 bottom-0 bg-background/80 py-0.5 text-center font-mono text-[11px] text-foreground">
              {item.id}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
