import {
  AtLinkProps,
  MlDropdownProps,
  Rating,
} from "@mono-repo-demo/atomic-library";
import { GridColorPickerProps, MlSizeSelectorProps } from "../../molecules";

export interface OrProductDetailsProps {
  product: {
    id: string;
    name: string;
    brand?: string;
    price: string;
    originalPrice?: string;
    promotion?: string;
    rating?: Rating;
    stock: number;
    sku?: string;
    reviewsCount?: number;
  };
  colors?: {
    selectedOptionValue?: string;
    label?: string;
    colorPickerProps: GridColorPickerProps;
  };
  sizes?: {
    selectedOptionValue?: string;
    label?: string;
    sizeSelectorProps: MlSizeSelectorProps;
    sizeAndFitGuideLink?: Pick<
      AtLinkProps,
      "label" | "href" | "linkWrapper" | "onClick"
    >;
  };
  reviewsLink?: Pick<AtLinkProps, "href" | "label" | "linkWrapper">;
  quantityLabel?: string;
  dropdowns?: MlDropdownProps[];
  addToBasket: {
    defaultLabel?: string;
    addedLabel?: string;
    notifyMeLabel?: string;
    notifyMeOnClick?: () => void;
    onClick(productId: string, quantity: number): Promise<boolean>;
    onError?: () => void;
  };
  stockAvailableLabel?: string;
  outOfStockLabel?: string;
  noVariantsSelectedLabel?: string;
  onRatingChange?: (newRating: Rating) => void;
  className?: string;
  dataTestId?: string;
  handleRatingChange?: ({ selectedRating }: { selectedRating: Rating }) => void;
  rating?: Rating;
}
