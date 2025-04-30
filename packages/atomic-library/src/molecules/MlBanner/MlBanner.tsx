import React from "react";
import { Linking, Pressable, View, Text, Image } from "react-native"; // Correct imports
import { AtButton, AtButtonVariant, AtImage } from "../../atoms"; // Make sure AtImage is imported

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

  // Define the style for the AtImage component itself
  const imageStyle = {
    // NOTE: These dimensions define the BOUNDS of the AtImage component.
    // resizeMode="contain" will fit the image within these bounds.
    // The parent View's flex properties will center *this* component.
    height: Math.min(height, 480),
    width: validContainerWidth, // Use valid width
    maxWidth: 960,
    maxHeight: 480,
  };

  return (
    <Pressable
      onPress={handlePress} // Use onPress directly
      testID={testID} // Use testID directly
      className="flex flex-col w-full max-w-[1920px] self-center lg:flex-row lg:max-h-[480px]"
    >
      {/* Image Wrapper View */}
      <View
        className="
          order-0 overflow-hidden           {/* Base styles */}
          lg:order-1 lg:w-1/2             {/* Responsive styles */}
          flex items-center justify-center {/* Added flex centering */}
        "
        style={{
          // These styles define the size of the container *around* the image
          minHeight: Math.min(height, 480),
          height: Math.min(height, 480),
          maxWidth: 960,
          maxHeight: 480,
        }}
      >
        {/* The Actual Image Component */}
        <AtImage
          source={banner?.source}
          // Apply the calculated dimensions to the AtImage itself
          style={imageStyle}
          alt={banner?.alt || title || "Banner image"}
          // 'contain' fits the image inside the style dimensions, maintaining aspect ratio
          resizeMode="contain"
          testID={`${testID}.imageComponent`}
          // theme prop might not be needed if AtImage doesn't use styled-components anymore
        />
      </View>

      {/* Detail Container View */}
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
            // theme prop might not be needed if AtButton is converted
          />
        )}
      </View>
    </Pressable>
  );
}
