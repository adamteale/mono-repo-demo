import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Slot, useSegments } from "expo-router";
import { ThemeProvider } from "styled-components/native";

import { theme } from "@atomic-library/index";

import { useAuth } from "@Presentation/context/AuthContext";
import { useNavigationHandler } from "@app-expo/src/presentation/navigation/useNavigationHandler";
import { ExpoNavigationProvider } from "@app-expo/src/presentation/navigation/ExpoNavigationProvider";
import { AuthProvider } from "@app-expo/src/presentation/context/AuthProvider";
import { useRootNavigationState } from "expo-router";

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

  // Check readiness primarily for the effect's *action*
  const isNavigationReady = !!navigationState?.key;

  useEffect(() => {
    // --- Effect Guard ---
    // Still check if navigation is ready *before* attempting redirects
    if (!isNavigationReady) {
      console.log(
        "Effect: Router not ready yet (no key), skipping navigation action."
      );
      return;
    }
    // --- Redirect Logic (only if nav is ready) ---
    if (isLoggedIn === null) {
      console.log("Effect: Auth state null, skipping redirect.");
      return;
    }
    const inAuthGroup = segments[0] === "(auth)";
    const inAppGroup = segments[0] === "(app)";
    console.log(
      "Effect: Auth State:",
      isLoggedIn,
      "Segments:",
      segments,
      "NavReady:",
      isNavigationReady
    );

    if (isLoggedIn && !inAppGroup) {
      console.log("Effect: Redirecting to App...");
      navigation.navigateHome();
    } else if (!isLoggedIn && !inAuthGroup) {
      console.log("Effect: Redirecting to Login...");
      navigation.navigateLogin();
    } else {
      console.log("Effect: No redirect needed.");
    }
  }, [isLoggedIn, segments, navigation, isNavigationReady]); // Dependencies are important

  // --- Render Guard ---
  // ONLY wait for auth state to be determined (not null) before rendering Slot
  if (isLoggedIn === null) {
    console.log("Render: Auth loading...");
    return loader;
  }

  // If auth state is resolved (true or false), render the Slot.
  // The useEffect above will handle the redirect IF necessary AND if nav is ready.
  console.log("Render: Auth resolved, rendering Slot. isLoggedIn:", isLoggedIn);
  return <Slot />;
}

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <ExpoNavigationProvider>
        <AuthProvider>
          <RootLayoutNav />
        </AuthProvider>
      </ExpoNavigationProvider>
    </ThemeProvider>
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
