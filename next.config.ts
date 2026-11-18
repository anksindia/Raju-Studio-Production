import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only: AVIF at moderate quality smooths away fabric and jewellery detail.
    formats: ["image/webp"],
    qualities: [85, 90],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920, 2400],
    imageSizes: [96, 160, 256, 320],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
