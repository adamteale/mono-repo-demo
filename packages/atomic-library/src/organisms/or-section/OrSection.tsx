import React from "react";
import { View } from "react-native";
import { OrSectionProps } from "./types";

export const OrSection = ({
  action,
  children,
  innerStyle,
  testID,
  title,
  headerPaddingHorizontal,
}: OrSectionProps) => {
  return (
    <View testID={testID}>
      <View>{children}</View>
    </View>
  );
};
