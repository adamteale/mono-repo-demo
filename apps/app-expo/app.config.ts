import "dotenv/config";

export default ({ config }) => {
  const APP_ENV = process.env.APP_ENV || "development";
  return {
    expo: {
      name: "Pricesmart",
      slug: "mono-repo-demo",
      version: "1.0.0", // You might want to manage this dynamically or via EAS
      runtimeVersion: "1.0.0",
      orientation: "portrait",
      icon: "./assets/images/icon.png",
      scheme: "myapp",
      userInterfaceStyle: "automatic", // or "light", "dark"
      splash: {
        // Moved splash screen config under 'splash' key as per modern Expo standards
        image: "./assets/images/splash-icon.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      updates: {
        // Modern way to configure updates
        url: "https://u.expo.dev/c341ecc2-0b28-490c-a09d-9ea72c7f75d3",
        fallbackToCacheTimeout: 0, // Optional: controls how long to wait for an update
      },
      assetBundlePatterns: [
        // Good practice to include this
        "**/*",
      ],
      ios: {
        supportsTablet: true,
        bundleIdentifier: "com.adam.teale.monorepodemo",
        infoPlist: {
          ITSAppUsesNonExemptEncryption: false,
        },
        // runtimeVersion: { // More specific runtimeVersion for iOS if needed
        //   policy: "appVersion"
        // }
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
        package: "com.adam.teale.monorepodemo",
        // runtimeVersion: { // More specific runtimeVersion for Android if needed
        //   policy: "appVersion"
        // }
      },
      web: {
        bundler: "metro",
        output: "server", // If you are using SSR with Expo Router
        favicon: "./assets/images/favicon.png",
      },
      plugins: [
        "expo-router",
        // "expo-splash-screen" // The plugin itself is often not needed here anymore
        // if the config is under expo.splash.
        // However, if you have custom splash screen logic, keep it.
        // For simple config, expo.splash is preferred.
      ],
      experiments: {
        typedRoutes: true, // Keep if you use typed routes
      },
      extra: {
        APP_ENV: APP_ENV,
        apiUrl: process.env.API_URL,
        featureXEnabled: process.env.FEATURE_X_ENABLED === "true",
        sentryDsn: process.env.SENTRY_DSN,
        environment: process.env.APP_ENV!,

        router: {
          // This was in your original app.json
          origin: false,
        },
        eas: {
          // This was in your original app.json
          projectId: "c341ecc2-0b28-490c-a09d-9ea72c7f75d3",
          // EAS Build automatically adds its own 'buildProfile' etc. here too
        },
      },
      owner: "adam.teale", // Keep if this is your Expo account username for publishing
      // runtimeVersion: {
      //   // Modern way to manage runtimeVersion, can be string or object
      //   policy: "appVersion", // Or "sdkVersion", or a specific string "1.0.0"
      // },
      // newArchEnabled and typedRoutesEnabled are now top-level under "expo"
      // or handled by experiments or specific plugin configurations.
      // For Expo Router, typedRoutes is usually enabled via experiments.
      // New Architecture (Fabric) is a more involved setup.
      // "newArchEnabled": true, // Keep if you are actively using the New Architecture
      // "typedRoutesEnabled": true // This is usually under "experiments"
    },
  };
};
