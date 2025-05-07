import { StorageKey } from "../../storage/types";

export interface AuthLocalDataSource {
  getIsLoggedIn(): Promise<boolean | null>;
  setIsLoggedIn(isLoggedIn: boolean): Promise<void>;
}

export const authLocalDataSourceImpl: AuthLocalDataSource = {
  getIsLoggedIn: async () => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(StorageKey.IS_LOGGED_IN);
      console.log("Stored value from localStorage:", storedValue);
      if (storedValue) {
        try {
          const parsed = JSON.parse(storedValue) as boolean;
          return parsed;
        } catch (e) {
          console.error("Failed to parse auth state from localStorage", e);
          return null;
        }
      }
    }
    return null;
  },
  setIsLoggedIn: async (isLoggedIn: boolean) => {
    localStorage.setItem(StorageKey.IS_LOGGED_IN, JSON.stringify(isLoggedIn));
    console.log("Setting isLoggedIn to:", isLoggedIn);
  },
};
