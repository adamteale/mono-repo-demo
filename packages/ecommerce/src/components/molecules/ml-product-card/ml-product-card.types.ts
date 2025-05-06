import { AtImageProps, AtLinkProps } from "@mono-repo-demo/atomic-library";
import { InlineColorPickerProps } from "../ml-color-picker";
import { MlSizeSelectorProps } from "../ml-size-selector";

export interface MlProductCardProps {
  /** Optional string that specifies the label shown when a product is added to the basket. */
  addedToBasketLabel?: string;

  /** Optional string that specifies the label for the button to add a product to the basket. */
  addToBasketLabel?: string;

  /** Optional function that returns a promise resolving to a boolean, triggered when the add to basket button is clicked. */
  addToBasketOnClick?(): Promise<boolean>;

  /** Optional object of type `AtLinkProps` representing the brand information with a label and a hyperlink. */
  brand?: AtLinkProps;

  /** Optional string for custom CSS class names to style the component. */
  className?: string;

  /** Optional object of type `InlineColorPickerProps` for handling product color variations. */
  colors?: InlineColorPickerProps;

  /** Optional string used for testing purposes to identify the component. */
  dataTestId?: string;

  /** Optional string providing a description of the product. */
  description?: string;

  /** Optional string for the label of the button/link to navigate to the product page. */
  goToProductPageLabel?: string;

  /** Object of type `AtImageProps` representing the product image, required. */
  image: AtImageProps;

  /** Object of type `AtLinkProps` representing the link to the product page, required. */
  link: AtLinkProps;

  /** Optional string shown while the product details are loading. */
  loadingLabel?: string;

  /** String representing the product name, required. */
  name: string;

  /** Optional string showing the original price of the product, useful for displaying discounts. */
  originalPrice?: string;

  /** Optional boolean indicating if the product is out of stock. */
  outOfStock?: boolean;

  /** Optional string shown when the product is out of stock. */
  outOfStockLabel?: string;

  /** String representing the current price of the product, required. */
  price: string;

  /** Optional string for any promotional text or offers related to the product. */
  promotion?: string;

  /** Optional object of type `MlSizeSelectorProps` for handling product size variations. */
  sizes?: MlSizeSelectorProps;

  /** Optional string for additional tags or labels like "New" or "Sale". */
  tagLabel?: string;
}
