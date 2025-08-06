<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let animationFrame: number;
  
  const chars = ' .:-=+*#%@';
  const width = 80;
  const height = 20;
  
  onMount(() => {
    if (canvas) {
      ctx = canvas.getContext('2d')!;
      startAnimation();
    }
  });
  
  onDestroy(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  });
  
  function generateRandomASCII(): string {
    let result = '';
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const intensity = Math.random();
        const charIndex = Math.floor(intensity * chars.length);
        result += chars[charIndex];
      }
      if (y < height - 1) result += '\n';
    }
    return result;
  }
  
  function startAnimation() {
    function animate() {
      // This would normally be connected to audio analysis
      // For now, just showing static pattern
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
  }
</script>

<div class="ascii-visualizer">
  <pre class="ascii-output">{generateRandomASCII()}</pre>
</div>

<style>
  .ascii-visualizer {
    background: #000000;
    border: 1px solid #333333;
    padding: 10px;
    margin: 20px 0;
    font-family: 'Monaco', 'Menlo', 'Lucida Console', 'Courier New', monospace;
    font-size: 8px;
    line-height: 1;
    overflow: hidden;
  }
  
  .ascii-output {
    color: #004400;
    margin: 0;
    white-space: pre;
  }
</style>
