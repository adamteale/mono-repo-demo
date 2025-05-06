import React from "react";
import { View, Text } from "react-native";

import {
  AtIcon,
  AtImage,
  AtLink,
  AtTag,
  colorMappingClasses,
  colorMappingNames,
} from "@mono-repo-demo/atomic-library";
import { MlInputQuantity, MlInputQuantitySize } from "../ml-input-quantity";
import { MlCardBasketProps } from "./ml-card-basket.types";
import * as cva from "./ml-card-basket.variants";

export const Compact = ({
  sku,
  skuLabel,
  showSku,
  className,
  color,
  colorLabel,
  image,
  productLink,
  informativeMessage,
  initialInputValue,
  isDeleteButtonDisabled,
  isQuantityInputDisabled,
  onDeleteItem,
  onQuantityChange,
  originalPrice,
  price,
  showInputQuantity,
  size,
  sizeLabel,
  stockAmount,
  title,
  showBottomBorder,
  mobileCard,
}: MlCardBasketProps) => {
  const quantityValueHandler = (currentQuantity: number) => {
    if (onQuantityChange)
      onQuantityChange({
        quantity: currentQuantity,
      });
  };

  return (
    <View
      className={`${cva.compactContainerClasses({
        showBottomBorder,
        mobileCard,
      })} ${className}`}
      data-testid="basket-item"
    >
      <View className={cva.compactContentClasses({ mobileCard })}>
        <View className={cva.compactHeaderCardClasses({ mobileCard })}>
          {informativeMessage && (
            <AtTag
              className={cva.compactInformativeMessageClasses({ mobileCard })}
              text={informativeMessage}
            />
          )}

          {image && (
            <AtLink
              {...productLink}
              className={cva.compactImageLinkClasses({ mobileCard })}
            >
              <AtImage
                className={cva.compactImageClasses({ mobileCard })}
                src={image?.src}
                onErrorSrc={image?.onErrorSrc}
                alt={image?.alt ?? `Image of ${title}`}
              />
            </AtLink>
          )}
        </View>

        <View className={cva.compactBodyClasses({ mobileCard })}>
          <View className={cva.compactDetailsContainerClasses({ mobileCard })}>
            <View className="flex flex-col gap-3">
              <View className="flex flex-col gap-1">
                <AtLink
                  className={cva.compactTitleBaseClasses({ mobileCard })}
                  {...productLink}
                >
                  <Text className="block font-bold text-primary hover:underline line-clamp-2 text-ellipsis">
                    {title}
                  </Text>
                </AtLink>

                {showSku && sku && (
                  <Text className={cva.compactSkuClasses({ mobileCard })}>
                    <Text>{skuLabel}</Text>
                    <Text className="overflow-hidden text-ellipsis">{sku}</Text>
                  </Text>
                )}
              </View>
            </View>

            <View className={cva.compactMinorDetailsClasses({ mobileCard })}>
              {color && colorMappingClasses[color] && (
                <View
                  className={`flex flex-row gap-1 items-center w-fit ${
                    mobileCard === true ? "" : "md:leading-5"
                  }`}
                  role="text"
                >
                  <Text className="font-medium">{colorLabel}:</Text>
                  <Text>{colorMappingNames[color]}</Text>
                  <View
                    className={`flex h-4 w-4 items-center rounded-full ${colorMappingClasses[color]}`}
                    aria-hidden="true"
                  />
                </View>
              )}

              {size && sizeLabel && (
                <View
                  className="flex flex-row gap-1 items-center md:leading-5 w-fit"
                  role="text"
                >
                  <Text className="font-medium">{sizeLabel}:</Text>
                  <Text>{size}</Text>
                </View>
              )}
            </View>

            <View className={cva.compactPriceContainerClasses({ mobileCard })}>
              {originalPrice && (
                <Text
                  className={cva.compactOriginalPriceClasses({ mobileCard })}
                  role="text"
                >
                  <Text className="sr-only text-ellipsis">
                    Original price:&nbsp;
                  </Text>
                  {originalPrice}
                </Text>
              )}

              <View className="font-bold" role="text">
                <Text className="sr-only text-ellipsis">
                  Current price:&nbsp;
                </Text>
                {price}
              </View>
            </View>

            {showInputQuantity && (
              <View
                className={`flex flex-row items-end justify-between`}
                data-testid="desktop-quantity"
              >
                <MlInputQuantity
                  size={MlInputQuantitySize.SMALL}
                  maxValue={stockAmount}
                  onValueChange={quantityValueHandler}
                  isInputDisabled={isQuantityInputDisabled}
                  initialValue={initialInputValue}
                />

                <View
                  className={cva.compactOriginalPrinceQuantityClasses({
                    mobileCard,
                  })}
                >
                  {originalPrice && (
                    <Text
                      className="text-quaternary line-through decoration-1 text-sm font-light"
                      role="text"
                    >
                      <Text className="sr-only text-ellipsis">
                        Original price:&nbsp;
                      </Text>
                      {originalPrice}
                    </Text>
                  )}

                  <View className="font-bold" role="text">
                    <Text className="sr-only text-ellipsis">
                      Current price:&nbsp;
                    </Text>
                    {price}
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>

        <button
          className="absolute top-0 right-0"
          onClick={onDeleteItem}
          data-testid="delete-item-button"
          disabled={isDeleteButtonDisabled}
          aria-label="Delete item"
        >
          <AtIcon type="cancel" color="primary" ariaHidden="true" />
        </button>
      </View>
    </View>
  );
};
