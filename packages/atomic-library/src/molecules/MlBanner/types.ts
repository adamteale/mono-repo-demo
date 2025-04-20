import { AtImageProps } from "src/atoms/AtImage/types";

export type MlBannerProps = {
  banner: AtImageProps;
  ctaText: string;
  deeplink?: string;
  description: string;
  onPress?: () => void;
  testID?: string;
  title: string;
};
