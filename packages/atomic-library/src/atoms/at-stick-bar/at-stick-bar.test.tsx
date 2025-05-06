import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { AtStickBar } from "./at-stick-bar";

describe("atoms/at-stick-bar", () => {
  describe("when the component is created", () => {
    it("should render correctly", () => {
      const { container } = render(
        <AtStickBar text={<Text>FREE SHIPPING ON ORDERS OVER $99</Text>} />
      );

      expect(container).toBeTruthy();
    });
  });

  describe("when a user closes the component", () => {
    it("should call onClose when stickbar is clicked", () => {
      const onClose = vi.fn();

      const { getByTestId } = render(
        <AtStickBar
          text={<Text>FREE SHIPPING ON ORDERS OVER $99</Text>}
          onClose={onClose}
          hidden={false}
        />
      );
      fireEvent.click(getByTestId("close-icon"));
      expect(onClose).toHaveBeenCalled();
    });
  });
});
