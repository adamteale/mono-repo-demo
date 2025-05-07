import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { OrPopUpBasket } from "../or-pop-up-basket";
import { orPopUpBasketPropsMock } from "./mocks/or-pop-up-basket.mock";

describe("organisms/or-pop-up-basket", () => {
  describe("when the component is created with base props and is visible", () => {
    it("should render correctly", () => {
      const testId = "pop-up-basket";
      const { getByText, getByTestId } = render(
        <OrPopUpBasket {...orPopUpBasketPropsMock} dataTestId={testId} />
      );
      const wrapper = getByTestId(testId);
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).not.toHaveClass("hidden");
      expect(getByText(orPopUpBasketPropsMock.title)).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.subtotalPriceLabel)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.subtotalPrice)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.itemsLabel as string)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.originalSubtotalPrice as string)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.leftButton?.label as string)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.rightButton?.label as string)
      ).toBeInTheDocument();
      orPopUpBasketPropsMock.items?.forEach((item) => {
        expect(getByText(item.title)).toBeInTheDocument();
      });
    });
  });

  describe("when the component is created with base props but is not visible", () => {
    it("should create html elements but with hidden class", () => {
      const testId = "pop-up-basket";
      const { getByText, getByTestId } = render(
        <OrPopUpBasket
          {...orPopUpBasketPropsMock}
          dataTestId={testId}
          isVisible={false}
        />
      );
      const wrapper = getByTestId(testId);
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass("hidden");
      expect(getByText(orPopUpBasketPropsMock.title)).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.subtotalPriceLabel)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.subtotalPrice)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.itemsLabel as string)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.originalSubtotalPrice as string)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.leftButton?.label as string)
      ).toBeInTheDocument();
      expect(
        getByText(orPopUpBasketPropsMock.rightButton?.label as string)
      ).toBeInTheDocument();
    });
  });
});
