import type { DimensionValue, StyleProp, ViewStyle } from "react-native";

import { AtImageProps } from "src/atoms/AtImage/types";

export type MlBannerProps = {
  banner: AtImageProps;
  ctaText: string;
  deeplink?: string;
  description: string;
  height?: DimensionValue;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  title: string;
  width?: DimensionValue;
};
