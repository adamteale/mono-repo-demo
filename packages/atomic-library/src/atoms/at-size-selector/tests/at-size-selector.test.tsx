import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { AtSizeSelector } from '../at-size-selector'

describe('atoms/at-size-selector', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { container } = render(<AtSizeSelector text="10" onClick={() => {}} />)

      expect(container).toBeTruthy()
    })
  })

  describe('when a user clicks the button', () => {
    it('should call onClick when button is clicked', () => {
      const handleClick = vi.fn()

      const { getByTestId } = render(<AtSizeSelector text="10" onClick={handleClick} />)

      fireEvent.click(getByTestId('at-size-selector-button'))

      expect(handleClick).toHaveBeenCalled()
    })
  })

  describe('when the component is not disabled or sold out', () => {
    it('should not disable the button by default', () => {
      const { getByTestId } = render(<AtSizeSelector text="10" />)
      const button = getByTestId('at-size-selector-button')
      expect(button.getAttribute('disabled')).toBeNull()
    })

    it('should not render the notify icon by default', () => {
      const { queryByTestId } = render(<AtSizeSelector text="10" />)
      const notifyIcon = queryByTestId('notify-icon')
      expect(notifyIcon).toBeNull()
    })
  })

  describe('when isSoldOut is true', () => {
    it('should render the notify icon', () => {
      const { getByTestId } = render(<AtSizeSelector text="10" isSoldOut={true} />)

      const notifyIcon = getByTestId('notify-icon')

      expect(notifyIcon).not.toBeNull()
    })
  })
})
