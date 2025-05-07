import { describe, expect, it } from "vitest";
import { MlCollapseProps } from "./ml-collapse.types";
import { fireEvent, render } from "@testing-library/react";
import { MlCollapse } from "./ml-collapse";

const collapseProps: MlCollapseProps = {
  dropdownArray: [
    {
      title: "Test Dropdown 1",
      children: <Text>{"Test Content Text 1"}</Text>,
    },
    {
      title: "Test Dropdown 2",
      children: <Text>{"Test Content Text 2"}</Text>,
    },
  ],
};

describe("molecules/ml-collapse", () => {
  describe("when it initially renders", () => {
    it("should render dropdown titles", () => {
      const { getByText } = render(<MlCollapse {...collapseProps} />);

      expect(getByText("Test Dropdown 1")).toBeInTheDocument();
      expect(getByText("Test Dropdown 2")).toBeInTheDocument();
    });

    it("should not render dropdown children", () => {
      const { queryByText } = render(<MlCollapse {...collapseProps} />);

      expect(queryByText("Test Content Text 1")).not.toBeVisible();
      expect(queryByText("Test Content Text 2")).not.toBeVisible();
    });
  });

  describe("when a dropdown is clicked while all of them are closed", () => {
    it("should show the corresponding dropdown's children", () => {
      const { getByText } = render(<MlCollapse {...collapseProps} />);
      fireEvent.click(getByText("Test Dropdown 1"));

      expect(getByText("Test Content Text 1")).toBeVisible();
    });
  });

  describe("when a dropdown is clicked while there is one open", () => {
    it("should not show the previously opened dropdown's children", () => {
      const { getByText, queryByText } = render(
        <MlCollapse {...collapseProps} />
      );
      fireEvent.click(getByText("Test Dropdown 1"));
      fireEvent.click(getByText("Test Dropdown 2"));

      expect(queryByText("Test Content Text 1")).not.toBeVisible();
    });

    it("should show the clicked dropdown's children", () => {
      const { getByText } = render(<MlCollapse {...collapseProps} />);
      fireEvent.click(getByText("Test Dropdown 1"));
      fireEvent.click(getByText("Test Dropdown 2"));

      expect(getByText("Test Content Text 2")).toBeVisible();
    });
  });
});
