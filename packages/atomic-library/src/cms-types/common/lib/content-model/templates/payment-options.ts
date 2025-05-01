export interface CMSPaymentOptions {
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
  orderSummaryLabels?: {
    title?: string
    totalPrice?: string
  }
  paymentOptionsTitle?: string
  copyrightText?: string
  paymentOptions?: {
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
  }
  contentTypeId?: string
}
