import React, { Fragment } from "react";
import { View, Text } from "react-native";

import {
  AtButtonVariants,
  AtDivider,
  AtLink,
} from "@mono-repo-demo/atomic-library";
import { OrPopUpBasketProps } from "./or-pop-up-basket.types";
import {
  basketContainerClasses,
  itemsContainerClasses,
} from "./or-pop-up-basket.variants";
import { MlCardBasket, MlCardBasketType } from "../../molecules";

export const OrPopUpBasket = ({
  dataTestId = "",
  items,
  leftButton,
  originalSubtotalPrice,
  rightButton,
  itemsLabel,
  subtotalPrice,
  title,
  subtotalPriceLabel,
  isVisible = true,
  className = "",
  handleCloseBasket,
}: OrPopUpBasketProps) => {
  return (
    <View
      className={`${basketContainerClasses({
        visible: isVisible,
      })} ${className}`}
      data-testid={dataTestId}
    >
      {/* Header */}
      <View className="flex flex-row gap-2 items-center">
        <h4 className="text-left text-primary text-xl font-medium mr-2">
          {title}
        </h4>
        {itemsLabel && <Text className="text-primary">{itemsLabel}</Text>}
      </View>

      {items && items.length > 0 && <AtDivider className="my-4" />}

      {/* Items */}
      {items && items.length > 0 && (
        <View
          className={itemsContainerClasses({ multipleItems: items.length > 1 })}
        >
          {items.map((item, index) => {
            return (
              <Fragment key={`basket-card-${item.index}`}>
                <View className="mr-4">
                  <MlCardBasket
                    {...item}
                    showInputQuantity={true}
                    className="bg-contain block"
                    content={MlCardBasketType.COMPACT}
                    mobileCard={true}
                    showBottomBorder={index !== items.length - 1}
                  />
                </View>
              </Fragment>
            );
          })}
        </View>
      )}

      <AtDivider className="my-4" />

      {/* Buttons */}
      <View>
        <View className="flex justify-between mb-4">
          <h5 className="font-medium text-primary">{subtotalPriceLabel} </h5>
          <View className="text-primary text-sm sm:text-lg flex flex-row gap-1">
            {originalSubtotalPrice && (
              <Text className="line-through text-neutral-500">
                {originalSubtotalPrice}
              </Text>
            )}
            <Text className="font-bold" data-testid="sub-total-price">
              {subtotalPrice}
            </Text>
          </View>
        </View>
        {(leftButton || rightButton) && (
          <View className="grid grid-cols-2 gap-x-3 items-center justify-center">
            {leftButton && (
              <AtLink
                buttonStyleProps={{ variant: AtButtonVariants.SECONDARY }}
                onClick={handleCloseBasket}
                {...leftButton}
                className="!h-12"
              />
            )}
            {rightButton && (
              <AtLink
                buttonStyleProps={{ variant: AtButtonVariants.PRIMARY }}
                onClick={handleCloseBasket}
                {...rightButton}
                className="!h-12"
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};
