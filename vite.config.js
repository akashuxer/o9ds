import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Use the real vendored @o9ds/react when its built dist/ exists.
// Fall back to the local shim only when the vendor tree was pulled without a build.
const o9dsReactDist = path.resolve(__dirname, 'vendor/@o9ds/react/dist/index.js')
const hasVendoredO9dsReact = fs.existsSync(o9dsReactDist)

const alias = {
  '@': path.resolve(__dirname, './src'),
}
if (!hasVendoredO9dsReact) {
  alias['@o9ds/react'] = path.resolve(__dirname, './src/shims/o9ds-react.jsx')
  console.warn('[vite] vendor/@o9ds/react/dist missing — using stub shim. Run `npm run vendor:o9ds`.')
}

export default defineConfig({
  plugins: [react()],
  resolve: { alias },
})
