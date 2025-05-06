import { describe, expect, it } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { AtRating } from '../at-rating'

describe('atoms/at-rating', () => {
  describe('when the rating is empty', () => {
    it('should render correctly', () => {
      const { getAllByRole, queryAllByTestId } = render(<AtRating />)
      const buttons = getAllByRole('button')
      expect(queryAllByTestId('rating-icon').length).toBe(5)
      expect(queryAllByTestId('rating-full-icon').length).toBe(0)
      expect(buttons.length).toBe(5)
    })

    it('should handle star icon click', () => {
      const { getAllByRole, queryAllByTestId } = render(<AtRating />)
      const buttons = getAllByRole('button')

      expect(buttons.length).toBe(5)
      expect(queryAllByTestId('rating-icon').length).toBe(5)
      expect(queryAllByTestId('rating-full-icon').length).toBe(0)

      // after clicking last star icon
      fireEvent.click(buttons[4])
      expect(queryAllByTestId('rating-full-icon').length).toBe(5)
    })
  })

  describe('when the number of stars icons is set to a value different than 5', () => {
    it('should render correctly', () => {
      const { getAllByRole, queryAllByTestId } = render(<AtRating stars={2} />)
      const buttons = getAllByRole('button')
      expect(queryAllByTestId('rating-icon').length).toBe(2)
      expect(queryAllByTestId('rating-full-icon').length).toBe(0)
      expect(buttons.length).toBe(2)
    })
  })

  describe('when having an initial rating value', () => {
    it('should render correctly', () => {
      const { getAllByRole, queryAllByTestId } = render(<AtRating initialRating={3} />)
      const buttons = getAllByRole('button')
      expect(queryAllByTestId('rating-icon').length).toBe(5)
      expect(queryAllByTestId('rating-full-icon').length).toBe(3)
      expect(buttons.length).toBe(5)
    })
  })
})
