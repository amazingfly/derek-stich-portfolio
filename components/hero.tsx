import { Mail, ArrowUpRight } from "lucide-react"
import { GithubIcon } from "./github-icon"

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for applied AI &amp; backend engineering
        </div>

        <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
          Derek Stich
        </h1>
        <p className="mt-3 font-mono text-lg text-primary sm:text-xl">
          Applied AI &amp; Software Engineer
        </p>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Specializing in Python microservices, local LLM orchestration, RAG pipelines, and automated
          backend systems.
        </p>

        <div className="mt-10 flex flex-col flex-wrap items-start gap-3 sm:flex-row sm:items-center">
          <a
            href="mailto:derekstich@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px] hover:shadow-primary/50"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>

          <a
            href="https://github.com/OperationAzura"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-primary/50 hover:bg-card"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="font-mono">OperationAzura</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="https://github.com/amazingfly"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-primary/50 hover:bg-card"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="font-mono">amazingfly</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
