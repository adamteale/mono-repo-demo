import { AtStepperItem } from "@mono-repo-demo/atomic-library";
import { MlCheckoutStepperProps } from "./ml-checkout-stepper.types";

export const MlCheckoutStepper = ({ steps }: MlCheckoutStepperProps) => {
  return (
    <ol className="flex w-full flex-row pt-6 pb-8 md:p-0">
      {steps.map((item, idx) => (
        <li className="w-full" key={idx}>
          <AtStepperItem
            step={item.step}
            label={item.label}
            isActive={item.isActive}
          />
        </li>
      ))}
    </ol>
  );
};
