import { View } from "react-native";export enum AtPlayButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum AtPlayButtonSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface AtPlayButtonProps {
  /** This optional string property determines the color of the button, which can be either `primary` or `secondary`, as defined by the `AtPlayButtonColor` enum. */
  color?: AtPlayButtonColor

  /** This optional boolean property determines the size of the button, which can be either `small` or `large`, as defined by the `AtPlayButtonSize` enum. */
  size?: AtPlayButtonSize

  /** This optional boolean property is a flag that determines whether the button displays a spinner or not, preventing user interaction and showing that the video content is loading. */
  isLoading?: boolean

  /** This optional property is a handler that triggers when the button is clicked. */
  onClick?: () => void

  /** The CSS class name for the button component */
  className?: string
}
