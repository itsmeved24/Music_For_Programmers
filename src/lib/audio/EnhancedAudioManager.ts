import type { Episode, AudioConfig } from '../types';
import { AUDIO_CONFIG } from '../utils/constants';
import { browser } from '$app/environment';

export class EnhancedAudioManager {
  private audio: HTMLAudioElement | null = null;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private gainNode: GainNode | null = null;
  private source: MediaElementAudioSourceNode | null = null;
  private nextAudio: HTMLAudioElement | null = null;

  private currentEpisode: Episode | null = null;
  private nextEpisode: Episode | null = null;
  private isReady: boolean = false;

  constructor(private config: AudioConfig = AUDIO_CONFIG) {
    if (browser) {
      this.audio = new Audio();
      this.audio.crossOrigin = config.crossOrigin;
      this.audio.preload = 'metadata';
      this.setupListeners();
    }
  }

  private async initWebAudio() {
    if (!browser || !this.audio || this.audioContext) return;
    
    try {
      this.audioContext = new AudioContext();
      this.analyser = this.audioContext.createAnalyser();
      this.gainNode = this.audioContext.createGain();

      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.8;

      this.source = this.audioContext.createMediaElementSource(this.audio);
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
    } catch (error) {
      console.warn('Web Audio API init failed:', error);
    }
  }

  async loadEpisode(episode: Episode) {
    if (!browser || !this.audio) return;
    
    // Stop current playback
    this.audio.pause();
    this.isReady = false;
    
    this.currentEpisode = episode;
    this.audio.src = episode.url;
    
    return new Promise<void>((resolve, reject) => {
      if (!this.audio) return reject('No audio element');
      
      const onCanPlay = () => {
        this.isReady = true;
        this.audio?.removeEventListener('canplay', onCanPlay);
        this.audio?.removeEventListener('error', onError);
        resolve();
      };
      
      const onError = (e: Event) => {
        this.audio?.removeEventListener('canplay', onCanPlay);
        this.audio?.removeEventListener('error', onError);
        reject(e);
      };
      
      this.audio.addEventListener('canplay', onCanPlay);
      this.audio.addEventListener('error', onError);
      this.audio.load();
    });
  }

  setNextEpisode(episode: Episode) {
    this.nextEpisode = episode;
  }

  async play() {
    if (!browser || !this.audio || !this.isReady) {
      console.warn('Audio not ready to play');
      return;
    }
    
    try {
      // Initialize Web Audio API on first play
      if (!this.audioContext) {
        await this.initWebAudio();
      }
      
      // Resume audio context if suspended
      if (this.audioContext?.state === 'suspended') {
        await this.audioContext.resume();
      }
      
      await this.audio.play();
    } catch (error) {
      console.error('Play failed:', error);
      throw error;
    }
  }

  pause() {
    if (!browser || !this.audio) return;
    this.audio.pause();
  }

  setVolume(vol: number) {
    if (!browser || !this.audio) return;
    
    const volume = Math.min(1, Math.max(0, vol));
    this.audio.volume = volume;
    if (this.gainNode) this.gainNode.gain.value = volume;
  }

  getFrequencyData(): Uint8Array {
    if (!browser || !this.analyser) return new Uint8Array();
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return data;
  }

  getCurrentTime(): number {
    if (!browser || !this.audio) return 0;
    return this.audio.currentTime;
  }

  getDuration(): number {
    if (!browser || !this.audio) return 0;
    return this.audio.duration || 0;
  }

  isAudioReady(): boolean {
    return this.isReady;
  }

  private setupListeners() {
    if (!browser || !this.audio) return;
    
    this.audio.addEventListener('ended', () => {
      if (this.nextEpisode) {
        this.loadEpisode(this.nextEpisode).then(() => this.play());
      }
    });
    
    this.audio.addEventListener('error', (e) => {
      console.error('Audio error:', e);
      this.isReady = false;
    });

    this.audio.addEventListener('loadstart', () => {
      this.isReady = false;
    });
  }
}
