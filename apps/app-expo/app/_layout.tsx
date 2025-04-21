import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Slot, useSegments } from "expo-router";

import { ThemeProvider } from "styled-components/native";

import { theme } from "@atomic-library/index";
import { useNavigationHandler } from "@app-expo/src/presentation/navigation/useNavigationHandler";
import { ExpoNavigationProvider } from "@app-expo/src/presentation/navigation/ExpoNavigationProvider";

import { AuthProvider, useAuth } from "@Presentation/context/AuthContext";

// Main layout component
function RootLayoutNav() {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigationHandler();
  const segments = useSegments(); // Gets the current route segments
  console.log;
  useEffect(() => {
    if (isLoggedIn === null) {
      return; // Still loading auth status
    }

    const inAuthGroup = segments[0] === "(auth)";
    const inAppGroup = segments[0] === "(app)";

    console.log("Auth State Changed:", isLoggedIn, "Segments:", segments);

    if (isLoggedIn && !inAppGroup) {
      console.log("Redirecting to App...");
      navigation.navigateHome();
    } else if (!isLoggedIn && !inAuthGroup) {
      console.log("Redirecting to Login...");
      navigation.navigateLogin();
    }
  }, [isLoggedIn, segments, navigation]);

  if (isLoggedIn === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Slot renders the child route based on the current URL path
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
