import React from "react";
import { Linking, Pressable, View, Text, Image } from "react-native"; // Correct imports
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
  const height = Math.floor(validContainerWidth / 2);

  const imageStyle = {
    height: Math.min(height, 480),
    width: containerWidth,
    maxWidth: 960,
    maxHeight: 480,
  };

  return (
    <Pressable
      onPress={handlePress} // Use onPress directly
      testID={testID} // Use testID directly
      className="flex flex-col w-full max-w-[1920px] self-center lg:flex-row lg:max-h-[480px]"
    >
      <View
        className="order-0 overflow-hidden lg:order-1 lg:w-1/2"
        style={{
          minHeight: Math.min(height, 480),
          height: Math.min(height, 480),
          maxWidth: 960,
          maxHeight: 480,
        }}
      >
        <AtImage
          source={banner?.source}
          style={imageStyle}
          alt={banner?.alt || title || "Banner image"}
          resizeMode="contain"
          testID={`${testID}.imageComponent`}
        />
      </View>

      <View className="w-full lg:w-1/2 flex flex-col justify-center items-start p-5 gap-3 bg-backgroundSecondary text-textPrimary min-h-[220px]">
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
