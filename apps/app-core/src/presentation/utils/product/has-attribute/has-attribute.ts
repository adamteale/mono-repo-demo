import {
  Product,
  ProductVariantKey,
  ProductSearchResult,
} from "../../../../types";
import { getAttributeProperties } from "../get-attribute-properties/get-attribute-properties";

export const hasAttribute = (
  product: Product | ProductSearchResult,
  attribute: ProductVariantKey
) => {
  return product?.variants?.every(
    (variant) =>
      Object.values(getAttributeProperties(variant.attributes, attribute))
        .length
  );
};
