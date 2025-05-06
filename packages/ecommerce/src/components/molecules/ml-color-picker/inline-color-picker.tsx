import { useState } from "react";
import { View } from "react-native";

import { InlineColorPickerProps } from "./ml-color-picker.types";
import { AtColorPicker, AtIcon, AtLink } from "@mono-repo-demo/atomic-library";

export const InlineColorPicker = ({
  options,
  maxInlineItems = 4,
  onClick,
  selected,
  iconLinkProps,
}: InlineColorPickerProps) => {
  const [isLineExtended, setIsLineExtended] = useState(false);

  const buttonIconType = !isLineExtended ? "plus" : "less";

  const handleClickOnMinusButton = () => {
    setIsLineExtended(!isLineExtended);
  };

  return (
    <View className="flex flex-wrap" data-testid="inline-color-picker">
      {options.map(({ colorKey, colorName }, index) => {
        if (!colorName || !colorKey) return null;
        if (index <= maxInlineItems - 1 || isLineExtended) {
          return (
            <View key={`${colorName}-${index}`} className="mr-2">
              <AtColorPicker
                color={colorKey}
                title={colorName}
                isSelected={selected === colorKey}
                onClick={() => onClick?.(index)}
              />
            </View>
          );
        }
      })}

      {options.length > maxInlineItems && (
        <>
          {!iconLinkProps && (
            <button
              onClick={handleClickOnMinusButton}
              title="inline-button-icon"
              aria-label={`Show ${isLineExtended ? "less" : "more"} colors`}
            >
              <AtIcon type={buttonIconType} color="primary" />
            </button>
          )}
          {iconLinkProps && (
            <AtLink {...iconLinkProps} aria-label="Go to product page">
              <AtIcon type="plus" color="primary" />
            </AtLink>
          )}
        </>
      )}
    </View>
  );
};
