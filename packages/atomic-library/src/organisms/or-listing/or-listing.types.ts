import { View } from "react-native";
import { ReactNode } from "react";

export interface OrListingProps {
  children?: ReactNode;
  filter?: boolean;
  dataTestId?: string;
}
