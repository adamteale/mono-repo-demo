import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AtTextInput } from "./at-text-input";

describe("atoms/at-text-input", () => {
  describe("when the component is mounted", () => {
    it("should render correctly", () => {
      const { container, queryByTestId } = render(<AtTextInput />);
      expect(container).toBeTruthy();
      expect(container).toBeInTheDocument();
      expect(queryByTestId("clear-button")).not.toBeInTheDocument();
    });
  });

  describe("when a user types something", () => {
    it("should show up the clear icon", async () => {
      const user = userEvent.setup();
      const { getByTestId, queryByTestId } = render(
        <AtTextInput dataTestId="input" value="abc" onChange={() => {}} />
      );

      const input = getByTestId("input");
      expect(input).toHaveValue("abc");

      await user.tab();

      const clearButton = queryByTestId("clear-button");
      expect(clearButton).toBeInTheDocument();
    });
  });

  describe("when input has value and the user clicks on the clear button", () => {
    it("should call onClearInputClick", async () => {
      const user = userEvent.setup();

      const onClearInputClick = vi.fn();
      const { getByTestId } = render(
        <AtTextInput
          dataTestId="input"
          value="abc"
          onClearInputClick={onClearInputClick}
          onChange={() => {}}
        />
      );
      const inputWrapper = getByTestId("input-wrapper");

      await user.tab();
      const clearButton = getByTestId("clear-button");

      await userEvent.click(clearButton);

      expect(onClearInputClick).toHaveBeenCalledOnce();
      expect(inputWrapper).not.toHaveFocus();
    });
  });

  describe("when icon is in props", () => {
    it("should appear by default", async () => {
      const { getByTestId } = render(
        <AtTextInput
          dataTestId="input"
          readOnly
          value="abc"
          icon={{ type: "search" }}
          onChange={() => {}}
        />
      );
      const searchIcon = getByTestId("search-custom-icon");
      expect(searchIcon).toBeInTheDocument();
    });
  });

  describe("when icon is not in props, input has value and no errors", () => {
    it("should show up the check icon", () => {
      const { getByTestId } = render(
        <AtTextInput dataTestId="input" value="abc" onChange={() => {}} />
      );

      const checkIcon = getByTestId("check-icon");
      expect(checkIcon).toBeInTheDocument();
    });
  });

  describe("when icon is not in props, input has value and has errors", () => {
    it("should show up the error icon", () => {
      const { getByTestId } = render(
        <AtTextInput
          dataTestId="input"
          value="abc"
          error={true}
          onChange={() => {}}
        />
      );

      const errorIcon = getByTestId("error-icon");
      expect(errorIcon).toBeInTheDocument();
    });
  });
});
