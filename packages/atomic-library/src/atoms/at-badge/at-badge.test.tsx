import { View } from "react-native";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { AtBadge } from "./at-badge";

describe("atoms/at-bagde", () => {
  describe("when the component is created", () => {
    it("should render correctly", () => {
      const { container } = render(<AtBadge quantity={10} />);

      expect(container).toBeTruthy();
    });
  });

  describe("when the quantity has a valid value", () => {
    it("should render the badge with the same quantity", () => {
      const { getByText } = render(<AtBadge quantity={5} />);
      const badgeElement = getByText("5");

      expect(badgeElement).toBeInTheDocument();
    });

    it('should render the badge with "+99" when quantity is greater than 99', () => {
      const { getByText } = render(<AtBadge quantity={100} />);
      const badgeElement = getByText("+99");

      expect(badgeElement).toBeInTheDocument();
    });
  });
});
