import { asset } from "@/lib/asset"

export type MusicClip = {
  id: string
  src: string
  poster: string
  label: string
  file: string
}

const FILES = [
  "01_short_2_ss85.5_to_114.5.mp4",
  "02_short_4_ss255.5_to_284.5.mp4",
  "03_short_3_ss147.4_to_178.4.mp4",
  "04_short_3_ss148.2_to_177.2.mp4",
  "05_short_4_ss148.0_to_175.0.mp4",
  "06_short_2_ss85.5_to_114.5.mp4",
  "07_short_4_ss258.9_to_287.9.mp4",
  "08_short_3_ss133.9_to_164.9.mp4",
  "09_short_3_ss206.8_to_235.8.mp4",
  "10_short_4_ss160.2_to_189.2.mp4",
  "11_short_3_ss147.0_to_180.0.mp4",
  "12_short_2_ss105.3_to_136.3.mp4",
  "13_short_3_ss147.4_to_178.4.mp4",
  "14_short_4_ss236.5_to_267.5.mp4",
  "15_short_3_ss145.7_to_170.7.mp4",
  "16_short_3_ss96.7_to_127.7.mp4",
  "17_short_4_ss203.7_to_232.7.mp4",
  "18_short_5_ss307.1_to_338.1.mp4",
  "19_short_3_ss132.8_to_201.9.mp4",
  "20_short_4_ss196.7_to_254.5.mp4",
] as const

function clip(file: string): MusicClip {
  const id = file.slice(0, 2)
  return {
    id,
    file,
    src: asset(`/videos/musicVideos/${file}`),
    poster: asset(`/videos/musicVideos/${id}.jpg`),
    label: `Clip ${Number(id)}`,
  }
}

const BY_ID: Record<string, MusicClip> = Object.fromEntries(FILES.map((file) => [file.slice(0, 2), clip(file)]))

/** Lead cuts a hiring manager actually watches. Clip 19 first. */
export const FEATURED_CLIP_IDS = ["19", "20", "18", "07", "01"] as const

export const FEATURED_CLIPS: MusicClip[] = FEATURED_CLIP_IDS.map((id) => BY_ID[id]!)

/** Full library: featured first, then the remaining shorts. */
export const ALL_CLIPS: MusicClip[] = [
  ...FEATURED_CLIPS,
  ...FILES.map(clip).filter((item) => !FEATURED_CLIP_IDS.includes(item.id as (typeof FEATURED_CLIP_IDS)[number])),
]

export const MUSIC_CLIPS = ALL_CLIPS

export const STORYBOOK_VIDEO = {
  src: asset("/videos/storybook/storybook_curated.mp4"),
  poster: asset("/videos/storybook/poster.jpg"),
  label: "The Witches Trick — curated storybook",
} as const
