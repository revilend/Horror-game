import { defineConfig, type Plugin } from 'vite'

/**
 * Strips the raw-host fallback out of every output.
 *
 * index.html carries a small safety net for GitHub Pages deployments that are
 * still set to "Deploy from a branch" (see the comment around
 * RAW_HOST_FALLBACK_START). That net is pointless - and would be a needless
 * redirect - once Vite has bundled the entry point, so it is deleted here.
 */
function stripRawHostFallback(): Plugin {
  const pattern = /[ \t]*<!-- RAW_HOST_FALLBACK_START[\s\S]*?RAW_HOST_FALLBACK_END -->\n?/g
  return {
    name: 'strip-raw-host-fallback',
    transformIndexHtml(html) {
      return html.replace(pattern, '')
    },
  }
}

export default defineConfig({
  // Relative asset paths: the same build works in the sandbox preview at the
  // site root and on GitHub Pages under https://revilend.github.io/Horror-game/.
  base: './',
  plugins: [stripRawHostFallback()],
  server: {
    host: '0.0.0.0',
    hmr: false,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
