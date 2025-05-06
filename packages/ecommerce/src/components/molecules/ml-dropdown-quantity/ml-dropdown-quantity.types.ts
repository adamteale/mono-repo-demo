export interface MlDropdownQuantityProps {
  /** An optional string to apply custom CSS classes for styling the component. */
  className?: string

  /** An optional string used for testing purposes to identify the component in the DOM. */
  dataTestId?: string

  /** A function that is called when the selected option changes, receiving the newly selected option as its argument. */
  handleChange: (optionSelected: number) => void

  /** An array of numbers representing the available quantity options that users can select from. */
  optionsList: number[]

  /** A number indicating the currently selected quantity option. */
  selectedOption: number
}
