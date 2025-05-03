import { CMSCarousel } from '../organisms'

export interface CMSBasket {
  basketItemsLabels?: {
    title?: string
    individualItemLabel?: string
    multipleItemsLabel?: string
  }
  emptyBasketLabels?: {
    title?: string
    subtitle?: string
    buttonLabel?: string
    buttonActionUrl?: string
  }
  orderSummaryLabels?: {
    title?: string
    totalPrice?: string
    buttonLabel?: string
    buttonActionUrl?: string
  }
  orderSummaryInfo?: {
    subtotalLabel?: string
    subtotalTooltipContent?: string
    shippingLabel?: string
    freeShippingLabel?: string
    shippingTooltipContent?: string
    discountsLabel?: string
    discountsTooltipContent?: string
    taxesLabel?: string
    taxesTooltipContent?: string
  }
  bottomContent?: CMSCarousel
  contentTypeId?: string
}
