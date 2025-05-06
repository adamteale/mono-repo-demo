import { AtStepperItemProps } from "@mono-repo-demo/atomic-library";
import { ReactNode } from "react";

export interface TmStepperProps {
  steps: AtStepperItemProps[];
  children: ReactNode;
}
