"use client";

import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <View className="flex flex-col min-h-screen">{children}</View>;
}

export default AuthLayout;
