import { Text, TextProps } from "react-native";
import { AtButtonVariant } from "../types";

interface ButtonTitleProps extends TextProps {
  variant: AtButtonVariant;
  text: string;
}

export default function ButtonTitle({ text, variant }: ButtonTitleProps) {
  let textColorClass = "text-white";

  switch (variant) {
    case AtButtonVariant.primary:
      textColorClass = "text-white";
      break;
    case AtButtonVariant.secondary:
      textColorClass = "text-primaryBlue";
      break;
    case AtButtonVariant.cta:
      textColorClass = "text-white";
      break;
  }

  return (
    <Text className={`text-button font-bold text-center ${textColorClass}`}>
      {text}
    </Text>
  );
}
