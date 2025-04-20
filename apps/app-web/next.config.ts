import type { NextConfig } from "next";
import type { Configuration as WebpackConfiguration } from "webpack";
// const path = require('path');

const nextConfig: NextConfig = {
  reactStrictMode: true,

  transpilePackages: [
    "react-native-svg",
    "@react-native/assets-registry",
    "styled-components", // Add this
    "styled-components/native",
  ],

  webpack: (
    config: WebpackConfiguration,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    console.log("--- Running webpack function in next.config.ts ---");

    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native-svg$": "react-native-svg",
    };

    if (!config.resolve.extensions) config.resolve.extensions = [];
    const originalExtensions = [...config.resolve.extensions];
    const preferredExtensions = [
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ".web.svg",
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".svg",
    ];
    const newExtensions: string[] = [];
    for (const ext of preferredExtensions) {
      if (!newExtensions.includes(ext)) newExtensions.push(ext);
    }
    for (const ext of originalExtensions) {
      if (!newExtensions.includes(ext) && !preferredExtensions.includes(ext)) {
        newExtensions.push(ext);
      }
    }
    if (!newExtensions.includes(".json")) newExtensions.push(".json");
    // Ensure essential defaults are kept if not explicitly added
    const defaults = [".mjs", ".wasm"];
    for (const ext of defaults) {
      if (!newExtensions.includes(ext)) newExtensions.push(ext);
    }

    config.resolve.extensions = newExtensions;

    console.log("Webpack resolve.alias:", config.resolve?.alias);
    console.log("Webpack resolve.extensions:", config.resolve?.extensions);

    return config;
  },

  // Optional: Transpile react-native-svg if needed (usually not required with alias)
  // transpilePackages: ['react-native-svg'],
};

export default nextConfig;
