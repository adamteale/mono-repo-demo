import { ReactNode } from 'react'

export enum MlDropdownDividerPosition {
  TOP = 'top',
  BOTTOM = 'bottom'
}

export interface MlDropdownProps {
  /** The content to be displayed within the dropdown when it is expanded. */
  children: ReactNode

  /** Optional CSS class for styling the container of the children elements. */
  childrenContainerClassName?: string

  /** Optional boolean to close the dropdown when an action is taken within it. */
  closeOnActionTaken?: boolean

  /** Optional boolean to close the dropdown when clicking outside of it. */
  closeOnClickOutside?: boolean

  /** Optional CSS class for styling the container of the dropdown. */
  containerClassName?: string

  /** Optional string for setting a data-test-id attribute for testing purposes. */
  dataTestId?: string

  /** Optional boolean to include a divider within the dropdown. */
  divider?: boolean

  /** Optional CSS class for styling the divider within the dropdown. */
  dividerClassName?: string

  /** Optional string to set the position of the divider, either 'top' or 'bottom'. */
  dividerPosition?: MlDropdownDividerPosition

  /** Optional boolean to determine if the dropdown should have a background. */
  hasBackground?: boolean

  /** Optional CSS class for styling the icon within the dropdown. */
  iconClassName?: string

  /** Determines whether the dropdown is initially open or closed. */
  initiallyOpen?: boolean

  /** Optional boolean to control the open state of the dropdown. */
  isOpen?: boolean

  /** A callback function triggered when the dropdown is toggled. */
  onToggle?: () => void

  /** Optional boolean to determine if the dropdown is meant to be used by a desktop filter. */
  sortByDesktopFilter?: boolean

  /** Optional CSS class for styling the summary text within the dropdown. */
  summaryTextClassName?: string

  /** The title of the dropdown, displayed as the main clickable element. */
  title: string
}
