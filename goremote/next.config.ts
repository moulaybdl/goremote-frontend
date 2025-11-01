import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Ignore TypeScript errors during build (including "any" type warnings)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Optional: Also ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
