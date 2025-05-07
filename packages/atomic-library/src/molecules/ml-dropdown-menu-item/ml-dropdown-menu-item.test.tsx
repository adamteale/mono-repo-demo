import { describe, expect, it } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { MlDropDownMenuItem } from "./ml-dropdown-menu-item";
import { MlDropDownMenuItemProps } from "./ml-dropdown-menu-item.types";

const defaultProps: MlDropDownMenuItemProps = {
  dataTestId: "ml-dropdown-menu-item",
  label: "Men's",
  isLowerCase: true,
  items: [
    {
      label: "Shoes & Sneakers",
      linkProps: {
        href: "/catalog/Men?categories=Men",
      },
    },
    {
      label: "Classic Style",
      linkProps: {
        href: "/catalog/Men?categories=Men",
      },
    },
  ],
};

describe("molecule/ml-dropdown-menu-item", () => {
  describe("when the component is created", () => {
    it("should render correctly", () => {
      const { container } = render(<MlDropDownMenuItem {...defaultProps} />);
      expect(container).toBeTruthy();
    });

    it("should render the label", () => {
      const { getByText } = render(<MlDropDownMenuItem {...defaultProps} />);
      expect(getByText(defaultProps.label)).toBeInTheDocument();
    });

    it("should render the items", () => {
      const { getByText } = render(<MlDropDownMenuItem {...defaultProps} />);
      defaultProps.items.forEach((item) => {
        expect(getByText(item.label)).toBeInTheDocument();
      });
    });
  });

  describe("when a user clicks the menu item", () => {
    it("should toggle the visibility of the dropdown item list", () => {
      const { getByTestId } = render(<MlDropDownMenuItem {...defaultProps} />);
      const dropdownMenuItem = getByTestId("dropdown-menu-item-label");
      const itemList = getByTestId("dropdown-menu-item-box");

      // Assuming that the dropdown is initially hidden
      expect(itemList).toHaveClass("hidden");

      fireEvent.click(dropdownMenuItem);

      // After clicking, the dropdown should be visible
      expect(itemList).not.toHaveClass("hidden");

      fireEvent.click(dropdownMenuItem);

      // After clicking again, the dropdown should be hidden
      expect(itemList).toHaveClass("hidden");
    });
  });
});
