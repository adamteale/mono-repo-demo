import { StyleProp, ViewStyle } from "react-native";

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
  title: string;
  variant?: AtButtonVariant;
};
