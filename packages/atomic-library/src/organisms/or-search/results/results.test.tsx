import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ResultsProps } from "./results.types";
import { Results } from "./results";
import { MobileSearchboxProvider } from "../../../utils";

const link = { href: "#" };
const props: ResultsProps = {
  seeMoreResultsLinkProps: { href: "#" },
  query: "Bag",
  results: [
    {
      name: "Gorgeous Bag",
      slug: "bag-product",
      link,
    },
    {
      name: "Gorgeous Bag 2",
      slug: "bag-product-2",
      link,
    },
  ],
  totalAmountOfResults: 2,
  resultsTitle: "Products",
  suggestionsTitle: "Suggestions",
  suggestions: [
    {
      name: "Suggestion Bag",
      slug: "bag-suggestion",
      link,
    },
    {
      name: "Suggestion Bag 2",
      slug: "bag-suggestion-2",
      link,
    },
  ],
  totalAmountOfSuggestions: 2,
  seeMoreResultsLabel: "See more results",
  noResultsFoundLabel: "No results found for",
};

describe("organisms/or-search/results", () => {
  describe("when the component receives results", () => {
    it("should render results related tags and elements", () => {
      const { container, getByText } = render(
        <MobileSearchboxProvider>
          <Results {...props} />
        </MobileSearchboxProvider>
      );
      const seeMoreResultsText = getByText(
        `${props.seeMoreResultsLabel ?? ""} (${props.totalAmountOfResults})`
      );
      const suggestionsTitle = getByText(`${props.suggestionsTitle ?? ""}`);
      const resultsTitle = getByText(`${props.resultsTitle ?? ""}`);

      expect(container).toBeInTheDocument();
      expect(resultsTitle).toBeInTheDocument();
      expect(suggestionsTitle).toBeInTheDocument();
      expect(seeMoreResultsText).toBeDefined();
    });
  });

  describe("when the component receives no results", () => {
    it('should render "No Results Found" paragraph', () => {
      const { container, getByText } = render(
        <MobileSearchboxProvider>
          <Results {...props} results={[]} totalAmountOfResults={0} />
        </MobileSearchboxProvider>
      );
      const noResultsFoundLabel = getByText(
        `${props.noResultsFoundLabel ?? ""}`,
        { exact: false }
      );

      expect(container).toBeInTheDocument();
      expect(noResultsFoundLabel).toBeInTheDocument();
    });
  });
});
