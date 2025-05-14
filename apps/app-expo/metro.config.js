const path = require('path');

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
};

config.resolver = {
    ...config.resolver,
    assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...config.resolver.sourceExts, "svg"]
};

config.watchFolders = [
    path.resolve(__dirname, './src'),
    path.resolve(__dirname, '../app-core'),
    path.resolve(__dirname, '../../packages'),
]

module.exports = withNativeWind(config, { input: './global.css' })