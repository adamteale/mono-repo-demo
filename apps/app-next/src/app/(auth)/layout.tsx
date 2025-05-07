"use client";

import React from "react";
import { View } from "react-native";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <View className="flex flex-col min-h-screen">{children}</View>;
}

export default AuthLayout;
