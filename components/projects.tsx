import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { ReactNode } from "react"
import { AutoplayVideo } from "@/components/autoplay-video"
import { GithubIcon } from "@/components/github-icon"
import { VideoCarousel } from "@/components/video-carousel"
import { FEATURED, STACK, type Project } from "@/lib/projects"
import { STORYBOOK_VIDEO } from "@/lib/videos"
import { cn } from "@/lib/utils"

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {label}
    </span>
  )
}

function Architecture({ steps }: { steps: string[] }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Architecture</p>
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-background/60 p-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-md bg-secondary px-2.5 py-1.5 font-mono text-xs text-foreground">{step}</span>
            {i < steps.length - 1 ? <ArrowRight className="h-3.5 w-3.5 text-primary" /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function repoPath(href: string) {
  try {
    const url = new URL(href)
    return url.pathname.replace(/^\//, "")
  } catch {
    return href
  }
}

function RepoLink({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
    >
      <GithubIcon className="size-3.5" />
      <span>{children ?? repoPath(href)}</span>
      <ArrowUpRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-border bg-card/50 p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Project {project.index}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
        </div>
        {project.href ? <RepoLink href={project.href} /> : null}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-5">
        {project.media === "music-carousel" ? <VideoCarousel /> : null}
        {project.media === "storybook" ? (
          <div className="rounded-xl border border-border bg-background/80 p-3 sm:p-4">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{STORYBOOK_VIDEO.label}</p>
            <AutoplayVideo
              src={STORYBOOK_VIDEO.src}
              poster={STORYBOOK_VIDEO.poster}
              label={STORYBOOK_VIDEO.label}
              loop
              aspectClass="aspect-[9/16]"
              className="mx-auto w-full max-w-md"
            />
          </div>
        ) : null}
        {project.architecture ? <Architecture steps={project.architecture} /> : null}
      </div>

      {project.extraLinks && project.extraLinks.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-3">
          {project.extraLinks.map((link) => (
            <li key={link.href}>
              <RepoLink href={link.href}>{link.label}</RepoLink>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag label={tag} />
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Projects() {
  return (
    <div className="flex min-w-0 flex-col gap-6 px-6 py-10 sm:px-8 lg:py-12">
      <div className="mb-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Selected Work</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Featured Projects</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Work from the last month across generative media, local LLMs, and accessibility — with pipeline output on
          the page, not placeholders.
        </p>
      </div>

      {FEATURED.map((project) => (
        <ProjectCard key={project.index} project={project} />
      ))}

      <section className="mt-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Component repos</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">Media stack</h3>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          The pipeline above is split so audio, images, video, and voice each have a dedicated checkout.
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {STACK.map((repo) => (
            <li key={repo.name} className={cn("rounded-lg border border-border bg-card/50 p-5")}>
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-mono text-sm font-semibold">{repo.name}</h4>
                <RepoLink href={repo.href}>GitHub</RepoLink>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{repo.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {repo.tags.map((tag) => (
                  <li key={tag}>
                    <Tag label={tag} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
