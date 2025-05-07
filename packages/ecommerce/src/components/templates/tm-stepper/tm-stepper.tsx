import React from "react";
import { View } from "react-native";

import { MlCheckoutStepper } from "../../molecules";
import { TmStepperProps } from "./tm-stepper.types";

export const TmStepper = ({ steps, children }: TmStepperProps) => {
  return (
    <View
      className="container py-4 md:py-10 xl:py-12 bg-surface-primary min-h-screen flex justify-center"
      data-testid="stepper-container"
    >
      <View className="w-full max-w-250">
        <View className="xl:mb-12 md:mb-10 mb-0">
          <MlCheckoutStepper steps={steps} />
        </View>
        {children}
      </View>
    </View>
  );
};
