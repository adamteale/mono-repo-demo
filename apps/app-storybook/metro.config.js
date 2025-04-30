const path = require('path');

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const { generate } = require('@storybook/react-native/scripts/generate');

generate({
  configPath: path.resolve(__dirname, './.storybook'),
});

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// --- Transformer Setting ---
config.transformer.unstable_allowRequireContext = true;

// --- Source Extensions Modification ---

// 1. Get the default source extensions
const defaultSourceExts = config.resolver.sourceExts || [];

// 2. Define web-specific extensions
const webExtensions = ['web.tsx', 'web.ts', 'web.jsx', 'web.js'];

// 3. Conditionally Modify for Web Platform
if (process.env.PLATFORM === 'web') {
  // Filter out the web extensions from the defaults to avoid duplicates if they exist
  const filteredDefaults = defaultSourceExts.filter(ext => !webExtensions.includes(ext.startsWith('.') ? ext.substring(1) : ext));

  // Prepend the web extensions to the filtered defaults
  config.resolver.sourceExts = [
    ...webExtensions.map(ext => ext.startsWith('.') ? ext : `.${ext}`), // Ensure leading dot
    ...filteredDefaults
  ];
} else {
  // For native, ensure mjs is included if needed, but keep Expo's default order otherwise
  if (!defaultSourceExts.includes('mjs')) {
      config.resolver.sourceExts.push('mjs');
  }
}

config.resolver.sourceExts = [...new Set(config.resolver.sourceExts)];

module.exports = withNativeWind(config, { input: './global.css' })