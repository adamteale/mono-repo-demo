import React from "react";
import { View, Text } from "react-native";

import {
  AtButtonSize,
  AtButtonVariants,
  AtDivider,
  AtImage,
  AtLink,
  Color,
} from "@mono-repo-demo/atomic-library";
import { OrPopupProductAddedProps } from "./or-popup-product-added.types";
import { colorDotClasses } from "./or-popup-product-added.variants";

export const OrPopupProductAdded = ({
  productName,
  productVariants,
  price,
  image,
  quantity,
  addedToBasketLabel = "Product added to your cart",
  colorLabel = "Color:",
  quantityLabel = "Quantity:",
  dataTestId = "or-popup-product-added",
  className = "",
  viewBasketButtonProps,
}: OrPopupProductAddedProps) => {
  return (
    <View data-testid={dataTestId} className={`${className}`}>
      <View className="relative h-36 w-full max-w-[20.625rem] md:max-w-[34.375rem] p-2 md:p-3 flex bg-white shadow-popup rounded-lg">
        {image && (
          <View className="w-30 h-30 relative flex-shrink-0 mr-3">
            <AtImage className="object-cover h-full w-full" {...image} />
          </View>
        )}
        <View className="hidden md:flex flex-col w-48 justify-between p-2">
          <View className="flex text-primary justify-between">
            <Text className="font-medium truncate">{productName}</Text>
            <Text className="font-medium text-lg md:pl-1 lg:pl-2">{price}</Text>
          </View>
          <View className="flex flex-col gap-y-0.5 lg:gap-y-1">
            {productVariants && Object.keys(productVariants).length > 0
              ? Object.keys(productVariants)
                  .map((variantKey, index) => {
                    const key = variantKey as keyof typeof productVariants;
                    if (!productVariants[key]) return null;
                    if (key === "color") {
                      const colorKey = productVariants[key] as Color;
                      return (
                        <View className="flex items-center" key={key}>
                          <Text
                            key={`color-${index}`}
                            className="font-medium mr-1 text-sm text-primary leading-4"
                          >
                            {colorLabel}
                          </Text>
                          <View className={colorDotClasses({ colorKey })} />
                        </View>
                      );
                    }
                    return (
                      <View
                        className="flex flex-row text-sm text-primary leading-4 capitalize"
                        key={key}
                      >
                        <Text className="font-medium mr-1">{`${variantKey}:`}</Text>
                        <Text>{productVariants[key]}</Text>
                      </View>
                    );
                  })
                  .filter(Boolean)
              : null}
            <View className="flex flex-row text-sm text-primary leading-4">
              <Text className="font-medium mr-1">{quantityLabel}</Text>
              <Text>{quantity}</Text>
            </View>
          </View>
        </View>
        <AtDivider className="flex h-[calc(100%_-_1rem)] border-l border-secondary-light mx-4 py-2 self-center" />
        <View className="flex flex-col w-44 md:w-48 py-2 md:px-2 justify-between">
          <Text className="font-medium leading-4 text-base text-primary text-center">
            {addedToBasketLabel}
          </Text>
          <AtLink
            buttonStyleProps={{
              variant: AtButtonVariants.PRIMARY,
              size: AtButtonSize.SMALL,
            }}
            {...viewBasketButtonProps}
          />
        </View>
      </View>
    </View>
  );
};
