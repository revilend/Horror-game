import './style.css';
import { Game } from './game/Game';

// Signals to the fallback in index.html that the real bundle did load, so it
// does not forward the visitor to the prebuilt copy in ./standalone.
declare global {
  interface Window {
    __DARK_ASYLUM_BOOTED?: boolean;
  }
}
window.__DARK_ASYLUM_BOOTED = true;
document.body.classList.remove('unbooted');

// Touch devices play in landscape only (see #rotate-overlay in style.css)
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.body.classList.add('touch-device');
}

/**
 * Register the offline cache in production builds only. In development a
 * service worker would happily serve yesterday's bundle and hide every code
 * change, which is a miserable way to debug.
 */
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Relative path: GitHub Pages serves the game from a repository subpath.
    void navigator.serviceWorker.register('./sw.js').catch(() => {
      /* offline play is a bonus, never a requirement */
    });
  });
}

const game = new Game();

// Start initialization
game.init().catch((err) => {
  console.error('Game initialization failed:', err);
  const loadingText = document.getElementById('loading-text');
  if (loadingText) {
    loadingText.textContent = 'Xatolik yuz berdi! Qayta yuklang.';
    loadingText.style.color = '#ff0000';
  }
});
