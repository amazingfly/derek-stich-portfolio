export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  index: string
  title: string
  result: string
  problem: string
  approach: string
  tags: string[]
  architecture?: string[]
  href?: string
  org: "amazingfly" | "OperationAzura"
  media: "music-carousel" | "storybook" | "none"
  evidence?: "clscan" | "darklands"
  extraLinks?: ProjectLink[]
}

export const FEATURED: Project[] = [
  {
    index: "01",
    title: "Generative Media Pipeline",
    result:
      "Shipped a resumable coordinator that turns audio, stills, and LTX into ranked shorts — evidence is the player below.",
    problem:
      "Four generative repos (audio, images, video, storybook) were being run by hand, so a crash meant redoing finished stages and losing which prompt produced which file.",
    approach:
      "One workspace config drives plan → doctor → run as argv arrays, no shell interpolation. Atomic checkpoints hash outputs and provenance so resume is safe after interruption.",
    tags: ["Python", "uv", "LTX-Video", "SA3", "Colab", "FFmpeg", "Provenance"],
    architecture: ["SA3 audio", "Image gen", "LTX video", "Short picker", "Publish"],
    href: "https://github.com/amazingfly/media-pipeline",
    org: "amazingfly",
    media: "music-carousel",
    extraLinks: [
      { label: "ltx-video", href: "https://github.com/amazingfly/ltx-video" },
      { label: "sa3", href: "https://github.com/amazingfly/sa3" },
      { label: "images", href: "https://github.com/amazingfly/images" },
    ],
  },
  {
    index: "02",
    title: "Storybook Pipeline",
    result: "Illustrated, reviewed, narrated videos from structured stories — the cut below is a curated assembly.",
    problem:
      "Story production duplicated image backends and had no review gate, so a bad illustration still made it into the final narrated video.",
    approach:
      "Compile scene contracts, generate on shared SDXL/FLUX backends with scene-level LoRA, review with Qwen/Gemma, narrate with Piper, then assemble only accepted frames.",
    tags: ["Python", "Qwen 3.5", "SDXL", "FLUX", "Piper TTS", "Colab"],
    architecture: ["Story JSON", "Compile", "Image backends", "Review", "Narrate", "Assemble"],
    href: "https://github.com/amazingfly/storybook-pipeline",
    org: "amazingfly",
    media: "storybook",
  },
  {
    index: "03",
    title: "clScan",
    result:
      "A local job-search workbench: stream listings, triage with a local LLM, then you sort — it never sends an application.",
    problem:
      "Job search dumped hundreds of listings into a pile. Cloud LLMs were the wrong place for contact details, and useful software roles showed up last.",
    approach:
      "Collect and assess concurrently. Software keywords jump the queue. llama.cpp or Ollama scores locally; Hell yes / maybe / bad-result persist in SQLite and drop that listing everywhere so replacements can surface.",
    tags: ["Python", "FastAPI", "llama.cpp", "Ollama", "SQLite", "Piper", "Accessibility"],
    architecture: ["Collect", "Dedupe / rules", "Local LLM", "Shortlist UI", "Human sort"],
    href: "https://github.com/OperationAzura/clScan",
    org: "OperationAzura",
    media: "none",
    evidence: "clscan",
  },
  {
    index: "04",
    title: "Darklands Accessibility",
    result: "An open-source toolkit that speaks Darklands and navigates the map — without shipping the proprietary game.",
    problem:
      "A 1992 DOS RPG is unreadable and unnavigable without sight. Desktop OCR fails when the window is unfocused, and the game itself cannot be redistributed.",
    approach:
      "A DOSBox Staging fork exposes a loopback framebuffer plus RAM/input APIs. darktext OCRs story text and highlighted choices into Piper. darklands-coords calibrates live RAM and offers verified assisted navigation.",
    tags: ["Python", "OCR", "Piper TTS", "DOSBox", "Assistive tech"],
    architecture: ["DOSBox Staging", "Framebuffer / RAM", "OCR speech", "Coords / quests"],
    href: "https://github.com/OperationAzura/darklands-accessibility",
    org: "OperationAzura",
    media: "none",
    evidence: "darklands",
    extraLinks: [
      { label: "darktext", href: "https://github.com/OperationAzura/darktext" },
      { label: "darklands-coords", href: "https://github.com/OperationAzura/darklands-coords" },
    ],
  },
]

export const STACK = [
  {
    name: "ltx-video",
    href: "https://github.com/amazingfly/ltx-video",
    blurb: "Resumable LTX music videos from stills and audio, vision prompts, motion checks, and quality-ranked shorts.",
    tags: ["Python", "LTX", "Gemma", "FFmpeg"],
  },
  {
    name: "sa3",
    href: "https://github.com/amazingfly/sa3",
    blurb: "Stable Audio 3 generation, Colab Medium queues, LoRA training, and a local music library UI.",
    tags: ["Python", "Stable Audio 3", "Gradio"],
  },
  {
    name: "images",
    href: "https://github.com/amazingfly/images",
    blurb: "SD 1.5 / SDXL generation, Little Queen LoRA training, FLUX ZeroGPU experiments, and reusable validators.",
    tags: ["PyTorch", "SDXL", "FLUX", "LoRA"],
  },
  {
    name: "qwenVoiceOvers",
    href: "https://github.com/amazingfly/qwenVoiceOvers",
    blurb: "Qwen voice-design batches for storybook characters — seeded takes, casting lines, and a gendered sample library.",
    tags: ["Python", "Qwen TTS", "Voice design"],
  },
]
