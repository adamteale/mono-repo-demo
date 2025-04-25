import { authRepository } from "../../../data";

import { AsyncUseCaseWithParams } from "../../asyncUseCase";

export const updateAuthStateUseCase: AsyncUseCaseWithParams<boolean, void> = {
  async execute(request: boolean): Promise<void> {
    return await authRepository.setIsLoggedIn(request);
  },
};
