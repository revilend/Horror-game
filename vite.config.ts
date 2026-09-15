import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    hmr: false,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
