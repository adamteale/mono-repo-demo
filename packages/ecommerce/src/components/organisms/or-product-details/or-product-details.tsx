import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AtButton,
  AtButtonVariants,
  AtDivider,
  AtIcon,
  AtLink,
  AtRating,
  AtTag,
  AtTooltipWrapper,
  MlDropdown,
} from "@mono-repo-demo/atomic-library";
import {
  MlColorPicker,
  MlColorPickerType,
  MlDropdownQuantity,
  MlSizeSelector,
} from "../../molecules";
import { OrProductDetailsProps } from "./or-product-details.types";

export const OrProductDetails = ({
  product,
  colors,
  sizes,
  quantityLabel = "Quantity",
  reviewsLink,
  dropdowns,
  addToBasket: {
    onClick: addProductToBasket,
    onError: addProductToBasketError,
    defaultLabel: addProductToBasketLabel = "Add to Cart",
    addedLabel: addedProductToBasketLabel = "Added",
    notifyMeLabel = "Notify me when available",
    notifyMeOnClick,
  },
  stockAvailableLabel = "available",
  noVariantsSelectedLabel = "Please select one option from each variation",
  outOfStockLabel = "Out Of Stock",
  className = "",
  dataTestId = "or-product-details",
  handleRatingChange,
  rating,
}: OrProductDetailsProps) => {
  const stock = product.stock ?? 0;

  const [quantity, setQuantity] = useState<number>(1);
  const quantityOptions = useMemo(
    () => new Array(stock).fill(0).map((_, index) => index + 1),
    [stock]
  );

  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [addedToBasketTimeoutId, setAddedToBasketTimeoutId] =
    useState<NodeJS.Timeout>();

  const hasVariants = colors?.colorPickerProps && sizes?.sizeSelectorProps;
  const hasVariantValues =
    colors?.selectedOptionValue && sizes?.selectedOptionValue;

  const getAddToBasketLabel = useCallback(
    () => (!stock ? notifyMeLabel : addProductToBasketLabel),
    [addProductToBasketLabel, notifyMeLabel, stock]
  );
  const [addToBasketLabel, setAddToBasketLabel] = useState(
    getAddToBasketLabel()
  );

  useEffect(() => {
    // When product is changed from parent component, label should be reset
    setAddToBasketLabel(getAddToBasketLabel());
  }, [getAddToBasketLabel]);

  const handleAddToBasketClick = async () => {
    if (hasVariants && !hasVariantValues) return;

    if (!stock) {
      notifyMeOnClick?.();
      return;
    }

    setIsAddingProduct(true);
    setAddToBasketLabel(addProductToBasketLabel);

    const itemAdded = await addProductToBasket(product.id, quantity);
    setIsAddingProduct(false);

    if (!itemAdded) addProductToBasketError?.();
    else {
      setAddToBasketLabel(addedProductToBasketLabel);
      if (addedToBasketTimeoutId) clearTimeout(addedToBasketTimeoutId);
      const id = setTimeout(() => {
        setAddToBasketLabel(addProductToBasketLabel);
        setAddedToBasketTimeoutId(undefined);
      }, 4000);
      setAddedToBasketTimeoutId(id);
    }
  };

  return (
    <View
      className={`bg-surface-primary ${className}`}
      data-testid={dataTestId}
    >
      <View className="flex flex-col gap-y-5 mb-6">
        {product.brand && (
          <Text className="hidden xl:block text-base text-neutral-500 font-bold uppercase">
            {product.brand}
          </Text>
        )}

        <h1 className="hidden xl:block text-2xl font-medium text-primary">
          {product.name}
        </h1>

        <View className="hidden xl:flex gap-x-4">
          <AtRating initialRating={rating} onChange={handleRatingChange} />
          {reviewsLink?.href && (
            <AtLink
              linkWrapper={reviewsLink.linkWrapper}
              href={reviewsLink.href}
              className="underline underline-offset-2 text-base"
              label={`${product.reviewsCount ?? 0} ${
                reviewsLink.label ?? "reviews"
              }`}
            />
          )}
        </View>

        {!stock && <AtTag text={outOfStockLabel} />}

        {/* Prices */}
        <View
          className="flex flex-col items-start gap-y-2"
          data-testid="product-price"
        >
          {!!product.originalPrice && (
            <Text className="text-lg md:text-lgx font-light text-neutral-500 line-through">
              {product.originalPrice}
            </Text>
          )}
          {!!product.price && (
            <Text className="text-xl md:text-2xl font-bold text-primary">
              {product.price}
            </Text>
          )}
        </View>

        {product.promotion && (
          <Text className="text-lg md:text-lgx text-primary font-normal">
            {product.promotion}
          </Text>
        )}
      </View>

      <AtDivider className="mb-12" />

      {colors?.colorPickerProps && (
        <View className="flex flex-col gap-y-4 mb-8 md:mb-10">
          <Text className="block text-primary text-lg md:text-lgx font-medium">
            {colors.label ?? "Select color"}
          </Text>
          <View className="py-4">
            <MlColorPicker
              {...colors.colorPickerProps}
              type={MlColorPickerType.GRID}
            />
          </View>
        </View>
      )}

      {sizes?.sizeSelectorProps && (
        <View className="flex flex-col gap-y-6 mb-8 md:mb-10">
          <Text className="block text-primary text-lg md:text-lgx font-medium">
            {sizes.label ?? "Select size"}
          </Text>
          <MlSizeSelector {...sizes.sizeSelectorProps} />
          <View className="flex items-center gap-x-2">
            {sizes.sizeAndFitGuideLink && (
              <>
                <AtIcon type="size" color="primary" />
                <AtLink
                  {...sizes.sizeAndFitGuideLink}
                  className="underline underline-offset-2"
                />
              </>
            )}
          </View>
        </View>
      )}

      <View className="flex flex-col gap-y-4 md:gap-y-6">
        <Text className="block text-primary text-lg md:text-lgx font-medium">
          {quantityLabel}
        </Text>
        <View className="flex items-center gap-x-4 mb-8 md:mb-10">
          <MlDropdownQuantity
            optionsList={quantityOptions}
            selectedOption={quantity}
            handleChange={(qtySelected) => setQuantity(qtySelected)}
            dataTestId="dropdown-quantity"
          />
          <Text className="text-primary text-base md:text-lg font-normal">{`(${stock} ${stockAvailableLabel})`}</Text>
        </View>
      </View>

      <AtTooltipWrapper
        useTooltip={hasVariants && !hasVariantValues}
        tooltip={{
          id: "or-product-details-tooltip",
          content: noVariantsSelectedLabel,
          alignment: "top",
          openOnClick: true,
        }}
      >
        <AtButton
          dataTestId="add-to-basket-btn"
          variant={AtButtonVariants.PRIMARY}
          onClick={handleAddToBasketClick}
          className="mb-12"
          isLoading={isAddingProduct}
        >
          {addToBasketLabel}
        </AtButton>
      </AtTooltipWrapper>

      {dropdowns?.map((dropdown, idx) => (
        <MlDropdown
          key={`${dropdown.title}-${idx}`}
          {...dropdown}
          divider={false}
        />
      ))}
    </View>
  );
};
