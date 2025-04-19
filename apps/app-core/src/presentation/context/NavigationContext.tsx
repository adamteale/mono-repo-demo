import React, { createContext, ReactNode } from "react";
import { NavigationService } from "../navigation/hooks/types";

interface NavigationContextType {
  navigation: NavigationService;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider = ({
  children,
  navigation,
}: {
  children: ReactNode;
  navigation: NavigationService;
}) => {
  return (
    <NavigationContext.Provider value={{ navigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = (): NavigationContextType => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationProvider"
    );
  }
  return context;
};
