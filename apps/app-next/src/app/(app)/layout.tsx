"use client";

import React, { useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useRouter } from "next/navigation";

import { NextNavigationProvider } from "@app-next/src/presentation/navigation/NextNavigationProvider";
import { useAuth } from "@Presentation/context/AuthContext";

function AuthenticatedLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Auth Check inside (app) layout:", isLoggedIn);
    if (isLoggedIn === null) {
      return;
    }
    if (!isLoggedIn) {
      console.log("Redirecting to Login from (app) layout...");
      router.replace("/login");
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" /> {/* Example color */}
      </View>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  console.log("User logged in, rendering app children.");
  return <>{children}</>;
}

export default function AppGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextNavigationProvider>
      <AuthenticatedLayoutContent>{children}</AuthenticatedLayoutContent>
    </NextNavigationProvider>
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
