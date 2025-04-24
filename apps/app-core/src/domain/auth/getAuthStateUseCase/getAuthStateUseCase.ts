import { authRepository } from "@app-core/src/data/auth/authRepository";
import { AsyncUseCase } from "../../asyncUseCase";

export const getAuthStateUseCase: AsyncUseCase<boolean | null> = {
  async execute(): Promise<boolean | null> {
    return await authRepository.getIsLoggedIn();
  },
};
