import { AtImageProps } from "../../atoms/AtImage/types";
import { ThemeType } from "../../theme";

export type MlBannerProps = {
  banner: AtImageProps;
  ctaText: string;
  deeplink?: string;
  description: string;
  onPress?: () => void;
  testID?: string;
  theme: ThemeType;
  title: string;
};
