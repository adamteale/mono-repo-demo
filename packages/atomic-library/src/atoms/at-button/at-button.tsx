import React from "react";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import { AtIcon } from "../at-icon"; // Assuming a NativeWind-compatible AtIcon
import {
  AtButtonIconPosition,
  AtButtonActionType,
  AtButtonProps,
  AtButtonVariants,
  AtButtonSize,
} from "./at-button.types";

export { AtButtonIconPosition, AtButtonActionType };

const buttonVariants = (size: AtButtonProps["size"], isLoading: boolean) => {
  const base =
    "flex-row items-center justify-center rounded-md font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";
  const disabledStyles = "opacity-50 cursor-not-allowed";
  const loadingStyles = "cursor-wait";

  const sizeStyles = () => {
    switch (size) {
      case "small":
        return "px-3 py-1 text-sm";
      case "medium":
        return "px-4 py-2 text-base";
      case "large":
        return "px-5 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };

  const variantStyles = (variant: AtButtonProps["variant"]) => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white";
      case "secondary":
        return "bg-secondary text-primary border border-primary";
      case "tertiary":
        return "bg-transparent text-primary underline";
      default:
        return "bg-primary text-white";
    }
  };

  return ({ variant }: { variant: AtButtonProps["variant"] }) =>
    `${base} ${sizeStyles()} ${variantStyles(variant)} ${
      isLoading ? loadingStyles : ""
    } ${disabledStyles}`;
};

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
  className = "",
  disabled,
  variant,
  size,
}: // React Native doesn't directly support 'form' or 'buttonType' like web
Omit<AtButtonProps, "buttonType" | "form" | "target"> & {
  target?: string;
}) => {
  const hasIcon = !!icon || !!iconType;
  const buttonClasses = buttonVariants(size, isLoading ?? false)({ variant });

  const handlePress = (e: any) => {
    if (onClick) {
      onClick(e, { gtmData, actionType, actionValue });
    } else if (actionType === AtButtonActionType.OPEN_URL && actionValue) {
      // Implement your URL opening logic here using Linking API
      // Example: Linking.openURL(actionValue).catch((err) => console.error('An error occurred: ', err));
      console.warn(
        "OPEN_URL actionType is not directly handled. Implement Linking.openURL."
      );
    } else {
      // Handle other action types or default behavior
      console.warn(`Unhandled actionType: ${actionType}`);
    }
  };

  return (
    <TouchableOpacity
      data-testid={dataTestId}
      onPress={handlePress}
      className={`${buttonClasses} ${className}`}
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

        <Text className={"text-current"}>{children}</Text>

        {hasIcon &&
          !isLoading &&
          iconPosition === AtButtonIconPosition.RIGHT && (
            <AtIcon
              className="ml-2 text-current"
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
