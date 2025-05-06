import { AtLinkProps } from '@components-library/common'
import { MlCardBasketProps } from '../../molecules'

export interface OrPopUpBasketProps {
  title: string
  itemsLabel?: string
  leftButton?: AtLinkProps
  rightButton?: AtLinkProps
  subtotalPriceLabel: string
  originalSubtotalPrice?: string
  subtotalPrice: string
  items?: MlCardBasketProps[]
  dataTestId?: string
  isVisible?: boolean
  className?: string
  handleCloseBasket?: () => void
}
