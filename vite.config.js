import path from 'node:path'
import fs from 'node:fs'
import { execFileSync } from 'node:child_process'
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

/** Regenerate WebP siblings for public PNGs once per production build (also covers `vite build` without npm hooks). */
function publicPngToWebpPlugin() {
  return {
    name: 'o9ds-public-png-to-webp',
    apply: 'build',
    buildStart() {
      execFileSync(process.execPath, [path.join(__dirname, 'scripts/optimize-public-png-to-webp.mjs')], {
        stdio: 'inherit',
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), publicPngToWebpPlugin()],
  resolve: { alias },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const isNodeMod = id.includes('node_modules')
          const isVendoredO9ds = id.includes(`${path.sep}vendor${path.sep}@o9ds${path.sep}`)
          if (!isNodeMod && !isVendoredO9ds) return undefined
          if (id.includes('react-router')) return 'router'
          if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/')) return 'react-vendor'
          if (id.includes('@o9ds') || isVendoredO9ds) return 'o9ds-vendor'
          return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
