/** Theme-aware public o9illus SVG path (matches Illustrations gallery assets). */
export function o9illusAssetUrl(name, theme) {
  const mode = theme === 'dark' ? 'dark' : 'light'
  return `/o9illus/${mode}/o9illus-${mode}-${name}.svg`
}
