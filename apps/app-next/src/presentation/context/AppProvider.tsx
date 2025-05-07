import { ReactNode, useCallback } from "react";

import { AuthContext } from "@Presentation/context";
import { useLocalStorageState } from "@Presentation/context/useLocalStorageState";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorageState();

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  const logout = useCallback(() => {
    console.log("Logging out...");
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
