import { ReactNode } from "react";
import { AtLinkProps } from "../../atoms";

export type OrCarouselProps = {
  title?: string;
  link?: AtLinkProps;
  dataTestId?: string;
  className?: string;
  wrapperClassName?: string;
  columnsDesktop?: number;
  children?: ReactNode[];
  titleContainerClassName?: string;
};
