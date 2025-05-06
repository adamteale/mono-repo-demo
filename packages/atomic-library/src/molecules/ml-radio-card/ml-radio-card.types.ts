import { AtRadioProps } from '../../atoms'

export interface MlRadioCardProps {
  /** An optional label for the radio card, providing a brief description or title for the option. */
  label?: string

  /** The properties for the radio button, including its state and behavior. */
  radioProps: AtRadioProps
}

export interface MlRadioCardSkeletonProps {
  /** Indicates whether the skeleton should appear in a "checked" state, simulating a selected radio card. */
  checked?: boolean

  /** A unique identifier used for testing purposes to easily select the element in test suites. */
  dataTestId?: string
}
