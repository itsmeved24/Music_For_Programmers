import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, url, request, fetch }) => {
  const rawPath = params.path || '';

  const target = new URL(`https://archive.org/${rawPath}`);
  if (url.search) {
    target.search = url.search;
  }

  const forwardHeaders: HeadersInit = {};
  const range = request.headers.get('range');
  if (range) forwardHeaders['Range'] = range;
  const ifModifiedSince = request.headers.get('if-modified-since');
  if (ifModifiedSince) forwardHeaders['If-Modified-Since'] = ifModifiedSince;

  const res = await fetch(target.toString(), {
    method: 'GET',
    headers: forwardHeaders,
    redirect: 'follow'
  });

  const headers = new Headers(res.headers);

  headers.delete('access-control-allow-origin');
  headers.delete('access-control-allow-credentials');

  if (!headers.has('Accept-Ranges')) headers.set('Accept-Ranges', 'bytes');

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers
  });
}; 