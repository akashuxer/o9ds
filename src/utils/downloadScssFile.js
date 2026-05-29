/** Trigger a browser download of SCSS source text. */
export function downloadScssFile(filename, content) {
  const blob = new Blob([content], { type: 'text/x-scss;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
