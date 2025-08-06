<script lang="ts">
  import { audioActions, playbackState } from '../stores/audioStore';
  import type { Episode } from '../types';
  import { createEventDispatcher } from 'svelte';

  export let episode: Episode | null = null;
  
  const dispatch = createEventDispatcher();
  let audioElement: HTMLAudioElement;
  let isInitialized = false;

  // Expose simple imperative API to the parent
  export function loadEpisode(e: Episode) {
    episode = e;
    audioActions.loadEpisode(e);
    
    // Load the actual audio file
    if (audioElement && e.url) {
      audioElement.src = e.url;
      audioElement.load();
    }
  }
  
  export function toggle() {
    audioActions.togglePlayback();
    
    if (audioElement) {
      if ($playbackState.isPlaying) {
        audioElement.play().catch(err => {
          console.error('Error playing audio:', err);
          audioActions.setError('Failed to play audio');
        });
      } else {
        audioElement.pause();
      }
    }
  }

  // ENHANCED: Better seek functionality with bounds checking
  export function seekTo(time: number) {
    console.log('AudioPlayer seekTo called with:', time);
    console.log('Audio element exists:', !!audioElement);
    console.log('Audio duration:', $playbackState.duration);
    
    if (audioElement && $playbackState.duration > 0) {
      // Ensure time is within bounds
      const boundedTime = Math.max(0, Math.min($playbackState.duration, time));
      console.log('Setting audioElement.currentTime to:', boundedTime);
      
      try {
        audioElement.currentTime = boundedTime;
        // Update store to keep everything in sync
        audioActions.updateTime(boundedTime);
        console.log('Audio seek completed successfully');
      } catch (error) {
        console.error('Error seeking audio:', error);
      }
    } else {
      console.log('Cannot seek - audio element not ready or no duration');
    }
  }

  // Handle audio events
  function handleLoadStart() {
    console.log('Audio loading started');
    audioActions.setLoading(true);
  }

  function handleCanPlay() {
    console.log('Audio can play');
    audioActions.setLoading(false);
    dispatch('audioReady', audioElement);
  }

  function handleTimeUpdate() {
    if (audioElement) {
      // Only update if there's a significant difference to avoid loops
      const currentTime = audioElement.currentTime;
      if (Math.abs(currentTime - $playbackState.currentTime) > 0.5) {
        audioActions.updateTime(currentTime);
      }
    }
  }

  function handleDurationChange() {
    if (audioElement && audioElement.duration) {
      console.log('Audio duration changed to:', audioElement.duration);
      audioActions.setDuration(audioElement.duration);
    }
  }

  function handleEnded() {
    console.log('Audio playback ended');
    audioActions.pause();
  }

  function handleError(event) {
    console.error('Audio error:', event);
    const error = event.target?.error;
    let errorMessage = 'Failed to load audio';
    
    if (error) {
      switch (error.code) {
        case error.MEDIA_ERR_ABORTED:
          errorMessage = 'Audio playback aborted';
          break;
        case error.MEDIA_ERR_NETWORK:
          errorMessage = 'Network error loading audio';
          break;
        case error.MEDIA_ERR_DECODE:
          errorMessage = 'Audio decode error';
          break;
        case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMessage = 'Audio format not supported';
          break;
      }
    }
    
    audioActions.setError(errorMessage);
  }

  function handleVolumeChange() {
    if (audioElement) {
      // Only update store if volume actually changed to avoid loops
      if (Math.abs(audioElement.volume - $playbackState.volume) > 0.01) {
        audioActions.setVolume(audioElement.volume);
      }
    }
  }

  // ENHANCED: Better audio loading handling
  function handleLoadedData() {
    console.log('Audio data loaded');
    if (audioElement) {
      audioActions.setDuration(audioElement.duration);
      audioActions.setLoading(false);
    }
  }

  // Initialize audio element when component mounts
  function initializeAudio(node: HTMLAudioElement) {
    audioElement = node;
    isInitialized = true;
    
    // Set initial volume
    audioElement.volume = $playbackState.volume;
    
    console.log('Audio element initialized');
    
    return {
      destroy() {
        console.log('Audio element destroyed');
        isInitialized = false;
      }
    };
  }

  // ENHANCED: More robust reactive updates for playback state
  $: if (isInitialized && audioElement) {
    // Sync volume with some tolerance to prevent loops
    const volumeDiff = Math.abs(audioElement.volume - $playbackState.volume);
    if (volumeDiff > 0.01) {
      console.log('Syncing volume to:', $playbackState.volume);
      audioElement.volume = $playbackState.volume;
    }
  }

  // REMOVED: The problematic currentTime sync that was causing issues
  // The seek functionality now handles time updates properly through seekTo()
</script>

<!-- Real HTML5 Audio Element -->
<audio
  use:initializeAudio
  preload="metadata"
  crossorigin="anonymous"
  on:loadstart={handleLoadStart}
  on:canplay={handleCanPlay}
  on:loadeddata={handleLoadedData}
  on:timeupdate={handleTimeUpdate}
  on:durationchange={handleDurationChange}
  on:ended={handleEnded}
  on:error={handleError}
  on:volumechange={handleVolumeChange}
>
  Your browser does not support the audio element.
</audio>

<!-- Enhanced loading indicator -->
{#if $playbackState.isLoading}
  <div class="audio-loading">
    <div class="loading-spinner"></div>
    Loading audio...
  </div>
{/if}

<!-- Error display -->
{#if $playbackState.error}
  <div class="audio-error">
    ⚠️ {$playbackState.error}
  </div>
{/if}

<style>
  audio {
    display: none; /* Hide the default audio controls */
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
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .loading-spinner {
    width: 12px;
    height: 12px;
    border: 2px solid transparent;
    border-top: 2px solid #1BEB9E;
    border-radius: 50%;
    animation: spin 1s linear infinite;
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

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
