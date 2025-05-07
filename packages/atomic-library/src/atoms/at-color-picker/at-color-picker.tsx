import { View } from "react-native";
import React from "react";
import { AtColorPickerProps } from "./at-color-picker.types";

import { buttonClasses, ringClasses } from "./at-color-picker.variants";
import { colorMappingClasses } from "./color-mapping";

export const AtColorPicker = ({
  color,
  isSelected = false,
  onClick,
  title,
  isSoldOut = false,
  className = "",
}: AtColorPickerProps) => {
  return (
    <button
      type="button"
      className={buttonClasses({ isSelected, isSoldOut })}
      onClick={onClick}
      title={title}
      data-testid="at-color-picker"
      aria-pressed={isSelected}
    >
      <View
        className={`${colorMappingClasses[color]} ${ringClasses({
          isSoldOut,
        })} ${className}`}
        data-testid="at-color-picker-ring"
      />
    </button>
  );
};
