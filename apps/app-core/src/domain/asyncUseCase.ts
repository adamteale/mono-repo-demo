export interface AsyncUseCaseWithParams<Params, Result> {
  execute(params: Params): Promise<Result>;
}

export interface AsyncUseCase<Result> {
  execute(): Promise<Result>;
}
