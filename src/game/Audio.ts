/**
 * Procedural horror audio built on the Web Audio API.
 * Everything is synthesised - no audio files are shipped with the game.
 */

export class HorrorAudio {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambienceGain: GainNode | null = null;
  private ambienceOsc: OscillatorNode | null = null;
  private ambienceOsc2: OscillatorNode | null = null;
  private windSource: AudioBufferSourceNode | null = null;
  private rainSource: AudioBufferSourceNode | null = null;
  private rainGain: GainNode | null = null;
  private isInitialized = false;
  private ambienceRunning = false;
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
  }

  resume(): void {
    if (this.ctx?.state === 'suspended') {
      void this.ctx.resume();
    }
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
    this.ambienceGain.gain.setTargetAtTime(0.3, this.ctx.currentTime, 1.2);
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
  }

  stopAmbience(): void {
    if (!this.ctx || !this.ambienceGain) return;
    this.ambienceGain.gain.setTargetAtTime(0, this.ctx.currentTime, 1);
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

  /** Footstep on concrete. */
  playFootstep(volume: number = 0.3): void {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.09));
    }

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 380 + Math.random() * 220;

    const gain = this.ctx.createGain();
    gain.gain.value = volume;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    source.start();
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

  destroy(): void {
    try {
      this.ambienceOsc?.stop();
      this.ambienceOsc2?.stop();
      this.windSource?.stop();
      this.rainSource?.stop();
    } catch {
      /* oscillators may already be stopped */
    }
    void this.ctx?.close();
    this.isInitialized = false;
    this.ambienceRunning = false;
  }
}
