import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
<<<<<<< HEAD
=======
  // images: {
  //   formats: ["image/avif", "image/webp"], // ✅ AVIF first, WebP fallback
  //   deviceSizes: [320, 480, 768, 1024, 1280, 1600, 1920],
  //   imageSizes: [16, 32, 64, 128, 256, 384],
  // },
  async rewrites() {
    return [
      {
        source: "/back/:path*",
        destination: "https://realsta.com/back/:path*",
      }
    ];
  },

  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
>>>>>>> 7c3b30b (initial commit)
};

export default nextConfig;
