import { AtLinkProps } from '@components-library/common'
import { SearchItemDisplayVariants } from './results/results.types'

export enum OrSearchBarSize {
  SMALL = 'small',
  LARGE = 'large',
}

export type OrSearchItem = {
  name: string
  slug: string
  link: Pick<AtLinkProps, 'href' | 'linkWrapper'>
  description?: string
  price?: string
  discountPercentage?: number
  originalPrice?: string
  image?: {
    src: string
    alt?: string
  }
}

export type OrSearchSuggestion = {
  value: string
  link: Pick<AtLinkProps, 'href' | 'linkWrapper'>
  matches?: number
}

export interface OrSearchProps {
  placeholder?: string
  onSubmit: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  currentQuery?: string
  resultsTitle?: string
  results?: OrSearchItem[]
  resultsDisplayVariant?: SearchItemDisplayVariants
  seeMoreResultsLinkProps: AtLinkProps
  seeMoreResultsLabel?: string
  totalAmountOfResults?: number
  noResultsFoundLabel?: string
  suggestionsTitle?: string
  suggestions?: OrSearchItem[]
  suggestionsDisplayVariant?: SearchItemDisplayVariants
  seeMoreSuggestionsLinkProps?: AtLinkProps
  seeMoreSuggestionsLabel?: string
  showMoreSuggestions?: boolean
  totalAmountOfSuggestions?: number
  onChange: (query: string) => void
  onClearButtonClick: () => void
  dataTestId?: string
  searchBarSize?: OrSearchBarSize
  showResults?: boolean
}

export interface OrSearchSubmitButtonProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  searchBarSize?: OrSearchBarSize
  disabled?: boolean
}
