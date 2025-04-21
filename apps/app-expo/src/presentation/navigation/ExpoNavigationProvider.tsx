import React, { ReactNode } from "react";

import { NavigationContext } from "@Presentation/context";
import { useNavigationHandler } from "./useNavigationHandler";

export const ExpoNavigationProvider = ({
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
