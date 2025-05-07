import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import { MlMenuItem } from "./ml-menu-item";

const defaultProps = {
  label: "Menu Item",
  onClick: vi.fn(),
  isOpen: false,
};

const menuItemTestId = "ml-menu-item";
const menuItemIconTestId = "ml-menu-item-icon";

describe("molecule/ml-menu-item", () => {
  describe("when the component is created", () => {
    it("should render correctly", () => {
      const { container } = render(<MlMenuItem {...defaultProps} />);
      expect(container).toBeTruthy();
    });

    it("should render the label", () => {
      const { getByText } = render(<MlMenuItem {...defaultProps} />);
      expect(getByText(defaultProps.label)).toBeInTheDocument();
    });
  });

  describe("when a user clicks the menu item", () => {
    it("should call onClick when menu item is clicked", () => {
      const { getByTestId } = render(
        <MlMenuItem {...defaultProps} isLink={false} />
      );
      fireEvent.click(getByTestId(menuItemTestId));
      expect(defaultProps.onClick).toHaveBeenCalled();
    });
  });

  describe("when the menu item is not open", () => {
    it("should have the value of aria-expanded equal to false", () => {
      const { getByTestId } = render(
        <MlMenuItem {...defaultProps} isLink={false} showIcon={true} />
      );
      expect(getByTestId(menuItemTestId)).toHaveAttribute(
        "aria-expanded",
        "false"
      );
    });
  });

  describe("when the menu item is open", () => {
    it("should have the value of aria-expanded equal to true", () => {
      const { getByTestId } = render(
        <MlMenuItem
          {...defaultProps}
          isLink={false}
          isOpen={true}
          showIcon={true}
        />
      );
      expect(getByTestId(menuItemTestId)).toHaveAttribute(
        "aria-expanded",
        "true"
      );
    });
  });

  describe("when isLink is true", () => {
    it("should pass linkProps", () => {
      const linkProps = { href: "/test" };
      const { getByTestId } = render(
        <MlMenuItem {...defaultProps} isLink={true} linkProps={linkProps} />
      );
      const menuItem = getByTestId(menuItemTestId);
      expect(menuItem.getAttribute("href")).toBe(linkProps.href);
    });
  });

  describe("when isLink is false", () => {
    it("should not pass linkProps", () => {
      const { getByTestId } = render(
        <MlMenuItem {...defaultProps} isLink={false} />
      );
      const menuItem = getByTestId(menuItemTestId);
      expect(menuItem.getAttribute("href")).toBeNull();
    });
  });

  describe("when showIcon is true", () => {
    it("should render the icon", () => {
      const { queryByTestId } = render(
        <MlMenuItem {...defaultProps} showIcon={true} />
      );
      const iconElement = queryByTestId(menuItemIconTestId);
      expect(iconElement).toBeInTheDocument();
    });
  });

  describe("when showIcon is false", () => {
    it("should not render the icon", () => {
      const { queryByTestId } = render(
        <MlMenuItem {...defaultProps} showIcon={false} />
      );
      const iconElement = queryByTestId(menuItemIconTestId);
      expect(iconElement).not.toBeInTheDocument();
    });
  });

  describe("when className is passed", () => {
    it("should have the passed className", () => {
      const className = "test-class";
      const { getByTestId } = render(
        <MlMenuItem {...defaultProps} className={className} isLink={false} />
      );
      const menuItem = getByTestId(menuItemTestId);
      expect(menuItem.classList.contains(className)).toBe(true);
    });
  });
});
