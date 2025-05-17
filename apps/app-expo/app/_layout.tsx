import "@mono-repo-demo/tailwind-config/global.css";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Slot, useSegments, useRootNavigationState } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useAuth } from "@Presentation/context/AuthContext";
import { useNavigationHandler } from "@app-expo/src/presentation/navigation/useNavigationHandler";
import { ExpoNavigationProvider } from "@app-expo/src/presentation/navigation/ExpoNavigationProvider";
import { AuthProvider } from "@app-expo/src/presentation/context/AuthProvider";
import { ExpoEnvironmentProvider } from "@app-expo/ExpoEnvironmentProvider";
import { setupNativeWindInterop } from "@atomic-library/nativewind-setup";

setupNativeWindInterop();

function RootLayoutNav() {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigationHandler();
  const segments = useSegments();
  const navigationState = useRootNavigationState();

  const loader = (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={"#182958"} />
    </View>
  );

  const isNavigationReady = !!navigationState?.key;
  useEffect(() => {
    if (isLoggedIn === null) {
      return;
    }
    const inAuthGroup = segments[0] === "(auth)";
    const inRoot =
      navigation.currentRoute === "/" || navigation.currentRoute === "";
    const inAppGroup = segments[0] === "(app)";

    if (isLoggedIn && (inAuthGroup || inRoot)) {
      navigation.navigateToHome();
    } else if (!isLoggedIn && inAppGroup) {
      navigation.navigateToLogin();
    }
  }, [isLoggedIn, segments, isNavigationReady]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <ExpoNavigationProvider>
      <AuthProvider>
        <SafeAreaProvider>
          <ExpoEnvironmentProvider>
            <RootLayoutNav />
          </ExpoEnvironmentProvider>
        </SafeAreaProvider>
      </AuthProvider>
    </ExpoNavigationProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
