import React from "react";
import {
  Linking,
  Pressable,
  Text,
  View,
  PressableProps,
  ViewProps,
  TextProps,
  StyleProp,
  ViewStyle,
  DimensionValue,
} from "react-native";
import styled, { useTheme } from "styled-components/native";

import { AtButton, AtImage, AtButtonVariant } from "../../atoms";
import type { MlBannerProps } from "./types";
import { ThemeType } from "../theme";

// --- Helper Function ---
const isNetworkSource = (source: any): source is { uri: string } => {
  return (
    typeof source === "object" &&
    source !== null &&
    typeof source.uri === "string"
  );
};

const formatDimensionValue = (
  value: DimensionValue | null | undefined
): string | undefined => {
  if (value === null || value === undefined || value === "auto") {
    // Return undefined so styled-components/RNW doesn't set the property,
    // or return 'auto' if that's the explicit default desired CSS value.
    // 'auto' is usually better for explicit intent.
    if (value === "auto") return "auto";
    return undefined; // Omit the property if null/undefined
  }
  if (typeof value === "number") {
    if (value === 0) return "0px";
    return `${value}px`; // Add px for numbers
  }
  // If it's a string, assume it's a percentage or 'auto' which are valid CSS strings
  // DimensionValue string is typically 'auto' or '%'.
  if (typeof value === "string") {
    return value;
  }

  // If we get here, it's an unexpected type like AnimatedNode.
  // Return undefined as we cannot serialize it to CSS.
  console.warn(
    `Unsupported dimension value type passed to formatDimensionValue: "${typeof value}". Expected number, string, null, or undefined.`
  );
  return undefined; // Return undefined for unsupported types
};

// --- Styled Components ---

interface StyledPressableProps extends PressableProps {
  width: MlBannerProps["width"];
  height: MlBannerProps["height"];
  theme: ThemeType;
  disabled?: boolean; // Add disabled if it's explicitly used in styled component
}

const StyledPressable = styled.Pressable<StyledPressableProps>`
  /* --- Explicitly cast return value of interpolation --- */
  width: ${({ width }: StyledPressableProps) =>
    formatDimensionValue(width) as string | undefined};
  height: ${({ height }: StyledPressableProps) =>
    formatDimensionValue(height) as string | undefined};
  /* --- End Cast --- */

  overflow: hidden;
  background-color: ${({ theme }: StyledPressableProps) =>
    theme.colors.bannerBackground ?? "#F0F5FE"};

  flex-direction: column;

  /* Temporary Debugging Background */
  background-color: rgba(128, 0, 128, 0.3);
`;

// Styled component for the detail container View
const StyledDetailContainer = styled.View<{ theme: ThemeType }>`
  padding: ${({ theme }: { theme: ThemeType }) => theme.spacing.md}px;
  gap: ${({ theme }: { theme: ThemeType }) => theme.spacing.sm}px;
  flex-direction: column;
  flex: 1;

  /* Temporary Debugging Background */
  background-color: rgba(0, 0, 255, 0.3);
`;

// Styled component for the title Text
const StyledTitle = styled.Text<{ theme: ThemeType }>`
  font-size: ${({ theme }: { theme: ThemeType }) => theme.fontSizes.h3}px;
  font-weight: ${({ theme }: { theme: ThemeType }) => theme.fontWeights.bold};
  color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.bannerText ?? "#182958"};
`;

// Styled component for the description Text
const StyledDescription = styled.Text<{ theme: ThemeType }>`
  font-size: ${({ theme }: { theme: ThemeType }) => theme.fontSizes.body}px;
  color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.bannerText ?? "#182958"};
`;

const StyledDisabledOverlay = styled.View<{ theme: ThemeType }>`
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.white ?? "#FFFFFF"};
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// --- Component Implementation ---

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
  disabled = false,
}: MlBannerProps) => {
  const theme = useTheme() as ThemeType;

  const handlePress = () => {
    if (deeplink) {
      Linking.openURL(deeplink).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
    onPress();
  };

  return (
    <StyledPressable
      testID={testID}
      onPress={handlePress}
      style={style}
      width={width} // Pass width prop
      height={height} // Pass height prop
      theme={theme}
      disabled={disabled}
    >
      <AtImage
        {...banner}
        resizeMode="cover"
        // Ensure dimensions are passed TO AtImage when using it if needed for layout
        // Example: width={banner.width} height={banner.height}
        // Add temporary background for visualization
        style={[{ backgroundColor: "rgba(255, 0, 0, 0.3)" }, banner.style]}
      />

      <StyledDetailContainer theme={theme}>
        <StyledTitle theme={theme}>{title}</StyledTitle>
        <StyledDescription theme={theme}>{description}</StyledDescription>

        <AtButton
          title={ctaText}
          onPress={onPress}
          variant={AtButtonVariant.cta}
          compact={true}
          disabled={disabled}
        />
      </StyledDetailContainer>
      {disabled && <StyledDisabledOverlay theme={theme} />}
    </StyledPressable>
  );
};
