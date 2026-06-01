import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  // Prevent CDN from caching HTML pages with stale asset chunk references
  async headers() {
    return [
      {
        // HTML pages: revalidate every request so fresh chunk filenames are served
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=0, must-revalidate",
          },
        ],
      },
      {
        // Immutable static assets (hashed filenames) — cache forever
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
