export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  index: string
  title: string
  description: string
  highlights: string[]
  tags: string[]
  architecture?: string[]
  href?: string
  org: "amazingfly" | "OperationAzura"
  media: "music-carousel" | "storybook" | "none"
  extraLinks?: ProjectLink[]
}

export const FEATURED: Project[] = [
  {
    index: "01",
    title: "Generative Media Pipeline",
    description:
      "A resumable coordinator that runs Stable Audio 3, image generation, LTX music videos, and publishing as checked-off stages — with hashed outputs, environment provenance, and quality-ranked shorts.",
    highlights: [
      "Plan, doctor, and run stages in order without shell interpolation; resume after interruption from atomic checkpoints.",
      "Coordinates four component repos (SA3, images, LTX, storybook) from one workspace config.",
      "Selects V3 shorts from assembled music videos and hands off to an optional YouTube / Shorts / Facebook uploader.",
    ],
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
    description:
      "Turns structured stories into illustrated, reviewed, narrated videos — compilation, scene contracts, Qwen/Gemma review, Piper narration, and final assembly on top of the shared image backends.",
    highlights: [
      "Stable entry point for Colab or local Q8 generation, with hashed catalog assets and scene-level LoRA selection.",
      "Human-curated assembly path for accepted illustrations plus generated narration.",
      "Shares image rendering, LoRA training, and accessory validation with the images repository rather than duplicating models.",
    ],
    tags: ["Python", "Qwen 3.5", "SDXL", "FLUX", "Piper TTS", "Colab"],
    architecture: ["Story JSON", "Compile", "Image backends", "Review", "Narrate", "Assemble"],
    href: "https://github.com/amazingfly/storybook-pipeline",
    org: "amazingfly",
    media: "storybook",
  },
  {
    index: "03",
    title: "clScan",
    description:
      "A local job-search workbench that collects Craigslist listings, triages them with rules plus a local LLM, and turns the result into a shortlist you can read, listen to, and sort yourself.",
    highlights: [
      "Collection and assessment run concurrently; software-related keywords jump the queue so useful results appear before the full search finishes.",
      "Scores with llama.cpp or Ollama, preserves prompts/timing, and never sends applications — reply addresses stay in the browser when enabled.",
      "Hell yes / maybe / bad-result judgments persist in SQLite and drop that listing from every profile so replacements can surface.",
    ],
    tags: ["Python", "FastAPI", "llama.cpp", "Ollama", "SQLite", "Piper", "Accessibility"],
    architecture: ["Collect", "Dedupe / rules", "Local LLM", "Shortlist UI", "Human sort"],
    href: "https://github.com/OperationAzura/clScan",
    org: "OperationAzura",
    media: "none",
  },
  {
    index: "04",
    title: "Darklands Accessibility",
    description:
      "An open-source toolkit for the 1992 DOS RPG Darklands: native emulator access, OCR-driven speech, and assisted world-map and quest navigation — without shipping the proprietary game.",
    highlights: [
      "DOSBox Staging fork exposes a loopback framebuffer plus memory, keyboard, and mouse APIs independent of desktop focus.",
      "darktext speaks story text and rapidly updated highlighted menu choices through OCR and Piper.",
      "darklands-coords announces save coordinates, calibrates live RAM, and offers verified assisted navigation to quests or rewards.",
    ],
    tags: ["Python", "OCR", "Piper TTS", "DOSBox", "Assistive tech"],
    architecture: ["DOSBox Staging", "Framebuffer / RAM", "OCR speech", "Coords / quests"],
    href: "https://github.com/OperationAzura/darklands-accessibility",
    org: "OperationAzura",
    media: "none",
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
    org: "amazingfly" as const,
    blurb: "Resumable LTX music videos from stills and audio, vision prompts, motion checks, and quality-ranked shorts.",
    tags: ["Python", "LTX", "Gemma", "FFmpeg"],
  },
  {
    name: "sa3",
    href: "https://github.com/amazingfly/sa3",
    org: "amazingfly" as const,
    blurb: "Stable Audio 3 generation, Colab Medium queues, LoRA training, and a local music library UI.",
    tags: ["Python", "Stable Audio 3", "Gradio"],
  },
  {
    name: "images",
    href: "https://github.com/amazingfly/images",
    org: "amazingfly" as const,
    blurb: "SD 1.5 / SDXL generation, Little Queen LoRA training, FLUX ZeroGPU experiments, and reusable validators.",
    tags: ["PyTorch", "SDXL", "FLUX", "LoRA"],
  },
  {
    name: "qwenVoiceOvers",
    href: "https://github.com/amazingfly/qwenVoiceOvers",
    org: "amazingfly" as const,
    blurb: "Qwen voice-design batches for storybook characters — seeded takes, casting lines, and a gendered sample library.",
    tags: ["Python", "Qwen TTS", "Voice design"],
  },
]
