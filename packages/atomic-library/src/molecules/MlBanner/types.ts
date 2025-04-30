import { AtImageProps } from "../../atoms/AtImage/types";

export type MlBannerProps = {
  banner: AtImageProps;
  containerWidth: number;
  ctaText: string;
  deeplink?: string;
  description: string;
  onPress?: () => void;
  testID?: string;
  title: string;
};
