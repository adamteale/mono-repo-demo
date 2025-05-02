import { CMSBasket } from '@cms-types/common'
import { BasketState } from '../../context/basket/types'

export const getShippingPriceLabel = (
  basketState: BasketState,
  template: CMSBasket,
  defaultFreeShippingLabel = 'FREE',
) => {
  const shippingPrice = basketState.basket?.shipments?.[0].shippingMethod?.price
  const freeShippingLabel = template.orderSummaryInfo?.freeShippingLabel ?? defaultFreeShippingLabel

  if (!shippingPrice || shippingPrice.amount === 0) return freeShippingLabel

  return shippingPrice.formatted
}
