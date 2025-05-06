import { AtButtonProps, IconType } from '@components-library/common/src/components/atoms'

export interface MlCardCheckoutProps {
  /** An optional body content area that can include any React node, allowing for flexible and rich content presentation. */
  body?: React.ReactNode

  /** An optional area for additional text or elements at the bottom of the card, providing space for supplementary information or links. */
  bottomText?: React.ReactNode

  /** An optional button with properties defined by `AtButtonProps`, enabling user interaction such as proceeding with the checkout. */
  button?: AtButtonProps

  /** An optional string for custom CSS class names, allowing for additional styling and customization. */
  className?: string

  /** An optional icon to be displayed on the card, enhancing visual appeal and providing a quick reference for the card's purpose. */
  icon?: IconType

  /** An optional subtitle that offers additional context or information related to the title. */
  subtitle?: string

  /** An optional title for the card, providing a clear and concise heading for the checkout information. */
  title?: string
}
