import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Slot, useRouter, useSegments } from "expo-router";

import styled, { ThemeProvider, useTheme } from "styled-components/native";

import { useNavigationHandler } from "@app-mobile/src/presentation/navigation/useNavigationHandler";
import { theme, ThemeType } from "@atomic-library/index";

import { NavigationProvider } from "@Presentation/context/NavigationContext";
import { AuthProvider, useAuth } from "@Presentation/context/AuthContext";

// Main layout component
function RootLayoutNav() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
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
      router.replace({ pathname: "/(app)/(tabs)/home/home" }); // Redirect to home tab
    } else if (!isLoggedIn && !inAuthGroup) {
      console.log("Redirecting to Login...");
      router.replace({ pathname: "/(auth)/login" }); // Redirect to login
    }
  }, [isLoggedIn, segments, router]); // Re-run effect when auth state or route changes

  // Show loading indicator while checking auth
  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      <NavigationProvider navigation={useNavigationHandler()}>
        <AuthProvider>
          <RootLayoutNav />
        </AuthProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}
