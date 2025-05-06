import { MlSizeSelectorProps } from "@components-library/ecommerce";
import { getVariantSizes } from "../get-variant-sizes/get-variant-sizes";
import { getAttributeProperties } from "../get-attribute-properties/get-attribute-properties";

import {
  PRODUCT_VARIATIONS_KEY,
  Product,
  ProductSearchResult,
} from "../../../components/types";

export const getDependantSizes = (
  product: Product | ProductSearchResult,
  colorKey: string
) => {
  const sizes: MlSizeSelectorProps["options"] = getVariantSizes(
    product,
    false
  ).map((size) => {
    const variant = product.variants?.find(
      (variant) =>
        getAttributeProperties(variant.attributes, PRODUCT_VARIATIONS_KEY.COLOR)
          .colorKey === colorKey &&
        getAttributeProperties(variant.attributes, PRODUCT_VARIATIONS_KEY.SIZE)
          ?.sizeName === size.text
    );

    if (!variant || !variant.stock) size.isSoldOut = true;

    return size;
  });
  return sizes;
};
