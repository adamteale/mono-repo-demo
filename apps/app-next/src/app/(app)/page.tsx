import React from "react";
import { View } from "react-native";

// This should never show due to the redirects() in next.config.ts
export default function AppRootPage() {
  return (
    <View>
      <h1>Welcome to the App!</h1>
    </View>
  );
}
