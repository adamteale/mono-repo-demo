import React, { createContext, ReactNode } from "react";
import { NavigationService } from "../navigation/hooks/types";

export interface NavigationContextType {
  navigation: NavigationService;
}

export const NavigationContext = createContext<
  NavigationContextType | undefined
>(undefined);

export const useNavigationContext = (): NavigationContextType => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationProvider"
    );
  }
  return context;
};
