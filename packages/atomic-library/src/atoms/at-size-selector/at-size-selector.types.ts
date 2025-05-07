import { View } from "react-native";export interface AtSizeSelectorProps {
  /** An optional string for applying custom CSS classes to the component, allowing for additional styling customization. */
  className?: string

  /** An optional boolean indicating whether the size is currently selected by the user. If true, the component will visually highlight the selected size. */
  isSelected?: boolean

  /** An optional boolean indicating whether the size is sold out. If true, the component will visually indicate that the size is not available. */
  isSoldOut?: boolean

  /** An optional function to be called when the size selector is clicked. This allows for handling user interactions, such as updating the selected size. */
  onClick?: () => void

  /** A string representing the size label to be displayed on the selector. */
  text: string
}
