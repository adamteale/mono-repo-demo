import React, { FC } from "react";
import {
  Image,
  Platform,
  StyleSheet,
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

  const borderRadiusMap = {
    [AtImageVariants.sharp]: "rounded-none",
    [AtImageVariants.circle]: "rounded-full",
    [AtImageVariants.allRounded]: "rounded-md",
    [AtImageVariants.bottomRounded]: "rounded-b-md",
    [AtImageVariants.topRounded]: "rounded-t-md",
  };

  const borderRadiusStyle = borderRadiusMap[variant] || "rounded-none";

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
          <View className={`overflow-hidden ${borderRadiusStyle}`}>
            <img
              src={webSvgSrc}
              alt={alt ?? ""}
              style={flatWebStyle as React.CSSProperties}
              data-testid={`${testID}.image`}
            />
          </View>
          {disabled && (
            <View className="bg-white opacity-70 justify-center items-center absolute top-0 left-0 right-0 bottom-0" />
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
          <View
            className={`overflow-hidden ${borderRadiusStyle}`}
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
          </View>
          {disabled && (
            <View className="bg-white opacity-70 justify-center items-center absolute top-0 left-0 right-0 bottom-0" />
          )}
        </View>
      );
    }
  } else {
    // --- Regular Image Rendering ---
    return (
      <View testID={`${testID}.container`} style={imageContainerStyles}>
        <Image
          // Source needs to be ImageSourcePropType for <Image>
          source={typedSource as ImageSourcePropType}
          className={borderRadiusStyle}
          style={combinedImageStyle}
          alt={alt ?? ""}
          testID={`${testID}.image`}
          resizeMode={resizeMode}
          onLoad={onLoad}
          accessibilityLabel={alt ?? ""}
          {...rest}
        />
        {disabled && (
          <View className="bg-white opacity-70 justify-center items-center absolute top-0 left-0 right-0 bottom-0" />
        )}
      </View>
    );
  }
};
