import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
// Keep SvgUri import, but only use it conditionally for native
import { SvgUri } from "react-native-svg";

import { AtImageProps, AtImageVariants } from "./types";

// Helper function to determine if the source is a network URI object
const isNetworkSource = (source: any): source is { uri: string } => {
  return (
    typeof source === "object" &&
    source !== null &&
    typeof source.uri === "string"
  );
};

export const AtImage = ({
  alt,
  disabled = false,
  imageContainerStyles = {},
  imageStyles = {},
  isSvg = false,
  onLoad, // Note: onLoad might not work reliably for web SVGs via <img>
  resizeMode = "cover", // Note: resizeMode might not apply directly to web <img> SVGs
  source,
  testID = "AtImage",
  variant,
}: AtImageProps) => {
  if (!source) {
    return null;
  }

  const variantStyles = variant ? getImageVariant(variant) : {};

  // Combine variant styles and custom image styles
  // Custom imageStyles will override variantStyles if properties conflict
  const combinedImageStyles = StyleSheet.flatten([variantStyles, imageStyles]);

  // --- SVG Rendering Logic ---
  if (isSvg) {
    if (Platform.OS === "web") {
      // WEB: Use standard HTML <img> tag for SVGs
      // The bundler (Webpack/Metro) needs to be configured to handle SVG imports/paths
      let webSvgSrc: string | undefined;
      if (typeof source === "string") {
        webSvgSrc = source; // Assume string is a direct path/URL
      } else if (typeof source === "number") {
        // For require('./image.svg') on web, let the bundler handle it.
        // We pass the original require result.
        // Need to cast as 'any' because TS might complain about assigning number to src
        webSvgSrc = source as any;
      } else if (isNetworkSource(source)) {
        webSvgSrc = source.uri; // Use URI from network source
      }

      if (!webSvgSrc) {
        console.warn("Invalid source provided for web SVG:", source);
        return null; // Or render a placeholder
      }

      return (
        <View testID={`${testID}.container`} style={imageContainerStyles}>
          {/* RNW often allows using <Image> for SVGs too if configured,
              but using <img> is more direct for web standard SVGs */}
          <img
            src={webSvgSrc}
            alt={alt ?? ""}
            // Apply combined styles directly for web <img>
            // RNW might translate StyleSheet objects, or use inline styles
            style={combinedImageStyles}
            data-testid={`${testID}.image`} // Use data-testid for web standard
            // Note: resizeMode and onLoad are less straightforward for web <img> SVGs
          />
          {disabled && (
            <View
              style={[StyleSheet.absoluteFill, overlayStyles.disabledOverlay]}
            />
          )}
        </View>
      );
    } else {
      // NATIVE: Use SvgUri component
      let resolvedUri: string | undefined;
      let resolvedWidth: number | undefined;
      let resolvedHeight: number | undefined;

      if (typeof source === "number") {
        // Handle require('./image.svg') for native
        const resolvedAsset = Image.resolveAssetSource(source);
        resolvedUri = resolvedAsset?.uri;
        resolvedWidth = resolvedAsset?.width;
        resolvedHeight = resolvedAsset?.height;
      } else if (isNetworkSource(source)) {
        // Handle { uri: '...' } for native
        resolvedUri = source.uri;
        // We don't get width/height from network URIs automatically here
      } else if (typeof source === "string") {
        // If a plain string is passed on native for SVG, assume it's a URI
        // This is less common than require() or {uri:...}
        resolvedUri = source;
      }

      if (!resolvedUri) {
        console.warn("Invalid source provided for native SVG:", source);
        return null; // Or render a placeholder
      }

      // Apply borderRadius styles to a wrapper View for native SVGs
      // SvgUri itself doesn't support borderRadius directly via style prop
      const wrapperStyles = {
        ...variantStyles, // Apply borderRadius here
        overflow: "hidden" as const, // Ensure content clips to border radius
        width: combinedImageStyles.width ?? resolvedWidth, // Use dimensions from styles or resolved asset
        height: combinedImageStyles.height ?? resolvedHeight,
      };

      return (
        <View testID={`${testID}.container`} style={imageContainerStyles}>
          <View style={wrapperStyles}>
            <SvgUri
              uri={resolvedUri}
              // Apply explicit width/height, prioritize style prop, then resolved, then maybe 100%
              width={combinedImageStyles.width ?? resolvedWidth ?? "100%"}
              height={combinedImageStyles.height ?? resolvedHeight ?? "100%"}
              // Pass other non-layout styles from imageStyles if needed, SvgUri style prop is limited
              style={StyleSheet.flatten([imageStyles, { flex: 1 }])} // Ensure SVG fills wrapper if using %
              aria-label={alt ?? ""}
              testID={`${testID}.image`} // testID should work on SvgUri
              // Consider if onLoad makes sense/works for SvgUri
            />
          </View>
          {disabled && (
            <View
              style={[StyleSheet.absoluteFill, overlayStyles.disabledOverlay]}
            />
          )}
        </View>
      );
    }
  } else {
    // --- Regular Image Rendering Logic (Non-SVG) ---
    return (
      <View testID={`${testID}.container`} style={imageContainerStyles}>
        <Image
          source={source} // Use the original source prop directly
          style={combinedImageStyles} // Apply combined styles
          alt={alt ?? ""} // alt prop works on web
          testID={`${testID}.image`}
          resizeMode={resizeMode}
          onLoad={onLoad}
          accessibilityLabel={alt} // Use accessibilityLabel for native
        />
        {disabled && (
          <View
            style={[StyleSheet.absoluteFill, overlayStyles.disabledOverlay]}
          />
        )}
      </View>
    );
  }
};

// --- Helper Functions and Styles (Unchanged) ---

const getImageVariant = (variant: AtImageVariants) => {
  const availableVariants = {
    sharp: { borderRadius: 0 },
    allRounded: { borderRadius: 4 },
    topRounded: { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
    bottomRounded: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
    circle: { borderRadius: 10000 }, // Large value for circle effect
  };

  return availableVariants[variant] || {}; // Return empty object if variant not found
};

const overlayStyles = StyleSheet.create({
  disabledOverlay: {
    backgroundColor: "#FFFFFF",
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
    // Ensure the overlay respects the container's border radius if needed
    // Note: This might require passing the borderRadius from combinedImageStyles
    //       or applying it directly if the overlay *always* matches the image shape.
    //       For simplicity, leaving it as a full overlay for now. Consider:
    // borderRadius: combinedImageStyles.borderRadius // If overlay should match image shape
  },
});
