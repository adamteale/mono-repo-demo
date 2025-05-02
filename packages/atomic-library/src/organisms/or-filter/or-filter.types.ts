import { JSX } from 'react'
import { DropdownFilter, FilterProps } from '../../molecules'
import { BaseFilter, FilterOption } from '../../molecules/ml-filter-selector'

export interface OrFilterProps<T extends BaseFilter> {
  /** The title of the filter section that will be displayed to the user. */
  title: string

  /** Callback function triggered when a filter value is updated. */
  onFilterUpdate: (filter: string, value: FilterOption) => void

  /** Array of filters to be displayed. Each filter is a combination of a DropdownFilter and a unique key */
  filters: (DropdownFilter<T> & { key: string })[]

  /** Optional callback function that is called when all filters are cleared. */
  onClearFilters?: () => void

  /** Boolean flag indicating whether to display the "Clear All Filters" link. */
  showClearLink?: boolean

  /** Label text for the "Clear All Filters" link or button */
  clearAllFiltersLabel?: string

  /** Custom component to be used as the filter selector.
      This allows for the injection of a custom filter selector component with its own props. */
  FilterSelectorComponent?: (props: FilterProps<any>) => JSX.Element
}
