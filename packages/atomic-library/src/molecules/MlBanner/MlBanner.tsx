import React from "react";
import { Linking, Text } from "react-native";

import { ThemeType } from "../../theme";
import { AtButton, AtImage, AtButtonVariant } from "../../atoms";

import type { MlBannerProps } from "./types";

import {
  StyledDescription,
  StyledDetailContainer,
  StyledImageWrapper,
  StyledPressable,
  StyledTitle,
} from "./styledComponents/styledComponents";

export const MlBanner = ({
  banner,
  ctaText,
  deeplink,
  description,
  onPress = () => {},
  testID = "MlBanner",
  theme,
  title,
}: MlBannerProps) => {
  const handlePress = () => {
    if (deeplink) {
      Linking.openURL(deeplink).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
    onPress();
  };

  const pressableDivProps = {
    onClick: handlePress,
    "data-testid": testID,
    role: "button",
    onKeyPress: (e: React.KeyboardEvent) => {
      e.preventDefault(); // Prevent space scrolling the page
      handlePress();
    },
  };

  const combinedStyle = {
    height: "480px",
  };

  return (
    <StyledPressable {...pressableDivProps} style={combinedStyle} theme={theme}>
      <StyledImageWrapper theme={theme}>
        <AtImage
          {...banner}
          resizeMode="cover"
          alt={banner.alt || title || "Banner image"}
        />
      </StyledImageWrapper>

      <StyledDetailContainer theme={theme}>
        {title && <StyledTitle theme={theme}>{title}</StyledTitle>}
        {description && (
          <StyledDescription theme={theme}>{description}</StyledDescription>
        )}
        {ctaText && (
          <AtButton
            title={ctaText}
            onAction={handlePress}
            variant={AtButtonVariant.cta}
            compact={true}
          />
        )}
      </StyledDetailContainer>
    </StyledPressable>
  );
};
