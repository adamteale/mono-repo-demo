import React from "react";
import { useMemo, useRef, useState } from "react";
import { View, Text } from "react-native";

import { AtIcon } from "@mono-repo-demo/atomic-library";
import { MlDropdownQuantityProps } from "./ml-dropdown-quantity.types";
import { useClickOutside } from "../../utils";
import {
  buttonClasses,
  optionButtonClasses,
  optionsContainerClasses,
} from "./ml-dropdown-quantity.variants";

export const MlDropdownQuantity = ({
  optionsList,
  selectedOption,
  handleChange,
  dataTestId = "dropdown-quantity",
  className = "",
}: MlDropdownQuantityProps) => {
  const isDisabled = useMemo(() => !optionsList.length, [optionsList]);
  const [optionsShown, setOptionsShown] = useState(false);

  const toggleDropdown = () => {
    setOptionsShown(!optionsShown);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setOptionsShown(false));

  const handleSelectOption = (selectedDropdownOption: number) => {
    handleChange(selectedDropdownOption);
    setOptionsShown(false);
  };

  return (
    <View
      className={`min-w-35 text-lg font-medium text-primary relative ${className}`}
      // ref={dropdownRef}
      data-testid={dataTestId}
    >
      <button
        type="button"
        className={buttonClasses({ optionsShown })}
        onClick={toggleDropdown}
        disabled={isDisabled}
        data-testid={"dropdown-quantity-btn"}
      >
        <Text>{selectedOption}</Text>

        <AtIcon
          type={optionsShown ? "angle-up" : "angle-down"}
          className="transition-transform"
          color={isDisabled ? "primary" : "currentColor"}
        />
      </button>

      <View
        className={optionsContainerClasses({
          optionsShown,
          moreThanFiveOptions: optionsList.length > 5,
        })}
        data-testid="dropdown-quantity-options"
      >
        {optionsList.map((dropdownOption: number, idx: number) => (
          <button
            key={`${dropdownOption}-qty-select-${idx}`}
            type="button"
            onClick={() => handleSelectOption(dropdownOption)}
            className={optionButtonClasses({
              moreThanFiveOptions: optionsList.length > 5,
            })}
            data-testid={`qty-${idx}`}
          >
            {dropdownOption}
          </button>
        ))}
      </View>
    </View>
  );
};
