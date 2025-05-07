import { ReactNode, useEffect } from "react";
import { View } from "react-native";

import { AuthContext } from "@Presentation/context";
import { useLocalStorageState } from "@Presentation/context/useLocalStorageState";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn, isLoading] = useLocalStorageState();

  console.log("AuthProvider: isLoggedIn:", isLoggedIn);
  useEffect(() => {
    console.log("AuthProvider: isLoggedIn changed:", isLoggedIn);
  }, [isLoggedIn]);

  if (isLoading) {
    return <View>Loading authentication status...</View>;
  }

  const handleLogin = () => {
    setIsLoggedIn(true).catch((err) => console.error("Login failed:", err));
  };

  const handleLogout = () => {
    setIsLoggedIn(false).catch((err) => console.error("Logout failed:", err));
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
