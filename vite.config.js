import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // See src/shims/o9ds-react.jsx — vendor package may ship without dist/ after pull.
      '@o9ds/react': path.resolve(__dirname, './src/shims/o9ds-react.jsx'),
    },
  },
})
