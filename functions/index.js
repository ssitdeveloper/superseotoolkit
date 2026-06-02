/**
 * Super SEO Toolkit - Static Site Server
 * Serves index.html and all static assets
 */

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  try {
    // Try to get the requested file
    const response = await env.ASSETS.fetch(request);
    return response;
  } catch (e) {
    // If not found, serve index.html (for SPA routing)
    return env.ASSETS.fetch(new Request(new URL('/index.html', url).toString()));
  }
}
