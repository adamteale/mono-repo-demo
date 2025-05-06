import {
  AtImageProps,
  AtLinkProps,
  Color,
} from "@mono-repo-demo/atomic-library";

export enum MlCardBasketType {
  COMPACT = "compact",
  REGULAR = "regular",
}

export interface MlCardBasketProps {
  /** Additional CSS class names for custom styling. */
  className?: string;

  /** The color theme of the card. */
  color?: Color;

  /** A label to display the color of the product. */
  colorLabel?: string;

  /** Specifies the layout style of the card, either regular or compact. */
  content?: MlCardBasketType;

  /** A brief description of the product. */
  description?: string;

  /** A small headline above the main title, often used for branding. */
  eyebrowHeadline?: string;

  /** The image properties for the product image. */
  image?: AtImageProps;

  /** A unique identifier for the card instance. */
  index: string;

  /** An additional message to provide more information about the product. */
  informativeMessage?: string;

  /** The initial value for the quantity input field. */
  initialInputValue?: number;

  /** Disables the delete button if set to true. */
  isDeleteButtonDisabled?: boolean;

  /** Disables the quantity input field if set to true. */
  isQuantityInputDisabled?: boolean;

  /** Indicates if the card is optimized for mobile view. */
  mobileCard?: boolean;

  /** Callback function triggered when the delete button is clicked. */
  onDeleteItem: () => void;

  /** Callback function triggered when the quantity changes. */
  onQuantityChange?: (props: { quantity: number }) => void;

  /** The original price of the product before any discounts. */
  originalPrice?: string;

  /** The current price of the product. */
  price: string;

  /** The link properties for the product link. */
  productLink: AtLinkProps;

  /** The current quantity of the product. */
  quantity?: number;

  /** Determines whether a bottom border should be displayed on the card. */
  showBottomBorder?: boolean;

  /** Determines whether the quantity input field should be displayed. */
  showInputQuantity?: boolean;

  /** Determines whether the SKU should be displayed. */
  showSku?: boolean;

  /** The size of the product. */
  size?: string;

  /** A label to display the size of the product. */
  sizeLabel?: string;

  /** The stock keeping unit identifier for the product. */
  sku?: string;

  /** A label to display alongside the SKU. */
  skuLabel?: string;

  /** The amount of stock available for the product. */
  stockAmount?: number;

  /** The main title of the product. */
  title: string;
}
