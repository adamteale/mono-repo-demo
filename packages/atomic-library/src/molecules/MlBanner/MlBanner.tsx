import React from "react";
import { Linking, Pressable, Text, View } from "react-native";

import { stylex } from "./styles";
import { AtButton, AtImage } from "../../atoms";
import type { MlBannerProps } from "./types";
import { AtButtonVariant } from "@mono-repo-demo/atomic-library";

export const MlBanner = ({
  banner,
  ctaText,
  deeplink,
  description,
  height = null,
  onPress = () => {},
  style,
  testID = "MlBanner",
  title,
  width = null,
}: MlBannerProps) => {
  const styles = stylex(width, height);
  const handlePress = () => {
    if (deeplink) {
      Linking.openURL(deeplink).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }

    onPress();
  };

  return (
    <Pressable
      testID={testID}
      onPress={handlePress}
      style={[styles.container, style]}
    >
      <AtImage {...banner} resizeMode="cover" />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <AtButton
          title={ctaText}
          onAction={onPress}
          variant={AtButtonVariant.cta}
          compact={true}
        />
      </View>
    </Pressable>
  );
};
