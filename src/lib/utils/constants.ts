import type { AudioConfig, VisualizerConfig } from '../types';

export const AUDIO_CONFIG: AudioConfig = {
  baseUrl: 'https://archive.org/download/',
  preloadNext: true,
  crossOrigin: 'anonymous'
};

export const VISUALIZER_CONFIG: VisualizerConfig = {
  fftSize: 256,
  smoothingTimeConstant: 0.8,
  minDecibels: -90,
  maxDecibels: -10,
  asciiChars: ' .-:=+*#%@',
  columns: 60,
  rows: 40
};

export const COLORS = {
  primary: '#00ff00',
  background: '#000000',
  text: '#00ff00',
  border: '#333333',
  accent: '#ffffff'
};

export const KEYBINDINGS = {
  PLAY_PAUSE: ' ', // Spacebar
  VOLUME_UP: 'ArrowUp',
  VOLUME_DOWN: 'ArrowDown',
  NEXT_EPISODE: 'ArrowRight',
  PREV_EPISODE: 'ArrowLeft'
};
