import { ArrowUpRight, FileText, Mail } from "lucide-react"
import { GithubIcon } from "./github-icon"
import { LabStatus } from "./lab-status"
import { SkillsMatrix } from "./skills-matrix"
import { asset } from "@/lib/asset"

export function ProfilePanel() {
  return (
    <aside className="relative overflow-x-hidden border-b border-border lg:sticky lg:top-0 lg:h-screen lg:w-[35%] lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-b-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]"
      />

      <div className="relative flex flex-col gap-8 px-6 py-10 sm:px-8 lg:py-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for applied AI & backend
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Derek Stich</h1>
          <p className="mt-2 font-mono text-base text-primary sm:text-lg">Applied AI & Software Engineer</p>
          <p className="mt-3 text-pretty text-sm font-medium leading-relaxed text-foreground">
            Looking for applied-AI and backend roles where I own the pipeline, not just the prompt.
          </p>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
            Python microservices, local LLM orchestration, generative media pipelines, and accessible systems on
            self-hosted Linux GPU infrastructure.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href="mailto:derekstich@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px] hover:shadow-primary/50"
          >
            <Mail className="h-4 w-4" />
            derekstich@gmail.com
          </a>

          <a
            href={asset("/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-primary/50 hover:bg-card"
          >
            <FileText className="h-4 w-4" />
            <span className="font-mono">Resume (PDF)</span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="https://github.com/OperationAzura"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-primary/50 hover:bg-card"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="font-mono">OperationAzura</span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="https://github.com/amazingfly"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-primary/50 hover:bg-card"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="font-mono">amazingfly</span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <SkillsMatrix />
        <LabStatus />

        <p className="mt-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Derek Stich
        </p>
      </div>
    </aside>
  )
}
