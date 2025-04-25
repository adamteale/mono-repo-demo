import React, { FC } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  View,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  StyleProp,
} from "react-native";
import { SvgUri } from "react-native-svg";
import styled, { useTheme } from "styled-components/native";

import { AtImageProps, AtImageVariants } from "./types";
import { ThemeType } from "../../theme";

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
  ${(props: StyledImageProps) => getBorderRadiusStyles(props)}
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
export const AtImage: FC<AtImageProps> = ({
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
  const typedSource = source as ImageSourcePropType | string | undefined;

  if (!typedSource) {
    return null;
  }

  const imageFillStyle: StyleProp<ImageStyle> = {
    // Type the style
    width: "100%",
    height: "100%",
  };
  const combinedImageStyle = StyleSheet.compose(imageFillStyle, style);

  // --- SVG Rendering ---
  if (isSvg) {
    if (Platform.OS === "web") {
      let webSvgSrc: string | undefined;
      if (typeof typedSource === "string") {
        webSvgSrc = typedSource;
      } else if (typeof typedSource === "number") {
        // require() returns a number ID, handle differently if needed
        // For web, often better to import SVGs as components or use URLs
        console.warn(
          "Direct require() for SVG source might not work as expected on web. Use import or URI."
        );
        // Attempt to resolve - This might not work reliably without bundler magic
        const resolved = Image.resolveAssetSource(typedSource);
        webSvgSrc = resolved?.uri;
      } else if (isNetworkSource(typedSource)) {
        webSvgSrc = typedSource.uri;
      }

      if (!webSvgSrc) {
        console.warn("Invalid source provided for web SVG:", typedSource);
        return null;
      }

      // Flatten style for React.CSSProperties type assertion
      const flatWebStyle = StyleSheet.flatten(combinedImageStyle);

      return (
        <View testID={`${testID}.container`} style={imageContainerStyles}>
          <StyledWebSvgWrapper
            variant={variant}
            theme={theme}
            style={imageFillStyle}
          >
            <img
              src={webSvgSrc}
              alt={alt ?? ""}
              style={flatWebStyle as React.CSSProperties}
              data-testid={`${testID}.image`}
            />
          </StyledWebSvgWrapper>
          {disabled && (
            <StyledDisabledOverlay theme={theme} variant={variant} />
          )}
        </View>
      );
    } else {
      // NATIVE SVG
      let resolvedUri: string | undefined;
      if (typeof typedSource === "number") {
        resolvedUri = Image.resolveAssetSource(typedSource)?.uri;
      } else if (isNetworkSource(typedSource)) {
        resolvedUri = typedSource.uri;
      } else if (typeof typedSource === "string") {
        // Assuming string is a URI for native SVG
        resolvedUri = typedSource;
      }

      if (!resolvedUri) {
        console.warn("Invalid source provided for native SVG:", typedSource);
        return null;
      }

      const { width, height, ...restContainerStyle } =
        StyleSheet.flatten(imageContainerStyles);

      return (
        <View
          testID={`${testID}.container`}
          style={[{ width, height }, restContainerStyle]}
        >
          <StyledSvgWrapper
            variant={variant}
            theme={theme}
            // Make wrapper fill container using absolute positioning
            style={StyleSheet.absoluteFillObject}
          >
            <SvgUri
              uri={resolvedUri}
              width="100%"
              height="100%"
              style={style as StyleProp<ViewStyle>}
              aria-label={alt ?? ""}
              testID={`${testID}.image`}
            />
          </StyledSvgWrapper>
          {disabled && (
            <StyledDisabledOverlay theme={theme} variant={variant} />
          )}
        </View>
      );
    }
  } else {
    // --- Regular Image Rendering ---
    return (
      <View testID={`${testID}.container`} style={imageContainerStyles}>
        <StyledImage
          // Source needs to be ImageSourcePropType for <Image>
          source={typedSource as ImageSourcePropType}
          variant={variant}
          theme={theme}
          style={combinedImageStyle}
          alt={alt ?? ""}
          testID={`${testID}.image`}
          resizeMode={resizeMode}
          onLoad={onLoad}
          accessibilityLabel={alt ?? ""}
          {...rest}
        />
        {disabled && <StyledDisabledOverlay theme={theme} variant={variant} />}
      </View>
    );
  }
};
