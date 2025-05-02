import {
  MlBreadcrumbProps,
  OrCarouselProps,
  Rating,
} from "@mono-repo-demo/atomic-library";
import {
  OrProductDetailsProps,
  TmProductDetail,
} from "@components-library/ecommerce";
import { useMemo } from "react";
import Link from "next/link";
import { useBasket } from "../../../context/basket/use-basket";
import { useGlobalContext } from "../../../context/global";
import { SLUG_KEY } from "../../../utils";
import { MlProductCardRenderer } from "../../component-renderers/renderers/ml-product-card.renderer";
import { TmProductDetailWrapperProps } from "./tm-product-detail-wrapper.types";
import { PLACEHOLDER_IMAGE_PATH } from "../../../utils/normalization/files/constants";
import { useProductVariant } from "./use-product-variant/use-product-variant";
import { getAttributeProperties } from "../../../utils/product/get-attribute-properties/get-attribute-properties";
import { ProductJsonLd } from "../../../utils/json-ld-scripts/product";
import { defaultHomeLabel } from "../../search-service";

const BASE_CATALOG_URL = `/${SLUG_KEY.CATALOG}`;

export const TmProductDetailWrapper = ({
  product,
  mayLikeProducts,
  breadcrumbCatalogLabel,
  labels: {
    description = "Description",
    materials = "Materials",
    care = "Care",
    discountPromotion = "% OFF",
    colorVariant = "Select color",
    sizeVariant = "Select size",
    addToCartDefault = "Add To Cart",
  } = {},
  reviewsLink: {
    href: reviewsHref = "#",
    label: reviewsLabel = "reviews",
    linkWrapper: reviewsLinkWrapper,
  } = {},
}: TmProductDetailWrapperProps) => {
  const { addProductToBasket } = useBasket();
  const { catalogLabels } = useGlobalContext();
  const breadcrumbFirstElementLabel =
    catalogLabels?.homeBreadcrumbLabel ?? defaultHomeLabel;

  const toImplement = () => {};

  const carouselProps: OrCarouselProps = {
    title: "You may also like",
    link: {
      linkWrapper: Link,
      href: BASE_CATALOG_URL,
      label: "See all",
      iconProps: { type: "arrow-right" },
      className: "text-primary",
    },
    children: mayLikeProducts?.map((prod, index) => (
      <MlProductCardRenderer product={prod} key={index} />
    )),
  };

  const breadcrumb = useMemo(() => {
    const breadcrumbProps: MlBreadcrumbProps = {
      links: [
        { label: breadcrumbFirstElementLabel, href: "/", linkWrapper: Link },
        {
          label: breadcrumbCatalogLabel,
          href: BASE_CATALOG_URL,
          linkWrapper: Link,
        },
      ],
    };
    if (
      product &&
      product.hierarchies &&
      Array.isArray(product.hierarchies) &&
      product.hierarchies.length > 0
    ) {
      // Select the longest hierarchy
      const lengths = product.hierarchies.map((h) => h.length);
      const hierarchy =
        product.hierarchies[lengths.indexOf(Math.max(...lengths))];

      breadcrumbProps.links.push(
        ...hierarchy.map((hierarchy) => {
          let url = "";

          if (!hierarchy.slug)
            url = `${BASE_CATALOG_URL}?category=${encodeURI(hierarchy.name)}`;
          else url = `${BASE_CATALOG_URL}/${hierarchy.slug}`;

          return {
            label: hierarchy.name,
            linkWrapper: Link,
            href: url,
          };
        })
      );
      breadcrumbProps.links.push({ label: product.name });
    }
    return breadcrumbProps;
  }, [
    product.name,
    breadcrumbFirstElementLabel,
    breadcrumbCatalogLabel,
    product.hierarchies,
  ]);

  const { selectedVariant, colors, sizes, selectedColor, selectedSize } =
    useProductVariant(product);

  const productData: OrProductDetailsProps["product"] = useMemo(
    () => ({
      id: product.id,
      name: product.name,
      price: selectedVariant?.price?.formatted ?? "",
      originalPrice: selectedVariant?.originalPrice?.formatted,
      promotion: selectedVariant?.discountInfo?.percentage
        ? `${selectedVariant?.discountInfo.percentage}${discountPromotion}`
        : "",
      brand: product.brand,
      sku: selectedVariant?.sku,
      stock: selectedVariant?.price ? selectedVariant.stock ?? 0 : 0,
      rating: Math.floor(product.rating?.average ?? 0) as Rating,
    }),
    [product, selectedVariant, discountPromotion]
  );

  const images = useMemo(() => {
    // Only change images if color selection has changed
    return (
      selectedVariant?.images ??
      product.variants.find(
        (variant) =>
          getAttributeProperties(variant.attributes, "color").colorKey ===
          colors?.selected
      )?.images ??
      product.variants[0].images
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor, product]);

  const dropdowns: OrProductDetailsProps["dropdowns"] = useMemo(() => {
    const dropdowns: OrProductDetailsProps["dropdowns"] = [];

    const careAttribute = getAttributeProperties(
      product.variants[0].attributes,
      "care"
    ).careInstructions;
    const materialsAttribute = getAttributeProperties(
      product.variants[0].attributes,
      "materials"
    ).materialInfo;

    if (product.description)
      dropdowns.push({
        title: description,
        children: (
          <View role="document">
            <Text>{product.description}</Text>
          </View>
        ),
      });

    if (materialsAttribute)
      dropdowns.push({
        title: materials,
        children: (
          <View role="document">
            <Text>{materialsAttribute}</Text>
          </View>
        ),
      });

    if (careAttribute)
      dropdowns.push({
        title: care,
        children: (
          <View role="document">
            <Text>{careAttribute}</Text>
          </View>
        ),
      });

    return dropdowns;
  }, [product.variants, product.description, description, care, materials]);

  return (
    <>
      <TmProductDetail
        productDetails={{
          product: productData,
          addToBasket: {
            // TODO: Improve error handling if addition fails
            defaultLabel: addToCartDefault,
            onClick: (productId, quantity) =>
              addProductToBasket(
                productId,
                quantity,
                selectedVariant?.sku ?? "",
                selectedVariant?.id
              ),
            notifyMeOnClick: toImplement,
          },
          dropdowns,
          onRatingChange: toImplement,
          sizes: sizes
            ? {
                selectedOptionValue: selectedSize,
                sizeSelectorProps: sizes,
                label: sizeVariant,
              }
            : undefined,
          colors: colors
            ? {
                selectedOptionValue: selectedColor,
                colorPickerProps: colors,
                label: colorVariant,
              }
            : undefined,
          reviewsLink: {
            href: reviewsHref,
            label: reviewsLabel,
            linkWrapper: reviewsLinkWrapper,
          },
        }}
        breadcrumb={breadcrumb}
        productImages={images.map((image) => ({
          ...image,
          onErrorSrc: PLACEHOLDER_IMAGE_PATH,
        }))}
        carouselProps={carouselProps}
      />
      <ProductJsonLd product={product} />
    </>
  );
};
