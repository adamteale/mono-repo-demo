import { Pressable, PressableProps } from "react-native";
import { AtButtonVariant } from "../types";

interface AtButtonPressableContainerProps extends PressableProps {
  variant: AtButtonVariant;
  compact: boolean;
  onPress?: () => void;
}

export default function ButtonPressableContainer({
  variant = AtButtonVariant.primary,
  compact,
  disabled,
  children,
  onPress,
}: AtButtonPressableContainerProps) {
  let bgColorClass = "bg-primaryBlue"; // Default
  let borderColorClass = "border-transparent";
  let borderWidthClass = "";
  let borderRadiusClass = "";

  switch (variant) {
    case AtButtonVariant.primary:
      bgColorClass = "bg-buttonPrimaryBg";
      borderColorClass = "border-buttonPrimaryBorder";
      borderWidthClass = "border-button-primary";
      break;
    case AtButtonVariant.secondary:
      bgColorClass = "bg-buttonSecondaryBg";
      borderColorClass = "border-buttonSecondaryBorder";
      break;
    case AtButtonVariant.cta:
      bgColorClass = "bg-buttonCtaBg";
      borderColorClass = "border-buttonCtaBorder";
      borderRadiusClass = "rounded-button-cta";
      break;
  }

  const widthClass = compact ? "w-auto" : "w-full";
  const opacityClass = disabled ? "opacity-60" : "opacity-100";

  return (
    <Pressable
      className={`
        ${widthClass}
        ${opacityClass}
        p-5
        px-10
        items-center
        justify-center
        ${bgColorClass}
        border-2
        ${borderColorClass}
        ${borderWidthClass}
        ${borderRadiusClass}
      `}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </Pressable>
  );
}
