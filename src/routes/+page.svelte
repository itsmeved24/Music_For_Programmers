<script lang="ts">
  import { onMount } from 'svelte';
  import type { Episode } from '$lib/types';
  import { episodes, getEpisodeByNumber } from '$lib/data/episodes';
  import AudioPlayer from '$lib/components/AudioPlayer.svelte';
  import AudioVisualizer from '$lib/components/AudioVisualizer.svelte';
  import { audioActions, playbackState } from '$lib/stores/audioStore';
  import { fade, fly } from 'svelte/transition';
  import '$lib/styles/main.css';

  let currentEpisode: Episode | null = null;
  let playerRef: AudioPlayer;

  onMount(() => {
    // Set initial episode
    currentEpisode = getEpisodeByNumber(67) || episodes[0];

    // Load initial episode into the player once ref is available
    const tryLoad = () => {
      if (playerRef && currentEpisode) {
        console.log('[onMount] loading initial episode', currentEpisode.number);
        playerRef.loadEpisode(currentEpisode);
      } else {
        setTimeout(tryLoad, 50);
      }
    };
    tryLoad();

    // Optional: start your scramble animation if needed
    setTimeout(() => {
      startCustomScrambleAnimation();
    }, 100);
  });

  function startCustomScrambleAnimation() {
    const scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?~`1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const selectors = [
      '.code-block',
      // Exclude interactive elements to preserve Svelte event listeners
      // '.audio-visualizer',
      // '.controls-line',
      // '.time-line',
      '.links-row',
      '.stat-line',
      '.episode-title',
      '.meta-line',
      '.track'
    ];
    let delay = 0;
    selectors.forEach(selector => {
      setTimeout(() => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, elementIndex) => {
          setTimeout(() => {
            scrambleElement(element as HTMLElement, scrambleChars, 800);
          }, elementIndex * 50);
        });
      }, delay);
      delay += 200;
    });
  }

  function scrambleElement(element: HTMLElement, chars: string, duration: number) {
    const originalHTML = element.innerHTML;
    const originalText = element.textContent || '';
    const textLength = originalText.length;
    let progress = 0;
    const startTime = Date.now();
    function animate() {
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / duration, 1);
      let scrambledText = '';
      for (let i = 0; i < textLength; i++) {
        if (progress > i / textLength) {
          scrambledText += originalText[i];
        } else {
          scrambledText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      element.textContent = scrambledText;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.innerHTML = originalHTML;
      }
    }
    animate();
  }

  function handleEpisodeSelect(episode: Episode) {
    console.log('[handleEpisodeSelect]', episode.number, episode.title);
    currentEpisode = episode;
    if (playerRef) {
      playerRef.loadEpisode(episode);
    }
  }

  function handlePlayClick() {
    console.log('[handlePlayClick] playerRef exists:', !!playerRef);
    if (playerRef) {
      playerRef.toggle();
    }
  }

  // Progress bar click-to-seek
  function handleSeek(event: MouseEvent) {
    console.log('[handleSeek] start');
    console.log('duration:', $playbackState.duration, 'playerRef:', !!playerRef);
    if (!$playbackState.duration || !playerRef) {
      console.warn('[handleSeek] blocked: duration or playerRef missing');
      return;
    }
    const progressBar = event.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const seekTime = (clickX / rect.width) * $playbackState.duration;
    console.log('[handleSeek] seekTime:', seekTime);
    playerRef.seekTo(seekTime);
  }

  // Skip +/- 30s
  function handleSkip(seconds: number) {
    console.log('[handleSkip] seconds:', seconds, 'playerRef:', !!playerRef, 'duration:', $playbackState.duration, 'currentTime:', $playbackState.currentTime);
    if (!playerRef) {
      console.warn('[handleSkip] blocked: no playerRef');
      return;
    }
    // Allow skip even if duration not yet in store; AudioPlayer will bound using audioElement.duration
    const currentTime = $playbackState.currentTime || 0;
    const tentative = currentTime + seconds;
    console.log('[handleSkip] tentative:', tentative);
    playerRef.seekTo(tentative);
  }

  // Volume controls
  function handleVolumeDown() {
    const v = $playbackState.volume ?? 0.7;
    const newVolume = Math.max(0, v - 0.1);
    console.log('[volumeDown] from', v, 'to', newVolume);
    audioActions.setVolume(newVolume);
  }

  function handleVolumeUp() {
    const v = $playbackState.volume ?? 0.7;
    const newVolume = Math.min(1, v + 0.1);
    console.log('[volumeUp] from', v, 'to', newVolume);
    audioActions.setVolume(newVolume);
  }

  function handlePrevious() {
    if (!currentEpisode || episodes.length === 0) return;
    const idx = episodes.findIndex(ep => ep.number === currentEpisode.number);
    const prevIdx = idx > 0 ? idx - 1 : episodes.length - 1;
    handleEpisodeSelect(episodes[prevIdx]);
  }

  function handleNext() {
    if (!currentEpisode || episodes.length === 0) return;
    const idx = episodes.findIndex(ep => ep.number === currentEpisode.number);
    const nextIdx = idx < episodes.length - 1 ? idx + 1 : 0;
    handleEpisodeSelect(episodes[nextIdx]);
  }

  $: isPlaying = $playbackState.isPlaying;

  $: {
    // High-level state debug
    console.log('[Reactive] playing:', $playbackState.isPlaying, 'time:', $playbackState.currentTime, 'dur:', $playbackState.duration, 'vol:', $playbackState.volume);
  }
</script>

<svelte:head>
  <title>musicForProgramming();</title>
  <meta name="description" content="A series of mixes intended for listening while programming to focus the brain and inspire the mind." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400&display=swap" rel="stylesheet">
  <link rel="icon" href="/favicon.png" sizes="any" type="image/png">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</svelte:head>

<div class="grid">
  <!-- LEFT COLUMN -->
  <section class="left pad">
    <div class="code-block mb">
      <span class="keyword">function</span> <span class="function-name">musicFor</span>(<span class="param">task</span> <span class="operator">=</span> <span class="string">'progra<br />mming'</span>) <span class="brace">&#123;</span> <span class="keyword">return</span> <span class="string">'A series of mi<br />xes intended for listening while<br />$&#123;task&#125; to focus the brain and i<br />nspire the mind.'</span>; <span class="brace">&#125;</span>
    </div>

    <AudioVisualizer {isPlaying} />

    <div class="episode-info mb">
      <div class="current-episode mb">
        {#if currentEpisode}
          {#key currentEpisode.number}
            <span class="episode-number">{currentEpisode.number}:</span> 
            <span class="episode-title">{currentEpisode.title}</span> • 
            <span class="episode-meta">Episode {currentEpisode.number}</span>
          {/key}
        {:else}
          Loading episode...
        {/if}
      </div>

      <!-- Controls -->
      <div class="controls-line">
        <span class="control-link hover" on:click={handlePrevious} role="button" tabindex="0">[prev]</span> 
        <span class="control-link hover" on:click={() => handleSkip(-30)} role="button" tabindex="0">[-30]</span> 
        <span class="control-link hover" on:click={handlePlayClick} role="button" tabindex="0">
          {#if $playbackState.isLoading}
            [loading...]
          {:else if $playbackState.isPlaying}
            [pause]
          {:else}
            [play]
          {/if}
        </span> 
        <span class="control-link hover" on:click={() => handleSkip(30)} role="button" tabindex="0">[+30]</span> 
        <span class="control-link hover" on:click={handleNext} role="button" tabindex="0">[next]</span>
      </div>

      <!-- Time/Volume -->
      <div class="time-line">
        {Math.floor($playbackState.currentTime / 60)}:{String(Math.floor($playbackState.currentTime % 60)).padStart(2, '0')} 
        <span class="volume-control hover" on:click={handleVolumeDown} role="button" tabindex="0">[v-]</span> 
        {Math.round(($playbackState.volume ?? 0.7) * 100)} % 
        <span class="volume-control hover" on:click={handleVolumeUp} role="button" tabindex="0">[v+]</span> 
        <span class="random-link hover">[random]</span>
      </div>
    </div>

    <!-- Links and stats -->
    <div class="links-section mb">
      <div class="links-row">
        <span class="link-blue hover">[about]</span> <span class="link-blue hover">[credits]</span> <span class="link-blue hover">[rss.xml]</span>
      </div>
      <div class="links-row">
        <span class="link-orange hover">[patreon]</span> <span class="link-orange hover">[podcasts.apple]</span>
      </div>
      <div class="links-row">
        <span class="link-purple hover">[folder.jpg]</span> <span class="link-purple hover">[enterprise mode]</span>
      </div>
      <div class="links-row">
        <span class="link-purple hover">[invert]</span> <span class="link-purple hover">[fullscreen]</span>
      </div>
    </div>

    <div class="stats-section">
      <div class="stat-line">// {episodes.length} episodes</div>
      <div class="stat-line">// 1309 tracks</div>
      <div class="stat-line">// 110 hours</div>
      <div class="stat-line">// 41 minutes</div>
      <div class="stat-line">// 9 seconds</div>
    </div>
  </section>

  <!-- MIDDLE COLUMN -->
  <section class="middle">
    <div class="middle-content">
      {#if currentEpisode}
        {#key currentEpisode.number}
          <div in:fly="{{ y: 20, duration: 300, delay: 100 }}" out:fade="{{ duration: 200 }}">
            <h1 class="episode-title large mb">Episode {currentEpisode.number}: {currentEpisode.title}</h1>
            <div class="episode-meta mb">
              <div class="meta-line">
                <span class="play-link hover" on:click={handlePlayClick} role="button" tabindex="0">
                  {#if $playbackState.isLoading}
                    [loading...]
                  {:else if $playbackState.isPlaying}
                    [pause]
                  {:else}
                    [play]
                  {/if}
                </span>
                {Math.floor(currentEpisode.duration / 60)}:{String(currentEpisode.duration % 60).padStart(2, '0')}
              </div>
              <div class="meta-line">
                <span class="source-link hover">[source]</span> {currentEpisode.fileSize}
              </div>
              <div class="meta-line">
                <span class="fav-link hover">[favourite]</span>
              </div>
            </div>

            <div class="episode-description mb">
              <div class="track description-text">{currentEpisode.description}</div>
            </div>

            {#if $playbackState.duration > 0}
              <div class="progress-section mb">
                <div class="progress-info">
                  <span class="time-display">
                    {Math.floor($playbackState.currentTime / 60)}:{String(Math.floor($playbackState.currentTime % 60)).padStart(2, '0')} /
                    {Math.floor($playbackState.duration / 60)}:{String(Math.floor($playbackState.duration % 60)).padStart(2, '0')}
                  </span>
                </div>
                <div class="progress-bar" on:click={handleSeek}>
                  <div class="progress-fill" style="width: {($playbackState.currentTime / $playbackState.duration) * 100}%"></div>
                </div>
              </div>
            {/if}

            <div class="track-listing">
              <div class="track-header">Track Listing:</div>
              {#each currentEpisode.tracks as track, index}
                <div class="track">
                  {String(index + 1).padStart(2, '0')}. {track.artist} - {track.title}
                </div>
              {:else}
                <div class="track">No track listing available for this episode.</div>
              {/each}
            </div>

            <div class="episode-tags mb">
              <div class="track">Tags: {currentEpisode.tags.join(', ')}</div>
              <div class="track">Released: {currentEpisode.releaseDate.toLocaleDateString()}</div>
            </div>
          </div>
        {/key}
      {:else}
        <div in:fade="{{ duration: 300 }}">
          <h1 class="episode-title large mb">Select an Episode</h1>
          <div class="episode-meta mb">
            <div class="meta-line">Choose an episode from the list to begin</div>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <!-- RIGHT COLUMN -->
  <section class="right">
    <div class="right-content">
      <div class="episode-list">
        {#each episodes as episode (episode.id)}
          <div
            class="episode-item hover"
            class:current={currentEpisode?.number === episode.number}
            role="button"
            tabindex="0"
            on:click={() => handleEpisodeSelect(episode)}
            on:keydown={(e) => e.key === 'Enter' && handleEpisodeSelect(episode)}
          >
            {String(episode.number).padStart(2, '0')}: {episode.title}
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<AudioPlayer bind:this={playerRef} />

<style>
  .episode-number { color: #1BEB9E; font-weight: bold; }
  .episode-title { color: var(--c-white); }
  .episode-meta { color: #666; }
  .current-episode { transition: opacity 0.3s ease; }

  .control-link,
  .volume-control,
  .progress-bar {
    cursor: pointer;
    pointer-events: auto;
    position: relative;
    z-index: 2;
  }
</style>
