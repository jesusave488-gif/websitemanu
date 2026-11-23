import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // next/image sert automatiquement des AVIF/WebP redimensionnés.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
