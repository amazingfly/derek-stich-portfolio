import { Mail } from "lucide-react"
import { GithubIcon } from "./github-icon"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Derek Stich
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:derekstich@gmail.com"
            aria-label="Email Derek Stich"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/OperationAzura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OperationAzura on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/amazingfly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="amazingfly on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
