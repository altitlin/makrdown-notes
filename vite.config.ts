import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const FILENAME = fileURLToPath(import.meta.url)
const DIRNAME = dirname(FILENAME)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve(DIRNAME, 'src', 'app'),
      'shared/constants': resolve(DIRNAME, 'src', 'shared', 'constants'),
      'shared/ui': resolve(DIRNAME, 'src', 'shared', 'ui'),
    },
  },
  server: {
    port: 4200,
    open: true,
  },
})
