import { authLocalDataSourceImpl } from "./local/authLocalDataSource";

export interface AuthDataSource {
  getIsLoggedIn(): Promise<boolean | null>;
  setIsLoggedIn(isLoggedIn: boolean): Promise<void>;
}

export const authRepository: AuthDataSource = {
  getIsLoggedIn: async () => {
    return await authLocalDataSourceImpl.getIsLoggedIn();
  },
  setIsLoggedIn: async (isLoggedIn: boolean) => {
    await authLocalDataSourceImpl.setIsLoggedIn(isLoggedIn);
  },
};
