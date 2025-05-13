import React from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { AtIcon } from "@mono-repo-demo/atomic-library";

interface SearchButtonProps {
  onClick: () => void; // RN onPress doesn't have an event argument
  className?: string; // NativeWind classes
  dataTestId?: string;
  style?: StyleProp<ViewStyle>; // Allow custom styles to be passed
}

export const SearchButton = ({
  onClick,
  className = "",
  dataTestId = "",
  style,
}: SearchButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      // focus:outline-none is not applicable in RN
      className={`${className} p-2 text-white`} // Added padding for touch target
      testID={dataTestId}
      style={style} // Apply any custom styles
    >
      <AtIcon type="search" color="currentColor" />
    </TouchableOpacity>
  );
};
