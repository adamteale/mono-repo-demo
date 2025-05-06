import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MlColorPicker } from '../ml-color-picker'
import { gridColorPickerProps, inlineColorPickerProps } from '../ml-color-picker.mock'

describe('molecules/ml-color-picker', () => {
  describe('when the component is created with type property setted as inline', () => {
    it('should render correctly', () => {
      const { getByTestId } = render(<MlColorPicker {...inlineColorPickerProps} />)
      const colorPickerMolecule = getByTestId('inline-color-picker')
      expect(colorPickerMolecule).toBeInTheDocument()
    })
  })

  describe('when the component is created with type property setted as grid', () => {
    it('should render correctly', () => {
      const { getByTestId } = render(<MlColorPicker {...gridColorPickerProps} />)
      const colorPickerMolecule = getByTestId('grid-color-picker')
      expect(colorPickerMolecule).toBeInTheDocument()
    })
  })
})
