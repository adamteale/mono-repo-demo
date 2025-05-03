import { CMSOrderDetails, CMSPaymentOptions, CMSShippingInfo } from '../templates'

export interface CMSStep {
  label: string
  template: CMSOrderDetails | CMSShippingInfo | CMSPaymentOptions
  contentTypeId?: string
}
