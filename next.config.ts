import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["admindate.finnkuiper.boo"],
  },
  eslint: {
    dirs: ["src"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
