"use client";

import React from "react";
import { AuthProvider, useAuth } from "@Presentation/context";
import { ThemeProvider } from "styled-components/native";

import { AtButton, theme } from "@mono-repo-demo/atomic-library";
import { LoginScreen } from "@Presentation/screens/LoginScreen/LoginScreen";

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <LoginScreen />
      </AuthProvider>
    </ThemeProvider>
  );
}
