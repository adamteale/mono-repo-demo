import { AuthContext } from "@Presentation/context";
import { ReactNode, useCallback, useState } from "react";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai/react";

const authStateAtom = atomWithStorage("authState", false);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Use the custom hook for the core state

  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useAtom(authStateAtom);

  // Login/Logout now just call the setter returned by the hook
  const login = useCallback(() => {
    console.log("AuthProvider: Logging in...");
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  const logout = useCallback(() => {
    console.log("AuthProvider: Logging out...");
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  return (
    // Provide the state from the hook and the action functions
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
