import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MlRadioCard } from "./ml-radio-card";
import {
  defaultProps,
  checkedProps,
  disabledProps,
} from "./ml-radio-card.mock";

describe("molecules/ml-radio-card", () => {
  it("should render correctly with default props", () => {
    const { getByText, container } = render(<MlRadioCard {...defaultProps} />);

    expect(getByText(defaultProps.label!)).toBeInTheDocument();
    expect(container.querySelector(".border-white")).not.toBeNull();
    expect(container.querySelector(".cursor-not-allowed")).toBeNull();
  });

  describe("when checked", () => {
    it("should apply border-secondary class", () => {
      const { container } = render(<MlRadioCard {...checkedProps} />);

      expect(container.querySelector(".border-secondary")).not.toBeNull();
      expect(container.querySelector(".border-stone-50")).toBeNull();
    });
  });

  describe("when disabled", () => {
    it("should apply cursor-not-allowed and opacity-50 class", () => {
      const { getByText, container } = render(
        <MlRadioCard {...disabledProps} />
      );

      expect(container.firstChild).toHaveClass("cursor-not-allowed");
      expect(getByText(disabledProps.label!)).toHaveClass("opacity-50");
    });
  });
});
