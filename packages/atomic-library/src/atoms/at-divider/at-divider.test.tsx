import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { AtDivider } from "./at-divider";

describe("atoms/at-divider", () => {
  describe("when the aria-hidden attribute is false", () => {
    it("should render correctly", () => {
      const { getByRole } = render(<AtDivider ariaHidden={false} />);
      expect(getByRole("separator")).toBeInTheDocument();
    });
  });

  describe("when the aria-hidden attribute is true", () => {
    it("should not be detected", () => {
      const { queryByRole } = render(<AtDivider ariaHidden={true} />);
      expect(queryByRole("separator")).not.toBeInTheDocument();
    });
  });
});
