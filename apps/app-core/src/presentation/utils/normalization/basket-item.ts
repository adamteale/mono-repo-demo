import { MlCardBasketProps } from "@components-library/ecommerce";
import { Color } from "@mono-repo-demo/atomic-library";
import { getAttributeProperties } from "../product/get-attribute-properties/get-attribute-properties";
import { getProductUrl } from "../services";
import Link from "next/link";
import { normalizeBackendImage } from "./files/image";

// !TODO: Add iconLink, onLinkSubmit and stockAmount properties
export const normalizeBasketItem = ({
  item,
  isDeleteButtonDisabled,
  isQuantityInputDisabled,
  onDeleteItem = () => {},
  onQuantityChange,
  showInputQuantity = true,
}: {
  item: BasketItem;
  isQuantityInputDisabled?: boolean;
  isDeleteButtonDisabled?: boolean;
  onDeleteItem?: () => void;
  onQuantityChange?: (params: { quantity: number }) => void;
  showInputQuantity?: boolean;
}): MlCardBasketProps => {
  const originalTotalPrice = item.price.amount * item.quantity;
  const formattedOriginalTotalPrice = "$" + originalTotalPrice.toFixed(2);

  const relevantOriginalPrice =
    item.totalPrice.amount !== originalTotalPrice
      ? formattedOriginalTotalPrice
      : undefined;

  return {
    productLink: {
      href: getProductUrl({ id: item.productId, slug: item.slug }),
      linkWrapper: Link,
    },
    sku: item.sku,
    title: item.name,
    image: normalizeBackendImage(item.image),
    originalPrice: relevantOriginalPrice,
    price: item.totalPrice.formatted,
    onDeleteItem,
    onQuantityChange,
    index: item.basketItemId,
    description: item.shortDescription,
    initialInputValue: item.quantity,
    eyebrowHeadline: item.brand,
    color: getAttributeProperties(item.attributes, PRODUCT_VARIATIONS_KEY.COLOR)
      ?.colorKey as Color,
    size: getAttributeProperties(item.attributes, PRODUCT_VARIATIONS_KEY.SIZE)
      ?.sizeName,
    isQuantityInputDisabled,
    isDeleteButtonDisabled,
    quantity: showInputQuantity ? undefined : item.quantity,
    showInputQuantity: showInputQuantity,
  };
};
