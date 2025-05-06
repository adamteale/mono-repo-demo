import { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful'

interface TypeOrderDetailFields {
  orderDetailLabels?: EntryFieldTypes.Object<{
    title?: string
    emailLabel?: string
    shippingAddressLabel?: string
    billingAddressLabel?: string
    deliveryMethodLabel?: string
    paymentMethodLabel?: string
    privacyPolicyLabel?: string
    buttonLabel?: string
    editButtonLabel?: string
    deliveryArrivalLabel?: string
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
  orderSummaryLabels?: EntryFieldTypes.Object<{
    title?: string
    totalPrice?: string
  }>
  copyrightText?: EntryFieldTypes.Symbol
}

export type TypeOrderDetailSkeleton = EntrySkeletonType<TypeOrderDetailFields, 'tmOrderDetail'>

export type ContentfulOrderDetail = Entry<TypeOrderDetailSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
