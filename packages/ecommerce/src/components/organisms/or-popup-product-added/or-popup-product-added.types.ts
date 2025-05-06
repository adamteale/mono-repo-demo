import { AtLinkProps } from "@mono-repo-demo/atomic-library";
import { WithImage } from "../../types";

export interface OrPopupProductAddedProps extends WithImage {
  dataTestId?: string;
  className?: string;
  productName: string;
  productVariants: {
    size?: string | number;
    color?: string | number;
  };
  addedToBasketLabel?: string;
  colorLabel?: string;
  quantityLabel?: string;
  buttonLabel?: string;
  price: string;
  quantity: number;
  viewBasketButtonProps?: Pick<AtLinkProps, "label" | "href" | "linkWrapper">;
}
