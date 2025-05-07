import React from "react";

import { View } from "react-native";

import { FormEvent, useEffect, useState } from "react";
import {
  AtButton,
  AtButtonVariants,
  AtTextInput,
  BaseFilter,
  RangeOption,
  RangeVariant,
} from "@mono-repo-demo/atomic-library";
import { ListRangeFilterProps } from "./list-range-filter.types";
import {
  ListFilterWrapper,
  validListRangeValues,
} from "@mono-repo-demo/atomic-library/src/molecules/ml-filter-selector/utils";

const mapPriceFn = (option: RangeOption) => ({
  label: `$${option.min} - $${option.max}`,
  quantity: option.quantity,
  selected: option.selected,
  displayQuantity: option.rangeOrigin === RangeVariant.PRESET,
});

export const ListRangeFilter = ({
  listRangeVariant = RangeVariant.CUSTOM,
  minSearchPlaceholder = "Min",
  maxSearchPlaceholder = "Max",
  searchButtonLabel = "Filter",
  transformOption = mapPriceFn,
  options = [],
  onClick,
  ...wrapperProps
}: ListRangeFilterProps) => {
  const [{ min, max }, setSearchValue] = useState({ min: "", max: "" });
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (
      !!min &&
      !!max &&
      validListRangeValues.test(min) &&
      validListRangeValues.test(max) &&
      parseInt(min) <= parseInt(max)
    ) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [max, min]);

  let filteredList = options;
  if (listRangeVariant === RangeVariant.CUSTOM) {
    filteredList = filteredList.map((option: BaseFilter["options"]) => {
      if (option.rangeOrigin === RangeVariant.PRESET && option.selected) {
        return { ...option, rangeOrigin: RangeVariant.CUSTOM };
      }

      return option;
    });

    filteredList = filteredList.filter(
      (option: BaseFilter["options"]) =>
        option.rangeOrigin === RangeVariant.CUSTOM
    );
  }

  const handleEnableFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClick({
      min: Math.round(Number(min) * 100),
      max: Math.round(Number(max) * 100),
      quantity: 10,
      selected: true,
      rangeOrigin: RangeVariant.CUSTOM,
    });

    setSearchValue({ min: "", max: "" });
  };

  const transformedList = filteredList.map(transformOption);
  return (
    <ListFilterWrapper
      {...wrapperProps}
      onClick={(index) => onClick(filteredList[index])}
      options={transformedList}
      searchComponent={
        listRangeVariant === RangeVariant.CUSTOM ? (
          <form className="flex gap-6" onSubmit={handleEnableFilter}>
            <View className="flex gap-2">
              <AtTextInput
                type="text"
                inputMode="numeric"
                className="flex-1"
                value={min}
                showSuccessIcon={false}
                showClearButton={false}
                handleChange={(value) => {
                  setSearchValue((state) => ({ ...state, min: value }));
                }}
                onClearInputClick={() => {
                  setSearchValue((state) => ({ ...state, min: "" }));
                }}
                placeholder={minSearchPlaceholder}
              />

              <AtTextInput
                type="text"
                inputMode="numeric"
                className="flex-1"
                value={max}
                showSuccessIcon={false}
                showClearButton={false}
                handleChange={(value) => {
                  setSearchValue((state) => ({ ...state, max: value }));
                }}
                onClearInputClick={() => {
                  setSearchValue((state) => ({ ...state, max: "" }));
                }}
                placeholder={maxSearchPlaceholder}
              />
            </View>

            <AtButton
              // buttonType="submit"
              className="!h-12 flex-1"
              variant={AtButtonVariants.SECONDARY}
              disabled={submitDisabled}
            >
              {searchButtonLabel}
            </AtButton>
          </form>
        ) : null
      }
    />
  );
};
