import React, { type PropsWithChildren } from "react";
import { EnvironmentProvider } from "@Presentation/context";

export const NextEnvironmentProvider = ({ children }: PropsWithChildren) => {
  return <EnvironmentProvider>{children}</EnvironmentProvider>;
};
