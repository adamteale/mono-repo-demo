import { View } from "react-native";
import { AtDividerProps } from "./at-divider.types";

export const AtDivider = ({
  className = "",
  ariaHidden = true,
}: AtDividerProps) => {
  return (
    <View
      className={`border-tertiary ${className}`}
      role="separator"
      aria-hidden={ariaHidden}
    />
  );
};
