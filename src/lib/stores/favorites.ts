import { writable } from 'svelte/store';

const STORAGE_KEY = 'mfp_favourites_v1';

function loadInitial(): Set<number> {
  if (typeof localStorage === 'undefined') return new Set<number>();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set<number>();
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) return new Set<number>(arr.filter((n) => Number.isInteger(n)));
  } catch {}
  return new Set<number>();
}

function persist(favs: Set<number>) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(favs)));
  } catch {}
}

export const favourites = writable<Set<number>>(loadInitial());

export const favouriteActions = {
  toggle: (episodeNumber: number) => {
    favourites.update((s) => {
      const next = new Set(s);
      if (next.has(episodeNumber)) next.delete(episodeNumber); else next.add(episodeNumber);
      persist(next);
      return next;
    });
  },
  add: (episodeNumber: number) => {
    favourites.update((s) => {
      const next = new Set(s);
      next.add(episodeNumber);
      persist(next);
      return next;
    });
  },
  remove: (episodeNumber: number) => {
    favourites.update((s) => {
      const next = new Set(s);
      next.delete(episodeNumber);
      persist(next);
      return next;
    });
  },
  clear: () => {
    favourites.set(new Set());
    persist(new Set());
  }
}; 