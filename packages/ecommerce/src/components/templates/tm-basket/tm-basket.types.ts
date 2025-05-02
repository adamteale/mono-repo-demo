import { AtLinkProps, OrCarouselProps } from "@mono-repo-demo/atomic-library";
import { MlCardBasketProps } from "../../molecules";
import { OrOrderSummaryProps } from "../../organisms";

export interface TmBasketProps {
  basketItemsLabels?: {
    title?: string;
    individualItemLabel?: string;
    multipleItemsLabel?: string;
  };
  emptyBasketLabels?: {
    title?: string;
    subtitle?: string;
    buttonProps?: Pick<AtLinkProps, "linkWrapper" | "label" | "href">;
  };
  orderSummaryProps?: OrOrderSummaryProps;
  carouselProps?: OrCarouselProps;
  items?: MlCardBasketProps[];
  totalItems?: number;
}
