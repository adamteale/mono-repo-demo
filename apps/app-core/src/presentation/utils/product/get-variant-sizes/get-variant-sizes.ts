import { MlSizeSelectorProps } from "@components-library/ecommerce";
import { getAttributeProperties } from "../get-attribute-properties/get-attribute-properties";
import {
  PRODUCT_VARIATIONS_KEY,
  Product,
  ProductSearchResult,
} from "../../../components/types";

export const getVariantSizes = (
  product: Product | ProductSearchResult,
  isSoldOut?: boolean // applied to every size
): MlSizeSelectorProps["options"] => {
  const sizesMap: Map<
    string,
    {
      isSoldOut: boolean;
    }
  > = new Map();
  product?.variants?.forEach((variant) => {
    if (variant.attributes) {
      const { sizeName } = getAttributeProperties(
        variant.attributes,
        PRODUCT_VARIATIONS_KEY.SIZE
      );

      if (!!sizeName && !sizesMap.has(sizeName))
        sizesMap.set(sizeName, {
          isSoldOut:
            typeof isSoldOut !== "undefined" ? isSoldOut : !variant.stock,
        });
    }
  });
  return [...sizesMap].map(([sizeName, { isSoldOut }]) => ({
    text: sizeName,
    isSoldOut,
  }));
};
