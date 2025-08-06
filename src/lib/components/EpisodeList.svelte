<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Episode } from '../types';

  export let episodes: Episode[];
  export let currentEpisode: Episode | null = null;

  const dispatch = createEventDispatcher<{
    episodeSelect: Episode;
  }>();

  function handleEpisodeClick(episode: Episode) {
    dispatch('episodeSelect', episode);
  }
</script>

<div class="episode-list">
  {#each episodes as episode}
    <div 
      class="episode-item" 
      class:current={currentEpisode?.number === episode.number}
      on:click={() => handleEpisodeClick(episode)}
      on:keydown={(e) => e.key === 'Enter' && handleEpisodeClick(episode)}
      role="button"
      tabindex="0"
    >
      <span class="episode-number">{episode.number}:</span> 
      <span class="episode-title" class:highlight={currentEpisode?.number === episode.number}>
        {episode.title}
      </span>
    </div>
  {/each}
</div>

<style>
  .episode-list {
    color: #00ff00;
    font-family: 'Monaco', 'Menlo', 'Lucida Console', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.4;
  }

  .episode-item {
    margin: 3px 0;
    cursor: pointer;
    transition: color 0.2s ease;
    padding: 2px 0;
  }

  .episode-item:hover {
    color: #ffffff;
  }

  .episode-item:focus {
    outline: 1px solid #00ff00;
    outline-offset: 2px;
  }

  .episode-number {
    color: #666666;
  }

  .episode-title.highlight {
    color: #ffffff;
    font-weight: bold;
  }

  .current .episode-number {
    color: #00ff00;
  }

  .current .episode-title {
    color: #ffffff;
  }
</style>
