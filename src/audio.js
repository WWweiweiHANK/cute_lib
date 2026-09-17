/** Locally stored CC0 ambience, with independent quiet layers and generated UI effects. */
export class LibraryAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.master = null;
    this.ambience = null;
    this.ambienceVolume = 0.28;
    this.layers = [];
  }
  async start() {
    if (this.ctx) {
      await this.ctx.resume();
      return;
    }
    this.ctx = new AudioContext();
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = this.muted ? 0 : 0.5;
    this.master.connect(c.destination);
    this.ambience = c.createGain();
    this.ambience.gain.value = this.ambienceVolume;
    this.ambience.connect(this.master);
    // A very quiet fallback starts immediately; failed audio loads never block play.
    const buffer = c.createBuffer(1, c.sampleRate * 4, c.sampleRate),
      data = buffer.getChannelData(0);
    let brown = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      brown = (brown + 0.018 * white) / 1.02;
      data[i] = brown * 3 + white * 0.08;
    }
    const noise = c.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const filter = c.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 2400;
    const gain = c.createGain();
    gain.gain.value = 0.06;
    noise.connect(filter).connect(gain).connect(this.ambience);
    noise.start();
    const hum = c.createOscillator();
    hum.type = "sine";
    hum.frequency.value = 62;
    const humGain = c.createGain();
    humGain.gain.value = 0.003;
    hum.connect(humGain).connect(this.ambience);
    hum.start();
    this.loading = Promise.allSettled([
      this.loadLayer("/audio/indoor-rain-508962.mp3", 0.12, 1550, 47, -0.08),
      this.loadLayer("/audio/room-tone-192529.mp3", 0.075, 620, 71, 0.08),
    ]).then((results) => {
      if (results.some((result) => result.status === "fulfilled")) {
        gain.gain.setTargetAtTime(0, c.currentTime, 1.5);
        humGain.gain.setTargetAtTime(0, c.currentTime, 1.5);
      }
      return results;
    });
  }
  async loadLayer(url, level, cutoff, period, pan) {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error(`Audio unavailable: ${response.status}`);
    const original = await this.ctx.decodeAudioData(
      await response.arrayBuffer(),
    );
    const buffer = this.prepareLoop(original),
      c = this.ctx;
    const source = c.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const filter = c.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = cutoff;
    const volume = c.createGain();
    volume.gain.value = 0;
    const panner = c.createStereoPanner();
    panner.pan.value = pan;
    source
      .connect(filter)
      .connect(volume)
      .connect(panner)
      .connect(this.ambience);
    // Each layer fades slowly on a different cycle; sound events never become rhythmic.
    const modulation = c.createOscillator(),
      depth = c.createGain();
    modulation.frequency.value = 1 / period;
    depth.gain.value = level * 0.18;
    modulation.connect(depth).connect(volume.gain);
    volume.gain.setTargetAtTime(level, c.currentTime, 2);
    source.start(0, Math.random() * buffer.duration);
    modulation.start();
    this.layers.push({ url, source, volume, filter, modulation });
  }
  prepareLoop(original) {
    const fade = Math.min(
      Math.floor(original.sampleRate * 0.7),
      Math.floor(original.length / 4),
    );
    const result = this.ctx.createBuffer(
      original.numberOfChannels,
      original.length - fade,
      original.sampleRate,
    );
    let sum = 0,
      peak = 0;
    for (let ch = 0; ch < result.numberOfChannels; ch++) {
      const from = original.getChannelData(ch),
        to = result.getChannelData(ch);
      for (let i = 0; i < to.length; i++) {
        const angle = ((i / fade) * Math.PI) / 2;
        to[i] =
          i < fade
            ? from[original.length - fade + i] * Math.cos(angle) +
              from[i] * Math.sin(angle)
            : from[i];
        sum += to[i] * to[i];
        peak = Math.max(peak, Math.abs(to[i]));
      }
    }
    const rms = Math.sqrt(sum / (result.length * result.numberOfChannels));
    const scale = Math.min(
      0.18 / Math.max(rms, 0.0001),
      0.65 / Math.max(peak, 0.0001),
    );
    for (let ch = 0; ch < result.numberOfChannels; ch++) {
      const data = result.getChannelData(ch);
      for (let i = 0; i < data.length; i++) data[i] *= scale;
    }
    return result;
  }
  setAmbienceVolume(value) {
    this.ambienceVolume = Math.min(1, Math.max(0, Number(value) || 0));
    if (this.ambience)
      this.ambience.gain.setTargetAtTime(
        this.ambienceVolume,
        this.ctx.currentTime,
        0.15,
      );
  }
  toggle() {
    this.muted = !this.muted;
    if (this.master)
      this.master.gain.setTargetAtTime(
        this.muted ? 0 : 0.5,
        this.ctx.currentTime,
        0.15,
      );
    return !this.muted;
  }
  tone(frequency, duration = 0.13, volume = 0.12, delay = 0) {
    if (!this.ctx) return;
    const c = this.ctx,
      t = c.currentTime + delay,
      o = c.createOscillator(),
      g = c.createGain();
    o.type = "sine";
    o.frequency.value = frequency;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(volume, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.001, t + duration);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + duration + 0.02);
  }
  bell() {
    this.tone(1318, 0.75, 0.05);
    this.tone(1760, 0.7, 0.025, 0.12);
  }
  scan() {
    this.tone(1174, 0.14, 0.15);
    this.tone(1568, 0.25, 0.1, 0.095);
  }
  paper(volume = 0.09) {
    if (!this.ctx) return;
    const c = this.ctx,
      buf = c.createBuffer(1, c.sampleRate * 0.16, c.sampleRate),
      d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++)
      d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) * volume;
    const s = c.createBufferSource();
    s.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = 1350;
    s.connect(f).connect(this.master);
    s.start();
  }
  tap() {
    this.tone(175, 0.09, 0.025);
  }
}
