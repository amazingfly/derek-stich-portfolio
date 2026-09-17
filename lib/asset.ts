/** Prefix public asset paths when the static export lives under GitHub Pages. */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalized}`
}
