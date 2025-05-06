export interface AtStepperItemProps {
  /** A `boolean` that indicates whether the step is currently active. When `true`, the step is highlighted to show that it is the current step in the process. */
  isActive: boolean

  /** A `string` that represents the name or title of the step. This is displayed to the user to indicate what the step is about. */
  label: string

  /** A `string` that denotes the step number or identifier. This helps in sequencing the steps correctly. */
  step: string
}
