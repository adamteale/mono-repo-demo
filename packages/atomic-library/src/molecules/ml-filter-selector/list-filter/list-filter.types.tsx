import React from 'react'
import { BaseFilter, IndexFilterHandler } from '../filter.types'

// List Option Type
export type ListOption = {
  label: string
  selected: boolean
  quantity: number
  displayQuantity?: boolean
  value?: string
}

// List Filter Configuration
export interface ListFilterWrapperConfiguration {
  /** An array of options with list properties. */
  options: ListOption[]

  /** React component used to render a search input. */
  searchComponent?: React.ReactNode

  /** The label for the see all button. */
  seeAllLabel?: string

  /** The label for the see less button. */
  seeLessLabel?: string

  /** The amount to slice the options by. */
  sliceAmount?: number
}

export type ListFilterType = Omit<ListFilterWrapperConfiguration, 'searchComponent'> & {
  /** The placeholder text for the search input. */
  searchPlaceholder?: string
} & BaseFilter

export type ListFilterWrapperProps = ListFilterWrapperConfiguration & IndexFilterHandler

export type ListFilterProps = ListFilterType & { onClick: (element: ListOption) => void }

export interface ListItemProps extends ListOption {
  onClick: () => void
}
