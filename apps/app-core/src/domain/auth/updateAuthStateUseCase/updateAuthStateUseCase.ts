import { authRepository } from "@app-core/src/data/auth/authRepository";
import { AsyncUseCaseWithParams } from "../../asyncUseCase";

export const updateAuthStateUseCase: AsyncUseCaseWithParams<boolean, void> = {
  async execute(request: boolean): Promise<void> {
    return await authRepository.setIsLoggedIn(request);
  },
};
