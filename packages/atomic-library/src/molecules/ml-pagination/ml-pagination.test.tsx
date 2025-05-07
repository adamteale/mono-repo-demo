import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MlPagination } from "./ml-pagination";

describe("molecules/ml-pagination", () => {
  describe("when it has few elements", () => {
    it("should render every at-pagination item", () => {
      const { getByText } = render(<MlPagination pageCount={6} />);

      expect(getByText("1")).toBeInTheDocument();
      expect(getByText("2")).toBeInTheDocument();
      expect(getByText("3")).toBeInTheDocument();
      expect(getByText("4")).toBeInTheDocument();
      expect(getByText("5")).toBeInTheDocument();
      expect(getByText("6")).toBeInTheDocument();
    });

    it("should not render an ellipsis item", () => {
      const { queryByText } = render(<MlPagination pageCount={6} />);

      expect(queryByText("...")).not.toBeInTheDocument();
    });
  });

  describe("when it has many elements", () => {
    it("should not render every at-pagination item", () => {
      const { getByText, queryByText } = render(<MlPagination pageCount={9} />);

      expect(getByText("1")).toBeInTheDocument();
      expect(getByText("2")).toBeInTheDocument();
      expect(getByText("3")).toBeInTheDocument();
      expect(getByText("4")).toBeInTheDocument();
      expect(getByText("5")).toBeInTheDocument();
      expect(queryByText("6")).not.toBeInTheDocument();
      expect(queryByText("7")).not.toBeInTheDocument();
      expect(queryByText("8")).not.toBeInTheDocument();
      expect(getByText("9")).toBeInTheDocument();
    });

    it("should render at least one ellipsis item", () => {
      const { getByText } = render(<MlPagination pageCount={9} />);

      expect(getByText("...")).toBeInTheDocument();
    });
  });

  describe("when it should not display buttons", () => {
    it("should not render previous button", () => {
      const { queryByTestId } = render(
        <MlPagination pageCount={6} showPrevAndNextButtons={false} />
      );

      expect(
        queryByTestId("pagination-previous-button")
      ).not.toBeInTheDocument();
    });

    it("should not render next button", () => {
      const { queryByTestId } = render(
        <MlPagination pageCount={6} showPrevAndNextButtons={false} />
      );

      expect(queryByTestId("pagination-next-button")).not.toBeInTheDocument();
    });
  });
});
