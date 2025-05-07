import React from "react";
import { View, Text } from "react-native";

import { TmProductDetailProps } from "./tm-product-detail.types";
import {
  AtLink,
  AtRating,
  AtRatingProps,
  MlBreadcrumb,
  MlImageInteractive,
  OrCarousel,
  OrImagesCarousel,
  Rating,
} from "@mono-repo-demo/atomic-library";
import { OrProductDetails } from "../../organisms";
import { useState } from "react";
import {
  imageInteractiveClasses,
  imageInteractiveContainerClasses,
} from "./tm-product-detail.variants";

export const TmProductDetail = ({
  productDetails,
  breadcrumb,
  carouselProps,
  productImages,
}: TmProductDetailProps) => {
  const { children: carouselChildren, ...restCarouselProps } =
    carouselProps ?? {};
  const { reviewsLink, product, onRatingChange } = productDetails;
  const [rating, setRating] = useState<Rating>(product.rating ?? 0);
  const handleRatingChange: AtRatingProps["onChange"] = ({
    selectedRating,
  }) => {
    setRating(selectedRating);
    onRatingChange?.(selectedRating);
  };
  return (
    <>
      <MlBreadcrumb {...breadcrumb} className="container py-4 md:py-6" />
      <View className="xl:py-12">
        <View className="xl:container flex flex-col xl:flex-row gap-x-12">
          <View className="max-xl:container flex flex-col xl:hidden gap-y-4 md:gap-y-5 py-4 md:py-6">
            {productDetails.product.brand && (
              <Text className="font-bold text-base text-neutral-500 uppercase">
                {productDetails.product.brand}
              </Text>
            )}
            <h1 className="font-medium text-xl md:text-2xl text-primary">
              {productDetails.product.name}
            </h1>
            <View className="flex gap-x-3">
              <AtRating initialRating={rating} onChange={handleRatingChange} />
              {reviewsLink?.href && (
                <AtLink
                  linkWrapper={reviewsLink.linkWrapper}
                  href={reviewsLink.href}
                  className="underline underline-offset-2 text-xs md:text-base"
                  label={`${product.reviewsCount ?? 0} ${
                    reviewsLink.label ?? "reviews"
                  }`}
                />
              )}
            </View>
          </View>

          <View className="max-xl:container mr-4 2xl:mr-0 hidden xl:grid grid-cols-2 gap-12 xl:max-h-280 2xl:max-h-none xl:overflow-y-auto 2xl:overflow-hidden at-scrollbar">
            {productImages.map((image, idx) => (
              <MlImageInteractive
                key={idx}
                image={image}
                className={imageInteractiveContainerClasses({
                  firstTwo: idx < 2,
                })}
                imageClassName={imageInteractiveClasses({ firstTwo: idx < 2 })}
                ariaLabel={`${product.name}-detail-image-${idx + 1}`}
              />
            ))}
          </View>

          <View className="block xl:hidden">
            <OrImagesCarousel
              images={productImages.map((image) => ({ image }))}
            />
          </View>

          <View className="max-xl:container py-8 md:py-10 xl:py-0 xl:min-w-105 2xl:min-w-120 xl:flex-1">
            <OrProductDetails
              {...productDetails}
              rating={rating}
              handleRatingChange={handleRatingChange}
            />
          </View>
        </View>
      </View>
      <OrCarousel
        {...restCarouselProps}
        className={`${restCarouselProps.className} container pr-0`}
        titleContainerClassName="container"
      >
        {carouselChildren}
      </OrCarousel>
    </>
  );
};
