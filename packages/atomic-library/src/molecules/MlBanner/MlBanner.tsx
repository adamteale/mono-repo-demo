import React from "react";
import { Linking } from "react-native";

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
  containerWidth,
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

  // Calculate height based on container width
  const height = Math.floor(containerWidth / 2);

  const pressableDivProps = {
    onClick: handlePress,
    "data-testid": testID,
    role: "button",
    onKeyPress: (e: React.KeyboardEvent) => {
      e.preventDefault();
      handlePress();
    },
  };

  const imageStyle = {
    height: Math.min(height, 480),
    width: containerWidth,
    maxWidth: 960,
    maxHeight: 480,
  };

  return (
    <StyledPressable
      {...pressableDivProps}
      theme={theme}
      width={containerWidth}
    >
      <StyledImageWrapper theme={theme} width={containerWidth} height={height}>
        <AtImage
          source={banner?.source}
          style={imageStyle}
          alt={banner?.alt || title || "Banner image"}
          resizeMode="contain"
          theme={theme}
          testID={`${testID}.imageComponent`}
        />
      </StyledImageWrapper>

      <StyledDetailContainer theme={theme} width={containerWidth}>
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
            theme={theme}
          />
        )}
      </StyledDetailContainer>
    </StyledPressable>
  );
};
