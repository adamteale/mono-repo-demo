import { AtSizeSelectorProps } from '../../atoms'

export interface MlSizeSelectorProps {
  /** A callback function that is called when a size is clicked.
   * @param sizeIndex - The index of the selected size. */
  onClick?: (sizeIndex: number) => void

  /** An optional property that indicates the currently selected size. It is a string that corresponds to the text of the selected size. */
  selected?: string

  /** An array of size objects, each representing a selectable size.
   * The `Omit` utility type is used to exclude the `onClick` and `isSelected` properties from the `AtSizeSelectorProps` type, ensuring that these properties are managed internally by the `MlSizeSelector` component. */
  options: Omit<AtSizeSelectorProps, 'onClick'>[]
}
