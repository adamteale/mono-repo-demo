import {
  ImageLoadEventData,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

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

// Some properties are incompatible bewteen platforms, for example 'resizeMode', or most of them when using vector files (.svg)
// if some property seems to not be working as intended refer to docs to verificate this
// https://reactnative.dev/docs/image
export interface AtImageProps {
  alt?: string;
  disabled?: boolean;
  imageContainerStyles?: StyleProp<ViewStyle>;
  imageStyles?: StyleProp<ImageStyle>;
  isSvg?: boolean;
  resizeMode?: ImageResizeMode;
  source: ImageSourcePropType;
  testID?: string;
  variant?: AtImageVariants;
  onLoad?: (event: NativeSyntheticEvent<ImageLoadEventData>) => void;
}
