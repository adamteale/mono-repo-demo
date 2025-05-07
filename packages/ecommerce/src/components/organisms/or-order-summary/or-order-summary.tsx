import React, { Fragment } from "react";

import { View, Text } from "react-native";

import { AtDivider } from "@mono-repo-demo/atomic-library";
import { OrOrderSummaryProps } from "./or-order-summary.types";
import { OrderInfo } from "./order-info";
import {
  cartItemListContainerClasses,
  containerClasses,
  itemListContainerClasses,
} from "./or-order-summary.variants";
import { MlCardBasket, MlCardBasketType } from "../../molecules";

export const OrOrderSummary = ({
  title = "Order Summary",
  totalPriceLabel = "Order Total",
  totalPrice,
  orderLabelArray,
  className = "",
  dataTestId = "or-order-summary",
  items,
  withCart = false,
  totalItems,
}: OrOrderSummaryProps) => {
  return (
    <View className={className} data-testid={dataTestId}>
      <View className={containerClasses({ withCart })}>
        <View className="space-y-3">
          <Text className="text-lgx md:text-xl font-bold text-primary">
            {title}
          </Text>

          {items && totalItems && items.length > 0 && (
            <Text className="text-lg leading-6 font-normal text-primary">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </Text>
          )}
        </View>

        <View className={itemListContainerClasses({ withCart })}>
          {withCart && items && items.length > 0 && (
            <View
              className={cartItemListContainerClasses({
                moreThanTwoItems: items.length > 2,
              })}
            >
              {items.map((item, index) => {
                return (
                  <View key={item.index}>
                    <Fragment key={`basket-card-${item.index}`}>
                      <MlCardBasket
                        {...item}
                        showInputQuantity={true}
                        className="bg-contain block"
                        content={MlCardBasketType.COMPACT}
                        showSku={true}
                        showBottomBorder={index !== items.length - 1}
                      />
                    </Fragment>
                  </View>
                );
              })}
            </View>
          )}

          {!withCart && items && items.length > 0 && (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={`summary-item-${item.title}`}>
                  <View className="flex flex-row justify-between text-lg leading-6 font-normal text-primary gap-x-3 whitespace-nowrap">
                    <View className="flex flex-row gap-1 overflow-hidden">
                      <Text className="overflow-hidden text-ellipsis">
                        {item.title}
                      </Text>
                      <Text className="text-tertiary">
                        {item.initialInputValue && item.initialInputValue > 1
                          ? `x${item.initialInputValue}`
                          : ""}
                      </Text>
                    </View>
                    <Text>{item.price}</Text>
                  </View>
                </li>
              ))}
            </ul>
          )}

          {items?.length && !withCart ? (
            <AtDivider className="block !border-original-300" />
          ) : null}

          <ul className="flex flex-col gap-y-3">
            {!!orderLabelArray &&
              orderLabelArray.map((orderLabel) => (
                <OrderInfo
                  key={`order-label-${orderLabel.label}`}
                  title={orderLabel.label}
                  tooltipContent={orderLabel.tooltipContent}
                  value={orderLabel.value}
                  valueIndicatorColor={orderLabel.valueIndicatorColor}
                />
              ))}
          </ul>

          <AtDivider className="!border-original-300" />

          <View className="flex justify-between text-lg leading-6 text-primary font-bold">
            <Text>{totalPriceLabel}</Text>
            <Text>{totalPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
