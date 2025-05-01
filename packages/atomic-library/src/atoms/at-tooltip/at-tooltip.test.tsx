import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { AtTooltip } from "./at-tooltip";

// Not exhaustive tests were made as this is already tested in the library source repo: https://github.com/ReactTooltip/react-tooltip/tree/master/src/test

describe("atoms/at-tooltip", () => {
  describe("when the component is created", () => {
    it("should render correctly", () => {
      const { container } = render(
        <AtTooltip id="id" content="Lorem ipsum">
          {<p>Shipping</p>}
        </AtTooltip>
      );

      expect(container).toBeTruthy();
    });
  });
});
