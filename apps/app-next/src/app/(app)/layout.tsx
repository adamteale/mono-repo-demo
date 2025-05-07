"use client";

import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { useNavigationHandler } from "@app-next/src/presentation/navigation/useNavigationHandler";
import { useAuth } from "@Presentation/context/AuthContext";
import TabBar from "../../presentation/components/Layout/TabBar";

function AuthenticatedContent({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigationHandler();

  useEffect(() => {
    if (isLoggedIn === null) return;
    if (!isLoggedIn) {
      console.log("User is not logged in, redirecting to login...");
      navigation.navigateLogin();
    }
  }, [isLoggedIn, navigation]);

  if (isLoggedIn === null) {
    return (
      <View className="flex-1 min-h-screen flex justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!isLoggedIn) {
    return null; // Render nothing while redirecting
  }

  return (
    <View className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      <View className="sticky bottom-0 ">
        <TabBar />
      </View>
    </View>
  );
}

export default function AppGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedContent>{children}</AuthenticatedContent>;
}
