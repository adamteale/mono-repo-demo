import { MlColorPickerColorVariation, MlColorPickerProps, MlColorPickerType } from './ml-color-picker.types'

export const mlColorPickerColorVariationsMock: MlColorPickerColorVariation[] = [
  { colorKey: 'blue', colorName: 'Blue', isSoldOut: true },
  { colorKey: 'pink', colorName: 'Pink', isSoldOut: false },
  { colorKey: 'grey', colorName: 'Grey', isSoldOut: true },
  { colorKey: 'purple', colorName: 'Purple', isSoldOut: false },
  { colorKey: 'red', colorName: 'Red', isSoldOut: true },
  { colorKey: 'black', colorName: 'Black', isSoldOut: false },
  { colorKey: 'white', colorName: 'White', isSoldOut: false },
  { colorKey: 'yellow', colorName: 'Yellow', isSoldOut: true },
]

export const gridColorPickerProps: MlColorPickerProps = {
  type: MlColorPickerType.GRID,
  options: mlColorPickerColorVariationsMock,
}

export const inlineColorPickerProps: MlColorPickerProps = {
  type: MlColorPickerType.INLINE,
  options: mlColorPickerColorVariationsMock,
  maxInlineItems: 4,
}
