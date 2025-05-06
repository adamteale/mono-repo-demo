import type { PropsWithChildren } from "react";
import type { StyleProp, ViewStyle } from "react-native";

import { AtButtonProps } from "../../atoms";

export type OrSectionProps = PropsWithChildren & {
  /** Button that appears on the top right, is optional */
  action?: AtButtonProps;

  /** Header spacing on the sides, is optional */
  headerPaddingHorizontal?: number;

  /** Internal container styles */
  innerStyle?: StyleProp<ViewStyle>;

  /** Test identifier */
  testID?: string;

  /** This is the text that appears at the top of the section */
  title?: string;
};

export type OrSectionHeaderProps = {
  action?: AtButtonProps;

  /** Header spacing on the sides, is optional */
  headerPaddingHorizontal?: number;

  /** Test identifier */
  testID?: string;

  /** This is the text that appears at the top of the section */
  title?: string;
};
