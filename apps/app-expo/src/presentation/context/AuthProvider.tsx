import { AuthContext } from "@Presentation/context";
import { ReactNode, useCallback, useState } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Use the custom hook for the core state

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>();

  // Login/Logout now just call the setter returned by the hook
  const login = useCallback(() => {
    console.log("AuthProvider: Logging in...");
    setIsLoggedIn(true); // This updates state AND localStorage via the hook
    // Optionally trigger API calls here if needed
  }, [setIsLoggedIn]);

  const logout = useCallback(() => {
    setIsLoggedIn(false); // This updates state AND localStorage via the hook
    // Optionally trigger API calls here if needed
  }, [setIsLoggedIn]);

  return (
    // Provide the state from the hook and the action functions
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
