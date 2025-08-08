export interface Track {
  artist: string;
  title: string;
  label?: string;
  remix?: string;
}

export interface Episode {
  id: number;
  number: number;
  title: string;
  artist: string;
  duration: number;
  fileSize: string;
  url: string; 
  tracks: Track[];
  description?: string;
  releaseDate: Date;
  tags: string[];
  sourcePage?: string; 
}

export interface PlaybackState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume?: number;
  error?: string;
};

export interface VisualizerData {
  frequencyData: Uint8Array;
  timeData: Uint8Array;
  asciiOutput: string;
}

export interface AudioConfig {
  baseUrl: string;
  fallbackUrl?: string;
  preloadNext: boolean;
  crossOrigin: 'anonymous' | 'use-credentials';
}

export interface VisualizerConfig {
  fftSize: number;
  smoothingTimeConstant: number;
  minDecibels: number;
  maxDecibels: number;
  asciiChars: string;
  columns: number;
  rows: number;
}
