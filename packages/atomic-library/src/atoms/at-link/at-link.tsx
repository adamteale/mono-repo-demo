import React from "react";
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TargetedEvent,
} from "react-native";
import { Target } from "../../types"; // Assuming you have a RN version of this
import { AtIcon } from "../at-icon"; // Assuming this is a RN compatible component
import { AtLinkProps, IconPositions } from "./at-link.types";
import { AtButtonVariants, AtButtonSize } from "../at-button/at-button.types";
import { buttonVariants } from "../at-button/at-button.variants"; //Adapt this to RN with Tailwind
import { linkVariant } from "./at-link.variants"; //Adapt this to RN with Tailwind
import { AtButtonProps } from "../at-button";

interface AtLinkPropsModified
  extends Omit<
    AtLinkProps,
    "style" | "tabIndex" | "onBlur" | "onFocus" | "aria-busy"
  > {
  style?: StyleProp<ViewStyle>;
  buttonStyleProps?: Pick<AtButtonProps, "variant" | "size">;
  disabled?: boolean; // Add disabled property
}

export const AtLink: React.FC<AtLinkPropsModified> = ({
  children,
  iconProps,
  iconPosition = IconPositions.RIGHT,
  target,
  href,
  onClick,
  className = "",
  textClasses = "",
  gtmData,
  label,
  linkWrapper,
  style,
  dataTestId,
  ariaCurrent,
  role,
  buttonStyleProps,
  ...props
}) => {
  const iconExtraClass =
    iconPosition === IconPositions.LEFT
      ? `order-first self-center ${label ? "mr-1" : ""}`
      : `${label ? "self-center ml-1" : ""}`;

  const handleOnClick = () => {
    onClick?.(undefined, { gtmData });
    if (href) {
      Linking.openURL(href).catch((err) =>
        console.error("An error occurred: ", err)
      );
    }
  };

  const { variant, size } = buttonStyleProps || {}; // Ensure buttonStyleProps is not undefined

  //This is the only thing that has been added for this fix
  const buttonVariantSize: AtButtonSize | undefined =
    size === undefined ? undefined : size;

  const buttonVariantStyle = variant
    ? buttonVariants(buttonVariantSize)({ variant })
    : ""; // Pass an empty size string when size is undefined
  const linkVariantStyle = linkVariant(); // Get the linkVariant styles

  const isExternalLink = href?.startsWith("http");

  return (
    <TouchableOpacity
      testID={dataTestId}
      onPress={handleOnClick}
      accessible={true} // Make it accessible
      accessibilityRole={role === "button" ? "button" : "link"} // Define the role
      accessibilityState={{ disabled: props.disabled }} // Handle disabled state
      style={style}
      className={className}
      {...Object.fromEntries(
        Object.entries(props).filter(([key]) => !key.startsWith("aria-"))
      )} // Filter out unsupported ARIA attributes
    >
      {children ? (
        children
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {label && <Text className={textClasses}>{label}</Text>}
          {iconProps && (
            <AtIcon
              className={iconExtraClass}
              {...iconProps}
              color="currentColor"
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
