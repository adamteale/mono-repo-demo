import { describe, expect, it } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { MlSearch } from './ml-search'
import { countries } from './countries.mock'

describe('molecules/ml-search', () => {
  describe('when the component is mounted', () => {
    it('should render correctly', () => {
      const { container } = render(<MlSearch />)
      expect(container).toBeTruthy()
      expect(container).toBeInTheDocument()
    })
  })

  describe('when a user searchs something', () => {
    it('should show the dropdown with results', async () => {
      const results = countries
      const { getByTestId } = render(<MlSearch fieldName="search" value="" results={results} />)

      const input = getByTestId('search')

      fireEvent.click(input)

      const dropdown = getByTestId('search-dropdown')
      expect(dropdown).toBeInTheDocument()
    })
  })
})
