import { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful'

interface TypePaymentOptionsFields {
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
  paymentOptionsTitle?: EntryFieldTypes.Symbol
  copyrightText?: EntryFieldTypes.Symbol
  paymentOptions?: EntryFieldTypes.Object<{
    creditDebitLabel?: string
    cardNumberInputLabel?: string
    cardNumberInputPlaceholder?: string
    cardNumberInputErrorText?: string
    nameOnCardInputLabel?: string
    nameOnCardInputPlaceholder?: string
    nameOnCardInputErrorText?: string
    expirationDateInputLabel?: string
    expirationDateInputPlaceholder?: string
    expirationDateInputErrorText?: string
    securityCodeInputLabel?: string
    securityCodeInputPlaceholder?: string
    securityCodeInputErrorText?: string
    creditDebitButton?: string
    paypalLabel?: string
    paypalDescription?: string
    paypalButton?: string
    googleLabel?: string
    googleDescription?: string
    googleButton?: string
    appleLabel?: string
    appleDescription?: string
    appleButton?: string
  }>
}

export type TypePaymentOptionsSkeleton = EntrySkeletonType<TypePaymentOptionsFields, 'tmPaymentOptions'>

export type ContentfulPaymentOptions = Entry<TypePaymentOptionsSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
