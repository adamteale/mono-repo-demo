import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeCarouselSkeleton } from '../organisms/carousel'

interface TypeBasketFields {
  basketItemsLabels?: EntryFieldTypes.Object<{
    title?: string
    individualItemLabel?: string
    multipleItemsLabel?: string
  }>
  emptyBasketLabels?: EntryFieldTypes.Object<{
    title?: string
    subtitle?: string
    buttonLabel?: string
    buttonActionUrl?: string
  }>
  orderSummaryLabels?: EntryFieldTypes.Object<{
    title?: string
    totalPrice?: string
    buttonLabel?: string
    buttonActionUrl?: string
  }>
  orderSummaryInfo?: EntryFieldTypes.Object<{
    subtotalLabel?: string
    subtotalTooltipContent?: string
    shippingLabel?: string
    freeShippingLabel?: string
    shippingTooltipContent?: string
    discountsLabel?: string
    discountsTooltipContent?: string
    taxesLabel?: string
    taxesTooltipContent?: string
  }>
  bottomContent?: EntryFieldTypes.EntryLink<TypeCarouselSkeleton>
}

export type TypeBasketSkeleton = EntrySkeletonType<TypeBasketFields, 'tmBasket'>
export type ContentfulBasket = Entry<TypeBasketSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
