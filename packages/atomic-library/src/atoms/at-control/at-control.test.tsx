import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { AtControl } from "./at-control";
import userEvent from "@testing-library/user-event";

describe("atoms/at-control", () => {
  it("should renders arrow control", () => {
    const { container } = render(<AtControl onClick={() => {}} />);
    expect(container).toBeInTheDocument();
  });

  describe("when is clicked", () => {
    it("should trigger onClick function", async () => {
      const onClick = vi.fn();
      const { getByTestId } = render(
        <AtControl onClick={onClick} dataTestId="control-arrow" />
      );
      const button = getByTestId("control-arrow");
      await userEvent.click(button);
      expect(onClick).toHaveBeenCalledOnce();
    });
  });
});
