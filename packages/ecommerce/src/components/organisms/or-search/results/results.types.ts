import { AtLinkProps } from "@mono-repo-demo/atomic-library";
import { OrSearchProps } from "../or-search.types";

export enum SearchItemDisplayVariants {
  CARD = "card",
  TEXT = "text",
}

export interface ResultsProps {
  query: string;
  showResults?: boolean;
  resultsTitle?: string;
  results: OrSearchProps["results"];
  resultsDisplayVariant?: SearchItemDisplayVariants;
  seeMoreResultsLinkProps: AtLinkProps;
  seeMoreResultsLabel?: string;
  totalAmountOfResults: number;
  noResultsFoundLabel?: string;
  suggestionsTitle?: string;
  suggestions?: OrSearchProps["suggestions"];
  suggestionsDisplayVariant?: SearchItemDisplayVariants;
  seeMoreSuggestionsLinkProps?: AtLinkProps;
  seeMoreSuggestionsLabel?: string;
  showMoreSuggestions?: boolean;
  totalAmountOfSuggestions: number;
  maxItemsPerSection?: number;
  dataTestId?: string;
}
