import { AtLinkProps } from '../../atoms'
import { MlMediaProps } from '../ml-media'

export interface MlCardProps {
  /** Additional CSS classes to apply to the card for custom styling. */
  className?: string

  /** An object containing properties for the image displayed on the card. This can include different image sources for various screen sizes and alt text for accessibility. */
  image?: MlMediaProps

  /** The text label displayed on the card. This is typically used to name or describe the content of the card. */
  label: string

  /** An object containing properties for the link, including the URL (`href`) and an optional custom link wrapper component (`linkWrapper`). */
  linkProps: Pick<AtLinkProps, 'href' | 'linkWrapper'>
}
