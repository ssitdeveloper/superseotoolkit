/**
 * Super SEO Toolkit - Cloudflare Pages Static Site Handler
 * This Worker serves the static site correctly on Cloudflare Pages
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Handle root
    if (pathname === '/' || pathname === '') {
      return env.ASSETS.fetch(new Request(new URL('/index.html', url).toString()));
    }

    // Try to serve the requested file
    try {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404 && !pathname.includes('.')) {
        // If file not found and no extension, serve index.html for SPA routing
        return env.ASSETS.fetch(new Request(new URL('/index.html', url).toString()));
      }
      return response;
    } catch (error) {
      // Fallback to index.html
      return env.ASSETS.fetch(new Request(new URL('/index.html', url).toString()));
    }
  },
};
