export type IconType =
  | 'alert'
  | 'angle-down'
  | 'angle-left'
  | 'angle-right'
  | 'angle-up'
  | 'approve'
  | 'arrow-right'
  | 'arrow-left'
  | 'bars'
  | 'badge'
  | 'bookmark'
  | 'bookmark-full'
  | 'cancel'
  | 'cancel-circle'
  | 'check'
  | 'clock'
  | 'copyright'
  | 'cvv'
  | 'envelope'
  | 'check-circle'
  | 'facebook'
  | 'filter'
  | 'github'
  | 'global-favicon'
  | 'google'
  | 'heart'
  | 'heart-big'
  | 'heart-full'
  | 'info'
  | 'instagram'
  | 'instagram-full'
  | 'less'
  | 'linkedin'
  | 'location'
  | 'logo-favicon'
  | 'message'
  | 'notify'
  | 'notify-small'
  | 'pause'
  | 'phone'
  | 'plane'
  | 'play'
  | 'play-pause'
  | 'plus'
  | 'question-mark'
  | 'rating'
  | 'rating-full'
  | 'reload'
  | 'search'
  | 'shipping-truck'
  | 'shop-favicon'
  | 'shopping-bag'
  | 'shopping-cart'
  | 'size'
  | 'small-cvv'
  | 'spinner'
  | 'square-checked'
  | 'square'
  | 'user'
  | 'trash'
  | 'twitter'
  | 'visibility'
  | 'visibility-off'

export type IconDirection = 'up' | 'down' | 'left' | 'right'
export type IconColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled-primary'
  | 'active'
  | 'currentColor'
  | 'text-primary'
export const iconColors: Record<IconColor, string> = {
  primary: 'fill-icon-primary',
  secondary: 'fill-icon-secondary',
  tertiary: 'fill-icon-tertiary',
  'disabled-primary': 'fill-feedback-default',
  active: 'fill-icon-active',
  currentColor: 'fill-current',
  'text-primary': 'fill-text-primary',
}

export interface IconProps {
  /** An optional string to apply custom CSS classes for additional styling. */
  className?: string

  /** An optional `IconColor` type to define the color of the icon, such as 'primary', 'secondary', etc. */
  dataTestId?: string

  /** An optional string to specify the fill color of the icon. This can be any valid CSS color value, such as `red`, `#ff0000`, `rgb(255, 0, 0)`, etc. */
  fill?: string

  /** An optional string to specify the source URL of the icon. This can be a URL to an SVG file, a data URL, or a URL to an external image. */
  size?: number

  /** An optional string to hide the icon from screen readers. Used when the icon is the sole child of a button. */
  ariaHidden?: 'true' | 'false'
}

export interface IconWithDirectionProps extends IconProps {
  /** An optional `IconDirection` type to specify the direction of the icon, such as 'up', 'down', 'left', or 'right'. */
  direction?: IconDirection
}

export interface AtIconProps {
  /** An optional string to apply custom CSS classes for additional styling. */
  className?: string

  /** An optional `IconColor` type to define the color of the icon, such as 'primary', 'secondary', etc. */
  color?: IconColor

  /** An optional string used for testing purposes to identify the element in the DOM. */
  dataTestId?: string

  /** An optional number to define the size of the icon in pixels. */
  size?: number

  /** An optional string to specify the source URL of the icon. */
  src?: string

  /** An optional `IconType` type to specify the type of icon, such as 'alert', 'angle-down', etc. */
  type?: IconType

  /** An optional string to hide the icon from screen readers. Used when the icon is the sole child of a button. */
  ariaHidden?: 'true' | 'false'
}
