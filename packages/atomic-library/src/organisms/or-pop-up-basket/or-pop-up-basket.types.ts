import { View } from "react-native";
import { AtLinkProps } from "@mono-repo-demo/atomic-library";

export interface OrPopUpBasketProps {
  title: string;
  itemsLabel?: string;
  leftButton?: AtLinkProps;
  rightButton?: AtLinkProps;
  subtotalPriceLabel: string;
  originalSubtotalPrice?: string;
  subtotalPrice: string;
  // items?: MlCardBasketProps[];
  dataTestId?: string;
  isVisible?: boolean;
  className?: string;
  handleCloseBasket?: () => void;
}
