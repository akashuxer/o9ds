import path from 'node:path'
import fs from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Use the real vendored @arvo/react when its built dist/ exists.
// Fall back to the local shim only when the vendor tree was pulled without a build.
const arvoReactDist = path.resolve(__dirname, 'vendor/@arvo/react/dist/index.js')
const hasVendoredArvoReact = fs.existsSync(arvoReactDist)

const alias = {
  '@': path.resolve(__dirname, './src'),
}
if (!hasVendoredArvoReact) {
  alias['@arvo/react'] = path.resolve(__dirname, './src/shims/arvo-react.jsx')
  console.warn('[vite] vendor/@arvo/react/dist missing — using stub shim. Run `npm run vendor:arvo`.')
}

/**
 * Mirror vercel.json `/storybook` → `/storybook/index.html` in dev.
 * Without this, Vite's SPA fallback serves the docs app for `/storybook/`.
 */
function storybookStaticDevPlugin() {
  return {
    name: 'arvo-storybook-static-dev',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const pathOnly = (req.url ?? '').split('?')[0]
        if (pathOnly === '/storybook' || pathOnly === '/storybook/') {
          const query = req.url?.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
          req.url = `/storybook/index.html${query}`
        }
        next()
      })
    },
  }
}

/** Regenerate WebP siblings for public PNGs once per production build (also covers `vite build` without npm hooks). */
function publicPngToWebpPlugin() {
  return {
    name: 'arvo-public-png-to-webp',
    apply: 'build',
    buildStart() {
      execFileSync(process.execPath, [path.join(__dirname, 'scripts/optimize-public-png-to-webp.mjs')], {
        stdio: 'inherit',
      })
    },
  }
}

export default defineConfig({
  plugins: [storybookStaticDevPlugin(), react(), publicPngToWebpPlugin()],
  resolve: { alias },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const isNodeMod = id.includes('node_modules')
          const isVendoredArvo = id.includes(`${path.sep}vendor${path.sep}@arvo${path.sep}`)
          if (!isNodeMod && !isVendoredArvo) return undefined
          if (id.includes('react-router')) return 'router'
          if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/')) return 'react-vendor'
          if (id.includes('@arvo') || isVendoredArvo) return 'arvo-vendor'
          return 'vendor'
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
