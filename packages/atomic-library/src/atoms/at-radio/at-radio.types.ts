import { View } from "react-native";export interface AtRadioProps {
  /** An optional string that provides additional information or context about the radio button.
   * This is typically displayed below the title. */
  checked?: boolean

  /** An optional string that allows custom styling to be applied to the entire radio button component through CSS class names. */
  className?: string

  /** An optional string used for testing purposes.
   * It provides a unique identifier for the radio button, making it easier to select and interact with in automated tests. */
  dataTestId?: string

  /** An optional string that provides additional information or context about the radio button.
   * This is typically displayed below the title. */
  description?: string

  /** A boolean that determines whether the radio button is interactive.
   * If `true`, the radio button is disabled and cannot be selected. */
  disabled: boolean

  /**
   * A function that is called when the radio button's state changes.
   * It receives an optional value as an argument, allowing for custom handling of the change event.
   * @param value The new value that has been selected.
   */
  onChange: (value?: any) => void

  /** An optional string that represents the title of the radio button. This provides a label or heading for the radio option. */
  title?: string

  /** An optional string that allows custom styling to be applied to the title through CSS class names. */
  titleClassName?: string

  /** An optional string that specifies the name of the radio button input element. This can be used to group a set of radio buttons together by giving them the same name.  */
  inputName?: string

  /** An optional string that enhances accessibility by providing additional descriptive text for screen readers.
   * This text is appended to the `aria-label` attribute of the radio button, offering more context or instructions.
   */
  ariaLabelAddOn?: string
}
