/**
 * Cloudflare Pages - Static Site Worker
 * This file serves all static assets and routes to index.html for SPA
 */

export default {
  async fetch(request, env, ctx) {
    try {
      // Get the asset
      return await env.ASSETS.fetch(request);
    } catch (error) {
      // On error, try index.html
      const url = new URL(request.url);
      return await env.ASSETS.fetch(new Request(new URL('/index.html', url).toString()));
    }
  },
};
