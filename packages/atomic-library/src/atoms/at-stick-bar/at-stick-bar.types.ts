import { ReactNode } from 'react'

export interface AtStickBarProps {
  /** Additional CSS classes to apply custom styling to the sticky bar. */
  className?: string

  /** A flag to control the visibility of the sticky bar. When set to true, the bar will be hidden. */
  hidden?: boolean

  /** A callback function that gets triggered when the sticky bar is closed. This can be used to perform any cleanup or state updates when the bar is dismissed. */
  onClose?: () => void

  /** The content to be displayed inside the sticky bar. This can be any valid React node, such as text, HTML elements, or other React components. */
  text: ReactNode
}
