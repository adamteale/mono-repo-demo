import React, {
  createContext,
  useContext,
  type PropsWithChildren,
} from "react";

export type EnvironmentContextType = {};

export type EnvironmentProviderProps =
  PropsWithChildren<EnvironmentContextType>;

export const EnvironmentContext = createContext<
  EnvironmentContextType | undefined
>(undefined);

export const EnvironmentProvider = ({ children }: EnvironmentProviderProps) => {
  return (
    <EnvironmentContext.Provider value={{}}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export const useEnvironment = (): EnvironmentContextType => {
  const context = useContext(EnvironmentContext);

  if (context === undefined) {
    throw new Error("useEnvironment must be used within a EnvironmentProvider");
  }

  return context;
};
