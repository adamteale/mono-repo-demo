import React from "react";
import { View, Text } from "react-native";
import { AtTagProps } from "./at-tag.types";

export const AtTag: React.FC<AtTagProps> = ({
  text,
  textClassName = "",
  className = "",
}) => {
  return (
    <View
      className={`
        flex justify-center items-center
        text-center rounded max-w-fit
        px-2 py-1
        md:px-3 md:py-2
        bg-surface-tertiary
        ${className}`}
      testID="tag-container"
    >
      <Text
        className={`
        text-cta-content-primary
        font-normal
        text-sm   
        leading-4 tracking-[0.125]
        md:text-base
        ${textClassName}`}
        testID="tag-label"
      >
        {text}
      </Text>
    </View>
  );
};
