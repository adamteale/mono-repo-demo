import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import styled from "styled-components/native";
import { useTheme } from "styled-components";

import { AtImageProps, AtImageVariants } from "./types"; // Adjust path
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

// Define props needed for styling the image/wrappers
interface StyledImageVariantProps {
  variant?: AtImageVariants;
  theme: ThemeType;
}

// Helper function to get border radius styles from theme based on variant
const getBorderRadiusStyles = ({ theme, variant }: StyledImageVariantProps) => {
  const radii = theme.radii; // shorthand
  switch (variant) {
    case AtImageVariants.sharp:
      return `border-radius: ${radii.sharp}px;`; // Add px for web
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
      return `border-radius: ${radii.sharp}px;`; // Default to sharp
  }
};

// Styled component for the regular Image
// Needs variant and theme props for styling
interface StyledImageProps extends StyledImageVariantProps {
  // Inherits ImageProps implicitly via styled(Image)
}
const StyledImage = styled(Image)<StyledImageProps>`
  ${(props: StyledImageProps) =>
    getBorderRadiusStyles(
      props
    )}/* Add any other base styles for AtImage if needed */
`;

// Styled component for the native SVG wrapper View
// Needs variant and theme props for styling
interface StyledSvgWrapperProps extends StyledImageVariantProps {
  // Inherits ViewProps implicitly
}
const StyledSvgWrapper = styled.View<StyledSvgWrapperProps>`
  ${(props: StyledSvgWrapperProps) => getBorderRadiusStyles(props)}
  overflow: hidden; /* Important to clip the SVG */
`;

// Styled component for the web SVG (<img>) wrapper View/div
// Needs variant and theme props for styling
interface StyledWebSvgWrapperProps extends StyledImageVariantProps {
  // Inherits ViewProps implicitly
}
interface StyledWebSvgWrapperProps extends StyledImageVariantProps {
  // Inherits ViewProps implicitly
}

const StyledWebSvgWrapper = styled.View<StyledWebSvgWrapperProps>`
  ${(props: StyledWebSvgWrapperProps) => getBorderRadiusStyles(props)}
  overflow: hidden; /* Clip the img */
  /* Ensure wrapper takes size from img or passed styles */
  display: inline-block; /* Or block depending on layout needs */
`;

// Styled component for the disabled overlay
// Now uses theme colors potentially
const StyledDisabledOverlay = styled.View<{ theme: ThemeType }>`
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.white ?? "#FFFFFF"}; /* Example theme usage */
  opacity: 0.7; /* Could also come from theme.opacity.disabled */
  justify-content: center;
  align-items: center;
  /* Use StyleSheet.absoluteFill equivalent */
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
  imageContainerStyles = {}, // Style for the outer container
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
              style={StyleSheet.flatten(style) as React.CSSProperties} // Convert RN style for web if needed
              data-testid={`${testID}.image`}
            />
          </StyledWebSvgWrapper>
          {disabled && <StyledDisabledOverlay theme={theme} />}
        </View>
      );
    } else {
      // NATIVE SVG
      let resolvedUri: string | undefined;
      let resolvedWidth: number | string | undefined = "100%"; // Default size
      let resolvedHeight: number | string | undefined = "100%";

      if (typeof source === "number") {
        const resolvedAsset = Image.resolveAssetSource(source);
        resolvedUri = resolvedAsset?.uri;
        resolvedWidth = resolvedAsset?.width;
        resolvedHeight = resolvedAsset?.height;
      } else if (isNetworkSource(source)) {
        resolvedUri = source.uri;
        // Cannot resolve width/height from URI alone
      } else if (typeof source === "string") {
        resolvedUri = source;
      }

      if (!resolvedUri) {
        console.warn("Invalid source provided for native SVG:", source);
        return null;
      }

      // Extract layout styles from the passed 'style' prop to apply to wrapper if needed
      const flattenedStyle = StyleSheet.flatten(style);
      const {
        width: styleWidth,
        height: styleHeight,
        ...restImageStyles
      } = flattenedStyle || {};

      // Prioritize explicit style dimensions, then resolved, then default
      const finalWidth = styleWidth ?? resolvedWidth;
      const finalHeight = styleHeight ?? resolvedHeight;

      return (
        <View testID={`${testID}.container`} style={imageContainerStyles}>
          {/* Use the native wrapper for border radius */}
          <StyledSvgWrapper
            variant={variant}
            theme={theme}
            style={{ width: finalWidth, height: finalHeight }} // Apply dimensions to wrapper
          >
            <SvgUri
              uri={resolvedUri}
              width="100%" // SVG fills the sized wrapper
              height="100%"
              style={restImageStyles} // Apply non-layout styles to SvgUri
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
          style={style} // Pass the main style prop here
          alt={alt ?? ""} // alt prop works on web
          testID={`${testID}.image`}
          resizeMode={resizeMode}
          onLoad={onLoad}
          accessibilityLabel={alt ?? ""} // Use accessibilityLabel for native
          {...rest} // Pass other ImageProps
        />
        {disabled && <StyledDisabledOverlay theme={theme} />}
      </View>
    );
  }
};
