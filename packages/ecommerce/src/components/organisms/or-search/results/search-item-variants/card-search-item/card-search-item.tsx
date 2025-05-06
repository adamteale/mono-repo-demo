import { useMemo } from "react";
import { CardSearchItemProps } from "./card-search-item.types";
import { AtImage, AtLink, AtTag } from "@mono-repo-demo/atomic-library";

export const CardSearchItem = ({
  link,
  name,
  shortDescription,
  price,
  originalPrice,
  discountPercentage,
  image,
  discountLabel = "% Off",
  className = "",
  onClick,
}: CardSearchItemProps) => {
  const hasDiscount = useMemo(
    () => !!discountPercentage && !!originalPrice,
    [discountPercentage, originalPrice]
  );

  return (
    <AtLink onClick={onClick} {...link}>
      <View
        className={`flex flex-row gap-4 min-h-max w-full p-3 border-[0.03125rem] border-secondary hover:ring-[0.0625rem] ring-stroke-secondary rounded-lg transition-all ${className}`}
        data-testid="result-info"
      >
        {/* Image */}
        {image && (
          <View className="w-[6.25rem] h-[6.25rem] min-w-[6.25rem] max-h-[6.25rem] relative">
            <AtImage
              className="h-full w-full rounded object-contain"
              {...image}
            />

            {/* Discount Tag */}
            {!!discountPercentage && (
              <AtTag
                className="absolute top-2 left-2 max-w-[5.25rem] md:!px-2 md:!py-1"
                textClassName="md:text-sm md:leading-[0.9375rem] line-clamp-1"
                text={`${discountPercentage}${discountLabel}`}
              />
            )}
          </View>
        )}

        {/* Information Container */}
        <View className="flex flex-col gap-y-2 w-full min-w-0 justify-center">
          {/* Title */}
          <View
            className="max-w-fit text-primary text-base font-normal leading-5"
            data-testid="result-name"
          >
            <Text className="line-clamp-1">{name}</Text>
          </View>

          {/* Description */}
          {!!shortDescription && (
            <Text
              className="font-normal text-quaternary text-xs leading-4 line-clamp-2"
              data-testid="result-description"
            >
              {shortDescription}
            </Text>
          )}

          {/* Prices Container */}
          <View className="flex flex-row items-center gap-2">
            {/* Actual Price */}
            {price && (
              <Text
                className="text-base font-bold text-primary"
                data-testid="result-price"
              >
                {price}
              </Text>
            )}

            {/* Strikethrough Price */}
            {hasDiscount && (
              <Text
                className="line-through text-base leading-5 font-light text-quaternary"
                data-testid="result-original-price"
              >
                {originalPrice}
              </Text>
            )}
          </View>
        </View>
      </View>
    </AtLink>
  );
};
