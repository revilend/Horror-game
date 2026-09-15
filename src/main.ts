import './style.css';
import { Game } from './game/Game';

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
