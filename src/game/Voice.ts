/**
 * Voice-over for the story.
 *
 * Everything the player is meant to *hear* rather than just read - the twenty
 * notes and the five archive letters, the tape narration that opens the game,
 * the two lines the patient mutters in Room 404, and the dispatcher still
 * repeating down the cut ward phones - goes through this module.
 *
 * It is built on the browser's own speech synthesiser on purpose: the game
 * ships as static files and promises to run fully offline, so the voice has to
 * come from the device itself. No network, no API key, and a device without a
 * TTS engine simply leaves the line unread rather than breaking anything.
 *
 * The caller decides *when* something is spoken; this file only decides *how*,
 * and holds the on/off switch that the settings panel writes to.
 */
import { getLanguage, type Lang } from './i18n';

/** How a line should be delivered. */
export type VoiceStyle = 'narration' | 'phone';

let enabled = true;
let voices: SpeechSynthesisVoice[] = [];
let listening = false;

function synth(): SpeechSynthesis | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  return window.speechSynthesis;
}

/** The BCP-47 tag the synthesiser should aim for. */
function langTag(lang: Lang): string {
  if (lang === 'ru') return 'ru-RU';
  if (lang === 'en') return 'en-US';
  return 'uz-UZ';
}

function collectVoices(): void {
  const s = synth();
  if (!s) return;
  const list = s.getVoices();
  if (list.length) voices = list;
}

function ensureListening(): void {
  const s = synth();
  if (!s || listening) return;
  listening = true;
  // Voices arrive asynchronously on most engines; keep the cache warm.
  s.addEventListener('voiceschanged', collectVoices);
  collectVoices();
}

function pickVoice(tag: string): SpeechSynthesisVoice | null {
  if (voices.length === 0) return null;
  const lower = tag.toLowerCase();
  const base = lower.split('-')[0];
  return (
    voices.find((v) => v.lang.toLowerCase() === lower) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(base)) ??
    // Uzbek ships with almost no voices: fall back to whatever the device
    // does have rather than staying silent.
    null
  );
}

/** Turns the whole voice-over on or off. The caller folds mute into this. */
export function setVoiceEnabled(on: boolean): void {
  enabled = on;
  if (!on) stopVoice();
}

/** Cancels whatever is being read right now. */
export function stopVoice(): void {
  const s = synth();
  if (!s) return;
  try {
    s.cancel();
  } catch {
    /* engine already idle */
  }
}

/** Reads one line aloud, replacing whatever was being read before. */
export function speakLine(text: string, style: VoiceStyle = 'narration'): void {
  if (!enabled || !text) return;
  const s = synth();
  if (!s) return;
  ensureListening();

  try {
    s.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const tag = langTag(getLanguage());
    utterance.lang = tag;
    const voice = pickVoice(tag);
    if (voice) utterance.voice = voice;

    // Narration sits back a little; the dispatcher on the ward phones is
    // lower and slower, the way a looped tape sounds.
    if (style === 'phone') {
      utterance.rate = 0.92;
      utterance.pitch = 0.7;
    } else {
      utterance.rate = 0.97;
      utterance.pitch = 0.9;
    }

    s.speak(utterance);
  } catch {
    /* no TTS available - the text stays on screen all the same */
  }
}
