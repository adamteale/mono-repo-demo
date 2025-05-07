import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import {
  AtButtonIconPosition,
  AtButtonProps,
  AtButtonVariants,
} from "./at-button.types";
import { AtButton } from "./at-button";

export const atButtonProps: AtButtonProps = {
  children: "Button Label",
  variant: AtButtonVariants.PRIMARY,
  icon: "left-icon",
  iconPosition: AtButtonIconPosition.LEFT,
};

describe("atoms/at-button", () => {
  it("Renders base button", () => {
    const { children, variant } = atButtonProps;
    const { getByText } = render(
      <AtButton variant={variant}>{children}</AtButton>
    );
    expect(AtButton).toBeTruthy();

    const label = getByText(String(children));
    expect(label).toBeInTheDocument();
  });

  it("Should display icon - (left-icon)", () => {
    const { children, icon, iconPosition, variant } = atButtonProps;
    const { container } = render(
      <AtButton
        dataTestId={icon}
        icon={icon}
        iconPosition={iconPosition}
        variant={variant}
      >
        {children}
      </AtButton>
    );
    const iconElement = container.querySelector("[data-testid='left-icon']");
    const dataAtribute = iconElement?.getAttribute("data-testid");

    expect(iconElement).toBeInTheDocument();
    expect(dataAtribute).toBe("left-icon");
  });
  it("Should renders with loading icon", () => {
    const { children, variant } = atButtonProps;
    const { container } = render(
      <AtButton isLoading variant={variant}>
        {children}
      </AtButton>
    );
    const loadingClass = "animate-spin";
    const iconElement = container.querySelector(`.${loadingClass}`);
    expect(iconElement).toBeInTheDocument();
  });
  it("Should disable when isLoading is true", () => {
    const { children, variant } = atButtonProps;
    const onClickMock = vi.fn();
    const { getByText } = render(
      <AtButton isLoading onClick={onClickMock} variant={variant}>
        {children}
      </AtButton>
    );
    const button = getByText(String(children)).closest("button");
    expect(button).toBeDisabled();
  });
  it("Should renders with weight font-bold property", () => {
    const { children, variant } = atButtonProps;
    const { getByText } = render(
      <AtButton variant={variant}>{children}</AtButton>
    );
    const button = getByText(String(children)).closest("button");
    expect(button).toHaveClass("font-bold");
  });
  it("Should handle click", () => {
    const { children, variant } = atButtonProps;
    const onClickMock = vi.fn();
    const { getByText } = render(
      <AtButton variant={variant} onClick={onClickMock}>
        {children}
      </AtButton>
    );
    const label = getByText(String(children));
    fireEvent.click(label);
    expect(onClickMock).toHaveBeenCalled();
  });
});
