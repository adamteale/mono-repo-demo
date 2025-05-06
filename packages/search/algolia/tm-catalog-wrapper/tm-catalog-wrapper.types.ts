import { CMSCatalog } from '@cms-types/common'

export interface TmCatalogWrapperProps {
  query?: string
  template: CMSCatalog
  placeholderImagePath: string
  slugKey: string
  isSearchPage?: boolean
  filters?: Filter[]
  catalogLabels?: {
    sortByLabel?: string
    resultCountLabel?: string
    seeMoreLabel?: string
    filterTitle?: string
    filterModalOpenFiltersLabel?: string
    filterModalShowResultsLabel?: string
    filterModalTitle?: string
    filterModalCloseIconLabel?: string
    homeBreadcrumbLabel?: string
    searchTitle?: string
    noResultLabel?: string
  }
  colorPickerLabels?: {
    beige: string
    black: string
    blue: string
    brown: string
    gold: string
    green: string
    grey: string
    lightBlue: string
    oliv: string
    orange: string
    petrol: string
    pink: string
    purple: string
    red: string
    silver: string
    turquoise: string
    white: string
    yellow: string
  }
  /**
   *
   * These props wont probably be used with Algolia, Im leaving them here
   * mostly so TS doesnt show erros when importing this wrapper instead of
   * the `common` TmCatalogWrapper
   */
  resolveAccessToken?: () => Promise<string>
  cardRenderer?: any
  sortByFilterOptions?: {
    label: string
    order: 'ascendant' | 'descendant'
    sort: 'price' | 'name'
  }[]
}

export interface Filter {
  type: 'list' | 'list-range' | 'size' | 'color'
  key: string
  identifier?: string
  title: string
  initiallyOpen: boolean
  seeAllLabel?: string
  seeLessLabel?: string
  noResultLabel?: string
  /** Number of filter options to show before clicking the "See more" button on list or range filters.
   * On origin data source this should allow only numbers (e.g.: regex: `^[0-9]*$`). */
  sliceAmount?: number
  searchPlaceholder?: string
  minSearchPlaceholder?: string
  maxSearchPlaceholder?: string
  searchButtonLabel?: string
}
