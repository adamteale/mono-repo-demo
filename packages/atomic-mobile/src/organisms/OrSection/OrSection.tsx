import { OrSectionProps } from "@mono-repo-demo/atomic-core";
import React from "react";
import { View } from "react-native";

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
