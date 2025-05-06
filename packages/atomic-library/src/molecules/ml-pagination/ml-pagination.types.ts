export interface MlPaginationProps {
  /** The number of pages to display at the beginning and end of the pagination. This helps users quickly navigate to the first or last few pages. */
  boundaryCount?: number

  /** The initial page number that is selected when the pagination component is first rendered. Useful for setting a default starting point. */
  defaultPage?: number

  /** A boolean flag to disable the pagination component, preventing any interaction. This can be useful when data is loading or when pagination is not applicable. */
  disabled?: boolean

  /** A callback function that is triggered when the page number changes. It receives the new page number as an argument, allowing for custom handling of page changes. */
  onPageChange?: (pageNumber: number) => void

  /** The total number of pages available for navigation. This determines the range of pages that the user can navigate through. */
  pageCount: number

  /** A boolean flag to show or hide the previous and next buttons. This can simplify the UI by removing these buttons if they are not needed. */
  showPrevAndNextButtons?: boolean

  /** The number of sibling pages to display around the current page. This helps users see pages that are close to the current page, providing better context for navigation. */
  siblingCount?: number
}
