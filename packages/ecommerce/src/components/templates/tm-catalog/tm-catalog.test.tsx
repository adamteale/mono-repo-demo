import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { TmCatalog } from "./tm-catalog";
import { defaultProps } from "./tm-catalog.mock";

describe("templates/tm-catalog", () => {
  describe("when the catalog is loading", () => {
    it("should render the loading state correctly", () => {
      const { queryAllByTestId } = render(
        <TmCatalog {...defaultProps} isLoading={true} />
      );
      const productCardSkeletons = queryAllByTestId("product-card-skeleton");
      expect(productCardSkeletons.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("when the catalog has no results", () => {
    it("should render the no results message", () => {
      const { getByText } = render(
        <TmCatalog {...defaultProps} hasResults={false} isLoading={false} />
      );
      expect(getByText(defaultProps.noResultLabel!)).toBeInTheDocument();
    });
  });

  describe("when the catalog has results and is not on the last page", () => {
    it("should render product cards and the pagination component", () => {
      const productCardsWithProps = [
        <View key="1">Product Card 1</View>,
        <View key="2">Product Card 2</View>,
      ];
      const { getByText } = render(
        <TmCatalog
          {...defaultProps}
          hasResults={true}
          productCards={productCardsWithProps}
          totalPages={2}
          currentPage={1}
        />
      );
      expect(getByText("1")).toBeInTheDocument();
      expect(getByText("2")).toBeInTheDocument();
    });
  });

  describe("when the catalog is on the last page", () => {
    it("should not show the see more button", () => {
      const productCardsWithProps = [
        <View key="1">Product Card 1</View>,
        <View key="2">Product Card 2</View>,
      ];
      const { queryByTestId } = render(
        <TmCatalog
          {...defaultProps}
          isLoading={false}
          hasResults={true}
          productCards={productCardsWithProps}
          totalPages={1}
          currentPage={1}
        />
      );

      expect(queryByTestId("see-more-btn")).toBeNull();
    });
  });
});
