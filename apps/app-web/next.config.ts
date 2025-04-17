import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveExtensions: [
      ".web.tsx",
      ".web.ts",
      ".tsx",
      ".ts",
      ".mdx",
      ".jsx",
      ".js",
      ".json",
    ],
  },
};

export default nextConfig;
