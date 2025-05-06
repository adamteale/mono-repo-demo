import { InputHTMLAttributes } from 'react'

export interface AtTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  /** The data test ID used for testing. */
  dataTestId?: string

  /** Indicates whether the text area has an error state. */
  error?: boolean

  /** The error message displayed when the text area has an error state. */
  errorText?: string

  /**
   * Callback function triggered when the text area value changes.
   * @param value The new value of the text area.
   */
  handleChange?: (value: string) => void

  /** Additional help text displayed below the text area. */
  helpText?: string

  /** The label text displayed above the text area. */
  label?: string

  /** Adjusts the text area size for mobile devices. */
  smallOnMobile?: boolean
}
