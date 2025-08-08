<script lang="ts">
  import { onDestroy } from 'svelte';
  import { playbackState } from '../stores/audioStore';
  
  export let isPlaying: boolean = false;
  
  let visualizerText = "____________________________________";
  let interval;
  
  const symbols = ['_', '-', '=', '≡', '|', '!', '‖', '│', '┃', '┊', '┋', '╎', '╏'];
  
  // FIXED: Reactive statement that properly detects play state
  $: {
    console.log('🎨 Visualizer state:', { isPlaying, playbackPlaying: $playbackState.isPlaying });
    
    if (isPlaying && $playbackState.isPlaying) {
      if (!interval) {
        console.log('🎨 Starting visualizer animation');
        interval = setInterval(() => {
          visualizerText = Array(36).fill(0).map((_, i) => {
            const wave = Math.sin(Date.now() * 0.01 + i * 0.3);
            const intensity = Math.floor((wave + 1) * (symbols.length - 1) / 2);
            return symbols[intensity] || '_';
          }).join('');
        }, 150);
      }
    } else {
      if (interval) {
        console.log('🎨 Stopping visualizer animation');
        clearInterval(interval);
        interval = null;
        visualizerText = "____________________________________";
      }
    }
  }
  
  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<div class="audio-visualizer" class:playing={isPlaying && $playbackState.isPlaying}>
  {visualizerText}
</div>

<style>
  .audio-visualizer {
    color: #666;
    margin: 20px 0;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 18px;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }
  
  .playing {
    color: #6a9955;
    text-shadow: 0 0 5px rgba(106, 149, 85, 0.3);
  }
</style>
