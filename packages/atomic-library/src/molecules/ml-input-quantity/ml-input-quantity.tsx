import { View } from "react-native";
import { SyntheticEvent, useState } from "react";
import { MlInputQuantityProps } from "./ml-input-quantity.types";
import { AtIcon } from "../../atoms";
import { buttonClasses, inputClasses } from "./ml-input-quantity.variants";

export const MlInputQuantity = ({
  initialValue = 1,
  minValue = 1,
  maxValue = 99,
  onValueChange,
  isInputDisabled = false,
}: MlInputQuantityProps) => {
  const [quantity, setQuantity] = useState(initialValue);
  const parsedQuantity = Number(quantity);

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
    <View className="flex items-center justify-center w-fit">
      <button
        disabled={isDecrementButtonDisabled}
        onClick={handleQuantityDecrement}
        className={buttonClasses({
          disabled: isDecrementButtonDisabled,
          position: "left",
        })}
        data-testid="decrement"
        type="button"
      >
        <AtIcon type="less" color="primary" />
      </button>
      <input
        type="number"
        name="quantity"
        data-testid="current-quantity"
        value={quantity}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        disabled={isInputDisabled}
        className={inputClasses({ disabled: isInputDisabled })}
      />
      <button
        disabled={isIncrementButtonDisabled}
        onClick={handleQuantityIncrement}
        className={buttonClasses({
          disabled: isIncrementButtonDisabled,
          position: "right",
        })}
        data-testid="increment"
        type="button"
      >
        <AtIcon type="plus" color="primary" />
      </button>
    </View>
  );
};
