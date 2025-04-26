const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// If the default location of App.js is not at the root, you can change it in the config.
config.resolver.sourceExts = [...config.resolver.sourceExts, 'cjs', 'mjs'];

config.resolver.resolveRequest = (context, moduleName, platform) => {
 if(moduleName === '../../App') {
   return context.resolveRequest(context, './app/_layout.tsx', platform); // Adjust the path to your root component
 }
 return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;