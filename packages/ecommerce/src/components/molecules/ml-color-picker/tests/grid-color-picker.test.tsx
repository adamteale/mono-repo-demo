import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { gridColorPickerProps } from '../ml-color-picker.mock'
import { GridColorPicker } from '../grid-color-picker'
import { capitalizeFirstLetter } from '../../../utils'

describe('molecules/ml-color-picker/grid-color-picker', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { getByTestId, getByText, getAllByTestId } = render(<GridColorPicker {...gridColorPickerProps} />)
      const gridColorPicker = getByTestId('grid-color-picker')
      expect(gridColorPicker).toBeInTheDocument()

      const { options } = gridColorPickerProps
      for (let index = 0; index < options.length; index++) {
        const { colorName } = options[index]
        const gridColorSpan = getByText(capitalizeFirstLetter(colorName))
        expect(gridColorSpan).toBeInTheDocument()
      }
      const colorPickerElements = getAllByTestId('at-color-picker')
      expect(colorPickerElements.length).toBe(options.length)
    })
  })
})
