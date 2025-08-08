<script lang="ts">
  import { audioActions, playbackState } from '../stores/audioStore';
import { getProxiedAudioUrl } from '../utils/audioUrl';
  import type { Episode } from '../types';
  import { createEventDispatcher } from 'svelte';
import { uiToGain, gainToUi } from '../utils/volume';

  export let episode: Episode | null = null;

  const dispatch = createEventDispatcher();
  let audioElement: HTMLAudioElement;
  let isInitialized = false;
  let shouldAutoplay = false;

  export function loadEpisode(e: Episode) {
    episode = e;
    // If we're currently playing, keep playing on the new episode
    shouldAutoplay = $playbackState.isPlaying === true;
    audioActions.loadEpisode(e);
    if (audioElement && e.url) {
      const proxied = getProxiedAudioUrl(e.url);
      audioElement.src = proxied;
      audioElement.load();
    }
  }

  export function toggle() {
    audioActions.togglePlayback();
    if (audioElement) {
      if ($playbackState.isPlaying) {
        audioElement.play().catch(err => {
          console.error('[AudioPlayer.play] error:', err);
          audioActions.setError('Failed to play audio');
        });
      } else {
        audioElement.pause();
      }
    }
  }

  // Called by page for progress clicks and skip
  export function seekTo(time: number) {
    console.log('[AudioPlayer.seekTo] requested:', time, 'audio?', !!audioElement, 'store dur:', $playbackState.duration);
    if (!audioElement || isNaN(time)) return;
    const duration = isFinite(audioElement.duration) && audioElement.duration > 0
      ? audioElement.duration
      : ($playbackState.duration || 0);
    const bounded = Math.max(0, Math.min(duration || time, time));
    try {
      audioElement.currentTime = bounded;
      audioActions.updateTime(bounded); // keep UI in sync immediately
      console.log('[AudioPlayer.seekTo] applied:', bounded, 'actual currentTime:', audioElement.currentTime);
    } catch (e) {
      console.error('[AudioPlayer.seekTo] error:', e);
    }
  }

  // Audio events
  function handleLoadStart() {
    audioActions.setLoading(true);
  }

  function handleCanPlay() {
    audioActions.setLoading(false);
    dispatch('audioReady', audioElement);
    // Auto-play if we were playing before episode switch
    if (shouldAutoplay || $playbackState.isPlaying) {
      shouldAutoplay = false;
      audioElement.play().catch(err => {
        console.error('[AudioPlayer.canplay auto-play] error:', err);
      });
    }
  }

  function handleLoadedMetadata() {
    if (audioElement && isFinite(audioElement.duration)) {
      console.log('[loadedmetadata] duration:', audioElement.duration);
      audioActions.setDuration(audioElement.duration);
    }
  }

  function handleTimeUpdate() {
    if (!audioElement) return;
    const t = audioElement.currentTime;
    if (Math.abs(t - $playbackState.currentTime) > 0.25) {
      audioActions.updateTime(t);
    }
  }

  function handleDurationChange() {
    if (audioElement?.duration && isFinite(audioElement.duration)) {
      audioActions.setDuration(audioElement.duration);
    }
  }

  function handleEnded() {
    audioActions.pause();
  }

  function handleError(event: Event) {
    console.error('[AudioPlayer] error event:', event);
    audioActions.setError('Failed to load audio');
  }

  function handleVolumeChange() {
    if (audioElement) {
      const currentGain = audioElement.volume;
      const expectedGain = uiToGain($playbackState.volume ?? 0.7);
      if (Math.abs(currentGain - expectedGain) > 0.01) {
        audioActions.setVolume(gainToUi(currentGain));
      }
    }
  }

  function initializeAudio(node: HTMLAudioElement) {
    audioElement = node;
    isInitialized = true;
    audioElement.volume = uiToGain($playbackState.volume ?? 0.7);
    console.log('[AudioPlayer] initialized, volume set to:', audioElement.volume);
    return {
      destroy() {
        isInitialized = false;
      }
    };
  }

  // Reactive sync for volume changes from store
  $: if (isInitialized && audioElement) {
    const storageVolume = $playbackState.volume ?? 0.7;
    const targetGain = uiToGain(storageVolume);
    if (Math.abs(audioElement.volume - targetGain) > 0.01) {
      audioElement.volume = targetGain;
      console.log('[AudioPlayer] volume synced to (gain):', targetGain);
    }
  }
</script>

<audio
  use:initializeAudio
  preload="metadata"
  on:loadstart={handleLoadStart}
  on:canplay={handleCanPlay}
  on:loadedmetadata={handleLoadedMetadata}
  on:timeupdate={handleTimeUpdate}
  on:durationchange={handleDurationChange}
  on:ended={handleEnded}
  on:error={handleError}
  on:volumechange={handleVolumeChange}
>
  Your browser does not support the audio element.
</audio>

{#if $playbackState.isLoading}
  <div class="audio-loading">
    Loading audio...
  </div>
{/if}

{#if $playbackState.error}
  <div class="audio-error">
    ⚠️ {$playbackState.error}
  </div>
{/if}

<style>
  audio {
    display: none;
  }
  
  .audio-loading {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(27, 235, 158, 0.1);
    color: #1BEB9E;
    padding: 10px 20px;
    border-radius: 4px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    z-index: 1000;
  }

  .audio-error {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 69, 58, 0.1);
    color: #ff453a;
    padding: 10px 20px;
    border-radius: 4px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    z-index: 1000;
    border: 1px solid rgba(255, 69, 58, 0.3);
  }
</style>
