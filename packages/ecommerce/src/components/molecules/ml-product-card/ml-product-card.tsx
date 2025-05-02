import {
  AtButton,
  AtTag,
  AtButtonVariants,
  AtImage,
  AtLink,
} from "@mono-repo-demo/atomic-library";
import { MlColorPicker, MlColorPickerType } from "..";
import { MlProductCardProps } from "./ml-product-card.types";
import { useMemo, useState } from "react";
import { tagClasses } from "./ml-product-card.variants";

export const MlProductCard = ({
  tagLabel,
  outOfStock = false,
  outOfStockLabel = "Out Of Stock",
  image,
  brand,
  name,
  price,
  description,
  originalPrice,
  colors,
  sizes,
  addToBasketLabel = "Add to Cart",
  addedToBasketLabel = "Added",
  goToProductPageLabel = "See More",
  addToBasketOnClick,
  loadingLabel = "Loading",
  link,
  className = "",
  dataTestId,
}: MlProductCardProps) => {
  const [addingToBasket, setAddingToBasket] = useState(false);
  const [addButtonLabel, setAddButtonLabel] = useState(addToBasketLabel);
  const [addedToBasketTimeoutId, setAddedToBasketTimeoutId] =
    useState<NodeJS.Timeout>();

  const sizesLength = sizes ? sizes.options.length : 0;

  const tagLabelMemo = useMemo(() => {
    if (outOfStock && outOfStockLabel) return outOfStockLabel;
    if (tagLabel) return tagLabel;
    return "";
  }, [tagLabel, outOfStock, outOfStockLabel]);

  const handleAddToBasket = async () => {
    setAddingToBasket(true);
    setAddButtonLabel(loadingLabel);

    const added = await addToBasketOnClick?.();

    setAddingToBasket(false);
    if (added) {
      setAddButtonLabel(addedToBasketLabel);
      if (addedToBasketTimeoutId) clearTimeout(addedToBasketTimeoutId);
      const id = setTimeout(() => {
        setAddButtonLabel(addToBasketLabel);
        setAddedToBasketTimeoutId(undefined);
      }, 4000);
      setAddedToBasketTimeoutId(id);
    } else setAddButtonLabel(addToBasketLabel);
  };

  return (
    <View
      className={`
        p-5 justify-between
        rounded-2xl bg-surface-primary
        border-[0.0313rem] border-secondary
        flex flex-col gap-5
        transition-all ${className}
        md:p-6 hover:ring-[0.09375rem] ring-stroke-secondary
      `}
      data-testid={
        dataTestId ??
        `product-card-${name.toLowerCase().split(/\s+/).join("-")}`
      }
      role="presentation"
    >
      <View className="relative">
        {!!tagLabelMemo && (
          <AtTag className={tagClasses({ outOfStock })} text={tagLabelMemo} />
        )}
        <AtLink {...link}>
          <AtImage
            {...image}
            alt={image.alt ?? `Image of ${name}`}
            className="aspect-square rounded-2xl object-cover"
          />
        </AtLink>
      </View>

      <View className="bg-surface-primary text-primary flex flex-col gap-3 text-xs md:text-lg rounded-b-xl">
        {brand && brand.href && brand.label ? (
          <AtLink {...brand} className="w-fit">
            <Text className="font-bold text-quaternary hover:underline">
              {brand.label}
            </Text>
          </AtLink>
        ) : (
          brand &&
          brand.label && (
            <Text className="font-bold text-quaternary">{brand.label}</Text>
          )
        )}

        <View className="flex flex-col gap-2">
          <View className="flex flex-row gap-3 justify-between">
            <AtLink
              {...link}
              dataTestId="product-name-link"
              className="truncate"
            >
              <Text
                className="font-bold text-lg truncate text-primary hover:underline"
                data-testid="product-name"
              >
                {name}
              </Text>
            </AtLink>

            <View
              className="justify-end flex flex-row gap-2"
              data-testid="price"
            >
              {originalPrice && (
                <Text
                  className="text-lgx line-through leading-6 decoration-1 text-quaternary font-light"
                  data-testid="original"
                  role="text"
                >
                  <Text className="sr-only text-ellipsis">
                    Original price:&nbsp;
                  </Text>
                  {originalPrice}
                </Text>
              )}

              <View
                className="font-bold text-lgx text-primary"
                data-testid="current"
                role="text"
              >
                <Text className="sr-only text-ellipsis">
                  Current price:&nbsp;
                </Text>
                {price}
              </View>
            </View>
          </View>

          {description && (
            <Text className="text-quaternary text-base leading-5 font-normal line-clamp-2">
              {description}
            </Text>
          )}
        </View>
      </View>

      {!!colors?.options?.length && (
        <MlColorPicker
          selected={colors.selected}
          iconLinkProps={link}
          type={MlColorPickerType.INLINE}
          maxInlineItems={4}
          options={colors.options}
          onClick={colors.onClick}
        />
      )}

      {addToBasketOnClick || (outOfStock && sizesLength === 0) ? (
        <AtButton
          onClick={handleAddToBasket}
          variant={AtButtonVariants.SECONDARY}
          dataTestId="product-card-add-to-cart"
          disabled={outOfStock}
          isLoading={addingToBasket}
          className="!h-12 xl:!h-14"
          aria-label="Add product to cart"
        >
          {addButtonLabel}
        </AtButton>
      ) : (
        <AtLink
          buttonStyleProps={{ variant: AtButtonVariants.SECONDARY }}
          {...link}
        >
          {goToProductPageLabel}
        </AtLink>
      )}
    </View>
  );
};
