import { StorageKey } from "../../storage/types";

export interface AuthLocalDataSource {
  getIsLoggedIn(): Promise<boolean | null>;
  setIsLoggedIn(isLoggedIn: boolean): Promise<void>;
}

export const authLocalDataSourceImpl: AuthLocalDataSource = {
  getIsLoggedIn: async () => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(StorageKey.IS_LOGGED_IN);
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
    console.log("Setting isLoggedIn to:", isLoggedIn);
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};
