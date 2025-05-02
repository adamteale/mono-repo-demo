import React from "react";
import { AtIcon } from "@mono-repo-demo/atomic-library";
import { AtSizeSelectorProps } from "./at-size-selector.types";
import { sizeSelector } from "./at-size-selector.variants";

export const AtSizeSelector = ({
  text,
  isSelected,
  isSoldOut,
  onClick,
  className = "",
}: AtSizeSelectorProps) => {
  return (
    <button
      type="button"
      className={`${className} ${sizeSelector({
        isSelected,
        state: isSoldOut ? "soldOut" : "available",
      })}`}
      onClick={onClick}
      data-testid="at-size-selector-button"
    >
      {text}
      {isSoldOut && (
        <Text className="absolute top-0 right-0" data-testid="notify-icon">
          <AtIcon type="notify-small" size={16} color="primary" />
        </Text>
      )}
    </button>
  );
};
