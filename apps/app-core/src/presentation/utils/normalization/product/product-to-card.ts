import { Product, ProductVariant, ProductSearchResult } from "../../../types";
import { AtLinkProps } from "@mono-repo-demo/atomic-library";
import {
  InlineColorPickerProps,
  MlProductCardProps,
  MlSizeSelectorProps,
} from "@components-library/ecommerce";
import { getProductUrl } from "../../services";
import Link from "next/link";
import { SLUG_KEY } from "../../slug-keys";
import qs from "qs";
import { normalizeBackendImage } from "../files/image";
import { getAttributeProperties } from "../../product/get-attribute-properties/get-attribute-properties";

export const normalizeProductToCard = ({
  product,
  variant,
  colors,
  sizes,
  link,
  addProductToBasket,
  labels: {
    outOfStock: outOfStockLabel = "Out Of Stock",
    addToBasket: addToBasketLabel = "Add to Cart",
    loading: loadingLabel = "Loading",
    goToProductPage: goToProductPageLabel = "See More",
  } = {},
  brandFilterKey,
  onBrandSelect,
}: {
  product: ProductSearchResult | Product;
  variant?: ProductVariant;
  addProductToBasket?: (
    productId: string,
    quantity: number,
    sku: string,
    variantId?: string
  ) => Promise<boolean>;
  colors?: InlineColorPickerProps;
  sizes?: MlSizeSelectorProps;
  link?: AtLinkProps;
  discountPromotionLabel?: string;
  labels?: {
    discountPromotion?: string;
    outOfStock?: string;
    addToBasket?: string;
    loading?: string;
    goToProductPage?: string;
  };
  brandFilterKey?: string;
  onBrandSelect?: (update: string) => void;
}): MlProductCardProps => {
  const productUrl = getProductUrl({ id: product.id, slug: product.slug });

  const outOfStock =
    !variant?.stock || variant.stock === 0 || !variant.price?.formatted;

  const brandHref =
    brandFilterKey && product.brand
      ? // Format due to how query url are built in Catalog page
        `/${SLUG_KEY.CATALOG}?${qs.stringify({
          [brandFilterKey]: [{ label: product.brand }],
        })}`
      : undefined;

  return {
    outOfStock: outOfStock,
    outOfStockLabel,
    ...(product.brand && {
      brand: {
        linkWrapper: Link,
        label: product.brand,
        href: brandHref,
        onClick: (e) => {
          if (brandHref && onBrandSelect) {
            // This is meant for the catalog state controller, which handles URL update, hence the `preventDefault` call
            e?.preventDefault();
            onBrandSelect(brandHref);
          }
        },
      },
    }),
    colors,
    description: product.description,
    sizes,
    addToBasketOnClick:
      addProductToBasket && !outOfStock
        ? () => addProductToBasket(product.id, 1, variant.sku ?? "", variant.id)
        : undefined,
    image: normalizeBackendImage(
      variant?.images[0] ??
        product.variants?.find(
          (variant) =>
            getAttributeProperties(variant.attributes, "color").colorKey ===
            colors?.selected
        )?.images?.[0] ??
        product.variants?.[0].images[0]
    ),
    link: {
      ...(!!link && { ...link }),
      href: productUrl,
    },
    originalPrice: variant?.originalPrice?.formatted,
    name: product.name,
    price: variant?.price?.formatted ?? "",
    addToBasketLabel,
    loadingLabel,
    goToProductPageLabel,
  };
};
