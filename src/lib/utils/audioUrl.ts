/**
 * Utility functions for handling audio URLs and CORS issues
 */

/**
 * Converts archive.org URLs to use the local proxy to avoid CORS issues
 * @param url The original URL
 * @returns The proxied URL if it's from archive.org, otherwise the original URL
 */
export function getProxiedAudioUrl(url: string): string {
  // Check if the URL is from archive.org
  if (url.includes('archive.org')) {
    // Extract the path from the archive.org URL
    const urlObj = new URL(url);
    const path = urlObj.pathname.startsWith('/') ? urlObj.pathname.slice(1) : urlObj.pathname;
    // Route through SvelteKit server proxy for robust Range/redirect handling
    return `/proxy/${path}`;
  }
  
  // Return the original URL for non-archive.org URLs
  return url;
}

/**
 * Gets the original URL without proxy (for fallback)
 * @param url The URL (could be proxied or original)
 * @returns The original URL
 */
export function getOriginalUrl(url: string): string {
  if (url.startsWith('/archive-proxy/')) {
    const path = url.replace('/archive-proxy', '');
    return `https://archive.org${path}`;
  }
  return url;
}

/**
 * Checks if a URL is from archive.org
 * @param url The URL to check
 * @returns True if the URL is from archive.org
 */
export function isArchiveOrgUrl(url: string): boolean {
  return url.includes('archive.org');
} 