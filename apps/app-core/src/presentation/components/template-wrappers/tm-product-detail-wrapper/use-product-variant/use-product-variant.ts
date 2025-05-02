import {
  PRODUCT_VARIATIONS_KEY,
  Product,
  ProductVariant,
  ProductSearchResult,
} from "../../../types";
import { useMemo, useState } from "react";
import { getVariantColors } from "../../../../utils/product/get-variant-colors/get-variant-colors";
import { getVariantSizes } from "../../../../utils/product/get-variant-sizes/get-variant-sizes";
import { getAttributeProperties } from "../../../../utils/product/get-attribute-properties/get-attribute-properties";
import { useGlobalContext } from "../../../../context/global";
import { hasAttribute } from "../../../../utils/product/has-attribute/has-attribute";
import { getDependantSizes } from "../../../../utils/product/get-dependant-sizes/get-dependant-sizes";
import {
  GridColorPickerProps,
  MlSizeSelectorProps,
} from "@components-library/ecommerce";

export const useProductVariant = (
  product: Product | ProductSearchResult
): {
  selectedVariant?: ProductVariant;
  colors?: GridColorPickerProps;
  sizes?: MlSizeSelectorProps;
  selectedColor?: string;
  selectedSize?: string;
} => {
  const { colorPickerLabels } = useGlobalContext();

  const hasSizeAttribute = useMemo(
    () => hasAttribute(product, "size"),
    [product]
  );
  const hasColorAttribute = useMemo(
    () => hasAttribute(product, "color"),
    [product]
  );

  const [colorIndex, setColorIndex] = useState<number>(0);
  const colorVariations = useMemo(
    () =>
      hasColorAttribute
        ? getVariantColors(
            product,
            colorPickerLabels,
            hasSizeAttribute ? false : undefined
          )
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [sizeIndex, setSizeIndex] = useState<number>(0);
  const [sizeVariations, setSizeVariations] = useState<
    MlSizeSelectorProps["options"]
  >(() => {
    if (hasSizeAttribute && !hasColorAttribute) {
      // Product only with size variants
      const sizes = getVariantSizes(product);
      return sizes;
    } else if (hasColorAttribute && hasSizeAttribute) {
      // Color-size dependency
      const sizes = getDependantSizes(
        product,
        colorVariations?.[colorIndex]?.colorKey
      );
      return sizes;
    }
    return [];
  });

  const updateColorIndex = (newColorIndex: number) => {
    setColorIndex(newColorIndex);
    if (hasColorAttribute && hasSizeAttribute) {
      const sizes = getDependantSizes(
        product,
        colorVariations?.[newColorIndex]?.colorKey
      );
      setSizeVariations(sizes);
    }
  };

  const selectedVariant = useMemo(() => {
    let variant: ProductVariant | undefined;
    if (hasColorAttribute && !hasSizeAttribute) {
      // Product only with color variants
      const { colorKey } = colorVariations[colorIndex];

      variant = product?.variants?.find(
        (variant) =>
          getAttributeProperties(
            variant.attributes,
            PRODUCT_VARIATIONS_KEY.COLOR
          )?.colorKey === colorKey
      );
    } else if (!!hasSizeAttribute && !hasColorAttribute) {
      // Product only with size variants
      const { text: sizeName } = sizeVariations?.[sizeIndex] ?? {};

      variant = product?.variants?.find(
        (variant) =>
          getAttributeProperties(
            variant.attributes,
            PRODUCT_VARIATIONS_KEY.SIZE
          )?.sizeName === sizeName
      );
    } else if (!!hasSizeAttribute && !!hasColorAttribute) {
      // Product with both size and color variants
      const { colorKey } = colorVariations[colorIndex];
      const { text: sizeName } = sizeVariations?.[sizeIndex] ?? {};

      variant = product.variants?.find((variant) => {
        const hasSizeAttribute =
          getAttributeProperties(
            variant.attributes,
            PRODUCT_VARIATIONS_KEY.SIZE
          )?.sizeName === sizeName;
        const hasColorAttribute =
          getAttributeProperties(
            variant.attributes,
            PRODUCT_VARIATIONS_KEY.COLOR
          )?.colorKey === colorKey;

        return hasSizeAttribute && hasColorAttribute;
      });
    } else variant = product?.variants?.[0];

    return variant;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeVariations, product?.variants, colorIndex, sizeIndex]);

  return {
    selectedVariant,
    colors: colorVariations?.length
      ? {
          options: colorVariations,
          selected: colorVariations[colorIndex]?.colorKey,
          onClick: updateColorIndex,
        }
      : undefined,
    sizes: sizeVariations?.length
      ? {
          options: sizeVariations,
          selected: sizeVariations[sizeIndex]?.text,
          onClick: setSizeIndex,
        }
      : undefined,
    selectedColor: String(colorIndex),
    selectedSize: String(sizeIndex),
  };
};
