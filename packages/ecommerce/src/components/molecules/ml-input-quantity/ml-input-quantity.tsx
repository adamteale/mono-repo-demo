import React, { SyntheticEvent, useEffect, useState } from "react";
import { View } from "react-native";

import { MlInputQuantityProps } from "./ml-input-quantity.types";
import { AtIcon } from "@mono-repo-demo/atomic-library";
import { buttonClasses, inputClasses } from "./ml-input-quantity.variants";

export const MlInputQuantity = ({
  initialValue = 1,
  minValue = 1,
  maxValue = 99,
  onValueChange,
  isInputDisabled = false,
  size,
}: MlInputQuantityProps) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(initialValue);
  const parsedQuantity = Number(quantity);

  useEffect(() => {
    if (quantity !== initialValue) {
      setQuantity(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);

  const callOnValueChange = (value: number) => {
    if (onValueChange) {
      onValueChange(value);
    }
  };

  const handleInputBlur = () => {
    if (quantity === "") {
      callOnValueChange(minValue);
      setQuantity(minValue);
    }
  };

  const handleQuantityIncrement = () => {
    if (parsedQuantity < maxValue) {
      setQuantity((prevState) => {
        const newState = prevState !== "" ? prevState + 1 : 0;
        if (prevState !== newState) {
          callOnValueChange(newState);
          return newState;
        }
        return prevState;
      });
    }
  };

  const handleQuantityDecrement = () => {
    if (parsedQuantity > minValue) {
      setQuantity((prevState) => {
        const newState = prevState !== "" ? prevState - 1 : 0;
        if (prevState !== newState) {
          callOnValueChange(newState);
          return newState;
        }
        return prevState;
      });
    }
  };

  const handleInputChange = ({
    currentTarget,
  }: SyntheticEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    if (value === "") {
      setQuantity("");
      return;
    }
    if (Number(value) >= maxValue) {
      callOnValueChange(maxValue);
      setQuantity(maxValue);
    }
    if (Number(value) <= minValue) {
      callOnValueChange(minValue);
      setQuantity(minValue);
    }
    if (Number(value) < maxValue && Number(value) > minValue) {
      callOnValueChange(Number(value));
      setQuantity(Number(value));
    }
  };

  const isDecrementButtonDisabled =
    parsedQuantity <= minValue || isInputDisabled;
  const isIncrementButtonDisabled =
    parsedQuantity >= maxValue || isInputDisabled;

  return (
    <View className="flex items-center justify-center">
      <button
        disabled={isDecrementButtonDisabled}
        onClick={handleQuantityDecrement}
        onMouseDown={() => setActiveButton("decrement")}
        onMouseUp={() => setActiveButton(null)}
        className={`${buttonClasses({
          disabled: isDecrementButtonDisabled,
          position: "left",
          size,
        })}`}
        data-testid="decrement"
        type="button"
        aria-label="Decrease quantity"
      >
        <AtIcon
          size={24}
          type="less"
          color={activeButton === "decrement" ? "active" : "primary"}
          ariaHidden="true"
        />
      </button>

      <input
        type="number"
        name="quantity"
        data-testid="current-quantity"
        value={quantity}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        disabled={isInputDisabled}
        className={` ${inputClasses({ disabled: isInputDisabled, size })}`}
      />

      <button
        disabled={isIncrementButtonDisabled}
        onClick={handleQuantityIncrement}
        onMouseDown={() => setActiveButton("increment")}
        onMouseUp={() => setActiveButton(null)}
        className={`${buttonClasses({
          disabled: isIncrementButtonDisabled,
          position: "right",
          size,
        })}`}
        data-testid="increment"
        type="button"
        aria-label="Increase quantity"
      >
        <AtIcon
          size={24}
          type="plus"
          color={activeButton === "increment" ? "active" : "primary"}
          ariaHidden="true"
        />
      </button>
    </View>
  );
};
