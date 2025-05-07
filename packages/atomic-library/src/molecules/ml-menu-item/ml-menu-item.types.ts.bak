import { AtLinkProps } from '../../atoms'

const ML_MENU_ITEM_LABEL_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

export type MlMenuItemLabelSize = (typeof ML_MENU_ITEM_LABEL_SIZE)[keyof typeof ML_MENU_ITEM_LABEL_SIZE]

export interface MlMenuItemProps {
  /** An optional ARIA attribute to specify the ID of the element controlled by the menu item. */
  ariaControls?: string

  /** An optional CSS class to apply custom styles to the menu item. */
  className?: string

  /** An optional identifier used for testing purposes. */
  dataTestId?: string

  /** Indicates whether the menu item should be rendered as a link.≥ */
  isLink?: boolean

  /** Indicates whether the menu item is currently open. */
  isOpen: boolean

  /** The text label displayed on the menu item. */
  label: string

  /** An optional CSS class to apply custom styles to the label. */
  labelClassName?: string

  /** Optional properties for the link, including the URL (`href`) and a custom link wrapper component. */
  linkProps?: Pick<AtLinkProps, 'href' | 'linkWrapper'>

  /** An optional click event handler that receives the open state of the menu item. */
  onClick?: (isOpen?: boolean) => void

  /** An optional ARIA role attribute to define the role of the menu item. */
  role?: string

  /** Determines whether an icon should be displayed alongside the label. */
  showIcon?: boolean

  /** Specifies the size of the menu item label, with options 'small', 'medium', and 'large'. */
  size?: MlMenuItemLabelSize
}
