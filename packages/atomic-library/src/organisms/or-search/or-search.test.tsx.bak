import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { OrSearchProps } from './or-search.types'
import { OrSearch } from './or-search'
import { MobileSearchboxProvider } from '../../utils'

const link = { href: '#' }
const props: OrSearchProps = {
  seeMoreResultsLinkProps: { href: '#' },
  onChange: () => {},
  onSubmit: () => {},
  onClearButtonClick: () => {},
  currentQuery: 'Bag',
  results: [
    {
      name: 'Gorgeous Bag',
      slug: 'bag-product',
      link,
    },
    {
      name: 'Gorgeous Bag 2',
      slug: 'bag-product-2',
      link,
    },
  ],
  totalAmountOfResults: 2,
  resultsTitle: 'Products',
  suggestionsTitle: 'Suggestions',
  suggestions: [
    {
      name: 'Suggestion Bag',
      slug: 'bag-suggestion',
      link,
    },
    {
      name: 'Suggestion Bag 2',
      slug: 'bag-suggestion-2',
      link,
    },
  ],
  totalAmountOfSuggestions: 2,
  seeMoreResultsLabel: 'See more results',
  noResultsFoundLabel: 'No results found for',
}

describe('organisms/or-search', () => {
  describe('when the component receives results', () => {
    it('should render results related tags and elements', () => {
      const { getByText } = render(
        <MobileSearchboxProvider>
          <OrSearch {...props} />
        </MobileSearchboxProvider>,
      )
      const seeMoreResultsText = getByText(`${props.seeMoreResultsLabel ?? ''} (${props.totalAmountOfResults})`)
      const suggestionsTitle = getByText(`${props.suggestionsTitle ?? ''}`)
      const resultsTitle = getByText(`${props.resultsTitle ?? ''}`)

      expect(resultsTitle).toBeInTheDocument()
      expect(suggestionsTitle).toBeInTheDocument()
      expect(seeMoreResultsText).toBeDefined()
    })
  })

  describe('when the component receives no results', () => {
    it('should render "No Results Found" paragraph', () => {
      const { container, getByText } = render(
        <MobileSearchboxProvider>
          <OrSearch {...props} results={[]} totalAmountOfResults={0} />
        </MobileSearchboxProvider>,
      )
      const noResultsFoundLabel = getByText(`${props.noResultsFoundLabel ?? ''}`, { exact: false })

      expect(container).toBeInTheDocument()
      expect(noResultsFoundLabel).toBeInTheDocument()
    })
  })

  describe('when there is no query', () => {
    it('should not render Results component', () => {
      const { queryByText } = render(
        <MobileSearchboxProvider>
          <OrSearch {...props} currentQuery="" results={[]} totalAmountOfResults={0} />
        </MobileSearchboxProvider>,
      )
      const seeMoreResultsText = queryByText(`${props.seeMoreResultsLabel ?? ''} (${props.totalAmountOfResults})`)
      const suggestionsTitle = queryByText(`${props.suggestionsTitle ?? ''}`)
      const resultsTitle = queryByText(`${props.resultsTitle ?? ''}`)
      const noResultsFoundLabel = queryByText(`${props.noResultsFoundLabel ?? ''}`, { exact: false })

      expect(resultsTitle).not.toBeInTheDocument()
      expect(suggestionsTitle).not.toBeInTheDocument()
      expect(seeMoreResultsText).not.toBeInTheDocument()
      expect(noResultsFoundLabel).not.toBeInTheDocument()
    })
  })
})
