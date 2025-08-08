<script lang="ts">
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';
  import type { Episode } from '$lib/types';
  import { episodes, getEpisodeByNumber } from '$lib/data/episodes';
  import AudioPlayer from '$lib/components/AudioPlayer.svelte';
  import AudioVisualizer from '$lib/components/AudioVisualizer.svelte';
  import EpisodeList from '$lib/components/EpisodeList.svelte';
  import { audioActions, playbackState } from '$lib/stores/audioStore';
  import { favourites, favouriteActions } from '$lib/stores/favorites';
  import { fade, fly } from 'svelte/transition';
  import '$lib/styles/main.css';

  let currentEpisode: Episode | null = null;
  let playerRef: AudioPlayer;

  let marqueeContainer: HTMLDivElement | null = null;
  let marqueeItem: HTMLSpanElement | null = null;
  let visualizerWrap: HTMLDivElement | null = null;
  let appRoot: HTMLElement | null = null;

  // Stats
  const totalEpisodes = episodes.length;
  const totalTracks = episodes.reduce((sum, ep) => sum + (ep.tracks?.length ?? 0), 0);
  const totalDurationSeconds = episodes.reduce((sum, ep) => sum + (ep.duration ?? 0), 0);
  const totalHours = Math.floor(totalDurationSeconds / 3600);
  const totalMinutes = Math.floor((totalDurationSeconds % 3600) / 60);
  const totalSeconds = totalDurationSeconds % 60;

  // Fullscreen toggle
  let isFullscreen = false;
  let sf: any = null;
  function getFullscreenElement(): Element | null {
    const d: any = typeof document !== 'undefined' ? document : null;
    return d?.fullscreenElement || d?.webkitFullscreenElement || d?.mozFullScreenElement || d?.msFullscreenElement || null;
  }
  function refreshFullscreenState() {
    if (typeof document === 'undefined') return;
    isFullscreen = sf?.isEnabled ? !!sf.isFullscreen : !!getFullscreenElement();
  }
  async function enterFullscreen() {
    try {
      if (sf?.isEnabled) {
        await sf.request(appRoot ?? document.documentElement);
      } else {
        const root: any = (appRoot as any) ?? (typeof document !== 'undefined' ? document.documentElement : null);
        if (root && !getFullscreenElement()) {
          if (root.requestFullscreen) await root.requestFullscreen();
          else if (root.webkitRequestFullscreen) await root.webkitRequestFullscreen();
          else if (root.mozRequestFullScreen) await root.mozRequestFullScreen();
          else if (root.msRequestFullscreen) await root.msRequestFullscreen();
        }
      }
    } finally {
      refreshFullscreenState();
    }
  }
  async function exitFullscreen() {
    try {
      if (sf?.isEnabled && sf.isFullscreen) {
        await sf.exit();
      } else {
        const d: any = typeof document !== 'undefined' ? document : null;
        if (d && getFullscreenElement()) {
          if (d.exitFullscreen) await d.exitFullscreen();
          else if (d.webkitExitFullscreen) await d.webkitExitFullscreen();
          else if (d.mozCancelFullScreen) await d.mozCancelFullScreen();
          else if (d.msExitFullscreen) await d.msExitFullscreen();
        }
      }
    } finally {
      refreshFullscreenState();
    }
  }
  function toggleFullscreen() {
    if (isFullscreen) exitFullscreen(); else enterFullscreen();
  }

  function updateMarqueeWidth() {
    if (marqueeContainer) {
      const baseWidth = visualizerWrap?.offsetWidth || marqueeItem?.offsetWidth || 0;
      if (baseWidth > 0) {
        marqueeContainer.style.width = `${baseWidth}px`;
      }
    }
  }

  onMount(() => {

    try {
      const stamp = Date.now();
      const rels = ['icon', 'shortcut icon', 'apple-touch-icon'];
      rels.forEach((rel) => {
        let link = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
        if (!link) {
          link = document.createElement('link');
          link.rel = rel as any;
          document.head.appendChild(link);
        }
        link.href = `/favicon.png?v=${stamp}`;
        link.type = 'image/png';
      });
    } catch {}

    currentEpisode = getEpisodeByNumber(67) || episodes[0];

    const tryLoad = () => {
      if (playerRef && currentEpisode) {
        console.log('[onMount] loading initial episode', currentEpisode.number);
        playerRef.loadEpisode(currentEpisode);
      } else {
        setTimeout(tryLoad, 50);
      }
    };
    tryLoad();

    setTimeout(() => {
      startCustomScrambleAnimation();
    }, 100);

    setTimeout(updateMarqueeWidth, 0);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateMarqueeWidth);
      
      const d: any = document;
      const handler = () => refreshFullscreenState();
      d.addEventListener('fullscreenchange', handler);
      d.addEventListener('webkitfullscreenchange', handler);
      d.addEventListener('mozfullscreenchange', handler);
      d.addEventListener('MSFullscreenChange', handler);
      
      refreshFullscreenState();
      (window as any).__fsHandler = handler;

      // Lazy-load screenfull if available
      import('screenfull').then((mod) => {
        sf = mod?.default ?? mod;
        if (sf?.isEnabled) {
          sf.on('change', handler);
          refreshFullscreenState();
        }
      }).catch(() => {});
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateMarqueeWidth);
      const d: any = document;
      const handler = (window as any).__fsHandler;
      if (handler) {
        d.removeEventListener('fullscreenchange', handler);
        d.removeEventListener('webkitfullscreenchange', handler);
        d.removeEventListener('mozfullscreenchange', handler);
        d.removeEventListener('MSFullscreenChange', handler);
      }
    }
  });

  function startCustomScrambleAnimation() {
    if (typeof document === 'undefined') return;
    const scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?~`1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const selectors = [
      '.code-block',

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

    setTimeout(updateMarqueeWidth, 0);
  }

  function handlePlayClick() {
    console.log('[handlePlayClick] playerRef exists:', !!playerRef);
    if (playerRef) {
      playerRef.toggle();
    }
  }

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

  function handleSkip(seconds: number) {
    console.log('[handleSkip] seconds:', seconds, 'playerRef:', !!playerRef, 'duration:', $playbackState.duration, 'currentTime:', $playbackState.currentTime);
    if (!playerRef) {
      console.warn('[handleSkip] blocked: no playerRef');
      return;
    }

    const currentTime = $playbackState.currentTime || 0;
    const tentative = currentTime + seconds;
    console.log('[handleSkip] tentative:', tentative);
    playerRef.seekTo(tentative);
  }

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
  $: isFavourited = currentEpisode ? $favourites.has(currentEpisode.number) : false;

  $: {

    console.log('[Reactive] playing:', $playbackState.isPlaying, 'time:', $playbackState.currentTime, 'dur:', $playbackState.duration, 'vol:', $playbackState.volume);
  }

  $: currentEpisode, setTimeout(updateMarqueeWidth, 0);
</script>

<svelte:head>
  <title>musicForCoding</title>
  <meta name="description" content="A series of mixes intended for listening while programming to focus the brain and inspire the mind." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400&display=swap" rel="stylesheet">
  <link rel="icon" href="/favicon.png?v=3" sizes="any" type="image/png">
  <link rel="shortcut icon" href="/favicon.png?v=3" type="image/png">
</svelte:head>

<div class="grid" bind:this={appRoot}>
  <!-- LEFT COLUMN -->
  <section class="left pad" role="region" aria-label="Left column" on:copy|preventDefault on:cut|preventDefault on:selectstart|preventDefault on:contextmenu|preventDefault>
    <div class="code-block mb">
      <span class="keyword">function</span> <span class="function-name">musicFor</span>(<span class="param">task</span> <span class="operator">=</span> <span class="string">'progra<br />mming'</span>) <span class="brace">&#123;</span> <span class="keyword">return</span> <span class="string">'A series of mi<br />xes intended for listening while<br />$&#123;task&#125; to focus the brain and i<br />nspire the mind.'</span>; <span class="brace">&#125;</span>
    </div>

    <div bind:this={visualizerWrap} style="width: fit-content;">
    <AudioVisualizer {isPlaying} />
    </div>

    <div class="episode-info mb">
      <div class="current-episode mb">
        {#if currentEpisode}
          {#key currentEpisode.number}
            <div class="marquee" bind:this={marqueeContainer}>
              <div class="marquee__track" class:running={$playbackState.isPlaying}>
                <span class="marquee__item" bind:this={marqueeItem}>• Episode {currentEpisode.number}: {currentEpisode.title} </span>
                <span class="marquee__item" aria-hidden="true">• Episode {currentEpisode.number}: {currentEpisode.title} </span>
              </div>
            </div>
          {/key}
        {:else}
          Loading episode...
        {/if}
      </div>

      <!-- Controls -->
      <div class="controls-line">
        <span class="control-link hover" on:click={handlePrevious} on:keydown={(e) => e.key==='Enter' && handlePrevious()} role="button" tabindex="0">[prev]</span> 
        <span class="control-link hover" on:click={() => handleSkip(-30)} on:keydown={(e) => e.key==='Enter' && handleSkip(-30)} role="button" tabindex="0">[-30]</span> 
        <span class="control-link hover" on:click={handlePlayClick} on:keydown={(e) => e.key==='Enter' && handlePlayClick()} role="button" tabindex="0">
          {#if $playbackState.isLoading}
            [loading...]
          {:else if $playbackState.isPlaying}
            [pause]
          {:else}
            [play]
          {/if}
        </span> 
        <span class="control-link hover" on:click={() => handleSkip(30)} on:keydown={(e) => e.key==='Enter' && handleSkip(30)} role="button" tabindex="0">[+30]</span> 
        <span class="control-link hover" on:click={handleNext} on:keydown={(e) => e.key==='Enter' && handleNext()} role="button" tabindex="0">[next]</span>
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
      <!--
      <div class="links-row">
        <span class="link-orange hover">[patreon]</span> <span class="link-orange hover">[podcasts.apple]</span>
      </div>
      -->
      <div class="links-row">
        <span class="link-purple hover">[folder.jpg]</span> <span class="link-purple hover">[enterprise mode]</span>
      </div>
      <div class="links-row">
        <span class="link-purple hover">[invert]</span> <span class="link-purple hover" role="button" tabindex="0" on:click={toggleFullscreen} on:keydown={(e) => e.key==='Enter' && toggleFullscreen()}>
          {#if isFullscreen}[exit]{:else}[fullscreen]{/if}
        </span>
      </div>
    </div>

    <div class="stats-section">
      <div class="stat-line">// {totalEpisodes} episodes</div>
      <div class="stat-line">// {totalTracks} tracks</div>
      <div class="stat-line">// {totalHours} hours</div>
      <div class="stat-line">// {totalMinutes} minutes</div>
      <div class="stat-line">// {totalSeconds} seconds</div>
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
                <a class="source-link hover" href={currentEpisode.sourcePage ?? currentEpisode.url} target="_blank" rel="noopener noreferrer">[source]</a> {currentEpisode.fileSize}
              </div>
              <div class="meta-line">
                <span class="fav-link hover" role="button" tabindex="0" on:click={() => currentEpisode && favouriteActions.toggle(currentEpisode.number)} on:keydown={(e) => e.key==='Enter' && currentEpisode && favouriteActions.toggle(currentEpisode.number)}>
                  {#if isFavourited}
                    [forget]
                  {:else}
                    [favourite]
                  {/if}
                </span>
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
                <div class="progress-bar" on:click={handleSeek} role="button" tabindex="0" on:keydown={(e) => e.key==='Enter' && (handleSeek(e as any))}>
                  <div class="progress-fill" style="width: {($playbackState.currentTime / $playbackState.duration) * 100}%"></div>
                </div>
              </div>
            {/if}

            <div class="track-listing">
              <div class="track-header">Track Listing:</div>
              {#each currentEpisode.tracks as track, index}
                <div class="track">
                  {String(index + 1).padStart(2, '0')}. {track.title} - {track.artist}
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
        <EpisodeList
          {episodes}
          currentEpisodeNumber={currentEpisode?.number ?? null}
          on:select={(e) => handleEpisodeSelect(e.detail)}
        />

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

  
  .marquee { position: relative; overflow: hidden; white-space: nowrap; color: #898989; }
  .marquee__track { display: inline-flex; gap: 0; will-change: transform; transform: translateX(0); animation: marquee-scroll 18s linear infinite; animation-play-state: paused; }
  .marquee__track.running { animation-play-state: running; }
  .marquee__item { display: inline-block; padding: 0; font-family: 'IBM Plex Mono', monospace; font-size: 18px; letter-spacing: 0.05em; }
  @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
</style>
