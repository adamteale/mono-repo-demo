import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { AtCheckbox } from '../at-checkbox'

describe('atoms/at-checkbox', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { container } = render(<AtCheckbox label="Nike" onClick={() => {}} />)

      expect(container).toBeTruthy()
    })
  })

  describe('when a user clicks the button', () => {
    it('should call onClick function', () => {
      const handleClick = vi.fn()

      const { getByTestId } = render(<AtCheckbox label="Adidas" onClick={handleClick} />)

      fireEvent.click(getByTestId('at-checkbox'))

      expect(handleClick).toHaveBeenCalled()
    })
  })

  describe('when disabled is true', () => {
    it('should add disabled attribute', () => {
      const { getByTestId } = render(<AtCheckbox label="Puma" disabled={true} onClick={() => {}} />)

      const button = getByTestId('at-checkbox')

      expect(button.getAttribute('disabled')).not.toBeNull()
    })
  })
})
