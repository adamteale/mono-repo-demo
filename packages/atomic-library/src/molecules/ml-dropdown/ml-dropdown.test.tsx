import { describe, expect, it } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { MlDropdown } from "./ml-dropdown";
import { MlDropdownProps } from "./ml-dropdown.types";

const defaultProps: MlDropdownProps = {
  title: "Test Dropdown",
  children: <Text>Lorem Ipsum</Text>,
};

describe("molecules/ml-dropdown", () => {
  describe("when the component is created", () => {
    it("should render correctly", () => {
      const { container } = render(<MlDropdown {...defaultProps} />);
      expect(container).toBeInTheDocument();
    });
  });

  describe("when user clicks on the component", () => {
    it("should show content", async () => {
      const { getByTestId } = render(<MlDropdown {...defaultProps} />);

      const summary = getByTestId("ml-dropdown-summary");
      const content = getByTestId("ml-dropdown-content");

      expect(content).not.toBeVisible();

      fireEvent.click(summary);

      expect(content).toBeVisible();
    });
  });
});
