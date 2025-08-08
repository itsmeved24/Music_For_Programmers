

export function getProxiedAudioUrl(url: string): string {

  if (url.includes('archive.org')) {

    const urlObj = new URL(url);
    const path = urlObj.pathname.startsWith('/') ? urlObj.pathname.slice(1) : urlObj.pathname;

    return `/proxy/${path}`;
  }
  

  return url;
}

export function getOriginalUrl(url: string): string {
  if (url.startsWith('/archive-proxy/')) {
    const path = url.replace('/archive-proxy', '');
    return `https://archive.org${path}`;
  }
  return url;
}

export function isArchiveOrgUrl(url: string): boolean {
  return url.includes('archive.org');
} 