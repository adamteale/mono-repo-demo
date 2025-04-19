import { Stack } from "expo-router";
import React from "react";

// Simple layout for the authentication flow (e.g., consistent header)
export default function AuthLayout() {
  return <Stack screenOptions={{ headerShown: false }} />; // Example: hide header for auth screens
}
