import React from "react";
import { SvgUri } from "react-native-svg";
import { Image, StyleSheet, View } from "react-native";

import { AtImageProps, AtImageVariants } from "./types";

export const AtImage = ({
  alt,
  disabled = false,
  imageContainerStyles = {},
  imageStyles = {},
  isSvg = false,
  onLoad,
  resizeMode = "cover",
  source,
  testID = "AtImage",
  variant,
}: AtImageProps) => {
  if (!source) {
    return null;
  }
  const image = Image.resolveAssetSource(source);
  const imageVariantStyles = variant ? getImageVariant(variant) : {};
  const styles = {
    ...imageVariantStyles,
  };

  return (
    <View testID={`${testID}.container`} style={[imageContainerStyles]}>
      {isSvg ? (
        <SvgUri
          uri={image.uri}
          width={image.width}
          height={image.height}
          aria-label={alt ? alt : ""}
        />
      ) : (
        <Image
          source={source}
          style={[styles, imageStyles]}
          alt={alt ? alt : ""}
          testID={`${testID}.image`}
          resizeMode={resizeMode}
          onLoad={onLoad}
        />
      )}
      {disabled && (
        <View
          style={[StyleSheet.absoluteFill, overlayStyles.disabledOverlay]}
        />
      )}
    </View>
  );
};

const getImageVariant = (variant: AtImageVariants) => {
  const availableVariants = {
    sharp: { borderRadius: 0 },
    allRounded: { borderRadius: 4 },
    topRounded: { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
    bottomRounded: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
    circle: { borderRadius: 10000 },
  };

  return availableVariants[variant];
};

const overlayStyles = StyleSheet.create({
  disabledOverlay: {
    backgroundColor: "#FFFFFF",
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});
