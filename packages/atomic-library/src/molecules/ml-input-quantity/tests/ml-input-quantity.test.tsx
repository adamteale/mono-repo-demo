import { describe, expect, it } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { MlInputQuantity } from "../ml-input-quantity";

describe("molecules/ml-input-quantity", () => {
  describe("when the component is created with default props", () => {
    it("should render correctly", () => {
      const { getByTestId, getByDisplayValue } = render(
        <MlInputQuantity minValue={0} initialValue={0} />
      );

      const quantityInput = getByDisplayValue(0);
      expect(quantityInput).toBeInTheDocument();
      const incrementButton = getByTestId("increment");
      expect(incrementButton).toBeInTheDocument();
      const decrementButton = getByTestId("decrement");
      expect(decrementButton).toBeInTheDocument();
    });

    it("should change quantity when clicking buttons", () => {
      const { getAllByRole, queryByDisplayValue } = render(
        <MlInputQuantity minValue={0} initialValue={0} />
      );
      const [decrementButton, incrementButton] = getAllByRole("button");

      expect(queryByDisplayValue(0)).toBeInTheDocument();
      fireEvent.click(incrementButton);
      expect(queryByDisplayValue(1)).toBeInTheDocument();
      fireEvent.click(decrementButton);
      expect(queryByDisplayValue(0)).toBeInTheDocument();
    });
  });
});
