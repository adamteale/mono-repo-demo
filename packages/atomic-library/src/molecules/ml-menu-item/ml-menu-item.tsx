import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AtLink, IconType } from "../../atoms"; // Adjust path if needed
import { AtIcon } from "../../atoms/at-icon/at-icon"; // Adjust path if needed
import { MlMenuItemProps } from "./ml-menu-item.types"; // Adjust path if needed
import { mlMenuItemVariants } from "./ml-menu-item.variants"; // Adjust path if needed

const DATA_TEST_ID = "ml-menu-item";
const ICON_DATA_TEST_ID = "ml-menu-item-icon";

export const MlMenuItem = ({
  className = "",
  dataTestId = DATA_TEST_ID,
  isLink = true,
  label,
  linkProps,
  showIcon = false,
  size = "medium",
  onClick,
  isOpen = false,
  role,
  ariaControls,
  labelClassName = "font-normal active:font-bold",
}: MlMenuItemProps) => {
  // Determine the wrapper component based on props
  const MenuItemComponent =
    isLink && linkProps?.href ? AtLink : onClick ? TouchableOpacity : View;

  // Determine icon type
  const iconType: IconType = isOpen ? "angle-up" : "angle-down";

  // Accessibility props
  const ariaProps = useMemo(() => {
    return showIcon && MenuItemComponent !== View // Use View instead of "span"
      ? {
          accessibilityState: { expanded: isOpen }, // RN uses accessibilityState
          accessibilityRole: role || "button", // If there's an onClick, it's a button
          accessible: true, // Make sure it's accessible
        }
      : {};
  }, [showIcon, isOpen, role]);

  // Click handler
  const handleOnClick = () => {
    if (onClick) onClick(!isOpen);
  };

  return (
    <MenuItemComponent
      {...linkProps} // Pass linkProps to AtLink
      onPress={onClick ? handleOnClick : undefined} // Use onPress for TouchableOpacity
      className={`
        ${mlMenuItemVariants({
          variant: size,
        })}
        ${
          onClick ? "cursor-pointer" : ""
        } // cursor-pointer is web-specific, handle in AtLink if needed
        ${className}
      `}
      testID={dataTestId}
      accessibilityLabel={dataTestId} // Replace data-testid with accessibilityLabel
      {...ariaProps}
    >
      <Text className={labelClassName}>{label}</Text>
      {showIcon && (
        <AtIcon
          dataTestId={ICON_DATA_TEST_ID}
          // accessibilityLabel={ICON_DATA_TEST_ID}
          color={isOpen ? "secondary" : "primary"}
          type={iconType}
          className="transition-all"
        />
      )}
    </MenuItemComponent>
  );
};
