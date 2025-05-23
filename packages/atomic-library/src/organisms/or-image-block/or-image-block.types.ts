import { View } from "react-native";
import { ReactNode } from "react";
import { MlMediaProps } from "../../molecules";

export enum OrImageBlockLayoutVariants {
  SINGLE = "single",
  DOUBLE = "double",
  TRIPLE = "triple",
}

export interface OrImageBlockProps {
  title: string;
  images: MlMediaProps[];
  body: ReactNode;
  subtitle?: string;
  pretitle?: string;
  supportText?: string;
  isInverted?: boolean;
  isVertical?: boolean;
}
