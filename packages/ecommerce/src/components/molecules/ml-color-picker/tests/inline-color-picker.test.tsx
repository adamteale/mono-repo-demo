import { describe, expect, it } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { inlineColorPickerProps } from '../ml-color-picker.mock'
import { InlineColorPicker } from '../inline-color-picker'
import { InlineColorPickerProps } from '../ml-color-picker.types'

describe('molecules/ml-color-picker/inline-color-picker', () => {
  describe('when the component is created', () => {
    it('should render correctly', () => {
      const { getByTestId } = render(<InlineColorPicker {...(inlineColorPickerProps as InlineColorPickerProps)} />)
      const inlineColorPicker = getByTestId('inline-color-picker')
      const plusIcon = getByTestId('plus-icon')
      expect(inlineColorPicker).toBeInTheDocument()
      expect(plusIcon).toBeInTheDocument()
    })

    it('should render correctly when user clicks on plus icon', () => {
      const { getByTestId, getByTitle } = render(
        <InlineColorPicker {...(inlineColorPickerProps as InlineColorPickerProps)} />,
      )
      const inlineColorPicker = getByTestId('inline-color-picker')
      expect(inlineColorPicker).toBeInTheDocument()
      const plusIcon = getByTestId('plus-icon')
      expect(plusIcon).toBeInTheDocument()
      const inlineButtonIcon = getByTitle('inline-button-icon')
      fireEvent.click(inlineButtonIcon)
      const minusIcon = getByTestId('minus-icon')
      expect(minusIcon).toBeInTheDocument()
    })
  })
})
