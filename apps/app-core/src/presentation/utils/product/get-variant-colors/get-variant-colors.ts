import { Color, colorMappingNames } from "@mono-repo-demo/atomic-library";

import { getAttributeProperties } from "../get-attribute-properties/get-attribute-properties";
import { MlColorPickerColorVariation } from "@components-library/ecommerce";
import {
  Product,
  PRODUCT_VARIATIONS_KEY,
  ProductSearchResult,
} from "../../../components/types";

export const getVariantColors = (
  product: Product | ProductSearchResult,
  colorMapping?: Record<Color, string>,
  isSoldOut?: boolean // applied to every color
): MlColorPickerColorVariation[] => {
  const colorMap: Map<
    string,
    {
      isSoldOut: boolean;
    }
  > = new Map();
  product?.variants?.forEach((variant) => {
    if (variant.attributes) {
      const { colorKey } = getAttributeProperties(
        variant.attributes,
        PRODUCT_VARIATIONS_KEY.COLOR
      );
      if (colorKey && !colorMap.has(colorKey))
        colorMap.set(colorKey, {
          isSoldOut:
            typeof isSoldOut !== "undefined" ? isSoldOut : !variant.stock,
        });
    }
  });
  return [...colorMap].map(([colorKey, { isSoldOut }]) => ({
    colorKey: colorKey as Color,
    colorName:
      colorMapping?.[colorKey as keyof typeof colorMapping] ??
      colorMappingNames[colorKey as keyof typeof colorMappingNames],
    isSoldOut,
  }));
};
