export type ShippingInfoFormFields = {
  billingTitle?: string
  shippingTitle?: string
  contactTitle?: string
  firstNameLabel?: string
  firstNamePlaceholder?: string
  lastNameLabel?: string
  lastNamePlaceholder?: string
  emailLabel?: string
  emailPlaceholder?: string
  addressLabel?: string
  addressPlaceholder?: string
  streetNumberLabel?: string
  streetNumberPlaceholder?: string
  addressAditionalInfoLabel?: string
  addressAditionalInfoPlaceholder?: string
  countryLabel?: string
  countryPlaceholder?: string
  stateLabel?: string
  statePlaceholder?: string
  cityLabel?: string
  cityPlaceholder?: string
  zipCodeLabel?: string
  zipCodePlaceholder?: string
  phoneNumberLabel?: string
  phoneNumberPlaceholder?: string
  useAsBillingLabel?: string
  buttonLabel?: string
}

export interface CMSShippingInfo {
  formLabels?: ShippingInfoFormFields
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
    totalPriceLabel?: string
    buttonLabel?: string
    buttonActionUrl?: string
  }
  copyrightText?: string
  contentTypeId?: string
}
