import { ImageProps, ImageStyle, StyleProp, ViewStyle } from "react-native";

export enum AtImageVariants {
  sharp = "sharp",
  circle = "circle",
  allRounded = "allRounded",
  bottomRounded = "bottomRounded",
  topRounded = "topRounded",
}

export type AtImageVariantsDefinition = {
  [key in AtImageVariants]: {
    borderRadius?: number | undefined;
    borderTopLeftRadius?: number | undefined;
    borderTopRightRadius?: number | undefined;
    borderBottomLeftRadius?: number | undefined;
    borderBottomRightRadius?: number | undefined;
  };
};

export interface AtImageProps
  extends Omit<ImageProps, "source" | "style" | "resizeMode"> {
  source: ImageProps["source"];
  resizeMode?: ImageProps["resizeMode"];

  alt: string;
  disabled?: boolean;
  isSvg?: boolean;
  variant?: AtImageVariants;

  // Style for the main container View
  imageContainerStyles?: StyleProp<ViewStyle>;
  // Style specifically for the Image/SVG element itself
  style?: StyleProp<ImageStyle>; // Use ImageStyle here
  testID?: string;
}
