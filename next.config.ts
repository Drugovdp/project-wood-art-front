import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8080',
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  // cacheComponents: true,
  // partialPrefetching: true,
  reactCompiler: true,
};

export default nextConfig;
