import { MlDropdownDividerPosition, MlDropdownProps } from '../ml-dropdown'

export interface MlCollapseProps {
  /** A boolean indicating whether a divider should be displayed between the collapsible sections. */
  showDivider?: boolean

  /** A string that can be either 'top' or 'bottom', indicating the position of the divider relative to the collapsible content. */
  dividerPosition?: MlDropdownDividerPosition

  /** An array of objects, each containing properties `title`, `children`, `dataTestId`, and `childrenContainerClassName`, representing the collapsible sections and their content. */
  dropdownArray: Pick<MlDropdownProps, 'title' | 'children' | 'dataTestId' | 'childrenContainerClassName'>[]

  /** A boolean that determines if the collapsible sections should have a background color. */
  hasBackgroundColor?: boolean

  /** A number specifying which section should be open initially when the component is rendered. */
  initiallyOpenIndex?: number
}
