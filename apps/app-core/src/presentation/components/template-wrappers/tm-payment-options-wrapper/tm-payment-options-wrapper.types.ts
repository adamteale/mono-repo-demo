import { CMSPaymentOptions } from '@cms-types/common'

export interface TmPaymentOptionsWrapperProps {
  template: CMSPaymentOptions
}

export enum PaymentMethods {
  CARD = 'debit-credit-card',
  PAYPAL = 'paypal',
  GOOGLE = 'google-pay',
  APPLE = 'apple-pay',
}
