"use client";

import React, { ReactNode } from "react";
import { useNavigationHandler } from "./useNavigationHandler";
import { NavigationContext } from "@Presentation/context";

export const NextNavigationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const navigationHandler = useNavigationHandler();

  return (
    <NavigationContext.Provider value={{ navigation: navigationHandler }}>
      {children}
    </NavigationContext.Provider>
  );
};
