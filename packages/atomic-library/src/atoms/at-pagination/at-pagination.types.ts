import { View } from "react-native";export interface AtPaginationProps {
  /** This optional boolean property determines whether the pagination item is disabled. When `true`, the item is non-interactive and styled accordingly to indicate it cannot be clicked */
  disabled?: boolean

  /** This optional function property is a callback that gets executed when the pagination item is clicked. It allows for custom behavior to be defined when a user interacts with the pagination component. */
  onClick?: () => void

  /** This property is a number that represents the label of the page. It is used to display the current page number within the pagination component. */
  pageLabel: number

  /** This optional boolean property indicates whether the pagination item is currently selected. When `true`, the pagination item is highlighted to show it is the active page. */
  selected?: boolean
}
