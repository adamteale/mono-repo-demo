"use client";

import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}

export default AuthLayout;
