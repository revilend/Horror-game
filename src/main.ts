import './style.css';
import './dynamic-joystick.css';
import { Game } from './game/Game';
import { applyTranslations, t } from './game/i18n';

// Signals to the fallback in index.html that the real bundle did load, so it
// does not forward the visitor to the prebuilt copy in ./standalone.
declare global {
  interface Window {
    __DARK_ASYLUM_BOOTED?: boolean;
  }
}
window.__DARK_ASYLUM_BOOTED = true;
document.body.classList.remove('unbooted');

/**
 * Immersive boot: real fullscreen and a landscape lock.
 *
 * Both calls are permission-gated - iOS Safari refuses requestFullscreen
 * outside a real user gesture and old engines have no screen.orientation at
 * all - so each is fired once and forgotten, and a refusal stays a
 * non-event rather than a broken boot. That is also why it hangs off the
 * first gesture instead of load.
 */
function goImmersive(): void {
  document.removeEventListener('pointerdown', goImmersive, true);
  document.removeEventListener('keydown', goImmersive, true);

  // `lock` is in the spec but has never been in lib.dom, so it is reached
  // through a shape rather than through the type. Absent on desktop Firefox
  // and refused on iOS: both are non-events.
  const orientation = screen.orientation as
    | (ScreenOrientation & { lock?: (value: string) => Promise<void> })
    | undefined;
  if (orientation && typeof orientation.lock === 'function') {
    void orientation.lock('landscape').catch(() => {});
  }

  if (!document.fullscreenElement && typeof document.documentElement.requestFullscreen === 'function') {
    void document.documentElement.requestFullscreen().catch(() => {});
  }
}

document.addEventListener('pointerdown', goImmersive, true);
document.addEventListener('keydown', goImmersive, true);

// The loading screen is markup, so it is translated before the game boots.
applyTranslations();

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
    const msg = err instanceof Error ? `${err.message}\n${err.stack ?? ''}` : String(err);
    loadingText.textContent = msg.slice(0, 200);
    loadingText.style.color = '#ff0000';
    loadingText.style.fontSize = '11px';
    loadingText.style.wordBreak = 'break-all';
  }
});
