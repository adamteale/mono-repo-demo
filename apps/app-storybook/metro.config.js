// metro.config.js
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
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
  // No change needed for native priority, defaults handle it
}

// Ensure uniqueness
config.resolver.sourceExts = [...new Set(config.resolver.sourceExts)];


// --- Optional: Add mjs back if filtered out and not building for web ---
// Or ensure it's always present regardless of platform if needed globally
// if (!config.resolver.sourceExts.includes('mjs')) {
//    config.resolver.sourceExts.push('mjs');
// }


// Log the final sourceExts order for debugging (optional)
console.log(`Metro sourceExts for platform '${process.env.PLATFORM || 'native'}':`, config.resolver.sourceExts);


module.exports = config;