export interface MlBannerProps {
  banner: AtImageProps;
  deeplink?: string;
  height?: DimensionValue;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  width?: DimensionValue;
  onPress?: () => void;
}
