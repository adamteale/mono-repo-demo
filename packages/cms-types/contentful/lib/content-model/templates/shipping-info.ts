import { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful'

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

interface TypeShippingInfoFields {
  formLabels?: EntryFieldTypes.Object<ShippingInfoFormFields>
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
    totalPriceLabel?: string
    buttonLabel?: string
    buttonActionUrl?: string
  }>
  copyrightText?: string
}

export type TypeShippingInfoSkeleton = EntrySkeletonType<TypeShippingInfoFields, 'tmShippingInfo'>

export type ContentfulShippingInfo = Entry<TypeShippingInfoSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
