"use client";

import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useRouter, usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context"; // Keep this provider

import { theme } from "@mono-repo-demo/atomic-library";
import { useAuth } from "@Presentation/context/AuthContext";
import TabBar from "../presentation/components/Layout/TabBar";
import styled from "styled-components";
import { NextNavigationProvider } from "../presentation/navigation/NextNavigationProvider";
import { AuthProvider } from "../presentation/context/AppProvider";

// Styled components...
const AppContainer = styled.div`
  /* ... */
`;
const ContentArea = styled.main`
  /* ... */
`;
const LoadingContainer = styled.div`
  /* ... */
`;

// Component that handles auth logic AND renders layout
function AuthAwareLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth(); // Consumes AuthContext
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Auth redirection logic...
    if (isLoggedIn === null) return;
    const isAuthPath = pathname === "/login";
    if (!isLoggedIn && !isAuthPath) router.replace("/login");
    else if (isLoggedIn && isAuthPath) router.replace("/");
  }, [isLoggedIn, pathname, router]);

  if (isLoggedIn === null) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#0000ff" />
      </LoadingContainer>
    );
  }

  // Don't prevent rendering login page if not logged in
  if (!isLoggedIn && pathname !== "/login") {
    return null; // Prevent rendering app pages while redirecting
  }

  // Determine if the main app layout (with TabBar) should be shown
  const showAppLayout = isLoggedIn && pathname !== "/login";

  if (showAppLayout) {
    return <>{children}</>;
    return (
      <AppContainer>
        <ContentArea>{children}</ContentArea>
        <TabBar />
      </AppContainer>
    );
  } else {
    // Render children directly for login page (or other non-app layouts)
    // This ensures LoginScreen is rendered, and ThemeProvider/SafeAreaProvider are wrapping it
    return <>{children}</>;
  }
}

// Main Providers Component
export default function Providers({ children }: { children: React.ReactNode }) {
  // const webNavigationHandler = useWebNavigationHandler(); // Create handler if needed by NavProvider

  console.log("Rendering Providers component setup");
  return (
    // Providers needed by ALL routes go here
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* Navigation and Auth might only be needed by protected routes,
            but putting AuthProvider here is common to check status early */}
        <AuthProvider>
          {/* NavigationProvider might be needed by AuthAwareLayout if it navigates */}
          <NextNavigationProvider>
            {/* AuthAwareLayout now decides layout structure */}
            <AuthAwareLayout>{children}</AuthAwareLayout>
          </NextNavigationProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
