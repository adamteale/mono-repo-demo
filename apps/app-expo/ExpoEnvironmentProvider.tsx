import React, { type PropsWithChildren } from "react";
import { EnvironmentProvider } from "@Presentation/context";

export const ExpoEnvironmentProvider = ({ children }: PropsWithChildren) => {
  return <EnvironmentProvider>{children}</EnvironmentProvider>;
};
