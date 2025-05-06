// import { resultFetchAmount } from '@components-library/ecommerce'

export const CATALOG_TEXT_PLACEHOLDERS = {
  totalResults: "{totalResultCount}",
  pagination: "{pagination}",
  searchQuery: "{searchQuery}",
};

const resultFetchAmount = 9;

export const defaultFilterButtonLabel = "Filter & Sort ({totalResultCount})";
export const defaultShowResultsLabel = "Show results ({totalResultCount})";
export const defaultResultCountLabel =
  "Showing {pagination} of {totalResultCount} results";
export const defaultHomeLabel = "Home";
export const defaultSearchTitle = 'All results for "{searchQuery}"';

export const getTextReplacements = (
  resultLength: number,
  currentPage: number,
  totalCount: number,
  searchQuery = ""
): Record<keyof typeof CATALOG_TEXT_PLACEHOLDERS, any> => {
  /**
   * This might not be needed with algolia response, check
   * when implementing pagination
   */
  const upperPaginationLimit = Math.min(
    totalCount,
    currentPage * resultFetchAmount
  );
  const lowerPaginationLimit =
    resultLength === upperPaginationLimit
      ? 1
      : upperPaginationLimit - resultLength;

  return {
    totalResults: totalCount,
    pagination: `${lowerPaginationLimit} - ${upperPaginationLimit}`,
    searchQuery,
  };
};
