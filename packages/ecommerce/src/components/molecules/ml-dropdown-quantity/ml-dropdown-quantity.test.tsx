import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MlDropdownQuantity } from './ml-dropdown-quantity'
import { MlDropdownQuantityProps } from './ml-dropdown-quantity.types'

const handleChange = vi.fn()

const defaultProps: MlDropdownQuantityProps = {
  dataTestId: 'ml-dropdown-menu-item',
  optionsList: [1, 2, 3, 4, 5],
  selectedOption: 1,
  handleChange,
}

describe('molecule/ml-dropdown-quantity', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { container } = render(<MlDropdownQuantity {...defaultProps} />)
      expect(container).toBeTruthy()
    })

    it('should render base button', () => {
      const { getByTestId } = render(<MlDropdownQuantity {...defaultProps} />)
      expect(getByTestId('dropdown-quantity-btn')).toBeInTheDocument()
    })

    it('should render the button items', () => {
      const { queryAllByTestId } = render(<MlDropdownQuantity {...defaultProps} />)
      const items = queryAllByTestId('qty-', { exact: false })
      expect(items).toHaveLength(defaultProps.optionsList.length)
    })
  })

  describe('when a user clicks an option', () => {
    it('should toggle the visibility of the dropdown list and call handleChange', async () => {
      const user = userEvent.setup()

      const { getByTestId } = render(<MlDropdownQuantity {...defaultProps} />)
      const dropdownMenuItem = getByTestId('dropdown-quantity-btn')
      const itemList = getByTestId('dropdown-quantity-options')

      // Assuming that the dropdown is initially hidden
      expect(itemList).toHaveClass('invisible')

      await user.click(dropdownMenuItem)

      // After clicking, the dropdown should be visible
      expect(itemList).not.toHaveClass('invisible')

      await user.click(itemList.firstElementChild!)

      expect(handleChange).toHaveBeenCalledOnce()

      // After clicking again, the dropdown should be hidden
      expect(itemList).toHaveClass('invisible')
    })
  })
})
