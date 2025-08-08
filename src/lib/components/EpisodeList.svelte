<script lang="ts">
  import type { Episode } from '$lib/types';
  import { createEventDispatcher } from 'svelte';
  import { favourites } from '$lib/stores/favorites';

  export let episodes: Episode[] = [];
  export let currentEpisodeNumber: number | null = null;

  const dispatch = createEventDispatcher<{ select: Episode }>();

  function handleSelect(episode: Episode) {
    dispatch('select', episode);
  }
</script>

{#each episodes as episode (episode.id)}
  <div
    class="episode-item hover"
    class:current={currentEpisodeNumber === episode.number}
    class:favourited={$favourites.has(episode.number)}
    role="button"
    tabindex="0"
    on:click={() => handleSelect(episode)}
    on:keydown={(e) => e.key === 'Enter' && handleSelect(episode)}
  >
    {String(episode.number).padStart(2, '0')}: {episode.title}
  </div>
{/each}

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
