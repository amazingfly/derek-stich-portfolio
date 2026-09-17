"use client"

import { Pause, Play, Volume2, VolumeX } from "lucide-react"
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react"
import { getPreferSound, setPreferSound, subscribePreferSound } from "@/lib/media-sound"
import { cn } from "@/lib/utils"

type AutoplayVideoProps = {
  src: string
  poster?: string
  label: string
  loop?: boolean
  onEnded?: () => void
  className?: string
  aspectClass?: string
}

export function AutoplayVideo({
  src,
  poster,
  label,
  loop = false,
  onEnded,
  className,
  aspectClass = "aspect-[2/3]",
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const inViewRef = useRef(true)
  const [playing, setPlaying] = useState(true)
  const [sound, setSound] = useState(getPreferSound)
  const [progress, setProgress] = useState(0)
  const [needsGesture, setNeedsGesture] = useState(false)

  const armAutoplay = useCallback((el: HTMLVideoElement, wantSound: boolean) => {
    el.playsInline = true
    el.setAttribute("playsinline", "true")
    el.setAttribute("webkit-playsinline", "true")
    el.muted = !wantSound
    el.defaultMuted = !wantSound
    if (!wantSound) el.setAttribute("muted", "")
    else el.removeAttribute("muted")
  }, [])

  const tryPlay = useCallback(async () => {
    const el = videoRef.current
    if (!el || !inViewRef.current) return
    armAutoplay(el, getPreferSound())
    try {
      await el.play()
      setPlaying(true)
      setNeedsGesture(false)
    } catch {
      if (!el.muted) {
        armAutoplay(el, false)
        try {
          await el.play()
          setPlaying(true)
          setNeedsGesture(true)
          return
        } catch {
          setPlaying(false)
          return
        }
      }
      setPlaying(false)
    }
  }, [armAutoplay])

  useEffect(() => {
    return subscribePreferSound((value) => {
      setSound(value)
      const el = videoRef.current
      if (!el) return
      armAutoplay(el, value)
      if (value && inViewRef.current) void tryPlay()
    })
  }, [armAutoplay, tryPlay])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.loop = loop
    armAutoplay(el, getPreferSound())
    setProgress(0)
    void tryPlay()
  }, [src, loop, armAutoplay, tryPlay])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting)
        inViewRef.current = visible
        if (visible) void tryPlay()
        else el.pause()
      },
      { threshold: 0.12, rootMargin: "80px 0px 80px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [tryPlay])

  const toggleSound = () => {
    const next = !sound
    const el = videoRef.current
    setPreferSound(next)
    setSound(next)
    setNeedsGesture(false)
    if (el) {
      armAutoplay(el, next)
      void el.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      )
    }
  }

  const togglePlay = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      inViewRef.current = true
      void tryPlay()
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  const onTime = () => {
    const el = videoRef.current
    if (!el || !el.duration) return
    setProgress(el.currentTime / el.duration)
  }

  const seek = (event: PointerEvent<HTMLDivElement>) => {
    const el = videoRef.current
    if (!el || !el.duration) return
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
    el.currentTime = ratio * el.duration
    setProgress(ratio)
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-background", className)}>
      <div className={cn("relative mx-auto w-full max-h-[min(78vh,880px)]", aspectClass)}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          muted={!sound}
          autoPlay
          preload="auto"
          controls={false}
          loop={loop}
          onEnded={onEnded}
          onTimeUpdate={onTime}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onCanPlay={() => {
            if (inViewRef.current) void tryPlay()
          }}
          aria-label={label}
          className="absolute inset-0 size-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/10" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3">
          <button
            type="button"
            onClick={togglePlay}
            className="flex size-11 items-center justify-center rounded-md border border-border bg-card/90 text-foreground backdrop-blur-sm"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="size-4 fill-current" /> : <Play className="size-4 translate-x-px fill-current" />}
          </button>
          <button
            type="button"
            onClick={toggleSound}
            className="flex size-11 items-center justify-center rounded-md border border-border bg-card/90 text-foreground backdrop-blur-sm"
            aria-label={sound ? "Mute" : "Unmute"}
          >
            {sound ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
          </button>
        </div>

        {needsGesture && sound === false ? (
          <button
            type="button"
            onClick={toggleSound}
            className="absolute inset-x-3 top-3 rounded-md border border-border bg-card/90 px-3 py-2 text-left font-mono text-xs text-foreground backdrop-blur-sm"
          >
            Sound was blocked — tap to restore audio
          </button>
        ) : null}
      </div>

      <div
        role="slider"
        aria-label="Seek"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        tabIndex={0}
        onPointerDown={seek}
        className="h-2 cursor-pointer bg-secondary"
      >
        <div className="h-full bg-primary transition-[width] duration-75" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  )
}
