import { AtLinkProps } from "@mono-repo-demo/atomic-library";
import { MlCardBasketProps } from "../../molecules";

export interface OrOrderSummaryProps {
  title?: string;
  totalPriceLabel?: string;
  orderLabelArray?: OrderLabel[];
  totalPrice: string;
  buttonProps?: Pick<AtLinkProps, "linkWrapper" | "label" | "href">;
  className?: string;
  dataTestId?: string;
  items?: MlCardBasketProps[];
  withCart?: boolean;
  totalItems?: number;
}

export interface SummaryItem {
  name: string;
  value: string;
  discountPercentage?: number | null;
  originalPrice?: string | null;
}

export interface OrderLabel {
  label: string;
  value: string;
  tooltipContent?: string;
  valueIndicatorColor?: "positive" | "negative" | "neutral";
}
