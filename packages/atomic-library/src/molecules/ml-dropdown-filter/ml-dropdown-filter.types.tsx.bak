import React from 'react'
import { MlDropdownProps } from '../ml-dropdown/ml-dropdown.types'
import { BaseFilter, Filter, FilterOption } from '../ml-filter-selector'

// Dropdown Filter Types
type DropdownFilterSupplementaryProps = {
  /** Indicates if there are no results */
  noResult?: boolean

  /** Label to display when there are no results */
  noResultLabel?: string
}

/**
 * Type for the handler used in dropdown filters.
 * It defines an onClick method to handle selection of a filter option.
 */
export type DropdownFilterHandler = { onClick: (value: FilterOption) => void }

/**
 * Represents a dropdown filter, extending the base properties from MlDropdownProps and Filter.
 * Also includes supplementary properties to handle no-result scenarios.
 *
 * @template T - Extends the BaseFilter type to customize the filter.
 */
export type DropdownFilter<T extends BaseFilter> = Omit<MlDropdownProps, 'children' | 'dividerClassName'> &
  Filter<T> &
  DropdownFilterSupplementaryProps

/**
 * Represents the properties for the MlDropdownFilter component.
 * Combines the DropdownFilter, DropdownFilterHandler, and allows a custom FilterSelector component.
 *
 * @template T - Extends the BaseFilter type to customize the filter.
 */
export type MlDropdownFilterProps<T extends BaseFilter> = DropdownFilter<T> &
  DropdownFilterHandler & {
    FilterSelector: React.ComponentType<any>
  }

/**
 * Represents the properties for a generic Filter component.
 * Combines the Filter and DropdownFilterHandler properties.
 *
 * @template T - Extends the BaseFilter type to customize the filter.
 */
export type FilterProps<T extends BaseFilter> = Filter<T> & DropdownFilterHandler
