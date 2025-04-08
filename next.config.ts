import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React strict mode
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL, // Expose the variable
  },
};

export default nextConfig;