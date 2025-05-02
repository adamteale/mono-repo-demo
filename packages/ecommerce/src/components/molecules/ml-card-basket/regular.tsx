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
import { regularContainerClasses } from "./ml-card-basket.variants";

export const Regular = ({
  className,
  color,
  colorLabel,
  description,
  eyebrowHeadline,
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
}: MlCardBasketProps) => {
  const quantityValueHandler = (currentQuantity: number) => {
    if (onQuantityChange)
      onQuantityChange({
        quantity: currentQuantity,
      });
  };

  return (
    <View
      className={`${regularContainerClasses({
        showBottomBorder,
      })} ${className}`}
      data-testid="basket-item"
    >
      <View className="relative flex flex-col w-full gap-4 md:flex-row md:gap-6">
        <View className="relative flex flex-row items-start gap-3 md:w-64">
          {informativeMessage && (
            <AtTag
              className="absolute z-10 top-0 left-0 ml-2 mt-2 md:text-base md:ml-3 md:mt-3"
              text={informativeMessage}
            />
          )}

          {image && (
            <AtLink
              {...productLink}
              className="w-full md:w-[13.75rem] h-full md:h-[13.75rem]"
            >
              <AtImage
                className="h-[8.5rem] w-full object-contain md:h-full"
                src={image?.src}
                onErrorSrc={image?.onErrorSrc}
                alt={image?.alt ?? `Image of ${title}`}
              />
            </AtLink>
          )}
        </View>

        <View className="flex flex-col w-full md:py-2 gap-6 md:justify-between">
          <View className="flex flex-col gap-3">
            <View className="flex flex-row justify-between">
              {eyebrowHeadline && (
                <Text className="block font-bold text-quaternary text-sm md:text-base">
                  {eyebrowHeadline}
                </Text>
              )}
            </View>

            <View className="flex flex-col gap-2 w-fit">
              <AtLink className="text-lg md:text-lgx w-fit" {...productLink}>
                <Text className="block font-bold text-primary hover:underline line-clamp-2">
                  {title}
                </Text>
              </AtLink>

              {description && (
                <Text className="block text-quaternary text-base w-fit">
                  {description}
                </Text>
              )}
            </View>
          </View>

          <View className="flex flex-col gap-2 font-normal text-base w-fit">
            {size && sizeLabel && (
              <View
                className="flex flex-row gap-2 items-center leading-5 w-fit"
                role="text"
              >
                <Text className="font-medium">{sizeLabel}:</Text>
                <Text>{size}</Text>
              </View>
            )}

            {color && colorMappingClasses[color] && (
              <View
                className="flex flex-row gap-2 items-center leading-5 w-fit"
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
          </View>

          {showInputQuantity && (
            <View
              className="flex flex-row justify-between"
              data-testid="desktop-quantity"
            >
              <MlInputQuantity
                size={MlInputQuantitySize.LARGE}
                maxValue={stockAmount}
                onValueChange={quantityValueHandler}
                isInputDisabled={isQuantityInputDisabled}
                initialValue={initialInputValue}
              />

              <View className="flex flex-row gap-2 items-end text-lg md:text-lgx md:-mb-2">
                {originalPrice && (
                  <View
                    className="text-quaternary font-light line-through decoration-1"
                    role="text"
                  >
                    <Text className="sr-only text-ellipsis">
                      Original price:&nbsp;
                    </Text>
                    {originalPrice}
                  </View>
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
