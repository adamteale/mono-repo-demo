import React from "react";
import { TouchableOpacity, View, ActivityIndicator } from "react-native";
import { AtIcon } from "../at-icon";
import {
  AtButtonIconPosition,
  AtButtonActionType,
  AtButtonProps,
} from "./at-button.types";
import { buttonVariants } from "./at-button.variants";

export { AtButtonIconPosition, AtButtonActionType };

export const AtButton = ({
  actionType,
  actionValue,
  children,
  dataTestId = "",
  gtmData,
  icon,
  iconType,
  iconPosition = AtButtonIconPosition.LEFT,
  onClick,
  isLoading,
  className,
  disabled,
  variant,
  size,
}: Omit<AtButtonProps, "buttonType" | "form" | "target"> & {
  target?: string;
}) => {
  const hasIcon = !!icon || !!iconType;
  const buttonClasses = className
    ? className
    : buttonVariants(size, isLoading ?? false)({ variant });

  const handlePress = (e: any) => {
    console.log("Native at-button clicked");

    if (onClick) {
      onClick(e, { gtmData, actionType, actionValue });
    } else if (actionType === AtButtonActionType.OPEN_URL && actionValue) {
      // Implement your URL opening logic here using Linking API
      // Example: Linking.openURL(actionValue).catch((err) => console.error('An error occurred: ', err));
    } else {
      // Handle other action types or default behavior
    }
  };

  return (
    <TouchableOpacity
      data-testid={dataTestId}
      onPress={handlePress}
      className={buttonClasses}
      disabled={disabled || isLoading}
    >
      <View className="flex-row items-center justify-center">
        {hasIcon &&
          !isLoading &&
          iconPosition === AtButtonIconPosition.LEFT && (
            <AtIcon
              className="mr-2 text-current"
              src={icon}
              type={iconType}
              size={24}
            />
          )}

        {children}

        {hasIcon &&
          !isLoading &&
          iconPosition === AtButtonIconPosition.RIGHT && (
            <AtIcon
              className="ml-2 text-inherit"
              src={icon}
              type={iconType}
              size={24}
            />
          )}

        {isLoading && (
          <ActivityIndicator
            className={`ml-2 ${
              iconPosition === AtButtonIconPosition.LEFT ? "mr-2" : "ml-2"
            } "text-current"`}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
