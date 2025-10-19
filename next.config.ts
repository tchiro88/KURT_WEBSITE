import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/KURT_WEBSITE', // GitHub Pages repository name
  assetPrefix: '/KURT_WEBSITE/',
};

export default nextConfig;
