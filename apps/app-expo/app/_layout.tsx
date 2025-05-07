import "../global.css";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Slot, useSegments, useRootNavigationState } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useAuth } from "@Presentation/context/AuthContext";
import { useNavigationHandler } from "@app-expo/src/presentation/navigation/useNavigationHandler";
import { ExpoNavigationProvider } from "@app-expo/src/presentation/navigation/ExpoNavigationProvider";
import { AuthProvider } from "@app-expo/src/presentation/context/AuthProvider";
import { ExpoEnvironmentProvider } from "@app-expo/ExpoEnvironmentProvider";

function RootLayoutNav() {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigationHandler();
  const segments = useSegments();
  const navigationState = useRootNavigationState();

  const loader = (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
    </View>
  );

  const isNavigationReady = !!navigationState?.key;

  const onNavigateToHome = () => {
    navigation.navigateHome();
  };
  const onNavigateToLogin = () => {
    navigation.navigateLogin();
  };

  useEffect(() => {
    if (!isNavigationReady) {
      return;
    }

    if (isLoggedIn === null) {
      return;
    }
    const inAuthGroup = segments[0] === "(auth)";
    const inAppGroup = segments[0] === "(app)";

    if (isLoggedIn && !inAppGroup) {
      onNavigateToHome();
    } else if (!isLoggedIn && !inAuthGroup) {
      onNavigateToLogin();
    }
  }, [isLoggedIn, segments, navigation, isNavigationReady]);

  // --- Render Guard ---
  // ONLY wait for auth state to be determined (not null) before rendering Slot
  if (isLoggedIn === null) {
    return loader;
  }

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
