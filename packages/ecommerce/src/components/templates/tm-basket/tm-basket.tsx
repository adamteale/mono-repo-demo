import React from "react";
import { View, Text } from "react-native";

import {
  AtButtonVariants,
  AtLink,
  OrCarousel,
} from "@mono-repo-demo/atomic-library";
import { MlCardBasket } from "../../molecules";
import { OrOrderSummary } from "../../organisms";
import { TmBasketProps } from "./tm-basket.types";

export const TmBasket = ({
  basketItemsLabels: {
    title = "Your cart",
    individualItemLabel = "item",
    multipleItemsLabel = "items",
  } = {},
  emptyBasketLabels: {
    title: emptyBasketTitle = `Your bag it's empty.`,
    subtitle:
      emptyBasketSubtitle = "Once you add items to your cart, it will appear here",
    buttonProps: emptyBasketButtonProps,
  } = {},
  orderSummaryProps,
  items,
  totalItems,
  carouselProps = {},
}: TmBasketProps) => {
  const { children: carouselChildren, ...restCarouselProps } = carouselProps;

  return (
    <View
      className="container flex flex-col gap-8 md:gap-10 xl:gap-12 py-8 md:py-10 xl:py-12"
      data-testid="basket-container"
    >
      <View className="flex flex-col gap-3">
        <h1 className="text-primary font-bold text-xl leading-7 xl:text-2xl xl:leading-10">
          {title}
        </h1>

        <Text
          className="text-primary font-normal text-lgx leading-6 tracking-0.1 xl:text-xl xl:leading-7"
          data-testid="total-items-summary"
        >
          {`${totalItems ?? "0"} ${
            totalItems === 1 ? individualItemLabel : multipleItemsLabel
          }`}
        </Text>
      </View>

      {!!totalItems ? (
        <View className="flex flex-col xl:flex-row gap-8 md:gap-10 xl:gap-12">
          <View className="flex flex-col w-full" data-testid="basket-item-list">
            {items?.map((item, index) => {
              return (
                <View key={item.index}>
                  <MlCardBasket
                    showBottomBorder={index !== items.length - 1}
                    {...item}
                  />
                </View>
              );
            })}
          </View>

          {orderSummaryProps && (
            <View
              className="flex flex-col gap-10 xl:gap-8 w-full xl:max-w-[calc(3rem+(100vw-31rem)/3)] 2xl:max-w-[calc(12rem+5*(100vw-49rem)/12)]"
              data-testid="order-summary"
            >
              <OrOrderSummary
                items={items}
                totalItems={totalItems}
                {...orderSummaryProps}
              />

              <AtLink
                className="h-12 md:h-14"
                buttonStyleProps={{ variant: AtButtonVariants.PRIMARY }}
                dataTestId="checkout-btn"
                {...orderSummaryProps.buttonProps}
              />
            </View>
          )}
        </View>
      ) : (
        <View className="flex flex-col justify-center items-center w-full px-6 py-4 md:px-32 md:py-16">
          <View className="text-primary text-center" data-testid="title">
            <Text className="mb-2 md:mb-4 text-xl md:text-2xl font-bold text-primary">
              {emptyBasketTitle}
            </Text>
            <Text className="text-base md:text-lg" data-testid="subtitle">
              {emptyBasketSubtitle}
            </Text>
          </View>

          {emptyBasketButtonProps?.label && (
            <AtLink
              className="w-max mt-5 md:mt-6 px-6 py-4"
              buttonStyleProps={{ variant: AtButtonVariants.PRIMARY }}
              {...emptyBasketButtonProps}
            />
          )}
        </View>
      )}

      {carouselProps && (
        <OrCarousel
          {...restCarouselProps}
          className={`${restCarouselProps.className}`}
          wrapperClassName={"py-20 md:py-20"} //Thtese classes overtwrite the ones from the component but UI shows it like this
        >
          {carouselChildren}
        </OrCarousel>
      )}
    </View>
  );
};
