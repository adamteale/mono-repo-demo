import React from "react";
import { Linking, Pressable, View, Text } from "react-native";
import { AtButton, AtButtonVariant, AtImage } from "../../atoms";

import type { MlBannerProps } from "./types";

export function MlBanner({
  banner,
  containerWidth,
  ctaText,
  deeplink,
  description,
  onPress = () => {},
  testID = "MlBanner",
  title,
}: MlBannerProps) {
  const handlePress = () => {
    if (deeplink) {
      Linking.openURL(deeplink).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
    onPress();
  };

  // Calculate height based on container width
  const validContainerWidth =
    typeof containerWidth === "number" && !isNaN(containerWidth)
      ? containerWidth
      : 0;
  const calculatedHeight = Math.floor(validContainerWidth / 2);
  const finalImageHeight = Math.min(calculatedHeight, 480);

  // Define the style for the AtImage component itself
  const imageStyle = {
    height: finalImageHeight,
    width: validContainerWidth,
    maxWidth: 960,
    maxHeight: 480,
  };

  // Define the style for the image container View
  const imageContainerStyle = {
    height: finalImageHeight,
    maxHeight: 480,
    maxWidth: 960,
  };

  return (
    <Pressable
      accessibilityRole="button"
      onPress={handlePress}
      testID={testID}
      className="
        flex flex-col w-full max-w-[1920px] self-center {/* Base styles */}
        lg:flex-row                                     {/* Switch to row on large screens */}
      "
      style={{ backgroundColor: "red" }}
    >
      {/* Image Wrapper View */}
      <View
        className="
          order-0 overflow-hidden           {/* Base styles */}
          lg:order-1 lg:w-1/2             {/* Responsive styles */}
          flex items-center justify-center {/* Centering styles */}
        "
        style={imageContainerStyle}
      >
        {/* The Actual Image Component */}
        <AtImage
          source={banner?.source}
          style={imageStyle}
          alt={banner?.alt || title || "Banner image"}
          resizeMode="contain"
          testID={`${testID}.imageComponent`}
        />
      </View>

      {/* Detail Container View */}
      <View
        className="
        w-full flex flex-col justify-center items-start {/* Base styles */}
        p-5 gap-3 bg-backgroundSecondary text-textPrimary min-h-[220px] {/* Padding, gap, color, min-height */}
        lg:w-1/2 lg:self-stretch lg:order-0                 {/* Responsive styles + stretch */}
      "
      >
        {title && (
          <Text className="text-h3 font-bold text-textPrimary">{title}</Text>
        )}
        {description && (
          <Text className="text-body text-textPrimary">{description}</Text>
        )}
        {ctaText && (
          <AtButton
            title={ctaText}
            onAction={handlePress}
            variant={AtButtonVariant.cta}
            compact={true}
          />
        )}
      </View>
    </Pressable>
  );
}
