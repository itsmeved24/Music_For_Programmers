import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, url, request, fetch }) => {
  const rawPath = params.path || '';
  // Build target URL including query string
  const target = new URL(`https://archive.org/${rawPath}`);
  if (url.search) {
    target.search = url.search;
  }

  // Forward important headers (Range for seeking)
  const forwardHeaders: HeadersInit = {};
  const range = request.headers.get('range');
  if (range) forwardHeaders['Range'] = range;
  const ifModifiedSince = request.headers.get('if-modified-since');
  if (ifModifiedSince) forwardHeaders['If-Modified-Since'] = ifModifiedSince;

  // Follow redirects so we serve from our origin
  const res = await fetch(target.toString(), {
    method: 'GET',
    headers: forwardHeaders,
    redirect: 'follow'
  });

  // Pass through status and stream body
  const headers = new Headers(res.headers);
  // Ensure no CORS preflight issues; client is same-origin
  headers.delete('access-control-allow-origin');
  headers.delete('access-control-allow-credentials');

  // Encourage streaming / seeking
  if (!headers.has('Accept-Ranges')) headers.set('Accept-Ranges', 'bytes');

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers
  });
}; 