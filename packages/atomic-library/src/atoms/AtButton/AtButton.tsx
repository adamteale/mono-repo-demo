import React from "react";

import { AtButtonProps, AtButtonVariant } from "./types";

import ButtonTitle from "./components/ButtonTitle";
import ButtonPressableContainer from "./components/ButtonPressableContainer";

export const AtButton: React.FC<AtButtonProps> = ({
  compact = false,
  disabled,
  onAction,
  style,
  title,
  variant = AtButtonVariant.primary,
  ...rest
}) => {
  return (
    <ButtonPressableContainer
      onPress={onAction}
      variant={variant}
      compact={compact}
      disabled={disabled}
      style={style}
      {...rest}
    >
      <ButtonTitle variant={variant} text={title} />
    </ButtonPressableContainer>
  );
};
