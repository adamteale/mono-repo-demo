import { TmCatalogProps } from './tm-catalog.types'

export const defaultProps: TmCatalogProps = {
  title: 'Catalog Title',
  query: '',
  filters: [],
  breadcrumb: { links: [] },
  filterModalCloseIconLabel: 'Close',
  filterModalOpenFiltersLabel: 'Open Filters',
  filterModalShowResultsLabel: 'Show Results',
  filterModalTitle: 'Filter',
  filterTitle: 'Filter by',
  sortByLabel: 'Sort by',
  noResultLabel: 'No products found with your search',
  isLoading: true,
  hasResults: true,
  onChangePage: () => {},
  handleFilter: () => {},
  sortByProps: {
    type: 'rating' as any,
    title: 'Sort By',
    options: [
      { label: 'High to Low', selected: false },
      { label: 'Low to High', selected: false },
    ],
    onClick: () => {},
  },
  onSortChange: () => {},
  currentPage: 1,
  totalPages: 1,
  productCards: [],
  resultCountsText: '',
}
