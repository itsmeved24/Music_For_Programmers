import { writable } from 'svelte/store';
import type { Episode } from '../types';
import { episodes as episodeData } from '../data/episodes';

export const episodes = writable<Episode[]>(episodeData);

