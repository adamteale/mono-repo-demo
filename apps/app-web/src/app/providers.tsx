"use client";

import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@mono-repo-demo/atomic-library";

import { AuthProvider } from "@Presentation/context/AuthContext";
import { NextNavigationProvider } from "../presentation/navigation/NextNavigationProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  console.log("Rendering Providers component");
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NextNavigationProvider>
          <AuthProvider>{children}</AuthProvider>
        </NextNavigationProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
