/** Shared unmute preference so later clips keep sound once a viewer unmutes. */
let preferSound = false
const listeners = new Set<(value: boolean) => void>()

export function getPreferSound() {
  return preferSound
}

export function setPreferSound(value: boolean) {
  if (preferSound === value) return
  preferSound = value
  for (const listener of listeners) listener(value)
}

export function subscribePreferSound(listener: (value: boolean) => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
