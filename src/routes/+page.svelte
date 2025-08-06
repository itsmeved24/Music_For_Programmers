<script lang="ts">
  import { onMount, tick } from 'svelte';
  import type { Episode } from '$lib/types';
  import { episodes, getEpisodeByNumber } from '$lib/data/episodes';
  import AudioPlayer from '$lib/components/AudioPlayer.svelte';
  import AudioVisualizer from '$lib/components/AudioVisualizer.svelte';
  import { audioActions, playbackState } from '$lib/stores/audioStore';
  import { gsap } from 'gsap';
  import { fade, fly } from 'svelte/transition';
  import '$lib/styles/main.css';

  let currentEpisode: Episode | null = null;
  let playerRef: AudioPlayer;

  onMount(() => {
    currentEpisode = getEpisodeByNumber(67) || episodes[0];
    
    // Start custom scramble animation after page loads
    setTimeout(() => {
      startCustomScrambleAnimation();
    }, 100);
  });

  function startCustomScrambleAnimation() {
    const scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?~`1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // Define animation sequence (left to right, top to bottom)
    const selectors = [
      '.code-block',
      '.audio-visualizer', 
      '.controls-line',
      '.time-line', 
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
            scrambleElement(element, scrambleChars, 800); // 800ms duration
          }, elementIndex * 50); // Stagger elements
        });
      }, delay);
      delay += 200; // Stagger each selector group
    });
  }

  function scrambleElement(element, chars, duration) {
    // Store original HTML structure
    const originalHTML = element.innerHTML;
    const originalText = element.textContent;
    const textLength = originalText.length;
    let progress = 0;
    const startTime = Date.now();
    
    function animate() {
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / duration, 1);
      
      let scrambledText = '';
      
      for (let i = 0; i < textLength; i++) {
        if (progress > i / textLength) {
          // Character is revealed
          scrambledText += originalText[i];
        } else {
          // Character is still scrambled
          scrambledText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      // Temporarily replace content with scrambled text
      element.textContent = scrambledText;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animation complete, restore original HTML structure with colors
        element.innerHTML = originalHTML;
      }
    }
    
    animate();
  }

  function handleEpisodeSelect(episode: Episode) {
    console.log('Episode selected:', episode.number, episode.title);
    currentEpisode = episode;
    console.log('🎵 Left column should show:', currentEpisode?.number, currentEpisode?.title);
    
    if (playerRef) {
      playerRef.loadEpisode(episode);
    }
  }

  function handlePlayClick() {
    if (playerRef) {
      playerRef.toggle();
    }
  }

  function handleSeek(event) {
    if (!$playbackState.duration) return;
    
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const progressWidth = rect.width;
    const seekTime = (clickX / progressWidth) * $playbackState.duration;
    
    if (playerRef) {
      playerRef.seekTo(seekTime);
    }
  }

  function handleSkip(seconds: number) {
    console.log('Skip clicked:', seconds, 'seconds');
    console.log('Current time:', $playbackState.currentTime);
    console.log('Player ref exists:', !!playerRef);
    
    const newTime = Math.max(0, $playbackState.currentTime + seconds);
    console.log('New time will be:', newTime);
    
    if (playerRef) {
      playerRef.seekTo(newTime);
      console.log('SeekTo called with:', newTime);
    } else {
      console.log('No player ref available');
    }
  }

  function handlePrevious() {
    // Go to previous episode
    if (currentEpisode && episodes.length > 0) {
      const currentIndex = episodes.findIndex(ep => ep.number === currentEpisode.number);
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : episodes.length - 1;
      handleEpisodeSelect(episodes[previousIndex]);
    }
  }

  function handleNext() {
    // Go to next episode
    if (currentEpisode && episodes.length > 0) {
      const currentIndex = episodes.findIndex(ep => ep.number === currentEpisode.number);
      const nextIndex = currentIndex < episodes.length - 1 ? currentIndex + 1 : 0;
      handleEpisodeSelect(episodes[nextIndex]);
    }
  }

  // Reactive statement to get current playing state
  $: isPlaying = $playbackState.isPlaying;
  
  // Debug reactive statement to track currentEpisode changes
  $: if (currentEpisode) {
    console.log('🎵 Current episode updated:', currentEpisode.number, currentEpisode.title);
  }
</script>

<svelte:head>
  <title>musicForProgramming();</title>
  <meta name="description" content="Datassette presents a series of mixes intended for listening while programming to focus the brain and inspire the mind." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400&display=swap" rel="stylesheet">
  <!-- Only need basic GSAP, no ScrambleText plugin -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</svelte:head>

<!-- THREE-COLUMN GRID -->
<div class="grid">
  <!-- COLUMN 1: Colorful Syntax Highlighted Terminal -->
  <section class="left pad">
    <div class="code-block mb">
      <span class="keyword">function</span> <span class="function-name">musicFor</span>(<span class="param">task</span> <span class="operator">=</span> <span class="string">'progra<br />mming'</span>) <span class="brace">&#123;</span> <span class="keyword">return</span> <span class="string">'A series of mi<br />xes intended for listening while<br />$&#123;task&#125; to focus the brain and i<br />nspire the mind.'</span>; <span class="brace">&#125;</span>
    </div>

    <!-- Audio Visualizer -->
    <AudioVisualizer {isPlaying} />
    <!-- Debug: isPlaying = {isPlaying}, playbackState.isPlaying = {$playbackState.isPlaying} -->

    <div class="episode-info mb">
      <!-- Updated current episode display with reactive key -->
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
      
      <div class="controls-line">
        <span class="control-link hover" on:click={handlePrevious} on:keydown={(e) => e.key === 'Enter' && handlePrevious()} role="button" tabindex="0">[prev]</span> 
        <span class="control-link hover" on:click={() => handleSkip(-30)} on:keydown={(e) => e.key === 'Enter' && handleSkip(-30)} role="button" tabindex="0">[-30]</span> 
        <span class="control-link hover" on:click={handlePlayClick} on:keydown={(e) => e.key === 'Enter' && handlePlayClick()} role="button" tabindex="0">
          {#if $playbackState.isLoading}
            [loading...]
          {:else if $playbackState.isPlaying}
            [pause]
          {:else}
            [play]
          {/if}
        </span> 
        <span class="control-link hover" on:click={() => handleSkip(30)} on:keydown={(e) => e.key === 'Enter' && handleSkip(30)} role="button" tabindex="0">[+30]</span> 
        <span class="control-link hover" on:click={handleNext} on:keydown={(e) => e.key === 'Enter' && handleNext()} role="button" tabindex="0">[next]</span>
      </div>
      
      <div class="time-line">
        {Math.floor($playbackState.currentTime / 60)}:{String(Math.floor($playbackState.currentTime % 60)).padStart(2, '0')} <span class="volume-control hover">[v-]</span> {Math.round($playbackState.volume * 100)} % <span class="volume-control hover">[v+]</span> <span class="random-link hover">[random]</span>
      </div>
    </div>

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

  <!-- COLUMN 2: Dynamic Episode Details -->
  <section class="middle">
    <div class="middle-content">
      {#if currentEpisode}
        {#key currentEpisode.number}
          <div in:fly="{{ y: 20, duration: 300, delay: 100 }}" out:fade="{{ duration: 200 }}">
            <!-- DYNAMIC TITLE -->
            <h1 class="episode-title large mb">Episode {currentEpisode.number}: {currentEpisode.title}</h1>

            <!-- EPISODE METADATA -->
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

            <!-- EPISODE DESCRIPTION -->
            <div class="episode-description mb">
              <div class="track description-text">{currentEpisode.description}</div>
            </div>

            <!-- PROGRESS BAR -->
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

            <!-- TRACK LISTING -->
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

            <!-- EPISODE TAGS -->
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

  <!-- COLUMN 3: Dynamic Episode List -->
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
            data-episode-number={episode.number}
            data-current-episode={currentEpisode?.number}
            data-is-current={currentEpisode?.number === episode.number}
          >
            {String(episode.number).padStart(2, '0')}: {episode.title}
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<AudioPlayer bind:this={playerRef} />
