import { WithImage } from '../../../../../types'
import { OrSearchItem } from '../../../or-search.types'

export interface CardSearchItemProps extends WithImage {
  link: OrSearchItem['link']
  name: string
  shortDescription?: string
  price: string
  originalPrice?: string
  discountPercentage?: number
  discountLabel?: string
  className?: string
  dataTestId?: string
  onClick?: () => void
}
