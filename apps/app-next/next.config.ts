import type { NextConfig } from "next";
import type { Configuration as WebpackConfiguration } from "webpack";
// const path = require('path');

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  transpilePackages: [
    "react-native-svg",
    "@react-native/assets-registry",
    "styled-components",
    "styled-components/native",
    "@mono-repo-demo/atomic-library",
    "@expo/vector-icons",
    "react-native-vector-icons",
    "expo-modules-core",
    "expo-font",
  ],

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },

  webpack: (
    config: WebpackConfiguration,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      "react-native-svg$": "react-native-svg",
      "styled-components/native$": "styled-components",
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

    if (!config.module) config.module = {};
    if (!config.module.rules) config.module.rules = [];

    config.module.rules.push({
      test: /\.ttf$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        // Define __DEV__ based on the build mode (dev server vs production build)
        __DEV__: dev,
      })
    );

    return config;
  },

  // Optional: Transpile react-native-svg if needed (usually not required with alias)
  // transpilePackages: ['react-native-svg'],
};

export default nextConfig;
