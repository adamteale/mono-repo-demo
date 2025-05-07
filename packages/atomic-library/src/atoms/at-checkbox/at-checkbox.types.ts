import { View } from "react-native";export interface AtCheckboxProps {
  /** Specifies whether the checkbox is checked or not. */
  checked?: boolean

  /** The CSS class name for the checkbox component. */
  className?: string

  /** The data test ID for the checkbox component. */
  dataTestId?: string

  /** Specifies whether the checkbox is disabled or not. */
  disabled?: boolean

  /** The label text for the checkbox. */
  label?: string

  /** If the checkbox is required, mostly used inside the or-fom -> ml-form-field. */
  required?: boolean

  /**
   * The callback function to be called when the checkbox is clicked.
   * @param value - The new checked state of the checkbox.
   */
  onClick: (value?: boolean) => void
}
