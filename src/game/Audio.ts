/**
 * Horror audio built on the Web Audio API.
 *
 * The room tone, the saw, the footsteps - all synthesised. The two music
 * tracks are the one exception: `bgm.mp3` and `chase.mp3` ship with the
 * game, are pre-buffered the moment audio initialises, and are crossfaded by
 * the state machine below. If either file fails to load, every path falls
 * back to the synthesised bed, so a missing file degrades the mix rather
 * than the run.
 */
import bgmTrackUrl from '../../bgm.mp3?url';
import chaseTrackUrl from '../../chase.mp3?url';

export class HorrorAudio {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambienceGain: GainNode | null = null;
  private ambienceOsc: OscillatorNode | null = null;
  private ambienceOsc2: OscillatorNode | null = null;
  private windSource: AudioBufferSourceNode | null = null;
  private rainSource: AudioBufferSourceNode | null = null;
  private rainGain: GainNode | null = null;
  /** The tap in the ward basin, and the valve radio down the corridor. */
  private tapSource: AudioBufferSourceNode | null = null;
  private tapGain: GainNode | null = null;
  private staticSource: AudioBufferSourceNode | null = null;
  private staticGain: GainNode | null = null;
  /**
   * The radio's broadcast: the tinny waltz under the static.
   *
   * Static on its own reads as a broken prop; a few notes of something jaunty
   * coming out of it is what makes a radio sound *switched on* - and it is the
   * noise the creature follows, so it has to carry.
   */
  private radioGain: GainNode | null = null;
  private radioTimer: number | null = null;
  private radioStep = 0;
  private isInitialized = false;
  private ambienceRunning = false;

  /* -------------------------------------------------------------------
   * The valve radio
   *
   * Static on its own reads as a broken prop. A few bars of something jaunty
   * coming out of it is what makes a radio sound switched on - and it is that
   * noise, not the hiss, that the creature follows.
   * ----------------------------------------------------------------- */

  /** The broadcast riding under the static, switched on with the set. */
  setRadioBroadcast(playing: boolean): void {
    if (!this.ctx || !this.masterGain) return;

    if (!this.radioGain) {
      this.radioGain = this.ctx.createGain();
      this.radioGain.gain.value = 0;
      // A speaker the size of a fist: everything outside the mid-range goes.
      const cone = this.ctx.createBiquadFilter();
      cone.type = 'bandpass';
      cone.frequency.value = 1150;
      cone.Q.value = 0.9;
      this.radioGain.connect(cone);
      cone.connect(this.masterGain);
    }

    this.radioGain.gain.setTargetAtTime(
      playing ? 0.5 : 0,
      this.ctx.currentTime,
      playing ? 0.25 : 0.4,
    );

    if (playing) {
      if (this.radioTimer === null) this.scheduleRadioNote();
      return;
    }
    if (this.radioTimer !== null) {
      window.clearTimeout(this.radioTimer);
      this.radioTimer = null;
    }
  }

  /**
   * One note of the broadcast, with the next one queued behind it.
   *
   * Scheduled a note at a time rather than looped from a buffer, because the
   * melody is the thing the player hears change when the set is switched on,
   * and eight notes on a two-second loop read as a stuck record.
   */
  private scheduleRadioNote(): void {
    const ctx = this.ctx;
    if (!ctx || !this.radioGain) {
      this.radioTimer = null;
      return;
    }

    // G major in a slow three: what a hospital radio played at two in the
    // morning in 1987.
    const melody = [0, 4, 7, 4, 2, 5, 9, 5];
    const step = this.radioStep++ % melody.length;
    const now = ctx.currentTime;

    const voice = ctx.createOscillator();
    voice.type = 'triangle';
    voice.frequency.value = 196 * Math.pow(2, melody[step] / 12);

    // Valve warmth: a second, quieter voice a fifth above the first.
    const harmony = ctx.createOscillator();
    harmony.type = 'sine';
    harmony.frequency.value = 196 * Math.pow(2, (melody[step] + 7) / 12);
    const harmonyGain = ctx.createGain();
    harmonyGain.gain.value = 0.35;

    const envelope = ctx.createGain();
    envelope.gain.value = 0;
    envelope.gain.setTargetAtTime(0.6, now, 0.03);
    envelope.gain.setTargetAtTime(0, now + 0.32, 0.16);

    voice.connect(envelope);
    harmony.connect(harmonyGain);
    harmonyGain.connect(envelope);
    envelope.connect(this.radioGain);

    voice.start(now);
    harmony.start(now);
    voice.stop(now + 0.75);
    harmony.stop(now + 0.75);

    // A bar of three, a breath at the end of it, and the set plays on.
    const beat = step % 3 === 2 ? 620 : 440;
    this.radioTimer = window.setTimeout(() => this.scheduleRadioNote(), beat);
  }
  /**
   * One second of white noise, built once and reused by every footfall.
   *
   * The old step built a fresh AudioBuffer per stride - five thousand samples
   * and a fresh allocation, sixty times a minute and twice that when running.
   * That is a garbage-collection hitch timed to land exactly as the boot hits
   * the tile.
   */
  private noiseBuffer: AudioBuffer | null = null;
  /** Two-track music system: exploration BGM vs chase music. */
  private chaseGain: GainNode | null = null;
  private chaseOscs: OscillatorNode[] = [];
  private chaseRunning = false;
  private musicState: 'explore' | 'chase' = 'explore';
  /** The shipped music files, streamed through the same master bus. */
  private bgmEl: HTMLAudioElement | null = null;
  private chaseEl: HTMLAudioElement | null = null;
  private bgmTrackGain: GainNode | null = null;
  private chaseTrackGain: GainNode | null = null;
  /** False once either file fails to load - the procedural bed carries it. */
  private tracksOk = false;
  /** True between startAmbience() and stopAmbience(): the run is live. */
  private musicEnabled = false;

  /** Volume targets for the two tracks. */
  private static readonly EXPLORE_BGM_VOL = 0.35;
  private static readonly CHASE_MUSIC_VOL = 0.55;

  private muted = false;
  private volume = 0.5;

  async init(): Promise<void> {
    if (this.isInitialized) return;

    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.muted ? 0 : this.volume;
    this.masterGain.connect(this.ctx.destination);

    this.ambienceGain = this.ctx.createGain();
    this.ambienceGain.gain.value = 0;
    this.ambienceGain.connect(this.masterGain);

    this.isInitialized = true;
    this.installVisibilityHandler();
    this.setupMusicTracks();
  }

  resume(): void {
    if (this.ctx?.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  /** True once the context exists and is genuinely producing sound. */
  get isRunning(): boolean {
    return this.ctx?.state === 'running';
  }

  /**
   * Brings a parked context back up.
   *
   * Mobile Chrome creates an AudioContext suspended unless it is done inside a
   * real user gesture, and parks a running one whenever the tab loses focus.
   * `resume()` settles a frame or two later, so this resolves once the context
   * is actually live - the callers use that to decide whether starting the
   * ambience will make any noise.
   */
  unlock(): Promise<boolean> {
    const ctx = this.ctx;
    if (!ctx) return Promise.resolve(false);
    // A live context may still owe a play() the browser refused while the tab
    // was parked - the gesture this arrives in is what clears that debt.
    this.ensureMusicPlaying();
    if (ctx.state === 'running') return Promise.resolve(true);
    return ctx.resume().then(
      () => {
        this.ensureMusicPlaying();
        return ctx.state === 'running';
      },
      () => false,
    );
  }

  suspend(): void {
    if (this.ctx?.state === 'running') {
      void this.ctx.suspend();
    }
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.masterGain) {
      this.masterGain.gain.value = muted ? 0 : this.volume;
    }
  }

  get isMuted(): boolean {
    return this.muted;
  }

  setVolume(v: number): void {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.masterGain && !this.muted) {
      this.masterGain.gain.value = this.volume;
    }
  }

  /**
   * Low drone, eerie high tone and a bed of wind.
   * The graph is only built once, but the gain is re-raised every time so a
   * restart after `stopAmbience()` is not silent.
   */
  startAmbience(): void {
    if (!this.ctx || !this.ambienceGain) return;

    if (!this.ambienceRunning) {
      this.buildAmbienceGraph();
      this.ambienceRunning = true;
    }

    // Always re-raise the gain: after `stopAmbience()` (death / victory) the bed
    // is silent, and a restart must bring it back.
    this.ambienceGain.gain.setTargetAtTime(0.45, this.ctx.currentTime, 1.2);

    // Every run begins in the explore state. If the shipped tracks are already
    // buffered they take over as the music; otherwise the warm-up listener
    // starts them the moment they are, and the ambience bed carries the room
    // until then.
    this.musicEnabled = true;
    this.musicState = 'explore';
    const now = this.ctx.currentTime;
    if (this.chaseGain) this.ramp(this.chaseGain.gain, 0, now, 0.4);
    if (this.bgmTrackGain && this.chaseTrackGain && this.filesReady()) {
      this.ramp(this.chaseTrackGain.gain, 0, now, 0.4);
      this.ramp(this.bgmTrackGain.gain, HorrorAudio.EXPLORE_BGM_VOL, now, 1.2);
      this.ensureMusicPlaying();
    } else {
      this.pauseMusic();
    }
  }

  private buildAmbienceGraph(): void {
    if (!this.ctx || !this.ambienceGain) return;

    this.ambienceOsc = this.ctx.createOscillator();
    this.ambienceOsc.type = 'sawtooth';
    this.ambienceOsc.frequency.value = 38;

    const lowpass = this.ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 190;

    this.ambienceOsc.connect(lowpass);
    lowpass.connect(this.ambienceGain);
    this.ambienceOsc.start();

    this.ambienceOsc2 = this.ctx.createOscillator();
    this.ambienceOsc2.type = 'sine';
    this.ambienceOsc2.frequency.value = 213;

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 300;
    bandpass.Q.value = 22;

    const toneGain = this.ctx.createGain();
    toneGain.gain.value = 0.09;

    this.ambienceOsc2.connect(bandpass);
    bandpass.connect(toneGain);
    toneGain.connect(this.ambienceGain);
    this.ambienceOsc2.start();

    // Wind: looping filtered noise
    const seconds = 4;
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * seconds, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.4;
    }
    this.windSource = this.ctx.createBufferSource();
    this.windSource.buffer = buffer;
    this.windSource.loop = true;

    const windFilter = this.ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = 340;

    const windGain = this.ctx.createGain();
    windGain.gain.value = 0.45;

    this.windSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.ambienceGain);
    this.windSource.start();

    // --- Dark ambient music pad -------------------------------------------
    // Two detuned triangle oscillators for a thick, slow-moving pad drone.
    const padGain = this.ctx.createGain();
    padGain.gain.value = 0.12;
    padGain.connect(this.ambienceGain);

    const padA = this.ctx.createOscillator();
    padA.type = 'triangle';
    padA.frequency.value = 55; // low A
    const padB = this.ctx.createOscillator();
    padB.type = 'triangle';
    padB.frequency.value = 55.6; // slight detune for chorus

    const padFilter = this.ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 220;
    padFilter.Q.value = 1.2;

    padA.connect(padFilter);
    padB.connect(padFilter);
    padFilter.connect(padGain);
    padA.start();
    padB.start();

    // Slow LFO on the filter cutoff for movement
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.08;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 80;
    lfo.connect(lfoGain);
    lfoGain.connect(padFilter.frequency);
    lfo.start();

    // Eerie harmonic overtone — a high, barely-audible singing tone
    const overtone = this.ctx.createOscillator();
    overtone.type = 'sine';
    overtone.frequency.value = 220; // A3
    const overtoneGain = this.ctx.createGain();
    overtoneGain.gain.value = 0.025;
    const overtoneFilter = this.ctx.createBiquadFilter();
    overtoneFilter.type = 'bandpass';
    overtoneFilter.frequency.value = 440;
    overtoneFilter.Q.value = 18;
    overtone.connect(overtoneFilter);
    overtoneFilter.connect(overtoneGain);
    overtoneGain.connect(this.ambienceGain);
    overtone.start();

    // Slow vibrato on the overtone
    const vib = this.ctx.createOscillator();
    vib.type = 'sine';
    vib.frequency.value = 0.3;
    const vibGain = this.ctx.createGain();
    vibGain.gain.value = 4;
    vib.connect(vibGain);
    vibGain.connect(overtone.frequency);
    vib.start();

    // Deep pulse — rhythmic sub-bass throb
    const pulseGain = this.ctx.createGain();
    pulseGain.gain.value = 0;
    pulseGain.connect(this.ambienceGain);

    const pulseOsc = this.ctx.createOscillator();
    pulseOsc.type = 'sine';
    pulseOsc.frequency.value = 30;
    pulseOsc.connect(pulseGain);
    pulseOsc.start();

    // LFO the pulse gain for a throb at ~0.15 Hz
    const pulseLfo = this.ctx.createOscillator();
    pulseLfo.type = 'sine';
    pulseLfo.frequency.value = 0.15;
    const pulseLfoGain = this.ctx.createGain();
    pulseLfoGain.gain.value = 0.06;
    pulseLfo.connect(pulseLfoGain);
    pulseLfoGain.connect(pulseGain.gain);
    pulseLfo.start();
  }

  stopAmbience(): void {
    if (!this.ctx || !this.ambienceGain) return;
    const now = this.ctx.currentTime;
    this.ambienceGain.gain.setTargetAtTime(0, now, 1);

    // Death and victory end the run: no track may keep playing under the end
    // screen. The elements pause outright; the synthesised bed just goes
    // quiet, because its nodes belong to the context and are reused next run.
    this.musicEnabled = false;
    this.pauseMusic();
    if (this.bgmTrackGain) {
      this.bgmTrackGain.gain.cancelScheduledValues(now);
      this.bgmTrackGain.gain.value = 0;
    }
    if (this.chaseTrackGain) {
      this.chaseTrackGain.gain.cancelScheduledValues(now);
      this.chaseTrackGain.gain.value = 0;
    }
    if (this.chaseGain) this.ramp(this.chaseGain.gain, 0, now, 0.4);
  }

  /** Random distant screech. */
  playCreepySound(): void {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = Math.random() > 0.5 ? 'sine' : 'triangle';
    osc.frequency.value = 100 + Math.random() * 400;

    filter.type = 'bandpass';
    filter.frequency.value = 200 + Math.random() * 600;
    filter.Q.value = 10 + Math.random() * 30;

    gain.gain.value = 0;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    const now = this.ctx.currentTime;
    gain.gain.setTargetAtTime(0.07 + Math.random() * 0.05, now, 0.3);
    gain.gain.setTargetAtTime(0, now + 1 + Math.random() * 2, 0.5);
    osc.frequency.setTargetAtTime(osc.frequency.value + (Math.random() - 0.5) * 100, now + 0.5, 1);

    osc.start(now);
    osc.stop(now + 4);
  }

  /** The monster has seen you. */
  playGrowl(): void {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(46, now + 0.9);

    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 17;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 22;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 520;

    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    gain.gain.setTargetAtTime(0.35, now, 0.04);
    gain.gain.setTargetAtTime(0, now + 0.85, 0.35);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    lfo.start(now);
    osc.stop(now + 1.6);
    lfo.stop(now + 1.6);
  }

  /** Meat-and-bone impact when the monster hits you. */
  playDamage(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Body thud
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.value = 0.45;
    gain.gain.setTargetAtTime(0, now + 0.25, 0.15);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.7);

    // Sharp noise crack
    const length = Math.floor(this.ctx.sampleRate * 0.25);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (length * 0.12));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.value = 0.3;
    noise.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now);
  }

  /** The shared noise buffer, built on first use. */
  private noise(): AudioBuffer | null {
    const ctx = this.ctx;
    if (!ctx) return null;
    if (this.noiseBuffer) return this.noiseBuffer;

    const length = Math.floor(ctx.sampleRate);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buffer;
    return buffer;
  }

  /**
   * A boot coming down on cold tile.
   *
   * A muted thud rather than a plastic click: half a step of low-passed noise
   * for the sole, and a short near-subsonic body tone for the weight behind it.
   * Both run off the cached noise buffer, so a stride costs no allocation and
   * the sound can never arrive late on the frame it belongs to.
   */
  playFootstep(running: boolean = false): void {
    const ctx = this.ctx;
    const buffer = this.noise();
    if (!ctx || !this.masterGain || !buffer) return;
    const now = ctx.currentTime;

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = 1;

    const sole = ctx.createBiquadFilter();
    sole.type = 'lowpass';
    sole.frequency.value = (running ? 640 : 470) + Math.random() * 150;
    sole.Q.value = 0.7;

    const soleGain = ctx.createGain();
    soleGain.gain.setValueAtTime(0.0001, now);
    soleGain.gain.exponentialRampToValueAtTime(running ? 0.4 : 0.28, now + 0.012);
    soleGain.gain.exponentialRampToValueAtTime(0.0001, now + (running ? 0.2 : 0.27));

    source.connect(sole).connect(soleGain).connect(this.masterGain);
    source.start(now);
    source.stop(now + 0.3);

    // The weight behind the step, felt more than heard.
    const body = ctx.createOscillator();
    body.type = 'sine';
    body.frequency.setValueAtTime(running ? 98 : 78, now);
    body.frequency.exponentialRampToValueAtTime(running ? 55 : 46, now + 0.12);

    const bodyGain = ctx.createGain();
    bodyGain.gain.setValueAtTime(0.0001, now);
    bodyGain.gain.exponentialRampToValueAtTime(running ? 0.26 : 0.18, now + 0.014);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

    body.connect(bodyGain).connect(this.masterGain);
    body.start(now);
    body.stop(now + 0.18);
  }

  /**
   * The ward monitor: one clean ECG beep over the hiss of a flat line.
   *
   * The prologue hangs on it - the only machine still powered in Room 404 is
   * the one wired to a bed that has nobody in it.
   */
  playFlatline(volume: number = 0.22): void {
    const ctx = this.ctx;
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const beep = ctx.createOscillator();
    beep.type = 'sine';
    beep.frequency.value = 1046;
    const beepGain = ctx.createGain();
    beepGain.gain.setValueAtTime(0.0001, now);
    beepGain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
    beepGain.gain.setValueAtTime(volume, now + 0.16);
    beepGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);
    beep.connect(beepGain).connect(this.masterGain);
    beep.start(now);
    beep.stop(now + 0.3);

    const buffer = this.noise();
    if (!buffer) return;
    const hiss = ctx.createBufferSource();
    hiss.buffer = buffer;
    hiss.loop = true;
    const hissFilter = ctx.createBiquadFilter();
    hissFilter.type = 'bandpass';
    hissFilter.frequency.value = 2600;
    hissFilter.Q.value = 0.6;
    const hissGain = ctx.createGain();
    hissGain.gain.setValueAtTime(0.0001, now);
    hissGain.gain.linearRampToValueAtTime(volume * 0.22, now + 0.4);
    hissGain.gain.linearRampToValueAtTime(0.0001, now + 5.5);
    hiss.connect(hissFilter).connect(hissGain).connect(this.masterGain);
    hiss.start(now);
    hiss.stop(now + 5.6);
  }

  /**
   * The bone saw spun up: a ragged engine with a metallic edge on the blade.
   *
   * Fired when Dr Aris commits to the chase, so the player hears the moment he
   * stops stalking and starts hunting.
   */
  playSawRev(volume: number = 0.3): void {
    const ctx = this.ctx;
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const motor = ctx.createOscillator();
    motor.type = 'sawtooth';
    motor.frequency.setValueAtTime(28, now);
    motor.frequency.exponentialRampToValueAtTime(96, now + 0.5);
    motor.frequency.exponentialRampToValueAtTime(58, now + 1.5);

    const blade = ctx.createBiquadFilter();
    blade.type = 'bandpass';
    blade.frequency.value = 1400;
    blade.Q.value = 2.4;

    const motorGain = ctx.createGain();
    motorGain.gain.setValueAtTime(0.0001, now);
    motorGain.gain.exponentialRampToValueAtTime(volume, now + 0.35);
    motorGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.7);

    motor.connect(blade).connect(motorGain).connect(this.masterGain);
    motor.start(now);
    motor.stop(now + 1.8);

    // Teeth catching the air, so it reads as a saw and not a moped.
    const buffer = this.noise();
    if (!buffer) return;
    const teeth = ctx.createBufferSource();
    teeth.buffer = buffer;
    teeth.loop = true;
    const teethFilter = ctx.createBiquadFilter();
    teethFilter.type = 'highpass';
    teethFilter.frequency.value = 2200;
    const teethGain = ctx.createGain();
    teethGain.gain.setValueAtTime(0.0001, now);
    teethGain.gain.linearRampToValueAtTime(volume * 0.3, now + 0.5);
    teethGain.gain.linearRampToValueAtTime(0.0001, now + 1.6);
    teeth.connect(teethFilter).connect(teethGain).connect(this.masterGain);
    teeth.start(now);
    teeth.stop(now + 1.7);
  }

  /**
   * The saw dragging across the floor as he walks: teeth skidding over wet
   * tile, with the blade ringing under it.
   */
  playSawDrag(volume: number = 0.24): void {
    const ctx = this.ctx;
    const buffer = this.noise();
    if (!ctx || !this.masterGain || !buffer) return;
    const now = ctx.currentTime;

    const drag = ctx.createBufferSource();
    drag.buffer = buffer;
    drag.playbackRate.value = 0.6;

    const scrape = ctx.createBiquadFilter();
    scrape.type = 'bandpass';
    scrape.frequency.setValueAtTime(900, now);
    scrape.frequency.exponentialRampToValueAtTime(2600, now + 0.7);
    scrape.Q.value = 5.5;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(volume * 0.5, now + 0.55);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);

    drag.connect(scrape).connect(gain).connect(this.masterGain);
    drag.start(now);
    drag.stop(now + 1.0);

    // The blade itself, ringing above the scrape.
    const ring = ctx.createOscillator();
    ring.type = 'triangle';
    ring.frequency.setValueAtTime(1830, now);
    ring.frequency.exponentialRampToValueAtTime(1240, now + 0.9);
    const ringGain = ctx.createGain();
    ringGain.gain.setValueAtTime(0.0001, now);
    ringGain.gain.exponentialRampToValueAtTime(volume * 0.28, now + 0.12);
    ringGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
    ring.connect(ringGain).connect(this.masterGain);
    ring.start(now);
    ring.stop(now + 0.95);
  }

  /**
   * Dr Aris' footfall: a hard leather heel rapping a tiled floor, with a
   * little more weight behind it than the player's own step. Fired from his
   * walk cycle, so it stays in time with the legs.
   */
  playDoctorStep(volume: number = 0.45): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // The click of the heel.
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.09);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.05));
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const click = this.ctx.createBiquadFilter();
    click.type = 'bandpass';
    click.frequency.value = 1500 + Math.random() * 700;
    click.Q.value = 1.1;

    const clickGain = this.ctx.createGain();
    clickGain.gain.value = volume;

    source.connect(click);
    click.connect(clickGain);
    clickGain.connect(this.masterGain);
    source.start(now);

    // And the low thud of the weight landing on it.
    const thud = this.ctx.createOscillator();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(96, now);
    thud.frequency.exponentialRampToValueAtTime(48, now + 0.08);
    const thudGain = this.ctx.createGain();
    thudGain.gain.setValueAtTime(volume * 0.5, now);
    thudGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
    thud.connect(thudGain);
    thudGain.connect(this.masterGain);
    thud.start(now);
    thud.stop(now + 0.12);
  }

  /**
   * A single ampoule lifted off the rack: a small, bright tick of glass, with
   * the brass cap ringing a beat behind it.
   */
  playVialClink(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const len = Math.floor(this.ctx.sampleRate * 0.22);
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.035));
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 4200;
    filter.Q.value = 3.2;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    source.start(now);

    const ring = this.ctx.createOscillator();
    ring.type = 'sine';
    ring.frequency.setValueAtTime(2100, now);
    ring.frequency.exponentialRampToValueAtTime(1400, now + 0.16);
    const ringGain = this.ctx.createGain();
    ringGain.gain.setValueAtTime(0.08, now);
    ringGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    ring.connect(ringGain);
    ringGain.connect(this.masterGain);
    ring.start(now);
    ring.stop(now + 0.2);
  }

  /**
   * A severed line spliced back together: the spark when the wire touches,
   * then the exchange tone finding the pair. Also used when the handset comes
   * off a live phone.
   */
  playWireSplice(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // The spark: a very short, very bright crack.
    const len = Math.floor(this.ctx.sampleRate * 0.05);
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.02));
    }
    const spark = this.ctx.createBufferSource();
    spark.buffer = buffer;
    const sparkFilter = this.ctx.createBiquadFilter();
    sparkFilter.type = 'highpass';
    sparkFilter.frequency.value = 2600;
    const sparkGain = this.ctx.createGain();
    sparkGain.gain.value = 0.4;
    spark.connect(sparkFilter);
    sparkFilter.connect(sparkGain);
    sparkGain.connect(this.masterGain);
    spark.start(now);

    // The dial tone: two tones a third apart, wobbling as the pair settles.
    for (const freq of [430, 540]) {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + 0.04);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.07, now + 0.06);
      gain.gain.setValueAtTime(0.07, now + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + 0.04);
      osc.stop(now + 1.0);
    }
  }

  /**
   * The far end of a cut-in telephone line: a clipped, gated voice heard
   * through a badly earthing exchange. It is not speech - it is the shape of
   * speech, which is worse.
   */
  playDispatchAudio(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const duration = 6.5;

    // A band of noise, gated into syllables so it reads as somebody talking.
    const len = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.5;
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const band = this.ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.setValueAtTime(700, now);
    band.Q.value = 4.5;

    const gate = this.ctx.createGain();
    gate.gain.value = 0;
    // Syllables of roughly 120-260 ms, with gaps, walking down the band so the
    // "voice" changes pitch as it goes.
    let t = 0;
    let down = true;
    while (t < duration - 0.3) {
      const syllable = 0.12 + Math.random() * 0.14;
      const gap = 0.05 + Math.random() * 0.12;
      gate.gain.setValueAtTime(down ? 0.55 : 0.02, now + t);
      gate.gain.linearRampToValueAtTime(down ? 0.05 : 0.5, now + t + syllable * 0.8);
      band.frequency.linearRampToValueAtTime(down ? 900 : 640, now + t + syllable);
      down = !down;
      t += syllable + gap;
    }
    gate.gain.setValueAtTime(0.02, now + duration - 0.3);

    const hiss = this.ctx.createGain();
    hiss.gain.value = 0.05;
    const hissFilter = this.ctx.createBiquadFilter();
    hissFilter.type = 'highpass';
    hissFilter.frequency.value = 2000;

    source.connect(band);
    band.connect(gate);
    gate.connect(this.masterGain);

    // Line hiss on its own path, so the gaps are never silent.
    const hissSource = this.ctx.createBufferSource();
    hissSource.buffer = buffer;
    hissSource.connect(hissFilter);
    hissFilter.connect(hiss);
    hiss.connect(this.masterGain);

    source.start(now);
    hissSource.start(now);
    source.stop(now + duration);
    hissSource.stop(now + duration);

    // And the exchange clicks the line shut at the end.
    const squelch = this.ctx.createBufferSource();
    squelch.buffer = buffer;
    const squelchFilter = this.ctx.createBiquadFilter();
    squelchFilter.type = 'lowpass';
    squelchFilter.frequency.value = 900;
    const squelchGain = this.ctx.createGain();
    squelchGain.gain.setValueAtTime(0.0001, now + duration - 0.14);
    squelchGain.gain.linearRampToValueAtTime(0.16, now + duration - 0.1);
    squelchGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    squelch.connect(squelchFilter);
    squelchFilter.connect(squelchGain);
    squelchGain.connect(this.masterGain);
    squelch.start(now + duration - 0.14);
    squelch.stop(now + duration);
  }

  /**
   * A dying fluorescent ballast: a short mains hum with an electric stutter on
   * top of it, played whenever a ceiling tube blinks out.
   */
  playElectricBuzz(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const duration = 0.16 + Math.random() * 0.14;

    // Mains hum at 100 Hz with a squashed square edge
    const hum = this.ctx.createOscillator();
    hum.type = 'square';
    hum.frequency.value = 96 + Math.random() * 14;
    const humFilter = this.ctx.createBiquadFilter();
    humFilter.type = 'lowpass';
    humFilter.frequency.value = 1400;
    const humGain = this.ctx.createGain();
    humGain.gain.value = 0;
    humGain.gain.setValueAtTime(0, now);
    humGain.gain.linearRampToValueAtTime(0.06, now + 0.012);
    humGain.gain.linearRampToValueAtTime(0.02, now + duration * 0.6);
    humGain.gain.linearRampToValueAtTime(0, now + duration);
    hum.connect(humFilter);
    humFilter.connect(humGain);
    humGain.connect(this.masterGain);
    hum.start(now);
    hum.stop(now + duration);

    // Ticking arc of the failing contact
    const ticks = 5 + Math.floor(Math.random() * 5);
    for (let i = 0; i < ticks; i++) {
      const at = now + Math.random() * duration;
      const click = this.ctx.createOscillator();
      const clickGain = this.ctx.createGain();
      click.type = 'sawtooth';
      click.frequency.value = 900 + Math.random() * 2600;
      clickGain.gain.value = 0;
      clickGain.gain.setValueAtTime(0.035, at);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, at + 0.02);
      click.connect(clickGain);
      clickGain.connect(this.masterGain);
      click.start(at);
      click.stop(at + 0.03);
    }
  }

  /** Glass vial shattering on the floor - sharp, bright, very loud. */
  /**
   * @param tone Pitch of the smash. 1 is the default; a thin ampoule wants
   *   more (brighter, higher), a thick bottle wants less (duller, heavier).
   */
  playGlassShatter(tone: number = 1): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Burst of bright noise for the initial smash
    const length = Math.floor(this.ctx.sampleRate * 0.35);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (length * 0.14));
    }
    const crash = this.ctx.createBufferSource();
    crash.buffer = buffer;
    const crashFilter = this.ctx.createBiquadFilter();
    crashFilter.type = 'highpass';
    crashFilter.frequency.value = 3000 * tone;
    const crashGain = this.ctx.createGain();
    crashGain.gain.value = 0.5;
    crash.connect(crashFilter);
    crashFilter.connect(crashGain);
    crashGain.connect(this.masterGain);
    crash.start(now);

    // Ringing glass shards: a scatter of detuned high pings over half a second
    for (let i = 0; i < 9; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = (2400 + Math.random() * 3600) * tone;
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(this.masterGain);

      const t = now + Math.random() * 0.28;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.06 + Math.random() * 0.05, t + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12 + Math.random() * 0.25);
      osc.start(t);
      osc.stop(t + 0.5);
    }
  }

  /** Rustling paper and a soft chime. */
  playNote(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const length = Math.floor(this.ctx.sampleRate * 0.3);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    }
    const paper = this.ctx.createBufferSource();
    paper.buffer = buffer;
    const paperFilter = this.ctx.createBiquadFilter();
    paperFilter.type = 'highpass';
    paperFilter.frequency.value = 2200;
    const paperGain = this.ctx.createGain();
    paperGain.gain.value = 0.16;
    paper.connect(paperFilter);
    paperFilter.connect(paperGain);
    paperGain.connect(this.masterGain);
    paper.start(now);

    [784, 1046].forEach((freq, index) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(this.masterGain!);

      const t = now + 0.08 + index * 0.12;
      gain.gain.setTargetAtTime(0.08, t, 0.02);
      gain.gain.setTargetAtTime(0, t + 0.3, 0.1);
      osc.start(t);
      osc.stop(t + 0.7);
    });
  }

  /** Ascending arpeggio when a key is grabbed. */
  playKeyPickup(): void {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    [523, 659, 784, 1047].forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(this.masterGain!);

      const t = now + i * 0.1;
      gain.gain.setTargetAtTime(0.15, t, 0.01);
      gain.gain.setTargetAtTime(0, t + 0.15, 0.05);
      osc.start(t);
      osc.stop(t + 0.3);
    });
  }

  /** Distorted burst for jump scares and death. */
  playJumpscare(): void {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const duration = 1.5;

    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 80;

    const distortion = this.ctx.createWaveShaper();
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      const x = i / 128 - 1;
      curve[i] = ((Math.PI + 100) * x) / (Math.PI + 100 * Math.abs(x));
    }
    distortion.curve = curve;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.4;

    osc.connect(distortion);
    distortion.connect(gain);
    gain.connect(this.masterGain);

    osc.frequency.setTargetAtTime(210, now + 0.1, 0.2);
    gain.gain.setTargetAtTime(0, now + 0.8, 0.3);
    osc.start(now);
    osc.stop(now + duration);

    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.value = 0.2;
    noiseGain.gain.setTargetAtTime(0, now + 0.5, 0.3);
    noise.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now);
    noise.stop(now + duration);
  }

  /** Heavy bolt sliding back. */
  playDoorUnlock(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const click = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    click.type = 'square';
    click.frequency.value = 1000;
    clickGain.gain.value = 0.15;
    click.connect(clickGain);
    clickGain.connect(this.masterGain);
    clickGain.gain.setTargetAtTime(0, now + 0.02, 0.01);
    click.start(now);
    click.stop(now + 0.05);

    const creak = this.ctx.createOscillator();
    const creakGain = this.ctx.createGain();
    creak.type = 'sawtooth';
    creak.frequency.value = 150;
    creakGain.gain.value = 0.1;
    creak.connect(creakGain);
    creakGain.connect(this.masterGain);
    creak.frequency.setTargetAtTime(80, now + 0.1, 0.5);
    creakGain.gain.setTargetAtTime(0, now + 0.3, 0.3);
    creak.start(now + 0.05);
    creak.stop(now + 1.5);
  }

  /**
   * A ward door on its hinge: the creak of the leaf turning, then the clack of
   * it reaching the frame. Opening rises in pitch, shutting falls.
   */
  playDoorSwing(opening: boolean): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const duration = opening ? 0.55 : 0.42;

    const creak = this.ctx.createOscillator();
    creak.type = 'sawtooth';
    creak.frequency.setValueAtTime(opening ? 110 : 210, now);
    creak.frequency.linearRampToValueAtTime(opening ? 215 : 105, now + duration);

    const wobble = this.ctx.createOscillator();
    wobble.type = 'sine';
    wobble.frequency.value = opening ? 9 : 13;
    const wobbleDepth = this.ctx.createGain();
    wobbleDepth.gain.value = 22;
    wobble.connect(wobbleDepth);
    wobbleDepth.connect(creak.frequency);

    const band = this.ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 620;
    band.Q.value = 3.2;

    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    creak.connect(band);
    band.connect(gain);
    gain.connect(this.masterGain);
    gain.gain.setTargetAtTime(opening ? 0.11 : 0.09, now, 0.04);
    gain.gain.setTargetAtTime(0, now + duration - 0.08, 0.05);

    creak.start(now);
    creak.stop(now + duration);
    wobble.start(now);
    wobble.stop(now + duration);

    // The leaf meeting the frame, a beat after the creak dies.
    const clack = this.ctx.createOscillator();
    clack.type = 'square';
    clack.frequency.setValueAtTime(190, now + duration);
    clack.frequency.exponentialRampToValueAtTime(58, now + duration + 0.1);
    const clackGain = this.ctx.createGain();
    clackGain.gain.value = 0;
    clack.connect(clackGain);
    clackGain.connect(this.masterGain);
    clackGain.gain.setTargetAtTime(0.14, now + duration, 0.006);
    clackGain.gain.setTargetAtTime(0, now + duration + 0.04, 0.04);
    clack.start(now + duration);
    clack.stop(now + duration + 0.3);
  }

  /** Wood on wood: the drawer running out of its carcass. */
  playDrawerSlide(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const duration = 0.45;

    const length = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      // Grainy rather than smooth: a drawer judders as it runs.
      const grain = Math.random() < 0.35 ? 1 : 0.45;
      data[i] = (Math.random() * 2 - 1) * grain;
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = 0.8;

    const band = this.ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.setValueAtTime(340, now);
    band.frequency.linearRampToValueAtTime(760, now + duration);
    band.Q.value = 1.1;

    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    source.connect(band);
    band.connect(gain);
    gain.connect(this.masterGain);
    gain.gain.setTargetAtTime(0.09, now, 0.03);
    gain.gain.setTargetAtTime(0, now + duration - 0.06, 0.03);
    source.start(now);
    source.stop(now + duration);
  }

  /** Steel wardrobe: a hinge squeak with the clang of the plate behind it. */
  playLockerDoor(opening: boolean): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const squeak = this.ctx.createOscillator();
    squeak.type = 'sawtooth';
    squeak.frequency.setValueAtTime(opening ? 420 : 560, now);
    squeak.frequency.linearRampToValueAtTime(opening ? 700 : 380, now + 0.3);
    const squeakBand = this.ctx.createBiquadFilter();
    squeakBand.type = 'bandpass';
    squeakBand.frequency.value = 1400;
    squeakBand.Q.value = 5;
    const squeakGain = this.ctx.createGain();
    squeakGain.gain.value = 0;
    squeak.connect(squeakBand);
    squeakBand.connect(squeakGain);
    squeakGain.connect(this.masterGain);
    squeakGain.gain.setTargetAtTime(0.05, now, 0.05);
    squeakGain.gain.setTargetAtTime(0, now + 0.24, 0.05);
    squeak.start(now);
    squeak.stop(now + 0.34);

    // The sheet-metal body ringing.
    for (const [ratio, level] of [
      [1, 0.13],
      [2.4, 0.06],
      [4.1, 0.03],
    ] as Array<[number, number]>) {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 232 * ratio;
      const gain = this.ctx.createGain();
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(this.masterGain);
      gain.gain.setTargetAtTime(level, now + 0.26, 0.004);
      gain.gain.setTargetAtTime(0, now + 0.3, 0.13);
      osc.start(now + 0.26);
      osc.stop(now + 0.9);
    }
  }

  /**
   * The accordion gate slamming shut: a scrape of metal, then the heavy clank
   * of the latch taking hold.
   */
  playElevatorGate(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const length = Math.floor(this.ctx.sampleRate * 0.55);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      const t = i / length;
      data[i] = (Math.random() * 2 - 1) * (0.4 + 0.6 * Math.sin(t * Math.PI));
    }
    const scrape = this.ctx.createBufferSource();
    scrape.buffer = buffer;
    scrape.playbackRate.value = 1.4;
    const scrapeFilter = this.ctx.createBiquadFilter();
    scrapeFilter.type = 'bandpass';
    scrapeFilter.frequency.value = 2400;
    scrapeFilter.Q.value = 1.2;
    const scrapeGain = this.ctx.createGain();
    scrapeGain.gain.value = 0.18;
    scrape.connect(scrapeFilter);
    scrapeFilter.connect(scrapeGain);
    scrapeGain.connect(this.masterGain);
    scrape.start(now);
    scrape.stop(now + 0.55);

    const clank = this.ctx.createOscillator();
    clank.type = 'square';
    clank.frequency.setValueAtTime(320, now + 0.5);
    clank.frequency.exponentialRampToValueAtTime(70, now + 0.62);
    const clankGain = this.ctx.createGain();
    clankGain.gain.value = 0;
    clank.connect(clankGain);
    clankGain.connect(this.masterGain);
    clankGain.gain.setTargetAtTime(0.24, now + 0.5, 0.006);
    clankGain.gain.setTargetAtTime(0, now + 0.58, 0.05);
    clank.start(now + 0.5);
    clank.stop(now + 0.9);
  }

  /**
   * The winch: a low motor drone with the cable winding over it, held for the
   * length of the ride and then released.
   */
  playElevatorMotor(duration: number = 2.6): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const motor = this.ctx.createOscillator();
    motor.type = 'sawtooth';
    motor.frequency.setValueAtTime(46, now);
    motor.frequency.linearRampToValueAtTime(58, now + duration * 0.5);
    motor.frequency.linearRampToValueAtTime(44, now + duration);
    const motorFilter = this.ctx.createBiquadFilter();
    motorFilter.type = 'lowpass';
    motorFilter.frequency.value = 320;
    const motorGain = this.ctx.createGain();
    motorGain.gain.value = 0;
    motor.connect(motorFilter);
    motorFilter.connect(motorGain);
    motorGain.connect(this.masterGain);
    motorGain.gain.setTargetAtTime(0.16, now, 0.12);
    motorGain.gain.setTargetAtTime(0, now + duration - 0.35, 0.14);
    motor.start(now);
    motor.stop(now + duration);

    const length = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    const winding = this.ctx.createBufferSource();
    winding.buffer = buffer;
    winding.loop = true;
    const windingFilter = this.ctx.createBiquadFilter();
    windingFilter.type = 'bandpass';
    windingFilter.frequency.value = 1450;
    windingFilter.Q.value = 3.5;
    const lfo = this.ctx.createOscillator();
    lfo.type = 'square';
    lfo.frequency.value = 13;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 520;
    lfo.connect(lfoGain);
    lfoGain.connect(windingFilter.frequency);
    const windingGain = this.ctx.createGain();
    windingGain.gain.value = 0;
    winding.connect(windingFilter);
    windingFilter.connect(windingGain);
    windingGain.connect(this.masterGain);
    windingGain.gain.setTargetAtTime(0.06, now, 0.15);
    windingGain.gain.setTargetAtTime(0, now + duration - 0.35, 0.14);
    winding.start(now);
    winding.stop(now + duration);
    lfo.start(now);
    lfo.stop(now + duration);
  }

  /** Mechanical brass bell struck once as the doors reach the floor. */
  playElevatorDing(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // A struck bell is inharmonic: 1x, 2.76x and 5.4x the fundamental.
    const partials = [
      { ratio: 1, gain: 0.2, decay: 1.5 },
      { ratio: 2.76, gain: 0.09, decay: 0.9 },
      { ratio: 5.4, gain: 0.045, decay: 0.45 },
    ];
    for (const partial of partials) {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 1046 * partial.ratio;
      const gain = this.ctx.createGain();
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(this.masterGain);
      gain.gain.setTargetAtTime(partial.gain, now, 0.005);
      gain.gain.setTargetAtTime(0, now + 0.02, partial.decay / 3);
      osc.start(now);
      osc.stop(now + partial.decay);
    }
  }

  /** Two-thump heartbeat. `intensity` scales volume up as danger rises. */
  playHeartbeat(intensity: number = 0.6): void {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const level = 0.08 + Math.max(0, Math.min(1, intensity)) * 0.26;

    for (let beat = 0; beat < 2; beat++) {
      const t = now + beat * 0.3;

      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(62, t);
      osc.frequency.exponentialRampToValueAtTime(34, t + 0.16);

      const gain = this.ctx.createGain();
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(this.masterGain);

      gain.gain.setTargetAtTime(level, t, 0.01);
      gain.gain.setTargetAtTime(0, t + 0.1, 0.05);

      osc.start(t);
      osc.stop(t + 0.3);
    }
  }

  /** A voice just at the edge of hearing. */
  playWhisper(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const length = Math.floor(this.ctx.sampleRate * 1.4);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      const envelope = Math.sin((i / length) * Math.PI);
      data[i] = (Math.random() * 2 - 1) * envelope;
    }

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const formant = this.ctx.createBiquadFilter();
    formant.type = 'bandpass';
    formant.frequency.setValueAtTime(880, now);
    formant.frequency.linearRampToValueAtTime(1750, now + 1.2);
    formant.Q.value = 9;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.13;

    source.connect(formant);
    formant.connect(gain);
    gain.connect(this.masterGain);
    source.start(now);
  }

  /** The breaker slamming home and the building waking up. */
  playPowerOn(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Heavy mechanical clunk
    const clunk = this.ctx.createOscillator();
    clunk.type = 'square';
    clunk.frequency.setValueAtTime(140, now);
    clunk.frequency.exponentialRampToValueAtTime(40, now + 0.18);
    const clunkGain = this.ctx.createGain();
    clunkGain.gain.value = 0.3;
    clunkGain.gain.setTargetAtTime(0, now + 0.12, 0.08);
    clunk.connect(clunkGain);
    clunkGain.connect(this.masterGain);
    clunk.start(now);
    clunk.stop(now + 0.5);

    // Rising electrical hum
    const hum = this.ctx.createOscillator();
    hum.type = 'sawtooth';
    hum.frequency.setValueAtTime(38, now + 0.1);
    hum.frequency.linearRampToValueAtTime(58, now + 2.2);
    const humFilter = this.ctx.createBiquadFilter();
    humFilter.type = 'lowpass';
    humFilter.frequency.value = 420;
    const humGain = this.ctx.createGain();
    humGain.gain.value = 0;
    humGain.gain.setTargetAtTime(0.16, now + 0.15, 0.4);
    humGain.gain.setTargetAtTime(0, now + 2.6, 0.9);
    hum.connect(humFilter);
    humFilter.connect(humGain);
    humGain.connect(this.masterGain);
    hum.start(now + 0.1);
    hum.stop(now + 4);

    // Fluorescent buzz that settles in behind it
    const buzz = this.ctx.createOscillator();
    buzz.type = 'square';
    buzz.frequency.value = 118;
    const buzzGain = this.ctx.createGain();
    buzzGain.gain.value = 0;
    buzzGain.gain.setTargetAtTime(0.03, now + 0.4, 0.6);
    buzzGain.gain.setTargetAtTime(0, now + 3.4, 1.2);
    buzz.connect(buzzGain);
    buzzGain.connect(this.masterGain);
    buzz.start(now + 0.4);
    buzz.stop(now + 5.5);
  }

  /**
   * Rain on the yard. Built once, then just faded in and out - stepping
   * through the reception door should feel like walking into a storm, not
   * like a loop restarting.
   */
  /**
   * A loop of filtered noise, the shape every sustained prop sound has: a
   * running tap, the static out of a valve radio. Built once and left running
   * at zero gain, because starting a buffer on demand is what makes mobile
   * browsers drop the first half second of a sound.
   */
  private loopFor(which: 'tap' | 'static', build: () => AudioNode): GainNode | null {
    if (!this.ctx || !this.masterGain) return null;

    const existing = which === 'tap' ? this.tapGain : this.staticGain;
    if (existing) return existing;

    const seconds = 2;
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * seconds, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.6;
    }

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const shaper = build();
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    source.connect(shaper);
    shaper.connect(gain);
    gain.connect(this.masterGain);
    source.start();

    if (which === 'tap') {
      this.tapSource = source;
      this.tapGain = gain;
    } else {
      this.staticSource = source;
      this.staticGain = gain;
    }
    return gain;
  }

  /** The wall switch: a hard plastic click, and the tube buzzing back. */
  playSwitchClick(on: boolean): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const click = this.ctx.createOscillator();
    click.type = 'square';
    click.frequency.setValueAtTime(on ? 2200 : 1500, now);
    click.frequency.exponentialRampToValueAtTime(on ? 420 : 260, now + 0.05);
    const clickGain = this.ctx.createGain();
    clickGain.gain.value = 0;
    click.connect(clickGain);
    clickGain.connect(this.masterGain);
    clickGain.gain.setTargetAtTime(0.16, now, 0.004);
    clickGain.gain.setTargetAtTime(0, now + 0.03, 0.02);
    click.start(now);
    click.stop(now + 0.2);

    if (!on) return;
    // Coming on, the tube strikes with a short buzz underneath the click.
    const buzz = this.ctx.createOscillator();
    buzz.type = 'sawtooth';
    buzz.frequency.setValueAtTime(118, now + 0.04);
    const buzzGain = this.ctx.createGain();
    buzzGain.gain.value = 0;
    buzz.connect(buzzGain);
    buzzGain.connect(this.masterGain);
    buzzGain.gain.setTargetAtTime(0.06, now + 0.04, 0.02);
    buzzGain.gain.setTargetAtTime(0, now + 0.5, 0.2);
    buzz.start(now + 0.04);
    buzz.stop(now + 1.1);
  }

  /** Rusty water hammering into a basin, plus the drip it leaves behind. */
  setWaterRunning(running: boolean): void {
    if (!this.ctx) return;
    const gain = this.loopFor('tap', () => {
      const body = this.ctx!.createBiquadFilter();
      body.type = 'bandpass';
      body.frequency.value = 900;
      body.Q.value = 0.7;
      return body;
    });
    gain?.gain.setTargetAtTime(running ? 0.1 : 0, this.ctx.currentTime, running ? 0.15 : 0.4);

    if (!running) return;
    // Two drips after the tap is shut, timed off the same context clock.
    for (const delay of [0.35, 0.95, 1.7]) this.scheduleDrip(delay);
  }

  /** One drip, falling into standing water. */
  private scheduleDrip(delay: number): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime + delay;
    const drip = this.ctx.createOscillator();
    drip.type = 'sine';
    drip.frequency.setValueAtTime(1500, now);
    drip.frequency.exponentialRampToValueAtTime(320, now + 0.07);
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    drip.connect(gain);
    gain.connect(this.masterGain);
    gain.gain.setTargetAtTime(0.12, now, 0.005);
    gain.gain.setTargetAtTime(0, now + 0.05, 0.03);
    drip.start(now);
    drip.stop(now + 0.3);
  }

  /**
   * The valve radio: wideband static with a whistle behind it. Loud on
   * purpose - in the fiction it is loud enough to pull the creature towards it.
   */
  setRadioStatic(playing: boolean): void {
    if (!this.ctx) return;
    const gain = this.loopFor('static', () => {
      const band = this.ctx!.createBiquadFilter();
      band.type = 'bandpass';
      band.frequency.value = 1800;
      band.Q.value = 0.4;
      return band;
    });
    gain?.gain.setTargetAtTime(playing ? 0.16 : 0, this.ctx.currentTime, playing ? 0.2 : 0.3);
  }

  /** A seized handwheel: dry metal grinding a quarter turn. */
  playValveTurn(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const duration = 0.55;

    const length = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      const grain = Math.random() < 0.5 ? 1 : 0.25;
      data[i] = (Math.random() * 2 - 1) * grain * (1 - i / length);
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = 1.6;

    const scrape = this.ctx.createBiquadFilter();
    scrape.type = 'bandpass';
    scrape.frequency.value = 2600;
    scrape.Q.value = 1.4;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.14;
    source.connect(scrape);
    scrape.connect(gain);
    gain.connect(this.masterGain);
    gain.gain.setTargetAtTime(0, now + duration - 0.1, 0.08);
    source.start(now);

    const creak = this.ctx.createOscillator();
    creak.type = 'sawtooth';
    creak.frequency.setValueAtTime(74, now);
    creak.frequency.linearRampToValueAtTime(58, now + duration);
    const creakGain = this.ctx.createGain();
    creakGain.gain.value = 0;
    creak.connect(creakGain);
    creakGain.connect(this.masterGain);
    creakGain.gain.setTargetAtTime(0.05, now, 0.12);
    creakGain.gain.setTargetAtTime(0, now + duration - 0.05, 0.1);
    creak.start(now);
    creak.stop(now + duration);
  }

  /** Rummaging: glass and tin shifting about in a bin. */
  playRummage(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 5; i++) {
      const at = now + i * 0.09 + Math.random() * 0.05;
      const clink = this.ctx.createOscillator();
      clink.type = 'triangle';
      clink.frequency.setValueAtTime(700 + Math.random() * 1500, at);
      const gain = this.ctx.createGain();
      gain.gain.value = 0;
      clink.connect(gain);
      gain.connect(this.masterGain);
      gain.gain.setTargetAtTime(0.05 + Math.random() * 0.05, at, 0.004);
      gain.gain.setTargetAtTime(0, at + 0.05, 0.05);
      clink.start(at);
      clink.stop(at + 0.25);
    }
  }

  setRaining(raining: boolean): void {
    if (!this.ctx || !this.masterGain) return;

    if (!this.rainSource) {
      const seconds = 3;
      const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * seconds, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
      }

      this.rainSource = this.ctx.createBufferSource();
      this.rainSource.buffer = buffer;
      this.rainSource.loop = true;

      const hiss = this.ctx.createBiquadFilter();
      hiss.type = 'highpass';
      hiss.frequency.value = 1400;

      const body = this.ctx.createBiquadFilter();
      body.type = 'lowpass';
      body.frequency.value = 6200;

      this.rainGain = this.ctx.createGain();
      this.rainGain.gain.value = 0;

      this.rainSource.connect(hiss);
      hiss.connect(body);
      body.connect(this.rainGain);
      this.rainGain.connect(this.masterGain);
      this.rainSource.start();
    }

    this.rainGain?.gain.setTargetAtTime(raining ? 0.24 : 0, this.ctx.currentTime, raining ? 0.8 : 1.6);
  }

  /** Thunder rolling in after a flash of lightning. */
  playThunder(distance: number = 0.6): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const delay = 0.15 + (1 - distance) * 1.1;
    const level = 0.12 + distance * 0.22;

    // Sub-bass rumble
    const length = Math.floor(this.ctx.sampleRate * 3.2);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      const t = i / length;
      const envelope = Math.exp(-t * 2.2) * (0.6 + 0.4 * Math.sin(t * 40));
      data[i] = (Math.random() * 2 - 1) * envelope;
    }

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const rumble = this.ctx.createBiquadFilter();
    rumble.type = 'lowpass';
    rumble.frequency.setValueAtTime(320, now + delay);
    rumble.frequency.linearRampToValueAtTime(90, now + delay + 2.6);

    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    gain.gain.setTargetAtTime(level, now + delay, 0.12);
    gain.gain.setTargetAtTime(0, now + delay + 1.9, 0.8);

    source.connect(rumble);
    rumble.connect(gain);
    gain.connect(this.masterGain);
    source.start(now + delay);

    // Crack that starts it
    const crackLength = Math.floor(this.ctx.sampleRate * 0.4);
    const crackBuffer = this.ctx.createBuffer(1, crackLength, this.ctx.sampleRate);
    const crackData = crackBuffer.getChannelData(0);
    for (let i = 0; i < crackLength; i++) {
      crackData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (crackLength * 0.08));
    }
    const crack = this.ctx.createBufferSource();
    crack.buffer = crackBuffer;
    const crackFilter = this.ctx.createBiquadFilter();
    crackFilter.type = 'bandpass';
    crackFilter.frequency.value = 900;
    crackFilter.Q.value = 0.7;
    const crackGain = this.ctx.createGain();
    crackGain.gain.value = level * 0.5;
    crack.connect(crackFilter);
    crackFilter.connect(crackGain);
    crackGain.connect(this.masterGain);
    crack.start(now + delay);
  }

  /** Heavy gate motor winding up and chains dropping. */
  playGateUnlock(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const motor = this.ctx.createOscillator();
    motor.type = 'square';
    motor.frequency.setValueAtTime(46, now);
    motor.frequency.linearRampToValueAtTime(96, now + 1.4);
    const motorFilter = this.ctx.createBiquadFilter();
    motorFilter.type = 'lowpass';
    motorFilter.frequency.value = 380;
    const motorGain = this.ctx.createGain();
    motorGain.gain.value = 0;
    motorGain.gain.setTargetAtTime(0.12, now, 0.25);
    motorGain.gain.setTargetAtTime(0, now + 1.7, 0.4);
    motor.connect(motorFilter);
    motorFilter.connect(motorGain);
    motorGain.connect(this.masterGain);
    motor.start(now);
    motor.stop(now + 3);

    // Chain and metal dragging across the ground
    const length = Math.floor(this.ctx.sampleRate * 1.6);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * (0.4 + 0.6 * Math.abs(Math.sin(i / 900)));
    }
    const chain = this.ctx.createBufferSource();
    chain.buffer = buffer;
    const chainFilter = this.ctx.createBiquadFilter();
    chainFilter.type = 'bandpass';
    chainFilter.frequency.value = 2400;
    chainFilter.Q.value = 1.4;
    const chainGain = this.ctx.createGain();
    chainGain.gain.value = 0.05;
    chain.connect(chainFilter);
    chainFilter.connect(chainGain);
    chainGain.connect(this.masterGain);
    chain.start(now + 0.2);
  }


  // ------------------------------------------------------------------
  // Two-track dynamic music system
  // ------------------------------------------------------------------

  /**
   * Build the chase music graph: fast pulsing bass, dissonant pads,
   * rhythmic noise percussion, and a high-tension drone.
   * Only built once — volume is toggled via `chaseGain`.
   */
  private buildChaseMusicGraph(): void {
    const ctx = this.ctx;
    if (!ctx || !this.masterGain) return;

    this.chaseGain = ctx.createGain();
    this.chaseGain.gain.value = 0;
    this.chaseGain.connect(this.masterGain);

    const bpm = 150;

    // 1. Fast pulsing sub-bass (four-on-the-floor throb)
    const kickOsc = ctx.createOscillator();
    kickOsc.type = 'sine';
    kickOsc.frequency.value = 42;
    const kickFilter = ctx.createBiquadFilter();
    kickFilter.type = 'lowpass';
    kickFilter.frequency.value = 120;
    const kickGain = ctx.createGain();
    kickGain.gain.value = 0.4;
    const kickLfo = ctx.createOscillator();
    kickLfo.type = 'square';
    kickLfo.frequency.value = bpm / 60;
    const kickLfoGain = ctx.createGain();
    kickLfoGain.gain.value = 0.35;
    kickLfo.connect(kickLfoGain);
    kickLfoGain.connect(kickGain.gain);
    kickOsc.connect(kickFilter);
    kickFilter.connect(kickGain);
    kickGain.connect(this.chaseGain);
    this.chaseOscs.push(kickOsc, kickLfo);

    // 2. Dissonant pad layer (two detuned sawtooth waves)
    const padA = ctx.createOscillator();
    padA.type = 'sawtooth';
    padA.frequency.value = 110;
    const padB = ctx.createOscillator();
    padB.type = 'sawtooth';
    padB.frequency.value = 116.5;
    const padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 380;
    const padGain = ctx.createGain();
    padGain.gain.value = 0.12;
    padA.connect(padFilter);
    padB.connect(padFilter);
    padFilter.connect(padGain);
    padGain.connect(this.chaseGain);
    this.chaseOscs.push(padA, padB);

    // 3. High tension drone (screechy overtone)
    const droneOsc = ctx.createOscillator();
    droneOsc.type = 'sawtooth';
    droneOsc.frequency.value = 440;
    const droneFilter = ctx.createBiquadFilter();
    droneFilter.type = 'bandpass';
    droneFilter.frequency.value = 900;
    droneFilter.Q.value = 8;
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0.06;
    droneOsc.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(this.chaseGain);
    this.chaseOscs.push(droneOsc);

    const droneLfo = ctx.createOscillator();
    droneLfo.type = 'sine';
    droneLfo.frequency.value = 0.4;
    const droneLfoGain = ctx.createGain();
    droneLfoGain.gain.value = 12;
    droneLfo.connect(droneLfoGain);
    droneLfoGain.connect(droneOsc.frequency);
    this.chaseOscs.push(droneLfo);

    // 4. Rhythmic noise percussion (filtered noise bursts)
    const noiseLen = Math.floor(ctx.sampleRate * 2);
    const noiseBuffer = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 1800;
    noiseFilter.Q.value = 2;
    const noiseLfo = ctx.createOscillator();
    noiseLfo.type = 'square';
    noiseLfo.frequency.value = (bpm / 60) * 4;
    const noiseLfoGain = ctx.createGain();
    noiseLfoGain.gain.value = 0.12;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.15;
    noiseLfo.connect(noiseLfoGain);
    noiseLfoGain.connect(noiseGain.gain);
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.chaseGain);

    // 5. Hi-hat pattern via high noise
    const hhFilter = ctx.createBiquadFilter();
    hhFilter.type = 'highpass';
    hhFilter.frequency.value = 6000;
    const hhGain = ctx.createGain();
    hhGain.gain.value = 0.08;
    const hhLfo = ctx.createOscillator();
    hhLfo.type = 'square';
    hhLfo.frequency.value = (bpm / 60) * 2;
    const hhLfoGain = ctx.createGain();
    hhLfoGain.gain.value = 0.07;
    hhLfo.connect(hhLfoGain);
    hhLfoGain.connect(hhGain.gain);
    noiseSource.connect(hhFilter);
    hhFilter.connect(hhGain);
    hhGain.connect(this.chaseGain);
    this.chaseOscs.push(hhLfo);

    // Start everything
    for (const osc of this.chaseOscs) osc.start();
    noiseSource.start();
  }

  /** Cancel-and-ramp a gain so two crossfades can never fight over it. */
  private ramp(param: AudioParam, to: number, now: number, seconds: number): void {
    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.linearRampToValueAtTime(to, now + seconds);
  }

  /** True when both shipped tracks have buffered enough to sound instantly. */
  private filesReady(): boolean {
    if (!this.tracksOk || !this.bgmEl || !this.chaseEl) return false;
    // HAVE_CURRENT_DATA: enough decoded to start without a fetch wait.
    return this.bgmEl.readyState >= 2 && this.chaseEl.readyState >= 2;
  }

  /**
   * Wires bgm.mp3 and chase.mp3 into the graph ahead of time.
   *
   * Both elements are created with preload='auto' as soon as audio
   * initialises, so the files sit in the browser's media cache long before
   * the doctor first spots the player - a crossfade then has nothing left to
   * wait on. Each element runs through its own gain into the master bus,
   * which is both what the crossfades move and what setVolume / setMuted
   * already control.
   *
   * A missing or undecodable file is not an error: `tracksOk` stays false
   * and every crossfade falls back to the synthesised bed.
   */
  private setupMusicTracks(): void {
    const ctx = this.ctx;
    if (!ctx || this.bgmEl || !this.masterGain) return;
    try {
      const bgm = new Audio(bgmTrackUrl);
      const chase = new Audio(chaseTrackUrl);
      for (const el of [bgm, chase]) {
        el.preload = 'auto';
        el.loop = true;
        el.volume = 1;
        el.load();
      }

      const bgmTap = ctx.createMediaElementSource(bgm);
      const chaseTap = ctx.createMediaElementSource(chase);
      this.bgmTrackGain = ctx.createGain();
      this.chaseTrackGain = ctx.createGain();
      this.bgmTrackGain.gain.value = 0;
      this.chaseTrackGain.gain.value = 0;
      bgmTap.connect(this.bgmTrackGain).connect(this.masterGain);
      chaseTap.connect(this.chaseTrackGain).connect(this.masterGain);
      this.bgmEl = bgm;
      this.chaseEl = chase;
      this.tracksOk = true;

      const degrade = () => {
        this.tracksOk = false;
      };
      bgm.addEventListener('error', degrade);
      chase.addEventListener('error', degrade);

      // If the files finish buffering while a run is already underway in the
      // explore state, bring bgm up right then instead of waiting for the
      // next state change to notice they arrived.
      const warmedUp = () => {
        if (!this.musicEnabled || this.musicState !== 'explore') return;
        if (!this.bgmTrackGain || !this.chaseTrackGain || !this.filesReady()) return;
        const t = ctx.currentTime;
        this.ramp(this.chaseTrackGain.gain, 0, t, 0.4);
        this.ramp(this.bgmTrackGain.gain, HorrorAudio.EXPLORE_BGM_VOL, t, 1.5);
        this.ensureMusicPlaying();
      };
      bgm.addEventListener('canplaythrough', warmedUp);
      chase.addEventListener('canplaythrough', warmedUp);
    } catch {
      this.tracksOk = false;
    }
  }

  /** Starts whichever elements the current state expects to be audible. */
  private ensureMusicPlaying(): void {
    if (!this.musicEnabled || !this.tracksOk) return;
    for (const el of [this.bgmEl, this.chaseEl]) {
      if (el && el.paused) {
        void el.play().catch(() => {
          /* autoplay gate - retried on the next real gesture */
        });
      }
    }
  }

  /** Hard-pauses both tracks (tab hidden, run over, synth fallback). */
  private pauseMusic(): void {
    this.bgmEl?.pause();
    this.chaseEl?.pause();
  }

  /**
   * Smooth crossfade from exploration to chase music.
   * Fades out the ambience over 0.5s and brings in the chase track.
   * Also fires the bone-saw rev sound effect.
   */
  crossfadeToChase(): void {
    const ctx = this.ctx;
    if (!ctx) return;

    this.musicState = 'chase';
    const now = ctx.currentTime;

    if (this.bgmTrackGain && this.chaseTrackGain && this.filesReady()) {
      // The shipped tracks: bgm.mp3 ducks out over half a second while
      // chase.mp3 comes in at pursuit volume. Both elements keep looping
      // underneath, so the switch costs no seek and never stutters.
      this.ramp(this.bgmTrackGain.gain, 0, now, 0.5);
      this.ramp(this.chaseTrackGain.gain, HorrorAudio.CHASE_MUSIC_VOL, now, 0.5);
      if (this.ambienceGain) this.ramp(this.ambienceGain.gain, 0.45, now, 0.5);
      this.ensureMusicPlaying();
    } else {
      if (!this.chaseRunning) {
        this.buildChaseMusicGraph();
        this.chaseRunning = true;
      }

      // Synth fallback: the ambience bed *is* the explore track here, so it
      // ducks out (0.5s) while the procedural chase bed comes up (0.5s).
      // Any file track that finished loading meanwhile is held silent.
      if (this.ambienceGain) this.ramp(this.ambienceGain.gain, 0, now, 0.5);
      if (this.chaseGain) this.ramp(this.chaseGain.gain, HorrorAudio.CHASE_MUSIC_VOL, now, 0.5);
      if (this.bgmTrackGain) this.ramp(this.bgmTrackGain.gain, 0, now, 0.5);
      if (this.chaseTrackGain) this.ramp(this.chaseTrackGain.gain, 0, now, 0.5);
      this.pauseMusic();
    }

    // Bone-saw rev on commitment to the chase
    this.playSawRev(0.3);
  }

  /**
   * Smooth crossfade from chase back to exploration ambience.
   * Fades out chase music over 1s and raises the ambience back.
   */
  crossfadeToExplore(): void {
    const ctx = this.ctx;
    if (!ctx) return;

    this.musicState = 'explore';
    const now = ctx.currentTime;

    if (this.bgmTrackGain && this.chaseTrackGain && this.filesReady()) {
      // One full second back: chase.mp3 winds down, bgm.mp3 rises to its
      // explore level, and the room-tone bed comes back in under them. Both
      // elements kept looping through the chase, so returning costs no seek.
      this.ramp(this.chaseTrackGain.gain, 0, now, 1);
      this.ramp(this.bgmTrackGain.gain, HorrorAudio.EXPLORE_BGM_VOL, now, 1);
      if (this.ambienceGain) this.ramp(this.ambienceGain.gain, 0.45, now, 1);
      this.ensureMusicPlaying();
      return;
    }

    // Synth fallback: chase bed out over 1s, ambience bed back to its
    // explore level over 1s, file tracks (if any finished loading) held
    // silent until a later crossfade can adopt them cleanly.
    if (this.chaseGain) this.ramp(this.chaseGain.gain, 0, now, 1);
    if (this.ambienceGain) this.ramp(this.ambienceGain.gain, HorrorAudio.EXPLORE_BGM_VOL, now, 1);
    if (this.bgmTrackGain) this.ramp(this.bgmTrackGain.gain, 0, now, 1);
    if (this.chaseTrackGain) this.ramp(this.chaseTrackGain.gain, 0, now, 1);
    this.pauseMusic();
  }

  /** Current music state for external queries. */
  get currentMusicState(): 'explore' | 'chase' {
    return this.musicState;
  }

  /**
   * Handle mobile audio lifecycle: pause when hidden, resume when visible.
   */
  private installVisibilityHandler(): void {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Tab hidden or phone slept: park the context *and* both tracks, so
        // nothing keeps decoding while the game is not being watched.
        this.pauseMusic();
        this.suspend();
      } else {
        this.resume();
        this.ensureMusicPlaying();
      }
    });

    // iOS often refuses the play() a visibility handler issues, because
    // coming back from the background is not a user gesture. Every real tap
    // is, so any tap quietly retries whatever the browser turned down.
    document.addEventListener('pointerdown', () => this.ensureMusicPlaying(), {
      passive: true,
    });
  }

  destroy(): void {
    try {
      this.ambienceOsc?.stop();
      this.ambienceOsc2?.stop();
      this.windSource?.stop();
      this.rainSource?.stop();
      for (const osc of this.chaseOscs) osc.stop();
    } catch {
      /* oscillators may already be stopped */
    }
    this.pauseMusic();
    void this.ctx?.close();
    this.isInitialized = false;
    this.ambienceRunning = false;
    this.chaseRunning = false;
    this.musicState = 'explore';
    this.musicEnabled = false;
    // Media-element taps belong to the closed context and can never be
    // re-created for the same element, so a later init() starts fresh.
    this.bgmEl = null;
    this.chaseEl = null;
    this.bgmTrackGain = null;
    this.chaseTrackGain = null;
    this.tracksOk = false;
  }
}
