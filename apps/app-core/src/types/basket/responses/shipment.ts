import { Address } from './address'
import { DeliveryLeadTime } from './delivery-lead-time'
import { ShippingMethod } from './shipping-method'

export interface Shipment {
  id?: string
  deliveryLeadTime?: DeliveryLeadTime
  shippingMethod?: ShippingMethod
  shippingAddress: Address
}
