"use client";

import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useRouter, usePathname } from "next/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context"; // Keep this provider

import { useAuth } from "@Presentation/context/AuthContext";
import TabBar from "../presentation/components/Layout/TabBar";
import { NextNavigationProvider } from "../presentation/navigation/NextNavigationProvider";
import { AuthProvider } from "../presentation/context/AppProvider";

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
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
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
      <View>
        <View>{children}</View>
        <TabBar />
      </View>
    );
  } else {
    // Render children directly for login page (or other non-app layouts)
    // This ensures LoginScreen is rendered, and SafeAreaProvider are wrapping it
    return <>{children}</>;
  }
}

// Main Providers Component
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NextNavigationProvider>
          <AuthAwareLayout>{children}</AuthAwareLayout>
        </NextNavigationProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
