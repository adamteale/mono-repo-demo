import React from "react";
import { Text, View } from "react-native";

import { AtButton, AtDivider, AtIcon } from "@mono-repo-demo/atomic-library";
import { MlCardCheckoutProps } from "./ml-card-checkout.types";

export const MlCardCheckout = ({
  button,
  className,
  icon,
  bottomText,
  body,
  subtitle,
  title,
}: MlCardCheckoutProps) => {
  return (
    <View
      className={`w-full text-primary p-6 md:p-8 ${className} bg-surface-primary rounded-lg border border-solid border-secondary flex flex-col gap-6 md:gap-8 justify-center items-center`}
    >
      <View className="w-full flex flex-col items-center gap-3 md:gap-4">
        {icon && <AtIcon type={icon} color="primary" size={48} />}

        {title && (
          <Text className="font-bold md:text-2xl text-xl text-primary">
            {title}
          </Text>
        )}

        <View className="w-full md:px-8">
          <AtDivider className="border-tertiary" />
        </View>

        {subtitle && (
          <Text className="font-medium sm:text-lg text-base text-primary">
            {subtitle}
          </Text>
        )}
      </View>

      {body && (
        <View className="font-normal text-sm sm:text-base text-center text-primary">
          {body}
        </View>
      )}

      <View>{button && <AtButton {...button} />}</View>

      {bottomText && <View>{bottomText}</View>}
    </View>
  );
};
