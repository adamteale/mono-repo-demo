import { View, Text } from "react-native";
import { AtStepperItemProps } from "./at-stepper-item.types";
import {
  ringClasses,
  dividerClasses,
  labelTextClasses,
  stepTextClasses,
} from "./at-stepper.variants";

export const AtStepperItem = ({
  label,
  step,
  isActive = true,
}: AtStepperItemProps) => {
  return (
    <View
      className="flex items-center flex-col gap-y-4"
      accessibilityLabel="stepper"
      aria-current={isActive ? "step" : "false"}
    >
      <View className="flex flex-col items-center gap-y-2">
        <View className={ringClasses({ isActive })}>
          <Text className={stepTextClasses({ isActive })}>{step}</Text>
        </View>
        <Text className={labelTextClasses({ isActive })}>{label}</Text>
      </View>
      <hr className={dividerClasses({ isActive })} role="divider" />
    </View>
  );
};
