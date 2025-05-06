import { AtStepperItemProps } from "@mono-repo-demo/atomic-library";

export interface MlCheckoutStepperProps {
  /** An array of `AtStepperItemProps` objects. Each object represents a step in the checkout process, containing information such as the label, step number, and whether the step is active. */
  steps: AtStepperItemProps[];
}
