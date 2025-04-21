import { StyleProp, ViewStyle } from "react-native";
import { ThemeType } from "src/theme";

export enum AtButtonVariant {
  primary,
  secondary,
  cta,
}

export type AtButtonProps = {
  compact?: boolean;
  disabled?: boolean;
  onAction: () => void;
  style?: StyleProp<ViewStyle>;
  theme: ThemeType;
  title: string;
  variant?: AtButtonVariant;
};
