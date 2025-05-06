import { BaseFilter } from '../filter.types'

// Selector Option Type
export type SelectorOption = {
  label: string
  selected: boolean
}

// Selector Filter
export interface SelectorFilterType extends BaseFilter {
  /** An array of options with rating properties. */
  options: SelectorOption[]
}

export interface SelectorFilterProps extends SelectorFilterType {
  onClick: (index: number) => void
}
