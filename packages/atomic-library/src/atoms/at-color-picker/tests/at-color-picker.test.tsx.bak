import { describe, expect, it, vi } from 'vitest'
import { AtColorPicker } from '../at-color-picker'
import { fireEvent, render } from '@testing-library/react'
import { atColorPickerProps } from './mocks/at-color-picker.mocks'
import { colorMappingClasses } from '../color-mapping'

describe('atoms/at-color-picker', () => {
  describe('when the component is created with minimum amount of properties', () => {
    it('should render correctly', () => {
      const { getByTitle } = render(<AtColorPicker {...atColorPickerProps} />)
      const colorPicker = getByTitle(atColorPickerProps.title)
      expect(colorPicker).toBeInTheDocument()
    })
  })

  describe('when the component is created specifying isSelected property', () => {
    it('should render correctly when isSelected is setted as false', () => {
      const { getByTitle, getByTestId } = render(<AtColorPicker {...atColorPickerProps} isSelected={false} />)
      const colorPicker = getByTitle(atColorPickerProps.title)
      const colorPickerRing = getByTestId(`at-color-picker-ring`)
      expect(colorPicker).toBeInTheDocument()
      expect(colorPickerRing).toBeInTheDocument()
      expect(colorPicker.classList.contains('border-transparent')).toBe(true)
      expect(colorPicker.firstElementChild).toHaveClass(colorMappingClasses[atColorPickerProps.color])
    })

    it('should render correctly when isSelected is setted as true', () => {
      const { getByTitle } = render(<AtColorPicker {...atColorPickerProps} isSelected={true} />)
      const colorPickerButton = getByTitle(atColorPickerProps.title)
      expect(colorPickerButton).toBeInTheDocument()
      expect(colorPickerButton.firstElementChild).toBeInTheDocument()
      expect(colorPickerButton.classList.contains('border-transparent')).toBe(false)
      expect(colorPickerButton.classList.contains('border-primary')).toBe(true)
      expect(colorPickerButton.firstElementChild).toHaveClass(colorMappingClasses[atColorPickerProps.color])
    })
  })

  describe('when the component is created specifying isSoldOut property', () => {
    it('should render correctly when isSoldOut is setted as true', () => {
      const { getByTitle, getByTestId } = render(<AtColorPicker {...atColorPickerProps} isSoldOut={true} />)
      const colorPicker = getByTitle(atColorPickerProps.title)
      const colorPickerRing = getByTestId(`at-color-picker-ring`)
      expect(colorPicker).toBeInTheDocument()
      expect(colorPickerRing).toBeInTheDocument()
      expect(colorPicker.classList.contains('border-primary')).toBe(false)
      expect(colorPicker.firstElementChild).toHaveClass(colorMappingClasses[atColorPickerProps.color])
      expect(colorPicker.firstElementChild?.classList.contains(`opacity-20`)).toBe(true)
    })

    it('should render correctly when isSoldOut is setted as true', () => {
      const { getByTitle, getByTestId } = render(<AtColorPicker {...atColorPickerProps} isSoldOut={false} />)
      const colorPicker = getByTitle(atColorPickerProps.title)
      const colorPickerRing = getByTestId(`at-color-picker-ring`)
      expect(colorPicker).toBeInTheDocument()
      expect(colorPickerRing).toBeInTheDocument()
      expect(colorPicker.classList.contains('border-primary')).toBe(false)
      expect(colorPicker.firstElementChild).toHaveClass(colorMappingClasses[atColorPickerProps.color])
      expect(colorPicker.firstElementChild?.classList.contains(`opacity-20`)).toBe(false)
    })
  })

  describe('when the user clicks on the color picker button', () => {
    it('should trigger onClick function', () => {
      const onClickMock = vi.fn()
      const { getByTitle } = render(<AtColorPicker {...atColorPickerProps} onClick={onClickMock} />)
      const colorPickerButton = getByTitle(atColorPickerProps.title)
      fireEvent.click(colorPickerButton)
      expect(onClickMock).toHaveBeenCalled()
    })
  })
})
