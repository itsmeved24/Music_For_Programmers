import { writable } from 'svelte/store';
import type { Episode } from '../types';

interface PlaybackState {
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  currentEpisode: Episode | null;
  error: string | null;
}

const initialState: PlaybackState = {
  isPlaying: false,
  isLoading: false,
  currentTime: 0,
  duration: 0,
  volume: 0.7, // Default 70% volume
  currentEpisode: null,
  error: null
};

export const playbackState = writable<PlaybackState>(initialState);

export const audioActions = {
  loadEpisode: (episode: Episode) => {
    playbackState.update(state => ({
      ...state,
      currentEpisode: episode,
      isLoading: true,
      error: null,
      currentTime: 0,
      duration: 0
    }));
  },

  play: () => {
    playbackState.update(state => ({
      ...state,
      isPlaying: true,
      error: null
    }));
  },

  pause: () => {
    playbackState.update(state => ({
      ...state,
      isPlaying: false
    }));
  },

  togglePlayback: () => {
    playbackState.update(state => ({
      ...state,
      isPlaying: !state.isPlaying
    }));
  },

  updateTime: (time: number) => {
    playbackState.update(state => ({
      ...state,
      currentTime: time
    }));
  },

  setDuration: (duration: number) => {
    playbackState.update(state => ({
      ...state,
      duration: duration
    }));
  },

  seekTo: (time: number) => {
    playbackState.update(state => ({
      ...state,
      currentTime: time
    }));
  },

  setVolume: (volume: number) => {
    playbackState.update(state => ({
      ...state,
      volume: Math.max(0, Math.min(1, volume))
    }));
  },

  setLoading: (loading: boolean) => {
    playbackState.update(state => ({
      ...state,
      isLoading: loading
    }));
  },

  setError: (error: string | null) => {
    playbackState.update(state => ({
      ...state,
      error: error,
      isLoading: false
    }));
  }
};
