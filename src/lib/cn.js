/** Minimal className join (no tailwind-merge). */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}
