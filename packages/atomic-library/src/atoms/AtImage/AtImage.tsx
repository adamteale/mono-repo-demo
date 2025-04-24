import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import styled from "styled-components/native";

import { AtImageProps, AtImageVariants } from "./types";
import { ThemeType } from "../../theme";

// --- Helper Function ---
const isNetworkSource = (source: any): source is { uri: string } => {
  return (
    typeof source === "object" &&
    source !== null &&
    typeof source.uri === "string"
  );
};

// --- Styled Components ---

interface StyledImageVariantProps {
  variant?: AtImageVariants;
  theme: ThemeType;
}

const getBorderRadiusStyles = ({ theme, variant }: StyledImageVariantProps) => {
  const radii = theme.radii;
  switch (variant) {
    case AtImageVariants.sharp:
      return `border-radius: ${radii.sharp}px;`;
    case AtImageVariants.allRounded:
      return `border-radius: ${radii.rounded}px;`;
    case AtImageVariants.circle:
      return `border-radius: ${radii.circle}px;`;
    case AtImageVariants.topRounded:
      return `
        border-top-left-radius: ${radii.rounded}px;
        border-top-right-radius: ${radii.rounded}px;
        border-bottom-left-radius: ${radii.sharp}px;
        border-bottom-right-radius: ${radii.sharp}px;
      `;
    case AtImageVariants.bottomRounded:
      return `
        border-top-left-radius: ${radii.sharp}px;
        border-top-right-radius: ${radii.sharp}px;
        border-bottom-left-radius: ${radii.rounded}px;
        border-bottom-right-radius: ${radii.rounded}px;
      `;
    default:
      return `border-radius: ${radii.sharp}px;`;
  }
};

interface StyledImageProps extends StyledImageVariantProps {}

const StyledImage = styled(Image)<StyledImageProps>`
  ${(props: StyledImageProps) =>
    getBorderRadiusStyles(
      props
    )}/* Add any other base styles for AtImage if needed */
`;

interface StyledSvgWrapperProps extends StyledImageVariantProps {}
const StyledSvgWrapper = styled.View<StyledSvgWrapperProps>`
  ${(props: StyledSvgWrapperProps) => getBorderRadiusStyles(props)}
  overflow: hidden; /* Important to clip the SVG */
`;

interface StyledWebSvgWrapperProps extends StyledImageVariantProps {}

const StyledWebSvgWrapper = styled.View<StyledWebSvgWrapperProps>`
  ${(props: StyledWebSvgWrapperProps) => getBorderRadiusStyles(props)}
  overflow: hidden;
  display: inline-block;
`;

const StyledDisabledOverlay = styled.View<{ theme: ThemeType }>`
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.white ?? "#FFFFFF"};
  opacity: 0.7;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// --- Main Component ---

export const AtImage: React.FC<AtImageProps> = ({
  alt,
  disabled = false,
  imageContainerStyles = {},
  style,
  isSvg = false,
  onLoad,
  resizeMode = "cover",
  source,
  testID = "AtImage",
  theme,
  variant = AtImageVariants.sharp,
  ...rest
}) => {
  if (!source) {
    return null;
  }

  // --- SVG Rendering ---
  if (isSvg) {
    if (Platform.OS === "web") {
      let webSvgSrc: string | undefined;
      if (typeof source === "string") {
        webSvgSrc = source;
      } else if (typeof source === "number") {
        webSvgSrc = source as any; // Let bundler handle require()
      } else if (isNetworkSource(source)) {
        webSvgSrc = source.uri;
      }

      if (!webSvgSrc) {
        console.warn("Invalid source provided for web SVG:", source);
        return null;
      }

      // Use the web wrapper for border radius
      return (
        <View testID={`${testID}.container`} style={imageContainerStyles}>
          <StyledWebSvgWrapper variant={variant} theme={theme}>
            {/* Apply passed 'style' prop to the img directly */}
            <img
              src={webSvgSrc}
              alt={alt ?? ""}
              style={StyleSheet.flatten(style) as React.CSSProperties}
              data-testid={`${testID}.image`}
            />
          </StyledWebSvgWrapper>
          {disabled && <StyledDisabledOverlay theme={theme} />}
        </View>
      );
    } else {
      // NATIVE SVG
      let resolvedUri: string | undefined;
      let resolvedWidth: number | string | undefined = "100%";
      let resolvedHeight: number | string | undefined = "100%";

      if (typeof source === "number") {
        const resolvedAsset = Image.resolveAssetSource(source);
        resolvedUri = resolvedAsset?.uri;
        resolvedWidth = resolvedAsset?.width;
        resolvedHeight = resolvedAsset?.height;
      } else if (isNetworkSource(source)) {
        resolvedUri = source.uri;
      } else if (typeof source === "string") {
        resolvedUri = source;
      }

      if (!resolvedUri) {
        console.warn("Invalid source provided for native SVG:", source);
        return null;
      }

      const flattenedStyle = StyleSheet.flatten(style);
      const {
        width: styleWidth,
        height: styleHeight,
        ...restImageStyles
      } = flattenedStyle || {};

      const finalWidth = styleWidth ?? resolvedWidth;
      const finalHeight = styleHeight ?? resolvedHeight;

      return (
        <View testID={`${testID}.container`} style={imageContainerStyles}>
          <StyledSvgWrapper
            variant={variant}
            theme={theme}
            style={{ width: finalWidth, height: finalHeight }}
          >
            <SvgUri
              uri={resolvedUri}
              width="100%"
              height="100%"
              style={restImageStyles}
              aria-label={alt ?? ""}
              testID={`${testID}.image`}
            />
          </StyledSvgWrapper>
          {disabled && <StyledDisabledOverlay theme={theme} />}
        </View>
      );
    }
  } else {
    // --- Regular Image Rendering ---
    return (
      <View testID={`${testID}.container`} style={imageContainerStyles}>
        <StyledImage
          source={source}
          variant={variant}
          theme={theme}
          style={style}
          alt={alt ?? ""}
          testID={`${testID}.image`}
          resizeMode={resizeMode}
          onLoad={onLoad}
          accessibilityLabel={alt ?? ""}
          {...rest}
        />
        {disabled && <StyledDisabledOverlay theme={theme} />}
      </View>
    );
  }
};
