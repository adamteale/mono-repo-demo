import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Linking,
  AccessibilityRole,
} from "react-native";
import { AtIcon, iconColors } from "../at-icon";
import { AtLinkProps, IconPositions, OnClickProps } from "./at-link.types";
import { buttonVariants } from "../at-button/at-button.variants";
import { linkVariant } from "./at-link.variants";

const iconLeftClasses = "mr-1";
const iconRightClasses = "ml-1";

export const AtLink = ({
  children,
  iconProps,
  iconPosition = IconPositions.RIGHT,
  href,
  onClick,
  className = "",
  textClasses = "",
  gtmData,
  label,
  linkWrapper,
  dataTestId,
  ariaCurrent,
  role,
  buttonStyleProps = {},
  tabIndex,

  ...props
}: AtLinkProps) => {
  const handleOnClick = (e: any) => {
    if (onClick) {
      onClick(e, { gtmData });
    }
    if (href) {
      Linking.openURL(href).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
  };

  const { variant, size } = buttonStyleProps;
  const buttonVariant = buttonVariants(size);

  return (
    <TouchableOpacity
      testID={dataTestId}
      onPress={handleOnClick}
      accessible={true}
      accessibilityRole={(role as AccessibilityRole) ?? "button"}
      aria-current={ariaCurrent}
      className={`${
        variant ? buttonVariant({ variant }) : linkVariant()
      } cursor-pointer ${className}`}
    >
      {children ?? (
        <View className="flex items-center flex-row">
          {iconProps && iconPosition === IconPositions.LEFT && (
            <AtIcon
              className={`${iconLeftClasses}`}
              {...iconProps}
              color={iconProps.color ?? "currentColor"}
            />
          )}
          {label && (
            <Text className={`flex items-center ${textClasses}`}>{label}</Text>
          )}
          {iconProps && iconPosition === IconPositions.RIGHT && (
            <AtIcon
              className={`${iconRightClasses}`}
              {...iconProps}
              color={iconProps.color ?? "currentColor"}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
