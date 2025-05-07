import React, { FC } from "react";
import {
  Image,
  Platform,
  // Remove StyleSheet
  View,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SvgUri } from "react-native-svg";

import { AtImageProps, AtImageVariants } from "./types";

const isNetworkSource = (source: any): source is { uri: string } => {
  return (
    typeof source === "object" &&
    source !== null &&
    typeof source.uri === "string"
  );
};

// Helper to handle potential style arrays (mimics basic flatten)
// Note: This is a simplified version. StyleSheet.flatten is more robust.
const flattenStyle = (style: StyleProp<any>): object | null => {
  if (!style) {
    return null;
  }
  if (Array.isArray(style)) {
    return style.reduce((acc, item) => ({ ...acc, ...(item || {}) }), {});
  }
  return style as object; // Assume it's an object if not array
};

// --- Main Component ---
export const AtImage: FC<AtImageProps> = ({
  alt,
  disabled = false,
  imageContainerStyles: incomingContainerStyle = {}, // Rename for clarity
  style: incomingImageStyle = {}, // Rename for clarity
  isSvg = false,
  onLoad,
  resizeMode = "cover",
  source,
  testID = "AtImage",
  variant = AtImageVariants.sharp,
  ...rest
}) => {
  const typedSource = source as ImageSourcePropType | string | undefined;

  if (!typedSource) {
    return null;
  }

  // Define borderRadius classes based on variant
  const borderRadiusMap = {
    [AtImageVariants.sharp]: "rounded-none",
    [AtImageVariants.circle]: "rounded-full",
    [AtImageVariants.allRounded]: "rounded-md", // Or another Tailwind radius like rounded-lg
    [AtImageVariants.bottomRounded]: "rounded-b-md", // Or rounded-b-lg
    [AtImageVariants.topRounded]: "rounded-t-md", // Or rounded-t-lg
  };
  const borderRadiusClass = borderRadiusMap[variant] || "rounded-none";

  // Define fill classes (used multiple times)
  const imageFillClasses = "w-full h-full";

  // Define disabled overlay classes (used multiple times)
  const disabledOverlayClasses =
    "bg-white opacity-70 justify-center items-center absolute inset-0"; // Replaced absoluteFillObject with inset-0

  // Flatten incoming style objects (basic implementation)
  const flatContainerStyle = flattenStyle(incomingContainerStyle) as ViewStyle;
  const flatImageStyle = flattenStyle(incomingImageStyle);

  // --- SVG Rendering ---
  if (isSvg) {
    if (Platform.OS === "web") {
      let webSvgSrc: string | undefined;
      if (typeof typedSource === "string") {
        webSvgSrc = typedSource;
      } else if (typeof typedSource === "number") {
        console.warn(
          "Direct require() for SVG source might not work as expected on web. Use import or URI."
        );
        const resolved = Image.resolveAssetSource(typedSource);
        webSvgSrc = resolved?.uri;
      } else if (isNetworkSource(typedSource)) {
        webSvgSrc = typedSource.uri;
      }

      if (!webSvgSrc) {
        console.warn("Invalid source provided for web SVG:", typedSource);
        return null;
      }

      // Apply container styles (passed as object)
      // Apply wrapper styles with className
      // Apply image styles (passed as object) to img tag
      return (
        <View testID={`${testID}.container`} style={flatContainerStyle}>
          <View className={`inline-block overflow-hidden ${borderRadiusClass}`}>
            {/* Apply w-full h-full potentially via style if needed for img */}
            <img
              src={webSvgSrc}
              alt={alt ?? ""}
              // Combine intrinsic fill style with passed-in image style
              style={
                {
                  width: "100%",
                  height: "100%",
                  ...(flatImageStyle || {}),
                } as React.CSSProperties
              }
              data-testid={`${testID}.image`}
            />
          </View>
          {disabled && <View className={disabledOverlayClasses} />}
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
        resolvedUri = typedSource;
      }

      if (!resolvedUri) {
        console.warn("Invalid source provided for native SVG:", typedSource);
        return null;
      }

      // Extract width/height from flattened container style for the outer View
      const { width, height, ...restContainerStyle } = flatContainerStyle || {};

      return (
        <View
          testID={`${testID}.container`}
          style={[{ width, height }, restContainerStyle]} // Apply extracted dimensions and rest
        >
          {/* Apply border radius and absolute fill via className */}
          <View
            className={`overflow-hidden ${borderRadiusClass} absolute inset-0`}
          >
            <SvgUri
              uri={resolvedUri}
              width="100%" // SvgUri specific props
              height="100%" // SvgUri specific props
              style={flatImageStyle as StyleProp<ViewStyle>} // Apply flattened image style
              aria-label={alt ?? ""}
              testID={`${testID}.image`}
            />
          </View>
          {disabled && <View className={disabledOverlayClasses} />}
        </View>
      );
    }
  } else {
    // --- Regular Image Rendering ---
    return (
      // Apply container styles (passed as object)
      <View testID={`${testID}.container`} style={flatContainerStyle}>
        <Image
          source={typedSource as ImageSourcePropType}
          // Apply borderRadius and fill via className
          className={`${imageFillClasses} ${borderRadiusClass}`}
          // Apply passed-in image style object
          style={flatImageStyle}
          alt={alt ?? ""}
          testID={`${testID}.image`}
          resizeMode={resizeMode}
          onLoad={onLoad}
          accessibilityLabel={alt ?? ""}
          {...rest}
        />
        {disabled && <View className={disabledOverlayClasses} />}
      </View>
    );
  }
};
