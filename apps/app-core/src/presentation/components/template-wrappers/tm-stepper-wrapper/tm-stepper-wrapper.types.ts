import { CMSOrderDetails, CMSPaymentOptions, CMSShippingInfo, CMSStepper } from '@cms-types/common'
import { AddressDto } from '../../../types'
import { ShippingMethod } from '../../../types/basket/responses/shipping-method'

export interface TmStepperWrapperProps {
  template: CMSStepper
}

// Update this with tmShippingInfo form data
export interface ShippingInfoForm {
  email?: string
  billingAddress?: AddressDto
  shippingAddress?: AddressDto
  shippingSameAsBilling?: boolean
  deliveryMethod?: {
    arrivesDate?: string
    deliveryType?: string
    shippingPrice?: string
  }
}

// Update this with tmPayment form data
export interface PaymentForm {
  payMethodName?: string
  payMethodImage?: string
  cardNumber?: string
  cardName?: string
  expirationDate?: string
  securityCode?: string
}

export type StepperData = (ShippingInfoForm & ShippingMethod) | ShippingInfoForm | PaymentForm

export type StepperTemplatesId = 'tmShippingInfo' | 'tmPaymentOptions' | 'tmOrderDetail'

export interface TmStepState {
  label: string
  data: StepperData
}

export interface TemplateRendererProps {
  id: StepperTemplatesId | undefined
  template: CMSOrderDetails | CMSPaymentOptions | CMSShippingInfo | undefined
}
