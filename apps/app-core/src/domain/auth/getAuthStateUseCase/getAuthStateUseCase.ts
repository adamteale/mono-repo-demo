import { authRepository } from "../../../data";
import { AsyncUseCase } from "../../asyncUseCase";

export const getAuthStateUseCase: AsyncUseCase<boolean | null> = {
  async execute(): Promise<boolean | null> {
    return await authRepository.getIsLoggedIn();
  },
};
