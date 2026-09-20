"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AutoplayVideo } from "@/components/autoplay-video"
import { ALL_CLIPS, FEATURED_CLIPS, type MusicClip } from "@/lib/videos"
import { cn } from "@/lib/utils"

export function VideoCarousel() {
  const [showAll, setShowAll] = useState(false)
  const [id, setId] = useState(FEATURED_CLIPS[0]?.id ?? "19")
  const stripRef = useRef<HTMLDivElement>(null)
  const startX = useRef<number | null>(null)

  const playlist: MusicClip[] = useMemo(() => (showAll ? ALL_CLIPS : FEATURED_CLIPS), [showAll])

  const index = Math.max(
    0,
    playlist.findIndex((item) => item.id === id),
  )
  const clip = playlist[index] ?? playlist[0]

  const go = useCallback(
    (next: number) => {
      const len = playlist.length
      const wrapped = ((next % len) + len) % len
      const target = playlist[wrapped]
      if (target) setId(target.id)
    },
    [playlist],
  )

  useEffect(() => {
    if (!playlist.some((item) => item.id === id)) {
      const fallback = playlist[0]
      if (fallback) setId(fallback.id)
    }
  }, [id, playlist])

  useEffect(() => {
    const strip = stripRef.current
    const node = strip?.querySelector<HTMLButtonElement>(`[data-clip="${id}"]`)
    if (!strip || !node) return
    const left = node.offsetLeft - strip.clientWidth / 2 + node.clientWidth / 2
    strip.scrollTo({ left: Math.max(0, left), behavior: "smooth" })
  }, [id, showAll])

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
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{clip.label}</p>
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(playlist.length).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground hover:border-primary/50"
          >
            {showAll ? "Featured cuts" : "All shorts"}
          </button>
        </div>
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
        {playlist.map((item) => (
          <button
            key={item.id}
            type="button"
            data-clip={item.id}
            onClick={() => setId(item.id)}
            aria-current={item.id === id}
            aria-label={item.label}
            className={cn(
              "relative h-20 w-14 shrink-0 overflow-hidden rounded-sm border",
              item.id === id ? "border-primary" : "border-border opacity-70 hover:opacity-100",
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
