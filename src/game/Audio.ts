/**
 * Procedural horror audio system using Web Audio API
 * Generates eerie ambient sounds, footsteps, and jump scare effects
 */

export class HorrorAudio {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambienceGain: GainNode | null = null;
  private ambienceOsc: OscillatorNode | null = null;
  private ambienceOsc2: OscillatorNode | null = null;
  private isInitialized = false;

  async init(): Promise<void> {
    if (this.isInitialized) return;
    
    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.5;
    this.masterGain.connect(this.ctx.destination);
    
    this.ambienceGain = this.ctx.createGain();
    this.ambienceGain.gain.value = 0;
    this.ambienceGain.connect(this.masterGain);
    
    this.isInitialized = true;
  }

  resume(): void {
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /** Start eerie ambient drone */
  startAmbience(): void {
    if (!this.ctx || !this.ambienceGain) return;

    // Low drone
    this.ambienceOsc = this.ctx.createOscillator();
    this.ambienceOsc.type = 'sawtooth';
    this.ambienceOsc.frequency.value = 40;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 200;
    
    this.ambienceOsc.connect(filter);
    filter.connect(this.ambienceGain);
    this.ambienceOsc.start();

    // Higher eerie tone
    this.ambienceOsc2 = this.ctx.createOscillator();
    this.ambienceOsc2.type = 'sine';
    this.ambienceOsc2.frequency.value = 220;
    
    const filter2 = this.ctx.createBiquadFilter();
    filter2.type = 'bandpass';
    filter2.frequency.value = 300;
    filter2.Q.value = 20;
    
    const gain2 = this.ctx.createGain();
    gain2.gain.value = 0.1;
    
    this.ambienceOsc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(this.ambienceGain);
    this.ambienceOsc2.start();

    // Fade in
    this.ambienceGain.gain.setTargetAtTime(0.3, this.ctx.currentTime, 2);
  }

  stopAmbience(): void {
    if (!this.ctx || !this.ambienceGain) return;
    this.ambienceGain.gain.setTargetAtTime(0, this.ctx.currentTime, 1);
  }

  /** Subtle random eerie sounds */
  playCreepySound(): void {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    const type = Math.random() > 0.5 ? 'sine' : 'triangle';
    osc.type = type;
    osc.frequency.value = 100 + Math.random() * 400;
    
    filter.type = 'bandpass';
    filter.frequency.value = 200 + Math.random() * 600;
    filter.Q.value = 10 + Math.random() * 30;

    gain.gain.value = 0;
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    const now = this.ctx.currentTime;
    gain.gain.setTargetAtTime(0.08 + Math.random() * 0.05, now, 0.3);
    gain.gain.setTargetAtTime(0, now + 1 + Math.random() * 2, 0.5);
    
    // Slow frequency sweep for eeriness
    osc.frequency.setTargetAtTime(
      osc.frequency.value + (Math.random() - 0.5) * 100,
      now + 0.5,
      1
    );

    osc.start(now);
    osc.stop(now + 4);
  }

  /** Footstep sound */
  playFootstep(volume: number = 0.3): void {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = this.ctx.sampleRate * 0.1;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.1));
    }

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400 + Math.random() * 200;

    const gain = this.ctx.createGain();
    gain.gain.value = volume;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    source.start();
  }

  /** Key pickup sound */
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

  /** Jump scare sound */
  playJumpscare(): void {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const duration = 1.5;

    // Loud distorted burst
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 80;
    
    const distortion = this.ctx.createWaveShaper();
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      const x = (i / 128) - 1;
      curve[i] = (Math.PI + 100) * x / (Math.PI + 100 * Math.abs(x));
    }
    distortion.curve = curve;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.4;

    osc.connect(distortion);
    distortion.connect(gain);
    gain.connect(this.masterGain);

    osc.frequency.setTargetAtTime(200, now + 0.1, 0.2);
    gain.gain.setTargetAtTime(0, now + 0.8, 0.3);
    
    osc.start(now);
    osc.stop(now + duration);

    // Noise burst
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1);
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

  /** Door unlock sound */
  playDoorUnlock(): void {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    
    // Click
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

    // Creak
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

  /** Heartbeat effect (tension) */
  playHeartbeat(): void {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    
    for (let beat = 0; beat < 2; beat++) {
      const t = now + beat * 0.3;
      
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 50;
      
      const gain = this.ctx.createGain();
      gain.gain.value = 0;
      
      osc.connect(gain);
      gain.connect(this.masterGain);
      
      gain.gain.setTargetAtTime(0.2, t, 0.01);
      gain.gain.setTargetAtTime(0, t + 0.1, 0.05);
      
      osc.start(t);
      osc.stop(t + 0.3);
    }
  }

  /** Set master volume */
  setVolume(v: number): void {
    if (this.masterGain) {
      this.masterGain.gain.value = v;
    }
  }

  destroy(): void {
    this.ambienceOsc?.stop();
    this.ambienceOsc2?.stop();
    this.ctx?.close();
    this.isInitialized = false;
  }
}
