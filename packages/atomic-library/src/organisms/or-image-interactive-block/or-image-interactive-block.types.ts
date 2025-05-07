import { ReactNode } from "react";
import { MlImageInteractiveProps } from "../../molecules";

export interface OrImageInteractiveBlockProps {
  subtitle: string;
  body: ReactNode;
  images: MlImageInteractiveProps[];
}
